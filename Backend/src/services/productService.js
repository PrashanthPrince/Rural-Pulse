// services/productService.js
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");
require("dotenv").config();
const { logger } = require("../middleware/pinoLogger");



module.exports = {
  // Create Product
createProduct: async ({ userId, name, description, status, images = [], about_item, product_details, safety_information, usage_directions, product_variants = [], categories = [], sub_categories = [], faqs = [] }) => {
  try {
    console.log("\n=== CREATEPRODUCT SERVICE ===");
    console.log(`🔄 Creating product with status: "${status}" (should be "draft" or "published")`);
    console.log("Input categories:", categories, "Type:", typeof categories, "Is Array:", Array.isArray(categories));
    console.log("Input sub_categories:", sub_categories, "Type:", typeof sub_categories, "Is Array:", Array.isArray(sub_categories));
    console.log("Input faqs:", faqs, "Type:", typeof faqs, "Is Array:", Array.isArray(faqs));
    console.log("Product status:", status);
    
    if (!userId) throw new Error("User not logged in");
    if (!name) throw new Error("Product name is required");
    

    // Convert documentIds to numeric IDs if needed
    let variantIds = [];
    if (product_variants && product_variants.length > 0) {
      for (const variantId of product_variants) {
        try {
          // Fetch variant to get its numeric ID
          const variantRes = await axios.get(
            `${process.env.STRAPI_URL}/api/product-variants?filters[documentId][$eq]=${variantId}&status=draft,published`,
            {
              headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                "Content-Type": "application/json",
              },
            }
          );
          
          if (variantRes.data.data && variantRes.data.data.length > 0) {
            variantIds.push(variantRes.data.data[0].id);
           
          }
        } catch (err) {
          console.warn(` Could not fetch variant ${variantId}:`, err.message);
        }
      }
    }

    // Convert FAQ documentIds to numeric IDs if needed
    let faqIds = [];
    if (faqs && faqs.length > 0) {
      console.log("\n--- Processing FAQs ---");
      console.log("FAQs input:", faqs);
      
      for (const faqId of faqs) {
        try {
          // Fetch FAQ to get its numeric ID
          const faqRes = await axios.get(
            `${process.env.STRAPI_URL}/api/faqs?filters[documentId][$eq]=${faqId}&status=draft,published`,
            {
              headers: {
                Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                "Content-Type": "application/json",
              },
            }
          );
          
          if (faqRes.data.data && faqRes.data.data.length > 0) {
            faqIds.push(faqRes.data.data[0].id);
            console.log(`✓ FAQ ${faqId} → numeric ID: ${faqRes.data.data[0].id}`);
          }
        } catch (err) {
          console.warn(`⚠️ Could not fetch FAQ ${faqId}:`, err.message);
        }
      }
      console.log("📦 Final faqIds to send to Strapi:", faqIds);
    } else {
      console.log("\n--- No FAQs provided ---");
    }

    let categoryIds = [];
    // console.log("\n--- Processing Categories ---");
    // console.log("Categories input:", categories);
    // console.log("Product status:", status);
    // console.log("IS DRAFT?", status === "draft");
    
    if (categories && categories.length > 0 && status === "draft") {
      // console.log("🔄 PROCESSING DRAFT CATEGORIES");
      // Only process categories for draft products
      for (const catId of categories) {
        try {
          const numId = Number(catId);
          // console.log(`Processing category ${numId}`);
          if (!isNaN(numId)) {
            // Step 1: Fetch category by numeric ID to get documentId
            const catRes = await axios.get(
              `${process.env.STRAPI_URL}/api/categories?filters[id][$eq]=${numId}`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            console.log(catRes.data);
            
            const documentId = catRes.data?.data?.[0]?.documentId;
            console.log(`✅ Category ID ${numId} → DocumentId: ${documentId}`);
            
            // Step 2: Fetch category with status=draft using documentId
            console.log(`🔍 Fetching draft category with documentId: ${documentId}`);
            const draftCatRes = await axios.get(
              `${process.env.STRAPI_URL}/api/categories?filters[documentId][$eq]=${documentId}&status=draft`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            
            console.log(`Draft category response:`, draftCatRes.data.data);
            if (draftCatRes.data.data && draftCatRes.data.data.length > 0) {
              const draftCategoryId = draftCatRes.data.data[0].id;
              console.log(`✅✅✅ FOUND DRAFT CATEGORY ID: ${draftCategoryId} (will be sent to payload)`);
              categoryIds.push(draftCategoryId);
            } else {
              console.log(`⚠️ NO DRAFT CATEGORY FOUND for documentId ${documentId}`);
            }
          }
        } catch (err) {
          console.warn(`⚠️ Could not fetch category ${catId}:`, err.message);
        }
      }
      console.log("📦 Final draft categoryIds to send to Strapi:", categoryIds);
    } else if (categories && categories.length > 0) {
      console.log("🔄 PROCESSING PUBLISHED CATEGORIES");
      // For published products, use numeric IDs as-is
      for (const catId of categories) {
        const numId = Number(catId);
        if (!isNaN(numId)) {
          categoryIds.push(numId);
        }
      }
      console.log("📦 Final published categoryIds to send to Strapi:", categoryIds);
    } else {
      console.log("⚠️ No categories provided");
    }

    // Convert subcategory numeric IDs to draft subcategory IDs (only for draft products)
    let subcategoryIds = [];
    console.log("\n--- Processing SubCategories ---");
    console.log("SubCategories input:", sub_categories);
    console.log("Product status:", status);
    console.log("IS DRAFT?", status === "draft");
    
    if (sub_categories && sub_categories.length > 0 && status === "draft") {
      console.log("PROCESSING DRAFT SUBCATEGORIES");
      // Only process subcategories for draft products
      for (const subCatId of sub_categories) {
        try {
          const numId = Number(subCatId);
          console.log(`Processing subcategory ${numId}`);
          if (!isNaN(numId)) {
            // Step 1: Fetch subcategory by numeric ID to get documentId
            const subCatRes = await axios.get(
              `${process.env.STRAPI_URL}/api/sub-categories?filters[id][$eq]=${numId}`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            
            const documentId = subCatRes.data?.data?.[0]?.documentId;
            console.log(` SubCategory ID ${numId} → DocumentId: ${documentId}`);
            
            // Step 2: Fetch subcategory with status=draft using documentId
            console.log(` Fetching draft subcategory with documentId: ${documentId}`);
            const draftSubCatRes = await axios.get(
              `${process.env.STRAPI_URL}/api/sub-categories?filters[documentId][$eq]=${documentId}&status=draft`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                  "Content-Type": "application/json",
                },
              }
            );
            
            console.log(`Draft subcategory response:`, draftSubCatRes.data.data);
            if (draftSubCatRes.data.data && draftSubCatRes.data.data.length > 0) {
              const draftSubCategoryId = draftSubCatRes.data.data[0].id;
              console.log(` FOUND DRAFT SUBCATEGORY ID: ${draftSubCategoryId} (will be sent to payload)`);
              subcategoryIds.push(draftSubCategoryId);
            } else {
              console.log(` NO DRAFT SUBCATEGORY FOUND for documentId ${documentId}`);
            }
          }
        } catch (err) {
          console.warn(` Could not fetch subcategory ${subCatId}:`, err.message);
        }
      }
      console.log(" Final draft subcategoryIds to send to Strapi:", subcategoryIds);
    } else if (sub_categories && sub_categories.length > 0) {
      console.log(" PROCESSING PUBLISHED SUBCATEGORIES");
      // For published products, use numeric IDs as-is
      for (const subCatId of sub_categories) {
        const numId = Number(subCatId);
        if (!isNaN(numId)) {
          subcategoryIds.push(numId);
        }
      }
      console.log(" Final published subcategoryIds to send to Strapi:", subcategoryIds);
    } else {
      console.log(" No subcategories provided");
    }

    // Ensure image IDs are numbers
    const imageIds = images.map(id => {
      const numId = Number(id);
 
      return numId;
    });

    const payload = {
      data: {
        name,
        description,
        UserId: userId.toString(),
        about_item: about_item || "",
        product_details: product_details || "",
        safety_information: safety_information || "",
        usage_directions: usage_directions || ""
      },
    };
    
    // Add images only if there are any
    if (imageIds.length > 0) {
      payload.data.image = imageIds;
    }
    
    // Only include product_variants if there are actual variants
    if (variantIds && variantIds.length > 0) {
      payload.data.product_variants = variantIds;
    }

    // Add categories if provided
    if (categoryIds && categoryIds.length > 0) {
      payload.data.categories = categoryIds;
      console.log("✓ ADDING CATEGORIES TO PAYLOAD:", categoryIds);
    } else {
      console.log("✗ NO CATEGORIES TO ADD - categoryIds is empty or undefined");
    }

    // Add subcategories if provided
    if (subcategoryIds && subcategoryIds.length > 0) {
      payload.data.sub_categories = subcategoryIds;
      console.log("✓ ADDING SUB_CATEGORIES TO PAYLOAD:", subcategoryIds);
    } else {
      console.log("✗ NO SUB_CATEGORIES TO ADD - subcategoryIds is empty or undefined");
    }

    // Add FAQs if provided
    if (faqIds && faqIds.length > 0) {
      payload.data.faqs = faqIds;
      console.log("✓ ADDING FAQs TO PAYLOAD:", faqIds);
    } else {
      console.log("✗ NO FAQs TO ADD - faqIds is empty or undefined");
    }

    console.log("\n=== FINAL PAYLOAD BEING SENT TO STRAPI ===");
    console.log(JSON.stringify(payload, null, 2));
    console.log("\nPayload.data keys:", Object.keys(payload.data));
    console.log("Payload.data.categories:", payload.data.categories);
    console.log("Payload.data.sub_categories:", payload.data.sub_categories);
    console.log("Payload.data.faqs:", payload.data.faqs);

    const response = await axios.post(
      `${process.env.STRAPI_URL}/api/products?status=${status}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("\n=== STRAPI RESPONSE ===");
    console.log(`✅ Product created with status: "${status}"`);
    console.log("Response status:", response.status);
    console.log("Product ID:", response.data.data?.id);
    console.log("Product documentId:", response.data.data?.documentId);
    console.log("Categories in response:", response.data.data?.categories);
    console.log("Sub_categories in response:", response.data.data?.sub_categories);
    console.log("Full response data:", JSON.stringify(response.data.data, null, 2));

    // Fetch the full product with relationships populated
    console.log("\n=== FETCHING FULL PRODUCT WITH RELATIONSHIPS ===");
    // For draft products, we need to include status parameter
    const statusParam = status === "draft" ? `&status=${status}` : "";
    const fullProductRes = await axios.get(
      `${process.env.STRAPI_URL}/api/products/${response.data.data.documentId}?populate=*${statusParam}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Full product with relationships:", JSON.stringify(fullProductRes.data.data, null, 2));

    const product = fullProductRes.data.data;
    
    // Transform relationships from data wrapper format if needed
    if (product.categories && product.categories.data) {
      product.categories = product.categories.data;
    }
    if (product.sub_categories && product.sub_categories.data) {
      product.sub_categories = product.sub_categories.data;
    }
    
    console.log("Transformed product before returning:", {
      id: product.id,
      categories: product.categories,
      sub_categories: product.sub_categories
    });

    return product;
  } catch (err) {
    console.error(" Error in createProduct:");
    console.error("Status:", err.response?.status);
    console.error("Error data:", JSON.stringify(err.response?.data, null, 2));
    console.error("Message:", err.message);
    throw err;
  }
},

  // Helper: Check if draft has been modified after publishing
  hasProductChanged: (draftProduct, publishedProduct) => {
    const draftUpdatedAt = new Date(draftProduct.updatedAt || draftProduct.updated_at);
    const publishedPublishedAt = new Date(publishedProduct.publishedAt || publishedProduct.published_at);
    
    return draftUpdatedAt > publishedPublishedAt;
  },

  // Helper: Merge and filter products
  // Helper function to sort variants by sortOrder only
  // Variants with null/undefined sortOrder are pushed to the bottom
  sortVariants: (variants) => {
    if (!Array.isArray(variants)) return variants;
    return [...variants].sort((a, b) => {
      const sortOrderA = a.sortOrder ?? 9999;
      const sortOrderB = b.sortOrder ?? 9999;
      return sortOrderA - sortOrderB;
    });
  },

  mergeAndFilterProducts: (draftProducts, publishedProducts) => {
    const publishedMap = new Map(publishedProducts.map(p => [p.documentId, p]));
    const draftMap = new Map(draftProducts.map(p => [p.documentId, p]));
    const publishedIds = new Set(publishedProducts.map(p => p.documentId));
    
    // console.log("\n=== MERGE AND FILTER PRODUCTS ===");
    // console.log(`Draft products: ${draftProducts.length}, Published products: ${publishedProducts.length}`);
    
    const allDocumentIds = new Set([...publishedMap.keys(), ...draftMap.keys()]);
    // console.log(`Unique product documentIds: ${allDocumentIds.size}`);
    
    const result = [];
    
    // Process each unique product
    for (const docId of allDocumentIds) {
      const draftProd = draftMap.get(docId);
      const publishedProd = publishedMap.get(docId);
      
      // Case 1: Only published (no draft) - SHOW PUBLISHED
      if (publishedProd && !draftProd) {
        // console.log(`✓ PUBLISHED ONLY: ${docId} - No draft version`);
        result.push({ ...publishedProd, status: 'published' });
      }
      
      // Case 2: Only draft (no published) - SHOW DRAFT
      else if (draftProd && !publishedProd) {
        // console.log(`✓ DRAFT ONLY: ${docId} - No published version`);
        result.push({ ...draftProd, status: 'draft' });
      }
      
      // Case 3: Both exist - ALWAYS PREFER PUBLISHED, HIDE DRAFT
      else if (draftProd && publishedProd) {
        // If both exist, ALWAYS show published and hide draft
        // This handles newly published products and prevents duplicates
        // console.log(`✓ PUBLISHED (SUPPRESSED DRAFT): ${docId} - Both versions exist, showing published only`);
        result.push({ ...publishedProd, status: 'published' });
      }
    }
    
    console.log(`Final merged products: ${result.length}`);
    return result;
  },

  // Get Products
  getProducts: async (userId) => {
    if (!userId) throw new Error("User not logged in");

    const headers = {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    "Content-Type": "application/json",
  };

  const draftReq = axios.get(`${process.env.STRAPI_URL}/api/products`, {
    headers,
    params: {
      status: "draft",
      "filters[UserId][$eq]": userId,
      "populate[0]": "image",
      "populate[1]": "categories",
      "populate[2]": "sub_categories",
      "populate[3]": "product_variants",
    },
  });

  const publishedReq = axios.get(`${process.env.STRAPI_URL}/api/products`, {
    headers,
    params: {
      status: "published",
      "filters[UserId][$eq]": userId,
      "populate[0]": "image",
      "populate[1]": "categories",
      "populate[2]": "sub_categories",
      "populate[3]": "product_variants",
    },
  });
  

  const [draftRes, publishedRes] = await Promise.all([draftReq, publishedReq]);

  const draftProducts = draftRes.data.data || [];
  const publishedProducts = publishedRes.data.data || [];
  
  // Debug: Log first product structure
  // if (draftProducts.length > 0) {
  //   console.log("📦 First draft product:", JSON.stringify(draftProducts[0], null, 2));
  // }
  // if (publishedProducts.length > 0) {
  //   console.log("📦 First published product:", JSON.stringify(publishedProducts[0], null, 2));
  // }
  
  // Merge and filter products with proper status assignment
  const mergedProducts = module.exports.mergeAndFilterProducts(draftProducts, publishedProducts);
  
  // Transform all products to handle relationship format
  const transformedProducts = mergedProducts.map(product => {
    // Handle Strapi relationship format (may be { data: [...] } or just [...])
    if (product.categories && product.categories.data) {
      product.categories = product.categories.data;
    }
    if (product.sub_categories && product.sub_categories.data) {
      product.sub_categories = product.sub_categories.data;
    }
    // CRITICAL: Sort variants ONLY by sortOrder (ascending)
    if (product.product_variants && Array.isArray(product.product_variants)) {
      product.product_variants = module.exports.sortVariants(product.product_variants);
    }
    return product;
  });
 
  return { products: transformedProducts };
  },

  // Update product
updateProduct : async ({
  documentId,
  name,
  description,
  existingImageIds,
  selectedSlots,
  newFiles,
  status,
  about_item = "",
  product_details = "",
  safety_information = "",
  usage_directions = "",
  product_variants = [],
  categories = [],
  sub_categories = [],
  faqs = []
}) => {
  console.log("\n=== UPDATE PRODUCT SERVICE ===");
  console.log("Input categories:", categories, "Type:", typeof categories, "Is Array:", Array.isArray(categories));
  console.log("Input sub_categories:", sub_categories, "Type:", typeof sub_categories, "Is Array:", Array.isArray(sub_categories));
  console.log("Input faqs:", faqs, "Type:", typeof faqs, "Is Array:", Array.isArray(faqs));
  
  // 1. Fetch product by documentId to get its numeric ID
  console.log("Fetching product with documentId:", documentId);
  let productNumericId = null;
  try {
    // Try to find the product in any status (draft or published)
    const productRes = await axios.get(
      `${process.env.STRAPI_URL}/api/products?filters[documentId][$eq]=${documentId}&status=draft,published`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    
    if (productRes.data.data && productRes.data.data.length > 0) {
      productNumericId = productRes.data.data[0].id;
      console.log("Found product numeric ID:", productNumericId);
    } else {
      throw new Error(`Product not found with documentId: ${documentId}`);
    }
  } catch (err) {
    console.error("Error fetching product:", err.message);
    throw err;
  }

  // ---------------------------------------------------
  // 2. Upload NEW FILES directly here (no separate func)
  // ---------------------------------------------------
  let uploadedIds = [];

  if (newFiles && newFiles.length > 0) {
    for (const file of newFiles) {
      const formData = new FormData();
      formData.append("files", file.buffer, {
  filename: file.originalname,
  contentType: file.mimetype,
});


      const uploadRes = await axios.post(
        `${process.env.STRAPI_URL}/api/upload`,
        formData,
        { headers: formData.getHeaders() }
      );

      // Strapi returns array, example: [{ id: 12, url: '/uploads/...' }]
      uploadedIds.push(uploadRes.data[0].id);
    }
  }

  // ---------------------------------------------------
  // 3. Slot replacement logic (BACKEND HANDLES EVERYTHING)
  // ---------------------------------------------------
  // Filter out nulls from existingImageIds first
  const validExistingIds = existingImageIds.filter((id) => id !== null && id !== undefined && id !== "");
  let finalSlots = [...validExistingIds]; 
  // example: [12, 15, 20]

  selectedSlots.forEach((slotIndex, i) => {
    if (uploadedIds[i] !== undefined && slotIndex < finalSlots.length) {
      finalSlots[slotIndex] = uploadedIds[i];
    }
  });

  // Extra uploaded images → append
  if (uploadedIds.length > selectedSlots.length) {
    const extras = uploadedIds.slice(selectedSlots.length);
    finalSlots.push(...extras);
  }

  // Remove nulls again to be safe and convert to numbers
  const finalImageIds = finalSlots
    .filter((id) => id !== null && id !== undefined && id !== "")
    .map(id => Number(id));

  // Convert variant documentIds to numeric IDs
  let variantIds = [];
  if (product_variants && product_variants.length > 0) {
    for (const variantId of product_variants) {
      try {
        // Fetch variant to get its numeric ID
        const variantRes = await axios.get(
          `${process.env.STRAPI_URL}/api/product-variants?filters[documentId][$eq]=${variantId}&status=draft,published`,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        
        if (variantRes.data.data && variantRes.data.data.length > 0) {
          variantIds.push(variantRes.data.data[0].id);
          
        }
      } catch (err) {
        console.warn(` Could not fetch variant ${variantId}:`, err.message);
      }
    }
  }

  // Convert FAQ documentIds to numeric IDs if needed
  let faqIds = [];
  if (faqs && faqs.length > 0) {
    console.log("\n--- Processing FAQs ---");
    console.log("FAQs input:", faqs);
    
    for (const faqId of faqs) {
      try {
        // Fetch FAQ to get its numeric ID
        const faqRes = await axios.get(
          `${process.env.STRAPI_URL}/api/faqs?filters[documentId][$eq]=${faqId}&status=draft,published`,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        
        if (faqRes.data.data && faqRes.data.data.length > 0) {
          faqIds.push(faqRes.data.data[0].id);
          console.log(`✓ FAQ ${faqId} → numeric ID: ${faqRes.data.data[0].id}`);
        }
      } catch (err) {
        console.warn(`⚠️ Could not fetch FAQ ${faqId}:`, err.message);
      }
    }
    console.log("📦 Final faqIds to send to Strapi:", faqIds);
  } else {
    console.log("\n--- No FAQs provided ---");
  }

  // Convert category numeric IDs to draft category IDs (only for draft products)
  let categoryIds = [];
  console.log("\n--- Processing Categories ---");
  console.log("Categories input:", categories);
  console.log("Product status:", status);
  console.log("IS DRAFT?", status === "draft");
  
  if (categories && categories.length > 0) {
    for (const catId of categories) {
      try {
        const numId = Number(catId);
        console.log(`Processing category ${numId}`);
        if (!isNaN(numId)) {
          // For both draft and published, just use the numeric ID directly
          // Strapi handles the relationship regardless of status
          categoryIds.push(numId);
          console.log(`✅ Added category ID: ${numId}`);
        }
      } catch (err) {
        console.warn(`⚠️ Could not process category ${catId}:`, err.message);
      }
    }
    console.log("📦 Final categoryIds to send to Strapi:", categoryIds);
  } else {
    console.log("⚠️ No categories provided");
  }

  // Convert subcategory numeric IDs to draft subcategory IDs (only for draft products)
  let subcategoryIds = [];
  console.log("\n--- Processing SubCategories ---");
  console.log("SubCategories input:", sub_categories);
  console.log("Product status:", status);
  console.log("IS DRAFT?", status === "draft");
  
  if (sub_categories && sub_categories.length > 0) {
    for (const subCatId of sub_categories) {
      try {
        const numId = Number(subCatId);
        console.log(`Processing subcategory ${numId}`);
        if (!isNaN(numId)) {
          // For both draft and published, just use the numeric ID directly
          // Strapi handles the relationship regardless of status
          subcategoryIds.push(numId);
          console.log(`✅ Added subcategory ID: ${numId}`);
        }
      } catch (err) {
        console.warn(`⚠️ Could not process subcategory ${subCatId}:`, err.message);
      }
    }
    console.log("📦 Final subcategoryIds to send to Strapi:", subcategoryIds);
  } else {
    console.log("⚠️ No subcategories provided");
  }

  // ---------------------------------------------------
  // 4. Update product in Strapi
  // ---------------------------------------------------
  const updatePayload = {
    data: {
      name,
      description,
      about_item,
      product_details,
      safety_information,
      usage_directions
    },
  };
  
  // Add images only if there are any
  if (finalImageIds.length > 0) {
    updatePayload.data.image = finalImageIds;
  }
  
  // Only include product_variants if there are actual variants
  if (variantIds && variantIds.length > 0) {
    updatePayload.data.product_variants = variantIds;
  }

  // Add categories if provided
  if (categoryIds && categoryIds.length > 0) {
    updatePayload.data.categories = categoryIds;
  }

  // Add subcategories if provided
  if (subcategoryIds && subcategoryIds.length > 0) {
    updatePayload.data.sub_categories = subcategoryIds;
  }

  // Add FAQs if provided
  if (faqIds && faqIds.length > 0) {
    updatePayload.data.faqs = faqIds;
  }

  // Build URL with status as query parameter (Strapi expects it here, not in body)
  const statusQuery = status ? `?status=${status}` : '';
  
  console.log("\n=== UPDATE PAYLOAD BEING SENT TO STRAPI ===");
  console.log(JSON.stringify(updatePayload, null, 2));
  console.log("Updating product - documentId:", documentId, "numericId:", productNumericId);
  console.log(`Status parameter: "${status}"`);
  
  let updateRes;
  try {
    if (status === "published") {
      // For publishing: Update ONLY the published version, skip draft entirely
      console.log(`🔄 Publishing product directly (skipping draft update)...`);
      try {
        // First try the publish endpoint - this converts draft to published
        const publishRes = await axios.post(
          `${process.env.STRAPI_URL}/api/products/${documentId}/publish`,
          {},
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(`✅ Product published using /publish endpoint`);
        updateRes = publishRes;
        
        // Now update the published version with new data if needed
        console.log(`🔄 Updating published product with new data...`);
        const updatePublishedRes = await axios.put(
          `${process.env.STRAPI_URL}/api/products/${documentId}?status=published`,
          updatePayload,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(`✅ Published product updated with new data`);
        updateRes = updatePublishedRes;
      } catch (publishErr) {
        console.error(`⚠️ Publish endpoint failed: ${publishErr.message}`);
        console.log(`🔄 Falling back to direct update with status=published...`);
        
        // Fallback: Directly update as published without going through draft
        updateRes = await axios.put(
          `${process.env.STRAPI_URL}/api/products/${documentId}?status=published`,
          updatePayload,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
        console.log(`✅ Product updated as published (fallback method)`);
      }
    } else {
      // For draft: Update only the draft version
      console.log(`🔄 Updating product as draft...`);
      updateRes = await axios.put(
        `${process.env.STRAPI_URL}/api/products/${documentId}?status=draft`,
        updatePayload,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(`✅ Product updated in draft status`);
    }
  } catch (err) {
    console.error("❌ Error updating product in Strapi:");
    console.error("Status:", err.response?.status);
    console.error("Data:", JSON.stringify(err.response?.data, null, 2));
    console.error("Message:", err.message);
    throw err;
  }

  console.log("\n=== UPDATE STRAPI RESPONSE ===");
  console.log("Response status:", updateRes.status);
  console.log("Product ID:", updateRes.data.data?.id);
  console.log("Categories in response:", updateRes.data.data?.categories);
  console.log("Sub_categories in response:", updateRes.data.data?.sub_categories);

  // Fetch the full product with relationships populated
  console.log("\n=== FETCHING FULL UPDATED PRODUCT WITH RELATIONSHIPS ===");
  try {
    // If published, fetch published version; if draft, fetch draft version
    const statusParam = status === "published" ? "&status=published" : "&status=draft";
    const fullProductRes = await axios.get(
      `${process.env.STRAPI_URL}/api/products/${documentId}?populate[0]=image&populate[1]=categories&populate[2]=sub_categories&populate[3]=product_variants${statusParam}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Full updated product:", JSON.stringify(fullProductRes.data.data, null, 2));

    const product = fullProductRes.data.data;
    
    // Transform relationships from data wrapper format if needed
    if (product.categories && product.categories.data) {
      product.categories = product.categories.data;
    }
    if (product.sub_categories && product.sub_categories.data) {
      product.sub_categories = product.sub_categories.data;
    }
    
    console.log("Transformed updated product before returning:", {
      id: product.id,
      categories: product.categories,
      sub_categories: product.sub_categories
    });

    return fullProductRes.data;
  } catch (err) {
    console.error("Error fetching updated product with relationships:", err.message);
    console.error("Error details:", err.response?.data || err);
    
    // Fallback: return the update response which already has the basic data
    console.log("Returning update response as fallback");
    return updateRes.data;
  }
},

  // Upload images
  uploadImages: async (files) => {
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
        `${process.env.STRAPI_URL}/api/upload`,
        form,
        {
          headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
          },
        }
      );

    
      return response.data;
    } catch (err) {
      console.error("Upload error:", err.response?.data || err.message);
      throw new Error(err.response?.data?.error?.message || "Failed to upload files to Strapi");
    }
  },

  // Delete Product
  deleteProduct: async (documentId) => {
    try {
     
      
      const response = await axios.delete(
        `${process.env.STRAPI_URL}/api/products/${documentId}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );

     
      return response.data;
    } catch (err) {
      console.error("Error deleting product:");
      console.error("Full error:", err);
      console.error("Status:", err.response?.status);
      console.error("Data:", err.response?.data);
      console.error("Message:", err.message);
      console.error("Code:", err.code);
      
      if (err.code === 'ECONNREFUSED') {
        throw new Error("Cannot connect to Strapi. Please ensure Strapi is running on " + process.env.STRAPI_URL);
      }
      
      throw new Error(err.response?.data?.error?.message || err.message || "Failed to delete product");
    }
  },

  // Get Single Product By DocumentId with all relationships (including merged draft/published variants)
  getProductByDocumentId: async (documentId) => {
    try {

      // Try the direct single-item endpoint first (more reliable for populate)
      // First try to get published version, then fallback to draft if not found
      let response = null;
      let product = null;
      
      try {
        // Try published version first
        response = await axios.get(
          `${process.env.STRAPI_URL}/api/products/${documentId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
            params: {
              // Use proper populate syntax for Strapi v4
              "populate[0]": "image",
              "populate[1]": "categories",
              "populate[2]": "sub_categories",
              "populate[3]": "product_variants",
              "status": "published"
            },
          }
        );
        product = response.data.data;
      } catch (err) {
        // If published not found, try draft version
        console.log("Published version not found, trying draft...");
        response = await axios.get(
          `${process.env.STRAPI_URL}/api/products/${documentId}`,
          {
            headers: {
              Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
              "Content-Type": "application/json",
            },
            params: {
              // Use proper populate syntax for Strapi v4
              "populate[0]": "image",
              "populate[1]": "categories",
              "populate[2]": "sub_categories",
              "populate[3]": "product_variants",
              "status": "draft"
            },
          }
        );
        product = response.data.data;
      }

    
      if (!product) {
        console.warn(" No product found for documentId:", documentId);
        return null;
      }
      
      console.log("\n=== STRAPI RESPONSE ===");
      console.log("Raw Strapi response data keys:", Object.keys(product));
      console.log("Raw categories from Strapi:", JSON.stringify(product.categories, null, 2));
      console.log("Raw sub_categories from Strapi:", JSON.stringify(product.sub_categories, null, 2));
      
      
      // Merge draft and published variants for the product
      if (product.product_variants && Array.isArray(product.product_variants)) {
      
        
        // Fetch all variant versions (draft and published) for this product
        const variantIds = product.product_variants.map(v => v.documentId || v.id);
        
        if (variantIds.length > 0) {
          try {
            // Get draft variants
            const draftVariantsReq = axios.get(
              `${process.env.STRAPI_URL}/api/product-variants`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                  "Content-Type": "application/json",
                },
                params: {
                  status: "draft",
                  "filters[documentId][$in]": variantIds,
                  populate: "*",
                },
              }
            );
            
            // Get published variants
            const publishedVariantsReq = axios.get(
              `${process.env.STRAPI_URL}/api/product-variants`,
              {
                headers: {
                  Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
                  "Content-Type": "application/json",
                },
                params: {
                  status: "published",
                  "filters[documentId][$in]": variantIds,
                  populate: "*",
                },
              }
            );
            
            const [draftRes, publishedRes] = await Promise.all([draftVariantsReq, publishedVariantsReq]);
            const draftVariants = draftRes.data.data || [];
            const publishedVariants = publishedRes.data.data || [];
           
            
            // Merge variants: show draft if it exists, otherwise show published
            const mergedVariantsMap = new Map();
            
            // Add published variants first
            publishedVariants.forEach(v => {
              mergedVariantsMap.set(v.documentId, { ...v, status: 'published' });
            });
            
            // Override with draft variants if they exist
            draftVariants.forEach(v => {
              mergedVariantsMap.set(v.documentId, { ...v, status: 'draft' });
            });
            
            // Convert map to array, maintaining order from original product.product_variants
            const mergedVariants = variantIds
              .map(docId => mergedVariantsMap.get(docId))
              .filter(v => v !== undefined);
        
            // CRITICAL: Sort variants ONLY by sortOrder (ascending)
            // Variants with null/undefined sortOrder are pushed to the bottom (9999)
            // isDefault does NOT affect position, only pre-selection
            product.product_variants = module.exports.sortVariants(mergedVariants);
          } catch (err) {
           console .warn(" Failed to fetch variant versions, using available variants:", err.message);
          }
        }
      }
      
      console.log("\n=== RETURNING PRODUCT TO FRONTEND ===");
      console.log("Product to return - categories:", product.categories);
      console.log("Product to return - sub_categories:", product.sub_categories);
      
      // Unwrap categories and sub_categories from data wrapper if needed
      if (product.categories && product.categories.data && Array.isArray(product.categories.data)) {
        product.categories = product.categories.data;
      }
      if (product.sub_categories && product.sub_categories.data && Array.isArray(product.sub_categories.data)) {
        product.sub_categories = product.sub_categories.data;
      }
      
      console.log("Product after unwrapping - categories:", product.categories);
      console.log("Product after unwrapping - sub_categories:", product.sub_categories);
      
      return product;
    } catch (err) {
      console.error(" Error fetching product by documentId:", err.message);
      throw new Error(err.response?.data?.error?.message || err.message || "Failed to fetch product");
    }
  },

  // Get Categories from Strapi
  getCategories: async () => {
    try {
      // console.log("\n=== FETCHING CATEGORIES FROM STRAPI ===");
      const response = await axios.get(
        `${process.env.STRAPI_URL}/api/categories`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
          params: {
            populate: {
              sub_categories: {
                populate: "*"
              }
            },
          },
        }
      );

      // console.log("Raw categories fetched from Strapi:", JSON.stringify(response.data.data, null, 2));
      
      // Transform category data to match frontend expectations
      const transformedCategories = response.data.data.map(cat => {
        // console.log(`\nProcessing category: ${cat.CategoryName}`);
        // console.log("  - ID:", cat.id);
        // console.log("  - DocumentID:", cat.documentId);
        // console.log("  - Sub_categories:", cat.sub_categories);
        // console.log("  - Sub_categories type:", typeof cat.sub_categories);
        // console.log("  - Sub_categories is array:", Array.isArray(cat.sub_categories));
        
        // Handle sub_categories data wrapper format
        let subCategories = cat.sub_categories || [];
        if (subCategories.data && Array.isArray(subCategories.data)) {
          console.log("  - Converting sub_categories from data wrapper format");
          subCategories = subCategories.data;
        }
        
        // console.log("  - Final sub_categories:", subCategories);
        
        return {
          id: cat.id,
          documentId: cat.documentId,
          categoryName: cat.categoryName, // Use only CategoryName (uppercase)
          sub_categories: subCategories.map(sub => ({
            id: sub.id,
            documentId: sub.documentId,
            subcategoryname: sub.subcategoryname
          })),
          createdAt: cat.createdAt,
          updatedAt: cat.updatedAt,
        };
      });
      
      // console.log("\nTransformed categories:", JSON.stringify(transformedCategories, null, 2));
      return transformedCategories;
    } catch (err) {
      console.error("Error fetching categories:", err.message);
      throw new Error(err.response?.data?.error?.message || err.message || "Failed to fetch categories");
    }
  },

  // Get Subcategories from Strapi
  getSubcategories: async () => {
    try {
      const response = await axios.get(
        `${process.env.STRAPI_URL}/api/sub-categories`,
        {
          headers: {
            Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
            "Content-Type": "application/json",
          },
          params: {
            populate: {
              categories: true,
              products: true
            },
          },
        }
      );

      const transformedSubcategories = response.data.data.map(sub => {
        let categories = sub.categories || [];
        if (categories.data && Array.isArray(categories.data)) {
          categories = categories.data;
        }
        let products = sub.products || [];
        if (products.data && Array.isArray(products.data)) {
          products = products.data;
        }
        return {
          id: sub.id,
          documentId: sub.documentId,
          subcategoryname: sub.subcategoryname,
          categories: categories,
          products: products,
          createdAt: sub.createdAt,
          updatedAt: sub.updatedAt,
        };
      });
      return transformedSubcategories || [];
    } catch (err) {
      console.error("Error fetching subcategories:", err.message);
      throw new Error(err.response?.data?.error?.message || err.message || "Failed to fetch subcategories");
    }
  },
};
