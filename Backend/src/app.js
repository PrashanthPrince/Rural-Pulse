// src/app.js
const express = require('express');
const authRoutes = require('./routes/auth');
const productsRouter = require('./routes/products');
const faqsRouter = require('./routes/faqs');
const { loggerMiddleware } = require('./middleware/pinoLogger');

const app = express();
app.disable("x-powered-by");

// attach logger early so handlers/controllers can use req.log
app.use(loggerMiddleware);
app.use(express.json());

// routes
app.use('/', authRoutes);
app.use('/api', faqsRouter);
app.use('/', productsRouter);

module.exports = app;   // <-- make sure this line exists
