// Environment configuration for the backend/database
export const DB_URI = process.env.MONGODB_URI || process.env.DB_URI || '';
export const NODE_ENV = process.env.NODE_ENV || 'development';
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || `${BACKEND_URL}/api`;

// Validate required environment variables
if (!DB_URI && NODE_ENV !== 'development') {
  console.warn('Warning: MONGODB_URI or DB_URI not set. Database connection may fail.');
}

const envConfig = {
  DB_URI,
  NODE_ENV,
  BACKEND_URL,
  API_BASE_URL,
};

export default envConfig;
