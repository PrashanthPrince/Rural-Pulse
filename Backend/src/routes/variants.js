// routes/variants.js
const express = require("express");
const router = express.Router();
const multer = require("multer");
const variantService = require("../services/variantService");
const { requireAuth } = require("../middleware/authMiddleware");
const { logger } = require("../middleware/pinoLogger");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: Number(process.env.MAX_FILE_SIZE || 10 * 1024 * 1024),
  }
});

// CREATE - Add new variant
router.post("/variants", requireAuth, async (req, res) => {
  try {
    req.log.info({ productId: req.body.productId }, 'variants.create:start');
    
    const { status = "published" } = req.query;
    const { productId, sortOrder } = req.body;

    // Validate sortOrder uniqueness if productId and sortOrder are provided
    if (productId && typeof sortOrder === 'number') {
      try {
        await variantService.validateSortOrderUniqueness(productId, sortOrder, null, req.log);
      } catch (validationErr) {
        req.log.warn({ error: validationErr.message }, 'variants.create:validation_failed');
        return res.status(validationErr.statusCode || 400).json({
          success: false,
          error: validationErr.message,
        });
      }
    }

    const variant = await variantService.createVariant(req.body, status, req.log);
    req.log.info({ variantId: variant.documentId }, 'variants.create:success');
  
    res.status(201).json({ success: true, data: variant });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.create:error');
    res.status(500).json({
      success: false,
      error: "Failed to create variant",
      details: err.message,
    });
  }
});

// GET ALL - Get all variants with pagination
router.get("/variants", async (req, res) => {
  try {
    const { page = 1, pageSize = 100, populate = false } = req.query;
    
    req.log.info({ page, pageSize }, 'variants.getAll:start');
    const variants = await variantService.getVariants({
      page,
      pageSize,
      populate: populate === "true"
    }, req.log);
    
    req.log.info({ count: variants.data?.length }, 'variants.getAll:success');
    res.json({ success: true, ...variants });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.getAll:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch variants",
      details: err.message,
    });
  }
});

// GET BY ID - Get specific variant
router.get("/variants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    req.log.info({ variantId: id }, 'variants.getById:start');
    const variant = await variantService.getVariantById(id, req.log);
    
    if (!variant) {
      req.log.warn({ variantId: id }, 'variants.getById:not_found');
      return res.status(404).json({
        success: false,
        error: "Variant not found",
      });
    }
    
    req.log.info({ variantId: id }, 'variants.getById:success');
    res.json({ success: true, data: variant });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.getById:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch variant",
      details: err.message,
    });
  }
});

// UPDATE - Update variant
router.put("/variants/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.query;
    const { productId, sortOrder } = req.body;

    req.log.info({ variantId: id }, 'variants.update:start');

    // Validate sortOrder uniqueness if productId and sortOrder are provided
    if (productId && typeof sortOrder === 'number') {
      try {
        await variantService.validateSortOrderUniqueness(productId, sortOrder, id, req.log);
      } catch (validationErr) {
        req.log.warn({ error: validationErr.message }, 'variants.update:validation_failed');
        return res.status(validationErr.statusCode || 400).json({
          success: false,
          error: validationErr.message,
        });
      }
    }
    
    // Use simple update for JSON-based updates with image IDs
    const variant = await variantService.simpleUpdateVariant(id, req.body, status, req.log);
    
    req.log.info({ variantId: id }, 'variants.update:success');
    res.json({ success: true, data: variant });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.update:error');
    res.status(500).json({
      success: false,
      error: "Failed to update variant",
      details: err.message,
    });
  }
});

// PUBLISH - Publish variant
router.post("/variants/:id/publish", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    req.log.info({ variantId: id }, 'variants.publish:start');
    const variant = await variantService.publishVariant(id, req.log);

    req.log.info({ variantId: id }, 'variants.publish:success');
    res.json({ success: true, data: variant });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.publish:error');
    res.status(500).json({
      success: false,
      error: "Failed to publish variant",
      details: err.message,
    });
  }
});

// DELETE - Delete variant
router.delete("/variants/:id", requireAuth, async (req, res) => {
  try {
    const { id } = req.params;

    req.log.info({ variantId: id }, 'variants.delete:start');
    await variantService.deleteVariant(id, req.log);
    
    req.log.info({ variantId: id }, 'variants.delete:success');
    res.json({ success: true, message: "Variant deleted successfully" });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.delete:error');
    res.status(500).json({
      success: false,
      error: "Failed to delete variant",
      details: err.message,
    });
  }
});

// UPDATE WITH FILES - Update variant with image/video upload and slot replacement
router.put("/variants/update/:id", upload.array("files"), async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.query;

    req.log.info({ variantId: id, fileCount: req.files?.length || 0 }, 'variants.updateWithFiles:start');

    // Parse existing image IDs
    const existingImageIds = req.body["existingImageIds"]
      ? [].concat(req.body["existingImageIds"]).map((id) => Number(id) || null)
      : [];

    // Parse selected image slots
    const selectedImageSlots = req.body["selectedImageSlots[]"]
      ? [].concat(req.body["selectedImageSlots[]"]).map(Number)
      : [];

    // Parse existing video IDs
    const existingVideoIds = req.body["existingVideoIds"]
      ? [].concat(req.body["existingVideoIds"]).map((id) => Number(id) || null)
      : [];

    // Parse selected video slots
    const selectedVideoSlots = req.body["selectedVideoSlots[]"]
      ? [].concat(req.body["selectedVideoSlots[]"]).map(Number)
      : [];

    // Separate image and video files based on mimetype
    const newImageFiles = (req.files || []).filter(f => f.mimetype.startsWith('image/'));
    const newVideoFiles = (req.files || []).filter(f => f.mimetype.startsWith('video/'));

    const updateData = {
      variant_name: req.body.variant_name,
      variety_type: req.body.variety_type,
      grade: req.body.grade,
      weight: req.body.weight,
      weight_unit: req.body.weight_unit,
      size: req.body.size,
      style: req.body.style,
      package_type: req.body.package_type,
    };

    const variant = await variantService.updateVariant(id, updateData, {
      existingImageIds,
      selectedImageSlots,
      newImageFiles,
      existingVideoIds,
      selectedVideoSlots,
      newVideoFiles,
      status,
    }, req.log);

    req.log.info({ variantId: id }, 'variants.updateWithFiles:success');
    res.json({ success: true, data: variant });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.updateWithFiles:error');
    res.status(500).json({
      success: false,
      error: "Failed to update variant",
      details: err.response?.data?.error || err.message,
    });
  }
});

// UPLOAD IMAGES - Upload variant images
router.post("/upload/variants/images", upload.array("files"), async (req, res) => {
  try {
    req.log.info({ fileCount: req.files?.length || 0 }, 'variants.uploadImages:start');
    const uploaded = await variantService.uploadImages(req.files, req.log);
    req.log.info({ uploadedCount: uploaded.length }, 'variants.uploadImages:success');
    res.json(uploaded);
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.uploadImages:error');
    res.status(500).json({
      error: "Image upload failed",
      details: err.message,
    });
  }
});

// UPLOAD VIDEOS - Upload variant videos
router.post("/upload/variants/videos", upload.array("files"), async (req, res) => {
  try {
    req.log.info({ fileCount: req.files?.length || 0 }, 'variants.uploadVideos:start');
    const uploaded = await variantService.uploadVideos(req.files, req.log);
    req.log.info({ uploadedCount: uploaded.length }, 'variants.uploadVideos:success');
    res.json(uploaded);
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.uploadVideos:error');
    res.status(500).json({
      error: "Video upload failed",
      details: err.message,
    });
  }
});

// PUBLISH VARIANT - Publish a draft variant (PUT with status=published)
router.put("/variants/:documentId/publish", requireAuth, async (req, res) => {
  try {
    const { documentId } = req.params;
    
    req.log.info({ variantDocumentId: documentId }, 'variants.publishByDocId:start');
    const publishedVariant = await variantService.publishVariant(documentId, req.log);
    
    if (!publishedVariant) {
      req.log.warn({ variantDocumentId: documentId }, 'variants.publishByDocId:not_found');
      return res.status(404).json({
        success: false,
        error: "Variant not found",
      });
    }
    
    req.log.info({ variantDocumentId: documentId }, 'variants.publishByDocId:success');
    res.json({ success: true, data: publishedVariant });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.publishByDocId:error');
    res.status(500).json({
      success: false,
      error: "Failed to publish variant",
      details: err.message,
    });
  }
});

// GET VARIANTS BY PRODUCT - Get all variants for a specific product
router.get("/products/:productId/variants", async (req, res) => {
  try {
    const { productId } = req.params;
    
    req.log.info({ productId }, 'variants.getByProduct:start');
    const variants = await variantService.getVariantsByProduct(productId, req.log);
    
    req.log.info({ productId, count: variants?.length || 0 }, 'variants.getByProduct:success');
    res.json({ success: true, data: variants });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.getByProduct:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch product variants",
      details: err.message,
    });
  }
});

// GET DRAFT VARIANTS - Get all draft variants for a product
router.get("/products/:documentId/draft-variants", async (req, res) => {
  try {
    const { documentId } = req.params;
    
    req.log.info({ productDocumentId: documentId }, 'variants.getDraftByProduct:start');
    const draftVariants = await variantService.getDraftVariantsByProduct(documentId, req.log);
    
    req.log.info({ productDocumentId: documentId, count: draftVariants?.length || 0 }, 'variants.getDraftByProduct:success');
    res.json({ success: true, data: draftVariants });
  } catch (err) {
    req.log.error({ error: err.message }, 'variants.getDraftByProduct:error');
    res.status(500).json({
      success: false,
      error: "Failed to fetch draft variants",
      details: err.message,
    });
  }
});

// GET PRODUCT VARIANTS + ENUM OPTIONS
router.get("/productvariant", async (req, res) => {
  try {
    const result = await variantService.productvariants();
    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    console.error("Error fetching productvariants:", err);
    res.status(500).json({
      success: false,
      error: "Failed to fetch productvariants",
      details: err.message,
    });
  }
});

module.exports = router;
