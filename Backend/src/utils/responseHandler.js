/**
 * Response Handler Utility
 * Standardized success and error response formatting for controllers
 */

import { codes } from './errorCodes.js';

/**
 * Format successful response
 * @param {Object} data - Response data payload
 * @param {Object} codeObj - Code object from codes.SUCCESS (default: OK)
 * @returns {Object} Formatted response
 */
export const successResponse = (data = null, codeObj = codes.SUCCESS.OK) => {
  return {
    statusCode: codeObj.status,
    code: codeObj.key,
    domain: 'SUCCESS',
    message: codeObj.key,
    data
  };
};

/**
 * Format error response
 * @param {Error|Object} err - Error object or custom error
 * @param {Object} codeObj - Code object from codes.ERROR (default: INTERNAL_SERVER_ERROR)
 * @returns {Object} Formatted response
 */
export const errorResponse = (err, codeObj = codes.ERROR.GENERIC.INTERNAL_SERVER_ERROR) => {
  return {
    statusCode: codeObj.status,
    code: codeObj.key,
    domain: err.domain || 'GENERIC',
    message: err.message || 'Internal Server Error'
  };
};

/**
 * Send success response (use in controller)
 * @param {Object} reply - Fastify reply object
 * @param {Object} data - Response data
 * @param {Object} codeObj - Code object from codes.SUCCESS
 * @param {Object} reqLog - Request logger (optional, for logging)
 */
export const sendSuccess = (reply, data, codeObj = codes.SUCCESS.OK, reqLog = null) => {
  const response = successResponse(data, codeObj);
  if (reqLog) {
    reqLog.info({ statusCode: response.statusCode, code: response.code }, `response:success`);
  }
  return reply.code(response.statusCode).send(response);
};

/**
 * Send error response (use in controller catch block)
 * @param {Object} reply - Fastify reply object
 * @param {Error} err - Error object
 * @param {Object} codeObj - Code object from codes.ERROR
 * @param {Object} reqLog - Request logger (optional, for logging)
 */
export const sendError = (reply, err, codeObj = codes.ERROR.GENERIC.INTERNAL_SERVER_ERROR, reqLog = null) => {
  const response = errorResponse(err, codeObj);
  if (reqLog) {
    reqLog.error(
      { statusCode: response.statusCode, code: response.code, err: err?.message },
      `response:error`
    );
  }
  return reply.code(response.statusCode).send(response);
};

export default {
  successResponse,
  errorResponse,
  sendSuccess,
  sendError
};
