const request = require("supertest");
const axios = require("axios");
const app = require("../src/app");

// Mock axios for Strapi API calls
jest.mock("axios");

// Mock the requireAuth middleware to allow tests without authentication
jest.mock("../src/middleware/authMiddleware", () => ({
  requireAuth: (req, res, next) => next(),
}));

const BASE_URL = "http://localhost:3000/api";

describe("FAQ API Endpoints", () => {
  const mockFAQData = {
    id: 1,
    documentId: "faq-doc-123",
    attributes: {
      Question: "What is this product?",
      Answer: "This is a test product answer.",
      products: {
        data: [],
      },
    },
  };

  const mockFAQResponse = {
    data: {
      data: mockFAQData,
    },
  };

  const mockFAQsListResponse = {
    data: {
      data: [mockFAQData, { ...mockFAQData, id: 2, documentId: "faq-doc-456" }],
      meta: { pagination: { page: 1, pageSize: 100, total: 2 } },
    },
  };

  // ============================================================================
  // GET /faqs - Fetch all FAQs
  // ============================================================================
  describe("GET /faqs - Fetch all FAQs", () => {
    it("should fetch all FAQs with default pagination", async () => {
      axios.get.mockResolvedValueOnce(mockFAQsListResponse);

      const res = await request(app)
        .get("/api/faqs")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
      expect(res.body.data.length).toBeGreaterThan(0);
      expect(res.body.meta).toBeDefined();
    });

    it("should fetch FAQs with custom pagination", async () => {
      axios.get.mockResolvedValueOnce(mockFAQsListResponse);

      const res = await request(app)
        .get("/api/faqs?page=1&pageSize=50")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
    });

    it("should fetch FAQs without populating relationships", async () => {
      const minimalResponse = {
        data: {
          data: [
            { id: 1, documentId: "faq-doc-123", attributes: { Question: "Test?", Answer: "Test." } },
          ],
          meta: { pagination: { page: 1, pageSize: 100, total: 1 } },
        },
      };
      axios.get.mockResolvedValueOnce(minimalResponse);

      const res = await request(app)
        .get("/api/faqs?populate=false")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
    });

    it("should handle errors gracefully when fetching FAQs", async () => {
      axios.get.mockRejectedValueOnce(new Error("Network error"));

      const res = await request(app)
        .get("/api/faqs")
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to fetch FAQs");
    });
  });

  // ============================================================================
  // GET /faqs/:id - Fetch a specific FAQ
  // ============================================================================
  describe("GET /faqs/:id - Fetch a specific FAQ", () => {
    it("should fetch a specific FAQ by ID", async () => {
      axios.get.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .get("/api/faqs/faq-doc-123")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data.documentId).toBe("faq-doc-123");
      expect(res.body.data.attributes.Question).toBe("What is this product?");
    });

    it("should return 404 if FAQ not found", async () => {
      axios.get.mockResolvedValueOnce({ data: { data: null } });

      const res = await request(app)
        .get("/api/faqs/nonexistent-id")
        .expect(404);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("FAQ not found");
    });

    it("should handle errors when fetching a specific FAQ", async () => {
      axios.get.mockRejectedValueOnce(new Error("Strapi error"));

      const res = await request(app)
        .get("/api/faqs/faq-doc-123")
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to fetch FAQ");
    });

    it("should populate product relationships when fetching a specific FAQ", async () => {
      const faqWithProducts = {
        data: {
          data: {
            ...mockFAQData,
            attributes: {
              ...mockFAQData.attributes,
              products: {
                data: [
                  { id: 1, documentId: "prod-123", attributes: { name: "Product 1" } },
                ],
              },
            },
          },
        },
      };
      axios.get.mockResolvedValueOnce(faqWithProducts);

      const res = await request(app)
        .get("/api/faqs/faq-doc-123")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data.attributes.products).toBeDefined();
    });
  });

  // ============================================================================
  // POST /faqs - Create a new FAQ
  // ============================================================================
  describe("POST /faqs - Create a new FAQ", () => {
    it("should create a new FAQ with Question and Answer", async () => {
      const newFAQData = {
        Question: "How to use this product?",
        Answer: "Here are the usage instructions...",
      };

      axios.post.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .post("/api/faqs")
        .send(newFAQData)
        .expect(201);

      expect(res.body.success).toBe(true);
      expect(res.body.data.documentId).toBeDefined();
    });

    it("should create a FAQ as draft when status=draft", async () => {
      const newFAQData = {
        Question: "Draft question?",
        Answer: "Draft answer.",
      };

      axios.post.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .post("/api/faqs?status=draft")
        .send(newFAQData)
        .expect(201);

      expect(res.body.success).toBe(true);
    });

    it("should create a FAQ as published when status=published", async () => {
      const newFAQData = {
        Question: "Published question?",
        Answer: "Published answer.",
      };

      axios.post.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .post("/api/faqs?status=published")
        .send(newFAQData)
        .expect(201);

      expect(res.body.success).toBe(true);
    });

    it("should fail when Question is missing", async () => {
      const invalidData = {
        Answer: "No question provided.",
      };

      const res = await request(app)
        .post("/api/faqs")
        .send(invalidData)
        .expect(400);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain("Question and Answer are required");
    });

    it("should fail when Answer is missing", async () => {
      const invalidData = {
        Question: "Where is the answer?",
      };

      const res = await request(app)
        .post("/api/faqs")
        .send(invalidData)
        .expect(400);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toContain("Question and Answer are required");
    });

    it("should fail when both Question and Answer are missing", async () => {
      const res = await request(app)
        .post("/api/faqs")
        .send({})
        .expect(400);

      expect(res.body.success).toBe(false);
    });

    it("should handle Strapi errors when creating FAQ", async () => {
      const newFAQData = {
        Question: "Test?",
        Answer: "Test.",
      };

      axios.post.mockRejectedValueOnce(new Error("Strapi validation error"));

      const res = await request(app)
        .post("/api/faqs")
        .send(newFAQData)
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to create FAQ");
    });

    it("should create a FAQ with product links", async () => {
      const newFAQData = {
        Question: "Test question?",
        Answer: "Test answer.",
        products: ["prod-doc-123"],
      };

      axios.post.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .post("/api/faqs")
        .send(newFAQData)
        .expect(201);

      expect(res.body.success).toBe(true);
    });
  });

  // ============================================================================
  // PUT /faqs/:id - Update a FAQ
  // ============================================================================
  describe("PUT /faqs/:id - Update a FAQ", () => {
    it("should update an existing FAQ", async () => {
      const updateData = {
        Question: "Updated question?",
        Answer: "Updated answer.",
      };

      const updatedResponse = {
        data: {
          data: {
            ...mockFAQData,
            attributes: {
              Question: updateData.Question,
              Answer: updateData.Answer,
            },
          },
        },
      };

      axios.put.mockResolvedValueOnce(updatedResponse);

      const res = await request(app)
        .put("/api/faqs/faq-doc-123")
        .send(updateData)
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data.attributes.Question).toBe(updateData.Question);
    });

    it("should update FAQ as draft version", async () => {
      const updateData = {
        Question: "Draft update?",
        Answer: "Draft answer update.",
      };

      axios.put.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .put("/api/faqs/faq-doc-123?status=draft")
        .send(updateData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should update FAQ as published version", async () => {
      const updateData = {
        Question: "Published update?",
        Answer: "Published answer update.",
      };

      axios.put.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .put("/api/faqs/faq-doc-123?status=published")
        .send(updateData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should handle errors when updating FAQ", async () => {
      const updateData = {
        Question: "Test?",
        Answer: "Test.",
      };

      axios.put.mockRejectedValueOnce(new Error("Update failed"));

      const res = await request(app)
        .put("/api/faqs/faq-doc-123")
        .send(updateData)
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to update FAQ");
    });

    it("should update FAQ with product links", async () => {
      const updateData = {
        Question: "Updated?",
        Answer: "Updated.",
        products: ["prod-doc-123", "prod-doc-456"],
      };

      axios.put.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .put("/api/faqs/faq-doc-123")
        .send(updateData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });
  });

  // ============================================================================
  // DELETE /faqs/:id - Delete a FAQ
  // ============================================================================
  describe("DELETE /faqs/:id - Delete a FAQ", () => {
    it("should delete a FAQ successfully", async () => {
      axios.delete.mockResolvedValueOnce({
        data: {
          data: { id: 1, documentId: "faq-doc-123" },
        },
      });

      const res = await request(app)
        .delete("/api/faqs/faq-doc-123")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("FAQ deleted successfully");
    });

    it("should handle errors when deleting FAQ", async () => {
      axios.delete.mockRejectedValueOnce(new Error("Delete failed"));

      const res = await request(app)
        .delete("/api/faqs/faq-doc-123")
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to delete FAQ");
    });
  });

  // ============================================================================
  // GET /products/:productId/faqs - Fetch FAQs by product
  // ============================================================================
  describe("GET /products/:productId/faqs - Fetch FAQs by product", () => {
    it("should fetch all FAQs for a specific product", async () => {
      axios.get.mockResolvedValueOnce({
        data: {
          data: [mockFAQData],
        },
      });

      const res = await request(app)
        .get("/api/products/prod-123/faqs")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toBeInstanceOf(Array);
    });

    it("should return empty array if product has no FAQs", async () => {
      axios.get.mockResolvedValueOnce({
        data: {
          data: [],
        },
      });

      const res = await request(app)
        .get("/api/products/prod-123/faqs")
        .expect(200);

      expect(res.body.success).toBe(true);
      expect(res.body.data).toEqual([]);
    });

    it("should handle errors when fetching FAQs by product", async () => {
      axios.get.mockRejectedValueOnce(new Error("Product not found"));

      const res = await request(app)
        .get("/api/products/prod-123/faqs")
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to fetch FAQs");
    });
  });

  // ============================================================================
  // PUT /faqs/:id/products - Link products to FAQ
  // ============================================================================
  describe("PUT /faqs/:id/products - Link products to FAQ", () => {
    it("should link products to a FAQ", async () => {
      const linkData = {
        products: ["prod-doc-123", "prod-doc-456"],
      };

      axios.put.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .put("/api/faqs/faq-doc-123/products")
        .send(linkData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should unlink all products from a FAQ when empty array provided", async () => {
      const unlinkData = {
        products: [],
      };

      axios.put.mockResolvedValueOnce(mockFAQResponse);

      const res = await request(app)
        .put("/api/faqs/faq-doc-123/products")
        .send(unlinkData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should handle errors when linking products to FAQ", async () => {
      const linkData = {
        products: ["prod-doc-123"],
      };

      axios.put.mockRejectedValueOnce(new Error("Link failed"));

      const res = await request(app)
        .put("/api/faqs/faq-doc-123/products")
        .send(linkData)
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to link products");
    });
  });

  // ============================================================================
  // POST /products/:productDocumentId/link-faqs - Link FAQs to product (all versions)
  // ============================================================================
  describe("POST /products/:productDocumentId/link-faqs - Link FAQs to product", () => {
    it("should link FAQs to a product (all versions)", async () => {
      const linkData = {
        faqIds: ["faq-doc-123", "faq-doc-456"],
      };

      axios.post.mockResolvedValueOnce({
        data: {
          success: true,
          message: "FAQs linked to product",
        },
      });

      const res = await request(app)
        .post("/api/products/prod-doc-123/link-faqs")
        .send(linkData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should unlink all FAQs from product when empty array provided", async () => {
      const unlinkData = {
        faqIds: [],
      };

      axios.post.mockResolvedValueOnce({
        data: {
          success: true,
          message: "All FAQs unlinked from product",
        },
      });

      const res = await request(app)
        .post("/api/products/prod-doc-123/link-faqs")
        .send(unlinkData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should handle errors when linking FAQs to product", async () => {
      const linkData = {
        faqIds: ["faq-doc-123"],
      };

      axios.post.mockRejectedValueOnce(new Error("Link failed"));

      const res = await request(app)
        .post("/api/products/prod-doc-123/link-faqs")
        .send(linkData)
        .expect(500);

      expect(res.body.success).toBe(false);
      expect(res.body.error).toBe("Failed to link FAQs to product");
    });

    it("should support numeric FAQ IDs in link request", async () => {
      const linkData = {
        faqIds: [1, 2, 3],
      };

      axios.post.mockResolvedValueOnce({
        data: {
          success: true,
        },
      });

      const res = await request(app)
        .post("/api/products/prod-doc-123/link-faqs")
        .send(linkData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });

    it("should handle single FAQ ID (non-array)", async () => {
      const linkData = {
        faqIds: "faq-doc-123",
      };

      axios.post.mockResolvedValueOnce({
        data: {
          success: true,
        },
      });

      const res = await request(app)
        .post("/api/products/prod-doc-123/link-faqs")
        .send(linkData)
        .expect(200);

      expect(res.body.success).toBe(true);
    });
  });

  // ============================================================================
  // Complete Workflow Tests
  // ============================================================================
  describe("Complete FAQ Workflow", () => {
    it("should complete full workflow: create -> fetch -> update -> link -> delete", async () => {
      // Step 1: Create FAQ
      axios.post.mockResolvedValueOnce({
        data: {
          data: {
            ...mockFAQData,
            id: 1,
            documentId: "faq-new-123",
          },
        },
      });

      const createRes = await request(app)
        .post("/api/faqs")
        .send({
          Question: "New FAQ?",
          Answer: "New answer.",
        })
        .expect(201);

      expect(createRes.body.success).toBe(true);
      const newFAQId = createRes.body.data.documentId;

      // Step 2: Fetch FAQ
      axios.get.mockResolvedValueOnce({
        data: {
          data: { ...mockFAQData, documentId: newFAQId },
        },
      });

      const fetchRes = await request(app)
        .get(`/api/faqs/${newFAQId}`)
        .expect(200);

      expect(fetchRes.body.success).toBe(true);

      // Step 3: Update FAQ
      axios.put.mockResolvedValueOnce({
        data: {
          data: {
            ...mockFAQData,
            documentId: newFAQId,
            attributes: {
              Question: "Updated FAQ?",
              Answer: "Updated answer.",
            },
          },
        },
      });

      const updateRes = await request(app)
        .put(`/api/faqs/${newFAQId}`)
        .send({
          Question: "Updated FAQ?",
          Answer: "Updated answer.",
        })
        .expect(200);

      expect(updateRes.body.success).toBe(true);

      // Step 4: Link to product
      axios.post.mockResolvedValueOnce({
        data: {
          success: true,
        },
      });

      const linkRes = await request(app)
        .post("/api/products/prod-doc-123/link-faqs")
        .send({
          faqIds: [newFAQId],
        })
        .expect(200);

      expect(linkRes.body.success).toBe(true);

      // Step 5: Delete FAQ
      axios.delete.mockResolvedValueOnce({
        data: {
          data: { documentId: newFAQId },
        },
      });

      const deleteRes = await request(app)
        .delete(`/api/faqs/${newFAQId}`)
        .expect(200);

      expect(deleteRes.body.success).toBe(true);
    });
  });
});
