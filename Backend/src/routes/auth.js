// routes/auth.js
const express = require("express");
const router = express.Router();
const signinService = require("../services/signin");
const { sendResetPassword, updatePassword } = require("../controllers/authController");

// RESET PASSWORD
router.post("/auth/reset-password", sendResetPassword);
router.post("/auth/update-password", updatePassword);

// REGISTER
router.post("/auth/register", async (req, res) => {
  const { username, email, password, roleId } = req.body;

  if (!username || !email || !password || !roleId) {
    req.log.warn({ username, email, roleId }, 'auth.register: validation_failed');
    req.logMessage = 'Register Validation Failed';
    return res
      .status(400)
      .json({ error: "All fields including roleId are required" });
  }

  try {
    req.log.info({ username, email }, 'auth.register: Start');
    const response = await signinService.registerUser({
      username,
      email,
      password,
      roleId,
      reqLog: req.log,
    });

    req.logMessage = 'User Registered Successfully';
    req.log.info({ userId: response.user.id }, 'auth.register:success');
    res.json({
      success: true,
      message: "User registered successfully",
      user: response.user,
    });
  } catch (err) {
    req.logMessage = 'Register Error';
    req.log.error({ error: err.message }, 'auth.register: error');
    res.status(500).json({ error: "Registration failed", details: err.message });
  }
});

// LOGIN
router.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    req.log.info({ email }, 'auth.login: Start');
    const result = await signinService.loginUser({
      email,
      password,
      session: req.session,
      reqLog: req.log,
    });

    if (!result.success) {
      req.log.warn({ email }, 'auth.login: failed');
      req.logMessage = 'Login Failed - Invalid Credentials';
      return res.status(401).json(result);
    }

    req.logMessage = 'Login Successful';
    req.log.info({ userId: result.user.id }, 'auth.login: End - Success');
    res.json(result);
  } catch (err) {
    req.logMessage = 'Login Error';
    req.log.error({ error: err.message }, 'auth.login: error');
    res.status(500).json({ error: "Login failed", details: err.message });
  }
});

module.exports = router;
