// API utility functions for backend communication
import axios from 'axios';

// TypeScript interfaces
export interface Testimonial {
  _id: string;
  name: string;
  feedback: string;
  imageUrl: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface TestimonialsResponse {
  success: boolean;
  data: Testimonial[];
}

export interface BlogAuthor {
  name: string;
  image: string;
  _id: string;
}

export interface BlogSection {
  id: string;
  title: string;
  content: string;
  image?: string;
  highlights?: string[];
  _id: string;
}

export interface BlogPost {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  category: string;
  date: string;
  readTime: string;
  author: BlogAuthor;
  sections: BlogSection[];
  relatedPosts: string[];
  isPublished: boolean;
  views: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface BlogsResponse {
  success: boolean;
  data: BlogPost[];
}

// Get the backend URL from environment variables
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || BACKEND_URL;

// Create axios instance with default configuration
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        // Redirect to login page if needed
        // window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

// API endpoints
export const API_ENDPOINTS = {
  // Authentication
  LOGIN: '/api/v1/auth/login',
  REGISTER: '/api/v1/auth/register',
  LOGOUT: '/api/v1/auth/logout',

  // User management
  PROFILE: '/api/v1/user/profile',
  UPDATE_PROFILE: '/api/v1/user/profile',

  // Admissions
  SUBMIT_APPLICATION: '/api/v1/admissions/apply',
  GET_APPLICATION_STATUS: '/api/v1/admissions/status',

  // Courses
  GET_COURSES: '/api/v1/courses',
  GET_COURSE_DETAILS: '/api/v1/courses',

  // Payments
  CREATE_PAYMENT: '/api/v1/payments/create',
  VERIFY_PAYMENT: '/api/v1/payments/verify',

  // Contact/Enquiry
  SUBMIT_ENQUIRY: '/api/v1/contact/enquiry',
  SUBMIT_COUNSELING_REQUEST: '/api/v1/contact/counseling',
  ADD_CONTACT: '/api/v1/contact/addcontact',

  // News/Blog
  GET_NEWS: '/api/v1/news',
  GET_BLOG_POSTS: '/api/v1/blog',

  // Gallery
  GET_GALLERY_IMAGES: '/api/v1/gallery',

  // Testimonials
  GET_TESTIMONIALS: '/api/v1/testimonials/gettestimonials',

  // Blog
  GET_BLOGS: '/api/v1/blog/getblogs',
  GET_ALL_BLOGS: '/api/v1/blog/getallblogs',
  GET_PUBLISHED_BLOGS: '/api/v1/blog/getpublishedblogs',
  GET_POPULAR_BLOGS: '/api/v1/blog/getpopularblogs',
  GET_BLOG_BY_ID: '/api/v1/blog/getblogbyid',
  GET_BLOG_BY_SLUG: '/api/v1/blog/getblogbyslug',
  GET_BLOGS_BY_CATEGORY: '/api/v1/blog/getblogsbycategory',

  // General
  HEALTH_CHECK: '/api/v1/health',
};

// Helper functions for common API calls
export const apiHelpers = {
  // Health check
  healthCheck: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.HEALTH_CHECK);
      return response.data;
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  },

  // Submit application
  submitApplication: async (applicationData: any) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.SUBMIT_APPLICATION, applicationData);
      return response.data;
    } catch (error) {
      console.error('Application submission failed:', error);
      throw error;
    }
  },

  // Submit enquiry
  submitEnquiry: async (enquiryData: any) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.SUBMIT_ENQUIRY, enquiryData);
      return response.data;
    } catch (error) {
      console.error('Enquiry submission failed:', error);
      throw error;
    }
  },

  // Submit contact form
  submitContact: async (contactData: any) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.ADD_CONTACT, contactData);
      return response.data;
    } catch (error) {
      console.error('Contact submission failed:', error);
      throw error;
    }
  },

  // Get courses
  getCourses: async () => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.GET_COURSES);
      return response.data;
    } catch (error) {
      console.error('Failed to fetch courses:', error);
      throw error;
    }
  },

  // Get testimonials
  getTestimonials: async (): Promise<Testimonial[]> => {
    try {
      const response = await apiClient.get<TestimonialsResponse>(API_ENDPOINTS.GET_TESTIMONIALS);

      // Check if response has the expected structure
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected testimonials response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch testimonials:', error);
      throw error;
    }
  },

  // Create payment
  createPayment: async (paymentData: any) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.CREATE_PAYMENT, paymentData);
      return response.data;
    } catch (error) {
      console.error('Payment creation failed:', error);
      throw error;
    }
  },

  // Get published blogs (sorted by date)
  getBlogs: async (): Promise<BlogPost[]> => {
    try {
      const response = await apiClient.get<BlogsResponse>(API_ENDPOINTS.GET_BLOGS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected blogs response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch blogs:', error);
      throw error;
    }
  },

  // Get blog by slug (increments views)
  getBlogBySlug: async (slug: string): Promise<BlogPost | null> => {
    try {
      const response = await apiClient.get<{success: boolean; data: BlogPost}>(`${API_ENDPOINTS.GET_BLOG_BY_SLUG}/${slug}`);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        console.warn('Blog not found:', slug);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch blog by slug:', error);
      throw error;
    }
  },

  // Get blogs by category
  getBlogsByCategory: async (category: string): Promise<BlogPost[]> => {
    try {
      const response = await apiClient.get<BlogsResponse>(`${API_ENDPOINTS.GET_BLOGS_BY_CATEGORY}/${category}`);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected blogs response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch blogs by category:', error);
      throw error;
    }
  },

  // Get popular blogs (top 10 most viewed)
  getPopularBlogs: async (): Promise<BlogPost[]> => {
    try {
      const response = await apiClient.get<BlogsResponse>(API_ENDPOINTS.GET_POPULAR_BLOGS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected popular blogs response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch popular blogs:', error);
      throw error;
    }
  },

  // Get blog by ID
  getBlogById: async (id: string): Promise<BlogPost | null> => {
    try {
      const response = await apiClient.get<{success: boolean; data: BlogPost}>(`${API_ENDPOINTS.GET_BLOG_BY_ID}/${id}`);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        console.warn('Blog not found:', id);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch blog by ID:', error);
      throw error;
    }
  },
};

// Environment configuration helper
export const config = {
  backendUrl: BACKEND_URL,
  apiBaseUrl: API_BASE_URL,
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
};

export default apiClient;
