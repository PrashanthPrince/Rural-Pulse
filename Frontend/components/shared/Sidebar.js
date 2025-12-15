"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * Sidebar Component
 * 
 * Reusable sidebar navigation component with user profile display and collapse functionality
 * 
 * @param {Object} props
 * @param {Object} props.profile - User profile data
 * @param {Function} props.onLogout - Logout handler function
 * @param {Function} props.onCollapseChange - Callback when sidebar collapse state changes
 */
export default function Sidebar({ profile, onLogout, onCollapseChange }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sidebarCollapsed");
      return saved !== null ? JSON.parse(saved) : false;
    }
    return false;
  });
  const [isMounted, setIsMounted] = useState(false);

  // Load sidebar state from localStorage on mount
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isCollapsed);
    }
    setIsMounted(true);
  }, [isCollapsed, onCollapseChange]);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊", disabled: true },
    { name: "Products", path: "/products", icon: "📦", disabled: false },
    { name: "Campaigns", path: "/campaigns", icon: "📢", disabled: true },
    { name: "Analytics", path: "/analytics", icon: "📈", disabled: true },
  ];

  const isActive = (path) => pathname === path;

  const toggleSidebar = () => {
    const newState = !isCollapsed;
    setIsCollapsed(newState);
    localStorage.setItem("sidebarCollapsed", JSON.stringify(newState));
    if (onCollapseChange) {
      onCollapseChange(newState);
    }
  };

  const handleMenuClick = (item) => {
    if (item.disabled) return;
    router.push(item.path);
  };

  const handleLogout = () => {
    // Clear sidebar state from localStorage on logout
    localStorage.removeItem("sidebarCollapsed");
    localStorage.removeItem("productVariantEnums");
    // Call the parent logout handler
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <div className={`fixed left-0 top-0 h-full bg-white shadow-lg flex flex-col transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo Section with Toggle Button */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          {!isCollapsed ? (
            <>
              <div className="flex items-center gap-3">
                <span>
                  <img src="/vercel.svg" alt="Logo" style={{ width: '24px', height: '24px' }} />
                </span>
                <span className="font-bold text-xl text-gray-800">
                  Rural Pulse
                </span>
              </div>
              <button
                onClick={toggleSidebar}
                className="bg-gray-100 text-gray-700 rounded-md p-1.5 hover:bg-gray-200 transition-colors flex-shrink-0"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </svg>
              </button>
            </>
          ) : (
            <div className="flex flex-col items-center w-full gap-5">
              <span>
                <img src="/vercel.svg" alt="Rural Pulse Logo" style={{ width: '24px', height: '30px' }} />
              </span>
              <button
                onClick={toggleSidebar}
                className="bg-gray-100 text-gray-700 rounded-md p-1.5 hover:bg-gray-200 transition-colors"
              >
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6">
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => handleMenuClick(item)}
            className={`w-full flex items-center gap-3 px-6 py-3 text-left transition-colors ${
              item.disabled
                ? "text-gray-400 cursor-not-allowed opacity-50"
                : isActive(item.path)
                ? "bg-green-50 text-green-700 border-r-4 border-green-700 font-semibold"
                : "text-gray-700 hover:bg-gray-50"
            }`}
            title={isCollapsed ? item.name : ''}
            disabled={item.disabled}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </button>
        ))}
      </nav>

      {/* User Profile Section */}
      <div className={`border-t border-gray-200 ${isCollapsed ? 'p-3' : 'p-6'}`}>
        {!isCollapsed ? (
          <>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-700 font-bold text-lg">
                  {profile?.username?.charAt(0).toUpperCase() || "U"}
                </span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800 text-sm">
                  {profile?.username || "User"}
                </p>
                <p className="text-xs text-gray-500">
                  {profile?.email || ""}
                </p>
              </div>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-green-50 text-green-600 hover:bg-green-100 font-semibold px-4 py-2 rounded-md text-sm transition-colors flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-green-700 font-bold text-lg">
                {profile?.username?.charAt(0).toUpperCase() || "U"}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="w-10 h-10 bg-green-50 text-green-600 hover:bg-green-100 font-semibold rounded-md transition-colors flex items-center justify-center flex-shrink-0 cursor-pointer"
              title="Logout"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
