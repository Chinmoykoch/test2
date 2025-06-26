// Environment configuration
// This file centralizes all environment variable access

export const env = {
  // Backend Configuration
  BACKEND_URL: process.env.NEXT_PUBLIC_BACKEND_URL || 'https://backend-rakj.onrender.com',
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_BACKEND_URL || 'https://backend-rakj.onrender.com',
  
  // App Configuration
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV || 'development',
  
  // Razorpay Configuration
  RAZORPAY_KEY_ID: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET || '',
  
  // News API Configuration
  NEWS_API_KEY: process.env.NEXT_PUBLIC_NEWS_API_KEY || '',
  
  // Database Configuration
  MONGODB_URI: process.env.MONGODB_URI || '',
  DB_URI: process.env.DB_URI || '',
  
  // Auth0 Configuration
  AUTH0_SECRET: process.env.AUTH0_SECRET || '',
  AUTH0_BASE_URL: process.env.AUTH0_BASE_URL || '',
  AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL || '',
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || '',
  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || '',
  
  // Email Configuration
  SMTP_HOST: process.env.SMTP_HOST || '',
  SMTP_PORT: process.env.SMTP_PORT || '587',
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  
  // Other Configuration
  FORMSPREE_ENDPOINT: process.env.FORMSPREE_ENDPOINT || '',
};

// Helper functions to check if required environment variables are set
export const validateEnv = () => {
  const requiredEnvVars = [
    'NEXT_PUBLIC_BACKEND_URL',
  ];
  
  const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn('Missing required environment variables:', missingVars);
  }
  
  return missingVars.length === 0;
};

// Check if we're in production
export const isProduction = env.NODE_ENV === 'production';

// Check if we're in development
export const isDevelopment = env.NODE_ENV === 'development';

// Export individual environment variables for convenience
export const {
  BACKEND_URL,
  API_BASE_URL,
  APP_URL,
  RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET,
  NEWS_API_KEY,
  MONGODB_URI,
  DB_URI,
  NODE_ENV,
} = env;

export default env;
