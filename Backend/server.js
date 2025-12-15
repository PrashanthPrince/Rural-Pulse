require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const app = express();
app.disable("x-powered-by");
const { loadNotifications } = require("./src/utils/notification");

const isLocal = process.env.NODE_ENV === "local" || process.env.NODE_ENV === "development";

// Correct CORS middleware usage
app.use(cors({
  origin: process.env.FRONTEND_URL,  // Use your frontend port here
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: !isLocal,      // true in prod, false in dev
    sameSite: isLocal ? "lax" : "none", // or "none" with secure:true on HTTPS production
    maxAge: 1000 * 60 * 60, // 1 hour session expiry
  },
}));


const userRoutes = require("./src/routes/auth");
const productRoutes = require("./src/routes/products");
const variantRoutes = require("./src/routes/variants");
const faqRoutes = require("./src/routes/faqs");

// logging middleware
const { loggerMiddleware } = require('./src/middleware/pinoLogger');

app.use(loggerMiddleware);

// Register routes
app.use("/", userRoutes);
app.use("/", productRoutes);
app.use("/", variantRoutes);
app.use("/", faqRoutes);

app.get("/", (req, res) => res.send("API Running..."));

(async () => {
  try {
    await loadNotifications(); // LOAD ON STARTUP

    const PORT = 3000;
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error('Startup failed:', err);
    process.exit(1);
  }
})();
