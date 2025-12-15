/**
 * Utility functions for form dirty state checking
 * Normalizes form data for comparison by removing temporary/UI fields
 */

/**
 * Normalize form data for comparison
 * Removes file objects, temporary fields, UI state, etc.
 */
export const normalizeFormData = (formData) => {
  if (!formData) return null;
  
  return {
    name: (formData.name ?? "").trim(),
    description: (formData.description ?? "").trim(),
    about_item: (formData.about_item ?? "").trim(),
    product_details: (formData.product_details ?? "").trim(),
    safety_information: (formData.safety_information ?? "").trim(),
    usage_directions: (formData.usage_directions ?? "").trim(),
  };
};

/**
 * Normalize images array for comparison
 * Only keeps ID and URL to compare, ignores file objects and blob URLs
 */
export const normalizeImages = (existingImages = [], imagePreviewCount = 0) => {
  return {
    existing: existingImages
      .filter(img => img && (img.id || img.url))
      .map(img => ({
        id: img.id,
        url: img.url?.split('?')[0] // Remove query params
      })),
    newCount: imagePreviewCount // Just track if new images were added/removed
  };
};

/**
 * Normalize category/subcategory for comparison
 */
export const normalizeCategories = (category, subcategory) => {
  return {
    categoryId: category?.id || category?.documentId || null,
    subcategoryId: subcategory?.id || subcategory?.documentId || null,
  };
};

/**
 * Check if form data has changed from previous saved state
 * This is a deep comparison that normalizes the data first
 */
export const isFormDataDirty = (currentFormData, savedFormData, currentImages, savedImages, currentCategory, savedCategory, currentSubcategory, savedSubcategory) => {
  // Normalize current state
  const normalizedCurrent = normalizeFormData(currentFormData);
  const normalizedPrevious = normalizeFormData(savedFormData);
  
  // Compare normalized form data
  if (JSON.stringify(normalizedCurrent) !== JSON.stringify(normalizedPrevious)) {
    return true;
  }
  
  // Compare images
  const normalizedCurrentImages = normalizeImages(currentImages, 0);
  const normalizedSavedImages = normalizeImages(savedImages, 0);
  if (JSON.stringify(normalizedCurrentImages) !== JSON.stringify(normalizedSavedImages)) {
    return true;
  }
  
  // Compare categories
  const normalizedCurrentCategory = normalizeCategories(currentCategory, currentSubcategory);
  const normalizedSavedCategory = normalizeCategories(savedCategory, savedSubcategory);
  if (JSON.stringify(normalizedCurrentCategory) !== JSON.stringify(normalizedSavedCategory)) {
    return true;
  }
  
  return false;
};

/**
 * Check if step 1 (Product Details) data has changed
 */
export const isStep1Dirty = (
  currentFormData,
  currentExistingImages,
  currentImageFiles,
  currentCategory,
  currentSubcategory,
  savedFormData,
  savedExistingImages,
  savedCategory,
  savedSubcategory
) => {
  return isFormDataDirty(
    currentFormData,
    savedFormData,
    currentExistingImages,
    savedExistingImages,
    currentCategory,
    currentSubcategory,
    savedCategory,
    savedSubcategory
  ) || currentImageFiles?.length > 0;
};

/**
 * Check if variants have changed (only count, not details)
 * Returns true if variant count is different
 */
export const isVariantCountChanged = (currentVariants, savedVariants) => {
  const currentCount = currentVariants?.length || 0;
  const savedCount = savedVariants?.length || 0;
  
  console.log(`Variant count: current=${currentCount}, saved=${savedCount}, changed=${currentCount !== savedCount}`);
  
  return currentCount !== savedCount;
};


