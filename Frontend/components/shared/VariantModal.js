"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { createVariantAPI, updateVariantAPI, publishVariantAPI, uploadToStrapiMediaLibrary, fetchVariantByIdAPI } from "@/utils/productApi";
import { showToast } from "@/components/shared/toast";
import Loader from "@/components/shared/Loader";
import { STRAPI_URL } from "@/utils/apiConfig";
import "@/style/variant.css";
import { getEnums } from "@/components/auth/Signin";

/**
 * VariantModal Component
 * 
 * Modal for adding/editing product variants with image/video support
 * Can be displayed as a modal or inline form within a step
 * 
 * @param {Object} variant - Variant data for editing (null for add)
 * @param {Function} onSave - Callback when variant is saved
 * @param {Function} onCancel - Callback to close modal/form
 * @param {boolean} hideCloseButton - Hide the close (X) button for inline display
 * @param {boolean} isInline - If true, renders without modal wrapper (for inline display in steps)
 * @param {string} productId - Product ID for sortOrder validation
 */
export default function VariantModal({ variant, onSave, onCancel, hideCloseButton = false, isInline = false, productId }) {
  const [formData, setFormData] = useState({
    variant_name: "",
    variety_type: "",
    grade: "",
    weight: "",
    weight_unit: "g",
    size: "",
    style: "",
    package_type: "",
    isDefault: false,
    sortOrder: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Saving variant...");
  const [errors, setErrors] = useState({});
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [videoPreviews, setVideoPreviews] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [existingVideos, setExistingVideos] = useState([]);
  const [selectedImageSlots, setSelectedImageSlots] = useState([]);
  const [selectedVideoSlots, setSelectedVideoSlots] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const fileInputRef = useRef(null);
  const enums = getEnums();

  // Default form state for resetting
  const defaultFormData = {
    variant_name: "",
    variety_type: "",
    grade: "",
    weight: "",
    weight_unit: "g",
    size: "",
    style: "",
    package_type: "",
    isDefault: false,
    sortOrder: 0,
  };

  // Reset form to empty state
  const resetForm = () => {
    setFormData(defaultFormData);
    setImageFiles([]);
    setVideoFiles([]);
    setImagePreviews([]);
    setVideoPreviews([]);
    setExistingImages([]);
    setExistingVideos([]);
    setSelectedImageSlots([]);
    setSelectedVideoSlots([]);
    setCurrentImageIndex(0);
    setCurrentVideoIndex(0);
    setErrors({});
  };

  // Pre-fill form if editing, reset if variant is null (new variant mode)
  useEffect(() => {
    if (variant) {
      setFormData({
        variant_name: variant.variant_name || "",
        variety_type: variant.variety_type || "",
        grade: variant.grade || "",
        weight: variant.weight || "",
        weight_unit: variant.weight_unit || "g",
        size: variant.size || "",
        style: variant.style || "",
        package_type: variant.package_type || "",
        isDefault: variant.isDefault || false,
        sortOrder: variant.sortOrder || 0,
      });

      // Load existing images
      if (variant.varientImage && Array.isArray(variant.varientImage)) {
        setExistingImages(
          variant.varientImage.map(img => {
            // Ensure full URL with STRAPI_URL if not already present
            const fullUrl = img.url?.startsWith('http') ? img.url : `${STRAPI_URL}${img.url}`;
            return {
              id: img.id,
              url: fullUrl,
              name: img.name || "Image",
              type: "image"
            };
          })
        );
      }

      // Load existing videos
      if (variant.varientVideo && Array.isArray(variant.varientVideo)) {
        setExistingVideos(
          variant.varientVideo.map(vid => {
            // Ensure full URL with STRAPI_URL if not already present
            const fullUrl = vid.url?.startsWith('http') ? vid.url : `${STRAPI_URL}${vid.url}`;
            return {
              id: vid.id,
              url: fullUrl,
              name: vid.name || "Video",
              type: "video"
            };
          })
        );
      }
    } else {
      // Variant is null - reset form for adding new variant
      resetForm();
    }
  }, [variant]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "weight" ? Number(value) : value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileSelect = (e) => {
    const files = Array.from(e.target.files || []);
    const allowedImageTypes = ["image/png", "image/jpeg", "image/jpg"];
    const allowedVideoTypes = ["video/mp4", "video/webm", "video/ogg"];
    const allowedTypes = [...allowedImageTypes, ...allowedVideoTypes];

    // Separate images and videos
    const images = files.filter(f => allowedImageTypes.includes(f.type));
    const videos = files.filter(f => allowedVideoTypes.includes(f.type));

    // Add images
    if (images.length > 0) {
      setImageFiles(prev => [...prev, ...images]);
      const imagePrev = images.map(f => ({
        url: URL.createObjectURL(f),
        name: f.name,
        type: "image"
      }));
      setImagePreviews(prev => [...prev, ...imagePrev]);
    }

    // Add videos - now add them to imagePreviews for unified carousel display
    if (videos.length > 0) {
      setVideoFiles(prev => [...prev, ...videos]);
      const videoPrev = videos.map(f => ({
        url: URL.createObjectURL(f),
        name: f.name,
        type: "video"
      }));
      // Add videos to imagePreviews so they show in the same carousel
      setImagePreviews(prev => [...prev, ...videoPrev]);
    }

    e.target.value = '';
  };

  const handleSelectImageSlot = (index) => {
    setSelectedImageSlots(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      return [...prev, index];
    });
  };

  const handleSelectVideoSlot = (index) => {
    setSelectedVideoSlots(prev => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      }
      return [...prev, index];
    });
  };

  const handleRemoveNewImage = (index) => {
    // Get the media at this index to check if it's image or video
    const allNewMedia = imagePreviews;
    const media = allNewMedia[index];
    
    if (media?.type === 'video') {
      // Find and remove from videoFiles
      const videoIndex = Array.from(videoFiles).findIndex(f => 
        URL.createObjectURL(f) === media.url
      );
      if (videoIndex >= 0) {
        setVideoFiles(prev => prev.filter((_, i) => i !== videoIndex));
      }
    } else {
      // Find and remove from imageFiles
      const imageIndex = Array.from(imageFiles).findIndex(f => 
        URL.createObjectURL(f) === media.url
      );
      if (imageIndex >= 0) {
        setImageFiles(prev => prev.filter((_, i) => i !== imageIndex));
      }
    }
    
    // Remove from imagePreviews
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveNewVideo = (index) => {
    setVideoFiles(prev => prev.filter((_, i) => i !== index));
    setVideoPreviews(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingImage = (index) => {
    setExistingImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleRemoveExistingVideo = (index) => {
    setExistingVideos(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.variant_name.trim()) newErrors.variant_name = "Variant name is required";
    if (!formData.variety_type.trim()) newErrors.variety_type = "Variety type is required";
    if (!formData.grade.trim()) newErrors.grade = "Grade is required";
    if (!formData.weight) newErrors.weight = "Weight is required";
    if (!formData.size.trim()) newErrors.size = "Size is required";
    
    // Check if at least one image exists (either existing or new)
    const totalImages = existingImages.length + imagePreviews.length;
    if (totalImages === 0) newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setLoadingMessage(variant?.documentId ? "Updating variant..." : "Creating variant...");
    try {
      let variantImageIds = [];
      let variantVideoIds = [];

      console.log("=== HANDLE SAVE START ===");
      console.log("imageFiles.length:", imageFiles.length);
      console.log("videoFiles.length:", videoFiles.length);

      // Upload new images
      if (imageFiles.length > 0) {
        setLoadingMessage("Uploading images...");
        console.log("Uploading images...");
        const uploadedImages = await uploadToStrapiMediaLibrary(imageFiles);
        console.log("uploadedImages response:", uploadedImages);
        console.log("uploadedImages is array?", Array.isArray(uploadedImages));
        
        // uploadedImages is an array, extract IDs
        variantImageIds = Array.isArray(uploadedImages) 
          ? uploadedImages.map(img => img.id).filter(Boolean)
          : [];
        console.log("Extracted variantImageIds:", variantImageIds);
      }

      // Upload new videos
      if (videoFiles.length > 0) {
        setLoadingMessage("Uploading videos...");
        console.log("Uploading videos...");
        const uploadedVideos = await uploadToStrapiMediaLibrary(videoFiles);
        console.log("uploadedVideos response:", uploadedVideos);
        console.log("uploadedVideos is array?", Array.isArray(uploadedVideos));
        
        // uploadedVideos is an array, extract IDs
        variantVideoIds = Array.isArray(uploadedVideos)
          ? uploadedVideos.map(vid => vid.id).filter(Boolean)
          : [];
        console.log("Extracted variantVideoIds:", variantVideoIds);
      }

      // Combine existing and new IDs
      const existingImageIds = existingImages.map(img => {
        return typeof img === 'object' ? img.id : img;
      }).filter(Boolean);
      
      const existingVideoIds = existingVideos.map(vid => {
        return typeof vid === 'object' ? vid.id : vid;
      }).filter(Boolean);

      console.log("existingImageIds:", existingImageIds);
      console.log("existingVideoIds:", existingVideoIds);

      // Combine all media (images + videos) into single varientImage array
      // Strapi stores both images and videos in the varientImage field
      const allMediaIds = [
        ...existingImageIds, 
        ...variantImageIds,
        ...existingVideoIds,
        ...variantVideoIds
      ];

      console.log("allMediaIds (final):", allMediaIds);

      const payloadData = {
        ...formData,
        varientImage: allMediaIds.length > 0 ? allMediaIds : [],
        productId: productId,
      };

      console.log("payloadData being sent:", payloadData);

      if (variant && variant.documentId) {
        // Update existing variant
        setLoadingMessage("Saving variant changes...");
        console.log("Updating existing variant:", variant.documentId);
        const response = await updateVariantAPI(variant.documentId, payloadData);
        console.log("Update response:", response);
        
        // Fetch the complete variant data with images to ensure we have all relationships
        setLoadingMessage("Fetching updated variant...");
        console.log("Fetching complete variant data...");
        let completeVariant;
        try {
          completeVariant = await fetchVariantByIdAPI(variant.documentId);
        } catch (err) {
          console.warn("Could not fetch complete variant data, using response data:", err.message);
          completeVariant = response;
        }
        console.log("Complete variant fetched:", completeVariant);
        
        const variantData = completeVariant.data || completeVariant;
        showToast("Variant saved successfully", "success");
        onSave({
          ...variant,
          ...formData,
          varientImage: variantData.varientImage || [],
          varientVideo: variantData.varientVideo || [],
          publishedAt: variantData.publishedAt || new Date().toISOString(),
        });
        // Reset form after successful update
        resetForm();
      } else {
        // Create new variant
        setLoadingMessage("Creating new variant...");
        console.log("Creating new variant");
        const response = await createVariantAPI(payloadData);
        console.log("Create response:", response);
        
        // Use response data directly - no need to fetch again
        const variantData = response.data || response;
        
        onSave({
          ...formData,
          id: variantData.id,
          documentId: variantData.documentId,
          varientImage: variantData.varientImage || [],
          varientVideo: variantData.varientVideo || [],
          publishedAt: variantData.publishedAt || new Date().toISOString(),
        });
        showToast("Variant saved successfully", "success");
        // Reset form after successful create - allows adding multiple variants
        resetForm();
      }
      console.log("=== HANDLE SAVE END ===");
    } catch (err) {
      console.error("=== HANDLE SAVE ERROR ===");
      console.error("Error:", err);
      showToast(err.message || "Failed to save variant", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Loader isVisible={isLoading} message={loadingMessage} />
      {isInline ? (
        // Inline form - no modal wrapper, render directly
        <div className="variant-form-content" style={{ width: '100%' }}>
          <div className="form-row">
            <div className="form-group">
              <label>Variant Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="variant_name"
                value={formData.variant_name}
                onChange={handleChange}
                placeholder="e.g., Premium Pack"
                disabled={isLoading}
              />
              {errors.variant_name && (
                <span className="error-message">{errors.variant_name}</span>
              )}
            </div>

            <div className="form-group">
              <label>Variety Type <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="variety_type"
                value={formData.variety_type}
                onChange={handleChange}
                placeholder="e.g., Standard, Premium"
                disabled={isLoading}
              />
              {errors.variety_type && (
                <span className="error-message">{errors.variety_type}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Grade <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                placeholder="e.g., A, B, C"
                disabled={isLoading}
              />
              {errors.grade && (
                <span className="error-message">{errors.grade}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Weight <span className="text-red-500">*</span></label>
              <div className="weight-input-group">
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="e.g., 100"
                  disabled={isLoading}
                  min="0"
                  step="0.01"
                />
                <select
                  name="weight_unit"
                  value={formData.weight_unit}
                  onChange={handleChange}
                  disabled={isLoading}
                >
                  {enums?.weightUnitOptions?.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
              {errors.weight && (
                <span className="error-message">{errors.weight}</span>
              )}
            </div>

            <div className="form-group">
              <label>Size <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="size"
                value={formData.size}
                onChange={handleChange}
                placeholder="e.g., Medium, Large"
                disabled={isLoading}
              />
              {errors.size && (
                <span className="error-message">{errors.size}</span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Style</label>
              <input
                type="text"
                name="style"
                value={formData.style}
                onChange={handleChange}
                placeholder="e.g., Box, Pouch, Bottle"
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label>Package Type</label>
              <input
                type="text"
                name="package_type"
                value={formData.package_type}
                onChange={handleChange}
                placeholder="e.g., Individual, Bundle"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Default Variant & Sort Order */}
          <div className="form-row">
            <div className="form-group">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={(e) => setFormData(prev => ({ ...prev, isDefault: e.target.checked }))}
                  disabled={isLoading}
                  style={{ cursor: 'pointer', width: '18px', height: '18px' }}
                />
                <span>Mark as Default Variant</span>
              </label>
              <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px', marginLeft: '26px' }}>
                Only one variant per product can be default. The default variant will be pre-selected in the UI.
              </p>
            </div>

            <div className="form-group">
              <label>Sort Order (Position)</label>
              <input
                type="number"
                name="sortOrder"
                value={formData.sortOrder}
                onChange={(e) => setFormData(prev => ({ ...prev, sortOrder: parseInt(e.target.value) || 0 }))}
                placeholder="0 (lower number = earlier position)"
                disabled={isLoading}
                min="0"
                step="1"
              />
              <p style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
                Lower numbers appear first. Default variant will be pre-selected regardless of position.
              </p>
            </div>
          </div>

          {/* Images Section */}
          <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #ddd' }}>
            <label style={{ display: 'block', fontSize: '15px', fontWeight: '600', color: '#000', marginBottom: '8px' }}>
              Variant Images <span style={{ color: 'red' }}>*</span> {(existingImages.length + imagePreviews.length) === 0 
                ? "" 
                : `[${currentImageIndex + 1}/${existingImages.length + imagePreviews.length}]` 
              }
            </label>
            
            {errors.images && (
              <div style={{ fontSize: '12px', color: '#dc2626', marginBottom: '8px' }}>{errors.images}</div>
            )}

            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg"
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />

            {(existingImages.length + imagePreviews.length) > 0 ? (
              <div style={{ position: 'relative', backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '12px', marginBottom: '12px', height: '160px' }}>
                
                {/* Previous Button */}
                {(existingImages.length + imagePreviews.length) > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentImageIndex(prev => prev === 0 ? (existingImages.length + imagePreviews.length - 1) : prev - 1)}
                    style={{
                      position: 'absolute',
                      left: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      padding: '8px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}

                {/* Image/Video Display */}
                <div style={{ height: '96px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {(() => {
                    const allMedia = [...existingImages, ...imagePreviews];
                    const currentMedia = allMedia[currentImageIndex];
                    
                    if (!currentMedia) return null;
                    
                    // Check if it's a video by type property or MIME type or file extension
                    const isVideo = currentMedia.type === 'video' || 
                                   currentMedia.mime?.startsWith('video/') || 
                                   /\.(mp4|webm|ogg|mov|avi)$/i.test(currentMedia.url || '');
                    
                    const mediaUrl = currentMedia?.isNew || !currentMedia?.url?.startsWith('/') 
                      ? currentMedia?.url 
                      : `${STRAPI_URL}${currentMedia?.url}`;
                    
                    return isVideo ? (
                      <video
                        src={mediaUrl}
                        style={{ maxHeight: '96px', maxWidth: '100%', objectFit: 'contain' }}
                        controls
                      />
                    ) : (
                      <Image
                        src={mediaUrl}
                        alt="Variant preview"
                        width={300}
                        height={96}
                        style={{ maxHeight: '96px', maxWidth: '100%', objectFit: 'contain' }}
                        unoptimized
                      />
                    );
                  })()}
                </div>

                {/* Action Controls - Bottom Center */}
                {(() => {
                  const allMedia = [...existingImages, ...imagePreviews];
                  return allMedia[currentImageIndex] ? (
                    <div style={{ position: 'absolute', bottom: '12px', left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', paddingX: '12px' }}>
                      
                      {/* Image Name Display */}
                      <div style={{ backgroundColor: 'white', padding: '4px 8px', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        <span style={{ fontSize: '12px', color: '#374151' }}>
                          {allMedia[currentImageIndex]?.name || `Media ${currentImageIndex + 1}`}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: 'white', borderRadius: '6px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', padding: '4px' }}>
                        
                        {/* Delete Icon */}
                        <button
                          type="button"
                          onClick={() => {
                            if (currentImageIndex < existingImages.length) {
                              handleRemoveExistingImage(currentImageIndex);
                              setCurrentImageIndex(Math.max(0, currentImageIndex - 1));
                            } else {
                              handleRemoveNewImage(currentImageIndex - existingImages.length);
                              setCurrentImageIndex(Math.max(0, currentImageIndex - 1));
                            }
                          }}
                          style={{
                            padding: '4px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                          }}
                          title="Delete image"
                        >
                          <svg style={{ width: '14px', height: '14px', color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>

                        {/* Add More Images/Videos Icon */}
                        <label style={{ cursor: 'pointer', padding: '4px', backgroundColor: 'transparent', border: 'none', borderRadius: '4px' }} title="Add more images or videos">
                          <svg style={{ width: '14px', height: '14px', color: '#4b5563' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                          <input
                            type="file"
                            accept="image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg"
                            multiple
                            onChange={handleFileSelect}
                            style={{ display: 'none' }}
                          />
                        </label>
                      </div>
                    </div>
                  ) : null;
                })()}

                {/* Next Button */}
                {(existingImages.length + imagePreviews.length) > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentImageIndex(prev => (prev + 1) % (existingImages.length + imagePreviews.length))}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      padding: '8px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      zIndex: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            ) : (
              <label style={{ cursor: 'pointer', display: 'block', marginBottom: '12px' }}>
                <div style={{
                  position: 'relative',
                  backgroundColor: '#f9fafb',
                  border: '2px dashed #d1d5db',
                  borderRadius: '8px',
                  height: '160px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.borderColor = '#10b981';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                  e.currentTarget.style.borderColor = '#d1d5db';
                }}
                >
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#059669', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <svg style={{ width: '20px', height: '20px', color: 'white' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p style={{ color: '#4b5563', fontSize: '12px' }}>Click to add Images or Videos</p>
                  <p style={{ color: '#9ca3af', fontSize: '12px', marginTop: '4px' }}>PNG, JPEG, MP4</p>
                </div>
                <input
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg"
                  multiple
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
              </label>
            )}
          </div>

          <div className="modal-footer">
            <button
              type="button"
              onClick={onCancel}
              disabled={isLoading}
              className="btn-modal btn-cancel"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isLoading}
              className="btn-modal btn-publish"
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </div>
      ) : (
        // Modal wrapper - for modal display
        <div className="variant-modal-overlay">
          <div className="variant-modal-content" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <div className="modal-header">
              <h2>{variant ? "Edit Variant" : "Add New Variant"}</h2>
              {!hideCloseButton && (
                <button
                  type="button"
                  onClick={onCancel}
                  disabled={isLoading}
                  className="btn-close-modal"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="modal-body">
              {/* Form content is rendered above via isInline check, this section should not render */}
            </div>

            <div className="modal-footer">
              <button
                type="button"
                onClick={onCancel}
                disabled={isLoading}
                className="btn-modal btn-cancel"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSave}
                disabled={isLoading}
                className="btn-modal btn-publish"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
