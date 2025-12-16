// config/security.js
/**
 * Security configuration for the application
 * Centralizes security-related constants and settings
 */

module.exports = {
    // Bcrypt salt rounds for password hashing
    // Higher values = more secure but slower
    // Recommended: 10-12 for production
    BCRYPT_SALT_ROUNDS: parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10),

    // Password validation rules
    PASSWORD_MIN_LENGTH: parseInt(process.env.PASSWORD_MIN_LENGTH || '8', 10),

    // Email validation regex
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};
