"use client";

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

// Industry Partner interfaces
export interface IndustryPartner {
  _id: string;
  name: string;
  src?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface IndustryPartnersResponse {
  success: boolean;
  data: IndustryPartner[];
  message?: string;
}

export interface IndustryPartnerResponse {
  success: boolean;
  data: IndustryPartner;
  message?: string;
}

// Course-related interfaces
export interface CourseProgram {
  _id?: string;
  title: string;
  duration: string;
  description: string;
  imageUrl: string;
  detailsUrl: string;
  order: number;
  isActive: boolean;
  slug?: string;
  parentCourseSlug?: string;
  parentCourseTitle?: string;
}

export interface CourseFeature {
  _id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  order: number;
}

export interface CourseTestimonial {
  _id?: string;
  studentName: string;
  studentImage?: string;
  testimonialText: string;
  youtubeUrl?: string;
  course?: string;
  batch?: string;
  order: number;
  isActive: boolean;
}

export interface CourseFAQ {
  _id?: string;
  question: string;
  answer: string;
  order: number;
  isActive: boolean;
}

export interface CourseCurriculum {
  _id?: string;
  year: string;
  semester: string;
  subjects: string[];
  description?: string;
  imageUrl?: string;
  order: number;
}

export interface CourseSoftware {
  _id?: string;
  name: string;
  logoUrl: string;
  description?: string;
  order: number;
}

export interface CourseCareerProspect {
  _id?: string;
  title: string;
  roles: string[];
  description?: string;
  order: number;
}

export interface Course {
  _id?: string;
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  programs: CourseProgram[];
  features: CourseFeature[];
  testimonials: CourseTestimonial[];
  faqs: CourseFAQ[];
  curriculum: CourseCurriculum[];
  software: CourseSoftware[];
  careerProspects: CourseCareerProspect[];
  ctaTitle: string;
  ctaDescription: string;
  brochurePdfUrl?: string;
  isActive: boolean;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CourseResponse {
  success: boolean;
  data: Course;
  message?: string;
}

export interface CoursesResponse {
  success: boolean;
  data: Course[];
  message?: string;
}

export interface CourseProgramResponse {
  success: boolean;
  data: CourseProgram;
  message?: string;
}

export interface CourseProgramsResponse {
  success: boolean;
  data: CourseProgram[];
  message?: string;
}

export interface SlugResponse {
  success: boolean;
  slug: string;
  message?: string;
}

// Free Courses API Interfaces
export interface CourseDetails {
  duration: number;
  mode: string;
  certificate: string;
  level: string;
  _id?: string;
}

export interface FreeCourseData {
  name: string;
  shortDescription: string;
  details: CourseDetails[];
  whyLearnThisCourse: string;
  whatYouWillLearn: string[];
  careerOpportunities: string;
  courseBenefits: string[];
  imageUrl: string;
  isActive: boolean;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string;
}

export interface FreeCourse extends FreeCourseData {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FreeCourseResponse {
  success: boolean;
  data: FreeCourse;
  message?: string;
}

export interface FreeCoursesResponse {
  success: boolean;
  data: FreeCourse[];
  message?: string;
}

// Get the backend URL from environment variables
export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://backend-rakj.onrender.com';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://backend-rakj.onrender.com/api/v1';

// Export config for BackendStatus component
export const config = {
  backendUrl: BACKEND_URL,
  apiBaseUrl: API_BASE_URL,
};

// Create axios instance with default configuration
export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // Increased timeout to 30 seconds
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Debug logging only in development
if (process.env.NODE_ENV === 'development') {
  console.log('API Client Configuration:', {
    baseURL: API_BASE_URL,
    backendURL: BACKEND_URL,
    apiBaseURL: API_BASE_URL
  });
}

// Request interceptor to add auth token if available
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available (only on client side)
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('authToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
      // Handle unauthorized access (only on client side)
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('authToken');
        // Redirect to login page if needed
        // window.location.href = '/login';
      }
    }
    
    // Log detailed error information for debugging
    console.error('API Error:', {
      message: error.message,
      status: error.response?.status,
      statusText: error.response?.statusText,
      url: error.config?.url,
      method: error.config?.method,
      data: error.response?.data
    });
    
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
  GET_COURSE_BY_SLUG: '/api/v1/courses/slug',
  GET_COURSE_BY_ID: '/api/v1/courses',
  CREATE_COURSE: '/api/v1/courses',
  UPDATE_COURSE: '/api/v1/courses',
  DELETE_COURSE: '/api/v1/courses',
  GET_COURSE_PROGRAMS: '/api/v1/courses/programs',
  GET_COURSE_PROGRAM_BY_SLUG: '/api/v1/courses',
  GET_COURSE_FEATURES: '/api/v1/courses/features',
  GET_COURSE_TESTIMONIALS: '/api/v1/courses/testimonials',
  GET_COURSE_FAQS: '/api/v1/courses/faqs',
  GET_COURSE_CURRICULUM: '/api/v1/courses/curriculum',
  GET_COURSE_SOFTWARE: '/api/v1/courses/software',
  GET_COURSE_CAREER_PROSPECTS: '/api/v1/courses/career-prospects',
  GENERATE_SLUG: '/api/v1/courses/generate-slug',

  // Payments
  CREATE_PAYMENT: '/api/v1/payments/create',
  VERIFY_PAYMENT: '/api/v1/payments/verify',

  // Contact/Enquiry
  SUBMIT_ENQUIRY: '/api/v1/enquiries',
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

  // Industry Partners
  GET_INDUSTRY_PARTNERS: '/api/v1/logo/getlogo',
  GET_INDUSTRY_PARTNER_BY_ID: '/api/v1/logo/getlogoById',
  CREATE_INDUSTRY_PARTNER: '/api/v1/logo/addlogo',
  UPDATE_INDUSTRY_PARTNER: '/api/v1/logo/updatelogo',
  DELETE_INDUSTRY_PARTNER: '/api/v1/logo/deletelogo',

  // Career Applications
  SUBMIT_JOB_APPLICATION: '/api/v1/career-posts/apply',

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
  GET_LIFE_AT_INFRAME_GALLERY: '/galleryimage/getgalleryimages',
  ADD_LIFE_AT_INFRAME_GALLERY_IMAGE: '/galleryimage/addgalleryimage',
  UPDATE_LIFE_AT_INFRAME_GALLERY_IMAGE: '/galleryimage/updategalleryimage',
  DELETE_LIFE_AT_INFRAME_GALLERY_IMAGE: '/galleryimage/deletegalleryimage',

  // Downloads
  GET_DOWNLOADS: '/download/getdownloads',
  GET_DOWNLOAD_BY_ID: '/download/getdownloadbyid',
  CREATE_DOWNLOAD: '/download/adddownload',
  UPDATE_DOWNLOAD: '/download/updatedownload',
  DELETE_DOWNLOAD: '/download/deletedownload',
  GET_DOWNLOAD_CATEGORIES: '/download/getcategories',
  DELETE_DOWNLOAD_CATEGORY: '/download/deletecategory',

  // General
  HEALTH_CHECK: '/health',
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
      console.log('Submitting enquiry to:', API_ENDPOINTS.SUBMIT_ENQUIRY);
      console.log('Enquiry data:', enquiryData);
      const response = await apiClient.post(API_ENDPOINTS.SUBMIT_ENQUIRY, enquiryData);
      console.log('Enquiry submission response:', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Enquiry submission failed:', error);
      if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
      }
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

  // Submit job application
  submitJobApplication: async (applicationData: any, careerid: string) => {
    try {
      if (!careerid) {
        throw new Error('Career ID is required');
      }
      
      // Log the JSON data for debugging
      console.log('JSON application data:', applicationData);
      
      // Use the correct endpoint with career ID as URL parameter
      // Send JSON data with proper headers
      const response = await apiClient.post(`/career-posts/apply/${careerid}`, applicationData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data;
    } catch (error: any) {
      console.error('Job application submission failed:', error);
      // Log detailed error information
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      }
      throw error;
    }
  },

  // Download management functions
  getDownloads: async (): Promise<DownloadItem[]> => {
    try {
      const response = await apiClient.get<DownloadsResponse>(API_ENDPOINTS.GET_DOWNLOADS);
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to fetch downloads');
      }
    } catch (error) {
      console.error('Failed to fetch downloads:', error);
      return [];
    }
  },

  getDownloadById: async (id: string): Promise<DownloadItem | null> => {
    try {
      const response = await apiClient.get<DownloadResponse>(`${API_ENDPOINTS.GET_DOWNLOAD_BY_ID}/${id}`);
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to fetch download');
      }
    } catch (error) {
      console.error('Failed to fetch download by ID:', error);
      return null;
    }
  },

  createDownload: async (data: DownloadItemData): Promise<DownloadItem> => {
    try {
      const response = await apiClient.post<DownloadResponse>(API_ENDPOINTS.CREATE_DOWNLOAD, data);
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to create download');
      }
    } catch (error) {
      console.error('Failed to create download:', error);
      throw error;
    }
  },

  updateDownload: async (id: string, data: DownloadItemData): Promise<DownloadItem> => {
    try {
      const response = await apiClient.put<DownloadResponse>(`${API_ENDPOINTS.UPDATE_DOWNLOAD}/${id}`, data);
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to update download');
      }
    } catch (error) {
      console.error('Failed to update download:', error);
      throw error;
    }
  },

  deleteDownload: async (id: string): Promise<void> => {
    try {
      const response = await apiClient.delete(`${API_ENDPOINTS.DELETE_DOWNLOAD}/${id}`);
      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to delete download');
      }
    } catch (error) {
      console.error('Failed to delete download:', error);
      throw error;
    }
  },

  getDownloadCategories: async (): Promise<DownloadCategory[]> => {
    try {
      const response = await apiClient.get<DownloadCategoriesResponse>(API_ENDPOINTS.GET_DOWNLOAD_CATEGORIES);
      if (response.data.success) {
        return response.data.data;
      } else {
        throw new Error(response.data.message || 'Failed to fetch download categories');
      }
    } catch (error) {
      console.error('Failed to fetch download categories:', error);
      return [];
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

  // Course-specific API helpers
  getCourseBySlug: async (slug: string): Promise<Course> => {
    try {
      const response = await apiClient.get<CourseResponse>(`${API_ENDPOINTS.GET_COURSE_BY_SLUG}/${slug}`);
      if (response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Invalid course response format');
      }
    } catch (error) {
      console.error('Failed to fetch course by slug:', error);
      // Return a fallback course structure if API fails
      return {
        slug: slug,
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        description: `Explore our ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} programs`,
        heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        programs: [],
        features: [],
        testimonials: [],
        faqs: [],
        curriculum: [],
        software: [],
        careerProspects: [],
        ctaTitle: "Start Your Journey",
        ctaDescription: "Join our programs today",
        isActive: true
      };
    }
  },

  getCourseById: async (id: string): Promise<Course> => {
    try {
      const response = await apiClient.get<CourseResponse>(`${API_ENDPOINTS.GET_COURSE_BY_ID}/${id}`);
      if (response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Invalid course response format');
      }
    } catch (error) {
      console.error('Failed to fetch course by ID:', error);
      throw error;
    }
  },

  getAllCourses: async (): Promise<Course[]> => {
    try {
      const response = await apiClient.get<CoursesResponse>(API_ENDPOINTS.GET_COURSES);
      if (response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        throw new Error('Invalid courses response format');
      }
    } catch (error) {
      console.error('Failed to fetch all courses:', error);
      throw error;
    }
  },

  getCoursePrograms: async (): Promise<CourseProgram[]> => {
    try {
      const response = await apiClient.get<CourseProgramsResponse>(API_ENDPOINTS.GET_COURSE_PROGRAMS);
      if (response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        throw new Error('Invalid course programs response format');
      }
    } catch (error) {
      console.error('Failed to fetch course programs:', error);
      throw error;
    }
  },

  getCourseProgramBySlug: async (parentSlug: string, programSlug: string): Promise<CourseProgram> => {
    try {
      // First get the course by slug to find the program
      const courseResponse = await apiClient.get<CourseResponse>(`${API_ENDPOINTS.GET_COURSE_BY_SLUG}/${parentSlug}`);
      console.log('Course API response:', courseResponse.data);
      if (courseResponse.data.success && courseResponse.data.data) {
        const course = courseResponse.data.data;
        console.log('Course data:', course);
        console.log('Course programs:', course.programs);
        // Find the program within the course
        const program = course.programs?.find(p => {
          const programTitleSlug = p.title?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, "");
          const programSlugClean = p.slug?.toLowerCase().replace(/[^a-z0-9-]/g, "");
          const requestedSlugClean = programSlug.toLowerCase().replace(/[^a-z0-9-]/g, "");
          
          // Create frontend slug format from backend slug
          const frontendSlug = programSlugClean?.replace(/bachelor-of-design-in-/g, "bdes-in-")
            ?.replace(/bachelor-of-vocation-in-/g, "bvoc-in-")
            ?.replace(/bachelor-of-science-in-/g, "bsc-in-");
          
          console.log('Program matching:', {
            programTitle: p.title,
            programTitleSlug,
            programSlug: p.slug,
            programSlugClean,
            frontendSlug,
            requestedSlug: programSlug,
            requestedSlugClean,
            matches: programTitleSlug === requestedSlugClean || 
                     programSlugClean === requestedSlugClean || 
                     frontendSlug === requestedSlugClean
          });
          
          return programTitleSlug === requestedSlugClean || 
                 programSlugClean === requestedSlugClean || 
                 frontendSlug === requestedSlugClean;
        });
        
        if (program) {
          return program;
        }
      }
      
      // If not found, return fallback
      return {
        title: programSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        duration: "4 Years Full-Time",
        description: `Comprehensive ${programSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} program`,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detailsUrl: `/${parentSlug}/${programSlug}`,
        order: 1,
        isActive: true
      };
    } catch (error) {
      console.error('Failed to fetch course program by slug:', error);
      // Return a fallback program structure if API fails
      return {
        title: programSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        duration: "4 Years Full-Time",
        description: `Comprehensive ${programSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} program`,
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        detailsUrl: `/${parentSlug}/${programSlug}`,
        order: 1,
        isActive: true
      };
    }
  },

  generateSlug: async (title: string): Promise<string> => {
    try {
      const response = await apiClient.get<SlugResponse>(`${API_ENDPOINTS.GENERATE_SLUG}/${encodeURIComponent(title)}`);
      if (response.data.success && response.data.slug) {
        return response.data.slug;
      } else {
        throw new Error('Invalid slug response format');
      }
    } catch (error) {
      console.error('Failed to generate slug:', error);
      throw error;
    }
  },

  // Get testimonials
  getTestimonials: async (): Promise<Testimonial[]> => {
    try {
      console.log('Making API request to:', API_ENDPOINTS.GET_TESTIMONIALS);
      const response = await apiClient.get<TestimonialsResponse>(API_ENDPOINTS.GET_TESTIMONIALS);
      console.log('Testimonials API response:', response.data);

      // Check if response has the expected structure
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected testimonials response structure:', response.data);
        return [];
      }
    } catch (error: any) {
      console.error('Failed to fetch testimonials:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
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
      console.log('Making API request to:', API_ENDPOINTS.GET_MEMBERSHIP);
      const response = await apiClient.get<MembershipResponse>(API_ENDPOINTS.GET_MEMBERSHIP);
      console.log('Memberships API response:', response.data);
      
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected membership response structure:', response.data);
        return [];
      }
    } catch (error: any) {
      console.error('Failed to fetch memberships:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
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
        apiClient.get<AboutUsResponse<AboutUsContent>>(`${API_ENDPOINTS.GET_CONTENT_BY_TYPE}/core-values-text`),
      ]);

      return {
        heroImages: heroImages.data.data,
        statistics: statistics.data.data,
        coreValues: coreValues.data.data,
        campusImages: campusImages.data.data,
        whoWeAreContent: whoWeAreContent.data.data,
        aboutUsContent: aboutUsContent.data.data,
        visionContent: visionContent.data.data,
        missionContent: missionContent.data.data,
        coreValuesTextContent: coreValuesTextContent.data.data,
      };
    } catch (error) {
      console.error('Failed to fetch about us data:', error);
      throw error;
    }
  },

  // Industry Partners
  getIndustryPartners: async (): Promise<IndustryPartner[]> => {
    try {
      console.log('Making API request to:', API_ENDPOINTS.GET_INDUSTRY_PARTNERS);
      const response = await apiClient.get<IndustryPartnersResponse>(API_ENDPOINTS.GET_INDUSTRY_PARTNERS);
      console.log('Industry partners API response:', response.data);
      
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data;
      } else {
        console.warn('Unexpected industry partners response structure:', response.data);
        return [];
      }
    } catch (error: any) {
      console.error('Failed to fetch industry partners:', error);
      if (error.response) {
        console.error('Response status:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  },

  // Industry Partner by ID
  getIndustryPartnerById: async (id: string): Promise<IndustryPartner | null> => {
    try {
      const response = await apiClient.get<IndustryPartnerResponse>(`${API_ENDPOINTS.GET_INDUSTRY_PARTNER_BY_ID}/${id}`);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        console.warn('Industry partner not found:', id);
        return null;
      }
    } catch (error) {
      console.error('Failed to fetch industry partner by ID:', error);
      throw error;
    }
  },

  // Create industry partner
  createIndustryPartner: async (partnerData: Omit<IndustryPartner, '_id' | 'createdAt' | 'updatedAt' | '__v'>): Promise<IndustryPartner> => {
    try {
      const response = await apiClient.post<IndustryPartnerResponse>(API_ENDPOINTS.CREATE_INDUSTRY_PARTNER, partnerData);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Failed to create industry partner');
      }
    } catch (error) {
      console.error('Failed to create industry partner:', error);
      throw error;
    }
  },

  // Update industry partner
  updateIndustryPartner: async (id: string, partnerData: Partial<Omit<IndustryPartner, '_id' | 'createdAt' | 'updatedAt' | '__v'>>): Promise<IndustryPartner> => {
    try {
      const response = await apiClient.put<IndustryPartnerResponse>(`${API_ENDPOINTS.UPDATE_INDUSTRY_PARTNER}/${id}`, partnerData);
      if (response.data && response.data.success && response.data.data) {
        return response.data.data;
      } else {
        throw new Error('Failed to update industry partner');
      }
    } catch (error) {
      console.error('Failed to update industry partner:', error);
      throw error;
    }
  },

  // Delete industry partner
  deleteIndustryPartner: async (id: string): Promise<boolean> => {
    try {
      const response = await apiClient.delete<IndustryPartnerResponse>(`${API_ENDPOINTS.DELETE_INDUSTRY_PARTNER}/${id}`);
      if (response.data && response.data.success) {
        return true;
      } else {
        throw new Error('Failed to delete industry partner');
      }
    } catch (error) {
      console.error('Failed to delete industry partner:', error);
      throw error;
    }
  },

  // Get sports facilities
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

  // Get life at inframe gallery images
  getLifeAtInframeGallery: async (): Promise<GalleryImage[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<GalleryImage>>(API_ENDPOINTS.GET_LIFE_AT_INFRAME_GALLERY);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected gallery images response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch gallery images:', error);
      throw error;
    }
  },

  // Get life at inframe sections
  getLifeAtInframeSections: async (): Promise<LifeAtInframeSection[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<LifeAtInframeSection>>(API_ENDPOINTS.GET_LIFE_AT_INFRAME_SECTIONS);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected life at inframe sections response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch life at inframe sections:', error);
      throw error;
    }
  },

  // Get student services
  getStudentServices: async (): Promise<StudentService[]> => {
    try {
      const response = await apiClient.get<AboutUsListResponse<StudentService>>(API_ENDPOINTS.GET_STUDENT_SERVICES);
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        return response.data.data.sort((a, b) => a.order - b.order);
      } else {
        console.warn('Unexpected student services response structure:', response.data);
        return [];
      }
    } catch (error) {
      console.error('Failed to fetch student services:', error);
      throw error;
    }
  },
};

// React hooks for data fetching
export const useAboutUsData = () => {
  const [data, setData] = useState<{
    heroImages: AboutUsHeroImage[];
    statistics: AboutUsStatistic[];
    coreValues: AboutUsCoreValue[];
    campusImages: AboutUsCampusImage[];
    whoWeAre: AboutUsContent | null;
    aboutUs: AboutUsContent | null;
    vision: AboutUsContent | null;
    mission: AboutUsContent | null;
    coreValuesText: AboutUsContent | null;
  }>({
    heroImages: [],
    statistics: [],
    coreValues: [],
    campusImages: [],
    whoWeAre: null,
    aboutUs: null,
    vision: null,
    mission: null,
    coreValuesText: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const result = await Promise.race([
        apiHelpers.getAboutUsData(),
        timeoutPromise
      ]) as any;
      
      setData({
        heroImages: result?.heroImages || [],
        statistics: result?.statistics || [],
        coreValues: result?.coreValues || [],
        campusImages: result?.campusImages || [],
        whoWeAre: result?.whoWeAreContent || null,
        aboutUs: result?.aboutUsContent || null,
        vision: result?.visionContent || null,
        mission: result?.missionContent || null,
        coreValuesText: result?.coreValuesTextContent || null,
      });
    } catch (err) {
      console.error('Failed to fetch about us data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch about us data');
      // Set empty data on error to prevent infinite loading
      setData({
        heroImages: [],
        statistics: [],
        coreValues: [],
        campusImages: [],
        whoWeAre: null,
        aboutUs: null,
        vision: null,
        mission: null,
        coreValuesText: null,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    ...data,
    loading,
    error,
    refetch: fetchData,
  };
};

export const useIndustryPartners = () => {
  const [partners, setPartners] = useState<IndustryPartner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPartners = async (retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      console.log(`Fetching industry partners... (attempt ${retryCount + 1})`);
      const startTime = Date.now();
      const partnersData = await apiHelpers.getIndustryPartners();
      const endTime = Date.now();
      console.log(`Industry partners fetched in ${endTime - startTime}ms:`, partnersData);
      
      setPartners(partnersData || []);
    } catch (err) {
      console.error(`Failed to fetch industry partners (attempt ${retryCount + 1}):`, err);
      
      // Retry up to 2 times with exponential backoff
      if (retryCount < 2) {
        const delay = Math.pow(2, retryCount) * 1000; // 1s, 2s
        console.log(`Retrying in ${delay}ms...`);
        setTimeout(() => fetchPartners(retryCount + 1), delay);
        return;
      }
      
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch industry partners';
      setError(errorMessage);
      setPartners([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  return {
    partners,
    loading,
    error,
    refetch: fetchPartners,
  };
};

export const useAdvisors = () => {
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvisors = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const advisorsData = await Promise.race([
        apiHelpers.getAdvisors(),
        timeoutPromise
      ]) as Advisor[];
      
      setAdvisors(advisorsData || []);
    } catch (err) {
      console.error('Failed to fetch advisors:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch advisors');
      setAdvisors([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const createAdvisor = async (advisorData: Omit<Advisor, '_id' | 'createdAt' | 'updatedAt' | '__v'>) => {
    try {
      const newAdvisor = await apiHelpers.createAdvisor(advisorData);
      setAdvisors(prev => [newAdvisor, ...prev]);
      return newAdvisor;
    } catch (err) {
      console.error('Failed to create advisor:', err);
      throw err;
    }
  };

  const updateAdvisor = async (id: string, advisorData: Partial<Omit<Advisor, '_id' | 'createdAt' | 'updatedAt' | '__v'>>) => {
    try {
      const updatedAdvisor = await apiHelpers.updateAdvisor(id, advisorData);
      setAdvisors(prev => prev.map(advisor => advisor._id === id ? updatedAdvisor : advisor));
      return updatedAdvisor;
    } catch (err) {
      console.error('Failed to update advisor:', err);
      throw err;
    }
  };

  const deleteAdvisor = async (id: string) => {
    try {
      await apiHelpers.deleteAdvisor(id);
      setAdvisors(prev => prev.filter(advisor => advisor._id !== id));
      return true;
    } catch (err) {
      console.error('Failed to delete advisor:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchAdvisors();
  }, []);

  return {
    advisors,
    loading,
    error,
    refetch: fetchAdvisors,
    createAdvisor,
    updateAdvisor,
    deleteAdvisor,
  };
};

export const useEnquiries = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const enquiriesData = await Promise.race([
        apiHelpers.getEnquiries(),
        timeoutPromise
      ]) as Enquiry[];
      
      setEnquiries(enquiriesData || []);
    } catch (err) {
      console.error('Failed to fetch enquiries:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch enquiries');
      setEnquiries([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  const updateEnquiryStatus = async (id: string, statusData: UpdateEnquiryStatusData) => {
    try {
      const updatedEnquiry = await apiHelpers.updateEnquiryStatus(id, statusData);
      setEnquiries(prev => prev.map(enquiry => enquiry._id === id ? updatedEnquiry : enquiry));
      return updatedEnquiry;
    } catch (err) {
      console.error('Failed to update enquiry status:', err);
      throw err;
    }
  };

  const deleteEnquiry = async (id: string) => {
    try {
      await apiHelpers.deleteEnquiry(id);
      setEnquiries(prev => prev.filter(enquiry => enquiry._id !== id));
      return true;
    } catch (err) {
      console.error('Failed to delete enquiry:', err);
      throw err;
    }
  };

  const getEnquiryStats = async () => {
    try {
      const statsData = await apiHelpers.getEnquiryStats();
      return statsData;
    } catch (err) {
      console.error('Failed to fetch enquiry stats:', err);
      throw err;
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);

  return {
    enquiries,
    loading,
    error,
    refetch: fetchEnquiries,
    updateEnquiryStatus,
    deleteEnquiry,
    getEnquiryStats,
  };
};

export const useSportsFacilities = () => {
  const [facilities, setFacilities] = useState<SportsFacility[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFacilities = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const facilitiesData = await Promise.race([
        apiHelpers.getSportsFacilities(),
        timeoutPromise
      ]) as SportsFacility[];
      
      setFacilities(facilitiesData || []);
    } catch (err) {
      console.error('Failed to fetch sports facilities:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch sports facilities');
      setFacilities([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacilities();
  }, []);

  return {
    facilities,
    loading,
    error,
    refetch: fetchFacilities,
  };
};

export const useLifeAtInframeGallery = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const galleryData = await Promise.race([
        apiHelpers.getLifeAtInframeGallery(),
        timeoutPromise
      ]) as GalleryImage[];
      
      setGalleryImages(galleryData || []);
    } catch (err) {
      console.error('Failed to fetch gallery images:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch gallery images');
      setGalleryImages([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  return {
    galleryImages,
    loading,
    error,
    refetch: fetchGalleryImages,
  };
};

export const useLifeAtInframeSections = () => {
  const [sections, setSections] = useState<LifeAtInframeSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSections = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const sectionsData = await Promise.race([
        apiHelpers.getLifeAtInframeSections(),
        timeoutPromise
      ]) as LifeAtInframeSection[];
      
      setSections(sectionsData || []);
    } catch (err) {
      console.error('Failed to fetch life at inframe sections:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch life at inframe sections');
      setSections([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSections();
  }, []);

  return {
    sections,
    loading,
    error,
    refetch: fetchSections,
  };
};

export const useStudentServices = () => {
  const [services, setServices] = useState<StudentService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Add timeout to prevent infinite loading
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Request timeout')), 10000)
      );
      
      const servicesData = await Promise.race([
        apiHelpers.getStudentServices(),
        timeoutPromise
      ]) as StudentService[];
      
      setServices(servicesData || []);
    } catch (err) {
      console.error('Failed to fetch student services:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch student services');
      setServices([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return {
    services,
    loading,
    error,
    refetch: fetchServices,
  };
};

// Course hooks
export const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getAllCourses();
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  return {
    courses,
    loading,
    error,
    refetch: fetchCourses,
  };
};

export const useCourseBySlug = (slug: string) => {
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCourse = useCallback(async () => {
    if (!slug) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getCourseBySlug(slug);
      setCourse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch course');
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchCourse();
  }, [fetchCourse]);

  return {
    course,
    loading,
    error,
    refetch: fetchCourse,
  };
};

export const useCoursePrograms = () => {
  const [programs, setPrograms] = useState<CourseProgram[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrograms = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getCoursePrograms();
      setPrograms(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch course programs');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  return {
    programs,
    loading,
    error,
    refetch: fetchPrograms,
  };
};

export const useCourseProgramBySlug = (parentSlug: string, programSlug: string) => {
  const [program, setProgram] = useState<CourseProgram | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProgram = useCallback(async () => {
    if (!parentSlug || !programSlug) return;
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getCourseProgramBySlug(parentSlug, programSlug);
      setProgram(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch course program');
    } finally {
      setLoading(false);
    }
  }, [parentSlug, programSlug]);

  useEffect(() => {
    fetchProgram();
  }, [fetchProgram]);

  return {
    program,
    loading,
    error,
    refetch: fetchProgram,
  };
};

// Free Courses API Functions
const buildFreeCoursesApiUrl = (endpoint: string): string => {
  const FREE_COURSES_API_URL = 'https://backend-rakj.onrender.com/api/v1/free-courses';
  return `${FREE_COURSES_API_URL}/${endpoint}`;
};

const getApiHeaders = (): HeadersInit => ({
  'Content-Type': 'application/json',
});

// Free Courses API Helper Functions
export const freeCoursesApiHelpers = {
  // Get all free courses
  getAllFreeCourses: async (): Promise<FreeCourse[]> => {
    try {
      const response = await fetch(buildFreeCoursesApiUrl(''));
      
      if (!response.ok) {
        throw new Error(`Failed to fetch free courses: ${response.status} ${response.statusText}`);
      }
      
      const result: FreeCoursesResponse = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get free course by ID
  getFreeCourseById: async (id: string): Promise<FreeCourse | null> => {
    try {
      const response = await fetch(buildFreeCoursesApiUrl(id));
      
      if (!response.ok) {
        if (response.status === 404) return null;
        throw new Error(`Failed to fetch free course: ${response.status} ${response.statusText}`);
      }
      
      const result: FreeCourseResponse = await response.json();
      
      if (result.success && result.data) {
        return result.data;
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  // Get active free courses only
  getActiveFreeCourses: async (): Promise<FreeCourse[]> => {
    try {
      const allCourses = await freeCoursesApiHelpers.getAllFreeCourses();
      return allCourses.filter(course => course.isActive);
    } catch (error) {
      console.error('Error fetching active free courses:', error);
      throw error;
    }
  },

  // Search free courses
  searchFreeCourses: async (searchTerm: string): Promise<FreeCourse[]> => {
    try {
      const allCourses = await freeCoursesApiHelpers.getAllFreeCourses();
      const searchLower = searchTerm.toLowerCase();
      
      return allCourses.filter(course => 
        course.name.toLowerCase().includes(searchLower) ||
        course.shortDescription.toLowerCase().includes(searchLower) ||
        course.metaKeywords.toLowerCase().includes(searchLower)
      );
    } catch (error) {
      console.error('Error searching free courses:', error);
      throw error;
    }
  }
};

// Free Courses React Hooks
export const useFreeCourses = () => {
  const [courses, setCourses] = useState<FreeCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await freeCoursesApiHelpers.getAllFreeCourses();
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const createCourse = async (courseData: FreeCourseData) => {
    try {
      const response = await fetch(buildFreeCoursesApiUrl(''), {
        method: 'POST',
        headers: getApiHeaders(),
        body: JSON.stringify(courseData)
      });
      
      if (!response.ok) {
        throw new Error(`Failed to create course: ${response.status} ${response.statusText}`);
      }
      
      const result: FreeCourseResponse = await response.json();
      
      if (result.success && result.data) {
        setCourses(prev => [...prev, result.data]);
        return result.data;
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create course');
      throw err;
    }
  };

  const updateCourse = async (id: string, courseData: FreeCourseData) => {
    try {
      const response = await fetch(buildFreeCoursesApiUrl(id), {
        method: 'PUT',
        headers: getApiHeaders(),
        body: JSON.stringify(courseData)
      });
      
      if (!response.ok) {
        throw new Error(`Failed to update course: ${response.status} ${response.statusText}`);
      }
      
      const result: FreeCourseResponse = await response.json();
      
      if (result.success && result.data) {
        setCourses(prev => prev.map(course => 
          course._id === id ? result.data : course
        ));
        return result.data;
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update course');
      throw err;
    }
  };

  const deleteCourse = async (id: string) => {
    try {
      const response = await fetch(buildFreeCoursesApiUrl(id), {
        method: 'DELETE',
        headers: getApiHeaders()
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete course: ${response.status} ${response.statusText}`);
      }
      
      setCourses(prev => prev.filter(course => course._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete course');
      throw err;
    }
  };

  const toggleStatus = async (id: string, isActive: boolean) => {
    try {
      const response = await fetch(buildFreeCoursesApiUrl(`${id}/toggle-status`), {
        method: 'PUT',
        headers: getApiHeaders(),
        body: JSON.stringify({ isActive })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to toggle course status: ${response.status} ${response.statusText}`);
      }
      
      const result: FreeCourseResponse = await response.json();
      
      if (result.success && result.data) {
        setCourses(prev => prev.map(course => 
          course._id === id ? result.data : course
        ));
        return result.data;
      } else {
        throw new Error('Invalid API response format');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to toggle course status');
      throw err;
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    fetchCourses,
    createCourse,
    updateCourse,
    deleteCourse,
    toggleStatus,
  };
};

export const useFreeCourseById = (id: string) => {
  const [course, setCourse] = useState<FreeCourse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCourse = async () => {
    if (!id) return;
    try {
      setLoading(true);
      setError(null);
      const data = await freeCoursesApiHelpers.getFreeCourseById(id);
      setCourse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch course');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

  return {
    course,
    loading,
    error,
    refetch: fetchCourse,
  };
};

export const useActiveFreeCourses = () => {
  const [courses, setCourses] = useState<FreeCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchActiveCourses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await freeCoursesApiHelpers.getActiveFreeCourses();
      setCourses(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch active courses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActiveCourses();
  }, []);

  return {
    courses,
    loading,
    error,
    refetch: fetchActiveCourses,
  };
};

// Download hooks
export const useDownloads = () => {
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDownloads = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiHelpers.getDownloads();
      setDownloads(data);
    } catch (err) {
      console.error('Error fetching downloads:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch downloads');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDownloads();
  }, []);

  return { downloads, loading, error, refetch: fetchDownloads };
};

export const useDownloadCategories = () => {
  const [categories, setCategories] = useState<DownloadCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiHelpers.getDownloadCategories();
      setCategories(data);
    } catch (err) {
      console.error('Error fetching download categories:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch download categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error, refetch: fetchCategories };
};

// Utility function to transform backend FreeCourse to frontend format
export const transformFreeCourseToFrontend = (backendCourse: FreeCourse) => {
  // Get the first detail for basic info, or use defaults
  const firstDetail = backendCourse.details[0] || {
    duration: 0,
    mode: 'Online',
    certificate: 'Yes',
    level: 'Beginner'
  };

  return {
    id: backendCourse._id,
    title: backendCourse.name,
    intent: backendCourse.shortDescription,
    duration: `${firstDetail.duration} Weeks`,
    whyToLearn: backendCourse.whyLearnThisCourse,
    placement: backendCourse.careerOpportunities,
    fees: "Free",
    mode: "Online" as const,
    category: "Design", // Default category - can be enhanced later
    image: backendCourse.imageUrl
  };
};

// Careers API Types
export interface DownloadItem {
  _id: string;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadCount: number;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface DownloadItemData {
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  fileName: string;
  fileSize: string;
  uploadDate: string;
  downloadCount: number;
  isActive: boolean;
}

export interface DownloadCategory {
  _id: string;
  name: string;
  description?: string;
  isActive: boolean;
  createdDate: string;
  downloadCount: number;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface DownloadsResponse {
  success: boolean;
  data: DownloadItem[];
  message?: string;
}

export interface DownloadResponse {
  success: boolean;
  data: DownloadItem;
  message?: string;
}

export interface DownloadCategoriesResponse {
  success: boolean;
  data: DownloadCategory[];
  message?: string;
}

export interface Applicant {
  _id: string;
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter: string;
  status: 'pending' | 'reviewed' | 'shortlisted' | 'rejected' | 'hired';
  appliedAt: string;
}

export interface CareerPostData {
  title: string;
  place: string;
  description: string;
  requirements: string[];
  partTime: boolean;
  isActive: boolean;
}

export interface CareerPost extends CareerPostData {
  _id: string;
  applicants?: Applicant[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CareerPostWithApplicants {
  careerPostId: string;
  careerPostTitle: string;
  applicants: Applicant[];
  totalApplicants: number;
}

// Careers API Functions


// const apiClient = axios.create({
//   baseURL: 'http://localhost:5000/api', // or your main API base URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

export async function getCareerPosts(): Promise<CareerPost[]> {
  const response = await apiClient.get('/career-posts/getallcareerposts');
  if (response.data && Array.isArray(response.data)) {
    return response.data;
  } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
    return response.data.data;
  } else if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
    return response.data.data;
  }
  return [];
}

export async function getCareerPostsWithApplicants(): Promise<CareerPost[]> {
  try {
    const response = await apiClient.get('/career-posts/getallcareerposts?populate=applicants');
    if (response.data && Array.isArray(response.data)) {
      return response.data;
    } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
      return response.data.data;
    } else if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
      return response.data.data;
    }
    return [];
  } catch (error) {
    return getCareerPosts();
  }
}

export async function getActiveCareerPosts(): Promise<CareerPost[]> {
  const response = await apiClient.get('/career-posts/getactivecareerposts');
  if (response.data && Array.isArray(response.data)) {
    return response.data;
  } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
    return response.data.data;
  } else if (response.data && response.data.success && response.data.data && Array.isArray(response.data.data)) {
    return response.data.data;
  }
  return [];
}

export async function getCareerPostById(id: string): Promise<CareerPost | null> {
  const response = await apiClient.get(`/career-posts/getcareerpostbyid/${id}`);
  if (response.data && response.data.success && response.data.data) {
    return response.data.data;
  }
  return null;
}

export async function createCareerPost(data: CareerPostData): Promise<CareerPost> {
  const response = await apiClient.post('/career-posts/addcareerpost', data);
  if (response.data && response.data.success && response.data.data) {
    return response.data.data;
  }
  throw new Error('Failed to create career post');
}

export async function updateCareerPost(id: string, data: CareerPostData): Promise<CareerPost> {
  const response = await apiClient.put(`/career-posts/updatecareerpost/${id}`, data);
  if (response.data && response.data.success && response.data.data) {
    return response.data.data;
  }
  throw new Error('Failed to update career post');
}

export async function deleteCareerPost(id: string): Promise<void> {
  await apiClient.delete(`/career-posts/deletecareerpost/${id}`);
}

export async function toggleCareerPostStatus(id: string): Promise<CareerPost> {
  const response = await apiClient.put(`/career-posts/togglecareerpoststatus/${id}`);
  if (response.data && response.data.success && response.data.data) {
    return response.data.data;
  }
  throw new Error('Failed to toggle career post status');
}

export async function getApplicantsForCareerPost(careerId: string): Promise<Applicant[]> {
  const response = await apiClient.get(`/career-posts/applicants/${careerId}`);
  if (response.data && response.data.success && response.data.data) {
    const result = response.data.data;
    if (result.applicants && Array.isArray(result.applicants)) {
      return result.applicants;
    }
  }
  return [];
}

export async function updateApplicantStatus(
  careerId: string,
  applicantId: string,
  status: Applicant['status']
): Promise<Applicant> {
  const response = await apiClient.put(`/career-posts/applicants/${careerId}/${applicantId}/status`, { status });
  if (response.data && response.data.success && response.data.data) {
    return response.data.data;
  } else if (response.data && response.data.success) {
    return response.data;
  } else {
    throw new Error('Invalid response structure from update status API');
  }
}

