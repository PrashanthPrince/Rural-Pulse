"use client";

import React, { useState } from "react";
import { ENDPOINTS } from "@/utils/apiConfig";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email || !username) {
      setError("Please enter email and username");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(ENDPOINTS.RESET_PASSWORD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Unable to send reset email");
        return;
      }

      setMessage("Password reset link sent to your email.");
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
          Reset Password
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

        <form onSubmit={handleReset}>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-full p-3 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Enter your registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border w-full p-3 rounded mb-4"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-700 w-full text-white py-3 rounded hover:bg-blue-800"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
}
