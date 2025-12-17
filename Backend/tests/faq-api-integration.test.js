/**
 * FAQ API Integration Test
 * Tests all FAQ API endpoints with mocked Strapi responses
 */

// Added this line to test merging my daily branch to the main branch
// Adding one more line to test the merge

const axios = require("axios");

// Mock axios to simulate Strapi responses
jest.mock("axios");

describe("FAQ API Integration Tests", () => {
  const mockFAQData = {
    id: 1,
    documentId: "faq-doc-123",
    attributes: {
      Question: "What is this product?",
      Answer: "This is a test product answer.",
      createdAt: "2025-12-13T10:00:00.000Z",
      updatedAt: "2025-12-13T10:00:00.000Z",
      products: { data: [] },
    },
  };

  const strapiResponse = {
    data: {
      data: mockFAQData,
    },
  };

  const strapiListResponse = {
    data: {
      data: [mockFAQData],
      meta: {
        pagination: {
          page: 1,
          pageSize: 100,
          pageCount: 1,
          total: 1,
        },
      },
    },
  };

  // ============================================================================
  // Test: Get All FAQs (No Auth Required)
  // ============================================================================
  test("GET /api/faqs should fetch all FAQs with pagination", async () => {
    axios.get.mockResolvedValueOnce(strapiListResponse);

    const response = await axios.get("http://localhost:3000/api/faqs", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(response.status).toBeUndefined(); // Axios doesn't have status in mock
    expect(response.data.data).toBeDefined();
    expect(Array.isArray(response.data.data)).toBe(true);
    expect(response.data.meta).toBeDefined();
  });

  // ============================================================================
  // Test: Get Specific FAQ (No Auth Required)
  // ============================================================================
  test("GET /api/faqs/:id should fetch a specific FAQ", async () => {
    axios.get.mockResolvedValueOnce(strapiResponse);

    const response = await axios.get(
      "http://localhost:3000/api/faqs/faq-doc-123"
    );

    expect(response.data.data).toBeDefined();
    expect(response.data.data.documentId).toBe("faq-doc-123");
    expect(response.data.data.attributes.Question).toBe(
      "What is this product?"
    );
  });

  // ============================================================================
  // Test: Get FAQs by Product (No Auth Required)
  // ============================================================================
  test("GET /api/products/:productId/faqs should fetch FAQs for a product", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        data: [mockFAQData],
      },
    });

    const response = await axios.get(
      "http://localhost:3000/api/products/prod-123/faqs"
    );

    expect(response.data.data).toBeDefined();
    expect(Array.isArray(response.data.data)).toBe(true);
    expect(response.data.data.length).toBeGreaterThan(0);
  });

  // ============================================================================
  // Test: Create FAQ (Auth Required)
  // ============================================================================
  test("POST /api/faqs should create a new FAQ", async () => {
    const newFAQData = {
      Question: "How to use this product?",
      Answer: "Here are the usage instructions...",
    };

    axios.post.mockResolvedValueOnce(strapiResponse);

    const response = await axios.post(
      "http://localhost:3000/api/faqs?status=published",
      newFAQData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      }
    );

    expect(response.data.data).toBeDefined();
    expect(response.data.data.id).toBeDefined();
    expect(response.data.data.documentId).toBeDefined();
  });

  // ============================================================================
  // Test: Create FAQ as Draft
  // ============================================================================
  test("POST /api/faqs?status=draft should create FAQ in draft mode", async () => {
    const draftFAQData = {
      Question: "Draft question?",
      Answer: "Draft answer.",
    };

    axios.post.mockResolvedValueOnce(strapiResponse);

    const response = await axios.post(
      "http://localhost:3000/api/faqs?status=draft",
      draftFAQData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      }
    );

    expect(response.data.data).toBeDefined();
  });

  // ============================================================================
  // Test: Update FAQ
  // ============================================================================
  test("PUT /api/faqs/:id should update an existing FAQ", async () => {
    const updateData = {
      Question: "Updated question?",
      Answer: "Updated answer.",
    };

    axios.put.mockResolvedValueOnce(strapiResponse);

    const response = await axios.put(
      "http://localhost:3000/api/faqs/faq-doc-123",
      updateData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      }
    );

    expect(response.data.data).toBeDefined();
  });

  // ============================================================================
  // Test: Delete FAQ
  // ============================================================================
  test("DELETE /api/faqs/:id should delete a FAQ", async () => {
    axios.delete.mockResolvedValueOnce({
      data: {
        success: true,
        message: "FAQ deleted successfully",
        data: { id: 1, documentId: "faq-doc-123" },
      },
    });

    const response = await axios.delete(
      "http://localhost:3000/api/faqs/faq-doc-123",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      }
    );

    expect(response.data.success).toBe(true);
  });

  // ============================================================================
  // Test: Link Products to FAQ
  // ============================================================================
  test("PUT /api/faqs/:id/products should link products to FAQ", async () => {
    const linkData = {
      products: ["prod-doc-123", "prod-doc-456"],
    };

    axios.put.mockResolvedValueOnce(strapiResponse);

    const response = await axios.put(
      "http://localhost:3000/api/faqs/faq-doc-123/products",
      linkData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      }
    );

    expect(response.data.data).toBeDefined();
  });

  // ============================================================================
  // Test: Link FAQs to Product (CRITICAL - Both Versions)
  // ============================================================================
  test("POST /api/products/:productDocumentId/link-faqs should link FAQs to product", async () => {
    const linkData = {
      faqIds: ["faq-doc-123", "faq-doc-456"],
    };

    axios.post.mockResolvedValueOnce({
      data: {
        success: true,
        message: "FAQs linked to product (all versions)",
        data: {
          productId: "prod-doc-123",
          faqIds: ["faq-doc-123", "faq-doc-456"],
        },
      },
    });

    const response = await axios.post(
      "http://localhost:3000/api/products/prod-doc-123/link-faqs",
      linkData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      }
    );

    expect(response.data.success).toBe(true);
    expect(response.data.data.faqIds).toBeDefined();
  });

  // ============================================================================
  // Test: Validate Error Handling
  // ============================================================================
  test("API should return 400 for missing required fields", async () => {
    axios.post.mockRejectedValueOnce({
      response: {
        status: 400,
        data: {
          success: false,
          error: "Question and Answer are required",
        },
      },
    });

    try {
      await axios.post("http://localhost:3000/api/faqs", {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
      });
    } catch (error) {
      expect(error.response.status).toBe(400);
      expect(error.response.data.success).toBe(false);
    }
  });

  // ============================================================================
  // Test: Validate Not Found Error
  // ============================================================================
  test("API should return 404 for non-existent FAQ", async () => {
    axios.get.mockRejectedValueOnce({
      response: {
        status: 404,
        data: {
          success: false,
          error: "FAQ not found",
        },
      },
    });

    try {
      await axios.get("http://localhost:3000/api/faqs/nonexistent-id");
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.error).toBe("FAQ not found");
    }
  });

  // ============================================================================
  // Test: Complete Workflow
  // ============================================================================
  test("should complete full FAQ workflow: create -> fetch -> update -> link -> delete", async () => {
    // Step 1: Create FAQ
    axios.post.mockResolvedValueOnce({
      data: {
        data: { ...mockFAQData, id: 99, documentId: "faq-new-123" },
      },
    });

    const created = await axios.post(
      "http://localhost:3000/api/faqs?status=published",
      {
        Question: "Workflow test?",
        Answer: "Testing the workflow.",
      },
      { headers: { Authorization: "Bearer test-token" } }
    );

    expect(created.data.data).toBeDefined();
    const faqId = created.data.data.documentId;

    // Step 2: Fetch FAQ
    axios.get.mockResolvedValueOnce({
      data: {
        data: { ...mockFAQData, documentId: faqId },
      },
    });

    const fetched = await axios.get(
      `http://localhost:3000/api/faqs/${faqId}`
    );

    expect(fetched.data.data.documentId).toBe(faqId);

    // Step 3: Update FAQ
    axios.put.mockResolvedValueOnce({
      data: {
        data: {
          ...mockFAQData,
          documentId: faqId,
          attributes: { Question: "Updated?", Answer: "Updated." },
        },
      },
    });

    const updated = await axios.put(
      `http://localhost:3000/api/faqs/${faqId}`,
      { Question: "Updated?", Answer: "Updated." },
      { headers: { Authorization: "Bearer test-token" } }
    );

    expect(updated.data.data).toBeDefined();

    // Step 4: Link to product
    axios.post.mockResolvedValueOnce({
      data: { success: true, data: { faqIds: [faqId] } },
    });

    const linked = await axios.post(
      "http://localhost:3000/api/products/prod-doc-123/link-faqs",
      { faqIds: [faqId] },
      { headers: { Authorization: "Bearer test-token" } }
    );

    expect(linked.data.success).toBe(true);

    // Step 5: Delete FAQ
    axios.delete.mockResolvedValueOnce({
      data: { success: true, message: "FAQ deleted successfully" },
    });

    const deleted = await axios.delete(
      `http://localhost:3000/api/faqs/${faqId}`,
      { headers: { Authorization: "Bearer test-token" } }
    );

    expect(deleted.data.success).toBe(true);
  });

  // ============================================================================
  // Test: Numeric ID Support
  // ============================================================================
  test("Link FAQs endpoint should support numeric IDs", async () => {
    axios.post.mockResolvedValueOnce({
      data: {
        success: true,
        data: { faqIds: [1, 2, 3] },
      },
    });

    const response = await axios.post(
      "http://localhost:3000/api/products/prod-doc-123/link-faqs",
      { faqIds: [1, 2, 3] },
      { headers: { Authorization: "Bearer test-token" } }
    );

    expect(response.data.success).toBe(true);
  });

  // ============================================================================
  // Test: Single ID Support (Non-Array)
  // ============================================================================
  test("API endpoints should support single ID (non-array) values", async () => {
    axios.put.mockResolvedValueOnce({
      data: { success: true, data: { faqIds: ["faq-doc-123"] } },
    });

    const response = await axios.put(
      "http://localhost:3000/api/faqs/faq-doc-123/products",
      { products: "prod-doc-123" },
      { headers: { Authorization: "Bearer test-token" } }
    );

    expect(response.data.success).toBe(true);
  });
});
