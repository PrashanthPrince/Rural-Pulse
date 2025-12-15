const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../utils/email");
const { FRONTEND_URL } = require("../config/config");
const messages = require("../utils/commonMsg");
const { logger } = require("../middleware/pinoLogger");

const SECRET = process.env.JWT_SECRET || "RESET_SECRET_123";

// ====================================================================
// SEND RESET PASSWORD EMAIL
// ====================================================================

exports.sendResetPassword = async (req, res) => {
  try {
    const { email, username } = req.body;

    if (!email || !username)
      return res.status(400).json({ message: messages.ERR_MISSING_EMAIL });

    // Validate email format
    const emailRegex = /^[A-Za-z0-9._%+-]{1,64}@[A-Za-z0-9.-]{1,253}\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ message: messages.ERR_INVALID_EMAIL });

    // Check user exists
    const result = await db.query(
      "SELECT id, email, username FROM user_master WHERE email = $1 AND username = $2",
      [email, username]
    );

    if (result.rows.length === 0)
      return res.status(404).json({ message: messages.ERR_EMAIL_NOT_FOUND });

    const user = result.rows[0];

    // Create token valid for 60 minutes
    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "60m" });

    const resetLink = `${FRONTEND_URL}/update-password?token=${token}`;
    logger.info({ resetLink }, "Password reset link");

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Password Reset Request - Rural Pulse",
      html: `
        <h2>Password Reset Request</h2>
        <p>Hi ${user.username},</p>
        <p>We received a request to reset your password. Click the link below to proceed:</p>
        <p><a href="${resetLink}" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Reset Password</a></p>
        <p>This link will expire in 60 minutes.</p>
        <p>If you didn't request this, please ignore this email.</p>
        <p>Best regards,<br>Rural Pulse Team</p>`
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return res.json({
      message: messages.MSG_RESET_SENT
    });

  } catch (err) {
    logger.error(err, 'Error in sendResetPassword');
    return res.status(500).json({ message: messages.ERR_SOMETHING_WENT_WRONG });
  }
};

// ====================================================================
// UPDATE PASSWORD USING TOKEN
// ====================================================================

exports.updatePassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    if (!token || !password)
      return res.status(400).json({ message: messages.ERR_TOKEN_PASSWORD_REQUIRED });

    let decoded;
    try {
      decoded = jwt.verify(token, SECRET);
    } catch (err) {
      logger.error(err, "Invalid or expired token");
      return res.status(400).json({ message: messages.ERR_TOKEN_EXPIRED });
    }

    // Validate password strength
    if (password.length < 6) {
      return res.status(400).json({ message: messages.ERR_PASSWORD_SHORT });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const updateResult = await db.query(
      `UPDATE user_master 
      SET password = $1, modified_at = NOW()
      WHERE id = $2`,
      [passwordHash, decoded.id]
    );

    if (updateResult.rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ message: messages.MSG_PASSWORD_UPDATED });

  } catch (err) {
    logger.error(err, 'Error in updatePassword');
    return res.status(500).json({ message: messages.ERR_SOMETHING_WENT_WRONG });
  }
};
