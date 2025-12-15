const nodemailer = require('nodemailer');
const { logger } = require("../middleware/pinoLogger");

const isLocal = process.env.NODE_ENV === "local" || process.env.NODE_ENV === "development";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: isLocal ? 587 : 465, // 587 for TLS
  secure: !isLocal, // false for local, true otherwise // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    logger.error('Email transporter error:', error);
  } else {
    logger.info('Email transporter ready');
  }
});

module.exports = transporter;
