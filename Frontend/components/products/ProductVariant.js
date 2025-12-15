"use client";

import React, { useState, useEffect } from "react";
import VariantModal from "@/components/shared/VariantModal";
import { STRAPI_URL } from "@/utils/apiConfig";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { showToast } from "@/components/shared/toast";
import "@/style/variant.css";

/**
 * ProductVariant Component
 * 
 * Displays a list of product variants and always shows the variant form inline
 * This component is used in both Add and Edit product forms
 * 
 * @param {Array} initialVariants - Existing variants from product (for edit mode)
 * @param {Function} onVariantsChange - Callback when variants are added/updated
 * @param {string} mode - 'add' or 'edit' mode
 */
export default function ProductVariant({
  initialVariants = [],
  onVariantsChange,
  mode = "add",
}) {
  const [variants, setVariants] = useState(initialVariants);
  const [editingVariant, setEditingVariant] = useState(null);
  const [showForm, setShowForm] = useState(true); // Always show form by default
  const [draggedVariant, setDraggedVariant] = useState(null);
  const [dragOverIndex, setDragOverIndex] = useState(null);
  const [deleteVariantModal, setDeleteVariantModal] = useState({ open: false, variant: null });

  // Sync variants when initialVariants prop changes (for edit mode)
  useEffect(() => {
    setVariants(initialVariants);
  }, [initialVariants]);

  // Notify parent component of changes
  useEffect(() => {
    if (onVariantsChange) {
      onVariantsChange(variants);
    }
  }, [variants, onVariantsChange]);

  const handleSaveVariant = (variantData) => {
    if (editingVariant) {
      // Update existing variant
      setVariants(
        variants.map((v) =>
          (v.id === editingVariant.id || v.documentId === editingVariant.documentId) 
            ? { ...v, ...variantData } 
            : // If marking this variant as default, unmark others
              variantData.isDefault ? { ...v, isDefault: false } : v
        )
      );
    } else {
      // Add new variant - should have id and documentId from API response
      const newVariant = {
        ...variantData,
        // Ensure we have proper IDs from the API response
        id: variantData.id || variantData.documentId,
        documentId: variantData.documentId,
        tempId: Date.now(), // Keep tempId for reference only
        sortOrder: variantData.sortOrder || variants.length, // Default sort order
      };
      
      // If marking as default, unmark others
      const updatedVariants = variantData.isDefault 
        ? variants.map(v => ({ ...v, isDefault: false }))
        : variants;
      
      setVariants([...updatedVariants, newVariant]);
    }
    // Reset form after save
    setEditingVariant(null);
  };

  const handleDeleteVariant = (variant) => {
    setDeleteVariantModal({ open: true, variant });
  };

  const confirmDeleteVariant = () => {
    const variant = deleteVariantModal.variant;
    const variantId = variant.id || variant.tempId;
    const variantName = variant.variant_name || "Variant";
    
    showToast(`Deleted variant: ${variantName}`, "success");
    setVariants(variants.filter((v) => v.id !== variantId && v.tempId !== variantId));
    setDeleteVariantModal({ open: false, variant: null });
  };

  const handleEditVariant = (variant) => {
    setEditingVariant(variant);
    setShowForm(true);
  }

  // Drag and Drop Handlers
  const handleDragStart = (e, variant, index) => {
    setDraggedVariant({ variant, index });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    setDragOverIndex(null);
    
    if (!draggedVariant) return;
    
    const { variant: draggedItem, index: dragIndex } = draggedVariant;
    
    // Reorder variants array
    const newVariants = [...variants];
    const draggedFromIndex = newVariants.findIndex(v => (v.id || v.tempId) === (draggedItem.id || draggedItem.tempId));
    
    if (draggedFromIndex !== -1 && draggedFromIndex !== dropIndex) {
      // Remove from old position
      const [removed] = newVariants.splice(draggedFromIndex, 1);
      
      // Insert at new position
      const insertIndex = dropIndex > draggedFromIndex ? dropIndex - 1 : dropIndex;
      newVariants.splice(insertIndex, 0, removed);
      
      // Update sortOrder for all variants
      newVariants.forEach((v, idx) => {
        v.sortOrder = idx;
      });
      
      setVariants(newVariants);
    }
    
    setDraggedVariant(null);
  };

  const handleDragEnd = () => {
    setDraggedVariant(null);
    setDragOverIndex(null);
  };

  // EDIT PAGE: Display variants in their SAVED order (sortOrder), NOT rearranged
  // Default badge shows but doesn't move the variant to top
  // Sorting happens ONLY on the view page, not here
  const displayVariants = variants;

  return (
    <div className="product-variant-container">
      {/* Variants List */}
      {variants.length > 0 && (
        <div className="variants-list">
          <h3 className="variant-title mb-4">Added Variants</h3>
          <p className="variant-subtitle">Drag to reorder • Click to edit</p>
          {displayVariants.map((variant, index) => (
            <div
              key={variant.id || variant.tempId} 
              className={`variant-card ${dragOverIndex === index ? 'drag-over' : ''} ${draggedVariant?.variant?.id === variant.id || draggedVariant?.variant?.tempId === variant.tempId ? 'dragging' : ''}`}
              draggable
              onDragStart={(e) => handleDragStart(e, variant, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              onClick={() => handleEditVariant(variant)}
              style={{ cursor: 'pointer' }}
            >
              {/* Drag Handle */}
              <div className="variant-drag-handle" title="Drag to reorder">
                <span className="drag-icon">⋮⋮</span>
              </div>

              {/* Default Badge */}
              {variant.isDefault && (
                <div className="variant-default-badge">Default</div>
              )}

              <div className="variant-info">
                <h4 className="variant-name">{variant.variant_name}</h4>
                {variant.variety_type && (
                  <span className="variety-type-badge">{variant.variety_type}</span>
                )}
              </div>

              {/* Display first image as thumbnail */}
              {variant.varientImage?.length > 0 && (
                <div className="variant-image-thumbnail">
                  {(() => {
                    const media = variant.varientImage[0];
                    const mediaUrl = media.url?.startsWith('http') ? media.url : `${STRAPI_URL}${media.url}`;
                    const isVideo = media.mime?.startsWith('video/') || /\.(mp4|webm|ogg|mov|avi)$/i.test(media.url || '');
                    
                    if (isVideo) {
                      return (
                        <div style={{ position: 'relative', width: '60px', height: '60px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #ddd', backgroundColor: '#000' }}>
                          <video 
                            src={mediaUrl} 
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.src = '/empty-bg.png';
                            }}
                          />
                          <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '30px',
                            height: '30px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '14px'
                          }}>
                            ▶
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <img 
                          src={mediaUrl} 
                          alt={media.name} 
                          style={{ width: '60px', height: '60px', borderRadius: '4px', objectFit: 'cover', border: '1px solid #ddd' }} 
                          onError={(e) => {
                            e.target.src = '/empty-bg.png';
                          }} 
                        />
                      );
                    }
                  })()}
                </div>
              )}

              <div className="variant-actions">
                {/* Edit & Delete */}
                <button
                  type="button"
                  onClick={() => handleEditVariant(variant)}
                  className="btn-variant-action btn-edit"
                  title="Edit variant"
                >
                   <FiEdit size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteVariant(variant)}
                  className="btn-variant-action btn-delete"
                  title="Delete variant"
                >
                   <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add New Variant Section Header */}
      {variants.length > 0 && (
        <h3 className="add-variant-header">Add New Variant</h3>
      )}

      {/* Variant Form - Always Visible Inline */}
      {showForm && (
        <div className="variant-form-container">
          <VariantModal
            variant={editingVariant}
            onSave={handleSaveVariant}
            onCancel={() => {
              setEditingVariant(null);
              // Keep form visible, don't close it
            }}
            hideCloseButton={true}
            isInline={true}
          />
        </div>
      )}

      {/* VARIANT DELETE CONFIRMATION MODAL */}
      {deleteVariantModal.open && deleteVariantModal.variant && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full border border-gray-200 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setDeleteVariantModal({ open: false, variant: null })}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Delete Confirmation</h3>
            <p className="mb-5 text-base text-gray-800">
              Are you sure that you want to delete the variant:
              <span className="font-bold text-red-600 ml-1 block mt-2">
                "{deleteVariantModal.variant.variant_name || 'Variant'}"
              </span>
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base"
                onClick={() => confirmDeleteVariant()}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Yes
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base"
                onClick={() => setDeleteVariantModal({ open: false, variant: null })}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
