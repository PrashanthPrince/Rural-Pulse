 /**
 * config.js
 * Central env validation & configuration access.
 * All endpoints/envs are REQUIRED.
 */
import 'dotenv/config';

function required(name) {
  const v = process.env[name];
  if (!v || v.trim() === '') throw new Error(`Missing required env: ${name}`);
  return v;
}

// Main configuration object
const cfg = {

  // General environment settings
  env: process.env.NODE_ENV || 'development',
  // Allow PORT to be optional for local development (default 3000)
  port: parseInt(process.env.PORT || '3001', 10),

  // Rate limiting configuration
//   rateLimitOtpMax: parseInt(required('RATE_LIMIT_OTP_MAX'), 10),
//   rateLimitOtpWindowSec: parseInt(required('RATE_LIMIT_OTP_WINDOW_SEC'), 10),
//   rateLimitPwdMax: parseInt(required('RATE_LIMIT_PWD_MAX'), 10),
//   rateLimitPwdWindowSec: parseInt(required('RATE_LIMIT_PWD_WINDOW_SEC'), 10),

//   // Strapi cache eviction webhook secret
//   strapiWebhookSecret: required('STRAPI_WEBHOOK_SECRET'),

  // Logging configuration
  logLevel: required('LOG_LEVEL'),

  // Strapi population/query strings for URL builders
//   showDetailedErrors: process.env.NODE_ENV === 'development',
};

export default cfg;