// API utility functions for backend communication
import axios from 'axios';
import React, { useState, useCallback, useEffect } from 'react';

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

export interface StudentClub {
  _id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface StudentClubsResponse {
  success: boolean;
  data: StudentClub[];
}

export interface CampusEvent {
  _id: string;
  title: string;
  description: string;
  category: 'arts-culture' | 'sports-recreation' | 'organizations';
  image: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface CampusEventsResponse {
  success: boolean;
  data: CampusEvent[];
}

export interface Membership {
  _id: string;
  src: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface MembershipResponse {
  success: boolean;
  data: Membership[];
}

export interface Advisor {
  _id: string;
  name: string;
  role: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AdvisorsResponse {
  success: boolean;
  data: Advisor[];
}

export interface Enquiry {
  _id: string;
  name: string;
  phoneNumber: string;
  email: string;
  city: string;
  course: string;
  createdAt: string;
  status: 'new' | 'contacted' | 'enrolled' | 'not-interested';
  message?: string;
  source?: string;
  updatedAt?: string;
}

export interface EnquiriesResponse {
  success: boolean;
  data: Enquiry[];
}

export interface EnquiryResponse {
  success: boolean;
  data: Enquiry;
}

export interface UpdateEnquiryStatusData {
  status: 'new' | 'contacted' | 'enrolled' | 'not-interested';
  notes?: string;
}

export interface EnquiryStats {
  total: number;
  new: number;
  contacted: number;
  enrolled: number;
  notInterested: number;
}

export interface EnquiryStatsResponse {
  success: boolean;
  data: EnquiryStats;
}

// About Us API Interfaces
export interface AboutUsHeroImage {
  _id?: string;
  imageUrl: string;
  altText: string;
  order: number;
}

export interface AboutUsStatistic {
  _id?: string;
  number: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

export interface AboutUsCoreValue {
  _id?: string;
  title: string;
  description: string;
  imageUrl: string;
  order: number;
}

export interface AboutUsCampusImage {
  _id?: string;
  imageUrl: string;
  altText: string;
  order: number;
}

export interface AboutUsContent {
  _id?: string;
  sectionType: 'who-we-are' | 'about-us' | 'vision' | 'mission' | 'core-values-text';
  title: string;
  content: string;
  imageUrl?: string;
  order: number;
  isActive: boolean;
}

export interface AboutUsResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface AboutUsListResponse<T> {
  success: boolean;
  data: T[];
  message?: string;
}

// Life at Inframe API Interfaces
export interface LifeAtInframeSection {
  _id?: string;
  sectionType: 'hero' | 'welcome' | 'services' | 'clubs' | 'sports' | 'events' | 'gallery' | 'tour';
  title: string;
  description?: string;
  content?: string;
  images?: string[];
  order: number;
  isActive: boolean;
}

export interface StudentService {
  _id?: string;
  title: string;
  description: string;
  icon?: string;
  order: number;
}

export interface SportsFacility {
  _id?: string;
  name: string;
  description?: string;
  image: string;
  category?: string;
}

export interface GalleryImage {
  _id?: string;
  title: string;
  imageUrl: string;
  category: string;
  order: number;
}

// Get the backend URL from environment variables
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://backend-rakj.onrender.com';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || BACKEND_URL;

// Create axios instance with default configuration
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Debug logging
console.log('API Client Configuration:', {
  baseURL: API_BASE_URL,
  backendURL: BACKEND_URL,
  apiBaseURL: API_BASE_URL
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

  // Student Clubs
  GET_STUDENT_CLUBS: '/api/v1/studentclub/getstudentclubs',

  // Campus Events
  GET_CAMPUS_EVENTS: '/api/v1/campusevent/getcampusevents',

  // Membership
  GET_MEMBERSHIP: '/api/v1/membership/getMembership',

  // Advisors
  GET_ADVISORS: '/api/v1/advisor/getadvisors',
  GET_ADVISOR_BY_ID: '/api/v1/advisor/getadvisorsbyid',
  CREATE_ADVISOR: '/api/v1/advisor/addadvisor',
  UPDATE_ADVISOR: '/api/v1/advisor/updateadvisor',
  DELETE_ADVISOR: '/api/v1/advisor/deleteadvisor',

  // Enquiries
  GET_ENQUIRIES: '/api/v1/enquiries',
  GET_ENQUIRY_BY_ID: '/api/v1/enquiries',
  UPDATE_ENQUIRY_STATUS: '/api/v1/enquiries',
  DELETE_ENQUIRY: '/api/v1/enquiries',
  GET_ENQUIRY_STATS: '/api/v1/enquiries/stats',

  // About Us
  // Hero Gallery
  GET_HERO_IMAGES: '/api/v1/about-us/hero-images/getheroimages',
  ADD_HERO_IMAGE: '/api/v1/about-us/hero-images/addheroimage',
  UPDATE_HERO_IMAGE: '/api/v1/about-us/hero-images/updateheroimage',
  DELETE_HERO_IMAGE: '/api/v1/about-us/hero-images/deleteheroimage',
  
  // Content Sections
  GET_CONTENT_BY_TYPE: '/api/v1/about-us/content/getcontentbytype',
  ADD_OR_UPDATE_CONTENT: '/api/v1/about-us/content/addorupdatecontent',
  
  // Statistics
  GET_STATISTICS: '/api/v1/about-us/statistics/getstatistics',
  ADD_STATISTIC: '/api/v1/about-us/statistics/addstatistic',
  UPDATE_STATISTIC: '/api/v1/about-us/statistics/updatestatistic',
  DELETE_STATISTIC: '/api/v1/about-us/statistics/deletestatistic',
  
  // Core Values
  GET_CORE_VALUES: '/api/v1/about-us/core-values/getcorevalues',
  ADD_CORE_VALUE: '/api/v1/about-us/core-values/addcorevalue',
  UPDATE_CORE_VALUE: '/api/v1/about-us/core-values/updatecorevalue',
  DELETE_CORE_VALUE: '/api/v1/about-us/core-values/deletecorevalue',
  
  // Campus Images
  GET_CAMPUS_IMAGES: '/api/v1/about-us/campus-images/getcampusimages',
  ADD_CAMPUS_IMAGE: '/api/v1/about-us/campus-images/addcampusimage',
  UPDATE_CAMPUS_IMAGE: '/api/v1/about-us/campus-images/updatecampusimage',
  DELETE_CAMPUS_IMAGE: '/api/v1/about-us/campus-images/deletecampusimage',

  // Life at Inframe Sections
  GET_LIFE_AT_INFRAME_SECTIONS: '/api/v1/lifeatinframesection/getlifeatinframesections',
  ADD_LIFE_AT_INFRAME_SECTION: '/api/v1/lifeatinframesection/addlifeatinframesection',
  UPDATE_LIFE_AT_INFRAME_SECTION: '/api/v1/lifeatinframesection/updatelifeatinframesection',
  DELETE_LIFE_AT_INFRAME_SECTION: '/api/v1/lifeatinframesection/deletelifeatinframesection',

  // Student Services
  GET_STUDENT_SERVICES: '/api/v1/studentservice/getstudentservices',
  ADD_STUDENT_SERVICE: '/api/v1/studentservice/addstudentservice',
  UPDATE_STUDENT_SERVICE: '/api/v1/studentservice/updatestudentservice',
  DELETE_STUDENT_SERVICE: '/api/v1/studentservice/deletestudentservice',

  // Sports Facilities
  GET_SPORTS_FACILITIES: '/api/v1/sportsfacility/getsportsfacilities',
  ADD_SPORTS_FACILITY: '/api/v1/sportsfacility/addsportsfacility',
  UPDATE_SPORTS_FACILITY: '/api/v1/sportsfacility/updatesportsfacility',
  DELETE_SPORTS_FACILITY: '/api/v1/sportsfacility/deletesportsfacility',

  // Life at Inframe Gallery Images
  GET_LIFE_AT_INFRAME_GALLERY: '/api/v1/galleryimage/getgalleryimages',
  ADD_LIFE_AT_INFRAME_GALLERY_IMAGE: '/api/v1/galleryimage/addgalleryimage',
  UPDATE_LIFE_AT_INFRAME_GALLERY_IMAGE: '/api/v1/galleryimage/updategalleryimage',
  DELETE_LIFE_AT_INFRAME_GALLERY_IMAGE: '/api/v1/galleryimage/deletegalleryimage',

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
      console.log('Submitting enquiry with data:', enquiryData);
      console.log('Using endpoint:', API_ENDPOINTS.GET_ENQUIRIES);
      console.log('Full URL:', `${API_BASE_URL}${API_ENDPOINTS.GET_ENQUIRIES}`);
      
      const response = await apiClient.post(API_ENDPOINTS.GET_ENQUIRIES, enquiryData);
      console.log('Enquiry submission response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Enquiry submission failed:', error);
      console.error('Error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText
      });
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

  // Get student clubs
  getStudentClubs: async (): Promise<StudentClub[]> => {
    try {
      const response = await apiClient.get<StudentClubsResponse>(API_ENDPOINTS.GET_STUDENT_CLUBS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected student clubs response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch student clubs:', error);
      throw error;
    }
  },

  // Get campus events
  getCampusEvents: async (): Promise<CampusEvent[]> => {
    try {
      const response = await apiClient.get<CampusEventsResponse>(API_ENDPOINTS.GET_CAMPUS_EVENTS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected campus events response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch campus events:', error);
      throw error;
    }
  },

  // Get memberships
  getMemberships: async (): Promise<Membership[]> => {
    try {
      const response = await apiClient.get<MembershipResponse>(API_ENDPOINTS.GET_MEMBERSHIP);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected membership response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch memberships:', error);
      throw error;
    }
  },

  // Get advisors
  getAdvisors: async (): Promise<Advisor[]> => {
    try {
      const response = await apiClient.get<AdvisorsResponse>(API_ENDPOINTS.GET_ADVISORS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected advisors response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch advisors:', error);
      throw error;
    }
  },

  // Get advisor by ID
  getAdvisorById: async (id: string): Promise<Advisor | null> => {
    try {
      const response = await apiClient.get<{success: boolean; data: Advisor}>(`${API_ENDPOINTS.GET_ADVISOR_BY_ID}/${id}`);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        console.warn('Advisor not found:', id);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch advisor by ID:', error);
      throw error;
    }
  },

  // Create new advisor
  createAdvisor: async (advisorData: Omit<Advisor, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<Advisor> => {
    try {
      const response = await apiClient.post<{success: boolean; data: Advisor}>(API_ENDPOINTS.CREATE_ADVISOR, advisorData);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Failed to create advisor');
      }
    } catch (error) {
      console.error('Failed to create advisor:', error);
      throw error;
    }
  },

  // Update advisor
  updateAdvisor: async (id: string, advisorData: Partial<Omit<Advisor, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<Advisor> => {
    try {
      const response = await apiClient.put<{success: boolean; data: Advisor}>(`${API_ENDPOINTS.UPDATE_ADVISOR}/${id}`, advisorData);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Failed to update advisor');
      }
    } catch (error) {
      console.error('Failed to update advisor:', error);
      throw error;
    }
  },

  // Delete advisor
  deleteAdvisor: async (id: string): Promise<boolean> => {
    try {
      const response = await apiClient.delete<{success: boolean; message: string}>(`${API_ENDPOINTS.DELETE_ADVISOR}/${id}`);
      if (response.data && response.data.success) {
        return true;
      } else {
        throw new Error('Failed to delete advisor');
      }
    } catch (error) {
      console.error('Failed to delete advisor:', error);
      throw error;
    }
  },

  // Get all enquiries
  getEnquiries: async (): Promise<Enquiry[]> => {
    try {
      const response = await apiClient.get<EnquiriesResponse>(API_ENDPOINTS.GET_ENQUIRIES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected enquiries response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch enquiries:', error);
      throw error;
    }
  },

  // Get enquiry by ID
  getEnquiryById: async (id: string): Promise<Enquiry | null> => {
    try {
      const response = await apiClient.get<EnquiryResponse>(`${API_ENDPOINTS.GET_ENQUIRY_BY_ID}/${id}`);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        console.warn('Enquiry not found:', id);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch enquiry by ID:', error);
      throw error;
    }
  },

  // Update enquiry status
  updateEnquiryStatus: async (id: string, statusData: UpdateEnquiryStatusData): Promise<Enquiry> => {
    try {
      const response = await apiClient.patch<EnquiryResponse>(`${API_ENDPOINTS.UPDATE_ENQUIRY_STATUS}/${id}/status`, statusData);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Failed to update enquiry status');
      }
    } catch (error) {
      console.error('Failed to update enquiry status:', error);
      throw error;
    }
  },

  // Delete enquiry
  deleteEnquiry: async (id: string): Promise<boolean> => {
    try {
      const response = await apiClient.delete<{success: boolean}>(`${API_ENDPOINTS.DELETE_ENQUIRY}/${id}`);
      if (response.data && response.data.success) {
        return true;
      } else {
        throw new Error('Failed to delete enquiry');
      }
    } catch (error) {
      console.error('Failed to delete enquiry:', error);
      throw error;
    }
  },

  // Get enquiry statistics
  getEnquiryStats: async (): Promise<EnquiryStats> => {
    try {
      const response = await apiClient.get<EnquiryStatsResponse>(API_ENDPOINTS.GET_ENQUIRY_STATS);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch enquiry statistics');
      }
    } catch (error) {
      console.error('Failed to fetch enquiry statistics:', error);
      throw error;
    }
  },

  // About Us API Helpers
  // Hero Gallery
  getHeroImages: async (): Promise<AboutUsHeroImage[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<AboutUsHeroImage>>(API_ENDPOINTS.GET_HERO_IMAGES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected hero images response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch hero images:', error);
      throw error;
    }
  },

  // Content Sections
  getContentByType: async (sectionType: string): Promise<AboutUsContent | null> => {
    try {
      const response = await apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/${sectionType}`);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        console.warn('Unexpected content response structure:', response.data);
        return null;
      }
    } catch (error: any) {
      if (error.response?.status === 404) {
        return null;
      }
      console.error('Failed to fetch content:', error);
      throw error;
    }
  },

  // Statistics
  getStatistics: async (): Promise<AboutUsStatistic[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<AboutUsStatistic>>(API_ENDPOINTS.GET_STATISTICS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected statistics response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch statistics:', error);
      throw error;
    }
  },

  // Core Values
  getCoreValues: async (): Promise<AboutUsCoreValue[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<AboutUsCoreValue>>(API_ENDPOINTS.GET_CORE_VALUES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected core values response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch core values:', error);
      throw error;
    }
  },

  // Campus Images
  getCampusImages: async (): Promise<AboutUsCampusImage[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<AboutUsCampusImage>>(API_ENDPOINTS.GET_CAMPUS_IMAGES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected campus images response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch campus images:', error);
      throw error;
    }
  },

  // Get about us data
  getAboutUsData: async () => {
    try {
      const [heroImages, statistics, coreValues, campusImages, whoWeAreContent, aboutUsContent, visionContent, missionContent, coreValuesTextContent] = await Promise.all([
        apiClient.get<AboutUsListResponse<AboutUsHeroImage>>(API_ENDPOINTS.GET_HERO_IMAGES),
        apiClient.get<AboutUsListResponse<AboutUsStatistic>>(API_ENDPOINTS.GET_STATISTICS),
        apiClient.get<AboutUsListResponse<AboutUsCoreValue>>(API_ENDPOINTS.GET_CORE_VALUES),
        apiClient.get<AboutUsListResponse<AboutUsCampusImage>>(API_ENDPOINTS.GET_CAMPUS_IMAGES),
        apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/who-we-are`),
        apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/about-us`),
        apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/vision`),
        apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/mission`),
        apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/core-values-text`)
      ]);

      // Combine all content sections
      const content = [
        whoWeAreContent.data.data,
        aboutUsContent.data.data,
        visionContent.data.data,
        missionContent.data.data,
        coreValuesTextContent.data.data
      ].filter(Boolean); // Remove any null/undefined values

      return {
        heroImages: heroImages.data.data || [],
        statistics: statistics.data.data || [],
        coreValues: coreValues.data.data || [],
        campusImages: campusImages.data.data || [],
        content: content
      };
    } catch (error) {
      console.error('Failed to fetch about us data:', error);
      // Return empty data instead of throwing to prevent page crashes
      return {
        heroImages: [],
        statistics: [],
        coreValues: [],
        campusImages: [],
        content: []
      };
    }
  },

  // Life at Inframe Sections
  getLifeAtInframeSections: async (): Promise<LifeAtInframeSection[]> => {
    try {
      const response = await apiClient.get<{success: boolean; data: LifeAtInframeSection[]}>(API_ENDPOINTS.GET_LIFE_AT_INFRAME_SECTIONS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected life at inframe sections response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch life at inframe sections:', error);
      throw error;
    }
  },

  // Student Services
  getStudentServices: async (): Promise<StudentService[]> => {
    try {
      const response = await apiClient.get<{success: boolean; data: StudentService[]}>(API_ENDPOINTS.GET_STUDENT_SERVICES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected student services response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch student services:', error);
      throw error;
    }
  },

  // Sports Facilities
  getSportsFacilities: async (): Promise<SportsFacility[]> => {
    try {
      const response = await apiClient.get<{success: boolean; data: SportsFacility[]}>(API_ENDPOINTS.GET_SPORTS_FACILITIES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected sports facilities response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch sports facilities:', error);
      throw error;
    }
  },

  // Life at Inframe Gallery Images
  getLifeAtInframeGalleryImages: async (): Promise<GalleryImage[]> => {
    try {
      const response = await apiClient.get<{success: boolean; data: GalleryImage[]}>(API_ENDPOINTS.GET_LIFE_AT_INFRAME_GALLERY);
      console.log('Gallery API response:', response.data);
      
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        console.log('Gallery images found:', response.data.data.length);
        return response.data.data;
      } else {
        console.warn('Unexpected gallery images response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch gallery images:', error);
      // Return empty array instead of throwing to prevent crashes
      return [];
    }
  },
};

// Environment configuration helper
export const config = {
  backendUrl: BACKEND_URL,
  apiBaseUrl: API_BASE_URL,
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://backend-rakj.onrender.com',
};

export default apiClient;

// Custom hook for managing advisors
export const useAdvisors = () => {
  const [advisors, setAdvisors] = React.useState<Advisor[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Fetch all advisors
  const fetchAdvisors = React.useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getAdvisors();
      setAdvisors(data);
    } catch (err: any) {
      setError(err.message || 'Failed to fetch advisors');
    } finally {
      setLoading(false);
    }
  }, []);

  // Get advisor by ID
  const getAdvisorById = React.useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getAdvisorById(id);
      return data;
    } catch (err: any) {
      setError(err.message || 'Failed to fetch advisor');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Create advisor
  const createAdvisor = React.useCallback(async (advisorData: Omit<Advisor, '_id' | 'createdAt' | 'updatedAt' | '__v'>) => {
    setLoading(true);
    setError(null);
    try {
      const newAdvisor = await apiHelpers.createAdvisor(advisorData);
      setAdvisors(prev => [...prev, newAdvisor]);
      return newAdvisor;
    } catch (err: any) {
      setError(err.message || 'Failed to create advisor');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Update advisor
  const updateAdvisor = React.useCallback(async (id: string, advisorData: Partial<Omit<Advisor, '_id' | 'createdAt' | 'updatedAt' | '__v'>>) => {
    setLoading(true);
    setError(null);
    try {
      const updatedAdvisor = await apiHelpers.updateAdvisor(id, advisorData);
      setAdvisors(prev => 
        prev.map(advisor => 
          advisor._id === id ? updatedAdvisor : advisor
        )
      );
      return updatedAdvisor;
    } catch (err: any) {
      setError(err.message || 'Failed to update advisor');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Delete advisor
  const deleteAdvisor = React.useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await apiHelpers.deleteAdvisor(id);
      setAdvisors(prev => prev.filter(advisor => advisor._id !== id));
      return true;
    } catch (err: any) {
      setError(err.message || 'Failed to delete advisor');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  // Load advisors on component mount
  React.useEffect(() => {
    fetchAdvisors();
  }, [fetchAdvisors]);

  return {
    advisors,
    loading,
    error,
    fetchAdvisors,
    getAdvisorById,
    createAdvisor,
    updateAdvisor,
    deleteAdvisor,
  };
};

// Custom hook for managing enquiries
export const useEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiries = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiClient.get<EnquiriesResponse>(API_ENDPOINTS.GET_ENQUIRIES);
      
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        setEnquiries(response.data.data);
      } else {
        setError('Invalid response format');
      }
    } catch (error: any) {
      console.error('Failed to fetch enquiries:', error);
      setError(error.message || 'Failed to fetch enquiries');
    } finally {
      setLoading(false);
    }
  }, []);

  const updateEnquiryStatus = useCallback(async (id: string, status: string, notes?: string) => {
    try {
      const response = await apiClient.put(`${API_ENDPOINTS.UPDATE_ENQUIRY_STATUS}/${id}`, {
        status,
        notes
      });
      
      if (response.data && response.data.success) {
        // Refresh the enquiries list
        await fetchEnquiries();
        return response.data.data;
      } else {
        throw new Error('Failed to update enquiry status');
      }
    } catch (error: any) {
      console.error('Failed to update enquiry status:', error);
      throw error;
    }
  }, [fetchEnquiries]);

  const deleteEnquiry = useCallback(async (id: string) => {
    try {
      const response = await apiClient.delete(`${API_ENDPOINTS.DELETE_ENQUIRY}/${id}`);
      
      if (response.data && response.data.success) {
        // Refresh the enquiries list
        await fetchEnquiries();
        return true;
      } else {
        throw new Error('Failed to delete enquiry');
      }
    } catch (error: any) {
      console.error('Failed to delete enquiry:', error);
      throw error;
    }
  }, [fetchEnquiries]);

  const getEnquiryStats = useCallback(async () => {
    try {
      const response = await apiClient.get<EnquiryStatsResponse>(API_ENDPOINTS.GET_ENQUIRY_STATS);
      
      if (response.data && response.data.success) {
        return response.data.data;
      } else {
        throw new Error('Failed to fetch enquiry stats');
      }
    } catch (error: any) {
      console.error('Failed to fetch enquiry stats:', error);
      throw error;
    }
  }, []);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  return {
    enquiries,
    loading,
    error,
    fetchEnquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    getEnquiryStats
  };
};

// About Us Custom Hooks
export const useAboutUsData = () => {
  const [data, setData] = useState<{
    heroImages: AboutUsHeroImage[];
    statistics: AboutUsStatistic[];
    coreValues: AboutUsCoreValue[];
    campusImages: AboutUsCampusImage[];
    content: AboutUsContent[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Extracted content sections
  const [whoWeAre, setWhoWeAre] = useState<AboutUsContent | null>(null);
  const [aboutUs, setAboutUs] = useState<AboutUsContent | null>(null);
  const [vision, setVision] = useState<AboutUsContent | null>(null);
  const [mission, setMission] = useState<AboutUsContent | null>(null);
  const [coreValuesText, setCoreValuesText] = useState<AboutUsContent | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('Fetching About Us data...');
      const result = await apiHelpers.getAboutUsData();
      console.log('About Us data fetched successfully:', result);
      setData(result);
      setError(null);
      // Extract content sections
      if (result && result.content) {
        setWhoWeAre(result.content.find((c) => c.sectionType === 'who-we-are') || null);
        setAboutUs(result.content.find((c) => c.sectionType === 'about-us') || null);
        setVision(result.content.find((c) => c.sectionType === 'vision') || null);
        setMission(result.content.find((c) => c.sectionType === 'mission') || null);
        setCoreValuesText(result.content.find((c) => c.sectionType === 'core-values-text') || null);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch about us data';
      console.error('Error fetching about us data:', err);
      setError(errorMessage);
      // Set empty data to prevent crashes
      setData({
        heroImages: [],
        statistics: [],
        coreValues: [],
        campusImages: [],
        content: []
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    heroImages: data?.heroImages || [],
    statistics: data?.statistics || [],
    coreValues: data?.coreValues || [],
    campusImages: data?.campusImages || [],
    content: data?.content || [],
    whoWeAre,
    aboutUs,
    vision,
    mission,
    coreValuesText,
    loading,
    error,
    refetch: fetchData,
  };
};

// Life at Inframe custom hooks
export const useLifeAtInframeSections = () => {
  const [sections, setSections] = useState<LifeAtInframeSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSections = async () => {
      try {
        setLoading(true);
        const result = await apiHelpers.getLifeAtInframeSections();
        setSections(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch life at inframe sections');
        console.error('Error fetching life at inframe sections:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  return { sections, loading, error };
};

export const useStudentServices = () => {
  const [services, setServices] = useState<StudentService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const result = await apiHelpers.getStudentServices();
        setServices(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch student services');
        console.error('Error fetching student services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export const useSportsFacilities = () => {
  const [facilities, setFacilities] = useState<SportsFacility[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        setLoading(true);
        const result = await apiHelpers.getSportsFacilities();
        setFacilities(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch sports facilities');
        console.error('Error fetching sports facilities:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []);

  return { facilities, loading, error };
};

export const useLifeAtInframeGallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiHelpers.getLifeAtInframeGalleryImages();
        console.log('Gallery hook result:', result);
        setGalleryImages(Array.isArray(result) ? result : []);
      } catch (err) {
        console.error('Error in gallery hook:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch gallery images');
        setGalleryImages([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  return { galleryImages, loading, error };
};
