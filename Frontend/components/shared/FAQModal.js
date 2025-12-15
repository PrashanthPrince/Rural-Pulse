"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createFAQAPI, updateFAQAPI } from "@/utils/productApi";
import { showToast } from "@/components/shared/toast";
import Loader from "@/components/shared/Loader";

/**
 * FAQModal Component - Inline Form for Adding/Editing FAQs
 * 
 * Renders as inline form content (no modal wrapper)
 * 
 * @param {Object} faq - FAQ data for editing (null for add)
 * @param {Function} onSave - Callback when FAQ is saved
 * @param {Function} onCancel - Callback to close/cancel form
 */
export default function FAQModal({ faq, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Reset form to empty state
  const resetForm = useCallback(() => {
    setFormData({
      question: "",
      answer: "",
    });
    setErrors({});
  }, []);

  // Pre-fill form if editing, reset if faq is null (new faq mode)
  useEffect(() => {
    if (faq) {
      setFormData({
        question: faq.question || faq.Question || "",
        answer: faq.answer || faq.Answer || "",
      });
    } else {
      // FAQ is null - reset form for adding new FAQ
      resetForm();
    }
  }, [faq, resetForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.question?.trim()) {
      newErrors.question = "Question is required";
    }
    if (!formData.answer?.trim()) {
      newErrors.answer = "Answer is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = async () => {
    console.log("=== FAQ SAVE START ===");

    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    setIsLoading(true);
    try {
      let savedFAQ;

      if (faq && faq.documentId) {
        // Update existing FAQ
        console.log("Updating FAQ:", faq.documentId);
        const response = await updateFAQAPI(faq.documentId, {
          question: formData.question.trim(),
          answer: formData.answer.trim(),
        });

        savedFAQ = {
          id: response.id || faq.id,
          documentId: response.documentId || faq.documentId,
          question: formData.question,
          answer: formData.answer,
          Question: formData.question,
          Answer: formData.answer,
        };

        showToast("FAQ updated successfully", "success");
      } else {
        // Create new FAQ
        console.log("Creating new FAQ");
        const response = await createFAQAPI({
          question: formData.question,
          answer: formData.answer,
        });

        savedFAQ = {
          id: response.id,
          documentId: response.documentId,
          question: formData.question,
          answer: formData.answer,
          Question: formData.question,
          Answer: formData.answer,
        };

        showToast("FAQ created successfully", "success");
      }

      console.log("FAQ saved:", savedFAQ);
      onSave(savedFAQ);
      resetForm();
    } catch (err) {
      console.error("Error saving FAQ:", err);
      showToast(err.message || "Failed to save FAQ", "error");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  // Always render as inline form (no modal wrapper)
  return (
    <div className="space-y-6">
      {/* Question Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Question <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="question"
          value={formData.question}
          onChange={handleChange}
          placeholder="e.g., How do I use this product?"
          className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
            errors.question
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-500"
          }`}
        />
        {errors.question && (
          <p className="text-red-500 text-xs mt-1">{errors.question}</p>
        )}
      </div>

      {/* Answer Field */}
      <div>
        <label className="block text-sm font-semibold text-gray-800 mb-2">
          Answer <span className="text-red-500">*</span>
        </label>
        <textarea
          name="answer"
          value={formData.answer}
          onChange={handleChange}
          placeholder="Provide a detailed answer..."
          rows="4"
          className={`w-full px-4 py-2.5 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none ${
            errors.answer
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-green-500"
          }`}
        />
        {errors.answer && (
          <p className="text-red-500 text-xs mt-1">{errors.answer}</p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-end pt-4">
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="px-6 py-2 text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSave}
          disabled={isLoading}
          className="px-6 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isLoading ? "Saving..." : "Save FAQ"}
        </button>
      </div>
    </div>
  );
}
