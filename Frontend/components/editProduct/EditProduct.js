"use client";

import React, { useState, useEffect, useRef } from "react";
import ProductForm from "@/components/shared/ProductForm";
import Sidebar from "@/components/shared/Sidebar";
import Loader from "@/components/shared/Loader";
import { updateProductAPI, updateVariantAPI, unsetOtherDefaultsAPI, publishVariantAPI, fetchDraftVariantsAPI, createFAQAPI, updateFAQAPI, fetchFAQsByProductAPI } from "@/utils/productApi";
import { showToast } from "@/components/shared/toast";
import { useRouter } from "next/navigation";

export default function EditProduct({ product, onClose }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Saving product...");
  const [profile, setProfile] = useState(null);
  
  // Initialize currentStep from localStorage or default based on whether Step 1 is complete
  const [currentStep, setCurrentStepState] = useState(() => {
    if (typeof window !== "undefined") {
      const productId = product.documentId || product.id;
      const savedStep = localStorage.getItem(`product_step_${productId}`);
      
      // If user has a saved step for this product, use it
      if (savedStep) {
        return parseInt(savedStep, 10);
      }
      
      // If product has variants (product_variants array with items), Step 1 is already complete
      // Start at Step 2 to continue where they left off
      const hasVariants = product.product_variants && product.product_variants.length > 0;
      return hasVariants ? 2 : 1;
    }
    return 1;
  });
  
  // Wrapper to save step to localStorage when it changes
  const setCurrentStep = (step) => {
    setCurrentStepState(step);
    if (typeof window !== "undefined") {
      const productId = product.documentId || product.id;
      localStorage.setItem(`product_step_${productId}`, step);
      console.log(`? Saved current step ${step} for product ${productId}`);
    }
  };
  
  const [productData, setProductData] = useState(product);
  const markAsSavedRef = useRef(null); // Store ref to markAsSaved function
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarCollapsed");
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });

  // Fetch FAQs for the product
  useEffect(() => {
    async function loadFAQs() {
      try {
        // Use documentId if available (preferred), otherwise fall back to id
        const productIdentifier = product.documentId || product.id;
        console.log("EditProduct: loadFAQs() starting");
        console.log("EditProduct: product object keys:", Object.keys(product).join(', '));
        console.log("EditProduct: product.documentId:", product.documentId);
        console.log("EditProduct: product.id:", product.id);
        console.log("EditProduct: Fetching FAQs for product:", productIdentifier);
        
        // fetchFAQsByProductAPI already transforms FAQs to frontend format
        const faqs = await fetchFAQsByProductAPI(productIdentifier);
        console.log("EditProduct: FAQs fetched successfully, count:", faqs.length);
        console.log("EditProduct: FAQs data:", faqs);
        
        // Update product data with fetched FAQs
        setProductData((prevProduct) => ({
          ...prevProduct,
          faqs: faqs || [],
        }));
      } catch (err) {
        console.error("EditProduct: Failed to fetch FAQs:", err);
        console.error("EditProduct: Error details:", err.message, err.stack);
        // Continue without FAQs if fetch fails
        setProductData((prevProduct) => ({
          ...prevProduct,
          faqs: prevProduct.faqs || [],
        }));
      }
    }
    
    if (product && (product.id || product.documentId)) {
      loadFAQs();
    }
  }, [product]);

  // Fetch Variants for the product
  useEffect(() => {
    async function loadVariants() {
      try {
        const productIdentifier = product.documentId || product.id;
        console.log("EditProduct: loadVariants() starting");
        console.log("EditProduct: Fetching variants for product:", productIdentifier);
        
        const variants = await fetchDraftVariantsAPI(productIdentifier);
        console.log("EditProduct: Variants fetched successfully, count:", variants.length);
        console.log("EditProduct: Variants data:", variants);
        
        // Update product data with fetched variants
        setProductData((prevProduct) => ({
          ...prevProduct,
          product_variants: variants || [],
        }));
      } catch (err) {
        console.error("EditProduct: Failed to fetch variants:", err);
        console.error("EditProduct: Error details:", err.message, err.stack);
        // Continue without variants if fetch fails
        setProductData((prevProduct) => ({
          ...prevProduct,
          product_variants: prevProduct.product_variants || [],
        }));
      }
    }
    
    if (product && (product.id || product.documentId)) {
      loadVariants();
    }
  }, [product]);

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

  const handleSubmit = async ({ formData, imageFiles, existingImages, selectedSlots = [], variants = [], faqs = [], selectedCategory = null, selectedSubcategory = null, action, shouldAdvanceStep, currentStep: formCurrentStep, isDirtyStep1, isDirtyStep2 }) => {
    setSaving(true);
    setLoadingMessage(action === "published" ? "Publishing product..." : "Saving product...");
    try {
      console.log("=== EDIT PRODUCT SUBMIT ===");
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
          if (nextStep <= 3) {
            console.log(`Advancing to Step ${nextStep}`);
            setCurrentStep(nextStep);
            setSaving(false);
            return true;
          }
        }
        setSaving(false);
        return;
      }
      // ===== STEP 3 WITH "NEXT" ACTION: No API calls needed =====
      else if (formCurrentStep === 3) {
        console.log(`\n? Step 3 does not require API call`);
        
        if (shouldAdvanceStep) {
          const nextStep = formCurrentStep + 1;
          if (nextStep <= 3) {
            console.log(`Advancing to Step ${nextStep}`);
            setCurrentStep(nextStep);
            setSaving(false);
            return true;
          }
        }
        setSaving(false);
        return;
      }
      // ===== STEP 1 WITH "NEXT" ACTION: Check if dirty before making API calls =====
      else if (formCurrentStep === 1 && !isDirtyStep1) {
        console.log(`\n? Step 1 has NO changes - skipping API call`);
        
        if (shouldAdvanceStep) {
          console.log(`Advancing from Step 1 to Step 2`);
          setCurrentStep(2);
          setSaving(false);
          return true;
        }
        setSaving(false);
        return;
      }
      
      // ===== STEP 1 IS DIRTY OR STEP 2 DIRTY OR PUBLISHING: Proceed with API calls =====
      console.log(`\n? Proceeding with API calls`);
      
      // STEP 0: Process FAQs - Create/Update and collect documentIds
      console.log("\n STEP 0: PROCESSING FAQs...");
      setLoadingMessage("Processing FAQs...");
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
            // FAQ already exists in Strapi, update it if needed
            console.log(`Updating existing FAQ: ${faq.documentId}`);
            const response = await updateFAQAPI(faq.documentId, {
              Question: faq.question.trim(),
              Answer: faq.answer.trim(),
            }, "published");
            createdFAQ = response;
            console.log(`FAQ updated: ${createdFAQ.documentId}`);
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
          showToast(`Failed to process FAQ: ${err.message}`, "error");
          setSaving(false);
          return;
        }
      }
      
      console.log(`FAQs processed. FAQ documentIds:`, faqDocumentIds);
      
      // STEP 1: If publishing, first publish all draft variants from the current variants array
      let publishedVariantIds = [];
      if (action === "published") {
        console.log("\n STEP 1: PUBLISHING DRAFT VARIANTS...");
        setLoadingMessage("Publishing variants...");
        
        // Filter variants that are in draft status (check if they have documentId but not published)
        const draftVariants = variants.filter(v => v.documentId && v.id);
        console.log(`Found ${draftVariants.length} variants to publish`);
        
        // Publish each draft variant
        for (let i = 0; i < draftVariants.length; i++) {
          const draftVariant = draftVariants[i];
          try {
            console.log(`Publishing variant ${i + 1}/${draftVariants.length}: ${draftVariant.variant_name}`);
            const publishedVariant = await publishVariantAPI(draftVariant.documentId);
            const publishedId = publishedVariant.id || publishedVariant.documentId;
            publishedVariantIds.push(publishedId);
            console.log(`Variant published: ${draftVariant.variant_name} (ID: ${publishedId})`);
          } catch (err) {
            console.error(`Failed to publish variant ${draftVariant.variant_name}:`, err);
            throw new Error(`Failed to publish variant "${draftVariant.variant_name}": ${err.message}`);
          }
        }
        console.log(`All variants published. Published variant IDs:`, publishedVariantIds);
      }

      // STEP 2: Save variant field changes (isDefault, sortOrder, etc.)
      console.log("\n STEP 2: SAVING VARIANT FIELDS...");
      setLoadingMessage("Saving variant details...");
      for (let i = 0; i < variants.length; i++) {
        const variant = variants[i];
        // Only save variants that have an ID (already in database)
        if (variant.documentId || variant.id) {
          console.log(`Saving variant ${i+1}/${variants.length}: ${variant.variant_name}`, {
            isDefault: variant.isDefault,
            sortOrder: variant.sortOrder
          });
          try {
            await updateVariantAPI(variant.documentId || variant.id, {
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
            console.log(`Saved variant: ${variant.variant_name}`);
          } catch (err) {
            console.error(`Failed to save variant ${variant.variant_name}:`, err);
            throw new Error(`Failed to save variant "${variant.variant_name}": ${err.message}`);
          }
        }
      }

      // STEP 3: Save the product
      console.log("\n STEP 3: SAVING PRODUCT...");
      setLoadingMessage("Saving product...");
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("about_item", formData.about_item ?? "");
      formDataToSend.append("product_details", formData.product_details ?? "");
      formDataToSend.append("safety_information", formData.safety_information ?? "");
      formDataToSend.append("usage_directions", formData.usage_directions ?? "");

      // Send NON-selected existing images (images to keep)
      const nonSelectedImages = existingImages.filter((img, index) => 
        !selectedSlots.includes(index)
      );
      nonSelectedImages.forEach((img) => {
        formDataToSend.append("existingImageIds", img?.id || "");
      });
      // Send selected slot indices
      if (selectedSlots.length > 0) {
        selectedSlots.forEach((slot) => {
          formDataToSend.append("selectedSlots", slot);
        });
      }
      // Send new files
      imageFiles.forEach((file) => {
        formDataToSend.append("files", file);
      });

      // Use published variant IDs if publishing, otherwise use original variant IDs
      const variantIdsToUse = action === "published" && publishedVariantIds.length > 0 
        ? publishedVariantIds 
        : variants
            .filter((v) => v.id || v.documentId)
            .map((v) => v.documentId || v.id);
      
      console.log(`Attaching variants to product:`, variantIdsToUse);
      
      // Append all collected variant IDs to FormData
      variantIdsToUse.forEach((variantId) => {
        formDataToSend.append("product_variants", variantId);
      });

      // Append all FAQ document IDs to FormData
      console.log(`Attaching FAQs to product:`, faqDocumentIds);
      faqDocumentIds.forEach((faqId) => {
        formDataToSend.append("faqs", faqId);
      });

      // Add selected category ID (numeric)
      if (selectedCategory) {
        formDataToSend.append("categories", selectedCategory.id);
      }
      
      // Add selected subcategory ID (numeric)
      if (selectedSubcategory) {
        formDataToSend.append("sub_categories", selectedSubcategory.id);
      }

      formDataToSend.append("status", action);
      const data = await updateProductAPI(product.documentId, formDataToSend);

      if (!data.success) throw new Error("Update failed");
      
      // After product is updated, manage default variants
      // If any variant is marked as default, unset isDefault for other variants
      const defaultVariant = variants.find(v => v.isDefault === true);
      if (defaultVariant && product && product.id) {
        console.log(`Managing default variant for product ${product.id}`);
        const defaultVariantId = defaultVariant.documentId || defaultVariant.id;
        if (defaultVariantId) {
          try {
            await unsetOtherDefaultsAPI(product.id, defaultVariantId);
            console.log(`Successfully managed default variants`);
          } catch (err) {
            console.error(`Non-critical: Failed to unset other defaults:`, err.message);
            // Don't fail the entire operation - this is secondary
          }
        }
      }
      
      if (action === "published"){
        showToast("Product Published successfully!", "success");
        
        // Clear the saved step from localStorage when publishing
        if (typeof window !== "undefined") {
          const productId = product.documentId || product.id;
          localStorage.removeItem(`product_step_${productId}`);
          console.log(`? Cleared saved step for product ${productId} after publish`);
        }
        
        // Only redirect to products list when publishing
        setTimeout(() => router.push("/products"), 600);
      }else{
        // Only show toast for final step (FAQ/Step 3), not for intermediate saves
        // Mark current state as saved in ProductForm (for dirty check)
        if (markAsSavedRef.current && typeof markAsSavedRef.current.current === 'function') {
          console.log("? Calling markAsSaved to update dirty state");
          markAsSavedRef.current.current();
        }
        
        // When saving as draft, advance to next step if requested
        if (shouldAdvanceStep && formCurrentStep) {
          console.log(`Draft saved, advancing from Step ${formCurrentStep} to Step ${formCurrentStep + 1}`);
          setCurrentStep(formCurrentStep + 1);
        }
      }
    } catch (err) {
      showToast(err.message || "Failed to update product", "error");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* LOADER */}
      <Loader 
        isVisible={saving} 
        message={loadingMessage}
      />
      
      {/* SIDEBAR */}
      <Sidebar 
        profile={profile} 
        onLogout={() => { localStorage.removeItem("token"); router.push("/products"); }}
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
                mode="edit"
                initialData={{
                  name: productData.name,
                  description: productData.description,
                  about_item: productData.about_item ?? "",
                  product_details: productData.product_details ?? "",
                  safety_information: productData.safety_information ?? "",
                  usage_directions: productData.usage_directions ?? "",
                  image: productData.image || [],
                  product_variants: productData.product_variants || [],
                  faqs: productData.faqs || [],
                  categories: productData.categories || [],
                  sub_categories: productData.sub_categories || [],
                }}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                isLoading={saving}
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

