// routes/faqs.js
const express = require("express");
const router = express.Router();
const faqService = require("../services/faqService");
const { requireAuth } = require("../middleware/authMiddleware");

/**
 * GET /faqs
 * Fetch all FAQs with product relationships
 * Query params: page, pageSize, populate
 */
router.get("/faqs", async (req, res) => {
  try {
    const { page = 1, pageSize = 100, populate = "true" } = req.query;

    req.log.info({ page, pageSize }, 'faqs.getAll:start');
    const faqs = await faqService.getFAQs({
      page: parseInt(page),
      pageSize: parseInt(pageSize),
      populate: populate === "true",
    });

    req.logMessage = 'FAQs Fetched Successfully';
    req.log.info({ count: faqs.data?.length || 0 }, 'faqs.getAll:success');
    res.json({ success: true, ...faqs });
  } catch (err) {
    req.logMessage = 'FAQs Fetch Error';
    req.log.error({ error: err.message }, 'faqs.getAll:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch FAQs",
      details: err.message,
    });
  }
});

/**
 * GET /faqs/:id
 * Fetch a specific FAQ by ID with product relationships
 */
router.get("/faqs/:id", async (req, res) => {
  try {
    const { id } = req.params;

    req.log.info({ faqId: id }, 'faqs.getById:start');
    const faq = await faqService.getFAQById(id);

    if (!faq) {
      req.logMessage = 'FAQ Not Found';
      req.log.warn({ faqId: id }, 'faqs.getById:not_found');
      return res.status(404).json({
        success: false,
        error: "FAQ not found",
      });
    }

    req.logMessage = 'FAQ Fetched Successfully';
    req.log.info({ faqId: id }, 'faqs.getById:success');
    res.json({ success: true, data: faq });
  } catch (err) {
    req.logMessage = 'FAQ Fetch Error';
    req.log.error({ error: err.message }, 'faqs.getById:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch FAQ",
      details: err.message,
    });
  }
});

/**
 * POST /faqs
 * Create a new FAQ with product links
 * Body: { Question, Answer, products: [documentIds] }
 */
router.post("/faqs", requireAuth, async (req, res) => {
  try {
    const { status = "published" } = req.query;
    const { Question, Answer, products = [] } = req.body;

    req.log.info({ Question, status }, 'faqs.create:start');

    if (!Question || !Answer) {
      req.logMessage = 'FAQ Validation Failed';
      req.log.warn({}, 'faqs.create:validation_failed');
      return res.status(400).json({
        success: false,
        error: "Question and Answer are required",
      });
    }

    const faq = await faqService.createFAQ(
      {
        Question,
        Answer,
        products: Array.isArray(products) ? products : [products].filter(Boolean),
      },
      status
    );

    req.logMessage = 'FAQ Created Successfully';
    req.log.info({ faqId: faq.id }, 'faqs.create:success');
    res.status(201).json({ success: true, data: faq });
  } catch (err) {
    req.logMessage = 'FAQ Create Error';
    req.log.error({ error: err.message }, 'faqs.create:error');
    res.status(500).json({
      success: false,
      error: "Failed to create FAQ",
      details: err.message,
    });
  }
});


/**
 * PUT /faqs/:id
 * Update an existing FAQ with product links
 * Body: { Question, Answer, products: [documentIds] }
 */
router.put("/faqs/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status = "published" } = req.query;
    const { Question, Answer, products = [] } = req.body;

    console.log("\n=== UPDATE FAQ REQUEST ===");
    console.log("FAQ ID:", id);
    console.log("Question:", Question);
    console.log("Answer:", Answer);
    console.log("Products (documentIds):", products);

    const faq = await faqService.updateFAQ(
      id,
      {
        Question,
        Answer,
        products: Array.isArray(products) ? products : [products].filter(Boolean),
      },
      status
    );

    res.json({
      success: true,
      data: faq,
    });
  } catch (err) {
    console.error("Error updating FAQ:", err);
    res.status(500).json({
      success: false,
      error: "Failed to update FAQ",
      details: err.message,
    });
  }
});

/**
 * DELETE /faqs/:id
 * Delete a FAQ and remove its product relations
 */
router.delete("/faqs/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    console.log("\n=== DELETE FAQ REQUEST ===");
    console.log("FAQ ID:", id);

    const result = await faqService.deleteFAQ(id);

    res.json({
      success: true,
      message: "FAQ deleted successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error deleting FAQ:", err);
    res.status(500).json({
      success: false,
      error: "Failed to delete FAQ",
      details: err.message,
    });
  }
});

/**
 * GET /products/:productId/faqs
 * Get all FAQs linked to a specific product
 */
router.get("/products/:productId/faqs", async (req, res) => {
  try {
    const { productId } = req.params;
    console.log(`\n🔍 Route: GET /products/:productId/faqs`);
    console.log(`🔍 Product ID received: ${productId}`);

    const faqs = await faqService.getFAQsByProduct(productId);
    console.log(`🔍 Route: Returning ${faqs.length} FAQs`);

    res.json({
      success: true,
      data: faqs,
    });
  } catch (err) {
    console.error("Error fetching FAQs by product:", err);
    res.status(500).json({
      success: false,
      error: "Failed to fetch FAQs",
      details: err.message,
    });
  }
});

/**
 * PUT /faqs/:id/products
 * Update product links for a specific FAQ
 * Body: { products: [documentIds] }
 */
router.put("/faqs/:id/products", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { products = [] } = req.body;

    console.log("\n=== LINK PRODUCTS TO FAQ REQUEST ===");
    console.log("FAQ ID:", id);
    console.log("Products (documentIds):", products);

    const faq = await faqService.linkProductsToFAQ(
      id,
      Array.isArray(products) ? products : [products].filter(Boolean)
    );

    res.json({
      success: true,
      data: faq,
    });
  } catch (err) {
    console.error("Error linking products to FAQ:", err);
    res.status(500).json({
      success: false,
      error: "Failed to link products",
      details: err.message,
    });
  }
});

/**
 * POST /products/:productDocumentId/link-faqs
 * Link FAQs to a product (BOTH draft and published versions)
 * Body: { faqIds: [documentIds or numericIds] }
 * CRITICAL: This ensures FAQs are linked to both product versions
 */
router.post("/products/:productDocumentId/link-faqs", requireAuth, async (req, res) => {
  try {
    const { productDocumentId } = req.params;
    const { faqIds = [] } = req.body;

    console.log("\n=== LINK FAQs TO PRODUCT (ALL VERSIONS) REQUEST ===");
    console.log("Product documentId:", productDocumentId);
    console.log("FAQ IDs:", faqIds);

    const result = await faqService.linkFAQsToProductAllVersions(
      productDocumentId,
      Array.isArray(faqIds) ? faqIds : [faqIds].filter(Boolean)
    );

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error("Error linking FAQs to product versions:", err);
    res.status(500).json({
      success: false,
      error: "Failed to link FAQs to product",
      details: err.message,
    });
  }
});

module.exports = router;
