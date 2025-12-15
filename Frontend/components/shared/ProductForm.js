"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { STRAPI_URL } from "@/utils/apiConfig";
import ProductVariant from "@/components/products/ProductVariant";
import CategorySelector from "@/components/products/CategorySelector";
import Loader from "@/components/shared/Loader";
import FAQModal from "@/components/shared/FAQModal";
import { showToast } from "@/components/shared/toast";
import { isStep1Dirty, isVariantCountChanged } from "@/utils/dirtyCheck";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

/**
 * ProductForm Component - Step-by-Step Form with Sidebar Navigation
 * Steps:
 * 1. Product Details (name, description, about_item, product_details, safety_information, usage_directions, images, category, subcategory)
 * 2. Variants (Product Variants)
 */
export default function ProductForm({ 
  initialData = {}, 
  onSubmit, 
  onCancel, 
  isLoading = false,
  mode = 'add',
  currentStep: propCurrentStep,
  onStepChange,
  onSaveSuccess  // Callback to mark state as saved after API success
}) {
  const [submitAction, setSubmitAction] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("Saving product...");
  const [internalCurrentStep, setInternalCurrentStep] = useState(1);
  
  // Use prop if provided, otherwise use internal state
  const currentStep = propCurrentStep !== undefined ? propCurrentStep : internalCurrentStep;
  const setCurrentStep = onStepChange || setInternalCurrentStep;
  
  const TOTAL_STEPS = 3;

  // Variants
  const [variants, setVariants] = useState(initialData.product_variants || []);
  useEffect(() => {
    setVariants(initialData.product_variants || []);
  }, [initialData.product_variants]);

  // FAQs
  const [faqs, setFAQs] = useState(initialData.faqs || []);
  const [isEditingFAQ, setIsEditingFAQ] = useState(false);
  const [selectedFAQIndex, setSelectedFAQIndex] = useState(null);
  const [deleteFAQModal, setDeleteFAQModal] = useState({ open: false, index: null, question: "" });
  const [cancelConfirmModal, setCancelConfirmModal] = useState({ open: false });
  
  useEffect(() => {
    setFAQs(initialData.faqs || []);
  }, [initialData.faqs]);

  // Category and Subcategory
  const [selectedCategory, setSelectedCategory] = useState(
    initialData.categories?.[0] || null
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState(
    initialData.sub_categories?.[0] || null
  );

  useEffect(() => {
    setSelectedCategory(initialData.categories?.[0] || null);
  }, [initialData.categories]);

  useEffect(() => {
    setSelectedSubcategory(initialData.sub_categories?.[0] || null);
  }, [initialData.sub_categories]);

  // Form Data
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    description: (initialData.description && typeof initialData.description === 'string') ? initialData.description : "",
    about_item: initialData.about_item || "",
    product_details: initialData.product_details || "",
    safety_information: initialData.safety_information || "",
    usage_directions: initialData.usage_directions || "",
  });
  
  const [errors, setErrors] = useState({});
  const DESCRIPTION_LIMIT = 500;

  // Images
  const [imageFiles, setImageFiles] = useState([]);
  const [imageTypeError, setImageTypeError] = useState("");
  const [imageSizeError, setImageSizeError] = useState("");
  const VIDEO_SIZE_LIMIT = 10 * 1024 * 1024; // 10MB
  const IMAGE_SIZE_LIMIT = 2 * 1024 * 1024; // 2MB
  
  /**
   * imagePreviews: Array of preview objects for newly uploaded images
   * - Structure: [{ url: blob URL, name: filename }, ...]
   * - Used to show preview before upload
   */
  const [imagePreviews, setImagePreviews] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [existingImages, setExistingImages] = useState(initialData.image || []);
  const [selectedSlots, setSelectedSlots] = useState([]);

  // ===== DIRTY STATE TRACKING =====
  // Track the last saved state for dirty checking
  const [savedFormData, setSavedFormData] = useState({
    name: initialData.name || "",
    description: (initialData.description && typeof initialData.description === 'string') ? initialData.description : "",
    about_item: initialData.about_item || "",
    product_details: initialData.product_details || "",
    safety_information: initialData.safety_information || "",
    usage_directions: initialData.usage_directions || "",
  });
  
  const [savedExistingImages, setSavedExistingImages] = useState(initialData.image || []);
  const [savedCategory, setSavedCategory] = useState(initialData.categories?.[0] || null);
  const [savedSubcategory, setSavedSubcategory] = useState(initialData.sub_categories?.[0] || null);
  const [savedVariants, setSavedVariants] = useState(initialData.product_variants || []);

  // Compute dirty state for Step 1 only
  const isDirtyStep1 = isStep1Dirty(
    formData,
    existingImages,
    imageFiles,
    selectedCategory,
    selectedSubcategory,
    savedFormData,
    savedExistingImages,
    savedCategory,
    savedSubcategory
  );

  // Compute dirty state for Step 2 - only check if variant count changed
  const isDirtyStep2 = isVariantCountChanged(variants, savedVariants);

  // Function to mark current state as saved (call from parent after API succeeds)
  const markAsSaved = useCallback(() => {
    console.log("✅ Marking as saved - updating saved state");
    setSavedFormData(formData);
    setSavedExistingImages(existingImages);
    setSavedCategory(selectedCategory);
    setSavedSubcategory(selectedSubcategory);
    setSavedVariants(variants);  // Also save variant state
    // Clear new image files after successful save
    setImageFiles([]);
    setImagePreviews([]);
  }, [formData, existingImages, selectedCategory, selectedSubcategory, variants]);

  // Use ref to store markAsSaved function - update parent via ref instead of state
  const markAsSavedRef = useRef(markAsSaved);
  
  useEffect(() => {
    markAsSavedRef.current = markAsSaved;
  }, [markAsSaved]);

  // Expose markAsSaved function to parent via callback using ref
  useEffect(() => {
    if (onSaveSuccess) {
      onSaveSuccess(markAsSavedRef);
    }
  }, [onSaveSuccess]);

  // Form Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "description") {
      if (value.length <= DESCRIPTION_LIMIT) {
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDeleteExistingImage = (index) => {
    const updated = existingImages.filter((_, i) => i !== index);
    setExistingImages(updated);
    setSelectedSlots((prev) =>
      prev.filter((i) => i !== index).map((i) => (i > index ? i - 1 : i))
    );
  };

  const handleDeleteNewImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const getDisplayImages = () => {
    const isVideoFile = (item) => {
      if (item.type === 'video') return true;
      const url = item.url || '';
      return /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url);
    };

    if (mode === 'edit' && existingImages.length > 0) {
      const preview = [...existingImages].map(img => ({
        ...img,
        type: img.type || (isVideoFile(img) ? 'video' : 'image')
      }));
      
      selectedSlots.forEach((slotIndex, i) => {
        if (i < imagePreviews.length) {
          preview[slotIndex] = {
            ...imagePreviews[i],
            isNew: true
          };
        }
      });
      
      if (imagePreviews.length > selectedSlots.length) {
        preview.push(...imagePreviews.slice(selectedSlots.length).map(img => ({
          ...img,
          isNew: true
        })));
      }
      
      return preview;
    }
    return imagePreviews;
  };

  const displayImages = getDisplayImages();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  const handleRemoveImage = (index) => {
    const displayImages = getDisplayImages();
    
    if (mode === 'edit') {
      const item = displayImages[index];
      if (item?.isNew) {
        const previewIndex = imagePreviews.findIndex(prev => 
          prev.url === item.url && prev.name === item.name
        );
        if (previewIndex !== -1) {
          handleDeleteNewImage(previewIndex);
          setSelectedSlots(prev => prev.filter(slot => slot !== index));
        }
      } else {
        const existingIndex = existingImages.findIndex(img => 
          img.url === item.url || img.id === item.id
        );
        if (existingIndex !== -1) {
          handleDeleteExistingImage(existingIndex);
        }
      }
    } else {
      handleDeleteNewImage(index);
    }
    
    setTimeout(() => {
      const updatedDisplay = getDisplayImages();
      if (updatedDisplay.length === 0) {
        setCurrentImageIndex(0);
      } else if (index >= updatedDisplay.length) {
        setCurrentImageIndex(updatedDisplay.length - 1);
      } else if (index > 0) {
        setCurrentImageIndex(index - 1);
      }
    }, 0);
  };

  const handleImageSelect = (e) => {
    setImageTypeError("");
    setImageSizeError("");
    const files = Array.from(e.target.files || []);
    const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const allowedVideoTypes = ["video/mp4", "video/webm", "video/ogg"];
    const allowedTypes = [...allowedImageTypes, ...allowedVideoTypes];
    
    const invalid = files.find(f => !allowedTypes.includes(f.type));
    if (invalid) {
      setImageTypeError("Only PNG, JPEG images and MP4, WebM, OGG videos are allowed.");
      e.target.value = '';
      return;
    }
    
    const oversizedVideo = files.find(f => {
      if (f.type.startsWith('video/') && f.size > VIDEO_SIZE_LIMIT) {
        return true;
      }
      return false;
    });
    
    if (oversizedVideo) {
      setImageSizeError(`Video file "${oversizedVideo.name}" exceeds 4MB size limit`);
      e.target.value = '';
      return;
    }
    
    setImageFiles(files);
    const previews = files.map(file => ({
      url: URL.createObjectURL(file),
      name: file.name,
      type: file.type.startsWith('video/') ? 'video' : 'image'
    }));
    setImagePreviews(previews);
  };

  const handleSubmit = (e, actionParam = null) => {
    if (e) e.preventDefault();
    
    const newErrors = {};
    const name = String(formData.name ?? '').trim();
    const description = String(formData.description ?? '').trim();
    const about_item = String(formData.about_item ?? '').trim();
    const product_details = String(formData.product_details ?? '').trim();
    const safety_information = String(formData.safety_information ?? '').trim();
    const usage_directions = String(formData.usage_directions ?? '').trim();
    
    let imagesCount = 0;
    if (mode === 'add') {
      imagesCount = imageFiles.length;
    } else {
      imagesCount = (existingImages?.length || 0) + (imageFiles?.length || 0);
    }
    
    if (!name) newErrors.name = 'Name is required';
    if (!description) newErrors.description = 'Description is required';
    if (!about_item) newErrors.about_item = 'About Item is required';
    if (!product_details) newErrors.product_details = 'Product Details is required';
    if (!safety_information) newErrors.safety_information = 'Safety Information is required';
    if (!usage_directions) newErrors.usage_directions = 'Usage Directions is required';
    if (imagesCount === 0) newErrors.images = 'At least one image is required';
    if (!selectedCategory) newErrors.category = 'Category is required';
    if (!selectedSubcategory) newErrors.subcategory = 'Subcategory is required';
    
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    
    // Use the passed action parameter or fall back to submitAction state
    const finalAction = actionParam || submitAction;
    
    if (finalAction) {
      const isDraft = finalAction === "draft" || finalAction === "next";
      
      onSubmit({
        action: finalAction === "next" ? "draft" : finalAction,
        formData: { ...formData, name, description, about_item, product_details, safety_information, usage_directions },
        imageFiles,
        existingImages,
        selectedSlots,
        variants,
        faqs,
        selectedCategory,
        selectedSubcategory,
        isDraft,
        shouldAdvanceStep: finalAction === "next",
        currentStep,
        isDirtyStep1,
        isDirtyStep2  // Pass Step 2 dirty state
      });
      setSubmitAction(null);
    }

  };

  const handleNextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      // Step 1: Check if dirty - only save if data changed
      if (currentStep === 1) {
        if (!isDirtyStep1) {
          console.log("✅ Step 1 is clean - advancing without API call");
          setCurrentStep(currentStep + 1);
          return;
        }
        
        // Step 1 is dirty - save as draft and advance
        console.log("✅ Step 1 has changes - saving to API");
        handleSubmit(null, "next");
        return;
      }
      
      // Step 2: Check if variant count changed
      if (currentStep === 2) {
        if (!isDirtyStep2) {
          console.log("✅ Step 2 variants unchanged - advancing without API call");
          setCurrentStep(currentStep + 1);
          return;
        }
        
        // Step 2 variants changed - save as draft and advance
        console.log("✅ Step 2 variants changed - saving to API");
        handleSubmit(null, "next");
        return;
      }
      
      // Step 3: No API calls - just advance
      console.log(`✅ Step ${currentStep} - no API call needed, just advancing`);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCancelClick = () => {
    // Step 1: Check if data is dirty - show confirmation
    if (currentStep === 1 && isDirtyStep1) {
      setCancelConfirmModal({ open: true });
      return;
    }
    
    // Step 2 or 3: Show draft message
    if (currentStep === 2 || currentStep === 3) {
      showToast("Your details will be stored as draft", "info");
    }
    
    // Proceed with cancel
    onCancel();
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGoToStep = (stepNum) => {
    if (stepNum <= currentStep) {
      setCurrentStep(stepNum);
    }
  };

  // Validate if current step has all required fields filled
  const isCurrentStepValid = () => {
    if (currentStep === 1) {
      // Step 1: Basic product details
      const name = String(formData.name ?? '').trim();
      const description = String(formData.description ?? '').trim();
      const about_item = String(formData.about_item ?? '').trim();
      const product_details = String(formData.product_details ?? '').trim();
      const safety_information = String(formData.safety_information ?? '').trim();
      const usage_directions = String(formData.usage_directions ?? '').trim();
      
      let imagesCount = imageFiles.length;
      if (mode === 'edit') {
        imagesCount = (existingImages?.length || 0) + (imageFiles?.length || 0);
      }
      
      // All text fields must be filled, at least one image required, and category/subcategory selected
      return (
        name.length > 0 &&
        description.length > 0 &&
        about_item.length > 0 &&
        product_details.length > 0 &&
        safety_information.length > 0 &&
        usage_directions.length > 0 &&
        imagesCount > 0 &&
        selectedCategory !== null &&
        selectedSubcategory !== null
      );
    }
    // Step 2 (Variants) and Step 3 (FAQs) can always proceed
    return true;
  };

  return (
    <>
      <Loader isVisible={isLoading} message={loadingMessage} />
      <div className="h-screen bg-gray-50 font-sans p-6 flex flex-col">
        {/* ========== SINGLE UNIFIED FORM CONTAINER ========== */}
        <div className="flex-1 flex bg-white rounded-lg shadow-md overflow-hidden">
          {/* ========== LEFT STEP INDICATORS ========== */}
          <div className="w-48 flex flex-col bg-white border-r border-gray-200 p-6 overflow-y-auto">
            {/* Step List */}
            <div className="flex-1">
              {[
                { num: 1, title: 'Product Details' },
                { num: 2, title: 'Variants' },
                { num: 3, title: 'FAQ' }
              ].map((step) => {
                const isCompleted = step.num < currentStep;
                const isCurrent = step.num === currentStep;
                const isUpcoming = step.num > currentStep;
                
                return (
                  <div key={step.num} className="mb-6 relative">
                    <div className="flex items-start gap-3">
                      {/* Step Circle */}
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 cursor-pointer transition-all ${
                          isCompleted
                            ? 'bg-green-600 text-white'
                            : isCurrent
                            ? 'bg-green-100 text-green-600 border-2 border-green-600'
                            : 'bg-gray-200 text-gray-500'
                        }`}
                        onClick={() => handleGoToStep(step.num)}
                      >
                        {isCompleted ? '✓' : step.num}
                      </div>

                      {/* Step Info */}
                      <div className="flex-1 pt-1">
                        <p
                          className={`text-sm font-medium cursor-pointer transition-colors ${
                            isCurrent
                              ? 'text-green-600'
                              : isCompleted
                              ? 'text-gray-700 hover:text-green-600'
                              : 'text-gray-400'
                          }`}
                          onClick={() => handleGoToStep(step.num)}
                        >
                          Step {step.num}
                        </p>
                        <p
                          className={`text-xs transition-colors ${
                            isCurrent
                              ? 'text-green-600 font-medium'
                              : isCompleted
                              ? 'text-gray-600 hover:text-green-600'
                              : 'text-gray-400'
                          }`}
                          onClick={() => handleGoToStep(step.num)}
                        >
                          {step.title}
                        </p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {step.num < TOTAL_STEPS && (
                      <div
                        className={`w-0.5 h-8 ml-5 mt-1 transition-all ${
                          isCompleted ? 'bg-green-600' : 'bg-gray-300'
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Progress Indicator */}
            <div className="mt-8">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Progress</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / TOTAL_STEPS) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center font-medium">
                Step {currentStep} of {TOTAL_STEPS}
              </p>
            </div>
          </div>

          {/* ========== RIGHT CONTENT AREA ========== */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-12 py-6 flex justify-between items-center z-10">
              <h2 className="text-2xl font-bold text-gray-800">
                {currentStep === 1 && 'Product Details'}
                {currentStep === 2 && 'Product Variants'}
                {currentStep === 3 && 'Product FAQ'}
              </h2>
              <button
                type="button"
                onClick={handleCancelClick}
                className="text-gray-400 hover:text-gray-600 text-2xl cursor-pointer transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Main Content - Single Form */}
            <div className="flex-1 overflow-auto flex justify-center">
              <form onSubmit={handleSubmit} className="p-12 w-full max-w-4xl">

              {/* ========== STEP 1: PRODUCT DETAILS ========== */}
              {currentStep === 1 && (
                <div className="space-y-8">
                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Product Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                      }`}
                      placeholder="Enter product name"
                      autoComplete="off"
                    />
                    {errors.name && <div className="text-xs text-red-500 mt-2">{errors.name}</div>}
                  </div>

                  {/* Description - Card Style "Craft Your Product Story" */}
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 overflow-hidden">
                      {/* Green Header Bar */}
                      <div className="bg-gradient-to-r from-green-700 to-green-600 px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl"></span>
                          <h2 className="text-sm  text-white">Craft Your Product description</h2>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6">
                        {/* EDIT MODE */}
                        {!formData.previewMode && (
                          <>
                            {/* Textarea Editor */}
                            <textarea
                              value={formData.description}
                              onChange={(e) => {
                                const newVal = e.target.value;
                                if (newVal.length <= DESCRIPTION_LIMIT) {
                                  setFormData((prev) => ({ ...prev, description: newVal }));
                                }
                              }}
                              onKeyDown={(e) => {
                                // Auto-format on Enter key
                                if (e.key === 'Enter') {
                                  const textarea = e.target;
                                  const cursorPos = textarea.selectionStart;
                                  const text = formData.description;
                                  
                                  // Find current line
                                  let lineStart = text.lastIndexOf('\n', cursorPos - 1) + 1;
                                  let lineEnd = text.indexOf('\n', cursorPos);
                                  if (lineEnd === -1) lineEnd = text.length;
                                  
                                  const currentLine = text.substring(lineStart, lineEnd);
                                  
                                  // Check if current line is a bullet or numbered list
                                  const bulletMatch = currentLine.match(/^(\s*)(-\s)/);
                                  const numberedMatch = currentLine.match(/^(\s*)(\d+\.\s)/);
                                  
                                  if (bulletMatch) {
                                    e.preventDefault();
                                    const indent = bulletMatch[1];
                                    const newText = text.substring(0, cursorPos) + '\n' + indent + '- ' + text.substring(cursorPos);
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    setTimeout(() => {
                                      textarea.selectionStart = cursorPos + indent.length + 3;
                                      textarea.selectionEnd = cursorPos + indent.length + 3;
                                    }, 0);
                                  } else if (numberedMatch) {
                                    e.preventDefault();
                                    const indent = numberedMatch[1];
                                    const currentNum = parseInt(currentLine.match(/\d+/)[0]);
                                    const newNum = currentNum + 1;
                                    const newText = text.substring(0, cursorPos) + '\n' + indent + newNum + '. ' + text.substring(cursorPos);
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    setTimeout(() => {
                                      textarea.selectionStart = cursorPos + indent.length + String(newNum).length + 3;
                                      textarea.selectionEnd = cursorPos + indent.length + String(newNum).length + 3;
                                    }, 0);
                                  }
                                }
                              }}
                              placeholder="Describe your product in detail... Highlighting soil enrichment, growth boost and yield improvement."
                              maxLength={DESCRIPTION_LIMIT}
                              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none mb-4"
                              rows="6"
                              style={{ minHeight: 150, color: '#222', background: '#fff' }}
                            />
                          </>
                        )}

                        {/* PREVIEW MODE */}
                        {formData.previewMode && (
                          <div className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white mb-4" style={{ minHeight: 150 }}>
                            <div className="text-sm text-gray-800 whitespace-pre-wrap break-words leading-relaxed">
                              {formData.description ? (
                                <div>
                                  {formData.description.split('\n').map((line, idx) => {
                                    let rendered = line;
                                    // Bold: **text** → <strong>text</strong>
                                    rendered = rendered.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                                    // Italic: *text* → <em>text</em>
                                    rendered = rendered.replace(/\*(.+?)\*/g, '<em>$1</em>');
                                    // Strikethrough: ~~text~~ → <del>text</del>
                                    rendered = rendered.replace(/~~(.+?)~~/g, '<del>$1</del>');
                                    
                                    // Bullet list: - item
                                    if (rendered.trim().startsWith('- ')) {
                                      return <li key={idx} style={{ marginLeft: '20px' }}>{rendered.substring(2)}</li>;
                                    }
                                    // Numbered list: 1. item
                                    if (rendered.trim().match(/^\d+\.\s/)) {
                                      const [numPart, ...rest] = rendered.trim().split(".");
                                      const num = numPart.trim();
                                      const text = rest.join(".").trim();
                                      return (
                                        <li key={idx} style={{ marginLeft: 20 }}>
                                          {num}. {text}
                                        </li>
                                      );
                                    }
                                    
                                    return (
                                      <p key={idx} dangerouslySetInnerHTML={{ __html: rendered }} />
                                    );
                                  })}
                                </div>
                              ) : (
                                <span className="text-gray-400">No content to preview</span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Error and Character Count */}
                        <div className="flex justify-between items-center mb-4 text-xs">
                          {errors.description && <div className="text-red-500">{errors.description}</div>}
                          <div className="text-gray-600 ml-auto">
                            {formData.description.length} / {DESCRIPTION_LIMIT} characters
                          </div>
                        </div>

                        {/* Action Buttons Row - Only show in edit mode */}
                        {!formData.previewMode && (
                          <div className="flex items-center gap-3 flex-wrap">
                            {/* Circular Formatting Buttons */}
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  const textarea = document.querySelector('textarea[maxLength="' + DESCRIPTION_LIMIT + '"]');
                                  if (textarea) {
                                    const start = textarea.selectionStart;
                                    const end = textarea.selectionEnd;
                                    const selected = formData.description.substring(start, end);
                                    const before = formData.description.substring(0, start);
                                    const after = formData.description.substring(end);
                                    const newText = before + '**' + selected + '**' + after;
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    setTimeout(() => {
                                      textarea.selectionStart = start + 2;
                                      textarea.selectionEnd = end + 2;
                                      textarea.focus();
                                    }, 0);
                                  }
                                }}
                                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-sm font-bold text-green-700 cursor-pointer"
                                title="Bold"
                              >
                                B
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const textarea = document.querySelector('textarea[maxLength="' + DESCRIPTION_LIMIT + '"]');
                                  if (textarea) {
                                    const start = textarea.selectionStart;
                                    const end = textarea.selectionEnd;
                                    const selected = formData.description.substring(start, end);
                                    const before = formData.description.substring(0, start);
                                    const after = formData.description.substring(end);
                                    const newText = before + '*' + selected + '*' + after;
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    setTimeout(() => {
                                      textarea.selectionStart = start + 1;
                                      textarea.selectionEnd = end + 1;
                                      textarea.focus();
                                    }, 0);
                                  }
                                }}
                                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-sm italic text-green-700 cursor-pointer"
                                title="Italic"
                              >
                                i
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const textarea = document.querySelector('textarea[maxLength="' + DESCRIPTION_LIMIT + '"]');
                                  if (textarea) {
                                    const start = textarea.selectionStart;
                                    const end = textarea.selectionEnd;
                                    const selected = formData.description.substring(start, end);
                                    const before = formData.description.substring(0, start);
                                    const after = formData.description.substring(end);
                                    const newText = before + '<u>' + selected + '</u>' + after;
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    setTimeout(() => {
                                      textarea.focus();
                                    }, 0);
                                  }
                                }}
                                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-sm underline text-green-700 cursor-pointer"
                                title="Underline"
                              >
                                u
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const textarea = document.querySelector('textarea[maxLength="' + DESCRIPTION_LIMIT + '"]');
                                  if (textarea) {
                                    const start = textarea.selectionStart;
                                    const end = textarea.selectionEnd;
                                    const selected = formData.description.substring(start, end);
                                    const before = formData.description.substring(0, start);
                                    const after = formData.description.substring(end);
                                    const newText = before + '~~' + selected + '~~' + after;
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    setTimeout(() => {
                                      textarea.selectionStart = start + 2;
                                      textarea.selectionEnd = end + 2;
                                      textarea.focus();
                                    }, 0);
                                  }
                                }}
                                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-sm line-through text-green-700 cursor-pointer"
                                title="Strikethrough"
                              >
                                S
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const textarea = document.querySelector('textarea[maxLength="' + DESCRIPTION_LIMIT + '"]');
                                  if (textarea) {
                                    const selectionStart = textarea.selectionStart;
                                    const selectionEnd = textarea.selectionEnd;
                                    const text = formData.description;
                                    
                                    // Find the start of first line
                                    let lineStart = text.lastIndexOf('\n', selectionStart - 1) + 1;
                                    // Find the end of last line
                                    let lineEnd = text.indexOf('\n', selectionEnd);
                                    if (lineEnd === -1) lineEnd = text.length;
                                    
                                    // Get all lines in selection
                                    const selectedLines = text.substring(lineStart, lineEnd);
                                    const lines = selectedLines.split('\n');
                                    
                                    // Check if all lines already have bullets
                                    const allHaveBullets = lines.every(line => line.trim().startsWith('- '));
                                    
                                    // Toggle bullets
                                    let newLines;
                                    if (allHaveBullets) {
                                      // Remove bullets
                                      newLines = lines.map(line => line.replace(/^\s*- /, ''));
                                    } else {
                                      // Add bullets to all lines
                                      newLines = lines.map(line => {
                                        const trimmed = line.trim();
                                        if (trimmed === '') return line;
                                        return '- ' + trimmed;
                                      });
                                    }
                                    
                                    const newText = text.substring(0, lineStart) + newLines.join('\n') + text.substring(lineEnd);
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    
                                    setTimeout(() => {
                                      textarea.focus();
                                    }, 0);
                                  }
                                }}
                                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-lg text-green-700 cursor-pointer"
                                title="Bullet List"
                              >
                                •
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  const textarea = document.querySelector('textarea[maxLength="' + DESCRIPTION_LIMIT + '"]');
                                  if (textarea) {
                                    const selectionStart = textarea.selectionStart;
                                    const selectionEnd = textarea.selectionEnd;
                                    const text = formData.description;
                                    
                                    // Find the start of first line
                                    let lineStart = text.lastIndexOf('\n', selectionStart - 1) + 1;
                                    // Find the end of last line
                                    let lineEnd = text.indexOf('\n', selectionEnd);
                                    if (lineEnd === -1) lineEnd = text.length;
                                    
                                    // Get all lines in selection
                                    const selectedLines = text.substring(lineStart, lineEnd);
                                    const lines = selectedLines.split('\n');
                                    
                                    // Check if all lines already have numbers
                                    const allHaveNumbers = lines.every(line => line.trim().match(/^\d+\.\s/));
                                    
                                    // Toggle numbers
                                    let newLines;
                                    if (allHaveNumbers) {
                                      // Remove numbers
                                      newLines = lines.map(line => line.replace(/^\s*\d+\.\s/, ''));
                                    } else {
                                      // Add numbers to all lines
                                      newLines = lines.map((line, idx) => {
                                        const trimmed = line.trim();
                                        if (trimmed === '') return line;
                                        return (idx + 1) + '. ' + trimmed;
                                      });
                                    }
                                    
                                    const newText = text.substring(0, lineStart) + newLines.join('\n') + text.substring(lineEnd);
                                    setFormData((prev) => ({ ...prev, description: newText }));
                                    
                                    setTimeout(() => {
                                      textarea.focus();
                                    }, 0);
                                  }
                                }}
                                className="w-8 h-8 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center text-sm text-green-700 cursor-pointer"
                                title="Numbered List"
                              >
                                1.
                              </button>
                            </div>
                            {/* Preview Mode Button */}
                            <button
                              type="button"
                              className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer ml-auto"
                              onClick={() => setFormData((prev) => ({ ...prev, previewMode: !prev.previewMode }))}
                            >
                              🔍 Preview Mode
                            </button>
                          </div>
                        )}

                        {/* Preview Mode Button - Show in preview mode */}
                        {formData.previewMode && (
                          <div className="flex justify-end">
                            <button
                              type="button"
                              className="px-4 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 rounded-lg text-sm font-medium flex items-center gap-2 cursor-pointer"
                              onClick={() => setFormData((prev) => ({ ...prev, previewMode: !prev.previewMode }))}
                            >
                              ✏️ Edit Mode
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* About Item & Product Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        About Item <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="about_item"
                        value={formData.about_item}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                          errors.about_item ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                        }`}
                        placeholder="Enter about item details"
                        rows="4"
                      />
                      {errors.about_item && <div className="text-xs text-red-500 mt-2">{errors.about_item}</div>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Product Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="product_details"
                        value={formData.product_details}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                          errors.product_details ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                        }`}
                        placeholder="Enter product details"
                        rows="4"
                      />
                      {errors.product_details && <div className="text-xs text-red-500 mt-2">{errors.product_details}</div>}
                    </div>
                  </div>

                  {/* Safety Information & Usage Directions */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Safety Information <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="safety_information"
                        value={formData.safety_information}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                          errors.safety_information ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                        }`}
                        placeholder="Enter safety information"
                        rows="4"
                      />
                      {errors.safety_information && <div className="text-xs text-red-500 mt-2">{errors.safety_information}</div>}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Usage Directions <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="usage_directions"
                        value={formData.usage_directions}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
                          errors.usage_directions ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                        }`}
                        placeholder="Enter usage directions"
                        rows="4"
                      />
                      {errors.usage_directions && <div className="text-xs text-red-500 mt-2">{errors.usage_directions}</div>}
                    </div>
                  </div>

                  {/* Images */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Images & Videos <span className="text-red-500">*</span>
                      {displayImages.length > 0 && ` [${currentImageIndex + 1}/${displayImages.length}]`}
                    </label>

                    {errors.images && <div className="text-xs text-red-500 mb-3">{errors.images}</div>}
                    {imageTypeError && <div className="text-xs text-red-500 mb-3">{imageTypeError}</div>}
                    {imageSizeError && <div className="text-xs text-red-500 mb-3">{imageSizeError}</div>}

                    {displayImages.length > 0 ? (
                      <div className="relative bg-gray-100 rounded-lg p-4 mb-4 h-80">
                        {displayImages.length > 1 && (
                          <button
                            type="button"
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                        )}

                        <div className="h-64 flex items-center justify-center">
                          {displayImages[currentImageIndex] && (
                            <>
                              {displayImages[currentImageIndex]?.type === 'video' ? (
                                <video
                                  src={
                                    displayImages[currentImageIndex]?.isNew || !displayImages[currentImageIndex]?.url?.startsWith('/')
                                      ? displayImages[currentImageIndex]?.url
                                      : `${STRAPI_URL}${displayImages[currentImageIndex].url}`
                                  }
                                  className="max-h-64 max-w-full object-contain"
                                  controls
                                />
                              ) : (
                                <Image
                                  src={
                                    displayImages[currentImageIndex]?.isNew || !displayImages[currentImageIndex]?.url?.startsWith('/')
                                      ? displayImages[currentImageIndex]?.url
                                      : `${STRAPI_URL}${displayImages[currentImageIndex].url}`
                                  }
                                  alt="Product preview"
                                  width={400}
                                  height={256}
                                  className="max-h-64 max-w-full object-contain"
                                  unoptimized
                                />
                              )}
                            </>
                          )}
                        </div>

                        {displayImages[currentImageIndex] && (
                          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                            <div className="bg-white px-3 py-1 rounded-md shadow-sm max-w-xs truncate">
                              <span className="text-xs text-gray-700">
                                {displayImages[currentImageIndex]?.name || `Media ${currentImageIndex + 1}`}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 bg-white rounded-md shadow-sm p-1">
                              <button
                                type="button"
                                onClick={() => handleRemoveImage(currentImageIndex)}
                                className="hover:bg-gray-100 p-1.5 rounded"
                                title="Delete"
                              >
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                              <label className="cursor-pointer hover:bg-gray-100 p-1.5 rounded">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                <input
                                  type="file"
                                  accept="image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg"
                                  onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      setImageFiles(prev => [...prev, file]);
                                      setImagePreviews(prev => [...prev, {
                                        url: URL.createObjectURL(file),
                                        name: file.name,
                                        type: file.type.startsWith('video/') ? 'video' : 'image'
                                      }]);
                                    }
                                    e.target.value = '';
                                  }}
                                  className="hidden"
                                />
                              </label>
                            </div>
                          </div>
                        )}

                        {displayImages.length > 1 && (
                          <button
                            type="button"
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        )}
                      </div>
                    ) : (
                      <label className="cursor-pointer block">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-50 hover:border-green-400 transition-all h-80 flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </div>
                          <p className="text-gray-600 text-sm font-medium">Click to upload Images or Videos</p>
                          <p className="text-gray-500 text-xs mt-2">PNG, JPEG, MP4, WebM, OGG</p>
                        </div>
                        <input
                          type="file"
                          accept="image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg"
                          multiple
                          onChange={handleImageSelect}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>

                  {/* Category & Subcategory */}
                  <div>
                    <CategorySelector
                      initialCategory={selectedCategory || initialData.categories?.[0] || null}
                      initialSubcategory={selectedSubcategory || initialData.sub_categories?.[0] || null}
                      onCategoryChange={setSelectedCategory}
                      onSubcategoryChange={setSelectedSubcategory}
                    />
                    {errors.category && <div className="text-xs text-red-500 mt-2">{errors.category}</div>}
                    {errors.subcategory && <div className="text-xs text-red-500 mt-2">{errors.subcategory}</div>}
                  </div>
                </div>
              )}

              {/* ========== STEP 2: VARIANTS ========== */}
              {currentStep === 2 && (
                <div>
                  <ProductVariant
                    initialVariants={variants}
                    onVariantsChange={setVariants}
                    mode={mode}
                  />
                </div>
              )}

              {/* ========== STEP 3: FAQ ========== */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  {/* FAQ Instructions */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-sm text-blue-700">
                      <strong>💡 FAQ Instructions:</strong> Add 1 to 4 frequently asked questions about this product. Each FAQ will be displayed on the product page.
                    </p>
                  </div>

                  {/* Show FAQ List OR Form (not both) */}
                  {!isEditingFAQ ? (
                    <>
                      {/* FAQ List View */}
                      <div className="space-y-4">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-base font-semibold text-gray-900">
                            Frequently Asked Questions
                          </h3>
                          {faqs.length < 4 && (
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedFAQIndex(null);
                                setIsEditingFAQ(true);
                              }}
                              className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg text-sm font-medium cursor-pointer transition-all flex items-center gap-2"
                            >
                              <FiPlus size={18} />
                              Add FAQ
                            </button>
                          )}
                        </div>

                        {/* Empty State */}
                        {faqs.length === 0 && (
                          <div className="text-center py-12">
                            <p className="text-gray-500 text-sm mb-4">
                              No FAQs added yet. Click Add FAQ to add your first question.
                            </p>
                          </div>
                        )}

                        {/* FAQ Items */}
                        {faqs.map((faq, index) => (
                          <div
                            key={faq.tempId || faq.documentId || index}
                            className="bg-white border border-gray-200 rounded-lg p-5"
                          >
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex-1">
                                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                                  Q{index + 1}: {faq.question || faq.Question || '(No question)'}
                                </h4>
                                <p className="text-sm text-gray-700">
                                  {faq.answer || faq.Answer || '(No answer)'}
                                </p>
                              </div>
                              <div className="flex gap-2 flex-shrink-0">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedFAQIndex(index);
                                    setIsEditingFAQ(true);
                                  }}
                                  className="bg-green-600 text-white hover:bg-green-700 p-2 rounded-lg cursor-pointer transition-all flex items-center justify-center"
                                  title="Edit FAQ"
                                >
                                  <FiEdit size={16} />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => {
                                    const question = faq.question || faq.Question || 'FAQ';
                                    setDeleteFAQModal({ open: true, index, question });
                                  }}
                                  className="bg-green-600 text-white hover:bg-green-700 p-2 rounded-lg cursor-pointer transition-all flex items-center justify-center"
                                  title="Delete FAQ"
                                >
                                  <FiTrash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Max FAQs Message */}
                        {faqs.length === 4 && (
                          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                            <p className="text-sm text-amber-800">
                              ℹ️ Maximum 4 FAQs reached. Delete one to add another.
                            </p>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Inline FAQ Form */}
                      <div className="bg-white border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {selectedFAQIndex !== null ? 'Edit FAQ' : 'Add New FAQ'}
                          </h3>
                          <button
                            type="button"
                            onClick={() => {
                              setIsEditingFAQ(false);
                              setSelectedFAQIndex(null);
                            }}
                            className="text-gray-400 hover:text-gray-600 text-2xl font-light cursor-pointer"
                          >
                            ✕
                          </button>
                        </div>

                        <FAQModal
                          faq={selectedFAQIndex !== null ? faqs[selectedFAQIndex] : null}
                          onSave={(savedFAQ) => {
                            if (selectedFAQIndex !== null) {
                              // Update existing FAQ
                              const updated = [...faqs];
                              updated[selectedFAQIndex] = {
                                ...savedFAQ,
                                tempId: faqs[selectedFAQIndex].tempId,
                              };
                              setFAQs(updated);
                            } else {
                              // Add new FAQ
                              setFAQs((prev) => [
                                ...prev,
                                {
                                  ...savedFAQ,
                                  tempId: `temp_${Date.now()}_${Math.random()}`,
                                },
                              ]);
                            }
                            setIsEditingFAQ(false);
                            setSelectedFAQIndex(null);
                          }}
                          onCancel={() => {
                            setIsEditingFAQ(false);
                            setSelectedFAQIndex(null);
                          }}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              </form>
            </div>

          {/* Footer - Navigation Buttons */}
          <div className="sticky bottom-0 bg-white border-t border-gray-200 px-12 py-6 flex justify-between items-center">
            <button
              type="button"
              onClick={handlePrevStep}
              disabled={currentStep === 1 || isLoading}
              className="px-6 py-2 border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              ← Back
            </button>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleCancelClick}
                disabled={isLoading}
                className="px-6 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Cancel
              </button>

              {currentStep < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={handleNextStep}
                  disabled={isLoading || !isCurrentStepValid()}
                  className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  title={!isCurrentStepValid() ? "Please fill all required fields and add at least one image" : ""}
                >
                  Next →
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isLoading}
                  className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  onClick={() => {
                    handleSubmit(null, "published");
                  }}
                >
                  Publish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* CANCEL CONFIRMATION MODAL - Only show for Step 1 with dirty data */}
      {cancelConfirmModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full border border-gray-200 relative">
            <h3 className="text-lg font-bold mb-3 text-gray-900">Discard Changes?</h3>
            <p className="mb-6 text-base text-gray-800">
              You have unsaved changes in Step 1. If you cancel now, your data will be deleted and cannot be recovered.
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2 rounded border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 font-semibold text-base"
                onClick={() => setCancelConfirmModal({ open: false })}
              >
                Keep Editing
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-red-600 text-white hover:bg-red-700 font-semibold text-base"
                onClick={() => {
                  setCancelConfirmModal({ open: false });
                  onCancel();
                }}
              >
                Discard & Exit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FAQ DELETE CONFIRMATION MODAL */}
      {deleteFAQModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full border border-gray-200 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setDeleteFAQModal({ open: false, index: null, question: "" })}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Delete Confirmation</h3>
            <p className="mb-5 text-base text-gray-800">
              Are you sure that you want to delete this FAQ?
              <span className="font-bold text-red-600 ml-1 block mt-2">
                {deleteFAQModal.question}
              </span>
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base"
                onClick={() => {
                  setFAQs((prev) =>
                    prev.filter((_, i) => i !== deleteFAQModal.index)
                  );
                  showToast(`Deleted FAQ: "${deleteFAQModal.question}"`, "success");
                  setDeleteFAQModal({ open: false, index: null, question: "" });
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Yes
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base"
                onClick={() => setDeleteFAQModal({ open: false, index: null, question: "" })}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
