// services/signin.js
/**
 * Authentication service for user registration and login
 * 
 * SECURITY NOTE: This service should be protected by:
 * - Rate limiting middleware (e.g., express-rate-limit)
 * - Account lockout after failed attempts
 */

const pool = require("../config/db");
const bcrypt = require("bcrypt");
const { logger } = require("../middleware/pinoLogger");
const { BCRYPT_SALT_ROUNDS } = require("../config/security");
const errorResponses = require("../utils/errorResponses");
const {
  maskEmail,
  validateRegistrationInput,
  validateLoginInput
} = require("../utils/validationHelpers");

module.exports = {
  /**
   * Registers a new user with role assignment
   * @param {Object} params - Registration parameters
   * @param {string} params.username - Username
   * @param {string} params.email - Email address
   * @param {string} params.password - Plain text password (will be hashed)
   * @param {number} params.roleId - Role ID to assign
   * @param {Object} params.reqLog - Request logger instance
   * @returns {Promise<Object>} Registration result
   */
  registerUser: async ({ username, email, password, roleId, reqLog }) => {
    const log = reqLog || logger;
    let client;

    try {
      const maskedEmail = maskEmail(email);
      log.info({ username, maskedEmail, roleId }, 'signin.registerUser: Start');

      // Input validation
      const validation = validateRegistrationInput({ username, email, password, roleId });
      if (!validation.isValid) {
        log.warn({ error: validation.error }, 'signin.registerUser: validation_failed');
        return errorResponses[validation.error];
      }

      // Acquire database connection
      client = await pool.connect();
      if (!client) {
        log.error('signin.registerUser: database_connection_failed');
        return errorResponses.DATABASE_CONNECTION_FAILED;
      }

      await client.query("BEGIN");

      // Hash password with configured salt rounds
      const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);

      // Insert User
      const userQuery = `
        INSERT INTO user_master (username, email, password)
        VALUES ($1, $2, $3)
        RETURNING id, username, email
      `;

      const userResult = await client.query(userQuery, [
        username,
        email,
        hashedPassword,
      ]);

      const userId = userResult.rows[0].id;

      // Insert Role Relation
      await client.query(
        `INSERT INTO user_role_master (user_id, role_id) VALUES ($1, $2)`,
        [userId, roleId]
      );

      await client.query("COMMIT");
      log.info({ userId }, 'signin.registerUser: Success');

      return { success: true, user: userResult.rows[0] };
    } catch (err) {
      if (client) {
        await client.query("ROLLBACK");
      }
      log.error({ err: err.message }, 'signin.registerUser: error');
      throw err;
    } finally {
      if (client) {
        client.release();
      }
    }
  },

  /**
   * Authenticates a user and creates a session
   * @param {Object} params - Login parameters
   * @param {string} params.email - Email address
   * @param {string} params.password - Plain text password
   * @param {Object} params.session - Express session object
   * @param {Object} params.reqLog - Request logger instance
   * @returns {Promise<Object>} Login result
   */
  loginUser: async ({ email, password, session, reqLog }) => {
    const log = reqLog || logger;

    try {
      const maskedEmail = maskEmail(email);
      log.info({ maskedEmail }, 'signin.loginUser: Start');

      // Input validation
      const validation = validateLoginInput({ email, password });
      if (!validation.isValid) {
        log.warn({ error: validation.error }, 'signin.loginUser: validation_failed');
        return errorResponses[validation.error];
      }

      // Session validation
      if (!session) {
        log.error('signin.loginUser: session_not_available');
        return errorResponses.SESSION_NOT_AVAILABLE;
      }

      // Fetch user from database
      const result = await pool.query(
        "SELECT * FROM user_master WHERE email = $1",
        [email]
      );

      if (result.rows.length === 0) {
        log.warn({ maskedEmail }, 'signin.loginUser: user_not_found');
        return errorResponses.INVALID_CREDENTIALS;
      }

      const user = result.rows[0];

      // Step 1: Check old plaintext password (legacy migration)
      // TODO: Remove this block after all passwords are migrated
      if (password === user.password) {
        const newHash = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
        await pool.query(
          "UPDATE user_master SET password = $1 WHERE id = $2",
          [newHash, user.id]
        );

        user.password = newHash;
        log.debug({ userId: user.id }, 'signin.loginUser: password_upgraded');
      }

      // Step 2: Bcrypt password verification
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        log.warn({ userId: user.id }, 'signin.loginUser: invalid_password');
        return errorResponses.INVALID_CREDENTIALS;
      }

      // Set session
      session.userId = user.id;

      log.info({ userId: user.id }, 'signin.loginUser: End - Success');

      return {
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };
    } catch (err) {
      const maskedEmail = maskEmail(email);
      log.error({ err: err.message, maskedEmail }, 'signin.loginUser: error');
      throw err;
    }
  }

};
