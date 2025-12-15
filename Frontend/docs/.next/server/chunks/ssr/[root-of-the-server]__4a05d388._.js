module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs) <export default as minpath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minpath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
}),
"[externals]/node:process [external] (node:process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:process", () => require("node:process"));

module.exports = mod;
}),
"[externals]/node:process [external] (node:process, cjs) <export default as minproc>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "minproc",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$process__$5b$external$5d$__$28$node$3a$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:process [external] (node:process, cjs)");
}),
"[externals]/node:url [external] (node:url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:url", () => require("node:url"));

module.exports = mod;
}),
"[externals]/node:url [external] (node:url, cjs) <export fileURLToPath as urlToPath>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "urlToPath",
    ()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__["fileURLToPath"]
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$url__$5b$external$5d$__$28$node$3a$url$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:url [external] (node:url, cjs)");
}),
"[project]/utils/apiConfig.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/apiConfig.js
__turbopack_context__.s([
    "BASE_API_URL",
    ()=>BASE_API_URL,
    "ENDPOINTS",
    ()=>ENDPOINTS,
    "STRAPI_URL",
    ()=>STRAPI_URL
]);
const BASE_API_URL = "http://localhost:3000";
const STRAPI_URL = "http://localhost:1337";
const ENDPOINTS = {
    LOGIN: `${BASE_API_URL}/auth/login`,
    PRODUCTS: `${BASE_API_URL}/products`,
    DELETE_PRODUCT: (id)=>`${BASE_API_URL}/products/${id}`,
    UPLOAD: `${STRAPI_URL}/api/upload`
};
}),
"[project]/utils/productApi.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/productApi.js
__turbopack_context__.s([
    "createProductAPI",
    ()=>createProductAPI,
    "createVariantAPI",
    ()=>createVariantAPI,
    "deleteProductAPI",
    ()=>deleteProductAPI,
    "deleteVariantAPI",
    ()=>deleteVariantAPI,
    "fetchProductByIdAPI",
    ()=>fetchProductByIdAPI,
    "fetchProductsAPI",
    ()=>fetchProductsAPI,
    "fetchVariantsAPI",
    ()=>fetchVariantsAPI,
    "formatProductData",
    ()=>formatProductData,
    "updateProductAPI",
    ()=>updateProductAPI,
    "updateVariantAPI",
    ()=>updateVariantAPI,
    "uploadFiles",
    ()=>uploadFiles,
    "uploadToStrapiMediaLibrary",
    ()=>uploadToStrapiMediaLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/apiConfig.js [app-ssr] (ecmascript)");
;
async function fetchProductsAPI() {
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PRODUCTS, {
        method: "GET",
        credentials: "include"
    });
    const data = await res.json();
    return data;
}
async function fetchProductByIdAPI(documentId) {
    try {
        console.log("🔍 Fetching product from backend:", documentId);
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/products/${documentId}`, {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        console.log("📦 Product response from backend:", data);
        if (!res.ok || !data.data) {
            throw new Error(data?.error || "Product not found");
        }
        return data.data;
    } catch (err) {
        console.error("❌ Error fetching product:", err);
        throw err;
    }
}
function formatProductData(data) {
    // Handle multiple input formats
    let products = [];
    if (Array.isArray(data)) {
        products = data;
    } else if (data.products && Array.isArray(data.products)) {
        products = data.products;
    } else if (data.products && typeof data.products === 'object' && !Array.isArray(data.products)) {
        // If products is an object (like { data: [...] }), try to extract array
        products = data.products.data || Object.values(data.products) || [];
    }
    return products.map((p)=>{
        const images = (p.image || []).map((img)=>{
            // Check if it's a video by looking at the mime type or file extension
            const isVideo = img.mime?.startsWith('video/') || /\.(mp4|webm|ogg)$/i.test(img.url || '');
            if (isVideo) {
                // For videos, use the full URL directly
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRAPI_URL"]}${img.url}`;
            } else {
                // For images, try to use thumbnail, fallback to full URL
                const imageUrl = img.formats?.thumbnail?.url || img.url;
                return `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRAPI_URL"]}${imageUrl}`;
            }
        });
        return {
            ...p,
            images: images.length > 0 ? images : [
                "/no-image.png"
            ]
        };
    });
}
async function deleteProductAPI(prodId) {
    const token = localStorage.getItem("token");
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].DELETE_PRODUCT(prodId), {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    });
    return res.json();
}
async function uploadFiles(files) {
    const formData = new FormData();
    files.forEach((file)=>formData.append("files", file));
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].UPLOAD, {
        method: "POST",
        body: formData
    });
    if (!res.ok) {
        const error = await res.text();
        throw new Error("Image upload failed: " + error);
    }
    return res.json();
}
async function uploadToStrapiMediaLibrary(files) {
    const formData = new FormData();
    files.forEach((file)=>{
        formData.append("files", file);
    });
    const token = localStorage.getItem("token");
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRAPI_URL"]}/api/upload`, {
        method: "POST",
        body: formData,
        headers: {
        }
    });
    if (!res.ok) {
        const error = await res.text();
        console.error("Strapi upload error:", error);
        throw new Error("Failed to upload to Strapi media library: " + error);
    }
    const data = await res.json();
    console.log("Strapi upload response:", data);
    return data;
}
async function createProductAPI(payload) {
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].PRODUCTS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data?.error || "Failed to create product");
    }
    return data;
}
async function updateProductAPI(documentId, formDataToSend) {
    const token = localStorage.getItem("token");
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/products/update/${documentId}`, {
        method: "PUT",
        body: formDataToSend,
        credentials: "include",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    if (!res.ok) {
        console.error("Update error:", data);
        throw new Error(data.details || data.message || data.error || "Product update failed");
    }
    return data;
}
async function fetchVariantsAPI() {
    try {
        console.log("🔄 Fetching variants from:", `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/variants`);
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/variants`, {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        console.log("📋 Variants response:", data);
        if (!res.ok) {
            throw new Error(data?.error || "Failed to fetch variants");
        }
        return data;
    } catch (err) {
        console.error("❌ Error fetching variants:", err);
        throw err;
    }
}
async function createVariantAPI(variantData) {
    try {
        console.log("🆕 Creating variant:", variantData);
        const payload = {
            variant_name: variantData.variant_name,
            variety_type: variantData.variety_type,
            grade: variantData.grade,
            brand: variantData.brand,
            weight: variantData.weight,
            weight_unit: variantData.weight_unit,
            size: variantData.size,
            style: variantData.style,
            package_type: variantData.package_type,
            stock_qty: variantData.stock_qty,
            Store_keeping_Unit: variantData.Store_keeping_Unit,
            barcode: variantData.barcode
        };
        console.log("📤 Sending payload to POST /variants?status=published", payload);
        const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/variants?status=published`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        console.log("✅ Variant created response:", data);
        if (!res.ok) {
            console.error("❌ Create variant error:", data);
            throw new Error(data?.error?.message || data?.error || "Failed to create variant");
        }
        return data;
    } catch (err) {
        console.error("❌ Exception in createVariantAPI:", err);
        throw err;
    }
}
async function updateVariantAPI(documentId, variantData) {
    try {
        console.log("📝 Updating variant:", documentId);
        const payload = {
            variant_name: variantData.variant_name,
            variety_type: variantData.variety_type,
            grade: variantData.grade,
            brand: variantData.brand,
            weight: variantData.weight,
            weight_unit: variantData.weight_unit,
            size: variantData.size,
            style: variantData.style,
            package_type: variantData.package_type,
            stock_qty: variantData.stock_qty,
            Store_keeping_Unit: variantData.Store_keeping_Unit,
            barcode: variantData.barcode
        };
        const url = `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/variants/${documentId}?status=published`;
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        console.log("✅ Variant updated:", data);
        if (!res.ok) {
            console.error("❌ Update variant error:", data);
            throw new Error(data?.error?.message || data?.error || "Failed to update variant");
        }
        return data;
    } catch (err) {
        console.error("❌ Error in updateVariantAPI:", err);
        throw err;
    }
}
async function deleteVariantAPI(documentId) {
    const res = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_API_URL"]}/variants/${documentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        console.error("Delete variant error:", data);
        throw new Error(data?.error?.message || data?.error || "Failed to delete variant");
    }
    return data;
}
}),
"[project]/components/shared/toast.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastRoot",
    ()=>ToastRoot,
    "showToast",
    ()=>showToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function showToast(message, type = "info") {
    const ToastContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "toast-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toast-mascot",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/AG - success.png",
                        alt: "Mascot",
                        width: 120,
                        height: 120,
                        className: "object-contain",
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/components/shared/toast.js",
                        lineNumber: 12,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/toast.js",
                    lineNumber: 11,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toast-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-medium",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/components/shared/toast.js",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/toast.js",
                    lineNumber: 23,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/toast.js",
            lineNumber: 9,
            columnNumber: 5
        }, this);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"][type](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContent, {}, void 0, false, {
        fileName: "[project]/components/shared/toast.js",
        lineNumber: 29,
        columnNumber: 15
    }, this), {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        icon: false,
        style: {
            backgroundColor: "transparent",
            padding: "0",
            boxShadow: "none"
        }
    });
}
function ToastRoot() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastContainer"], {
        position: "bottom-right"
    }, void 0, false, {
        fileName: "[project]/components/shared/toast.js",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/shared/VariantModal.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VariantModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/productApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/toast.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function VariantModal({ variant, onSave, onCancel }) {
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        variant_name: "",
        variety_type: "",
        grade: "",
        brand: "",
        weight: "",
        weight_unit: "g",
        size: "",
        style: "",
        package_type: "",
        stock_qty: "",
        Store_keeping_Unit: "",
        barcode: ""
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Pre-fill form if editing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (variant) {
            setFormData({
                variant_name: variant.variant_name || "",
                variety_type: variant.variety_type || "",
                grade: variant.grade || "",
                brand: variant.brand || "",
                weight: variant.weight || "",
                weight_unit: variant.weight_unit || "g",
                size: variant.size || "",
                style: variant.style || "",
                package_type: variant.package_type || "",
                stock_qty: variant.stock_qty || "",
                Store_keeping_Unit: variant.Store_keeping_Unit || "",
                barcode: variant.barcode || ""
            });
        }
    }, [
        variant
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: name === "weight" || name === "stock_qty" ? Number(value) : value
            }));
        // Clear error for this field
        if (errors[name]) {
            setErrors((prev)=>{
                const newErrors = {
                    ...prev
                };
                delete newErrors[name];
                return newErrors;
            });
        }
    };
    const validateForm = ()=>{
        const newErrors = {};
        if (!formData.variant_name.trim()) newErrors.variant_name = "Variant name is required";
        if (!formData.variety_type.trim()) newErrors.variety_type = "Variety type is required";
        if (!formData.grade.trim()) newErrors.grade = "Grade is required";
        if (!formData.brand.trim()) newErrors.brand = "Brand is required";
        if (!formData.weight) newErrors.weight = "Weight is required";
        if (!formData.size.trim()) newErrors.size = "Size is required";
        if (!formData.stock_qty) newErrors.stock_qty = "Stock quantity is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSave = async ()=>{
        if (!validateForm()) return;
        setIsLoading(true);
        try {
            console.log("💾 Saving variant:", formData);
            if (variant && variant.documentId) {
                // Update existing variant
                console.log("📝 Updating existing variant:", variant.documentId);
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateVariantAPI"])(variant.documentId, formData);
                console.log("✅ Variant updated successfully");
                const variantData = response.data || response;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])("Variant saved successfully", "success");
                onSave({
                    ...variant,
                    ...formData,
                    publishedAt: variantData.publishedAt || new Date().toISOString()
                });
            } else {
                // Create new variant
                console.log("➕ Creating new variant");
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVariantAPI"])(formData);
                console.log("✅ Variant created:", response);
                // Extract variant data from response
                const variantData = response.data || response;
                console.log("📦 Variant data:", variantData);
                // Return the created variant data to parent with proper ID
                onSave({
                    ...formData,
                    id: variantData.id,
                    documentId: variantData.documentId,
                    publishedAt: variantData.publishedAt || new Date().toISOString()
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])("Variant saved successfully", "success");
            }
        } catch (err) {
            console.error("❌ Error saving variant:", err);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])(err.message || "Failed to save variant", "error");
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "variant-modal-overlay",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "variant-modal-content",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: variant ? "Edit Variant" : "Add New Variant"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCancel,
                            disabled: isLoading,
                            className: "btn-close-modal",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/VariantModal.js",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Variant Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "variant_name",
                                            value: formData.variant_name,
                                            onChange: handleChange,
                                            placeholder: "e.g., Premium Pack",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        errors.variant_name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.variant_name
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Variety Type *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "variety_type",
                                            value: formData.variety_type,
                                            onChange: handleChange,
                                            placeholder: "e.g., Standard, Premium",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        errors.variety_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.variety_type
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Grade *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "grade",
                                            value: formData.grade,
                                            onChange: handleChange,
                                            placeholder: "e.g., A, B, C",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 182,
                                            columnNumber: 15
                                        }, this),
                                        errors.grade && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.grade
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Brand *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "brand",
                                            value: formData.brand,
                                            onChange: handleChange,
                                            placeholder: "e.g., Brand Name",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        errors.brand && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.brand
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Weight *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 213,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "weight-input-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "weight",
                                                    value: formData.weight,
                                                    onChange: handleChange,
                                                    placeholder: "e.g., 100",
                                                    disabled: isLoading,
                                                    min: "0",
                                                    step: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/VariantModal.js",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "weight_unit",
                                                    value: formData.weight_unit,
                                                    onChange: handleChange,
                                                    disabled: isLoading,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "g",
                                                            children: "g"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/VariantModal.js",
                                                            lineNumber: 231,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "kg",
                                                            children: "kg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/VariantModal.js",
                                                            lineNumber: 232,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "mg",
                                                            children: "mg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/VariantModal.js",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "lb",
                                                            children: "lb"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/VariantModal.js",
                                                            lineNumber: 234,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "oz",
                                                            children: "oz"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/VariantModal.js",
                                                            lineNumber: 235,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/shared/VariantModal.js",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, this),
                                        errors.weight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.weight
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 239,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 212,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Size *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "size",
                                            value: formData.size,
                                            onChange: handleChange,
                                            placeholder: "e.g., Medium, Large",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 245,
                                            columnNumber: 15
                                        }, this),
                                        errors.size && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.size
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Style"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "style",
                                            value: formData.style,
                                            onChange: handleChange,
                                            placeholder: "e.g., Box, Pouch, Bottle",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Package Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "package_type",
                                            value: formData.package_type,
                                            onChange: handleChange,
                                            placeholder: "e.g., Individual, Bundle",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 259,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Stock Quantity *"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            name: "stock_qty",
                                            value: formData.stock_qty,
                                            onChange: handleChange,
                                            placeholder: "e.g., 100",
                                            disabled: isLoading,
                                            min: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this),
                                        errors.stock_qty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "error-message",
                                            children: errors.stock_qty
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 286,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Store Keeping Unit (SKU)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            name: "Store_keeping_Unit",
                                            value: formData.Store_keeping_Unit,
                                            onChange: handleChange,
                                            placeholder: "e.g., SKU-001",
                                            disabled: isLoading
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/VariantModal.js",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/VariantModal.js",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 285,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-row",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "form-group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        children: "Barcode"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/VariantModal.js",
                                        lineNumber: 317,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        name: "barcode",
                                        value: formData.barcode,
                                        onChange: handleChange,
                                        placeholder: "e.g., 1234567890123",
                                        disabled: isLoading
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/VariantModal.js",
                                        lineNumber: 318,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/VariantModal.js",
                                lineNumber: 316,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 315,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/VariantModal.js",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: onCancel,
                            disabled: isLoading,
                            className: "btn-modal btn-cancel",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 331,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleSave,
                            disabled: isLoading,
                            className: "btn-modal btn-publish",
                            children: isLoading ? "Saving..." : "Save"
                        }, void 0, false, {
                            fileName: "[project]/components/shared/VariantModal.js",
                            lineNumber: 339,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/VariantModal.js",
                    lineNumber: 330,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/VariantModal.js",
            lineNumber: 133,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/VariantModal.js",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/products/ProductVariant.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductVariant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$VariantModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/VariantModal.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ProductVariant({ initialVariants = [], onVariantsChange, mode = "add" }) {
    console.log("🎯 ProductVariant mounted with initialVariants:", initialVariants);
    const [variants, setVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialVariants);
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingVariant, setEditingVariant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Sync variants when initialVariants prop changes (for edit mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("🔄 ProductVariant - initialVariants changed:", initialVariants);
        setVariants(initialVariants);
    }, [
        initialVariants
    ]);
    // Notify parent component of changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("📦 ProductVariant - Variants updated:", variants);
        if (onVariantsChange) {
            onVariantsChange(variants);
        }
    }, [
        variants,
        onVariantsChange
    ]);
    const handleAddVariant = ()=>{
        console.log("➕ Adding new variant");
        setEditingVariant(null);
        setShowModal(true);
    };
    const handleEditVariant = (variant)=>{
        console.log("✏️ Editing variant:", variant);
        setEditingVariant(variant);
        setShowModal(true);
    };
    const handleSaveVariant = (variantData)=>{
        console.log("💾 Saving variant:", variantData);
        if (editingVariant) {
            // Update existing variant
            console.log("📝 Updating variant with id:", editingVariant.id);
            setVariants(variants.map((v)=>v.id === editingVariant.id ? {
                    ...v,
                    ...variantData
                } : v));
        } else {
            // Add new variant with temporary ID
            const newVariant = {
                ...variantData,
                tempId: Date.now()
            };
            console.log("➕ Adding new variant:", newVariant);
            setVariants([
                ...variants,
                newVariant
            ]);
        }
        setShowModal(false);
    };
    const handleDeleteVariant = (variantId)=>{
        console.log("🗑️ Deleting variant:", variantId);
        setVariants(variants.filter((v)=>v.id !== variantId && v.tempId !== variantId));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "product-variant-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "variant-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "variant-title",
                        children: "Product Variants"
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductVariant.js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleAddVariant,
                        className: "btn-add-variant",
                        children: "+ Add Variant"
                    }, void 0, false, {
                        fileName: "[project]/components/products/ProductVariant.js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/products/ProductVariant.js",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "variants-list",
                children: variants.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "no-variants",
                    children: "No variants added yet"
                }, void 0, false, {
                    fileName: "[project]/components/products/ProductVariant.js",
                    lineNumber: 96,
                    columnNumber: 11
                }, this) : variants.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "variant-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "variant-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "variant-name",
                                        children: variant.variant_name
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductVariant.js",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "variant-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Type:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 104,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    variant.variety_type
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Grade:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    variant.grade
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Brand:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    variant.brand
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Weight:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    variant.weight,
                                                    " ",
                                                    variant.weight_unit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Size:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 116,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    variant.size
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 115,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Stock:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 119,
                                                        columnNumber: 21
                                                    }, this),
                                                    " ",
                                                    variant.stock_qty
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            variant.barcode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "detail-badge",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Barcode:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/ProductVariant.js",
                                                        lineNumber: 123,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    variant.barcode
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/products/ProductVariant.js",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/products/ProductVariant.js",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductVariant.js",
                                lineNumber: 100,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "variant-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleEditVariant(variant),
                                        className: "btn-variant-action btn-edit",
                                        children: "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductVariant.js",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>handleDeleteVariant(variant.id || variant.tempId),
                                        className: "btn-variant-action btn-delete",
                                        children: "Delete"
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/ProductVariant.js",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/products/ProductVariant.js",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        ]
                    }, variant.id || variant.tempId, true, {
                        fileName: "[project]/components/products/ProductVariant.js",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/products/ProductVariant.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            showModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$VariantModal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: editingVariant,
                onSave: handleSaveVariant,
                onCancel: ()=>setShowModal(false)
            }, void 0, false, {
                fileName: "[project]/components/products/ProductVariant.js",
                lineNumber: 151,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/ProductVariant.js",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/ProductForm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__ = __turbopack_context__.i("[project]/node_modules/@uiw/react-md-editor/esm/commands/index.js [app-ssr] (ecmascript) <export * as commands>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/apiConfig.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductVariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/products/ProductVariant.js [app-ssr] (ecmascript)");
;
"use client";
;
;
;
;
;
;
// Dynamically import MDEditor to avoid SSR issues
const MDEditor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@uiw/react-md-editor/esm/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
;
;
;
function ProductForm({ initialData = {}, onSubmit, onCancel, isLoading = false, mode = 'add' }) {
    const [submitAction, setSubmitAction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    /**
   * variants: Product variants for this product
   * - In ADD mode: Starts empty
   * - In EDIT mode: Pre-filled with existing product variants
   */ const [variants, setVariants] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData.product_variants || []);
    // Sync variants when initialData changes (for edit mode)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        console.log("📦 ProductForm - Initial variants loaded:", initialData.product_variants);
        setVariants(initialData.product_variants || []);
    }, [
        initialData.product_variants
    ]);
    /**
   * formData: Stores text input values (name,  description)
   * - In ADD mode: Starts empty
   * - In EDIT mode: Pre-filled with existing product data
   */ const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: initialData.name || "",
        description: initialData.description || "",
        about_item: initialData.about_item || "",
        product_details: initialData.product_details || "",
        safety_information: initialData.safety_information || "",
        usage_directions: initialData.usage_directions || ""
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const DESCRIPTION_LIMIT = 500;
    /**
   * imageFiles: Array of File objects for newly uploaded images
   * - Used when user selects new images from their device
   * - Sent to backend for upload to Strapi
   */ const [imageFiles, setImageFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imageTypeError, setImageTypeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [imageSizeError, setImageSizeError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const VIDEO_SIZE_LIMIT = 4 * 1024 * 1024; // 4MB
    /**
   * imagePreviews: Array of preview objects for newly uploaded images
   * - Structure: [{ url: blob URL, name: filename }, ...]
   * - Used to show preview before upload
   */ const [imagePreviews, setImagePreviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    /**
   * currentImageIndex: Tracks which image is currently displayed in carousel
   */ const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    /**
   * existingImages: Array of existing images from Strapi (EDIT mode only)
   * - Structure: [{ id, url, name }, ...]
   * - Starts with all images from product
   * - User can delete images, which removes them from this array
   * - On submit, only remaining images are kept in product
   */ const [existingImages, setExistingImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialData.image || []);
    /**
   * selectedSlots: Array of indices indicating which existing image slots are selected for replacement
   * - Used in EDIT mode only
   * - When user uploads new images, selected slots will be replaced
   */ const [selectedSlots, setSelectedSlots] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    /**
   * handleInputChange: Updates form data when user types in input fields
   */ const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === "description") {
            if (value.length <= DESCRIPTION_LIMIT) {
                setFormData((prev)=>({
                        ...prev,
                        [name]: value
                    }));
            }
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    /**
   * handleDeleteExistingImage: Deletes existing image from product
   * - Removes from existingImages array
   * - Adjusts selectedSlots indices
   */ const handleDeleteExistingImage = (index)=>{
        const updated = existingImages.filter((_, i)=>i !== index);
        setExistingImages(updated);
        // Adjust selected slots after deletion
        setSelectedSlots((prev)=>prev.filter((i)=>i !== index).map((i)=>i > index ? i - 1 : i));
    };
    /**
   * handleDeleteNewImage: Deletes newly uploaded image preview
   */ const handleDeleteNewImage = (index)=>{
        setImageFiles((prev)=>prev.filter((_, i)=>i !== index));
        setImagePreviews((prev)=>prev.filter((_, i)=>i !== index));
    };
    /**
   * handleSubmit: Called when user clicks Save button
   * - Prevents default form submission
   * - Calls parent's onSubmit with all form data
   * 
   * DATA SENT TO PARENT:
   * - formData: { name,  description }
   * - imageFiles: Array of new File objects to upload
   * - existingImages: Array of existing images to keep (after deletions)
   * - selectedSlots: Array of indices for slots to replace with new images
   */ const handleSubmit = (e)=>{
        if (e) e.preventDefault();
        // Validate required fields (ensure string type)
        const newErrors = {};
        const name = String(formData.name ?? '');
        const description = String(formData.description ?? '');
        const about_item = String(formData.about_item ?? '');
        const product_details = String(formData.product_details ?? '');
        const safety_information = String(formData.safety_information ?? '');
        const usage_directions = String(formData.usage_directions ?? '');
        // Images validation
        let imagesCount = 0;
        if (mode === 'add') {
            imagesCount = imageFiles.length;
        } else {
            imagesCount = (existingImages?.length || 0) + (imageFiles?.length || 0);
        }
        if (!name.trim()) newErrors.name = 'Name is required';
        if (!description.trim()) newErrors.description = 'Description is required';
        if (!about_item.trim()) newErrors.about_item = 'About Item is required';
        if (!product_details.trim()) newErrors.product_details = 'Product Details is required';
        if (!safety_information.trim()) newErrors.safety_information = 'Safety Information is required';
        if (!usage_directions.trim()) newErrors.usage_directions = 'Usage Directions is required';
        if (imagesCount === 0) newErrors.images = 'At least one image is required';
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;
        if (submitAction) {
            onSubmit({
                action: submitAction,
                formData: {
                    ...formData,
                    name,
                    description,
                    about_item,
                    product_details,
                    safety_information,
                    usage_directions
                },
                imageFiles,
                existingImages,
                selectedSlots,
                variants
            });
            setSubmitAction(null);
        }
    };
    /**
   * handleSubmit: Called when user clicks Save button
   */ const handleImageSelect = (e)=>{
        setImageTypeError("");
        setImageSizeError("");
        const files = Array.from(e.target.files || []);
        const allowedImageTypes = [
            "image/png",
            "image/jpeg",
            "image/jpg"
        ];
        const allowedVideoTypes = [
            "video/mp4",
            "video/webm",
            "video/ogg"
        ];
        const allowedTypes = [
            ...allowedImageTypes,
            ...allowedVideoTypes
        ];
        const invalid = files.find((f)=>!allowedTypes.includes(f.type));
        if (invalid) {
            setImageTypeError("Only PNG, JPEG images and MP4, WebM, OGG videos are allowed.");
            e.target.value = '';
            return;
        }
        // Check video file size (4MB limit)
        const oversizedVideo = files.find((f)=>{
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
        const previews = files.map((file)=>({
                url: URL.createObjectURL(file),
                name: file.name,
                type: file.type.startsWith('video/') ? 'video' : 'image'
            }));
        setImagePreviews(previews);
    };
    /**
   * Generate preview images with new uploads replacing selected slots
   * - EDIT mode: Shows existing images with replacements in selected slots
   * - ADD mode: Just shows the uploaded images
   */ const getDisplayImages = ()=>{
        // Helper function to detect if a URL/file is a video
        const isVideoFile = (item)=>{
            if (item.type === 'video') return true;
            const url = item.url || '';
            return /\.(mp4|webm|ogg|mov|avi|mkv)$/i.test(url);
        };
        if (mode === 'edit' && existingImages.length > 0) {
            // Create a copy of existing images, add type property for existing files
            const preview = [
                ...existingImages
            ].map((img)=>({
                    ...img,
                    type: img.type || (isVideoFile(img) ? 'video' : 'image')
                }));
            // Replace selected slots with new uploads
            selectedSlots.forEach((slotIndex, i)=>{
                if (i < imagePreviews.length) {
                    preview[slotIndex] = {
                        ...imagePreviews[i],
                        isNew: true // Mark as new for different display
                    };
                }
            });
            // Append remaining new images
            if (imagePreviews.length > selectedSlots.length) {
                preview.push(...imagePreviews.slice(selectedSlots.length).map((img)=>({
                        ...img,
                        isNew: true
                    })));
            }
            return preview;
        }
        // ADD mode: just return imagePreviews (newly uploaded files)
        return imagePreviews;
    };
    const displayImages = getDisplayImages();
    /**
   * nextImage: Navigate to next image in carousel
   */ const nextImage = ()=>{
        setCurrentImageIndex((prev)=>(prev + 1) % displayImages.length);
    };
    /**
   * prevImage: Navigate to previous image in carousel
   */ const prevImage = ()=>{
        setCurrentImageIndex((prev)=>(prev - 1 + displayImages.length) % displayImages.length);
    };
    /**
   * handleRemoveImage: Delete current image from carousel
   */ const handleRemoveImage = (index)=>{
        const displayImages = getDisplayImages();
        const totalImages = displayImages.length;
        if (mode === 'edit') {
            const item = displayImages[index];
            // If it's a new item (marked with isNew flag)
            if (item?.isNew) {
                // Find which preview this corresponds to and remove it
                const previewIndex = imagePreviews.findIndex((prev)=>prev.url === item.url && prev.name === item.name);
                if (previewIndex !== -1) {
                    handleDeleteNewImage(previewIndex);
                    // Remove from selectedSlots if it was a replacement
                    setSelectedSlots((prev)=>prev.filter((slot)=>slot !== index));
                }
            } else {
                // It's an existing image from the backend
                const existingIndex = existingImages.findIndex((img)=>img.url === item.url || img.id === item.id);
                if (existingIndex !== -1) {
                    handleDeleteExistingImage(existingIndex);
                }
            }
        } else {
            // ADD mode: just delete from imagePreviews
            handleDeleteNewImage(index);
        }
        // Reset current index after deletion
        // Wait for state update to complete, then adjust index
        setTimeout(()=>{
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
    // Ref for hidden file input for image upload in markdown
    const mdImageInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Insert image markdown at cursor position
    const insertImageMarkdown = (file)=>{
        if (!file) return;
        // Add the file to imageFiles for actual upload
        const blob = file;
        const previewUrl = URL.createObjectURL(blob);
        setImageFiles((prevFiles)=>[
                ...prevFiles,
                file
            ]);
        setImagePreviews((prevPreviews)=>[
                ...prevPreviews,
                {
                    url: previewUrl,
                    name: file.name,
                    type: file.type.startsWith('video/') ? 'video' : 'image'
                }
            ]);
        // Insert markdown reference with filename
        // The actual URL will be resolved when viewing the product
        // based on matching the filename to uploaded images
        setFormData((prev)=>{
            const desc = prev.description || "";
            const md = `![${file.name}](${file.name})`;
            return {
                ...prev,
                description: desc + (desc && !desc.endsWith('\n') ? '\n' : '') + md + '\n'
            };
        });
    };
    // Custom image command for MDEditor
    const customImageCommand = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].image,
        execute: (state, api)=>{
            if (mdImageInputRef.current) {
                mdImageInputRef.current.value = '';
                mdImageInputRef.current.click();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow-lg p-10 w-full max-w-4xl mx-auto font-sans",
        children: [
            mode === 'add' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold text-gray-800",
                        children: "Add New Product"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 417,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 text-xs mt-1",
                        children: "Create a new product for your catalog"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 418,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/ProductForm.js",
                lineNumber: 416,
                columnNumber: 9
            }, this),
            mode === 'edit' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-800",
                                children: "Edit Product"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 text-sm mt-1",
                                children: "Update your product catalog"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 429,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 427,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "text-gray-500 hover:text-gray-700 text-xl cursor-pointer",
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 432,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/ProductForm.js",
                lineNumber: 426,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-black mb-1",
                                children: [
                                    "Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 447,
                                        columnNumber: 18
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                name: "name",
                                value: formData.name,
                                onChange: handleInputChange,
                                className: `w-full px-3 py-1.5 text-sm border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-md focus:ring-2 focus:border-transparent`,
                                placeholder: "Enter product name",
                                autoComplete: "off"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-500 mt-1",
                                children: errors.name
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 458,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$products$2f$ProductVariant$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            initialVariants: variants,
                            onVariantsChange: setVariants,
                            mode: mode
                        }, void 0, false, {
                            fileName: "[project]/components/shared/ProductForm.js",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 462,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-black mb-1",
                                children: [
                                    "Description ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 473,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "absolute right-2 md-preview-mode-btn z-10 text-xs px-4 py-1 rounded border border-gray-700 bg-[#181a1b] text-white hover:bg-gray-900 shadow",
                                        onClick: ()=>setFormData((prev)=>({
                                                    ...prev,
                                                    previewMode: !prev.previewMode
                                                })),
                                        style: {
                                            minWidth: 110
                                        },
                                        children: formData.previewMode ? 'Edit mode' : 'Preview mode'
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-color-mode": "dark",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MDEditor, {
                                            value: formData.description || "",
                                            onChange: (val)=>{
                                                const newVal = val || "";
                                                if (newVal.length <= DESCRIPTION_LIMIT) {
                                                    setFormData((prev)=>({
                                                            ...prev,
                                                            description: newVal
                                                        }));
                                                }
                                            },
                                            height: 300,
                                            preview: formData.previewMode ? "preview" : "edit",
                                            commands: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].group([
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].title1,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].title2,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].title3,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].title4,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].title5,
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].title6
                                                ], {
                                                    name: 'title',
                                                    groupName: 'title',
                                                    buttonProps: {
                                                        'aria-label': 'Headings',
                                                        title: 'Headings',
                                                        children: 'Headings'
                                                    }
                                                }),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].bold,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].italic,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].underline,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].strikethrough,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].unorderedListCommand,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].orderedListCommand,
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$uiw$2f$react$2d$md$2d$editor$2f$esm$2f$commands$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__commands$3e$__["commands"].link
                                            ],
                                            extraCommands: [],
                                            textareaProps: {
                                                placeholder: "Enter description (supports Markdown and images)",
                                                maxLength: DESCRIPTION_LIMIT,
                                                name: "description",
                                                style: {
                                                    minHeight: 120,
                                                    resize: 'vertical',
                                                    background: '#fff',
                                                    color: '#222'
                                                }
                                            },
                                            style: {
                                                width: '100%',
                                                borderRadius: 8,
                                                boxShadow: 'none',
                                                background: '#fff',
                                                color: '#222',
                                                border: '1px solid #000'
                                            },
                                            visibleDragbar: false
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/ProductForm.js",
                                            lineNumber: 486,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 485,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/*",
                                        ref: mdImageInputRef,
                                        style: {
                                            display: 'none'
                                        },
                                        onChange: (e)=>{
                                            const file = e.target.files && e.target.files[0];
                                            if (file) insertImageMarkdown(file);
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute right-2 bottom-2 z-10 text-xs px-2 py-1 rounded border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 shadow flex items-center",
                                title: "Expand",
                                onClick: ()=>{
                                    const el = document.querySelector('.w-md-editor');
                                    if (el) el.classList.toggle('w-md-editor-fullscreen');
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/ProductForm.js",
                                            lineNumber: 554,
                                            columnNumber: 113
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "ml-1",
                                        children: "Expand"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 555,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 545,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center mt-1",
                                children: [
                                    errors.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-500",
                                        children: errors.description
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 558,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-right text-xs text-gray-500 ml-auto",
                                        children: [
                                            formData.description.length,
                                            " / ",
                                            DESCRIPTION_LIMIT,
                                            " characters"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 559,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 557,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 471,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-black mb-1",
                                        children: [
                                            "About Item ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 570,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 569,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "about_item",
                                        value: formData.about_item,
                                        onChange: handleInputChange,
                                        className: `w-full px-3 py-1.5 text-sm border ${errors.about_item ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-md focus:ring-2 focus:border-transparent resize-none`,
                                        placeholder: "Enter about item details",
                                        rows: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this),
                                    errors.about_item && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-500 mt-1",
                                        children: errors.about_item
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 580,
                                        columnNumber: 35
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 568,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-black mb-1",
                                        children: [
                                            "Product Details ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 585,
                                                columnNumber: 31
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 584,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "product_details",
                                        value: formData.product_details,
                                        onChange: handleInputChange,
                                        className: `w-full px-3 py-1.5 text-sm border ${errors.product_details ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-md focus:ring-2 focus:border-transparent resize-none`,
                                        placeholder: "Enter product details",
                                        rows: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 587,
                                        columnNumber: 13
                                    }, this),
                                    errors.product_details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-500 mt-1",
                                        children: errors.product_details
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 595,
                                        columnNumber: 40
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 583,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-black mb-1",
                                        children: [
                                            "Safety Information ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 600,
                                                columnNumber: 34
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 599,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "safety_information",
                                        value: formData.safety_information,
                                        onChange: handleInputChange,
                                        className: `w-full px-3 py-1.5 text-sm border ${errors.safety_information ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-md focus:ring-2 focus:border-transparent resize-none`,
                                        placeholder: "Enter safety information",
                                        rows: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 602,
                                        columnNumber: 13
                                    }, this),
                                    errors.safety_information && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-500 mt-1",
                                        children: errors.safety_information
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 610,
                                        columnNumber: 43
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 598,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-xs font-medium text-black mb-1",
                                        children: [
                                            "Usage Directions ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-500",
                                                children: "*"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 615,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 614,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        name: "usage_directions",
                                        value: formData.usage_directions,
                                        onChange: handleInputChange,
                                        className: `w-full px-3 py-1.5 text-sm border ${errors.usage_directions ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'} rounded-md focus:ring-2 focus:border-transparent resize-none`,
                                        placeholder: "Enter usage directions",
                                        rows: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 617,
                                        columnNumber: 13
                                    }, this),
                                    errors.usage_directions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-red-500 mt-1",
                                        children: errors.usage_directions
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 625,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-xs font-medium text-black mb-1",
                                children: [
                                    "Images ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 632,
                                        columnNumber: 20
                                    }, this),
                                    " ",
                                    displayImages.length === 0 ? "" : `[${currentImageIndex + 1}/${displayImages.length}]`
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 631,
                                columnNumber: 11
                            }, this),
                            errors.images && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-500 mb-1",
                                children: errors.images
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 639,
                                columnNumber: 13
                            }, this),
                            imageTypeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-red-500 mb-1",
                                children: imageTypeError
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 642,
                                columnNumber: 13
                            }, this),
                            imageSizeError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 bg-red-50 border border-red-200 rounded-md p-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/AG - error.png",
                                        alt: "Error",
                                        width: 40,
                                        height: 40,
                                        className: "flex-shrink-0",
                                        unoptimized: true
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 646,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-red-600",
                                        children: imageSizeError
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 654,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 645,
                                columnNumber: 13
                            }, this),
                            displayImages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-gray-100 rounded-lg p-3 mb-3 h-[160px]",
                                children: [
                                    displayImages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: prevImage,
                                        className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M15 19l-7-7 7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 668,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/ProductForm.js",
                                            lineNumber: 667,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 662,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-24 flex items-center justify-center relative",
                                        children: displayImages[currentImageIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: displayImages[currentImageIndex]?.type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                src: displayImages[currentImageIndex]?.isNew || !displayImages[currentImageIndex]?.url?.startsWith('/') ? displayImages[currentImageIndex]?.url : `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRAPI_URL"]}${displayImages[currentImageIndex].url}`,
                                                className: "max-h-24 max-w-full object-contain",
                                                controls: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 678,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: displayImages[currentImageIndex]?.isNew || !displayImages[currentImageIndex]?.url?.startsWith('/') ? displayImages[currentImageIndex]?.url : `${__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STRAPI_URL"]}${displayImages[currentImageIndex].url}`,
                                                alt: "Product preview",
                                                width: 300,
                                                height: 96,
                                                className: "max-h-24 max-w-full object-contain",
                                                unoptimized: true
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 688,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, this),
                                    displayImages[currentImageIndex] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 px-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white px-2 py-0.5 rounded-md shadow-sm max-w-xs truncate",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-700",
                                                    children: displayImages[currentImageIndex]?.name || `Image ${currentImageIndex + 1}`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/ProductForm.js",
                                                    lineNumber: 711,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 710,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-0.5 bg-white rounded-md shadow-sm p-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleRemoveImage(currentImageIndex),
                                                        className: "hover:bg-gray-100 p-1 rounded cursor-pointer",
                                                        title: "Delete image",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3.5 h-3.5 text-gray-600",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/ProductForm.js",
                                                                lineNumber: 726,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/ProductForm.js",
                                                            lineNumber: 725,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/ProductForm.js",
                                                        lineNumber: 719,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        title: "Replace current media",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3.5 h-3.5 text-gray-600",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/ProductForm.js",
                                                                    lineNumber: 733,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/ProductForm.js",
                                                                lineNumber: 732,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg",
                                                                onChange: (e)=>{
                                                                    setImageTypeError("");
                                                                    setImageSizeError("");
                                                                    const file = e.target.files?.[0];
                                                                    const allowedImageTypes = [
                                                                        "image/png",
                                                                        "image/jpeg",
                                                                        "image/jpg"
                                                                    ];
                                                                    const allowedVideoTypes = [
                                                                        "video/mp4",
                                                                        "video/webm",
                                                                        "video/ogg"
                                                                    ];
                                                                    const allowedTypes = [
                                                                        ...allowedImageTypes,
                                                                        ...allowedVideoTypes
                                                                    ];
                                                                    if (file && !allowedTypes.includes(file.type)) {
                                                                        setImageTypeError("Only PNG, JPEG images and MP4, WebM, OGG videos are allowed.");
                                                                        e.target.value = '';
                                                                        return;
                                                                    }
                                                                    // Check video file size (4MB limit)
                                                                    if (file && file.type.startsWith('video/') && file.size > VIDEO_SIZE_LIMIT) {
                                                                        setImageSizeError(`Video file "${file.name}" exceeds 4MB size limit`);
                                                                        e.target.value = '';
                                                                        return;
                                                                    }
                                                                    if (file) {
                                                                        if (mode === 'edit') {
                                                                            const displayImages = getDisplayImages();
                                                                            const currentItem = displayImages[currentImageIndex];
                                                                            // If replacing an existing image
                                                                            if (!currentItem?.isNew) {
                                                                                const existingIndex = existingImages.findIndex((img)=>img.url === currentItem.url || img.id === currentItem.id);
                                                                                if (existingIndex !== -1 && !selectedSlots.includes(existingIndex)) {
                                                                                    setSelectedSlots((prev)=>[
                                                                                            ...prev,
                                                                                            existingIndex
                                                                                        ]);
                                                                                }
                                                                            }
                                                                            setImageFiles((prev)=>[
                                                                                    ...prev,
                                                                                    file
                                                                                ]);
                                                                            setImagePreviews((prev)=>[
                                                                                    ...prev,
                                                                                    {
                                                                                        url: URL.createObjectURL(file),
                                                                                        name: file.name,
                                                                                        type: file.type.startsWith('video/') ? 'video' : 'image'
                                                                                    }
                                                                                ]);
                                                                        } else {
                                                                            const newFiles = [
                                                                                ...imageFiles
                                                                            ];
                                                                            newFiles[currentImageIndex] = file;
                                                                            setImageFiles(newFiles);
                                                                            const newPreviews = [
                                                                                ...imagePreviews
                                                                            ];
                                                                            newPreviews[currentImageIndex] = {
                                                                                url: URL.createObjectURL(file),
                                                                                name: file.name,
                                                                                type: file.type.startsWith('video/') ? 'video' : 'image'
                                                                            };
                                                                            setImagePreviews(newPreviews);
                                                                        }
                                                                    }
                                                                    e.target.value = '';
                                                                },
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/ProductForm.js",
                                                                lineNumber: 735,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/shared/ProductForm.js",
                                                        lineNumber: 731,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "cursor-pointer hover:bg-gray-100 p-1 rounded",
                                                        title: "Add more images or videos",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-3.5 h-3.5 text-gray-600",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M12 4v16m8-8H4"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/shared/ProductForm.js",
                                                                    lineNumber: 799,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/ProductForm.js",
                                                                lineNumber: 798,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "file",
                                                                accept: "image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg",
                                                                multiple: true,
                                                                onChange: (e)=>{
                                                                    setImageTypeError("");
                                                                    setImageSizeError("");
                                                                    const newFiles = Array.from(e.target.files || []);
                                                                    const allowedImageTypes = [
                                                                        "image/png",
                                                                        "image/jpeg",
                                                                        "image/jpg"
                                                                    ];
                                                                    const allowedVideoTypes = [
                                                                        "video/mp4",
                                                                        "video/webm",
                                                                        "video/ogg"
                                                                    ];
                                                                    const allowedTypes = [
                                                                        ...allowedImageTypes,
                                                                        ...allowedVideoTypes
                                                                    ];
                                                                    const invalid = newFiles.find((f)=>!allowedTypes.includes(f.type));
                                                                    if (invalid) {
                                                                        setImageTypeError("Only PNG, JPEG images and MP4, WebM, OGG videos are allowed.");
                                                                        e.target.value = '';
                                                                        return;
                                                                    }
                                                                    // Check video file size (4MB limit)
                                                                    const oversizedVideo = newFiles.find((f)=>{
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
                                                                    const updatedFiles = [
                                                                        ...imageFiles,
                                                                        ...newFiles
                                                                    ];
                                                                    setImageFiles(updatedFiles);
                                                                    const newPreviews = newFiles.map((file)=>({
                                                                            url: URL.createObjectURL(file),
                                                                            name: file.name,
                                                                            type: file.type.startsWith('video/') ? 'video' : 'image'
                                                                        }));
                                                                    setImagePreviews([
                                                                        ...imagePreviews,
                                                                        ...newPreviews
                                                                    ]);
                                                                },
                                                                className: "hidden"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/shared/ProductForm.js",
                                                                lineNumber: 801,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/shared/ProductForm.js",
                                                        lineNumber: 797,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 716,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 707,
                                        columnNumber: 15
                                    }, this),
                                    displayImages.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: nextImage,
                                        className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 z-10 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M9 5l7 7-7 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/shared/ProductForm.js",
                                                lineNumber: 854,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/ProductForm.js",
                                            lineNumber: 853,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 848,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 658,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "cursor-pointer block mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 hover:border-green-400 transition-all h-[160px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 flex flex-col items-center justify-center text-center p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mb-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 4v16m8-8H4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/shared/ProductForm.js",
                                                            lineNumber: 867,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/shared/ProductForm.js",
                                                        lineNumber: 866,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/ProductForm.js",
                                                    lineNumber: 865,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-xs",
                                                    children: "Click to add Images or Videos"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/ProductForm.js",
                                                    lineNumber: 870,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-xs mt-1",
                                                    children: "PNG, JPEG, MP4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/shared/ProductForm.js",
                                                    lineNumber: 873,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/shared/ProductForm.js",
                                            lineNumber: 864,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 863,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "file",
                                        accept: "image/png,image/jpeg,image/jpg,video/mp4,video/webm,video/ogg",
                                        multiple: true,
                                        onChange: handleImageSelect,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/ProductForm.js",
                                        lineNumber: 878,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 862,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 630,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end gap-2 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onCancel,
                                className: "px-5 py-1.5 text-sm bg-green-600 hover:bg-green-700 rounded-md transition-colors text-white !text-white cursor-pointer",
                                style: {
                                    color: '#fff'
                                },
                                disabled: isLoading,
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 892,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                onClick: ()=>setSubmitAction("draft"),
                                className: "bg-green-600 text-white px-4 py-2 hover:bg-green-700 rounded flex items-center justify-center cursor-pointer",
                                disabled: isLoading,
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 905,
                                columnNumber: 3
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                onClick: ()=>setSubmitAction("published"),
                                className: "bg-green-600 text-white px-4 py-2 hover:bg-green-700 rounded flex items-center justify-center cursor-pointer",
                                disabled: isLoading,
                                children: "Publish"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/ProductForm.js",
                                lineNumber: 916,
                                columnNumber: 3
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/ProductForm.js",
                        lineNumber: 890,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/shared/ProductForm.js",
                lineNumber: 442,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/ProductForm.js",
        lineNumber: 410,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/Sidebar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Sidebar({ profile, onLogout, onCollapseChange }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return false;
    });
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load sidebar state from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (onCollapseChange) {
            onCollapseChange(isCollapsed);
        }
        setIsMounted(true);
    }, [
        isCollapsed,
        onCollapseChange
    ]);
    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
            icon: "📊",
            disabled: true
        },
        {
            name: "Products",
            path: "/products",
            icon: "📦",
            disabled: false
        },
        {
            name: "Campaigns",
            path: "/campaigns",
            icon: "📢",
            disabled: true
        },
        {
            name: "Analytics",
            path: "/analytics",
            icon: "📈",
            disabled: true
        }
    ];
    const isActive = (path)=>pathname === path;
    const toggleSidebar = ()=>{
        const newState = !isCollapsed;
        setIsCollapsed(newState);
        localStorage.setItem("sidebarCollapsed", JSON.stringify(newState));
        if (onCollapseChange) {
            onCollapseChange(newState);
        }
    };
    const handleMenuClick = (item)=>{
        if (item.disabled) return;
        router.push(item.path);
    };
    const handleLogout = ()=>{
        // Clear sidebar state from localStorage on logout
        localStorage.removeItem("sidebarCollapsed");
        // Call the parent logout handler
        if (onLogout) {
            onLogout();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed left-0 top-0 h-full bg-white shadow-lg flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/vercel.svg",
                                            alt: "Logo",
                                            style: {
                                                width: '24px',
                                                height: '24px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Sidebar.js",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xl text-gray-800",
                                        children: "Rural Pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSidebar,
                                className: "bg-gray-100 text-gray-700 rounded-md p-1.5 hover:bg-gray-200 transition-colors flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 82,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center w-full gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/vercel.svg ",
                                    alt: "Rural Pulse Logo",
                                    style: {
                                        width: '24px',
                                        height: '30px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 99,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 98,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSidebar,
                                className: "bg-gray-100 text-gray-700 rounded-md p-1.5 hover:bg-gray-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 5l7 7-7 7M5 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 111,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 105,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/Sidebar.js",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/Sidebar.js",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/Sidebar.js",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 py-6",
                children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleMenuClick(item),
                        className: `w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${item.disabled ? "text-gray-400 cursor-not-allowed opacity-50" : isActive(item.path) ? "bg-green-50 text-green-700 border-r-4 border-green-700 font-semibold" : "text-gray-700 hover:bg-gray-50"}`,
                        title: isCollapsed ? item.name : '',
                        disabled: item.disabled,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 135,
                                columnNumber: 13
                            }, this),
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 136,
                                columnNumber: 30
                            }, this)
                        ]
                    }, item.path, true, {
                        fileName: "[project]/components/shared/Sidebar.js",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/shared/Sidebar.js",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `border-t border-gray-200 ${isCollapsed ? 'p-3' : 'p-6'}`,
                children: !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-700 font-bold text-lg",
                                        children: profile?.username?.charAt(0).toUpperCase() || "U"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 147,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 146,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-800 text-sm",
                                            children: profile?.username || "User"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Sidebar.js",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: profile?.email || ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Sidebar.js",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 145,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-full bg-green-50 text-green-600 hover:bg-green-100 font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 168,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-700 font-bold text-lg",
                                children: profile?.username?.charAt(0).toUpperCase() || "U"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-10 h-10 bg-green-50 text-green-600 hover:bg-green-100 font-semibold rounded-md transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer",
                            title: "Logout",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 184,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Sidebar.js",
                    lineNumber: 172,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/Sidebar.js",
                lineNumber: 142,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/Sidebar.js",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/shared/Loader.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Loader({ isVisible = false, message = "Saving..." }) {
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center gap-4 max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-24 h-24 dance-animation",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/AG - Macsot.png",
                        alt: "Loading...",
                        width: 96,
                        height: 96,
                        className: "w-full h-full object-contain",
                        unoptimized: true
                    }, void 0, false, {
                        fileName: "[project]/components/shared/Loader.js",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/Loader.js",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg font-semibold text-gray-800",
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Loader.js",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500 mt-1",
                            children: [
                                "Please wait!!! Good things take time… almost there!",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "loading-dots",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Loader.js",
                                            lineNumber: 29,
                                            columnNumber: 80
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Loader.js",
                                            lineNumber: 29,
                                            columnNumber: 94
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "."
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Loader.js",
                                            lineNumber: 29,
                                            columnNumber: 108
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Loader.js",
                                    lineNumber: 29,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Loader.js",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Loader.js",
                    lineNumber: 26,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/shared/Loader.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/shared/Loader.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/add-product/AddProduct.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ProductForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/ProductForm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Sidebar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Loader.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/productApi.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/toast.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function AddProductPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return false;
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    const handleSubmit = async ({ action, formData, imageFiles, variants })=>{
        setLoading(true);
        try {
            let uploadedImages = [];
            if (imageFiles.length > 0) {
                uploadedImages = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["uploadFiles"])(imageFiles);
            }
            const imageIds = uploadedImages.map((img)=>img.id);
            // Save unsaved variants first (those with tempId but no documentId)
            let variantIds = [];
            const unsavedVariants = variants.filter((v)=>v.tempId && !v.documentId);
            console.log("📦 All variants:", variants);
            console.log("⏳ Unsaved variants to create:", unsavedVariants);
            if (unsavedVariants.length > 0) {
                console.log("💾 Creating unsaved variants...");
                for (const variant of unsavedVariants){
                    try {
                        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createVariantAPI"])(variant); // Always publishes
                        const variantData = response.data || response;
                        console.log("✅ Variant created:", variantData);
                        variantIds.push(variantData.documentId || variantData.id);
                    } catch (err) {
                        console.error("❌ Error creating variant:", err);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])(`Failed to create variant: ${err.message}`, "error");
                        setLoading(false);
                        return;
                    }
                }
            }
            // Add already-saved variants
            const savedVariants = variants.filter((v)=>v.documentId || v.id && !v.tempId);
            variantIds.push(...savedVariants.map((v)=>v.documentId || v.id));
            console.log("🔗 Final variant IDs for product:", variantIds);
            const payload = {
                name: formData.name.trim(),
                description: formData.description.trim(),
                about_item: formData.about_item,
                product_details: formData.product_details,
                safety_information: formData.safety_information,
                usage_directions: formData.usage_directions,
                images: imageIds,
                product_variants: variantIds,
                status: action
            };
            console.log("📤 Payload for new product:", payload);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createProductAPI"])(payload);
            if (!data.success) throw new Error(data?.error || "Failed to create product");
            const message = action === "published" ? "Product published successfully!" : "Product saved as draft!";
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])(message, "success");
            // Redirect to products page
            router.push("/products");
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["showToast"])(err.message || "Failed to create product", "error");
        } finally{
            setLoading(false);
        }
    };
    const handleCancel = ()=>{
        router.push("/products");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isVisible: loading,
                message: "Creating product..."
            }, void 0, false, {
                fileName: "[project]/components/add-product/AddProduct.js",
                lineNumber: 108,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Sidebar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                profile: profile,
                onLogout: ()=>{
                    localStorage.removeItem("token");
                    router.push("/signin");
                },
                onCollapseChange: setSidebarCollapsed
            }, void 0, false, {
                fileName: "[project]/components/add-product/AddProduct.js",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 transition-all duration-300",
                style: {
                    marginLeft: sidebarCollapsed ? '80px' : '256px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-8xl mx-5 px-6 py-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full max-w-full mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$ProductForm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                mode: "add",
                                onSubmit: handleSubmit,
                                onCancel: handleCancel,
                                isLoading: loading
                            }, void 0, false, {
                                fileName: "[project]/components/add-product/AddProduct.js",
                                lineNumber: 128,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/add-product/AddProduct.js",
                            lineNumber: 127,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/add-product/AddProduct.js",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/add-product/AddProduct.js",
                    lineNumber: 124,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/add-product/AddProduct.js",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/add-product/AddProduct.js",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a05d388._.js.map