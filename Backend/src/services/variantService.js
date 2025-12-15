// services/variantService.js
const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
require("dotenv").config();
const { logger } = require("../middleware/pinoLogger");

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

// Helper function to get Strapi headers
const getStrapiHeaders = () => ({
  Authorization: `Bearer ${STRAPI_TOKEN}`,
  "Content-Type": "application/json",
});

/**
 * Validate that sortOrder is unique for a product
 * @param {number|string} productId - Product ID
 * @param {number} sortOrder - Sort order to validate
 * @param {string} [excludeVariantId] - Variant ID to exclude from check (for updates)
 * @returns {Promise<boolean>} - True if sortOrder is available
 * @throws {Error} - If sortOrder is already taken
 */
const validateSortOrderUniqueness = async (productId, sortOrder, excludeVariantId = null, reqLog) => {
  const log = reqLog || logger;
  try {
    // Fetch all variants of the product
    const response = await axios.get(
      `${STRAPI_URL}/api/products/${productId}?populate=product_variants`,
      {
        headers: getStrapiHeaders(),
      }
    );

    const product = response.data.data;
    if (!product || !product.product_variants || !Array.isArray(product.product_variants)) {
      // No variants yet, sortOrder is available
      return true;
    }

    // Check if any other variant uses this sortOrder
    const conflict = product.product_variants.find(v => {
      const variantId = v.documentId || v.id;
      // Skip the variant being updated
      if (excludeVariantId && (variantId === excludeVariantId || variantId.toString() === excludeVariantId.toString())) {
        return false;
      }
      // Check if sortOrder matches
      return v.sortOrder === sortOrder;
    });

    if (conflict) {
      const error = new Error(`Sort order ${sortOrder} is already assigned to another variant.`);
      error.statusCode = 400;
      error.sortOrderConflict = true;
      throw error;
    }

    return true;
  } catch (err) {
    // Re-throw validation errors
    if (err.sortOrderConflict) {
      throw err;
    }
    // For other errors, log but don't fail (might be permission issues)
    console.warn(`Warning: Could not validate sortOrder uniqueness: ${err.message}`);
    return true;
  }
};

module.exports = {
  // Upload images for variants
  uploadImages: async (files, reqLog) => {
    const log = reqLog || logger;
    if (!files || files.length === 0)
      throw new Error("No files sent");

    const form = new FormData();

    files.forEach((file) => {
      form.append("files", file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });
    });

    try {
      const response = await axios.post(
        `${STRAPI_URL}/api/upload`,
        form,
        {
          headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${STRAPI_TOKEN}`,
          },
        }
      );
      log.info({ uploadedCount: response.data?.length }, 'variantService.uploadImages:success');
      return response.data;
    } catch (err) {
      log.error({ err: err?.message, data: err.response?.data }, 'variantService.uploadImages:error');
      throw new Error(err.response?.data?.error?.message || "Failed to upload files to Strapi");
    }
  },

  // Upload videos for variants
  uploadVideos: async (files, reqLog) => {
    const log = reqLog || logger;
    if (!files || files.length === 0)
      throw new Error("No files sent");

    const form = new FormData();

    files.forEach((file) => {
      form.append("files", file.buffer, {
        filename: file.originalname,
        contentType: file.mimetype,
      });
    });

    try {
      const response = await axios.post(
        `${STRAPI_URL}/api/upload`,
        form,
        {
          headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${STRAPI_TOKEN}`,
          },
        }
      );
      log.info({ uploadedCount: response.data?.length }, 'variantService.uploadVideos:success');
      return response.data;
    } catch (err) {
      log.error({ err: err?.message, data: err.response?.data }, 'variantService.uploadVideos:error');
      throw new Error(err.response?.data?.error?.message || "Failed to upload files to Strapi");
    }
  },

  /**
   * Unset isDefault for all variants of a product except the specified variant
   * Used when setting a new variant as default to enforce "only one default per product"
   * @param {number} productId - Strapi product ID
   * @param {number} variantIdToKeepDefault - Variant ID that should remain default
   * @returns {Promise<void>}
   */
  unsetOtherDefaults: async (productId, variantIdToKeepDefault) => {
    try {
      // Get all variants linked to this product
      const productRes = await axios.get(
        `${STRAPI_URL}/api/products/${productId}?populate=product_variants`,
        {
          headers: getStrapiHeaders(),
        }
      );

      if (!productRes.data.data || !productRes.data.data.product_variants) {
        console.log(`No variants found for product ${productId}`);
        return;
      }

      const variants = productRes.data.data.product_variants;
      console.log(`Found ${variants.length} variants for product ${productId}`);

      // Unset isDefault for all other variants
      for (const variant of variants) {
        const variantId = variant.id || variant.documentId;
        
        if (variantId !== variantIdToKeepDefault && variant.isDefault) {
          console.log(`Unsetting isDefault for variant ${variantId}`);
          
          await axios.put(
            `${STRAPI_URL}/api/product-variants/${variantId}`,
            {
              data: {
                isDefault: false,
              },
            },
            {
              headers: getStrapiHeaders(),
            }
          );
        }
      }

      console.log(`Successfully managed default variants for product ${productId}`);
    } catch (err) {
      console.error(
        `Error unsetting other defaults for product ${productId}:`,
        err.message
      );
      // Don't throw - this is a secondary operation
    }
  },

  /**
   * Create a new product variant
   * @param {Object} variantData - Variant data
   * @param {string} status - 'draft' or 'published' (default: 'draft')
   * @returns {Promise<Object>} - Created variant
   */
  createVariant: async (variantData, status = "draft", reqLog) => {
    const log = reqLog || logger;
    try {
      if (!variantData.variant_name) {
        throw new Error("Variant name is required");
      }

      // Ensure image IDs are numbers and filter out invalid values
      const imageIds = (variantData.varientImage || [])
        .map(id => Number(id))
        .filter(id => !isNaN(id) && id > 0);

      // Ensure video IDs are numbers and filter out invalid values
      const videoIds = (variantData.varientVideo || [])
        .map(id => Number(id))
        .filter(id => !isNaN(id) && id > 0);

      // Combine videos and images into single array for varientImage field
      // Videos will be differentiated by file type when retrieved
      const allMediaIds = [...imageIds, ...videoIds];

      const payload = {
        data: {
          variant_name: variantData.variant_name,
          variety_type: variantData.variety_type || "",
          grade: variantData.grade || "",
          weight: variantData.weight || 0,
          weight_unit: variantData.weight_unit || "g",
          size: variantData.size || "",
          style: variantData.style || "",
          package_type: variantData.package_type || "",
          // CRITICAL: Include isDefault and sortOrder fields
          isDefault: variantData.isDefault === true || false,
          sortOrder: typeof variantData.sortOrder === 'number' ? variantData.sortOrder : 0,
        },
      };

      // Add all media (images + videos) only if there are any
      if (allMediaIds.length > 0) {
        payload.data.varientImage = allMediaIds;
      }

      logger.info({ payload }, 'variantService.createVariant:creating');
      logger.debug({ imageIds, videoIds }, 'variantService.createVariant:mediaIds');

      const response = await axios.post(
        `${STRAPI_URL}/api/product-variants?status=${status}`,
        payload,
        {
          headers: getStrapiHeaders(),
        }
      );

      log.info({ variant: response.data?.data }, 'variantService.createVariant:success');
      return response.data.data;
    } catch (err) {
      log.error({ status: err.response?.status, message: err.response?.data?.error?.message, data: err.response?.data, err: err?.message, payload }, 'variantService.createVariant:error');
      throw new Error(
        err.response?.data?.error?.message || 
        err.response?.data?.message || 
        err.message || 
        "Failed to create variant"
      );
    }
  },

  /**
   * Get all variants with pagination
   * @param {Object} options - Query options
   * @returns {Promise<Object>} - Variants list with pagination
   */
  getVariants: async ({ page = 1, pageSize = 100, populate = false }, reqLog) => {
    const log = reqLog || logger;
    try {
      const params = {
        pagination: {
          page: parseInt(page),
          pageSize: parseInt(pageSize),
        },
      };

      if (populate) {
        params.populate = "*";
      }

      const response = await axios.get(`${STRAPI_URL}/api/product-variants`, {
        headers: getStrapiHeaders(),
        params,
      });
      log.info({ count: response.data?.data?.length || 0 }, 'variantService.getVariants:success');
      return {
        success: true,
        data: response.data.data || [],
        meta: response.data.meta || {},
      };
    } catch (err) {
      log.error({ err: err?.message }, 'variantService.getVariants:error');
      throw err;
    }
  },

  /**
   * Get variant by ID
   * @param {string|number} variantId - Variant ID or documentId
   * @returns {Promise<Object>} - Variant data
   */
  getVariantById: async (variantId, reqLog) => {
    const log = reqLog || logger;
    try {
      // Try by documentId first with populate to get relationships
      const response = await axios.get(
        `${STRAPI_URL}/api/product-variants/${variantId}?populate=*`,
        {
          headers: getStrapiHeaders(),
        }
      );

      logger.info({ variantId: variantId }, 'variantService.getVariantById:success');
      return response.data.data;
    } catch (err) {
      log.error({ err: err?.message, variantId }, 'variantService.getVariantById:error');
      throw err;
    }
  },

  /**
   * Simple update variant - for direct JSON updates with image/video IDs
   * @param {string|number} variantId - Variant ID or documentId
   * @param {Object} updateData - Data to update (includes variantImage, variantVideo arrays)
   * @param {string} status - 'draft' or 'published'
   * @returns {Promise<Object>} - Updated variant
   */
  simpleUpdateVariant: async (variantId, updateData, status = "published", reqLog) => {
    const log = reqLog || logger;
    try {
      const payload = {
        data: {
          variant_name: updateData.variant_name,
          variety_type: updateData.variety_type || "",
          grade: updateData.grade || "",
          weight: updateData.weight || 0,
          weight_unit: updateData.weight_unit || "g",
          size: updateData.size || "",
          style: updateData.style || "",
          package_type: updateData.package_type || "",
          // CRITICAL: Persist isDefault and sortOrder fields
          isDefault: updateData.isDefault === true || false,
          sortOrder: typeof updateData.sortOrder === 'number' ? updateData.sortOrder : 0,
        },
      };

      // Add images if provided - filter out invalid IDs
      if (updateData.varientImage && updateData.varientImage.length > 0) {
        const imageIds = updateData.varientImage
          .map(id => Number(id))
          .filter(id => !isNaN(id) && id > 0);
        if (imageIds.length > 0) {
          payload.data.varientImage = imageIds;
        }
      }

      // Add videos if provided - filter out invalid IDs
      // Combine videos with images in the same varientImage field
      if (updateData.varientVideo && updateData.varientVideo.length > 0) {
        const videoIds = updateData.varientVideo
          .map(id => Number(id))
          .filter(id => !isNaN(id) && id > 0);
        
        if (videoIds.length > 0) {
          // Combine with existing images
          const existingImages = payload.data.varientImage || [];
          payload.data.varientImage = [...existingImages, ...videoIds];
        }
      }

      logger.info({ variantId, payload }, 'variantService.simpleUpdateVariant:update');

      let url = `${STRAPI_URL}/api/product-variants/${variantId}`;
      if (status) {
        url += `?status=${status}`;
      }

      const response = await axios.put(url, payload, {
        headers: getStrapiHeaders(),
      });

      log.info({ variant: response.data?.data }, 'variantService.simpleUpdateVariant:success');
      return response.data.data;
    } catch (err) {
      log.error({ err: err?.message, data: err.response?.data }, 'variantService.simpleUpdateVariant:error');
      throw err;
    }
  },

  /**
   * Update variant
   * @param {string|number} variantId - Variant ID or documentId
   * @param {Object} updateData - Data to update
   * @returns {Promise<Object>} - Updated variant
   */
  updateVariant: async (
    variantId,
    updateData,
    {
      existingImageIds = [],
      selectedImageSlots = [],
      newImageFiles = [],
      existingVideoIds = [],
      selectedVideoSlots = [],
      newVideoFiles = [],
      status = null
    } = {},
    reqLog
  ) => {
    const log = reqLog || logger;
    try {
      // ---------------------------------------------------
      // Upload NEW IMAGE FILES
      // ---------------------------------------------------
      let uploadedImageIds = [];

      if (newImageFiles && newImageFiles.length > 0) {
        for (const file of newImageFiles) {
          const formData = new FormData();
          formData.append("files", file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
          });

          const uploadRes = await axios.post(
            `${STRAPI_URL}/api/upload`,
            formData,
            { headers: formData.getHeaders() }
          );

          uploadedImageIds.push(uploadRes.data[0].id);
        }
      }

      // ---------------------------------------------------
      // Upload NEW VIDEO FILES
      // ---------------------------------------------------
      let uploadedVideoIds = [];

      if (newVideoFiles && newVideoFiles.length > 0) {
        for (const file of newVideoFiles) {
          const formData = new FormData();
          formData.append("files", file.buffer, {
            filename: file.originalname,
            contentType: file.mimetype,
          });

          const uploadRes = await axios.post(
            `${STRAPI_URL}/api/upload`,
            formData,
            { headers: formData.getHeaders() }
          );

          uploadedVideoIds.push(uploadRes.data[0].id);
        }
      }

      // ---------------------------------------------------
      // Image Slot Replacement Logic
      // ---------------------------------------------------
      const validExistingImageIds = existingImageIds.filter((id) => id !== null && id !== undefined && id !== "");
      let finalImageIds = [...validExistingImageIds];

      selectedImageSlots.forEach((slotIndex, i) => {
        if (uploadedImageIds[i] !== undefined && slotIndex < finalImageIds.length) {
          finalImageIds[slotIndex] = uploadedImageIds[i];
        }
      });

      // Extra uploaded images → append
      if (uploadedImageIds.length > selectedImageSlots.length) {
        const extras = uploadedImageIds.slice(selectedImageSlots.length);
        finalImageIds.push(...extras);
      }

      // Remove nulls and convert to numbers
      const finalImageIdsArray = finalImageIds
        .filter((id) => id !== null && id !== undefined && id !== "")
        .map(id => Number(id));

      // ---------------------------------------------------
      // Video Slot Replacement Logic
      // ---------------------------------------------------
      const validExistingVideoIds = existingVideoIds.filter((id) => id !== null && id !== undefined && id !== "");
      let finalVideoIds = [...validExistingVideoIds];

      selectedVideoSlots.forEach((slotIndex, i) => {
        if (uploadedVideoIds[i] !== undefined && slotIndex < finalVideoIds.length) {
          finalVideoIds[slotIndex] = uploadedVideoIds[i];
        }
      });

      // Extra uploaded videos → append
      if (uploadedVideoIds.length > selectedVideoSlots.length) {
        const extras = uploadedVideoIds.slice(selectedVideoSlots.length);
        finalVideoIds.push(...extras);
      }

      // Remove nulls and convert to numbers
      const finalVideoIdsArray = finalVideoIds
        .filter((id) => id !== null && id !== undefined && id !== "")
        .map(id => Number(id));

      // ---------------------------------------------------
      // Build Update Payload
      // ---------------------------------------------------
      const payload = {
        data: {
          variant_name: updateData.variant_name,
          variety_type: updateData.variety_type || "",
          grade: updateData.grade || "",
          weight: updateData.weight || 0,
          weight_unit: updateData.weight_unit || "g",
          size: updateData.size || "",
          style: updateData.style || "",
          package_type: updateData.package_type || "",
        },
      };

      // Add images only if there are any
      if (finalImageIdsArray.length > 0) {
        payload.data.varientImage = finalImageIdsArray;
      }

      // Add videos only if there are any
      if (finalVideoIdsArray.length > 0) {
        payload.data.varientVideo = finalVideoIdsArray;
      }
      logger.info({ variantId, payload }, 'variantService.updateVariant:payload');

      // ---------------------------------------------------
      // Send Update Request
      // ---------------------------------------------------
      let url = `${STRAPI_URL}/api/product-variants/${variantId}`;
      if (status) {
        url += `?status=${status}`;
      }

      const response = await axios.put(
        url,
        payload,
        {
          headers: getStrapiHeaders(),
        }
      );

      log.info({ variant: response.data?.data }, 'variantService.updateVariant:success');
      return response.data.data;
    } catch (err) {
      log.error({ err: err?.message }, 'variantService.updateVariant:error');
      throw err;
    }
  },

  /**
   * Publish variant - converts documentId to numeric ID and publishes
   * @param {string|number} variantDocumentId - Variant documentId or numeric ID
   * @returns {Promise<Object>} - Published variant
   */
  publishVariant: async (variantDocumentId) => {
    try {
      console.log("📢 Publishing variant with ID:", variantDocumentId);
      
      // First, check if it's a numeric ID or a documentId
      let variantId = variantDocumentId;
      
      // If it looks like a documentId (contains letters or is not a pure number)
      if (isNaN(variantDocumentId)) {
        console.log(`🔍 Converting documentId to numeric ID: ${variantDocumentId}`);
        
        // Fetch the variant by documentId to get its numeric ID
        const variantRes = await axios.get(
          `${STRAPI_URL}/api/product-variants?filters[documentId][$eq]=${variantDocumentId}&status=draft`,
          {
            headers: getStrapiHeaders(),
          }
        );

        if (!variantRes.data.data || variantRes.data.data.length === 0) {
          throw new Error(`Draft variant not found with documentId: ${variantDocumentId}`);
        }

        variantId = variantRes.data.data[0].id;
        console.log(`✅ Found variant numeric ID: ${variantId}`);
      }

      // Now publish using the numeric ID
      console.log(`📤 Calling Strapi publish endpoint for ID: ${variantId}`);
      const response = await axios.post(
        `${STRAPI_URL}/api/product-variants/${variantId}/publish`,
        {},
        {
          headers: getStrapiHeaders(),
        }
      );

      logger.info({ variant: response.data?.data }, 'variantService.publishVariant:success');
      return response.data?.data;
    } catch (err) {
      logger.error({ err: err?.message, variantId }, 'variantService.publishVariant:error');
      throw err;
    }
  },

  /**
   * Delete variant
   * @param {string|number} variantId - Variant ID or documentId
   * @returns {Promise<void>}
   */
  deleteVariant: async (variantId) => {
    try {
      const response = await axios.delete(
        `${STRAPI_URL}/api/product-variants/${variantId}`,
        {
          headers: getStrapiHeaders(),
        }
      );

      logger.info({ variantId }, 'variantService.deleteVariant:success');
      return response.data;
    } catch (err) {
      logger.error({ err: err?.message, variantId }, 'variantService.deleteVariant:error');
      throw err;
    }
  },

  /**
   * Get variants by product ID
   * @param {string|number} productId - Product ID or documentId
   * @returns {Promise<Array>} - Array of variants
   */
  getVariantsByProduct: async (productId) => {
    try {
      const response = await axios.get(
        `${STRAPI_URL}/api/product-variants`,
        {
          headers: getStrapiHeaders(),
          params: {
            "filters[product_ids][id][$eq]": productId,
            populate: "*",
          },
        }
      );

      logger.info({ count: response.data?.data?.length || 0, productId }, 'variantService.getVariantsByProduct:success');
      return response.data.data || [];
    } catch (err) {
      logger.error({ err: err?.message, productId }, 'variantService.getVariantsByProduct:error');
      throw err;
    }
  },

  /**
   * Link variants to product
   * @param {string|number} productId - Product ID or documentId
   * @param {Array} variantIds - Array of variant IDs to link
   * @returns {Promise<Object>} - Updated product
   */
  linkVariantsToProduct: async (productId, variantIds) => {
    try {
      if (!variantIds || variantIds.length === 0) {
        return null;
      }

      const payload = {
        data: {
          product_variants: variantIds,
        },
      };

      const response = await axios.put(
        `${STRAPI_URL}/api/products/${productId}`,
        payload,
        {
          headers: getStrapiHeaders(),
        }
      );

      logger.info({ productId }, 'variantService.linkVariantsToProduct:success');
      return response.data.data;
    } catch (err) {
      logger.error({ err: err?.message, productId }, 'variantService.linkVariantsToProduct:error');
      throw err;
    }
  },

  /**
   * Unlink variant from product
   * @param {string|number} productId - Product ID or documentId
   * @param {string|number} variantId - Variant ID to unlink
   * @returns {Promise<Object>} - Updated product
   */
  unlinkVariantFromProduct: async (productId, variantId) => {
    try {
      const product = await axios.get(
        `${STRAPI_URL}/api/products/${productId}?populate=product_variants`,
        {
          headers: getStrapiHeaders(),
        }
      );

      const currentVariants = product.data.data.product_variants || [];
      const updatedVariants = currentVariants.filter(v => v.id !== variantId);

      const payload = {
        data: {
          product_variants: updatedVariants.map(v => v.id),
        },
      };

      const response = await axios.put(
        `${STRAPI_URL}/api/products/${productId}`,
        payload,
        {
          headers: getStrapiHeaders(),
        }
      );

      logger.info({ productId, variantId }, 'variantService.unlinkVariantFromProduct:success');
      return response.data.data;
    } catch (err) {
      logger.error({ err: err?.message, productId, variantId }, 'variantService.unlinkVariantFromProduct:error');
      throw err;
    }
  },

  /**
   * Publish a draft variant (change from draft to published)
   * @param {string} documentId - Document ID of draft variant
   * @returns {Promise<Object>} - Published variant
   */
  publishVariant: async (documentId) => {
    try {
      console.log("📢 Publishing variant with documentId:", documentId);

      // First, fetch the draft variant to get its numeric ID
      const draftRes = await axios.get(
        `${STRAPI_URL}/api/product-variants?filters[documentId][$eq]=${documentId}&status=draft`,
        {
          headers: getStrapiHeaders(),
        }
      );

      if (!draftRes.data.data || draftRes.data.data.length === 0) {
        throw new Error(`Draft variant not found with documentId: ${documentId}`);
      }

      const draftVariant = draftRes.data.data[0];
      console.log(`✅ Found draft variant ID: ${draftVariant.id}`);

      // Publish the variant using Strapi's publish endpoint
      const publishRes = await axios.post(
        `${STRAPI_URL}/api/product-variants/${draftVariant.id}/publish`,
        {},
        {
          headers: getStrapiHeaders(),
        }
      );

      const publishedVariant = publishRes.data.data;
      console.log(`✅ Variant published successfully. New ID: ${publishedVariant.id}, DocumentId: ${publishedVariant.documentId}`);

      return publishedVariant;
    } catch (err) {
      console.error("Error publishing variant:", err.message);
      throw err;
    }
  },

  /**
   * Get all draft variants for a product
   * @param {string} productDocumentId - Product document ID
   * @returns {Promise<Array>} - Array of draft variants
   */
  getDraftVariantsByProduct: async (productDocumentId) => {
    try {
      console.log("🔍 Fetching draft variants for product:", productDocumentId);

      // First, fetch the product to get its numeric ID
      const productRes = await axios.get(
        `${STRAPI_URL}/api/products?filters[documentId][$eq]=${productDocumentId}&status=draft,published`,
        {
          headers: getStrapiHeaders(),
        }
      );

      if (!productRes.data.data || productRes.data.data.length === 0) {
        console.log(`⚠️ Product not found with documentId: ${productDocumentId}`);
        return [];
      }

      const product = productRes.data.data[0];
      console.log(`✅ Found product ID: ${product.id}`);

      // Fetch all draft variants linked to this product
      const variantsRes = await axios.get(
        `${STRAPI_URL}/api/product-variants?filters[product_ids][id][$eq]=${product.id}&status=draft&populate=*`,
        {
          headers: getStrapiHeaders(),
        }
      );

      const draftVariants = variantsRes.data.data || [];
      console.log(`📦 Found ${draftVariants.length} draft variants for product`);

      return draftVariants;
    } catch (err) {
      console.error("Error fetching draft variants:", err.message);
      throw err;
    }
  },

  // Fetch product variants along with enum values
  productvariants: async () => {
    try {
      /* -------------------------------------------------------
         1. Fetch product variants
      ------------------------------------------------------- */
      const variantsRes = await axios.get(
        `${STRAPI_URL}/api/product-variants`,
        {
          headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
          params: {
            populate: "*",
          },
        }
      );

      const variants = Array.isArray(variantsRes.data?.data)
        ? variantsRes.data.data
        : [];

      /* -------------------------------------------------------
         2. Fetch enum values
      ------------------------------------------------------- */
      const enumsRes = await axios.get(
        `${STRAPI_URL}/api/product-variants/enums`,
        {
          headers: {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

      const weightUnitOptions = enumsRes.data?.weight_unit || [];

      /* -------------------------------------------------------
         3. Transform variants
      ------------------------------------------------------- */
      const transformedVariants = variants.map((variant) => ({
        id: variant.id,
        documentId: variant.documentId,
        name: variant.name,
        value: variant.value,
        weight_unit: variant.weight_unit || null,
        package_type: variant.package_type || null,
        createdAt: variant.createdAt,
        updatedAt: variant.updatedAt,
        publishedAt: variant.publishedAt,
      }));

      /* -------------------------------------------------------
         4. Return final result
      ------------------------------------------------------- */
      return {
        variants: transformedVariants,
        weightUnitOptions,
      };
    } catch (err) {
      console.error("Strapi fetch failed:", err.response?.data || err.message);
      throw new Error(
        err.response?.data?.error?.message ||
          err.message ||
          "Failed to fetch product variants"
      );
    }
  },
  // Export validation function
  validateSortOrderUniqueness,
};
