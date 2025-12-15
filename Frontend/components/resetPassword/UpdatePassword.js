"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ENDPOINTS } from "@/utils/apiConfig";

export default function UpdatePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!token) {
      setError("Invalid or missing reset token");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(ENDPOINTS.UPDATE_PASSWORD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Unable to update password");
        return;
      }

      setMessage("Password updated successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/signin");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Update Password
        </h2>

        {error && (
          <div className="mb-3 text-sm text-red-700 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-3 text-sm text-green-700 bg-green-100 p-2 rounded">
            {message}
          </div>
        )}

        <form onSubmit={handleUpdatePassword}>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border border-gray-300 w-full p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 w-full text-white py-3 rounded hover:bg-blue-800 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => router.push("/signin")}
            className="text-sm text-blue-700 hover:underline"
          >
            Back to Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
