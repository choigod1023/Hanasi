// API Base URLs
export const API_BASE_URL = import.meta.env.DEV
  ? import.meta.env.VITE_API_BASE_URL_LOCAL || "http://localhost:3001/api"
  : import.meta.env.VITE_API_BASE_URL_PRODUCTION ||
    "https://hanasi-server.vercel.app/api";
