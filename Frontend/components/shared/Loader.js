"use client";

import React from "react";
import Image from "next/image";
import "./loader.css";

export default function Loader({ isVisible = false, message = "Saving..." }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl p-8 flex flex-col items-center gap-4 max-w-md">
        {/* Animated Loader Image */}
        <div className="w-24 h-24 dance-animation">
          <Image
            src="/AG - Macsot.png"
            alt="Loading..."
            width={96}
            height={96}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="text-lg font-semibold text-gray-800">{message}</p>
          <p className="text-xs text-gray-500 mt-1">Please wait!!!
            Good things take time… almost there!<span className="loading-dots"><span>.</span><span>.</span><span>.</span></span></p>
        </div>

      </div>
    </div>
  );
}
