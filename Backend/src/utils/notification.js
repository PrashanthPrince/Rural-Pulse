const pool = require("../config/db"); // your pg pool
const messages = require('../locales/errors.en.json');

const registry = {}; // in-memory cache

async function loadNotifications() {
  const { rows } = await pool.query(`
    SELECT type, domain, code, http_status
    FROM notification_master
    WHERE active = true
  `);

  for (const { type, domain, code, http_status } of rows) {
    if (!registry[type]) registry[type] = {};

    if (domain) {
      if (!registry[type][domain]) registry[type][domain] = {};
      registry[type][domain][code] = http_status;
    } else {
      registry[type][code] = http_status;
    }
  }

  console.log(`Loaded ${rows.length} notification statuses`);
}

function getResponse(type, domain, code) {
  const status =
    domain
      ? registry?.[type]?.[domain]?.[code]
      : registry?.[type]?.[code];

  const message =
    domain
      ? messages?.[type]?.[domain]?.[code]
      : messages?.[type]?.[code];

  return {
    status: status || 500,
    message: message || 'Unknown message',
    code,
  };
}

module.exports = {
  loadNotifications,
  getResponse,
};