// routes/products.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const productService = require("../services/productService");
const variantService = require("../services/variantService");
const { logger } = require("../middleware/pinoLogger");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: Number(process.env.MAX_FILE_SIZE || 10 * 1024 * 1024),
  }
});

// CREATE
router.post("/products", async (req, res) => {
  try {
    const userId = req.session.userId;
    
    req.log.info({ userId, name: req.body.name }, 'products.create:start');

    const product = await productService.createProduct({
      userId,
      name: req.body.name,
      description: req.body.description,
      images: req.body.images || [],
      status: req.body.status,
      about_item: req.body.about_item || "",
      product_details: req.body.product_details || "",
      safety_information: req.body.safety_information || "",
      usage_directions: req.body.usage_directions || "",
      product_variants: req.body.product_variants || [],
      categories: req.body.categories || [],
      sub_categories: req.body.sub_categories || [],
      faqs: req.body.faqs || [],
      reqLog: req.log
    });
   
    req.logMessage = 'Product Created Successfully';
    req.log.info({ productId: product.id }, 'products.create:success');
    res.json({ success: true, product });
  } catch (err) {
    req.logMessage = 'Product Create Error';
    req.log.error({ error: err.message }, 'products.create:error');
    res.status(500).json({
      error: "Failed to create product",
      details: err.message,
    });
  }
});

// GET LIST
router.get("/products", async (req, res) => {
  try {
    const userId = req.session.userId;
    
    req.log.info({ userId }, 'products.getList:start');
    const data = await productService.getProducts(userId, req.log);

    req.logMessage = 'Products Fetched Successfully';
    req.log.info({ userId, count: data.products.length }, 'products.getList:success');
    res.json({ success: true, ...data });
  } catch (err) {
    req.logMessage = 'Products Fetch Error';
    req.log.error({ error: err.message }, 'products.getList:error');
    res.status(500).json({
      error: "Failed to fetch products",
      details: err.message,
    });
  }
});

// GET SINGLE PRODUCT BY DOCUMENT ID WITH RELATIONSHIPS
router.get("/products/:documentId", async (req, res) => {
  try {
    const { documentId } = req.params;
    
    req.log.info({ documentId }, 'products.getById:start');
    const product = await productService.getProductByDocumentId(documentId, req.log);
    
    if (!product) {
      req.logMessage = 'Product Not Found';
      req.log.warn({ documentId }, 'products.getById:not_found');
      return res.status(404).json({
        success: false,
        error: "Product not found",
      });
    }

    req.logMessage = 'Product Fetched Successfully';
    req.log.info({ documentId }, 'products.getById:success');
    res.json({ success: true, data: product });
  } catch (err) {
    req.logMessage = 'Product Fetch Error';
    req.log.error({ error: err.message }, 'products.getById:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch product",
      details: err.message,
    });
  }
});

// UPDATE
router.put("/products/update/:documentId", upload.array("files"), async (req, res) => {
  try {
    const { documentId } = req.params;
    const { name, description, status, about_item, product_details, safety_information, usage_directions } = req.body;
  

    // Parse arrays
    const existingImageIds = req.body["existingImageIds"]
      ? [].concat(req.body["existingImageIds"]).map((id) => Number(id) || null)
      : [];


    const selectedSlots = req.body["selectedSlots[]"]
      ? [].concat(req.body["selectedSlots[]"]).map(Number)
      : [];
     

    // Parse product variants
    const product_variants = req.body["product_variants"]
      ? [].concat(req.body["product_variants"]).map((v) => Number(v) || v)
      : [];

    // Parse categories
    const categories = req.body["categories"]
      ? [].concat(req.body["categories"]).filter(c => c)
      : [];

    // Parse subcategories
    const sub_categories = req.body["sub_categories"]
      ? [].concat(req.body["sub_categories"]).filter(s => s)
      : [];

    // Parse FAQs
    const faqs = req.body["faqs"]
      ? [].concat(req.body["faqs"]).filter(f => f)
      : [];
    
  

    // Files
    const newFiles = req.files || [];

    const updated = await productService.updateProduct({
      documentId,
      name,
      description,
      existingImageIds,
      selectedSlots,
      newFiles,
      status,
      about_item,
      product_details,
      safety_information,
      usage_directions,
      product_variants,
      categories,
      sub_categories,
      faqs,
      reqLog: req.log
    });

    res.json({ success: true, updated });
  } catch (err) {
    logger.error("Error in /products/update route:", err.message, err.response?.data || err);
    res.status(500).json({
      error: "Failed to update product",
      details: err.response?.data?.error || err.message,
    });
  }
});

// UPLOAD IMAGES
router.post("/upload", upload.array("files"), async (req, res) => {
  try {
    const uploaded = await productService.uploadImages(req.files, req.log);
    res.json(uploaded);
  } catch (err) {
    res.status(500).json({
      error: "Image upload failed",
      details: err.message,
    });
  }
});



// UPDATE - Unset isDefault for other variants when setting a new default
router.post("/products/:productId/unset-other-defaults", async (req, res) => {
  try {
    const { productId } = req.params;
    const { variantId } = req.body;

    if (!productId || !variantId) {
      return res.status(400).json({
        success: false,
        error: "productId and variantId are required",
      });
    }

    console.log(`Unsetting other defaults for product ${productId}, keeping variant ${variantId}`);

    // Call variantService to unset other defaults
    await variantService.unsetOtherDefaults(productId, variantId);

    res.json({
      success: true,
      message: `Successfully unset other defaults for product ${productId}`,
    });
  } catch (err) {
    console.error("Error unsetting other defaults:", err.message);
    res.status(500).json({
      success: false,
      error: "Failed to unset other defaults",
      details: err.message,
    });
  }
});

// DELETE
router.delete("/products/:documentId", async (req, res) => {
  try {
    const { documentId } = req.params;

    await productService.deleteProduct(documentId, req.log);

    res.json({ status: "success", message: "Product deleted successfully" });
  } catch (err) {
    logger.error("Error deleting product:", err);
    res.status(500).json({
      status: "error",
      message: "Failed to delete product",
      details: err.message,
    });
  }
});

// GET CATEGORIES
router.get("/categories", async (req, res) => {
  try {
    req.log.info({}, 'products.getCategories:start');
    const categories = await productService.getCategories();
    req.logMessage = 'Categories Fetched Successfully';
    req.log.info({ count: categories?.length || 0 }, 'products.getCategories:success');
    res.json({ success: true, data: categories });
  } catch (err) {
    req.logMessage = 'Categories Fetch Error';
    req.log.error({ error: err.message }, 'products.getCategories:error');
    res.status(500).json({
      error: "Failed to fetch categories",
      details: err.message,
    });
  }
});

// GET SUBCATEGORIES
router.get("/subcategories", async (req, res) => {
  try {
    req.log.info({}, 'products.getSubcategories:start');
    const subcategories = await productService.getSubcategories();
    req.logMessage = 'Subcategories Fetched Successfully';
    req.log.info({ count: subcategories?.length || 0 }, 'products.getSubcategories:success');
    res.json({ success: true, data: subcategories });
  } catch (err) {
    req.logMessage = 'Subcategories Fetch Error';
    req.log.error({ error: err.message }, 'products.getSubcategories:error');
    res.status(500).json({
      error: "Failed to fetch subcategories",
      details: err.message,
    });
  }
});

module.exports = router;
