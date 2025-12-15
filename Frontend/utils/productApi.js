
// utils/productApi.js

import { ENDPOINTS, BASE_API_URL,STRAPI_URL } from "./apiConfig";

export async function fetchProductsAPI() {
  const res = await fetch(ENDPOINTS.PRODUCTS, {
    method: "GET",
    credentials: "include",
  });

  const data = await res.json();
  return data;
}

/**
 * Fetch a single product with all relationships (images, variants, etc)
 * @param {string} documentId - Product documentId
 * @returns {Object} Product with relationships
 */
export async function fetchProductByIdAPI(documentId) {
  try {
    const res = await fetch(
      `${BASE_API_URL}/products/${documentId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();
    
    if (!res.ok || !data.data) {
      throw new Error(data?.error || "Product not found");
    }

    return data.data;
  } catch (err) {
    throw err;
  }
}

export function formatProductData(data) {
  // Handle multiple input formats
  let products = [];
  
  if (Array.isArray(data)) {
    products = data;
  } else if (data.products && Array.isArray(data.products)) {
    products = data.products;
  } else if (data.products && typeof data.products === 'object' && !Array.isArray(data.products)) {
    // If products is an object (like { data: [...] }), try to extract array
    products = data.products.data || Object.values(data.products) || [];
  }
  
  return products.map((p) => {
    const images = (p.image || []).map((img) => {
      // Check if it's a video by looking at the mime type or file extension
      const isVideo = img.mime?.startsWith('video/') || /\.(mp4|webm|ogg)$/i.test(img.url || '');
      
      if (isVideo) {
        // For videos, use the full URL directly
        return `${STRAPI_URL}${img.url}`;
      } else {
        // For images, try to use thumbnail, fallback to full URL
        const imageUrl = img.formats?.thumbnail?.url || img.url;
        return `${STRAPI_URL}${imageUrl}`;
      }
    });

    // Transform FAQs from Strapi format to frontend format
    // Strapi returns: { id, attributes: { Question, Answer, ... }, documentId, ... }
    // Frontend expects: { id, question, answer, documentId, ... }
    const faqs = (p.faqs || []).map((faq) => {
      // Handle both Strapi full response and simple reference
      if (faq.attributes) {
        // Full FAQ object from Strapi
        return {
          id: faq.id,
          documentId: faq.documentId,
          question: faq.attributes.Question || faq.Question || '',
          answer: faq.attributes.Answer || faq.Answer || '',
          Question: faq.attributes.Question || faq.Question,
          Answer: faq.attributes.Answer || faq.Answer,
        };
      } else {
        // Simple FAQ reference or already transformed
        return {
          id: faq.id,
          documentId: faq.documentId,
          question: faq.Question || faq.question || '',
          answer: faq.Answer || faq.answer || '',
          Question: faq.Question,
          Answer: faq.Answer,
        };
      }
    });

    // Preserve categories and sub_categories
    return {
      ...p,
      images: images.length > 0 ? images : ["/empty-bg.png"],
      categories: p.categories || [],
      sub_categories: p.sub_categories || [],
      faqs: faqs,
    };
  });
}


export async function deleteProductAPI(prodId) {
  const token = localStorage.getItem("token");

  const res = await fetch(ENDPOINTS.DELETE_PRODUCT(prodId), {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  return res.json();
}

export async function uploadFiles(files) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));

  const res = await fetch(ENDPOINTS.UPLOAD, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("Image upload failed: " + error);
  }

  return res.json();
}

// Upload files to Strapi media library directly
export async function uploadToStrapiMediaLibrary(files) {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  const token = localStorage.getItem("token");

  console.log("uploadToStrapiMediaLibrary: Uploading", files.length, "file(s) to", `${STRAPI_URL}/api/upload`);

  const res = await fetch(`${STRAPI_URL}/api/upload`, {
    method: "POST",
    body: formData,
    headers: {
      // Don't set Content-Type, let the browser set it with boundary
      // Authorization: `Bearer ${token}`, // Strapi upload might not need auth
    },
  });

  if (!res.ok) {
    const error = await res.text();
    console.error("uploadToStrapiMediaLibrary: Upload failed", error);
    throw new Error("Failed to upload to Strapi media library: " + error);
  }

  const data = await res.json();
  console.log("uploadToStrapiMediaLibrary: Response received", data);
  return data;
}

export async function createProductAPI(payload) {
  const res = await fetch(ENDPOINTS.PRODUCTS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error || "Failed to create product");
  }

  return data;
}

export async function updateProductAPI(documentId, formDataOrPayload) {
  const token = localStorage.getItem("token");
  
  // Check if it's FormData or JSON payload
  const isFormData = formDataOrPayload instanceof FormData;
  
  const options = {
    method: "PUT",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  
  if (isFormData) {
    // FormData with files - let browser set Content-Type with boundary
    options.body = formDataOrPayload;
  } else {
    // JSON payload
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(formDataOrPayload);
  }
  
  const res = await fetch(`${BASE_API_URL}/products/update/${documentId}`, options);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.details || data.message || data.error || "Product update failed");
  }

  return data;
}

// ============================================================================
// PRODUCT VARIANT API FUNCTIONS
// ============================================================================

/**
 * Fetch all product variants
 */
export async function fetchVariantsAPI() {
  try {
    const res = await fetch(`${BASE_API_URL}/variants`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch variants");
    }

    return data;
  } catch (err) {
    throw err;
  }
}

/**
 * Fetch a single variant by ID with all relationships (draft status)
 */
export async function fetchVariantByIdAPI(variantId) {
  try {
    const res = await fetch(`${BASE_API_URL}/variants/${variantId}?status=draft`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch variant");
    }

    return data.data || data;
  } catch (err) {
    throw err;
  }
}

/**
 * Create a new product variant (always draft)
 * @param {Object} variantData - Variant data to create
 * @returns {Object} Created variant response from Strapi
 */
export async function createVariantAPI(variantData) {
  try {
    const payload = {
      variant_name: variantData.variant_name,
      variety_type: variantData.variety_type,
      grade: variantData.grade,
      weight: variantData.weight,
      weight_unit: variantData.weight_unit,
      size: variantData.size,
      style: variantData.style,
      package_type: variantData.package_type,
      // CRITICAL: Include isDefault and sortOrder fields on creation
      isDefault: variantData.isDefault || false,
      sortOrder: typeof variantData.sortOrder === 'number' ? variantData.sortOrder : 0,
    };

    // Add images if provided
    if (variantData.varientImage && variantData.varientImage.length > 0) {
      payload.varientImage = variantData.varientImage;
    }

    // Note: Videos are now combined with images in varientImage field
    // No separate variantVideo field is sent

    const res = await fetch(`${BASE_API_URL}/variants?status=draft`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error?.message || data?.error || "Failed to create variant");
    }

    return data;
  } catch (err) {
    throw err;
  }
}

/**
 * Update an existing product variant (always draft)
 * @param {string} documentId - Document ID of variant to update
 * @param {Object} variantData - Updated variant data
 * @returns {Object} Updated variant response from Strapi
 */
export async function updateVariantAPI(documentId, variantData) {
  try {
    const payload = {
      variant_name: variantData.variant_name,
      variety_type: variantData.variety_type,
      grade: variantData.grade,
      weight: variantData.weight,
      weight_unit: variantData.weight_unit,
      size: variantData.size,
      style: variantData.style,
      package_type: variantData.package_type,
      // CRITICAL: Include isDefault and sortOrder to persist these fields
      isDefault: variantData.isDefault || false,
      sortOrder: typeof variantData.sortOrder === 'number' ? variantData.sortOrder : 0,
    };

    // Add images if provided
    if (variantData.varientImage && variantData.varientImage.length > 0) {
      payload.varientImage = variantData.varientImage;
    }

    // Note: Videos are now combined with images in varientImage field
    // No separate varientVideo field is sent

    const url = `${BASE_API_URL}/variants/${documentId}?status=draft`;

    console.log("updateVariantAPI: Sending to", url);
    console.log("updateVariantAPI: Payload", payload);

    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    console.log("updateVariantAPI: Response", data);

    if (!res.ok) {
      throw new Error(data?.error?.message || data?.error || "Failed to update variant");
    }

    return data;
  } catch (err) {
    console.error("updateVariantAPI: Error", err);
    throw err;
  }
}

/**
 * Publish a draft variant (change from draft to published)
 * @param {string} documentId - Document ID of draft variant to publish
 * @returns {Object} Published variant response from Strapi
 */
export async function publishVariantAPI(documentId) {
  try {
    console.log("Publishing variant:", documentId);
    
    const res = await fetch(`${BASE_API_URL}/variants/${documentId}?status=published`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({}),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error?.message || data?.error || "Failed to publish variant");
    }

    console.log("Variant published successfully:", documentId);
    return data.data || data;
  } catch (err) {
    console.error("Error publishing variant:", err);
    throw err;
  }
}

/**
 * Fetch draft variants for a product
 * @param {string} productDocumentId - Document ID of the product
 * @returns {Array} Array of draft variants
 */
export async function fetchDraftVariantsAPI(productDocumentId) {
  try {
    console.log("Fetching draft variants for product:", productDocumentId);
    
    const res = await fetch(
      `${BASE_API_URL}/products/${productDocumentId}/draft-variants?status=draft`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch draft variants");
    }

    const variants = data.data || data;
    console.log("Draft variants found:", Array.isArray(variants) ? variants.length : 0);
    return Array.isArray(variants) ? variants : [];
  } catch (err) {
    console.error("Error fetching draft variants:", err);
    return [];
  }
}

/**
 * Delete a product variant
 * @param {string} documentId - Document ID of variant to delete
 * @returns {Object} Delete response from Strapi
 */
export async function deleteVariantAPI(documentId) {
  const res = await fetch(`${BASE_API_URL}/variants/${documentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.error?.message || data?.error || "Failed to delete variant");
  }

  return data;
}

/**
 * Unset isDefault for all other variants of a product when setting a new default
 * Enforces "only one default per product" constraint
 * @param {number} productId - Product ID (numeric)
 * @param {number} defaultVariantId - Variant ID to keep as default (numeric)
 * @returns {Object} Response from backend
 */
export async function unsetOtherDefaultsAPI(productId, defaultVariantId) {
  try {
    const res = await fetch(`${BASE_API_URL}/products/${productId}/unset-other-defaults`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        variantId: defaultVariantId,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.warn("Failed to unset other defaults:", data?.error || "Unknown error");
      // Don't throw - this is a non-critical operation
      return data;
    }

    console.log("Successfully unset other defaults for product", productId);
    return data;
  } catch (err) {
    console.error("Error unsetting other defaults:", err);
    // Don't throw - this is a non-critical operation
    return { success: false, error: err.message };
  }
}

/**
 * Upload variant images
 * @param {Array<File>} files - Array of image files to upload
 * @returns {Object} Upload response from Strapi
 */
export async function uploadVariantImages(files) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));

  const res = await fetch(`${BASE_API_URL}/upload/variants/images`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("Image upload failed: " + error);
  }

  return res.json();
}

/**
 * Upload variant videos
 * @param {Array<File>} files - Array of video files to upload
 * @returns {Object} Upload response from Strapi
 */
export async function uploadVariantVideos(files) {
  const formData = new FormData();
  files.forEach((file) => formData.append("files", file));

  const res = await fetch(`${BASE_API_URL}/upload/variants/videos`, {
    method: "POST",
    body: formData,
    credentials: "include",
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error("Video upload failed: " + error);
  }

  return res.json();
}

// ============================================================================
// CATEGORY AND SUBCATEGORY API FUNCTIONS
// ============================================================================

/**
 * Fetch all categories from backend
 * @returns {Array} Array of categories
 */
export async function fetchCategoriesAPI() {
  try {
    const res = await fetch(`${BASE_API_URL}/categories`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch categories");
    }

    return data.data || [];
  } catch (err) {
    console.error("Error fetching categories:", err);
    return [];
  }
}

/**
 * Fetch all subcategories from backend
 * @returns {Array} Array of subcategories
 */
export async function fetchSubcategoriesAPI() {
  try {
    const res = await fetch(`${BASE_API_URL}/subcategories`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    
    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch subcategories");
    }

    return data.data || [];
  } catch (err) {
    console.error("Error fetching subcategories:", err);
    return [];
  }
}

// ============================================================================
// FAQ API FUNCTIONS
// ============================================================================
/**
 * Fetch all FAQs with optional pagination
 * @param {Object} options - Query options { page, pageSize, populate }
 * @returns {Array} List of FAQs
 */
export async function fetchFAQsAPI(options = {}) {
  try {
    const query = new URLSearchParams();
    if (options.page) query.append("page", options.page);
    if (options.pageSize) query.append("pageSize", options.pageSize);
    if (options.populate) query.append("populate", options.populate);

    const res = await fetch(`${BASE_API_URL}/faqs${query.toString() ? "?" + query : ""}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Failed to fetch FAQs");
    }

    return data.data || [];
  } catch (err) {
    console.error("Error fetching FAQs:", err);
    throw err;
  }
}

/**
 * Fetch a single FAQ by ID with all relationships
 * @param {string|number} faqId - FAQ ID or documentId
 * @returns {Object} FAQ with products
 */
export async function fetchFAQByIdAPI(faqId) {
  try {
    const res = await fetch(`${BASE_API_URL}/faqs/${faqId}`, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok || !data.data) {
      throw new Error(data?.error || "FAQ not found");
    }

    return data.data;
  } catch (err) {
    console.error(`Error fetching FAQ ${faqId}:`, err);
    throw err;
  }
}

/**
 * Create a new FAQ
 * @param {Object} faqData - { Question, Answer }
 * @param {string} status - 'draft' or 'published' (default: 'published')
 * @returns {Object} Created FAQ
 */
export async function createFAQAPI(faqData, status = "published") {
  try {
    const payload = {
      Question: faqData.Question || faqData.question,
      Answer: faqData.Answer || faqData.answer,
    };

    const res = await fetch(`${BASE_API_URL}/faqs?status=${status}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("FAQ creation failed:", data);
      throw new Error(data?.error || "Failed to create FAQ");
    }

    console.log("FAQ created:", data.data);
    return data.data;
  } catch (err) {
    console.error("Error creating FAQ:", err);
    throw err;
  }
}

/**
 * Update an existing FAQ
 * @param {string|number} faqId - FAQ ID or documentId
 * @param {Object} updateData - { Question, Answer }
 * @param {string} status - 'draft' or 'published'
 * @returns {Object} Updated FAQ
 */
export async function updateFAQAPI(faqId, updateData, status = "published") {
  try {
    const payload = {
      Question: updateData.Question || updateData.question,
      Answer: updateData.Answer || updateData.answer,
    };

    const res = await fetch(
      `${BASE_API_URL}/faqs/${faqId}?status=${status}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    if (!res.ok) {
      console.error("FAQ update failed:", data);
      throw new Error(data?.error || "Failed to update FAQ");
    }

    console.log("FAQ updated:", data.data);
    return data.data;
  } catch (err) {
    console.error("Error updating FAQ:", err);
    throw err;
  }
}

/**
 * Delete a FAQ
 * @param {string|number} faqId - FAQ ID or documentId
 * @returns {Object} Delete response
 */
export async function deleteFAQAPI(faqId) {
  try {
    const res = await fetch(`${BASE_API_URL}/faqs/${faqId}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(data?.error || "Failed to delete FAQ");
    }

    console.log("FAQ deleted");
    return data;
  } catch (err) {
    console.error(`Error deleting FAQ ${faqId}:`, err);
    throw err;
  }
}

/**
 * Link products to an FAQ
 * Creates relations in Strapi junction table
 * @param {string|number} faqId - FAQ ID or documentId
 * @param {Array} productIds - Array of product IDs (numeric IDs preferred)
 * @returns {Object} Updated FAQ with linked products
 */
export async function linkProductsToFAQAPI(faqId, productIds) {
  try {
    console.log("Frontend: Linking products to FAQ");
    console.log("  FAQ ID:", faqId);
    console.log("  Product IDs:", productIds);

    const payload = {
      products: productIds || [],
    };

    const res = await fetch(`${BASE_API_URL}/faqs/${faqId}/products`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    
    if (!res.ok) {
      console.error("FAQ linking failed:");
      console.error("   Response status:", res.status);
      console.error("   Response data:", data);
      throw new Error(data?.error?.message || data?.error || data?.message || "Failed to link products to FAQ");
    }

    console.log("FAQ linking successful:", data);
    return data;
  } catch (err) {
    console.error("Error linking products to FAQ:", err);
    throw err;
  }
}

/**
 * Unlink products from an FAQ
 * @param {string|number} faqId - FAQ ID or documentId
 * @param {Array} productIdsToRemove - Array of product IDs to unlink
 * @returns {Object} Updated FAQ
 */
export async function unlinkProductsFromFAQAPI(faqId, productIdsToRemove) {
  try {
    console.log("Frontend: Unlinking products from FAQ");
    console.log("  FAQ ID:", faqId);
    console.log("  Product IDs to remove:", productIdsToRemove);

    const payload = {
      productIdsToRemove: productIdsToRemove || [],
    };

    const res = await fetch(`${BASE_API_URL}/faqs/${faqId}/products`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    
    if (!res.ok) {
      console.error("FAQ unlinking failed:", data);
      throw new Error(data?.error || "Failed to unlink products from FAQ");
    }

    console.log("FAQ unlinking successful");
    return data;
  } catch (err) {
    console.error("Error unlinking products from FAQ:", err);
    throw err;
  }
}

/**
 * Fetch FAQs by product ID
 * @param {string|number} productId - Product ID or documentId
 * @returns {Array} FAQs linked to this product (transformed to frontend format)
 */
export async function fetchFAQsByProductAPI(productId) {
  try {
    const endpoint = `${BASE_API_URL}/products/${productId}/faqs`;
    console.log("Frontend: Fetching FAQs for product:", productId);
    console.log(`Frontend: Calling endpoint: ${endpoint}`);
    
    const res = await fetch(endpoint, {
      method: "GET",
      credentials: "include",
    });

    const data = await res.json();
    
    console.log(`Frontend: API Response status: ${res.status}`);
    console.log(`Frontend: Raw response data:`, data);
    
    if (!res.ok) {
      console.error(`Frontend: API Error (${res.status}):`, data?.error);
      throw new Error(data?.error || "Failed to fetch product FAQs");
    }

    const faqs = data.data || [];
    console.log(`Frontend: Received ${faqs.length} FAQs from backend`);
    
    // Backend now returns FAQs already partially transformed, but ensure consistency
    const transformedFAQs = faqs.map((faq) => {
      console.log(`Processing FAQ ${faq.id}:`, { 
        hasQuestion: !!faq.Question, 
        hasAnswer: !!faq.Answer,
        hasAttributes: !!faq.attributes 
      });
      
      // Get question and answer from either top-level or attributes
      const question = faq.Question || faq.attributes?.Question || '';
      const answer = faq.Answer || faq.attributes?.Answer || '';
      
      return {
        id: faq.id,
        documentId: faq.documentId,
        question: question,
        answer: answer,
        Question: question,
        Answer: answer,
      };
    });
    
    console.log("Frontend: FAQs transformed successfully:", transformedFAQs.length);
    if (transformedFAQs.length > 0) {
      console.log(`Frontend: Sample FAQ:`, { 
        id: transformedFAQs[0].id,
        question: transformedFAQs[0].question?.substring(0, 50)
      });
    }
    return transformedFAQs;
  } catch (err) {
    console.error("Frontend: Error fetching product FAQs:", err.message);
    throw err;
  }
}

/**
 * Link FAQs to product (BOTH draft and published versions)
 * CRITICAL: Ensures FAQs appear in both draft and published product versions
 * @param {string|number} productDocumentId - Product documentId
 * @param {Array} faqIds - Array of FAQ IDs (documentIds or numeric)
 * @returns {Object} Link result
 */
export async function linkFAQsToProductAPI(productDocumentId, faqIds) {
  try {
    console.log("Frontend: Linking FAQs to product (all versions)");
    console.log("  Product documentId:", productDocumentId);
    console.log("  FAQ IDs:", faqIds);

    const payload = {
      faqIds: faqIds || [],
    };

    const res = await fetch(
      `${BASE_API_URL}/products/${productDocumentId}/link-faqs`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("FAQ linking failed:");
      console.error("   Response status:", res.status);
      console.error("   Response data:", data);
      throw new Error(
        data?.error?.message ||
          data?.error ||
          data?.message ||
          "Failed to link FAQs to product"
      );
    }

    console.log("FAQs linked to product (all versions):", data);
    return data;
  } catch (err) {
    console.error("Error linking FAQs to product:", err);
    throw err;
  }
}



