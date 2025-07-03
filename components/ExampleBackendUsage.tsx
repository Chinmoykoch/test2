'use client';

import React, { useState } from 'react';
import { apiClient, apiHelpers, API_ENDPOINTS, useCourses } from '@/utils/api';

const ExampleBackendUsage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  const { courses, loading: coursesLoading, error: coursesError, refetch } = useCourses();

  const testHealthCheck = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.healthCheck();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Health check failed');
    } finally {
      setLoading(false);
    }
  };

  const testGetCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getCourses();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const testSubmitEnquiry = async () => {
    setLoading(true);
    setError(null);
    try {
      const enquiryData = {
        name: 'Test User',
        email: 'test@example.com',
        phone: '+919999999999',
        message: 'This is a test enquiry from the frontend',
        course: 'B.Des in Interior Design'
      };
      const data = await apiHelpers.submitEnquiry(enquiryData);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit enquiry');
    } finally {
      setLoading(false);
    }
  };

  const testSubmitContact = async () => {
    setLoading(true);
    setError(null);
    try {
      const contactData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        message: 'This is a test contact form submission from the frontend',
        name: 'John Doe',
        subject: 'Test Contact Form'
      };
      const data = await apiHelpers.submitContact(contactData);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit contact form');
    } finally {
      setLoading(false);
    }
  };

  const testGetTestimonials = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getTestimonials();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch testimonials');
    } finally {
      setLoading(false);
    }
  };

  const testGetBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getBlogs();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const testGetPopularBlogs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await apiHelpers.getPopularBlogs();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch popular blogs');
    } finally {
      setLoading(false);
    }
  };

  const testCustomAPICall = async () => {
    setLoading(true);
    setError(null);
    try {
      // Example of using the apiClient directly
      const response = await apiClient.get('/custom-endpoint');
      setResult(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Custom API call failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Backend API Usage Examples</h2>
      
      <div className="space-y-4 mb-6">
        <button
          onClick={testHealthCheck}
          disabled={loading}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Health Check'}
        </button>
        
        <button
          onClick={testGetCourses}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Get Courses'}
        </button>
        
        <button
          onClick={testSubmitEnquiry}
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Submit Enquiry'}
        </button>

        <button
          onClick={testSubmitContact}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Submit Contact Form'}
        </button>

        <button
          onClick={testGetTestimonials}
          disabled={loading}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Get Testimonials'}
        </button>

        <button
          onClick={testGetBlogs}
          disabled={loading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Get Blogs'}
        </button>

        <button
          onClick={testGetPopularBlogs}
          disabled={loading}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Get Popular Blogs'}
        </button>
        
        <button
          onClick={testCustomAPICall}
          disabled={loading}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test Custom API Call'}
        </button>

        <button
          onClick={refetch}
          disabled={coursesLoading}
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-md transition-colors disabled:opacity-50"
        >
          {coursesLoading ? 'Fetching Courses...' : 'Test useCourses Hook'}
        </button>

        {coursesError && <div className="text-red-500">Error: {coursesError}</div>}
        {courses && Array.isArray(courses) && courses.length > 0 && (
          <div className="mt-4">
            <h3 className="font-bold mb-2">Courses from Backend:</h3>
            <ul className="list-disc pl-6">
              {courses.map((course) => (
                <li key={course._id || course.slug}>
                  <strong>{course.title}</strong> ({course.slug})
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Results Display */}
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
          <h3 className="text-red-800 font-medium mb-2">Error:</h3>
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}

      {result !== null && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <h3 className="text-green-800 font-medium mb-2">Success Response:</h3>
          <pre className="text-green-700 text-sm overflow-auto bg-white p-2 rounded border">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}

      {/* API Endpoints Reference */}
      <div className="mt-8 p-4 bg-gray-50 rounded-md">
        <h3 className="font-medium text-gray-800 mb-3">Available API Endpoints:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {Object.entries(API_ENDPOINTS).map(([key, endpoint]) => (
            <div key={key} className="flex justify-between">
              <span className="text-gray-600">{key}:</span>
              <code className="text-gray-800 bg-white px-1 rounded">{endpoint}</code>
            </div>
          ))}
        </div>
      </div>

      {/* Usage Examples */}
      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h3 className="font-medium text-blue-800 mb-3">Usage Examples:</h3>
        <div className="space-y-3 text-sm">
          <div>
            <h4 className="font-medium text-blue-700">Using API Helpers:</h4>
            <code className="block bg-white p-2 rounded mt-1 text-xs">
              {`import { apiHelpers } from '@/utils/api';
const data = await apiHelpers.getCourses();`}
            </code>
          </div>
          
          <div>
            <h4 className="font-medium text-blue-700">Using API Client Directly:</h4>
            <code className="block bg-white p-2 rounded mt-1 text-xs">
              {`import { apiClient } from '@/utils/api';
const response = await apiClient.get('/courses');`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleBackendUsage;
