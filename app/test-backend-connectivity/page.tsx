'use client';

import React, { useState, useEffect } from 'react';
import { apiHelpers, API_BASE_URL } from '../../utils/api';

interface TestResult {
  endpoint: string;
  status: 'loading' | 'success' | 'error';
  message: string;
  data?: any;
}

const TestBackendConnectivity = () => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  const endpoints = [
    { name: 'Enquiries', endpoint: '/api/v1/enquiries', test: () => apiHelpers.getEnquiries() },
    { name: 'Blogs', endpoint: '/api/v1/blog/getblogs', test: () => apiHelpers.getBlogs() },
    { name: 'Testimonials', endpoint: '/api/v1/testimonials/gettestimonials', test: () => apiHelpers.getTestimonials() },
    { name: 'Advisors', endpoint: '/api/v1/advisor/getadvisors', test: () => apiHelpers.getAdvisors() },
    { name: 'About Us Hero Images', endpoint: '/api/v1/about-us/hero-images/getheroimages', test: () => apiHelpers.getHeroImages() },
    { name: 'About Us Statistics', endpoint: '/api/v1/about-us/statistics/getstatistics', test: () => apiHelpers.getStatistics() },
    { name: 'About Us Core Values', endpoint: '/api/v1/about-us/core-values/getcorevalues', test: () => apiHelpers.getCoreValues() },
    { name: 'About Us Campus Images', endpoint: '/api/v1/about-us/campus-images/getcampusimages', test: () => apiHelpers.getCampusImages() },
    { name: 'Student Clubs', endpoint: '/api/v1/studentclub/getstudentclubs', test: () => apiHelpers.getStudentClubs() },
    { name: 'Campus Events', endpoint: '/api/v1/campusevent/getcampusevents', test: () => apiHelpers.getCampusEvents() },
    { name: 'Membership', endpoint: '/api/v1/membership/getMembership', test: () => apiHelpers.getMemberships() },
  ];

  const testAllEndpoints = async () => {
    setIsTesting(true);
    setResults([]);

    for (const { name, endpoint, test } of endpoints) {
      // Add loading state
      setResults(prev => [...prev, { endpoint: name, status: 'loading', message: 'Testing...' }]);

      try {
        const data = await test();
        setResults(prev => prev.map(r => 
          r.endpoint === name 
            ? { endpoint: name, status: 'success', message: 'Success!', data }
            : r
        ));
      } catch (error: any) {
        setResults(prev => prev.map(r => 
          r.endpoint === name 
            ? { 
                endpoint: name, 
                status: 'error', 
                message: error.response?.status === 404 
                  ? 'Endpoint not found (404)' 
                  : error.response?.status 
                    ? `HTTP ${error.response.status}: ${error.response.statusText}`
                    : error.message || 'Unknown error'
              }
            : r
        ));
      }
    }

    setIsTesting(false);
  };

  useEffect(() => {
    testAllEndpoints();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Backend Connectivity Test</h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-2">
              <strong>API Base URL:</strong> {API_BASE_URL}
            </p>
            <button
              onClick={testAllEndpoints}
              disabled={isTesting}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg transition-colors"
            >
              {isTesting ? 'Testing...' : 'Test All Endpoints'}
            </button>
          </div>

          <div className="space-y-4">
            {results.map((result, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  result.status === 'success' 
                    ? 'bg-green-50 border-green-200' 
                    : result.status === 'error' 
                    ? 'bg-red-50 border-red-200' 
                    : 'bg-yellow-50 border-yellow-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{result.endpoint}</h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      result.status === 'success' 
                        ? 'bg-green-100 text-green-800' 
                        : result.status === 'error' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {result.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{result.message}</p>
                {result.status === 'success' && result.data && (
                  <details className="mt-2">
                    <summary className="text-sm text-blue-600 cursor-pointer">View Response</summary>
                    <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto max-h-40">
                      {JSON.stringify(result.data, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Troubleshooting Tips:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Check if the backend server is running and accessible</li>
              <li>• Verify CORS settings on the backend</li>
              <li>• Ensure environment variables are set correctly</li>
              <li>• Check network connectivity and firewall settings</li>
              <li>• Verify the API endpoints match between frontend and backend</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestBackendConnectivity; 