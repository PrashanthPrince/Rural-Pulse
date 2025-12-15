// services/faqService.js
const axios = require("axios");
require("dotenv").config();

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

// Helper function to get Strapi headers
const getStrapiHeaders = () => ({
  Authorization: `Bearer ${STRAPI_TOKEN}`,
  "Content-Type": "application/json",
});

module.exports = {
  /**
   * Get all FAQs with pagination and optional relationships
   * @param {Object} options - Query options
   * @returns {Promise<Object>} - FAQs list with pagination
   */
  getFAQs: async ({ page = 1, pageSize = 100, populate = false } = {}) => {
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

      const response = await axios.get(`${STRAPI_URL}/api/faqs`, {
        headers: getStrapiHeaders(),
        params,
      });

      // Transform relationships from data wrapper format if needed
      const faqs = (response.data.data || []).map(faq => {
        if (faq.products && faq.products.data) {
          faq.products = faq.products.data;
        }
        return faq;
      });

      return {
        success: true,
        data: faqs,
        meta: response.data.meta || {},
      };
    } catch (err) {
      console.error("Error fetching FAQs from Strapi:", err.message);
      throw err;
    }
  },

  /**
   * Get FAQ by ID with all relationships
   * @param {string|number} faqId - FAQ ID or documentId
   * @returns {Promise<Object>} - FAQ data with products
   */
  getFAQById: async (faqId) => {
    try {
      const response = await axios.get(
        `${STRAPI_URL}/api/faqs/${faqId}?populate=*`,
        {
          headers: getStrapiHeaders(),
        }
      );

      let faq = response.data.data;
      
      // Transform relationships from data wrapper format if needed
      if (faq.products && faq.products.data) {
        faq.products = faq.products.data;
      }

      return faq;
    } catch (err) {
      console.error("Error fetching FAQ by ID:", err.message);
      throw err;
    }
  },

  /**
   * Create a new FAQ (without product links)
   * @param {Object} faqData - FAQ data with Question and Answer
   * @param {string} status - 'draft' or 'published' (default: 'published')
   * @returns {Promise<Object>} - Created FAQ
   */
  createFAQ: async (faqData, status = "published") => {
    try {
      console.log("\n=== CREATE FAQ SERVICE ===");
      console.log(`Question: ${faqData.Question?.substring(0, 50)}...`);
      console.log(`Answer: ${faqData.Answer?.substring(0, 50)}...`);
      console.log(`Status: ${status}`);

      const { Question, Answer } = faqData;

      if (!Question) throw new Error("Question is required");
      if (!Answer) throw new Error("Answer is required");

      const payload = {
        data: {
          Question,
          Answer,
          publishedAt: status === "published" ? new Date().toISOString() : null,
        },
      };

      const response = await axios.post(
        `${STRAPI_URL}/api/faqs?status=${status}`,
        payload,
        {
          headers: getStrapiHeaders(),
        }
      );

      let faq = response.data.data;
      console.log(`✓ FAQ created with ID: ${faq.id}, documentId: ${faq.documentId}`);

      // Fetch full FAQ with relationships to ensure complete data
      if (faq.documentId || faq.id) {
        const fullFAQ = await module.exports.getFAQById(faq.documentId || faq.id);
        return fullFAQ;
      }

      return faq;
    } catch (err) {
      console.error("Error creating FAQ:");
      console.error("Status:", err.response?.status);
      console.error("Error data:", JSON.stringify(err.response?.data, null, 2));
      console.error("Message:", err.message);
      throw err;
    }
  },

  /**
   * Update an existing FAQ (Question and Answer only, not products)
   * @param {string|number} faqId - FAQ ID or documentId
   * @param {Object} updateData - Updated FAQ data (Question, Answer)
   * @param {string} status - 'draft' or 'published'
   * @returns {Promise<Object>} - Updated FAQ
   */
  updateFAQ: async (faqId, updateData, status = "published") => {
    try {
      console.log("\n=== UPDATE FAQ SERVICE ===");
      console.log(`FAQ ID: ${faqId}`);
      console.log(`Question: ${updateData.Question?.substring(0, 50)}...`);
      console.log(`Answer: ${updateData.Answer?.substring(0, 50)}...`);

      const { Question, Answer } = updateData;

      if (!Question) throw new Error("Question is required");
      if (!Answer) throw new Error("Answer is required");

      const payload = {
        data: {
          Question,
          Answer,
          publishedAt: status === "published" ? new Date().toISOString() : null,
        },
      };

      let url = `${STRAPI_URL}/api/faqs/${faqId}`;
      if (status) {
        url += `?status=${status}`;
      }

      const response = await axios.put(url, payload, {
        headers: getStrapiHeaders(),
      });

      let faq = response.data.data;
      console.log(`✓ FAQ updated with ID: ${faq.id}`);

      // Fetch full FAQ with relationships
      if (faq.documentId || faq.id) {
        const fullFAQ = await module.exports.getFAQById(faq.documentId || faq.id);
        return fullFAQ;
      }

      return faq;
    } catch (err) {
      console.error("Error updating FAQ:");
      console.error("Status:", err.response?.status);
      console.error("Error data:", JSON.stringify(err.response?.data, null, 2));
      console.error("Message:", err.message);
      throw err;
    }
  },

  /**
   * Delete a FAQ
   * @param {string|number} faqId - FAQ ID or documentId
   * @returns {Promise<Object>} - Delete result
   */
  deleteFAQ: async (faqId) => {
    try {
      console.log("\n=== DELETE FAQ SERVICE ===");
      console.log(`FAQ ID: ${faqId}`);

      const response = await axios.delete(
        `${STRAPI_URL}/api/faqs/${faqId}`,
        {
          headers: getStrapiHeaders(),
        }
      );

      console.log(`✓ FAQ deleted: ${faqId}`);
      return response.data;
    } catch (err) {
      console.error("Error deleting FAQ:");
      console.error("Status:", err.response?.status);
      console.error("Error data:", JSON.stringify(err.response?.data, null, 2));
      console.error("Message:", err.message);
      throw err;
    }
  },

  /**
   * Link products to an existing FAQ
   * Creates relations for ALL versions (draft + published) of the FAQ
   * @param {string|number} faqId - FAQ ID (numeric or documentId)
   * @param {Array} productIds - Array of product IDs (numeric IDs preferred, documentIds supported)
   * @returns {Promise<Object>} - Updated FAQ with linked products
   */
  linkProductsToFAQ: async (faqId, productIds = []) => {
    try {
      console.log(`\n=== LINK PRODUCTS TO FAQ ===`);
      console.log(`FAQ ID input: ${faqId} (type: ${typeof faqId})`);
      console.log(`Product IDs input:`, productIds);

      // Find ALL versions of the FAQ (both draft and published)
      let faqIds = [];
      
      if (isNaN(faqId)) {
        // faqId is a documentId, need to find both draft and published versions
        try {
          const faqRes = await axios.get(
            `${STRAPI_URL}/api/faqs?filters[documentId][$eq]=${faqId}`,
            {
              headers: getStrapiHeaders(),
            }
          );

          if (faqRes.data.data && faqRes.data.data.length > 0) {
            faqIds = faqRes.data.data.map(f => f.id);
            console.log(`✓ Found FAQ documentId "${faqId}" with versions:`, faqIds);
          } else {
            throw new Error(`FAQ with documentId "${faqId}" not found`);
          }
        } catch (err) {
          console.error(`❌ Could not fetch FAQ ${faqId}:`, err.message);
          throw err;
        }
      } else {
        // Already numeric ID
        faqIds = [Number(faqId)];
        console.log(`✓ Using FAQ numeric ID: ${faqId}`);
      }

      // Convert product IDs to numeric (handles both numeric IDs and documentIds)
      let numericProductIds = [];
      if (productIds && productIds.length > 0) {
        for (const productId of productIds) {
          try {
            // Check if productId is already numeric (not a documentId string)
            const isNumericId = typeof productId === 'number' || (typeof productId === 'string' && /^\d+$/.test(productId));
            
            if (isNumericId) {
              // Already numeric ID, use it directly
              numericProductIds.push(Number(productId));
              console.log(`✓ Product numeric ID: ${productId}`);
            } else {
              // It's a documentId, need to convert to numeric ID
              console.log(`🔍 Searching for product documentId: "${productId}"`);
              const productRes = await axios.get(
                `${STRAPI_URL}/api/products?filters[documentId][$eq]=${productId}`,
                {
                  headers: getStrapiHeaders(),
                }
              );

              console.log(`📦 Product search response:`, {
                totalFound: productRes.data.data?.length,
                products: productRes.data.data?.map(p => ({ id: p.id, documentId: p.documentId, publishedAt: p.publishedAt }))
              });

              if (productRes.data.data && productRes.data.data.length > 0) {
                // Use the first product version (preferring published)
                const publishedProduct = productRes.data.data.find(p => p.publishedAt !== null);
                const productToLink = publishedProduct || productRes.data.data[0];
                
                numericProductIds.push(productToLink.id);
                console.log(`✓ Product "${productId}" → ID: ${productToLink.id}`);
              } else {
                console.warn(`⚠️ No product found for documentId: "${productId}"`);
              }
            }
          } catch (err) {
            console.error(`❌ Error processing product ${productId}:`, err.message);
            console.error("Error details:", err.response?.data);
          }
        }
      }

      if (numericProductIds.length === 0) {
        console.log("⚠️ No valid products found to link");
        return { success: true, message: "No products to link", productIds: [] };
      }

      // Link the products to ALL versions of the FAQ (both draft and published)
      console.log(`\n🔗 Linking ${numericProductIds.length} product(s) to ${faqIds.length} FAQ version(s)`);
      
      const payload = {
        data: {
          products: numericProductIds,
        },
      };

      console.log(`📤 Sending FAQ link payload to Strapi: ${JSON.stringify(payload)}`);

      // Link to each version of the FAQ
      let lastFaq = null;
      for (const faqNumericId of faqIds) {
        try {
          console.log(`\n🔗 Linking products to FAQ ID: ${faqNumericId}`);
          
          const response = await axios.put(
            `${STRAPI_URL}/api/faqs/${faqNumericId}`,
            payload,
            {
              headers: getStrapiHeaders(),
            }
          );

          let faq = response.data.data;
          lastFaq = faq;

          console.log(`✅ FAQ ${faqNumericId} linked successfully. Response:`, {
            faqId: faq.id,
            documentId: faq.documentId,
            productsCount: faq.products?.length || 0
          });
        } catch (err) {
          console.error(`❌ Error linking products to FAQ ${faqNumericId}:`, err.message);
          throw err;
        }
      }

      // Fetch and return the full FAQ with relationships (use the last one or the first)
      if (lastFaq && (lastFaq.documentId || lastFaq.id)) {
        const fullFAQ = await module.exports.getFAQById(lastFaq.documentId || lastFaq.id);
        return fullFAQ;
      }

      return lastFaq;
    } catch (err) {
      console.error("❌ Error linking products to FAQ:");
      console.error("   Error message:", err.message);
      console.error("   Response status:", err.response?.status);
      console.error("   Response data:", JSON.stringify(err.response?.data, null, 2));
      throw err;
    }
  },

  /**
   * Unlink products from a FAQ
   * @param {string|number} faqId - FAQ ID or documentId
   * @param {Array} productIdsToRemove - Array of product IDs to unlink
   * @returns {Promise<Object>} - Updated FAQ
   */
  unlinkProductsFromFAQ: async (faqId, productIdsToRemove = []) => {
    try {
      console.log("\n=== UNLINK PRODUCTS FROM FAQ ===");
      console.log(`FAQ ID: ${faqId}`);
      console.log(`Products to remove:`, productIdsToRemove);

      // Find ALL versions of the FAQ
      let faqIds = [];
      
      if (isNaN(faqId)) {
        const faqRes = await axios.get(
          `${STRAPI_URL}/api/faqs?filters[documentId][$eq]=${faqId}?populate=products`,
          {
            headers: getStrapiHeaders(),
          }
        );

        if (faqRes.data.data && faqRes.data.data.length > 0) {
          faqIds = faqRes.data.data.map(f => f.id);
        } else {
          throw new Error(`FAQ with documentId "${faqId}" not found`);
        }
      } else {
        faqIds = [Number(faqId)];
      }

      // Unlink from each version
      let lastFaq = null;
      for (const faqNumericId of faqIds) {
        try {
          // Get current products
          const faqRes = await axios.get(
            `${STRAPI_URL}/api/faqs/${faqNumericId}?populate=products`,
            {
              headers: getStrapiHeaders(),
            }
          );

          const currentProducts = faqRes.data.data.products || [];
          const remainingProducts = currentProducts.filter(p => !productIdsToRemove.includes(p.id));

          const payload = {
            data: {
              products: remainingProducts.map(p => p.id),
            },
          };

          const response = await axios.put(
            `${STRAPI_URL}/api/faqs/${faqNumericId}`,
            payload,
            {
              headers: getStrapiHeaders(),
            }
          );

          lastFaq = response.data.data;
          console.log(`✓ FAQ ${faqNumericId} unlinked successfully`);
        } catch (err) {
          console.error(`Error unlinking products from FAQ ${faqNumericId}:`, err.message);
          throw err;
        }
      }

      // Fetch and return full FAQ
      if (lastFaq && (lastFaq.documentId || lastFaq.id)) {
        const fullFAQ = await module.exports.getFAQById(lastFaq.documentId || lastFaq.id);
        return fullFAQ;
      }

      return lastFaq;
    } catch (err) {
      console.error("Error unlinking products from FAQ:", err.message);
      throw err;
    }
  },

  /**
   * Get FAQs by product
   * @param {string|number} productId - Product ID or documentId
   * @returns {Promise<Array>} - FAQs linked to this product (and all versions of it)
   */
  getFAQsByProduct: async (productId) => {
    try {
      console.log(`\n=== FETCH FAQs BY PRODUCT ===`);
      console.log(`Product ID input: ${productId} (type: ${typeof productId})`);

      // First, determine what product IDs we need to search for
      let productIds = [];
      const isNumericId = typeof productId === 'number' || (typeof productId === 'string' && /^\d+$/.test(productId));
      
      if (isNumericId) {
        // It's numeric - find all versions using the documentId
        console.log(`📦 Product ID is numeric: ${productId}`);
        try {
          const prodRes = await axios.get(
            `${STRAPI_URL}/api/products/${productId}?populate=*`,
            {
              headers: getStrapiHeaders(),
            }
          );
          
          if (prodRes.data.data && prodRes.data.data.documentId) {
            const documentId = prodRes.data.data.documentId;
            console.log(`✓ Found documentId: ${documentId}`);
            
            // Now find all versions of this product (both draft and published)
            const allVersionsRes = await axios.get(
              `${STRAPI_URL}/api/products?filters[documentId][$eq]=${documentId}`,
              {
                headers: getStrapiHeaders(),
              }
            );
            
            if (allVersionsRes.data.data && allVersionsRes.data.data.length > 0) {
              productIds = allVersionsRes.data.data.map(p => p.id);
              console.log(`✓ Found ${productIds.length} version(s) of product: ${productIds.join(', ')}`);
            }
          }
        } catch (err) {
          console.log(`⚠️ Could not fetch product details by numeric ID: ${err.message}`);
          // Fallback to just the numeric ID
          productIds = [Number(productId)];
        }
      } else {
        // It's a documentId - find all versions
        console.log(`📦 Product ID is documentId: ${productId}`);
        try {
          const allVersionsRes = await axios.get(
            `${STRAPI_URL}/api/products?filters[documentId][$eq]=${productId}`,
            {
              headers: getStrapiHeaders(),
            }
          );
          
          if (allVersionsRes.data.data && allVersionsRes.data.data.length > 0) {
            productIds = allVersionsRes.data.data.map(p => p.id);
            console.log(`✓ Found ${productIds.length} version(s) of product: ${productIds.join(', ')}`);
          } else {
            console.warn(`⚠️ No products found with documentId: ${productId}`);
            return [];
          }
        } catch (err) {
          console.error(`❌ Error searching for product documentId: ${err.message}`);
          throw err;
        }
      }

      // Fetch all FAQs with product relationships
      console.log(`📋 Fetching all FAQs with relationships...`);
      const response = await axios.get(`${STRAPI_URL}/api/faqs?populate=products`, {
        headers: getStrapiHeaders(),
      });

      let faqs = response.data.data || [];
      console.log(`📋 Total FAQs in system: ${faqs.length}`);

      // Transform FAQs from Strapi format and filter by product
      const linkedFAQs = faqs.filter(faq => {
        // Get products from the FAQ (handle both wrapped and unwrapped format)
        const products = faq.products?.data || faq.products || [];
        
        // Check if this FAQ has any of our product IDs
        const isLinked = products.some(p => {
          const productNumericId = Number(p.id);
          return productIds.includes(productNumericId);
        });
        
        if (isLinked) {
          const question = faq.attributes?.Question || faq.Question || 'N/A';
          console.log(`✓ FAQ ${faq.id} ("${question.substring(0, 50)}...") is linked to product`);
        }
        return isLinked;
      }).map(faq => {
        // Transform Strapi format to flat format for frontend
        // Strapi returns: { id, documentId, attributes: { Question, Answer, ... }, ... }
        // We need to flatten it for the frontend
        const question = faq.attributes?.Question || faq.Question || '';
        const answer = faq.attributes?.Answer || faq.Answer || '';
        
        console.log(`📦 Transforming FAQ ${faq.id}: "${question.substring(0, 30)}..."`);
        
        return {
          id: faq.id,
          documentId: faq.documentId,
          Question: question,
          Answer: answer,
          question: question,
          answer: answer,
          attributes: faq.attributes,
          products: faq.products?.data || faq.products || [],
        };
      });

      console.log(`\n✓ Found ${linkedFAQs.length} FAQs linked to product ${productId}`);
      if (linkedFAQs.length > 0) {
        console.log(`📋 Returning FAQs:`, linkedFAQs.map(f => ({ id: f.id, question: f.Question?.substring(0, 30) })));
      }
      return linkedFAQs;
    } catch (err) {
      console.error("❌ Error fetching FAQs by product:", err.message);
      console.error("Error details:", err.response?.data);
      throw err;
    }
  },

  /**
   * Link products to FAQs for BOTH draft and published versions
   * CRITICAL: This handles the Strapi draft/published pattern where products have 2 IDs
   * @param {string|number} productDocumentId - Product documentId (shared by both versions)
   * @param {Array} faqIds - Array of FAQ IDs (numeric or documentIds)
   * @returns {Promise<Object>} - Success result with linked count
   */
  linkFAQsToProductAllVersions: async (productDocumentId, faqIds = []) => {
    try {
      console.log(`\n=== LINK FAQs TO PRODUCT (ALL VERSIONS) ===`);
      console.log(`Product documentId: ${productDocumentId}`);
      console.log(`FAQ IDs to link: ${faqIds.length}`);

      if (!faqIds || faqIds.length === 0) {
        console.log("⚠️ No FAQs to link");
        return { success: true, message: "No FAQs to link", count: 0 };
      }

      // Find ALL product versions (draft + published)
      let productIds = [];
      try {
        const productRes = await axios.get(
          `${STRAPI_URL}/api/products?filters[documentId][$eq]=${productDocumentId}`,
          {
            headers: getStrapiHeaders(),
          }
        );

        if (productRes.data.data && productRes.data.data.length > 0) {
          productIds = productRes.data.data.map(p => p.id);
          console.log(`✓ Found product documentId "${productDocumentId}" with versions:`, productIds);
        } else {
          throw new Error(`Product with documentId "${productDocumentId}" not found`);
        }
      } catch (err) {
        console.error(`❌ Could not fetch product ${productDocumentId}:`, err.message);
        throw err;
      }

      // For each FAQ, link to all product versions
      let successCount = 0;
      for (const faqId of faqIds) {
        try {
          // Convert FAQ ID to numeric if needed
          let faqNumericId = faqId;
          if (isNaN(faqId)) {
            // It's a documentId, convert to numeric
            const faqRes = await axios.get(
              `${STRAPI_URL}/api/faqs?filters[documentId][$eq]=${faqId}`,
              {
                headers: getStrapiHeaders(),
              }
            );

            if (faqRes.data.data && faqRes.data.data.length > 0) {
              const publishedFaq = faqRes.data.data.find(f => f.publishedAt !== null);
              faqNumericId = publishedFaq ? publishedFaq.id : faqRes.data.data[0].id;
              console.log(`✓ FAQ documentId "${faqId}" → numeric ID: ${faqNumericId}`);
            } else {
              console.warn(`⚠️ FAQ not found: ${faqId}`);
              continue;
            }
          }

          // Link FAQ to ALL product versions
          for (const productId of productIds) {
            try {
              const payload = {
                data: {
                  products: productIds,
                },
              };

              console.log(`🔗 Linking FAQ ${faqNumericId} to product version ${productId}`);

              // Link the products to this FAQ
              const linkRes = await axios.put(
                `${STRAPI_URL}/api/faqs/${faqNumericId}`,
                payload,
                {
                  headers: getStrapiHeaders(),
                }
              );

              console.log(`✅ FAQ ${faqNumericId} linked to product version ${productId}`);
              successCount++;
            } catch (err) {
              console.error(`❌ Error linking FAQ ${faqNumericId} to product ${productId}:`, err.message);
            }
          }
        } catch (err) {
          console.error(`❌ Error processing FAQ ${faqId}:`, err.message);
        }
      }

      console.log(`\n✓ FAQ linking complete: ${successCount} links created`);
      return {
        success: true,
        message: "FAQs linked to all product versions",
        count: successCount,
      };
    } catch (err) {
      console.error("❌ Error linking FAQs to product versions:", err.message);
      throw err;
    }
  },
};
