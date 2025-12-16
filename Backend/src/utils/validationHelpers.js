// utils/validationHelpers.js
/**
 * Validation helper functions
 * Provides reusable validation logic across services
 */

const { EMAIL_REGEX, PASSWORD_MIN_LENGTH } = require('../config/security');

/**
 * Masks email address for secure logging
 * Example: john.doe@example.com -> jo***@example.com
 * @param {string} email - Email address to mask
 * @returns {string} Masked email address
 */
const maskEmail = (email) => {
    if (!email || typeof email !== 'string') {
        return '***';
    }
    return email.replace(/(.{2})(.*)(@.*)/, '$1***$3');
};

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid, false otherwise
 */
const isValidEmail = (email) => {
    return EMAIL_REGEX.test(email);
};

/**
 * Validates password strength
 * @param {string} password - Password to validate
 * @returns {boolean} True if valid, false otherwise
 */
const isValidPassword = (password) => {
    return password && password.length >= PASSWORD_MIN_LENGTH;
};

/**
 * Validates registration input
 * @param {Object} params - Registration parameters
 * @param {string} params.username - Username
 * @param {string} params.email - Email address
 * @param {string} params.password - Password
 * @param {number} params.roleId - Role ID
 * @returns {Object} Validation result with isValid and error properties
 */
const validateRegistrationInput = ({ username, email, password, roleId }) => {
    // Check for missing fields
    if (!username || !email || !password || !roleId) {
        return { isValid: false, error: 'MISSING_REQUIRED_FIELDS' };
    }

    // Check input types
    if (typeof username !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
        return { isValid: false, error: 'INVALID_INPUT_TYPES' };
    }

    // Validate email format
    if (!isValidEmail(email)) {
        return { isValid: false, error: 'INVALID_EMAIL_FORMAT' };
    }

    // Validate password strength
    if (!isValidPassword(password)) {
        return { isValid: false, error: 'WEAK_PASSWORD' };
    }

    return { isValid: true };
};

/**
 * Validates login input
 * @param {Object} params - Login parameters
 * @param {string} params.email - Email address
 * @param {string} params.password - Password
 * @returns {Object} Validation result with isValid and error properties
 */
const validateLoginInput = ({ email, password }) => {
    // Check for missing fields
    if (!email || !password) {
        return { isValid: false, error: 'MISSING_REQUIRED_FIELDS' };
    }

    // Check input types
    if (typeof email !== 'string' || typeof password !== 'string') {
        return { isValid: false, error: 'INVALID_INPUT_TYPES' };
    }

    return { isValid: true };
};

module.exports = {
    maskEmail,
    isValidEmail,
    isValidPassword,
    validateRegistrationInput,
    validateLoginInput,
};
