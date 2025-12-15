"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import Sidebar from "../shared/Sidebar";
// import EditProduct from "../editProduct/EditProduct";
import "../../app/style/Product.css";
import { showToast } from "../shared/toast";
import { FiEdit, FiTrash2 } from "react-icons/fi";

// Import API handlers
import {
  fetchProductsAPI,
  formatProductData,
  deleteProductAPI,
  fetchCategoriesAPI,
  fetchSubcategoriesAPI,
} from "../../utils/productApi";

export default function ProductsDashboard() {
  const router = useRouter();

  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterSearch, setFilterSearch] = useState(""); // Search within filter
  const [filterStatus, setFilterStatus] = useState("all"); // all, draft, published
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  // const [editingProduct, setEditingProduct] = useState(null);
  const [deleteModal, setDeleteModal] = useState({ open: false, prodId: null });
  const [expandedDesc, setExpandedDesc] = useState({});
  
  // Category and Subcategory filters
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarCollapsed");
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });

  const [previewImages, setPreviewImages] = useState([]);
  const [imageIndex, setImageIndex] = useState({});
  const [error, setError] = useState("");

  // LOAD USER PROFILE
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setProfile(parsedUser);
      } catch (err) {
        console.error("Failed to parse user data:", err);
      }
    }
  }, []);

  // LOAD PRODUCTS
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsAPI();
        
        // Backend now handles merging and filtering - just format the products array
        const formattedProducts = formatProductData(data.products || []);
        
        // Debug: Log first product to see structure
        if (formattedProducts.length > 0) {
          console.log("📦 First product structure:", formattedProducts[0]);
          console.log("📦 Categories in first product:", formattedProducts[0].categories);
          console.log("📦 Sub-categories in first product:", formattedProducts[0].sub_categories);
        }
        
        // Sort by createdAt or updatedAt descending
        const sortedProducts = formattedProducts.sort((a, b) => {
          if (a.createdAt && b.createdAt) {
            return new Date(b.createdAt) - new Date(a.createdAt);
          }
          if (a.updatedAt && b.updatedAt) {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
          }
          // fallback: sort by documentId as number descending
          const aId = Number(a.documentId);
          const bId = Number(b.documentId);
          if (!isNaN(aId) && !isNaN(bId)) {
            return bId - aId;
          }
          // fallback: string compare
          return (b.documentId || '').toString().localeCompare((a.documentId || '').toString());
        });
        setProducts(sortedProducts);
      } catch (err) {
        setError("Failed to load products");
      }
    };

    loadProducts();
  }, []);

  // LOAD CATEGORIES AND SUBCATEGORIES
  useEffect(() => {
    const loadCategoriesAndSubcategories = async () => {
      try {
        const [categoriesData, subcategoriesData] = await Promise.all([
          fetchCategoriesAPI(),
          fetchSubcategoriesAPI(),
        ]);
        console.log("📁 Categories loaded:", categoriesData);
        console.log("📁 Subcategories loaded:", subcategoriesData);
        setCategories(categoriesData);
        setSubcategories(subcategoriesData);
      } catch (err) {
        console.error("Failed to load categories and subcategories:", err);
      }
    };

    loadCategoriesAndSubcategories();
  }, []);

  // Move newly created or edited product to the top and re-sort
  const moveProductToTop = (product) => {
    setProducts((prev) => {
      // Remove if already exists (edit case)
      const filtered = prev.filter((p) => p.documentId !== product.documentId);
      const newList = [product, ...filtered];
      // Sort by createdAt or documentId descending
      return newList.sort((a, b) => {
        if (a.createdAt && b.createdAt) {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        if (a.updatedAt && b.updatedAt) {
          return new Date(b.updatedAt) - new Date(a.updatedAt);
        }
        const aId = Number(a.documentId);
        const bId = Number(b.documentId);
        if (!isNaN(aId) && !isNaN(bId)) {
          return bId - aId;
        }
        return (b.documentId || '').toString().localeCompare((a.documentId || '').toString());
      });
    });
  };

  const toggleDescription = (id) => {
  setExpandedDesc((prev) => ({
    ...prev,
    [id]: !prev[id],
  }));
};



  // SEARCH AND FILTER
  let filteredProducts = products.filter((prod) => {
    // Search filter
    const matchesSearch = prod.name?.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Status filter (draft, published, modified, or all)
    let matchesStatus = true;
    if (filterStatus === "draft") {
      matchesStatus = prod.status === "draft";
    } else if (filterStatus === "published") {
      matchesStatus = prod.status === "published";
    } else if (filterStatus === "modified") {
      matchesStatus = prod.status === "modified";
    }
    // If filterStatus === "all", matchesStatus remains true
    
    // Category filter - product must have at least one selected category (match by documentId)
    let matchesCategory = true;
    if (selectedCategories.length > 0) {
      const prodCategories = prod.categories || [];
      // Extract documentIds from product categories
      const prodCategoryDocIds = prodCategories.map(cat => {
        return typeof cat === 'object' && cat !== null ? cat.documentId : cat;
      });
      // Check if product has any of the selected category documentIds
      matchesCategory = prodCategoryDocIds.length > 0 && selectedCategories.some(catDocId => prodCategoryDocIds.includes(catDocId));
    }
    
    // Subcategory filter - product must have at least one selected subcategory (match by documentId)
    let matchesSubcategory = true;
    if (selectedSubcategories.length > 0) {
      const prodSubcategories = prod.sub_categories || [];
      // Extract documentIds from product subcategories
      const prodSubcategoryDocIds = prodSubcategories.map(subcat => {
        return typeof subcat === 'object' && subcat !== null ? subcat.documentId : subcat;
      });
      // Check if product has any of the selected subcategory documentIds
      matchesSubcategory = prodSubcategoryDocIds.length > 0 && selectedSubcategories.some(subcatDocId => prodSubcategoryDocIds.includes(subcatDocId));
    }
    
    return matchesSearch && matchesStatus && matchesCategory && matchesSubcategory;
  });

  // Debug: Log filtering info when filters change
  if (selectedCategories.length > 0 || selectedSubcategories.length > 0) {
    console.log("🔍 Filter Debug:", {
      totalProducts: products.length,
      selectedCategories,
      selectedSubcategories,
      filteredCount: filteredProducts.length,
      allProductsWithCategories: products.map(p => ({ 
        id: p.documentId, 
        name: p.name, 
        categories: p.categories,
        categoryDocIds: (p.categories || []).map(c => typeof c === 'object' ? c.documentId : c),
        categoriesRaw: JSON.stringify(p.categories)
      })),
      filteredProductIds: filteredProducts.map(p => ({ id: p.documentId, name: p.name }))
    });
  } else {
    // Also log when NO filters are selected to see all products
    console.log("📦 All products (no filter):", products.map(p => ({
      id: p.documentId,
      name: p.name,
      categories: p.categories,
      categoriesLength: (p.categories || []).length,
      categoriesDetailed: (p.categories || []).map(c => ({
        id: c.id,
        documentId: c.documentId,
        CategoryName: c.CategoryName
      }))
    })));
  }

  const searchedProducts = filteredProducts;

  // PAGINATION
  const PRODUCTS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchedProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = searchedProducts
    .slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("productVariantEnums");
    router.push("/signin");
  };

  // DELETE
  const handleDelete = async (prodId) => {
    try {
      const res = await deleteProductAPI(prodId);
      if (res.status === "success") {
        setProducts((prev) => prev.filter((p) => p.documentId !== prodId));
        showToast("Product deleted successfully!", "success");
      } else {
        showToast("Delete failed: " + res.message, "error");
      }
    } catch (err) {
      showToast("Error deleting product", "error");
    } finally {
      setDeleteModal({ open: false, prodId: null });
    }
  };

  // Listen for product add/edit events (assumes ProductForm or API triggers a custom event)
  useEffect(() => {
    const handler = (e) => {
      if (e.detail && e.detail.product) {
        moveProductToTop(e.detail.product);
      }
    };
    window.addEventListener("product-updated", handler);
    return () => window.removeEventListener("product-updated", handler);
  }, []);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showFilterDropdown && !e.target.closest('.filter-dropdown-container')) {
        setShowFilterDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showFilterDropdown]);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* SIDEBAR */}
      <Sidebar 
        profile={profile} 
        onLogout={handleLogout}
        onCollapseChange={setSidebarCollapsed}
      />

      {/* MAIN CONTENT */}
      <div 
        className="flex-1 transition-all duration-300" 
        style={{ marginLeft: sidebarCollapsed ? '80px' : '256px' }}
      >
        <div className="max-w-8xl mx-5 px-6 py-8">

        {/* Sticky Header and Search */}
        <div className="sticky top-0 z-20 bg-gray-50 pb-2">
           <div className="flex items-center justify-between mb-2 pt-2">
            <div>
              <h1 className="text-3xl font-bold">Product Management</h1>
              <p className="text-gray-600">
                Manage your AgChem product catalog
              </p>
            </div>
            {products.length > 0 && (
              <button
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white !text-white flex items-center justify-center cursor-pointer font-semibold text-sm h-12"
                style={{color: '#fff'}}
                onClick={() => router.push("/add-product")}
              >
                + Add New Product
              </button>
            )}
          </div>
          <div className="bg-white p-4 rounded-lg flex gap-4 items-center justify-between mb-2">
            <input
              placeholder="Search products..."
              className="border p-2 rounded w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            {/* Filter Dropdown */}
            <div className="relative filter-dropdown-container">
              <button
                onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded flex items-center gap-2 transition-colors text-white !text-white font-semibold text-sm h-10"
                style={{color: '#fff'}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter
              </button>
              
              {showFilterDropdown && (
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 w-80" style={{ maxHeight: '600px', overflowY: 'auto' }}>
                  {/* Search within filter */}
                  <div className="p-3 border-b sticky top-0 bg-white">
                    <input
                      type="text"
                      placeholder="Search filters..."
                      className="w-full border p-2 rounded text-sm"
                      value={filterSearch}
                      onChange={(e) => setFilterSearch(e.target.value)}
                    />
                  </div>
                  
                  {/* Status Filter */}
                  <div className="p-3 border-b">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Status</p>
                    <div className="space-y-1">
                      {["All Products", "Draft", "Published", "Modified"].filter(option =>
                        option.toLowerCase().includes(filterSearch.toLowerCase())
                      ).map((option) => {
                        const statusValue = option === "All Products" ? "all" : option.toLowerCase();
                        return (
                          <button
                            key={option}
                            onClick={() => { setFilterStatus(statusValue); }}
                            className={`block w-full text-left px-3 py-2 rounded text-sm ${filterStatus === statusValue ? "bg-green-100 text-green-700 font-semibold" : "hover:bg-gray-100"}`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Categories Filter */}
                  <div className="p-3 border-b">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Categories (Multi-select)</p>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {categories.length > 0 ? (
                        categories.filter(cat =>
                          cat.categoryName?.toLowerCase().includes(filterSearch.toLowerCase())
                        ).map((cat) => (
                          <label key={cat.documentId} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(cat.documentId)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedCategories([...selectedCategories, cat.documentId]);
                                } else {
                                  setSelectedCategories(selectedCategories.filter(docId => docId !== cat.documentId));
                                }
                              }}
                              className="w-4 h-4 rounded"
                            />
                            <span className="text-sm">{cat.categoryName}</span>
                          </label>
                        ))
                      ) : (
                        <p className="text-sm text-gray-500">No categories available</p>
                      )}
                    </div>
                  </div>

                  {/* Subcategories Filter - Shows only subcategories from selected categories */}
                  {selectedCategories.length > 0 && (
                    <div className="p-3 border-t">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Subcategories</p>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {(() => {
                          // Get subcategories from selected categories
                          const selectedCategoryObjects = categories.filter(cat => 
                            selectedCategories.includes(cat.documentId)
                          );
                          
                          // Flatten all subcategories from selected categories
                          const availableSubcategories = [];
                          selectedCategoryObjects.forEach(cat => {
                            if (cat.sub_categories && Array.isArray(cat.sub_categories)) {
                              cat.sub_categories.forEach(subcat => {
                                // Avoid duplicates
                                if (!availableSubcategories.find(s => s.documentId === subcat.documentId)) {
                                  availableSubcategories.push(subcat);
                                }
                              });
                            }
                          });
                          
                          return availableSubcategories.length > 0 ? (
                            availableSubcategories.filter(subcat =>
                              subcat.subcategoryname?.toLowerCase().includes(filterSearch.toLowerCase())
                            ).map((subcat) => (
                              <label key={subcat.documentId} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                                <input
                                  type="checkbox"
                                  checked={selectedSubcategories.includes(subcat.documentId)}
                                  onChange={(e) => {
                                    if (e.target.checked) {
                                      setSelectedSubcategories([...selectedSubcategories, subcat.documentId]);
                                    } else {
                                      setSelectedSubcategories(selectedSubcategories.filter(docId => docId !== subcat.documentId));
                                    }
                                  }}
                                  className="w-4 h-4 rounded"
                                />
                                <span className="text-sm">{subcat.subcategoryname}</span>
                              </label>
                            ))
                          ) : (
                            <p className="text-sm text-gray-500">No subcategories in selected categories</p>
                          );
                        })()}
                      </div>
                    </div>
                  )}

                  {/* Clear All Filters Button */}
                  {(selectedCategories.length > 0 || selectedSubcategories.length > 0 || filterStatus !== "all") && (
                    <div className="p-3 border-t sticky bottom-0 bg-white">
                      <button
                        onClick={() => {
                          setSelectedCategories([]);
                          setSelectedSubcategories([]);
                          setFilterStatus("all");
                          setFilterSearch("");
                        }}
                        className="w-full text-center px-3 py-2 rounded text-sm bg-red-50 text-red-600 hover:bg-red-100 font-semibold"
                      >
                        Clear All Filters
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Showing {paginatedProducts.length} of {searchedProducts.length} products
          </p>
        </div>

        {/* PRODUCTS GRID WITH PAGINATION AND SCROLL */}
        <div className="relative">
          {/* Product grid scroll area starts below header/search */}
          <div
            style={{ minHeight: '200px', maxHeight: 'calc(100vh - 260px)', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            className="hide-scrollbar"
          >
            {products.length === 0 ? (
              <div  className="flex flex-col items-center justify-center w-full" style={{ minHeight: 'calc(100vh - 260px)' }}>
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/AG - Add first product.png"
                    alt="Empty products"
                    width={310}
                    height={200}
                    style={{ maxWidth: '310px', width: '100%', height: 'auto', marginBottom: '8px' }}
                  />
                  <h2 className="text-4xl font-bold text-gray-800 mb-3">Nothing here yet...</h2>
                  <p className="text-gray-600 text-lg mb-8">Looks like products are on vacation.</p>
                  <button
                    onClick={() => router.push("/add-product")}
                    className="border border-green-500 bg-transparent text-black px-5 py-3 rounded font-semibold text-lg transition-colors hover:bg-green-700 hover:text-white"
                  >
                    + Add Product
                  </button>
                </div>
              </div>
            ) : (
              <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch`}>
                {
                
                [...paginatedProducts].map((prod) => (
                <div key={prod.documentId} className="bg-white shadow p-5 rounded-lg flex flex-col justify-between items-stretch min-h-[420px] h-full w-full max-w-[370px] mx-auto cursor-pointer" onClick={() => router.push(`/products/view/${prod.documentId}`)}>
                  {/* IMAGE CAROUSEL */}
                  <div className="relative h-44 w-full bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* STATUS BADGE */}
                    <div className="absolute top-2 right-2 z-10">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        prod.status === 'published' ? 'bg-green-600' : 
                        prod.status === 'modified' ? 'bg-red-600' : 
                        'bg-blue-500'
                      }`}>
                        {prod.status === 'published' ? 'Published' : 
                         prod.status === 'modified' ? 'Modified' : 
                         'Draft'}
                      </span>
                    </div>
                    {(() => {
                      const currentMedia = prod.images?.[imageIndex[prod.documentId] || 0];
                      const isVideo = currentMedia && /\.(mp4|webm|ogg)$/i.test(currentMedia);
                      
                      if (!currentMedia) {
                        return <div className="text-gray-400">No media</div>;
                      }
                      
                      if (isVideo) {
                        return (
                          <video
                            src={currentMedia}
                            className="h-44 w-full object-contain rounded-lg"
                            controls
                          />
                        );
                      }
                      
                      return (
                        <Image
                          src={currentMedia}
                          alt={prod.name}
                          width={300}
                          height={176}
                          className="h-44 w-full object-contain rounded-lg"
                          unoptimized
                        />
                      );
                    })()}
                    {prod.images.length > 1 && (
                      <>
                        {/* Left */}
                        <button
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageIndex((prev) => {
                              const current = prev[prod.documentId] || 0;
                              const next = current === 0 ? 0 : current - 1;
                              return {
                                ...prev,
                                [prod.documentId]: next,
                              };
                            });
                          }}
                          disabled={(imageIndex[prod.documentId] || 0) === 0}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        {/* Right */}
                        <button
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            setImageIndex((prev) => {
                              const current = prev[prod.documentId] || 0;
                              const next = current === prod.images.length - 1 ? current : current + 1;
                              return {
                                ...prev,
                                [prod.documentId]: next,
                              };
                            });
                          }}
                          disabled={(imageIndex[prod.documentId] || 0) === prod.images.length - 1}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}
                  </div>
                  {/* DOT INDICATORS / VIDEO INDICATOR */}
                  {prod.images.length > 1 && (
                    <div className="flex justify-center mt-2 space-x-2">
                      {prod.images.map((media, idx) => {
                        const isVideo = media && /\.(mp4|webm|ogg)$/i.test(media);
                        return (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageIndex(prev => ({ ...prev, [prod.documentId]: idx }));
                            }}
                            className={`w-3 h-3 rounded-full flex items-center justify-center transition-all ${
                              (imageIndex[prod.documentId] || 0) === idx 
                                ? "bg-green-600 scale-125" 
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                            title={isVideo ? `Video ${idx + 1}` : `Image ${idx + 1}`}
                          >
                            {isVideo && (imageIndex[prod.documentId] || 0) === idx && (
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {/* TEXT */}
                  <div className="font-bold text-lg mt-2">
                      {prod.name.length > 40 ? prod.name.slice(0, 40) + "..." : prod.name}
                    </div>
                    <div className="text-gray-400 text-xs mt-0">
                      {(() => {
                        const categories = Array.isArray(prod.categories) ? prod.categories : [];
                        const subcategories = Array.isArray(prod.sub_categories) ? prod.sub_categories : [];
                        
                        const categoryNames = categories.map(cat => 
                          typeof cat === 'object' && cat.categoryName ? cat.categoryName : cat
                        ).join(", ");
                        
                        const subcategoryNames = subcategories.map(subcat => 
                          typeof subcat === 'object' && subcat.subcategoryname ? subcat.subcategoryname : subcat
                        ).join(", ");
                        
                        return (
                          <>
                            {categoryNames && <div><span className="font-semibold">Category:</span> {categoryNames}</div>}
                            {subcategoryNames && <div><span className="font-semibold">Subcategory:</span> {subcategoryNames}</div>}
                          </>
                        );
                      })()}
                    </div>
                   <div className="text-gray-700 text-sm mt-1">
                      {(() => {
                        const text = prod.description || "";
                        const isLong = text.length > 150;

                        if (!isLong) {
                          return text; // Short description
                        }

                        const shortText = text.substring(0, 150) + "...";

                        return (
                          <>
                            {expandedDesc[prod.documentId] ? text : shortText}

                            <button
                              className="text-green-600 font-semibold ml-2"
                              onClick={() => toggleDescription(prod.documentId)}
                            >
                              {expandedDesc[prod.documentId] ? "Read Less" : "Read More"}
                            </button>
                          </>
                        );
                      })()}
                    </div>
                  {/* ACTIONS */}
                  <div className="flex gap-2 mt-3">
                    <button
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white !text-white flex items-center justify-center cursor-pointer"
                      style={{color: '#fff'}}
                      title="Edit"
                      onClick={e => {
                        e.stopPropagation();
                        router.push(`/products/edit/${prod.documentId}`);
                      }}
                    >
                      <FiEdit size={18} />
                    </button>
                    <button
                      className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white !text-white flex items-center justify-center cursor-pointer"
                      style={{color: '#fff'}}
                      title="Delete"
                      onClick={e => {
                        e.stopPropagation();
                        setDeleteModal({ open: true, prodId: prod.documentId });
                      }}
                    >
                      <FiTrash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
          {/* PAGINATION CONTROLS */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
        </div>
      </div>


      {/* DELETE CONFIRMATION MODAL */}
      {deleteModal.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full border border-gray-200 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setDeleteModal({ open: false, prodId: null })}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-3 text-gray-900">Delete Confirmation</h3>
            <p className="mb-5 text-base text-gray-800">
              Are you sure that you want to delete the product:
              <span className="font-bold text-red-600 ml-1">
                {products.find(p => p.documentId === deleteModal.prodId)?.name || ''}
              </span>
              ?
            </p>
            <div className="flex justify-end gap-3">
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base"
                onClick={() => handleDelete(deleteModal.prodId)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                Yes
              </button>
              <button
                className="flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base"
                onClick={() => setDeleteModal({ open: false, prodId: null })}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* IMAGE PREVIEW POPUP */}
      {previewImages.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-xl w-full relative">
            <button
              onClick={() => setPreviewImages([])}
              className="absolute top-2 right-2 text-gray-700 font-bold"
            >
              ✕
            </button>

            <div className="flex items-center justify-center gap-2">
              {previewImages.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  width={400}
                  height={256}
                  className="h-64 w-auto rounded-lg"
                  alt="Product preview"
                  unoptimized
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
