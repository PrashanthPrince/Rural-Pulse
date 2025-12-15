"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ProductForm from "@/components/shared/ProductForm";
import Sidebar from "@/components/shared/Sidebar";
import Loader from "@/components/shared/Loader";
import { uploadFiles, createProductAPI, updateProductAPI, fetchProductsAPI, formatProductData, createVariantAPI, updateVariantAPI, unsetOtherDefaultsAPI, publishVariantAPI, createFAQAPI } from "@/utils/productApi";
import { showToast } from "@/components/shared/toast";

export default function AddProductPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  
  // Initialize currentStep from localStorage (for draft products) or default to 1
  const [currentStep, setCurrentStepState] = useState(() => {
    if (typeof window !== "undefined") {
      const savedStep = localStorage.getItem("add_product_step");
      return savedStep ? parseInt(savedStep, 10) : 1;
    }
    return 1;
  });
  
  // Wrapper to save step to localStorage when it changes
  const setCurrentStep = (step) => {
    setCurrentStepState(step);
    if (typeof window !== "undefined") {
      localStorage.setItem("add_product_step", step);
      console.log(`? Saved current step ${step} for new product`);
    }
  };
  
  const [draftProductDocumentId, setDraftProductDocumentId] = useState(null); // Track draft product
  const markAsSavedRef = useRef(null); // Store ref to markAsSaved function
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarCollapsed");
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setProfile(parsedUser);
      } catch (err) {
        // ignore
      }
    }
  }, []);

  const handleSubmit = async ({ action, formData, imageFiles, variants, faqs, selectedCategory, selectedSubcategory, isDraft, shouldAdvanceStep, currentStep: formCurrentStep, isDirtyStep1, isDirtyStep2 }) => {
    setLoading(true);
    try {
      console.log("=== ADD PRODUCT SUBMIT ===");
      console.log("Action:", action);
      console.log("CurrentStep:", formCurrentStep);
      console.log("ShouldAdvanceStep:", shouldAdvanceStep);
      console.log("isDirtyStep1:", isDirtyStep1);
      console.log("isDirtyStep2:", isDirtyStep2);
      
      // ===== PUBLISH ACTION: Always proceed, no dirty check =====
      if (action === "published") {
        console.log(`\n? PUBLISH ACTION: Always proceed with full API calls`);
        // Continue below to execute full publish flow
      }
      // ===== DIRTY CHECK: For Step 2 with "next" action, check if variants changed =====
      else if (formCurrentStep === 2 && !isDirtyStep2) {
        console.log(`\n? Step 2 variants unchanged - skipping API call`);
        
        if (shouldAdvanceStep) {
          const nextStep = formCurrentStep + 1;
          if (nextStep <= TOTAL_STEPS) {
            console.log(`Advancing to Step ${nextStep}`);
            setCurrentStep(nextStep);
            setLoading(false);
            return true;
          }
        }
        setLoading(false);
        return;
      }
      // ===== STEP 3 WITH "NEXT" ACTION: No API calls needed =====
      else if (formCurrentStep === 3) {
        console.log(`\n? Step 3 does not require API call`);
        
        if (shouldAdvanceStep) {
          const nextStep = formCurrentStep + 1;
          if (nextStep <= TOTAL_STEPS) {
            console.log(`Advancing to Step ${nextStep}`);
            setCurrentStep(nextStep);
            setLoading(false);
            return true;
          }
        }
        setLoading(false);
        return;
      }
      // ===== STEP 1 WITH "NEXT" ACTION: Check if dirty before making API calls =====
      else if (formCurrentStep === 1 && !isDirtyStep1) {
        console.log(`\n? Step 1 has NO changes - skipping API call`);
        
        if (shouldAdvanceStep) {
          console.log(`Advancing from Step 1 to Step 2`);
          setCurrentStep(2);
          setLoading(false);
          return true;
        }
        setLoading(false);
        return;
      }
      
      // ===== STEP 1 IS DIRTY OR STEP 2 DIRTY OR PUBLISHING: Proceed with API calls =====
      console.log(`\n? Proceeding with API calls`);
      const TOTAL_STEPS = 3;
      
      let uploadedImages = [];
      if (imageFiles.length > 0) {
        uploadedImages = await uploadFiles(imageFiles);
      }
      const imageIds = uploadedImages.map((img) => img.id);
      
      // STEP 0: Process FAQs - Create/Update and collect documentIds
      console.log("\n STEP 0: PROCESSING FAQs...");
      let faqDocumentIds = [];
      
      for (const faq of faqs) {
        try {
          // Skip if no question and answer
          if (!faq.question?.trim() || !faq.answer?.trim()) {
            console.log(`Skipping empty FAQ`);
            continue;
          }
          
          let createdFAQ;
          if (faq.documentId) {
            // FAQ already exists in Strapi, just reuse it
            console.log(`Using existing FAQ: ${faq.documentId}`);
            createdFAQ = faq;
          } else {
            // Create new FAQ
            console.log(`Creating new FAQ: "${faq.question.substring(0, 50)}..."`);
            const response = await createFAQAPI({
              Question: faq.question.trim(),
              Answer: faq.answer.trim(),
            }, "published");
            createdFAQ = response;
            console.log(`FAQ created: ${createdFAQ.documentId}`);
          }
          
          // Collect the documentId
          if (createdFAQ.documentId) {
            faqDocumentIds.push(createdFAQ.documentId);
          }
        } catch (err) {
          console.error(`Failed to process FAQ:`, err);
          showToast(`Failed to create FAQ: ${err.message}`, "error");
          setLoading(false);
          return;
        }
      }
      
      console.log(`FAQs processed. FAQ documentIds:`, faqDocumentIds);
      
      // STEP 1: If publishing, publish all draft variants first
      let variantIds = [];
      if (action === "published") {
        console.log("\n STEP 1: PUBLISHING DRAFT VARIANTS...");
        
        // Publish all existing variants (they should be in draft status)
        for (const variant of variants) {
          if (variant.documentId) {
            try {
              console.log(`Publishing variant: ${variant.variant_name}`);
              const publishedVariant = await publishVariantAPI(variant.documentId);
              const publishedId = publishedVariant.id || publishedVariant.documentId;
              variantIds.push(publishedId);
              console.log(`Variant published: ${variant.variant_name} (ID: ${publishedId})`);
            } catch (err) {
              console.error(`Failed to publish variant ${variant.variant_name}:`, err);
              throw new Error(`Failed to publish variant "${variant.variant_name}": ${err.message}`);
            }
          }
        }
        console.log(`All variants published. Published variant IDs:`, variantIds);
      } else {
        // STEP 2: If saving as draft, just collect existing variant IDs
        console.log("\n STEP 1: COLLECTING DRAFT VARIANT IDS...");
        
        // Process variants - both unsaved and already saved
        for (const variant of variants) {
          // Unsaved variants (have tempId but no documentId) - need to create first
          if (variant.tempId && !variant.documentId) {
            try {
              const response = await createVariantAPI(variant);
              const variantData = response.data || response;
              const createdVariantId = variantData.documentId || variantData.id;
              variantIds.push(createdVariantId);
              
              // CRITICAL: After creating variant, update it with isDefault and sortOrder fields
              console.log(`Updating created variant with fields: ${variant.variant_name}`, {
                isDefault: variant.isDefault,
                sortOrder: variant.sortOrder
              });
              try {
                await updateVariantAPI(createdVariantId, {
                  variant_name: variant.variant_name,
                  variety_type: variant.variety_type,
                  grade: variant.grade,
                  weight: variant.weight,
                  weight_unit: variant.weight_unit,
                  size: variant.size,
                  style: variant.style,
                  package_type: variant.package_type,
                  isDefault: variant.isDefault || false,
                  sortOrder: typeof variant.sortOrder === 'number' ? variant.sortOrder : 0,
                  varientImage: variant.varientImage || [],
                });
                console.log(`Updated variant fields: ${variant.variant_name}`);
              } catch (err) {
                console.error(`Failed to update variant fields: ${variant.variant_name}`, err);
                throw new Error(`Failed to update variant "${variant.variant_name}": ${err.message}`);
              }
            } catch (err) {
              showToast(`Failed to create variant: ${err.message}`, "error");
              setLoading(false);
              return;
            }
          } else {
            // Already-saved variants or existing variants
            const variantId = variant.documentId || variant.id;
            if (variantId) {
              variantIds.push(variantId);
            }
          }
        }
        console.log(`Collected variant IDs:`, variantIds);
      }
      
      // STEP 2 (or 3 if publishing): Create the product with variant IDs and FAQs
      console.log("\n STEP 2: CREATING PRODUCT...");
      const payload = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        about_item: formData.about_item,
        product_details: formData.product_details,
        safety_information: formData.safety_information,
        usage_directions: formData.usage_directions,
        images: imageIds,
        product_variants: variantIds, // Include all variant IDs (published if action=published, draft if action=draft)
        faqs: faqDocumentIds, // Include all FAQ documentIds
        categories: selectedCategory ? [selectedCategory.id] : [], // Send as array with single numeric ID
        sub_categories: selectedSubcategory ? [selectedSubcategory.id] : [], // Send as array with single numeric ID
        status: action
      };
      
      console.log("Final payload being sent to backend:", JSON.stringify(payload, null, 2));
      
      // Validation: Ensure we have a category and subcategory
      if (!selectedCategory) {
        showToast("Please select a category", "error");
        setLoading(false);
        return;
      }
      if (!selectedSubcategory) {
        showToast("Please select a subcategory", "error");
        setLoading(false);
        return;
      }
      
      // Check if we're updating an existing draft product or creating new
      let data;
      if (draftProductDocumentId && action === "draft") {
        // UPDATE existing draft product
        console.log("UPDATING existing draft product:", draftProductDocumentId);
        data = await updateProductAPI(draftProductDocumentId, payload);
        if (!data.success) throw new Error(data?.error || "Failed to update product");
      } else {
        // CREATE new product
        console.log("CREATING new product");
        data = await createProductAPI(payload);
        if (!data.success) throw new Error(data?.error || "Failed to create product");
        
        // Store the documentId for future updates
        if (data.product && data.product.documentId && action === "draft") {
          setDraftProductDocumentId(data.product.documentId);
          console.log("Stored draft product documentId:", data.product.documentId);
        }
      }
      
      // After product is created/updated, manage default variants
      // If any variant is marked as default, unset isDefault for other variants
      const defaultVariant = variants.find(v => v.isDefault === true);
      if (defaultVariant && data.product && data.product.id) {
        console.log(`Managing default variant for product ${data.product.id}`);
        const defaultVariantId = defaultVariant.id || defaultVariant.documentId;
        if (defaultVariantId) {
          try {
            await unsetOtherDefaultsAPI(data.product.id, defaultVariantId);
            console.log(`Successfully managed default variants`);
          } catch (err) {
            console.error(`Non-critical: Failed to unset other defaults:`, err.message);
            // Don't fail the entire operation - this is secondary
          }
        }
      }
      
      const message = action === "published" ? "Product published successfully!" : "Product saved as draft!";
      
      // Only show toast for publish action (step 3), not for intermediate step saves
      if (action === "published") {
        showToast(message, "success");
      }
      
      // If publishing, clear the saved step from localStorage
      if (action === "published") {
        if (typeof window !== "undefined") {
          localStorage.removeItem("add_product_step");
          console.log(`? Cleared saved step for new product after publish`);
        }
      }
      
      // Mark current state as saved in ProductForm (for dirty check)
      if (action === "draft" && markAsSavedRef.current && typeof markAsSavedRef.current.current === 'function') {
        console.log("? Calling markAsSaved to update dirty state");
        markAsSavedRef.current.current();
      }
      
      // If it's a draft save from next button, don't redirect - advance step instead
      if (shouldAdvanceStep && formCurrentStep) {
        // Advance to next step
        console.log(`Draft saved, advancing from Step ${formCurrentStep} to Step ${formCurrentStep + 1}`);
        setCurrentStep(formCurrentStep + 1);
        return true;
      }
      
      // Clear draft product id when publishing
      setDraftProductDocumentId(null);
      
      // Redirect to products page only if publishing or final save
      router.push("/products");
    } catch (err) {
      showToast(err.message || "Failed to create product", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    router.push("/products");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* LOADER */}
      <Loader 
        isVisible={loading} 
        message="Creating product..."
      />
      
      {/* SIDEBAR */}
      <Sidebar 
        profile={profile} 
        onLogout={() => { localStorage.removeItem("token"); router.push("/signin"); }}
        onCollapseChange={setSidebarCollapsed}
      />
      {/* MAIN CONTENT */}
      <div 
        className="flex-1 transition-all duration-300" 
        style={{ marginLeft: sidebarCollapsed ? '80px' : '256px' }}
      >
        <div className="max-w-8xl mx-5 px-6 py-8">
          {/* FORM */}
          <div className="flex justify-center items-start">
            <div className="w-full max-w-full mx-auto">
              <ProductForm
                mode="add"
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isLoading={loading}
                currentStep={currentStep}
                onStepChange={setCurrentStep}
                onSaveSuccess={(ref) => { markAsSavedRef.current = ref; }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
