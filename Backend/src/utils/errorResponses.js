// utils/errorResponses.js
/**
 * Centralized error response messages
 * Provides consistent error responses across the application
 */

module.exports = {
    // Authentication errors
    INVALID_CREDENTIALS: {
        success: false,
        message: "Invalid credentials"
    },

    // Registration errors
    REGISTRATION_FAILED: {
        success: false,
        message: "Registration failed"
    },

    MISSING_REQUIRED_FIELDS: {
        success: false,
        message: "Missing required fields"
    },

    INVALID_INPUT_TYPES: {
        success: false,
        message: "Invalid input types"
    },

    INVALID_EMAIL_FORMAT: {
        success: false,
        message: "Invalid email format"
    },

    WEAK_PASSWORD: {
        success: false,
        message: "Password must be at least 8 characters"
    },

    // System errors
    DATABASE_CONNECTION_FAILED: {
        success: false,
        message: "Database connection failed"
    },

    SESSION_NOT_AVAILABLE: {
        success: false,
        message: "Session not available"
    },

    SERVER_ERROR: {
        success: false,
        message: "An error occurred"
    },
};
