import React, { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import Image from "next/image";
import Sidebar from "@/components/shared/Sidebar";
import Loader from "@/components/shared/Loader";
import { fetchProductsAPI, formatProductData, fetchFAQsByProductAPI } from "@/utils/productApi";
import { useRouter } from "next/navigation";

// Import API URLs for variant fetching
import { BASE_API_URL, STRAPI_URL } from "@/utils/apiConfig";

export default function ProductViewModel({ id }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [variants, setVariants] = useState([]);
  const [profile, setProfile] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [mediaTypes, setMediaTypes] = useState([]);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setProfile(JSON.parse(userData));
      } catch {}
    }
    const saved = localStorage.getItem("sidebarCollapsed");
    setSidebarCollapsed(saved !== null ? JSON.parse(saved) : false);
    const handleStorage = (e) => {
      if (e.key === "sidebarCollapsed") {
        setSidebarCollapsed(e.newValue === "true");
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  useEffect(() => {
    async function loadProduct() {
      setIsLoading(true);
      try {
        // First try to fetch the product directly with all relationships from backend
        if (id) {
          const response = await fetch(`${BASE_API_URL}/products/${id}`, {
            method: "GET",
            credentials: "include",
          });

          if (response.ok) {
            const data = await response.json();
            
            if (data.data) {
              // Extract product and variants from the response
              const productData = data.data;
              const formattedProduct = {
                ...productData,
                images: (productData.image || []).map((img) => {
                  const isVideo = img.mime?.startsWith('video/') || /\.(mp4|webm|ogg)$/i.test(img.url || '');
                  if (isVideo) {
                    return `${STRAPI_URL}${img.url}`;
                  } else {
                    const imageUrl = img.formats?.thumbnail?.url || img.url;
                    return `${STRAPI_URL}${imageUrl}`;
                  }
                }) || ["/empty-bg.png"],
              };

              setProduct(formattedProduct);

              // Extract variants linked to this product
              if (productData.product_variants && Array.isArray(productData.product_variants)) {
                const formattedVariants = productData.product_variants.map((variant) => ({
                  ...variant,
                  id: variant.id || variant.documentId,
                  variant_name: variant.variant_name || '',
                  grade: variant.grade || '',
                  variety_type: variant.variety_type || '',
                  size: variant.size || '',
                  weight: variant.weight || '',
                  weight_unit: variant.weight_unit || 'kg',
                  style: variant.style || '',
                  package_type: variant.package_type || '',
                  isDefault: variant.isDefault || false,
                  sortOrder: variant.sortOrder || 0,
                }));
                
                // Sort variants ONLY by sortOrder (ascending)
                // isDefault only determines which variant is pre-selected, NOT its position
                const sortedVariants = [...formattedVariants].sort((a, b) => {
                  return (a.sortOrder ?? 9999) - (b.sortOrder ?? 9999);
                });
                
                setVariants(sortedVariants);
                // Find and set the default variant as selected
                const defaultIndex = sortedVariants.findIndex(v => v.isDefault);
                setSelectedVariantIdx(defaultIndex >= 0 ? defaultIndex : 0);
              } else {
                setVariants([]);
              }
              setIsLoading(false);
              return;
            }
          } else {
          }
        }

        // Fallback: fetch from products list
        const data = await fetchProductsAPI();
        let allProducts = [];
        if (data.products && data.products.draftProducts !== undefined && data.products.publishedProducts !== undefined) {
          const formattedDraft = formatProductData(data.products.draftProducts || []);
          const formattedPublished = formatProductData(data.products.publishedProducts || []);
          const publishedIds = new Set(formattedPublished.map(p => p.documentId));
          const filteredDraft = formattedDraft.filter(p => !publishedIds.has(p.documentId));
          allProducts = [...formattedPublished, ...filteredDraft];
        } else if (data.draftProducts !== undefined && data.publishedProducts !== undefined) {
          const formattedDraft = formatProductData(data.draftProducts || []);
          const formattedPublished = formatProductData(data.publishedPublished || []);
          const publishedIds = new Set(formattedPublished.map(p => p.documentId));
          const filteredDraft = formattedDraft.filter(p => !publishedIds.has(p.documentId));
          allProducts = [...formattedPublished, ...filteredDraft];
        } else if (data.products && Array.isArray(data.products)) {
          allProducts = formatProductData(data.products);
        } else if (data.products) {
          allProducts = formatProductData(data.products);
        } else if (Array.isArray(data)) {
          allProducts = formatProductData(data);
        } else {
          allProducts = formatProductData(data);
        }
        const found = allProducts.find((p) => p.documentId === id || p.documentId === Number(id));
        setProduct(found || null);
        setVariants([]);
      } catch (err) {
        setProduct(null);
        setVariants([]);
      } finally {
        setIsLoading(false);
      }
    }
    if (id) loadProduct();
  }, [id]);


  // Determine media types for carousel
  useEffect(() => {
    if (product && product.images) {
      const types = product.images.map(img => {
        const url = typeof img === 'string' ? img : img.url || '';
        const isVideo = /\.(mp4|webm|ogg|mov|avi)$/i.test(url);
        return isVideo ? 'video' : 'image';
      });
      setMediaTypes(types);
    }
  }, [product]);

  // Fetch FAQs for the product
  useEffect(() => {
    async function loadFAQs() {
      try {
        if (product && (product.id || product.documentId)) {
          const productIdentifier = product.documentId || product.id;
          console.log("📺 ProductViewModel: Fetching FAQs for product:", productIdentifier);
          
          const fetchedFAQs = await fetchFAQsByProductAPI(productIdentifier);
          console.log("✅ ProductViewModel: FAQs fetched successfully, count:", fetchedFAQs.length);
          
          setFaqs(fetchedFAQs || []);
        }
      } catch (err) {
        console.error("⚠️ ProductViewModel: Failed to fetch FAQs:", err);
        setFaqs([]);
      }
    }
    
    if (product) {
      loadFAQs();
    }
  }, [product]);

  if (isLoading) {
    return (
      <Loader isVisible={true} message="Loading product details..." />
    );
  }

  if (!product) {
    return (
      <div className="flex min-h-screen bg-gray-50 items-center justify-center">
        <div className="text-2xl font-bold text-black">Product not found</div>
      </div>
    );
  }

  // Get images: prioritize default variant images, then selected variant images, then product images
  // Find default variant
  const defaultVariant = variants && variants.length > 0 
    ? variants.find(v => v.isDefault) 
    : null;
  
  // Use default variant's images first, then selected variant's images, then product images
  const selectedVariant = variants && variants.length > 0 && selectedVariantIdx >= 0 ? variants[selectedVariantIdx] : null;
  const imageVariant = defaultVariant || selectedVariant;
  const hasVariantImages = imageVariant && imageVariant.varientImage && imageVariant.varientImage.length > 0;
  
  let images = ["/empty-bg.png"];
  if (hasVariantImages) {
    // Use variant images with proper URL formatting
    images = imageVariant.varientImage.map(img => {
      const imgUrl = typeof img === 'object' ? img.url : img;
      return imgUrl?.startsWith('http') ? imgUrl : `${STRAPI_URL}${imgUrl}`;
    });
  } else if (product.images && product.images.length > 0) {
    // Fall back to product images
    images = product.images;
  }

  return (
    <>
      <Loader isVisible={isLoading} message="Loading product details..." />
      <div className="flex min-h-screen bg-gray-50">
        <aside className={sidebarCollapsed ? "w-20" : "w-64"}>
          <Sidebar profile={profile} onCollapseChange={setSidebarCollapsed} />
        </aside>
      <main className="flex-1 flex flex-col items-center justify-start p-6 min-h-screen">
        <div className="w-full max-w-5xl px-4 py-10">
          {/* Top section: Image (left), Name + About (right) */}
          {/* Back arrow at top left */}
          <div className="flex items-center mb-6">
            <button
              className="flex items-center text-green-600 hover:text-green-700 font-bold text-lg focus:outline-none cursor-pointer"
              onClick={() => router.back()}
              aria-label="Go back"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back
            </button>
          </div>
          <div className="flex flex-col md:flex-row gap-10 items-start mb-10">
            {/* Image left */}
           <div className="w-full md:w-1/2 flex flex-row items-start gap-4">

                {/* THUMBNAILS FIRST */}
                {images.length > 1 && (
                  <div className="flex flex-col order-1 gap-3 w-[70px]">
                    {images.map((img, idx) => {
                      // Check if it's a video by checking the URL
                      const imgUrl = typeof img === 'string' ? img : img.url || '';
                      const isVideoThumb = /\.(mp4|webm|ogg|mov|avi)$/i.test(imgUrl);
                      
                      return (
                        <button
                          key={idx}
                          className={`border-2 ${
                            imageIndex === idx ? "border-green-600" : "border-transparent"
                          } rounded-lg focus:outline-none cursor-pointer`}
                          onClick={() => setImageIndex(idx)}
                        >
                          {isVideoThumb ? (
                            <div className="relative w-[60px] h-[60px] rounded-lg bg-black flex items-center justify-center overflow-hidden border border-gray-300">
                              <video 
                                src={img}
                                className="w-full h-full object-cover"
                              />
                              {/* Play button overlay */}
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
                              }}>
                                <span style={{ fontSize: '14px', marginLeft: '2px', color: '#000' }}>▶</span>
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              width={60}
                              height={60}
                              className="object-contain rounded-lg bg-gray-50"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* MAIN IMAGE SECOND */}
                <div className="relative flex items-center justify-center order-2 w-full">
                  {images[imageIndex] && (() => {
                    const currentUrl = typeof images[imageIndex] === 'string' ? images[imageIndex] : images[imageIndex]?.url || '';
                    const isVideoMain = /\.(mp4|webm|ogg|mov|avi)$/i.test(currentUrl);
                    
                    if (isVideoMain) {
                      return (
                        <video
                          src={images[imageIndex]}
                          width={340}
                          height={420}
                          className="rounded-lg object-contain bg-gray-50"
                          controls
                        />
                      );
                    }
                    
                    return (
                      <Image
                        src={images[imageIndex]}
                        alt="image"
                        width={340}
                        height={420}
                        className="rounded-lg object-contain bg-gray-50"
                      />
                    );
                  })()}
                </div>

              </div>

            {/* Product Name + Variants on right */}
            <div className="w-full md:w-1/2 flex flex-col gap-6 justify-start">
              <h1 className="text-3xl font-bold text-green-700 mb-2">{product.name}</h1>
              
              {/* Available Variants Section with Size Boxes */}
              {variants && variants.length > 0 && (
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-black">Available Variants</h3>
                    
                  </div>
                  <div className="overflow-x-auto pb-2 scrollbar-hide">
                    <style>{`
                      .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                      }
                      .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                      }
                    `}</style>
                    <div className="flex gap-3 min-w-max">
                      {variants.map((variant, idx) => (
                        <button
                          key={variant.id || idx}
                          onClick={() => setSelectedVariantIdx(idx)}
                          className={`p-3 rounded-lg border-2 transition-all text-center w-32 flex-shrink-0 relative ${
                            selectedVariantIdx === idx
                              ? 'border-green-600 bg-green-50 shadow-md'
                              : 'border-gray-300 bg-white hover:border-gray-400'
                          }`}
                        >
                          <div className="text-sm font-bold text-black">{variant.variant_name}</div>
                          <div className="text-xs text-black mt-1 font-semibold">
                            {variant.weight && variant.weight_unit ? `Weight: ${variant.weight} ${variant.weight_unit}` : ''}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Selected Variant Details on Right Panel */}
              {variants && variants.length > 0 && selectedVariantIdx >= 0 && (
                <div className="flex flex-col gap-2 border-t pt-4">
                  {/* Size */}
                  {variants[selectedVariantIdx]?.size && (
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black text-sm">Size:</span>
                      <span className="text-black font-semibold">{variants[selectedVariantIdx].size}</span>
                    </div>
                  )}

                  {/* Grade */}
                  {variants[selectedVariantIdx]?.grade && (
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black text-sm">Grade:</span>
                      <span className="text-black font-semibold">{variants[selectedVariantIdx].grade}</span>
                    </div>
                  )}

                  {/* Variety Type */}
                  {variants[selectedVariantIdx]?.variety_type && (
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black text-sm">Variety Type:</span>
                      <span className="text-black font-semibold">{variants[selectedVariantIdx].variety_type}</span>
                    </div>
                  )}

                  {/* Style */}
                  {variants[selectedVariantIdx]?.style && (
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black text-sm">Style:</span>
                      <span className="text-black font-semibold">{variants[selectedVariantIdx].style}</span>
                    </div>
                  )}

                  {/* Package Type */}
                  {variants[selectedVariantIdx]?.package_type && (
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black text-sm">Package Type:</span>
                      <span className="text-black font-semibold">{variants[selectedVariantIdx].package_type}</span>
                    </div>
                  )}
                </div>
              )}
              
              {product.about_item && (
                <section className="mb-2">
                  <h2 className="text-lg font-bold mb-1 text-black">About Item</h2>
                  <p className="text-black font-medium">{product.about_item}</p>
                </section>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {product.features && product.features.map((feat, idx) => (
                  <span key={idx} className="bg-white text-black border border-black px-3 py-1 rounded text-xs font-semibold">
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Information Section (single column, horizontal line) */}
          {product.product_details && (
            <section className="mb-6 w-full">
              <h2 className="text-xl font-bold mb-4 text-black border-b pb-2">Product Information</h2>
              <div className="text-black mb-2 whitespace-pre-line">{product.product_details}</div>
              <hr className="my-6 border-gray-300" />
            </section>
          )}

          {/* Product Description Section (full width, horizontal line, rich text with images) */}
          {product.description && (
            <section className="mb-6 w-full">
              <h2 className="text-xl font-bold mb-4 text-black border-b pb-2">Product Description</h2>
              <div className="max-w-none" data-color-mode="light">
                <MDEditor.Markdown
                  source={product.description}
                  preview="preview"
                  hideToolbar
                  visibleDragbar={false}
                  height={200}
                  textareaProps={{ disabled: true }}
                  className="!bg-transparent !border-0 prose prose-sm max-w-none prose-a:text-blue-600 prose-a:underline !text-black prose-headings:!text-black prose-p:!text-black prose-li:!text-black"
                />
              </div>
              <hr className="my-6 border-gray-300" />
            </section>
          )}

          {/* Safety Information Section (full width, horizontal line) */}
          {product.safety_information && (
            <section className="mb-6 w-full">
              <h2 className="text-xl font-bold mb-4 text-black border-b pb-2">Safety Information</h2>
              <div className="text-black mb-2">{product.safety_information}</div>
              <hr className="my-6 border-gray-300" />
            </section>
          )}

          {/* Usage Directions Section (full width, horizontal line) */}
          {product.usage_directions && (
            <section className="mb-6 w-full">
              <h2 className="text-xl font-bold mb-4 text-black border-b pb-2">Usage Directions</h2>
              <div className="text-black mb-2">{product.usage_directions}</div>
              <hr className="my-6 border-gray-300" />
            </section>
          )}

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <section className="mb-6 w-full">
              <h2 className="text-xl font-bold mb-4 text-black border-b pb-2">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={faq.id || faq.documentId || index} className="border-l-4 border-green-600 bg-gray-50 p-4 rounded">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Q{index + 1}: {faq.question || faq.Question}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {faq.answer || faq.Answer}
                    </p>
                  </div>
                ))}
              </div>
              <hr className="my-6 border-gray-300" />
            </section>
          )}
        </div>
      </main>
    </div>
    </>
  );
}
