// utils/apiConfig.js

export const BASE_API_URL = "http://localhost:3000";
export const STRAPI_URL = "http://localhost:1337";

// API Endpoints
export const ENDPOINTS = {
  LOGIN: `${BASE_API_URL}/auth/login`,
  RESET_PASSWORD: `${BASE_API_URL}/auth/reset-password`,
  UPDATE_PASSWORD: `${BASE_API_URL}/auth/update-password`,
  PRODUCTS: `${BASE_API_URL}/products`,
  DELETE_PRODUCT: (id) => `${BASE_API_URL}/products/${id}`,
  UPLOAD: `${STRAPI_URL}/api/upload`
};
