import messages from '../locales/errors.en.json' with { type: 'json' };

export const codes = {
  SUCCESS: {
    OK: { status: 200, key: 'OK' },
    CREATED: { status: 201, key: 'CREATED' },
    RESUBSCRIPTION_SUCCESS: { status: 200, key: 'RESUBSCRIPTION_SUCCESS' },
    SUBSCRIPTION_SUCCESS: { status: 200, key: 'SUBSCRIPTION_SUCCESS' },
    NO_CONTENT: { status: 204, key: 'NO_CONTENT' },
    VERIFIED: { status: 200, key: 'VERIFIED' },
    WELCOME_USER: { status: 200, key: 'WELCOME_USER' },
    UPDATED: { status: 200, key: 'UPDATED' },
    DELETED: { status: 200, key: 'DELETED' },
    OTP_SENT: { status: 200, key: 'OTP_SENT' },
    OTP_SENT_EMAIL: { status: 200, key: 'OTP_SENT_EMAIL' },
    OTP_SENT_MOBILE: { status: 200, key: 'OTP_SENT_MOBILE' },
    OTP_VERIFIED: { status: 200, key: 'OTP_VERIFIED' },
    PROFILE_UPDATED: { status: 200, key: 'PROFILE_UPDATED' },
    CONTACT_SUBMITTED: { status: 200, key: 'CONTACT_SUBMITTED' },
    PASSWORD_RESET_SUCCESS: { status: 200, key: 'PASSWORD_RESET_SUCCESS' },
    PASSWORD_RESET_LINK_SENT: { status: 200, key: 'PASSWORD_RESET_LINK_SENT' },
  },
  REVIEW_SUCCESS: {
    OK: { status: 200, key: 'OK' },
    CREATED: { status: 201, key: 'CREATED' },
    UPDATED: { status: 200, key: 'UPDATED' },
    DELETED: { status: 200, key: 'DELETED' },
    ADDED: { status: 200, key: 'ADDED' },
    FETCHED: { status: 200, key: 'REVIEWS_FETCHED' }
  },
  ERROR: {
    GENERIC: {
      INTERNAL_SERVER_ERROR: { status: 500, key: 'INTERNAL_SERVER_ERROR' },
      BAD_REQUEST: { status: 400, key: 'BAD_REQUEST' },
      UNAUTHORIZED: { status: 401, key: 'UNAUTHORIZED' },
      FORBIDDEN: { status: 403, key: 'FORBIDDEN' },
      NOT_FOUND: { status: 302, key: 'NOT_FOUND' },
    },
    USER: {
      USER_NOT_FOUND: { status: 302, key: 'USER_NOT_FOUND' },
      INVALID_USER: { status: 308, key: 'INVALID_USER_EMAIL' },
      INVALID_USER_EMAIL: { status: 302, key: 'INVALID_USER_EMAIL' },
      INVALID_USER_PHONE: { status: 302, key: 'INVALID_USER_PHONE' },
      INVALID_EMAIL: { status: 308, key: 'INVALID_EMAIL' },
      INVALID_PASSWORD: { status: 308, key: 'INVALID_PASSWORD' },
      PROFILE_UPDATE_FAILED: { status: 300, key: 'PROFILE_UPDATE_FAILED' },
      USER_NOT_ACTIVE: { status: 303, key: 'USER_NOT_ACTIVE' },
      PASSWORD_INVALID: { status: 302, key: 'PASSWORD_INVALID' },
      PASSWORD_MISMATCH: { status: 301, key: 'PASSWORD_MISMATCH' },
      PASSWORD_REQUIRED: { status: 301, key: 'PASSWORD_REQUIRED' },
      PASSWORD_LINK_USED: {status: 302, key: 'PASSWORD_LINK_USED'},
      RESET_LINK_EXPIRED: {status: 300, key: 'RESET_LINK_EXPIRED'},
      SAME_PASSWORD: { status: 301, key: 'SAME_PASSWORD' },
      PASSWORD_CHANGE_BLOCKED: { status: 400, key: 'PASSWORD_CHANGE_BLOCKED' },
      MISSING_USER_ID_OR_PASSWORD: { status: 301, key: 'MISSING_USER_ID_OR_PASSWORD' },
      EMAIL_ALREADY_EXISTS: { status: 309, key: 'EMAIL_ALREADY_EXISTS' },
      PHONE_ALREADY_EXISTS: { status: 309, key: 'PHONE_ALREADY_EXISTS' },
      EMAIL_CHANGE_BLOCKED: { status: 300, key: 'EMAIL_CHANGE_BLOCKED' },
      SAME_VALUE_UPDATE: { status: 300, key: 'SAME_VALUE_UPDATE' },
      USER_ID_AND_PASSWORD_REQUIRED: { status: 301, key: 'USER_ID_AND_PASSWORD_REQUIRED' },
      OTP_EXPIRED: { status: 306, key: 'OTP_EXPIRED' },
      OTP_NOT_PROVIDED: { status: 306, key: 'OTP_NOT_PROVIDED' },
      INVALID_OTP: { status: 306, key: 'INVALID_OTP' },
      EMAIL_REGISTERED_WITH_SOCIAL: { status: 309, key: 'EMAIL_REGISTERED_WITH_SOCIAL' },
      SOCIAL_USER_MANUAL_LOGIN_BLOCKED: { status: 301, key: 'SOCIAL_USER_MANUAL_LOGIN_BLOCKED' },
      MANUAL_LOGIN_REQUIRED: { status: 301, key: 'MANUAL_LOGIN_REQUIRED' },
      EMAIL_OR_PHONE_REQUIRED: { status: 301, key: 'EMAIL_OR_PHONE_REQUIRED' },
      INVALID_JWT: { status: 401, key: 'INVALID_JWT' },
      UNAUTHORIZED: { status: 401, key: 'UNAUTHORIZED' },
      DEFAULT_ADDRESS_DELETE: { status: 301, key: 'DEFAULT_ADDRESS_DELETE' },
      SUBSCRIPTION_COOLDOWN: {status: 309,key: "SUBSCRIPTION_COOLDOWN"},
      ALREADY_SUBSCRIBED:{status:309,key:"ALREADY_SUBSCRIBED"},
      ALREADY_PENDING_SUBSCRIBED:{status:309,key:"ALREADY_PENDING_SUBSCRIBED"},
      SUBSCRIBE_FAILED:{status:309,key:"SUBSCRIBE_FAILED"},
      OTP_NOT_FOUND: {status: 306, key: 'OTP_NOT_FOUND' },
      OTP_INVALID: {status: 306, key: 'OTP_INVALID' },
      OTP_NOT_VALID: {status: 306, key: 'OTP_NOT_VALID' },
      TOO_MANY_REQUESTS: {status: 306, key: 'TOO_MANY_REQUESTS' },
      CONTACT_SUBMITTED_FAILED:{status:500, key:"CONTACT_SUBMITTED_FAILED"},
      FST_REQ_FILE_TOO_LARGE:{status:413, key:"FST_REQ_FILE_TOO_LARGE"},
      SHIPPING_NOT_AVAILABLE: { status: 302, key: 'SHIPPING_NOT_AVAILABLE' },
      
      INVALID_USER_ADDRESS: { status: 302,key: 'INVALID_USER_ADDRESS' },
      INVALID_TOKEN: { status: 401, key: 'INVALID_TOKEN' },
      EMAIL_REQUIRED: { status: 301, key: 'EMAIL_REQUIRED'},
      EMAIL_FAILED: { status: 300 ,key: 'EMAIL_FAILED' },
      TOKEN_REQUIRED: { status: 401,key: 'TOKEN_REQUIRED' },
      USER_ID_REQUIRED: { status: 301, key: 'USER_ID_REQUIRED' },
      ADDRESS_NOT_FOUND: { status: 302, key: 'ADDRESS_NOT_FOUND' },
      ADDRESS_UPDATE_FAILURE: { status: 300, key: 'ADDRESS_UPDATE_FAILURE' },
      SESSION_ID_REQUIRED: { status: 301, key: 'SESSION_ID_REQUIRED' },
    },
    PRODUCT: {
      PRODUCT_NOT_FOUND: { status: 302, key: 'PRODUCT_NOT_FOUND' },
      BUNDLE_NOT_FOUND: { status: 302, key: 'BUNDLE_NOT_FOUND' },
      UNAUTHORIZED: { status: 401, key: 'UNAUTHORIZED' },  
    },
    REVIEW: {
      REVIEW_NOT_FOUND: { status: 302, key: 'REVIEW_NOT_FOUND' },
      INVALID_REVIEW: { status: 400, key: 'INVALID_REVIEW' },
      UNAUTHORIZED: { status: 401, key: 'UNAUTHORIZED' },
      BAD_REQUEST: { status: 400, key: 'BAD_REQUEST' }
    },
    ADMIN: {
      USER_NOT_FOUND: { status: 302, key: 'USER_NOT_FOUND' },
      INVALID_USER: { status: 308, key: 'INVALID_USER_EMAIL' },
      INVALID_USER_EMAIL: { status: 302, key: 'INVALID_USER_EMAIL' },
      INVALID_USER_PHONE: { status: 302, key: 'INVALID_USER_PHONE' },
      INVALID_EMAIL: { status: 308, key: 'INVALID_EMAIL' },
      INVALID_PASSWORD: { status: 308, key: 'INVALID_PASSWORD' },
      PROFILE_UPDATE_FAILED: { status: 300, key: 'PROFILE_UPDATE_FAILED' },
      USER_NOT_ACTIVE: { status: 303, key: 'USER_NOT_ACTIVE' },
      PASSWORD_INVALID: { status: 302, key: 'PASSWORD_INVALID' },
      PASSWORD_MISMATCH: { status: 301, key: 'PASSWORD_MISMATCH' },
      PASSWORD_REQUIRED: { status: 301, key: 'PASSWORD_REQUIRED' },
      PASSWORD_LINK_USED: {status: 302, key: 'PASSWORD_LINK_USED'},
      RESET_LINK_EXPIRED: {status: 300, key: 'RESET_LINK_EXPIRED'},
      SAME_PASSWORD: { status: 301, key: 'SAME_PASSWORD' },
      PASSWORD_CHANGE_BLOCKED: { status: 400, key: 'PASSWORD_CHANGE_BLOCKED' },
      MISSING_USER_ID_OR_PASSWORD: { status: 301, key: 'MISSING_USER_ID_OR_PASSWORD' },
      EMAIL_ALREADY_EXISTS: { status: 309, key: 'EMAIL_ALREADY_EXISTS' },
      PHONE_ALREADY_EXISTS: { status: 309, key: 'PHONE_ALREADY_EXISTS' },
      EMAIL_CHANGE_BLOCKED: { status: 300, key: 'EMAIL_CHANGE_BLOCKED' },
      SAME_VALUE_UPDATE: { status: 300, key: 'SAME_VALUE_UPDATE' },
      USER_ID_AND_PASSWORD_REQUIRED: { status: 301, key: 'USER_ID_AND_PASSWORD_REQUIRED' },
      OTP_EXPIRED: { status: 306, key: 'OTP_EXPIRED' },
      OTP_NOT_PROVIDED: { status: 306, key: 'OTP_NOT_PROVIDED' },
      INVALID_OTP: { status: 306, key: 'INVALID_OTP' },
      EMAIL_REGISTERED_WITH_SOCIAL: { status: 309, key: 'EMAIL_REGISTERED_WITH_SOCIAL' },
      SOCIAL_USER_MANUAL_LOGIN_BLOCKED: { status: 301, key: 'SOCIAL_USER_MANUAL_LOGIN_BLOCKED' },
      MANUAL_LOGIN_REQUIRED: { status: 301, key: 'MANUAL_LOGIN_REQUIRED' },
      EMAIL_OR_PHONE_REQUIRED: { status: 301, key: 'EMAIL_OR_PHONE_REQUIRED' },
      INVALID_JWT: { status: 401, key: 'INVALID_JWT' },
      UNAUTHORIZED: { status: 401, key: 'UNAUTHORIZED' },
      DEFAULT_ADDRESS_DELETE: { status: 301, key: 'DEFAULT_ADDRESS_DELETE' },
      SUBSCRIPTION_COOLDOWN: {status: 309,key: "SUBSCRIPTION_COOLDOWN"},
      ALREADY_SUBSCRIBED:{status:309,key:"ALREADY_SUBSCRIBED"},
      ALREADY_PENDING_SUBSCRIBED:{status:309,key:"ALREADY_PENDING_SUBSCRIBED"},
      SUBSCRIBE_FAILED:{status:309,key:"SUBSCRIBE_FAILED"},
      OTP_NOT_FOUND: {status: 306, key: 'OTP_NOT_FOUND' },
      OTP_INVALID: {status: 306, key: 'OTP_INVALID' },
      OTP_NOT_VALID: {status: 306, key: 'OTP_NOT_VALID' },
      TOO_MANY_REQUESTS: {status: 306, key: 'TOO_MANY_REQUESTS' },
      CONTACT_SUBMITTED_FAILED:{status:500, key:"CONTACT_SUBMITTED_FAILED"},
      FST_REQ_FILE_TOO_LARGE:{status:413, key:"FST_REQ_FILE_TOO_LARGE"},
      SHIPPING_NOT_AVAILABLE: { status: 302, key: 'SHIPPING_NOT_AVAILABLE' },
      
      INVALID_USER_ADDRESS: { status: 302,key: 'INVALID_USER_ADDRESS' },
      EMAIL_REQUIRED: { status: 301, key: 'EMAIL_REQUIRED'},
      EMAIL_FAILED: { status: 300 ,key: 'EMAIL_FAILED' },
      TOKEN_REQUIRED: { status: 401,key: 'TOKEN_REQUIRED' },
      INVALID_TOKEN: { status: 401 , key: 'INVALID_TOKEN' },
      USER_ID_REQUIRED: { status: 301, key: 'USER_ID_REQUIRED' },
      ADDRESS_NOT_FOUND: { status: 302, key: 'ADDRESS_NOT_FOUND' },
      ADDRESS_UPDATE_FAILURE: { status: 300, key: 'ADDRESS_UPDATE_FAILURE' },
      SESSION_ID_REQUIRED: { status: 301, key: 'SESSION_ID_REQUIRED' },
    },
  },
};


export function getMessage(type, domain, key) {
  if (!messages[type]) return 'Unknown';
  if (domain) return messages[type][domain]?.[key] || 'Unknown message';
  return messages[type][key] || 'Unknown message';
}

/**
 * Get status code and message for a given error key.
 * Usage: getErrorResponse('ERROR', 'PRODUCT', 'PRODUCT_NOT_FOUND')
 * Returns: { status, message }
 */
export function getErrorResponse(type, domain, key) {
  let status = 500;
  let message = 'Unknown error';
  if (codes[type]?.[domain]?.[key]) {
    status = codes[type][domain][key].status;
    message = getMessage(type, domain, key);
  }
  return { status, message };
}
