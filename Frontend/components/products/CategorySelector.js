"use client";

import React, { useState, useEffect } from "react";
import { fetchCategoriesAPI } from "@/utils/productApi";
import { FiChevronDown } from "react-icons/fi";

/**
 * CategorySelector Component
 * 
 * Single-select component for choosing one category and one subcategory for a product
 * When a category is selected, subcategories are automatically filtered to show only
 * the subcategories belonging to that category
 * 
 * @param {Object} initialCategory - Selected category from product (for edit mode)
 * @param {Object} initialSubcategory - Selected subcategory from product (for edit mode)
 * @param {Function} onCategoryChange - Callback when category is selected
 * @param {Function} onSubcategoryChange - Callback when subcategory is selected
 */
export default function CategorySelector({
  initialCategory = null,
  initialSubcategory = null,
  onCategoryChange,
  onSubcategoryChange,
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState(initialSubcategory);
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSubcategoryDropdown, setShowSubcategoryDropdown] = useState(false);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);

  // Fetch available categories on component mount
  useEffect(() => {
    const loadCategories = async () => {
      try {
        setIsLoadingCategories(true);
        const categories = await fetchCategoriesAPI();
        console.log("CategorySelector: Categories loaded:", categories);
        setAvailableCategories(categories || []);
        
        // If we have an initial category, find it in the loaded categories and set it
        if (initialCategory && categories) {
          const matchedCategory = categories.find(
            c => c.documentId === initialCategory.documentId
          );
          if (matchedCategory) {
            console.log("CategorySelector: Found initial category in loaded categories:", matchedCategory);
            setSelectedCategory(matchedCategory);
          }
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setIsLoadingCategories(false);
      }
    };

    loadCategories();
  }, [initialCategory]);

  // Update available subcategories when selected category changes
  useEffect(() => {
    if (selectedCategory) {
      const category = availableCategories.find(
        c => c.documentId === selectedCategory.documentId
      );
      console.log("CategorySelector: Selected category:", selectedCategory);
      console.log("CategorySelector: Full category object:", category);
      console.log("CategorySelector: Sub-categories:", category?.sub_categories);
      
      const subcats = category?.sub_categories || [];
      setAvailableSubcategories(subcats);
      
      // If we have an initial subcategory and it's available in the current category, keep it
      if (initialSubcategory && subcats.some(s => s.documentId === initialSubcategory.documentId)) {
        console.log("CategorySelector: Keeping initial subcategory:", initialSubcategory);
        setSelectedSubcategory(initialSubcategory);
      } else if (!selectedSubcategory) {
        // Only reset if we don't have one selected already
        setSelectedSubcategory(null);
      }
    } else {
      setAvailableSubcategories([]);
    }
  }, [selectedCategory, availableCategories, initialSubcategory]);

  // Handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
    // Call the parent component callback
    if (onCategoryChange) {
      onCategoryChange(category);
    }
  };

  // Handle subcategory selection
  const handleSelectSubcategory = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowSubcategoryDropdown(false);
    // Call the parent component callback
    if (onSubcategoryChange) {
      onSubcategoryChange(subcategory);
    }
  };

  return (
    <div className="category-selector-container mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-bold text-gray-800">
          Category & Subcategory
        </h3>
      </div>

      {/* Categories Section */}
      <div className="mb-6">
        <label className="block text-xs font-medium text-gray-700 mb-2">
          Select Category <span className="text-red-500">*</span>
        </label>

        {/* Category Dropdown Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 text-left"
          >
            <span className="text-gray-700">
              {selectedCategory ? (selectedCategory.categoryName) : "Choose a category..."}
            </span>
            <FiChevronDown
              className={`transform transition-transform flex-shrink-0 ${
                showCategoryDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {showCategoryDropdown && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
              {isLoadingCategories ? (
                <div className="p-4 text-sm text-gray-500 text-center">
                  Loading categories...
                </div>
              ) : availableCategories.length === 0 ? (
                <div className="p-4 text-sm text-gray-500 text-center">
                  No categories available
                </div>
              ) : (
                availableCategories.map((category) => (
                  <div
                    key={category.documentId}
                    className="px-4 py-2 hover:bg-green-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                    onClick={() => handleSelectCategory(category)}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded border ${
                          selectedCategory?.documentId === category.documentId
                            ? "bg-green-500 border-green-500"
                            : "border-gray-300 bg-white"
                        }`}
                      />
                      <span className="text-sm text-gray-700">
                        {category.categoryName}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>

      {/* Subcategories Section - Only show if category is selected */}
      {selectedCategory && (
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Select Subcategory <span className="text-red-500">*</span>
          </label>

          {/* Subcategory Dropdown Button */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowSubcategoryDropdown(!showSubcategoryDropdown)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 flex items-center justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 text-left"
            >
              <span className="text-gray-700">
                {selectedSubcategory
                  ? selectedSubcategory.subcategoryname
                  : "Choose a subcategory..."}
              </span>
              <FiChevronDown
                className={`transform transition-transform flex-shrink-0 ${
                  showSubcategoryDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {showSubcategoryDropdown && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 max-h-48 overflow-y-auto">
                {availableSubcategories.length === 0 ? (
                  <div className="p-4 text-sm text-gray-500 text-center">
                    No subcategories available
                  </div>
                ) : (
                  availableSubcategories.map((subcategory) => (
                    <div
                      key={subcategory.documentId}
                      className="px-4 py-2 hover:bg-green-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                      onClick={() => handleSelectSubcategory(subcategory)}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border ${
                            selectedSubcategory?.documentId === subcategory.documentId
                              ? "bg-green-500 border-green-500"
                              : "border-gray-300 bg-white"
                          }`}
                        />
                        <span className="text-sm text-gray-700">
                          {subcategory.subcategoryname}
                        </span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
