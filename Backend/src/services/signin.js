// services/signin.js
const pool = require("../config/db");
const bcrypt = require("bcrypt");
const { logger } = require("../middleware/pinoLogger");

module.exports = {
  registerUser: async ({ username, email, password, roleId, reqLog }) => {
    const client = await pool.connect();
    const log = reqLog || logger;

    try {
      log.info({ username, email, roleId }, 'signin.registerUser: Start');
      await client.query("BEGIN");

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

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

      // Insert Relation
      await client.query(
        `INSERT INTO user_role_master (user_id, role_id) VALUES ($1, $2)`,
        [userId, roleId]
      );

      await client.query("COMMIT");
      log.info({ userId }, 'signin.registerUser: Success');
      return { success: true, user: userResult.rows[0] };
    } catch (err) {
      await client.query("ROLLBACK");
      log.error({ err: err?.message }, 'signin.registerUser: error');
      throw err;
    } finally {
      client.release();
    }
  },

 // services/signin.js

loginUser: async ({ email, password, session, reqLog }) => {
  const log = reqLog || logger;
  log.info({ email }, 'signin.loginUser: Start');
  const result = await pool.query(
    "SELECT * FROM user_master WHERE email = $1",
    [email]
  );

  if (result.rows.length === 0) {
    log.warn({ email }, 'signin.loginUser: user_not_found');
    return { success: false, message: "Invalid credentials" };
  }

  const user = result.rows[0];

  //  Step 1: check old plaintext password
  if (password === user.password) {
    const newHash = await bcrypt.hash(password, 10);
    await pool.query(
      "UPDATE user_master SET password = $1 WHERE id = $2",
      [newHash, user.id]
    );

    
    user.password = newHash;
    log.debug({ userId: user.id }, 'signin.loginUser: password_upgraded');
  }

  //  Step 2: bcrypt check
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    log.warn({ userId: user.id }, 'signin.loginUser: invalid_password');
    return { success: false, message: "Invalid credentials" };
  }

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
}

};
