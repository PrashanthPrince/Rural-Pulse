"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ENDPOINTS,BASE_API_URL } from "@/utils/apiConfig";
import {ResetPassword} from "../resetPassword/reset";

const ENUM_KEY = "productVariantEnums";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(ENDPOINTS.LOGIN, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        setLoading(false);
        return;
      }

      // Save user in localStorage (optional)
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));
        await loadEnums(true);
      }

      router.push("/products");

    } catch (err) {
      console.error("Signin failed:", err);
      setError("Signin failed. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-white relative flex flex-col items-center justify-center font-sans">
      <div className="absolute inset-0 bg-farm opacity-25 z-0"></div>

      <div className="relative z-10 bg-white rounded-xl p-8 shadow-lg max-w-sm w-full text-center">
        <div className="bg-white-800 rounded-full w-14 h-14 mx-auto mb-2 flex items-center justify-center">
          <span className="text-white text-3xl"><img src="/vercel.svg" alt="Rural Pulse Logo" style={{ width: '35px', height: '40px' }} /></span>
        </div>

        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Rural Pulse</h2>

        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-3 text-sm text-red-700 bg-red-100 p-2 rounded">
              {error}
            </div>
          )}

          {isClient && (
            <>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-md py-3 px-4 text-sm w-full mb-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 rounded-md py-3 px-4 text-sm w-full mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <div className="text-right mt-2">
	            <button
	              type="button"
	              onClick={() => router.push("/reset-password")}
	              className="text-sm text-blue-700 hover:underline"
	            >
	              Forgot Password?
	            </button>
	          </div>

              <button
                type="submit"
                className="bg-green-800 text-white w-full py-3 rounded-md font-semibold text-sm mb-2 hover:bg-green-900 disabled:opacity-60 cursor-pointer"
                style={{ color: '#fff' }}
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export async function loadEnums(force = false) {
  if (!force) {
    const cached = localStorage.getItem(ENUM_KEY);
    if (cached) return JSON.parse(cached);
  }

  const res = await fetch(`${BASE_API_URL}/productvariant`);
  const json = await res.json();

  const enums = {
    weightUnitOptions: json.data.weightUnitOptions,
    packageTypeOptions: json.data.packageTypeOptions,
  };

  localStorage.setItem(ENUM_KEY, JSON.stringify(enums));
  return enums;
}

export function getEnums() {
  const cached = localStorage.getItem(ENUM_KEY);
  return cached ? JSON.parse(cached) : null;
}

export function clearEnums() {
  localStorage.removeItem(ENUM_KEY);
}
