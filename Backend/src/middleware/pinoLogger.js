const pino = require('pino');
const crypto = require('crypto');
const config = require('../../config.js');

function buildLogger() {
  const redactPaths = [
    'req.headers.authorization',
    'req.headers.cookie',
    'headers.authorization',
    'headers.cookie',
    'body.password',
    'body.otp',
    'body.currentPassword',
    'body.newPassword'
  ];
  const isDev = config.env !== 'production';
  return pino({
    level: config.logLevel || 'info',
    base: { service: 'node-gateway', env: config.env },
    redact: { paths: redactPaths, censor: '***' },
    transport: isDev ? { target: 'pino-pretty', options: { colorize: true } } : undefined
  });
}

// Create a top-level logger instance for use in services
const logger = buildLogger();

function makeTraceParent() {
  const version = '00';
  const traceId = crypto.randomBytes(16).toString('hex');
  const spanId = crypto.randomBytes(8).toString('hex');
  const flags = '01';
  return `${version}-${traceId}-${spanId}-${flags}`;
}

function ensureId(headerValue) {
  if (!headerValue) return crypto.randomUUID();
  return headerValue;
}

// Express middleware: attach req.log with trace IDs and log request_done on response
function loggerMiddleware(req, res, next) {
  const incomingTrace = req.headers['traceparent'] || req.headers['trace-parent'] || null;
  const traceparent = incomingTrace || makeTraceParent();
  const parsedTraceId = traceparent ? (traceparent.split('-')[1] || null) : null;
  const correlationId = ensureId(req.headers['x-correlation-id'] || req.headers['correlation-id'] || parsedTraceId);
  const requestId = ensureId(req.headers['x-request-id'] || req.headers['request-id'] || null);

  req.ids = { traceparent, correlationId, requestId };

  try {
    res.setHeader('traceparent', traceparent);
    if (correlationId) res.setHeader('x-correlation-id', correlationId);
    if (requestId) res.setHeader('x-request-id', requestId);
  } catch (e) {
    logger.error({ err: e }, 'Unexpected error');
    throw e;
  }

  const bindings = {
    method: req.method,
    url: req.originalUrl || req.url,
    sessionId: req.headers['x-session-id'] || req.headers['session-id'] || req.headers['session_id'] || '',
    traceparent,
    correlationId,
    requestId
  };

  try {
    req.log = logger.child ? logger.child(bindings) : logger;
  } catch (e) {
    logger.warn({ err: e }, 'Failed to create child logger, falling back');
    req.log = {
      info: (obj, msg) => logger.info({ ...bindings, ...(obj || {}) }, msg),
      warn: (obj, msg) => logger.warn({ ...bindings, ...(obj || {}) }, msg),
      error: (obj, msg) => logger.error({ ...bindings, ...(obj || {}) }, msg),
      debug: (obj, msg) => logger.debug({ ...bindings, ...(obj || {}) }, msg),
      bindings: () => bindings
    };
  }

  const start = Date.now();
  res.on('finish', () => {
    const t_ms = Date.now() - start;
    const sessionId = typeof req.log.bindings === 'function' ? (req.log.bindings().sessionId || '') : bindings.sessionId;
    const finalMsg = req.logMessage || 'request_done';  // Use custom message if set
    req.log.info({
      msg: finalMsg,
      status: res.statusCode,
      t_ms,
      traceparent: req.ids.traceparent,
      correlationId: req.ids.correlationId,
      requestId: req.ids.requestId,
      sessionId
    });
  });

  next();
}

// Helper to register logger hooks on a Fastify instance if you use Fastify elsewhere
function registerFastifyLogger(app) {
  if (!app || typeof app.addHook !== 'function') return;
  app.log = logger;

  app.addHook('onRequest', async (req, reply) => {
    const sessionId = req.headers['x-session-id'] || req.headers['session-id'] || req.headers['session_id'] || '';
    req.log = logger.child({ method: req.method, url: req.url, sessionId });
  });

  app.addHook('onResponse', async (req, reply) => {
    try {
      req.log.info({
        msg: 'request_done',
        status: reply.statusCode,
        t_ms: reply.getResponseTime ? reply.getResponseTime() : undefined,
        traceparent: req.ids?.traceparent,
        correlationId: req.ids?.correlationId,
        requestId: req.ids?.requestId,
        sessionId: req.log?.bindings?.().sessionId || '',
      });
    } catch (e) {
      logger.debug({ err: e }, 'request_done log failed');
    }
  });
}

module.exports = {
  logger,
  loggerMiddleware,
  registerFastifyLogger
};
