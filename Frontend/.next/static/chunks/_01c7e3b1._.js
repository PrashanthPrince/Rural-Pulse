(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/shared/Sidebar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Sidebar(param) {
    let { profile, onLogout, onCollapseChange } = param;
    var _profile_username, _profile_username1;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isCollapsed, setIsCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "Sidebar.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("sidebarCollapsed");
                return saved !== null ? JSON.parse(saved) : false;
            }
            //TURBOPACK unreachable
            ;
        }
    }["Sidebar.useState"]);
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Load sidebar state from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Sidebar.useEffect": ()=>{
            if (onCollapseChange) {
                onCollapseChange(isCollapsed);
            }
            setIsMounted(true);
        }
    }["Sidebar.useEffect"], [
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
        localStorage.removeItem("productVariantEnums");
        // Call the parent logout handler
        if (onLogout) {
            onLogout();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed left-0 top-0 h-full bg-white shadow-lg flex flex-col transition-all duration-300 ".concat(isCollapsed ? 'w-20' : 'w-64'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/vercel.svg",
                                            alt: "Logo",
                                            style: {
                                                width: '24px',
                                                height: '24px'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Sidebar.js",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 76,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold text-xl text-gray-800",
                                        children: "Rural Pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSidebar,
                                className: "bg-gray-100 text-gray-700 rounded-md p-1.5 hover:bg-gray-200 transition-colors flex-shrink-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M11 19l-7-7 7-7m8 14l-7-7 7-7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 93,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center w-full gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/vercel.svg",
                                    alt: "Rural Pulse Logo",
                                    style: {
                                        width: '24px',
                                        height: '30px'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleSidebar,
                                className: "bg-gray-100 text-gray-700 rounded-md p-1.5 hover:bg-gray-200 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M13 5l7 7-7 7M5 5l7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 106,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 102,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/shared/Sidebar.js",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/shared/Sidebar.js",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/Sidebar.js",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 py-6",
                children: menuItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleMenuClick(item),
                        className: "w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ".concat(item.disabled ? "text-gray-400 cursor-not-allowed opacity-50" : isActive(item.path) ? "bg-green-50 text-green-700 border-r-4 border-green-700 font-semibold" : "text-gray-700 hover:bg-gray-50"),
                        title: isCollapsed ? item.name : '',
                        disabled: item.disabled,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: item.icon
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: item.name
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 137,
                                columnNumber: 30
                            }, this)
                        ]
                    }, item.path, true, {
                        fileName: "[project]/components/shared/Sidebar.js",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/shared/Sidebar.js",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-200 ".concat(isCollapsed ? 'p-3' : 'p-6'),
                children: !isCollapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-green-700 font-bold text-lg",
                                        children: (profile === null || profile === void 0 ? void 0 : (_profile_username = profile.username) === null || _profile_username === void 0 ? void 0 : _profile_username.charAt(0).toUpperCase()) || "U"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 148,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 147,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-gray-800 text-sm",
                                            children: (profile === null || profile === void 0 ? void 0 : profile.username) || "User"
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Sidebar.js",
                                            lineNumber: 153,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-500",
                                            children: (profile === null || profile === void 0 ? void 0 : profile.email) || ""
                                        }, void 0, false, {
                                            fileName: "[project]/components/shared/Sidebar.js",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 152,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-full bg-green-50 text-green-600 hover:bg-green-100 font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-5 h-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/shared/Sidebar.js",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Logout"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-green-700 font-bold text-lg",
                                children: (profile === null || profile === void 0 ? void 0 : (_profile_username1 = profile.username) === null || _profile_username1 === void 0 ? void 0 : _profile_username1.charAt(0).toUpperCase()) || "U"
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 175,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleLogout,
                            className: "w-10 h-10 bg-green-50 text-green-600 hover:bg-green-100 font-semibold rounded-md transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer",
                            title: "Logout",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                }, void 0, false, {
                                    fileName: "[project]/components/shared/Sidebar.js",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/shared/Sidebar.js",
                                lineNumber: 185,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/shared/Sidebar.js",
                            lineNumber: 180,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/shared/Sidebar.js",
                    lineNumber: 173,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/shared/Sidebar.js",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/shared/Sidebar.js",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(Sidebar, "+CxvDMEEDaMqQgyALE4Fn0O7c6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/shared/toast.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastRoot",
    ()=>ToastRoot,
    "showToast",
    ()=>showToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
;
;
function showToast(message) {
    let type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "info";
    const ToastContent = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "toast-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toast-mascot",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: type === "error" ? "/AG - error.png" : "/AG - success.png",
                        alt: type === "error" ? "Error" : "Success",
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "toast-content",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"][type](/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContent, {}, void 0, false, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
        position: "bottom-right"
    }, void 0, false, {
        fileName: "[project]/components/shared/toast.js",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_c = ToastRoot;
var _c;
__turbopack_context__.k.register(_c, "ToastRoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/apiConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    LOGIN: "".concat(BASE_API_URL, "/auth/login"),
    RESET_PASSWORD: "".concat(BASE_API_URL, "/auth/reset-password"),
    UPDATE_PASSWORD: "".concat(BASE_API_URL, "/auth/update-password"),
    PRODUCTS: "".concat(BASE_API_URL, "/products"),
    DELETE_PRODUCT: (id)=>"".concat(BASE_API_URL, "/products/").concat(id),
    UPLOAD: "".concat(STRAPI_URL, "/api/upload")
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/productApi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// utils/productApi.js
__turbopack_context__.s([
    "createFAQAPI",
    ()=>createFAQAPI,
    "createProductAPI",
    ()=>createProductAPI,
    "createVariantAPI",
    ()=>createVariantAPI,
    "deleteFAQAPI",
    ()=>deleteFAQAPI,
    "deleteProductAPI",
    ()=>deleteProductAPI,
    "deleteVariantAPI",
    ()=>deleteVariantAPI,
    "fetchCategoriesAPI",
    ()=>fetchCategoriesAPI,
    "fetchDraftVariantsAPI",
    ()=>fetchDraftVariantsAPI,
    "fetchFAQByIdAPI",
    ()=>fetchFAQByIdAPI,
    "fetchFAQsAPI",
    ()=>fetchFAQsAPI,
    "fetchFAQsByProductAPI",
    ()=>fetchFAQsByProductAPI,
    "fetchProductByIdAPI",
    ()=>fetchProductByIdAPI,
    "fetchProductsAPI",
    ()=>fetchProductsAPI,
    "fetchSubcategoriesAPI",
    ()=>fetchSubcategoriesAPI,
    "fetchVariantByIdAPI",
    ()=>fetchVariantByIdAPI,
    "fetchVariantsAPI",
    ()=>fetchVariantsAPI,
    "formatProductData",
    ()=>formatProductData,
    "linkFAQsToProductAPI",
    ()=>linkFAQsToProductAPI,
    "linkProductsToFAQAPI",
    ()=>linkProductsToFAQAPI,
    "publishVariantAPI",
    ()=>publishVariantAPI,
    "unlinkProductsFromFAQAPI",
    ()=>unlinkProductsFromFAQAPI,
    "unsetOtherDefaultsAPI",
    ()=>unsetOtherDefaultsAPI,
    "updateFAQAPI",
    ()=>updateFAQAPI,
    "updateProductAPI",
    ()=>updateProductAPI,
    "updateVariantAPI",
    ()=>updateVariantAPI,
    "uploadFiles",
    ()=>uploadFiles,
    "uploadToStrapiMediaLibrary",
    ()=>uploadToStrapiMediaLibrary,
    "uploadVariantImages",
    ()=>uploadVariantImages,
    "uploadVariantVideos",
    ()=>uploadVariantVideos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/apiConfig.js [app-client] (ecmascript)");
;
async function fetchProductsAPI() {
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PRODUCTS, {
        method: "GET",
        credentials: "include"
    });
    const data = await res.json();
    return data;
}
async function fetchProductByIdAPI(documentId) {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/products/").concat(documentId), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok || !data.data) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Product not found");
        }
        return data.data;
    } catch (err) {
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
            var _img_mime;
            // Check if it's a video by looking at the mime type or file extension
            const isVideo = ((_img_mime = img.mime) === null || _img_mime === void 0 ? void 0 : _img_mime.startsWith('video/')) || /\.(mp4|webm|ogg)$/i.test(img.url || '');
            if (isVideo) {
                // For videos, use the full URL directly
                return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRAPI_URL"]).concat(img.url);
            } else {
                var _img_formats_thumbnail, _img_formats;
                // For images, try to use thumbnail, fallback to full URL
                const imageUrl = ((_img_formats = img.formats) === null || _img_formats === void 0 ? void 0 : (_img_formats_thumbnail = _img_formats.thumbnail) === null || _img_formats_thumbnail === void 0 ? void 0 : _img_formats_thumbnail.url) || img.url;
                return "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRAPI_URL"]).concat(imageUrl);
            }
        });
        // Transform FAQs from Strapi format to frontend format
        // Strapi returns: { id, attributes: { Question, Answer, ... }, documentId, ... }
        // Frontend expects: { id, question, answer, documentId, ... }
        const faqs = (p.faqs || []).map((faq)=>{
            // Handle both Strapi full response and simple reference
            if (faq.attributes) {
                // Full FAQ object from Strapi
                return {
                    id: faq.id,
                    documentId: faq.documentId,
                    question: faq.attributes.Question || faq.Question || '',
                    answer: faq.attributes.Answer || faq.Answer || '',
                    Question: faq.attributes.Question || faq.Question,
                    Answer: faq.attributes.Answer || faq.Answer
                };
            } else {
                // Simple FAQ reference or already transformed
                return {
                    id: faq.id,
                    documentId: faq.documentId,
                    question: faq.Question || faq.question || '',
                    answer: faq.Answer || faq.answer || '',
                    Question: faq.Question,
                    Answer: faq.Answer
                };
            }
        });
        // Preserve categories and sub_categories
        return {
            ...p,
            images: images.length > 0 ? images : [
                "/empty-bg.png"
            ],
            categories: p.categories || [],
            sub_categories: p.sub_categories || [],
            faqs: faqs
        };
    });
}
async function deleteProductAPI(prodId) {
    const token = localStorage.getItem("token");
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].DELETE_PRODUCT(prodId), {
        method: "DELETE",
        headers: {
            Authorization: "Bearer ".concat(token),
            "Content-Type": "application/json"
        }
    });
    return res.json();
}
async function uploadFiles(files) {
    const formData = new FormData();
    files.forEach((file)=>formData.append("files", file));
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].UPLOAD, {
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
    console.log("uploadToStrapiMediaLibrary: Uploading", files.length, "file(s) to", "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRAPI_URL"], "/api/upload"));
    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STRAPI_URL"], "/api/upload"), {
        method: "POST",
        body: formData,
        headers: {
        }
    });
    if (!res.ok) {
        const error = await res.text();
        console.error("uploadToStrapiMediaLibrary: Upload failed", error);
        throw new Error("Failed to upload to Strapi media library: " + error);
    }
    const data = await res.json();
    console.log("uploadToStrapiMediaLibrary: Response received", data);
    return data;
}
async function createProductAPI(payload) {
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENDPOINTS"].PRODUCTS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok) {
        throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to create product");
    }
    return data;
}
async function updateProductAPI(documentId, formDataOrPayload) {
    const token = localStorage.getItem("token");
    // Check if it's FormData or JSON payload
    const isFormData = formDataOrPayload instanceof FormData;
    const options = {
        method: "PUT",
        credentials: "include",
        headers: {
            Authorization: "Bearer ".concat(token)
        }
    };
    if (isFormData) {
        // FormData with files - let browser set Content-Type with boundary
        options.body = formDataOrPayload;
    } else {
        // JSON payload
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(formDataOrPayload);
    }
    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/products/update/").concat(documentId), options);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.details || data.message || data.error || "Product update failed");
    }
    return data;
}
async function fetchVariantsAPI() {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/variants"), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch variants");
        }
        return data;
    } catch (err) {
        throw err;
    }
}
async function fetchVariantByIdAPI(variantId) {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/variants/").concat(variantId, "?status=draft"), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch variant");
        }
        return data.data || data;
    } catch (err) {
        throw err;
    }
}
async function createVariantAPI(variantData) {
    try {
        const payload = {
            variant_name: variantData.variant_name,
            variety_type: variantData.variety_type,
            grade: variantData.grade,
            weight: variantData.weight,
            weight_unit: variantData.weight_unit,
            size: variantData.size,
            style: variantData.style,
            package_type: variantData.package_type,
            // CRITICAL: Include isDefault and sortOrder fields on creation
            isDefault: variantData.isDefault || false,
            sortOrder: typeof variantData.sortOrder === 'number' ? variantData.sortOrder : 0
        };
        // Add images if provided
        if (variantData.varientImage && variantData.varientImage.length > 0) {
            payload.varientImage = variantData.varientImage;
        }
        // Note: Videos are now combined with images in varientImage field
        // No separate variantVideo field is sent
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/variants?status=draft"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            var _data_error;
            throw new Error((data === null || data === void 0 ? void 0 : (_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message) || (data === null || data === void 0 ? void 0 : data.error) || "Failed to create variant");
        }
        return data;
    } catch (err) {
        throw err;
    }
}
async function updateVariantAPI(documentId, variantData) {
    try {
        const payload = {
            variant_name: variantData.variant_name,
            variety_type: variantData.variety_type,
            grade: variantData.grade,
            weight: variantData.weight,
            weight_unit: variantData.weight_unit,
            size: variantData.size,
            style: variantData.style,
            package_type: variantData.package_type,
            // CRITICAL: Include isDefault and sortOrder to persist these fields
            isDefault: variantData.isDefault || false,
            sortOrder: typeof variantData.sortOrder === 'number' ? variantData.sortOrder : 0
        };
        // Add images if provided
        if (variantData.varientImage && variantData.varientImage.length > 0) {
            payload.varientImage = variantData.varientImage;
        }
        // Note: Videos are now combined with images in varientImage field
        // No separate varientVideo field is sent
        const url = "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/variants/").concat(documentId, "?status=draft");
        console.log("updateVariantAPI: Sending to", url);
        console.log("updateVariantAPI: Payload", payload);
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        console.log("updateVariantAPI: Response", data);
        if (!res.ok) {
            var _data_error;
            throw new Error((data === null || data === void 0 ? void 0 : (_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message) || (data === null || data === void 0 ? void 0 : data.error) || "Failed to update variant");
        }
        return data;
    } catch (err) {
        console.error("updateVariantAPI: Error", err);
        throw err;
    }
}
async function publishVariantAPI(documentId) {
    try {
        console.log("Publishing variant:", documentId);
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/variants/").concat(documentId, "?status=published"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({})
        });
        const data = await res.json();
        if (!res.ok) {
            var _data_error;
            throw new Error((data === null || data === void 0 ? void 0 : (_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message) || (data === null || data === void 0 ? void 0 : data.error) || "Failed to publish variant");
        }
        console.log("Variant published successfully:", documentId);
        return data.data || data;
    } catch (err) {
        console.error("Error publishing variant:", err);
        throw err;
    }
}
async function fetchDraftVariantsAPI(productDocumentId) {
    try {
        console.log("Fetching draft variants for product:", productDocumentId);
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/products/").concat(productDocumentId, "/draft-variants?status=draft"), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch draft variants");
        }
        const variants = data.data || data;
        console.log("Draft variants found:", Array.isArray(variants) ? variants.length : 0);
        return Array.isArray(variants) ? variants : [];
    } catch (err) {
        console.error("Error fetching draft variants:", err);
        return [];
    }
}
async function deleteVariantAPI(documentId) {
    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/variants/").concat(documentId), {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    });
    const data = await res.json();
    if (!res.ok) {
        var _data_error;
        throw new Error((data === null || data === void 0 ? void 0 : (_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message) || (data === null || data === void 0 ? void 0 : data.error) || "Failed to delete variant");
    }
    return data;
}
async function unsetOtherDefaultsAPI(productId, defaultVariantId) {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/products/").concat(productId, "/unset-other-defaults"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({
                variantId: defaultVariantId
            })
        });
        const data = await res.json();
        if (!res.ok) {
            console.warn("Failed to unset other defaults:", (data === null || data === void 0 ? void 0 : data.error) || "Unknown error");
            // Don't throw - this is a non-critical operation
            return data;
        }
        console.log("Successfully unset other defaults for product", productId);
        return data;
    } catch (err) {
        console.error("Error unsetting other defaults:", err);
        // Don't throw - this is a non-critical operation
        return {
            success: false,
            error: err.message
        };
    }
}
async function uploadVariantImages(files) {
    const formData = new FormData();
    files.forEach((file)=>formData.append("files", file));
    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/upload/variants/images"), {
        method: "POST",
        body: formData,
        credentials: "include"
    });
    if (!res.ok) {
        const error = await res.text();
        throw new Error("Image upload failed: " + error);
    }
    return res.json();
}
async function uploadVariantVideos(files) {
    const formData = new FormData();
    files.forEach((file)=>formData.append("files", file));
    const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/upload/variants/videos"), {
        method: "POST",
        body: formData,
        credentials: "include"
    });
    if (!res.ok) {
        const error = await res.text();
        throw new Error("Video upload failed: " + error);
    }
    return res.json();
}
async function fetchCategoriesAPI() {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/categories"), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch categories");
        }
        return data.data || [];
    } catch (err) {
        console.error("Error fetching categories:", err);
        return [];
    }
}
async function fetchSubcategoriesAPI() {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/subcategories"), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch subcategories");
        }
        return data.data || [];
    } catch (err) {
        console.error("Error fetching subcategories:", err);
        return [];
    }
}
async function fetchFAQsAPI() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    try {
        const query = new URLSearchParams();
        if (options.page) query.append("page", options.page);
        if (options.pageSize) query.append("pageSize", options.pageSize);
        if (options.populate) query.append("populate", options.populate);
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs").concat(query.toString() ? "?" + query : ""), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch FAQs");
        }
        return data.data || [];
    } catch (err) {
        console.error("Error fetching FAQs:", err);
        throw err;
    }
}
async function fetchFAQByIdAPI(faqId) {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs/").concat(faqId), {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok || !data.data) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "FAQ not found");
        }
        return data.data;
    } catch (err) {
        console.error("Error fetching FAQ ".concat(faqId, ":"), err);
        throw err;
    }
}
async function createFAQAPI(faqData) {
    let status = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "published";
    try {
        const payload = {
            Question: faqData.Question || faqData.question,
            Answer: faqData.Answer || faqData.answer
        };
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs?status=").concat(status), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            console.error("FAQ creation failed:", data);
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to create FAQ");
        }
        console.log("FAQ created:", data.data);
        return data.data;
    } catch (err) {
        console.error("Error creating FAQ:", err);
        throw err;
    }
}
async function updateFAQAPI(faqId, updateData) {
    let status = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "published";
    try {
        const payload = {
            Question: updateData.Question || updateData.question,
            Answer: updateData.Answer || updateData.answer
        };
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs/").concat(faqId, "?status=").concat(status), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            console.error("FAQ update failed:", data);
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to update FAQ");
        }
        console.log("FAQ updated:", data.data);
        return data.data;
    } catch (err) {
        console.error("Error updating FAQ:", err);
        throw err;
    }
}
async function deleteFAQAPI(faqId) {
    try {
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs/").concat(faqId), {
            method: "DELETE",
            credentials: "include"
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to delete FAQ");
        }
        console.log("FAQ deleted");
        return data;
    } catch (err) {
        console.error("Error deleting FAQ ".concat(faqId, ":"), err);
        throw err;
    }
}
async function linkProductsToFAQAPI(faqId, productIds) {
    try {
        console.log("Frontend: Linking products to FAQ");
        console.log("  FAQ ID:", faqId);
        console.log("  Product IDs:", productIds);
        const payload = {
            products: productIds || []
        };
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs/").concat(faqId, "/products"), {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            var _data_error;
            console.error("FAQ linking failed:");
            console.error("   Response status:", res.status);
            console.error("   Response data:", data);
            throw new Error((data === null || data === void 0 ? void 0 : (_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message) || (data === null || data === void 0 ? void 0 : data.error) || (data === null || data === void 0 ? void 0 : data.message) || "Failed to link products to FAQ");
        }
        console.log("FAQ linking successful:", data);
        return data;
    } catch (err) {
        console.error("Error linking products to FAQ:", err);
        throw err;
    }
}
async function unlinkProductsFromFAQAPI(faqId, productIdsToRemove) {
    try {
        console.log("Frontend: Unlinking products from FAQ");
        console.log("  FAQ ID:", faqId);
        console.log("  Product IDs to remove:", productIdsToRemove);
        const payload = {
            productIdsToRemove: productIdsToRemove || []
        };
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/faqs/").concat(faqId, "/products"), {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            console.error("FAQ unlinking failed:", data);
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to unlink products from FAQ");
        }
        console.log("FAQ unlinking successful");
        return data;
    } catch (err) {
        console.error("Error unlinking products from FAQ:", err);
        throw err;
    }
}
async function fetchFAQsByProductAPI(productId) {
    try {
        const endpoint = "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/products/").concat(productId, "/faqs");
        console.log("Frontend: Fetching FAQs for product:", productId);
        console.log("Frontend: Calling endpoint: ".concat(endpoint));
        const res = await fetch(endpoint, {
            method: "GET",
            credentials: "include"
        });
        const data = await res.json();
        console.log("Frontend: API Response status: ".concat(res.status));
        console.log("Frontend: Raw response data:", data);
        if (!res.ok) {
            console.error("Frontend: API Error (".concat(res.status, "):"), data === null || data === void 0 ? void 0 : data.error);
            throw new Error((data === null || data === void 0 ? void 0 : data.error) || "Failed to fetch product FAQs");
        }
        const faqs = data.data || [];
        console.log("Frontend: Received ".concat(faqs.length, " FAQs from backend"));
        // Backend now returns FAQs already partially transformed, but ensure consistency
        const transformedFAQs = faqs.map((faq)=>{
            var _faq_attributes, _faq_attributes1;
            console.log("Processing FAQ ".concat(faq.id, ":"), {
                hasQuestion: !!faq.Question,
                hasAnswer: !!faq.Answer,
                hasAttributes: !!faq.attributes
            });
            // Get question and answer from either top-level or attributes
            const question = faq.Question || ((_faq_attributes = faq.attributes) === null || _faq_attributes === void 0 ? void 0 : _faq_attributes.Question) || '';
            const answer = faq.Answer || ((_faq_attributes1 = faq.attributes) === null || _faq_attributes1 === void 0 ? void 0 : _faq_attributes1.Answer) || '';
            return {
                id: faq.id,
                documentId: faq.documentId,
                question: question,
                answer: answer,
                Question: question,
                Answer: answer
            };
        });
        console.log("Frontend: FAQs transformed successfully:", transformedFAQs.length);
        if (transformedFAQs.length > 0) {
            var _transformedFAQs__question;
            console.log("Frontend: Sample FAQ:", {
                id: transformedFAQs[0].id,
                question: (_transformedFAQs__question = transformedFAQs[0].question) === null || _transformedFAQs__question === void 0 ? void 0 : _transformedFAQs__question.substring(0, 50)
            });
        }
        return transformedFAQs;
    } catch (err) {
        console.error("Frontend: Error fetching product FAQs:", err.message);
        throw err;
    }
}
async function linkFAQsToProductAPI(productDocumentId, faqIds) {
    try {
        console.log("Frontend: Linking FAQs to product (all versions)");
        console.log("  Product documentId:", productDocumentId);
        console.log("  FAQ IDs:", faqIds);
        const payload = {
            faqIds: faqIds || []
        };
        const res = await fetch("".concat(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$apiConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_API_URL"], "/products/").concat(productDocumentId, "/link-faqs"), {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            var _data_error;
            console.error("FAQ linking failed:");
            console.error("   Response status:", res.status);
            console.error("   Response data:", data);
            throw new Error((data === null || data === void 0 ? void 0 : (_data_error = data.error) === null || _data_error === void 0 ? void 0 : _data_error.message) || (data === null || data === void 0 ? void 0 : data.error) || (data === null || data === void 0 ? void 0 : data.message) || "Failed to link FAQs to product");
        }
        console.log("FAQs linked to product (all versions):", data);
        return data;
    } catch (err) {
        console.error("Error linking FAQs to product:", err);
        throw err;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/products/Product.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/Sidebar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/shared/toast.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
// Import API handlers
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/productApi.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function ProductsDashboard() {
    var _products_find;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filterSearch, setFilterSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(""); // Search within filter
    const [filterStatus, setFilterStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all"); // all, draft, published
    const [showFilterDropdown, setShowFilterDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // const [editingProduct, setEditingProduct] = useState(null);
    const [deleteModal, setDeleteModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        prodId: null
    });
    const [expandedDesc, setExpandedDesc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Category and Subcategory filters
    const [categories, setCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [subcategories, setSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedCategories, setSelectedCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedSubcategories, setSelectedSubcategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sidebarCollapsed, setSidebarCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ProductsDashboard.useState": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const saved = localStorage.getItem("sidebarCollapsed");
                return saved !== null ? JSON.parse(saved) : false;
            }
            //TURBOPACK unreachable
            ;
        }
    }["ProductsDashboard.useState"]);
    const [previewImages, setPreviewImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [imageIndex, setImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // LOAD USER PROFILE
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsDashboard.useEffect": ()=>{
            const userData = localStorage.getItem("user");
            if (userData) {
                try {
                    const parsedUser = JSON.parse(userData);
                    setProfile(parsedUser);
                } catch (err) {
                    console.error("Failed to parse user data:", err);
                }
            }
        }
    }["ProductsDashboard.useEffect"], []);
    // LOAD PRODUCTS
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsDashboard.useEffect": ()=>{
            const loadProducts = {
                "ProductsDashboard.useEffect.loadProducts": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProductsAPI"])();
                        // Backend now handles merging and filtering - just format the products array
                        const formattedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatProductData"])(data.products || []);
                        // Debug: Log first product to see structure
                        if (formattedProducts.length > 0) {
                            console.log("📦 First product structure:", formattedProducts[0]);
                            console.log("📦 Categories in first product:", formattedProducts[0].categories);
                            console.log("📦 Sub-categories in first product:", formattedProducts[0].sub_categories);
                        }
                        // Sort by createdAt or updatedAt descending
                        const sortedProducts = formattedProducts.sort({
                            "ProductsDashboard.useEffect.loadProducts.sortedProducts": (a, b)=>{
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
                            }
                        }["ProductsDashboard.useEffect.loadProducts.sortedProducts"]);
                        setProducts(sortedProducts);
                    } catch (err) {
                        setError("Failed to load products");
                    }
                }
            }["ProductsDashboard.useEffect.loadProducts"];
            loadProducts();
        }
    }["ProductsDashboard.useEffect"], []);
    // LOAD CATEGORIES AND SUBCATEGORIES
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsDashboard.useEffect": ()=>{
            const loadCategoriesAndSubcategories = {
                "ProductsDashboard.useEffect.loadCategoriesAndSubcategories": async ()=>{
                    try {
                        const [categoriesData, subcategoriesData] = await Promise.all([
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchCategoriesAPI"])(),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchSubcategoriesAPI"])()
                        ]);
                        console.log("📁 Categories loaded:", categoriesData);
                        console.log("📁 Subcategories loaded:", subcategoriesData);
                        setCategories(categoriesData);
                        setSubcategories(subcategoriesData);
                    } catch (err) {
                        console.error("Failed to load categories and subcategories:", err);
                    }
                }
            }["ProductsDashboard.useEffect.loadCategoriesAndSubcategories"];
            loadCategoriesAndSubcategories();
        }
    }["ProductsDashboard.useEffect"], []);
    // Move newly created or edited product to the top and re-sort
    const moveProductToTop = (product)=>{
        setProducts((prev)=>{
            // Remove if already exists (edit case)
            const filtered = prev.filter((p)=>p.documentId !== product.documentId);
            const newList = [
                product,
                ...filtered
            ];
            // Sort by createdAt or documentId descending
            return newList.sort((a, b)=>{
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
    const toggleDescription = (id)=>{
        setExpandedDesc((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    // SEARCH AND FILTER
    let filteredProducts = products.filter((prod)=>{
        var _prod_name;
        // Search filter
        const matchesSearch = (_prod_name = prod.name) === null || _prod_name === void 0 ? void 0 : _prod_name.toLowerCase().includes(searchTerm.toLowerCase());
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
            const prodCategoryDocIds = prodCategories.map((cat)=>{
                return typeof cat === 'object' && cat !== null ? cat.documentId : cat;
            });
            // Check if product has any of the selected category documentIds
            matchesCategory = prodCategoryDocIds.length > 0 && selectedCategories.some((catDocId)=>prodCategoryDocIds.includes(catDocId));
        }
        // Subcategory filter - product must have at least one selected subcategory (match by documentId)
        let matchesSubcategory = true;
        if (selectedSubcategories.length > 0) {
            const prodSubcategories = prod.sub_categories || [];
            // Extract documentIds from product subcategories
            const prodSubcategoryDocIds = prodSubcategories.map((subcat)=>{
                return typeof subcat === 'object' && subcat !== null ? subcat.documentId : subcat;
            });
            // Check if product has any of the selected subcategory documentIds
            matchesSubcategory = prodSubcategoryDocIds.length > 0 && selectedSubcategories.some((subcatDocId)=>prodSubcategoryDocIds.includes(subcatDocId));
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
            allProductsWithCategories: products.map((p)=>({
                    id: p.documentId,
                    name: p.name,
                    categories: p.categories,
                    categoryDocIds: (p.categories || []).map((c)=>typeof c === 'object' ? c.documentId : c),
                    categoriesRaw: JSON.stringify(p.categories)
                })),
            filteredProductIds: filteredProducts.map((p)=>({
                    id: p.documentId,
                    name: p.name
                }))
        });
    } else {
        // Also log when NO filters are selected to see all products
        console.log("📦 All products (no filter):", products.map((p)=>({
                id: p.documentId,
                name: p.name,
                categories: p.categories,
                categoriesLength: (p.categories || []).length,
                categoriesDetailed: (p.categories || []).map((c)=>({
                        id: c.id,
                        documentId: c.documentId,
                        CategoryName: c.CategoryName
                    }))
            })));
    }
    const searchedProducts = filteredProducts;
    // PAGINATION
    const PRODUCTS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const totalPages = Math.ceil(searchedProducts.length / PRODUCTS_PER_PAGE);
    const paginatedProducts = searchedProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) setCurrentPage(page);
    };
    // LOGOUT
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("productVariantEnums");
        router.push("/signin");
    };
    // DELETE
    const handleDelete = async (prodId)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$productApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProductAPI"])(prodId);
            if (res.status === "success") {
                setProducts((prev)=>prev.filter((p)=>p.documentId !== prodId));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Product deleted successfully!", "success");
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Delete failed: " + res.message, "error");
            }
        } catch (err) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$toast$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showToast"])("Error deleting product", "error");
        } finally{
            setDeleteModal({
                open: false,
                prodId: null
            });
        }
    };
    // Listen for product add/edit events (assumes ProductForm or API triggers a custom event)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsDashboard.useEffect": ()=>{
            const handler = {
                "ProductsDashboard.useEffect.handler": (e)=>{
                    if (e.detail && e.detail.product) {
                        moveProductToTop(e.detail.product);
                    }
                }
            }["ProductsDashboard.useEffect.handler"];
            window.addEventListener("product-updated", handler);
            return ({
                "ProductsDashboard.useEffect": ()=>window.removeEventListener("product-updated", handler)
            })["ProductsDashboard.useEffect"];
        }
    }["ProductsDashboard.useEffect"], []);
    // Close filter dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProductsDashboard.useEffect": ()=>{
            const handleClickOutside = {
                "ProductsDashboard.useEffect.handleClickOutside": (e)=>{
                    if (showFilterDropdown && !e.target.closest('.filter-dropdown-container')) {
                        setShowFilterDropdown(false);
                    }
                }
            }["ProductsDashboard.useEffect.handleClickOutside"];
            document.addEventListener("click", handleClickOutside);
            return ({
                "ProductsDashboard.useEffect": ()=>document.removeEventListener("click", handleClickOutside)
            })["ProductsDashboard.useEffect"];
        }
    }["ProductsDashboard.useEffect"], [
        showFilterDropdown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$shared$2f$Sidebar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                profile: profile,
                onLogout: handleLogout,
                onCollapseChange: setSidebarCollapsed
            }, void 0, false, {
                fileName: "[project]/components/products/Product.js",
                lineNumber: 297,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 transition-all duration-300",
                style: {
                    marginLeft: sidebarCollapsed ? '80px' : '256px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-8xl mx-5 px-6 py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-20 bg-gray-50 pb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-2 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold",
                                                    children: "Product Management"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 314,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Manage your AgChem product catalog"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 315,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 313,
                                            columnNumber: 13
                                        }, this),
                                        products.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white !text-white flex items-center justify-center cursor-pointer font-semibold text-sm h-12",
                                            style: {
                                                color: '#fff'
                                            },
                                            onClick: ()=>router.push("/add-product"),
                                            children: "+ Add New Product"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 312,
                                    columnNumber: 12
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-lg flex gap-4 items-center justify-between mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Search products...",
                                            className: "border p-2 rounded w-64",
                                            value: searchTerm,
                                            onChange: (e)=>setSearchTerm(e.target.value)
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 330,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative filter-dropdown-container",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setShowFilterDropdown(!showFilterDropdown),
                                                    className: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded flex items-center gap-2 transition-colors text-white !text-white font-semibold text-sm h-10",
                                                    style: {
                                                        color: '#fff'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-5 h-5",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 345,
                                                                columnNumber: 19
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/Product.js",
                                                            lineNumber: 344,
                                                            columnNumber: 17
                                                        }, this),
                                                        "Filter"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 339,
                                                    columnNumber: 15
                                                }, this),
                                                showFilterDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute right-0 top-full mt-1 bg-white border border-gray-300 rounded shadow-lg z-10 w-80",
                                                    style: {
                                                        maxHeight: '600px',
                                                        overflowY: 'auto'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-b sticky top-0 bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Search filters...",
                                                                className: "w-full border p-2 rounded text-sm",
                                                                value: filterSearch,
                                                                onChange: (e)=>setFilterSearch(e.target.value)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 354,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/Product.js",
                                                            lineNumber: 353,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "Status"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 365,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-1",
                                                                    children: [
                                                                        "All Products",
                                                                        "Draft",
                                                                        "Published",
                                                                        "Modified"
                                                                    ].filter((option)=>option.toLowerCase().includes(filterSearch.toLowerCase())).map((option)=>{
                                                                        const statusValue = option === "All Products" ? "all" : option.toLowerCase();
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>{
                                                                                setFilterStatus(statusValue);
                                                                            },
                                                                            className: "block w-full text-left px-3 py-2 rounded text-sm ".concat(filterStatus === statusValue ? "bg-green-100 text-green-700 font-semibold" : "hover:bg-gray-100"),
                                                                            children: option
                                                                        }, option, false, {
                                                                            fileName: "[project]/components/products/Product.js",
                                                                            lineNumber: 372,
                                                                            columnNumber: 27
                                                                        }, this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 366,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/products/Product.js",
                                                            lineNumber: 364,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-b",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "Categories (Multi-select)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 386,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2 max-h-48 overflow-y-auto",
                                                                    children: categories.length > 0 ? categories.filter((cat)=>{
                                                                        var _cat_categoryName;
                                                                        return (_cat_categoryName = cat.categoryName) === null || _cat_categoryName === void 0 ? void 0 : _cat_categoryName.toLowerCase().includes(filterSearch.toLowerCase());
                                                                    }).map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "checkbox",
                                                                                    checked: selectedCategories.includes(cat.documentId),
                                                                                    onChange: (e)=>{
                                                                                        if (e.target.checked) {
                                                                                            setSelectedCategories([
                                                                                                ...selectedCategories,
                                                                                                cat.documentId
                                                                                            ]);
                                                                                        } else {
                                                                                            setSelectedCategories(selectedCategories.filter((docId)=>docId !== cat.documentId));
                                                                                        }
                                                                                    },
                                                                                    className: "w-4 h-4 rounded"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/products/Product.js",
                                                                                    lineNumber: 393,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm",
                                                                                    children: cat.categoryName
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/products/Product.js",
                                                                                    lineNumber: 405,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, cat.documentId, true, {
                                                                            fileName: "[project]/components/products/Product.js",
                                                                            lineNumber: 392,
                                                                            columnNumber: 27
                                                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm text-gray-500",
                                                                        children: "No categories available"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 409,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 387,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/products/Product.js",
                                                            lineNumber: 385,
                                                            columnNumber: 19
                                                        }, this),
                                                        selectedCategories.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-t",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm font-semibold text-gray-700 mb-2",
                                                                    children: "Subcategories"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 417,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "space-y-2 max-h-48 overflow-y-auto",
                                                                    children: (()=>{
                                                                        // Get subcategories from selected categories
                                                                        const selectedCategoryObjects = categories.filter((cat)=>selectedCategories.includes(cat.documentId));
                                                                        // Flatten all subcategories from selected categories
                                                                        const availableSubcategories = [];
                                                                        selectedCategoryObjects.forEach((cat)=>{
                                                                            if (cat.sub_categories && Array.isArray(cat.sub_categories)) {
                                                                                cat.sub_categories.forEach((subcat)=>{
                                                                                    // Avoid duplicates
                                                                                    if (!availableSubcategories.find((s)=>s.documentId === subcat.documentId)) {
                                                                                        availableSubcategories.push(subcat);
                                                                                    }
                                                                                });
                                                                            }
                                                                        });
                                                                        return availableSubcategories.length > 0 ? availableSubcategories.filter((subcat)=>{
                                                                            var _subcat_subcategoryname;
                                                                            return (_subcat_subcategoryname = subcat.subcategoryname) === null || _subcat_subcategoryname === void 0 ? void 0 : _subcat_subcategoryname.toLowerCase().includes(filterSearch.toLowerCase());
                                                                        }).map((subcat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "checkbox",
                                                                                        checked: selectedSubcategories.includes(subcat.documentId),
                                                                                        onChange: (e)=>{
                                                                                            if (e.target.checked) {
                                                                                                setSelectedSubcategories([
                                                                                                    ...selectedSubcategories,
                                                                                                    subcat.documentId
                                                                                                ]);
                                                                                            } else {
                                                                                                setSelectedSubcategories(selectedSubcategories.filter((docId)=>docId !== subcat.documentId));
                                                                                            }
                                                                                        },
                                                                                        className: "w-4 h-4 rounded"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/products/Product.js",
                                                                                        lineNumber: 443,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm",
                                                                                        children: subcat.subcategoryname
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/products/Product.js",
                                                                                        lineNumber: 455,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, subcat.documentId, true, {
                                                                                fileName: "[project]/components/products/Product.js",
                                                                                lineNumber: 442,
                                                                                columnNumber: 31
                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: "No subcategories in selected categories"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/products/Product.js",
                                                                            lineNumber: 459,
                                                                            columnNumber: 29
                                                                        }, this);
                                                                    })()
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 418,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/products/Product.js",
                                                            lineNumber: 416,
                                                            columnNumber: 21
                                                        }, this),
                                                        (selectedCategories.length > 0 || selectedSubcategories.length > 0 || filterStatus !== "all") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-3 border-t sticky bottom-0 bg-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>{
                                                                    setSelectedCategories([]);
                                                                    setSelectedSubcategories([]);
                                                                    setFilterStatus("all");
                                                                    setFilterSearch("");
                                                                },
                                                                className: "w-full text-center px-3 py-2 rounded text-sm bg-red-50 text-red-600 hover:bg-red-100 font-semibold",
                                                                children: "Clear All Filters"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 469,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/products/Product.js",
                                                            lineNumber: 468,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 338,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 329,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm mb-2",
                                    children: [
                                        "Showing ",
                                        paginatedProducts.length,
                                        " of ",
                                        searchedProducts.length,
                                        " products"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 486,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 311,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        minHeight: '200px',
                                        maxHeight: 'calc(100vh - 260px)',
                                        overflowY: 'auto',
                                        scrollbarWidth: 'none',
                                        msOverflowStyle: 'none'
                                    },
                                    className: "hide-scrollbar",
                                    children: products.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-center justify-center w-full",
                                        style: {
                                            minHeight: 'calc(100vh - 260px)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/AG - Add first product.png",
                                                    alt: "Empty products",
                                                    width: 310,
                                                    height: 200,
                                                    style: {
                                                        maxWidth: '310px',
                                                        width: '100%',
                                                        height: 'auto',
                                                        marginBottom: '8px'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 501,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-4xl font-bold text-gray-800 mb-3",
                                                    children: "Nothing here yet..."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 508,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-lg mb-8",
                                                    children: "Looks like products are on vacation."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 509,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>router.push("/add-product"),
                                                    className: "border border-green-500 bg-transparent text-black px-5 py-3 rounded font-semibold text-lg transition-colors hover:bg-green-700 hover:text-white",
                                                    children: "+ Add Product"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/products/Product.js",
                                                    lineNumber: 510,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 500,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/Product.js",
                                        lineNumber: 499,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch",
                                        children: [
                                            ...paginatedProducts
                                        ].map((prod)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white shadow p-5 rounded-lg flex flex-col justify-between items-stretch min-h-[420px] h-full w-full max-w-[370px] mx-auto cursor-pointer",
                                                onClick: ()=>router.push("/products/view/".concat(prod.documentId)),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative h-44 w-full bg-gray-100 rounded-lg flex items-center justify-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-2 right-2 z-10",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-3 py-1 rounded-full text-xs font-semibold text-white ".concat(prod.status === 'published' ? 'bg-green-600' : prod.status === 'modified' ? 'bg-red-600' : 'bg-blue-500'),
                                                                    children: prod.status === 'published' ? 'Published' : prod.status === 'modified' ? 'Modified' : 'Draft'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 528,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 527,
                                                                columnNumber: 21
                                                            }, this),
                                                            (()=>{
                                                                var _prod_images;
                                                                const currentMedia = (_prod_images = prod.images) === null || _prod_images === void 0 ? void 0 : _prod_images[imageIndex[prod.documentId] || 0];
                                                                const isVideo = currentMedia && /\.(mp4|webm|ogg)$/i.test(currentMedia);
                                                                if (!currentMedia) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-gray-400",
                                                                        children: "No media"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 543,
                                                                        columnNumber: 32
                                                                    }, this);
                                                                }
                                                                if (isVideo) {
                                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                                                        src: currentMedia,
                                                                        className: "h-44 w-full object-contain rounded-lg",
                                                                        controls: true
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 548,
                                                                        columnNumber: 27
                                                                    }, this);
                                                                }
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: currentMedia,
                                                                    alt: prod.name,
                                                                    width: 300,
                                                                    height: 176,
                                                                    className: "h-44 w-full object-contain rounded-lg",
                                                                    unoptimized: true
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 557,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })(),
                                                            prod.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            setImageIndex((prev)=>{
                                                                                const current = prev[prod.documentId] || 0;
                                                                                const next = current === 0 ? 0 : current - 1;
                                                                                return {
                                                                                    ...prev,
                                                                                    [prod.documentId]: next
                                                                                };
                                                                            });
                                                                        },
                                                                        disabled: (imageIndex[prod.documentId] || 0) === 0,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M15 19l-7-7 7-7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/products/Product.js",
                                                                                lineNumber: 586,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/products/Product.js",
                                                                            lineNumber: 585,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 570,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white",
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation();
                                                                            setImageIndex((prev)=>{
                                                                                const current = prev[prod.documentId] || 0;
                                                                                const next = current === prod.images.length - 1 ? current : current + 1;
                                                                                return {
                                                                                    ...prev,
                                                                                    [prod.documentId]: next
                                                                                };
                                                                            });
                                                                        },
                                                                        disabled: (imageIndex[prod.documentId] || 0) === prod.images.length - 1,
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M9 5l7 7-7 7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/products/Product.js",
                                                                                lineNumber: 606,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/products/Product.js",
                                                                            lineNumber: 605,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 590,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/products/Product.js",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, this),
                                                    prod.images.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-center mt-2 space-x-2",
                                                        children: prod.images.map((media, idx)=>{
                                                            const isVideo = media && /\.(mp4|webm|ogg)$/i.test(media);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setImageIndex((prev)=>({
                                                                            ...prev,
                                                                            [prod.documentId]: idx
                                                                        }));
                                                                },
                                                                className: "w-3 h-3 rounded-full flex items-center justify-center transition-all ".concat((imageIndex[prod.documentId] || 0) === idx ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"),
                                                                title: isVideo ? "Video ".concat(idx + 1) : "Image ".concat(idx + 1),
                                                                children: isVideo && (imageIndex[prod.documentId] || 0) === idx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-2 h-2 text-white",
                                                                    fill: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M8 5v14l11-7z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 633,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 632,
                                                                    columnNumber: 31
                                                                }, this)
                                                            }, idx, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 618,
                                                                columnNumber: 27
                                                            }, this);
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/Product.js",
                                                        lineNumber: 614,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-bold text-lg mt-2",
                                                        children: prod.name.length > 40 ? prod.name.slice(0, 40) + "..." : prod.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/Product.js",
                                                        lineNumber: 642,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-400 text-xs mt-0",
                                                        children: (()=>{
                                                            const categories = Array.isArray(prod.categories) ? prod.categories : [];
                                                            const subcategories = Array.isArray(prod.sub_categories) ? prod.sub_categories : [];
                                                            const categoryNames = categories.map((cat)=>typeof cat === 'object' && cat.categoryName ? cat.categoryName : cat).join(", ");
                                                            const subcategoryNames = subcategories.map((subcat)=>typeof subcat === 'object' && subcat.subcategoryname ? subcat.subcategoryname : subcat).join(", ");
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    categoryNames && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Category:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/products/Product.js",
                                                                                lineNumber: 660,
                                                                                columnNumber: 52
                                                                            }, this),
                                                                            " ",
                                                                            categoryNames
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 660,
                                                                        columnNumber: 47
                                                                    }, this),
                                                                    subcategoryNames && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-semibold",
                                                                                children: "Subcategory:"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/products/Product.js",
                                                                                lineNumber: 661,
                                                                                columnNumber: 55
                                                                            }, this),
                                                                            " ",
                                                                            subcategoryNames
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 661,
                                                                        columnNumber: 50
                                                                    }, this)
                                                                ]
                                                            }, void 0, true);
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/Product.js",
                                                        lineNumber: 645,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-gray-700 text-sm mt-1",
                                                        children: (()=>{
                                                            const text = prod.description || "";
                                                            const isLong = text.length > 150;
                                                            if (!isLong) {
                                                                return text; // Short description
                                                            }
                                                            const shortText = text.substring(0, 150) + "...";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    expandedDesc[prod.documentId] ? text : shortText,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "text-green-600 font-semibold ml-2",
                                                                        onClick: ()=>toggleDescription(prod.documentId),
                                                                        children: expandedDesc[prod.documentId] ? "Read Less" : "Read More"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/products/Product.js",
                                                                        lineNumber: 681,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true);
                                                        })()
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/products/Product.js",
                                                        lineNumber: 666,
                                                        columnNumber: 20
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-2 mt-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white !text-white flex items-center justify-center cursor-pointer",
                                                                style: {
                                                                    color: '#fff'
                                                                },
                                                                title: "Edit",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    router.push("/products/edit/".concat(prod.documentId));
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiEdit"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 702,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 693,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "bg-green-600 hover:bg-green-700 px-4 py-2 rounded transition-colors text-white !text-white flex items-center justify-center cursor-pointer",
                                                                style: {
                                                                    color: '#fff'
                                                                },
                                                                title: "Delete",
                                                                onClick: (e)=>{
                                                                    e.stopPropagation();
                                                                    setDeleteModal({
                                                                        open: true,
                                                                        prodId: prod.documentId
                                                                    });
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTrash2"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/products/Product.js",
                                                                    lineNumber: 713,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/products/Product.js",
                                                                lineNumber: 704,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/products/Product.js",
                                                        lineNumber: 692,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, prod.documentId, true, {
                                                fileName: "[project]/components/products/Product.js",
                                                lineNumber: 523,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/products/Product.js",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 494,
                                    columnNumber: 11
                                }, this),
                                totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center gap-2 mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200",
                                            onClick: ()=>handlePageChange(currentPage - 1),
                                            disabled: currentPage === 1,
                                            children: "Prev"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 724,
                                            columnNumber: 15
                                        }, this),
                                        Array.from({
                                            length: totalPages
                                        }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "px-3 py-1 rounded ".concat(currentPage === i + 1 ? 'bg-green-600 text-white' : 'bg-gray-200 hover:bg-gray-300'),
                                                onClick: ()=>handlePageChange(i + 1),
                                                children: i + 1
                                            }, i, false, {
                                                fileName: "[project]/components/products/Product.js",
                                                lineNumber: 732,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-200",
                                            onClick: ()=>handlePageChange(currentPage + 1),
                                            disabled: currentPage === totalPages,
                                            children: "Next"
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 723,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 492,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/Product.js",
                    lineNumber: 308,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/Product.js",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            deleteModal.open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-6 rounded-lg shadow-xl max-w-md w-full border border-gray-200 relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold",
                            onClick: ()=>setDeleteModal({
                                    open: false,
                                    prodId: null
                                }),
                            "aria-label": "Close",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 758,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold mb-3 text-gray-900",
                            children: "Delete Confirmation"
                        }, void 0, false, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 765,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-5 text-base text-gray-800",
                            children: [
                                "Are you sure that you want to delete the product:",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-red-600 ml-1",
                                    children: ((_products_find = products.find((p)=>p.documentId === deleteModal.prodId)) === null || _products_find === void 0 ? void 0 : _products_find.name) || ''
                                }, void 0, false, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 768,
                                    columnNumber: 15
                                }, this),
                                "?"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 766,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base",
                                    onClick: ()=>handleDelete(deleteModal.prodId),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M5 13l4 4L19 7"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/Product.js",
                                                lineNumber: 778,
                                                columnNumber: 112
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 778,
                                            columnNumber: 17
                                        }, this),
                                        "Yes"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 774,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 font-semibold text-base",
                                    onClick: ()=>setDeleteModal({
                                            open: false,
                                            prodId: null
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/products/Product.js",
                                                lineNumber: 785,
                                                columnNumber: 112
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/products/Product.js",
                                            lineNumber: 785,
                                            columnNumber: 17
                                        }, this),
                                        "No"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 781,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 773,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/Product.js",
                    lineNumber: 757,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/Product.js",
                lineNumber: 756,
                columnNumber: 9
            }, this),
            previewImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white p-4 rounded-lg max-w-xl w-full relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setPreviewImages([]),
                            className: "absolute top-2 right-2 text-gray-700 font-bold",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 797,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-2",
                            children: previewImages.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: img,
                                    width: 400,
                                    height: 256,
                                    className: "h-64 w-auto rounded-lg",
                                    alt: "Product preview",
                                    unoptimized: true
                                }, index, false, {
                                    fileName: "[project]/components/products/Product.js",
                                    lineNumber: 806,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/products/Product.js",
                            lineNumber: 804,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/products/Product.js",
                    lineNumber: 796,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/products/Product.js",
                lineNumber: 795,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/products/Product.js",
        lineNumber: 295,
        columnNumber: 5
    }, this);
}
_s(ProductsDashboard, "fS3xzUpyjuTckVS5lYFKjz4zjUU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ProductsDashboard;
var _c;
__turbopack_context__.k.register(_c, "ProductsDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_01c7e3b1._.js.map