"use client";
import React, { useState } from 'react';
import { apiClient, API_ENDPOINTS } from '@/utils/api';

interface EndpointTest {
  name: string;
  endpoint: string;
  method: string;
  status: 'pending' | 'success' | 'error';
  response?: Record<string, unknown>;
  error?: string;
}

const TestEndpointsPage = () => {
  const [tests, setTests] = useState<EndpointTest[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [summary, setSummary] = useState({ total: 0, success: 0, error: 0 });

  const endpointTests: Omit<EndpointTest, 'status' | 'response' | 'error'>[] = [
    // Core endpoints
    { name: 'Health Check', endpoint: API_ENDPOINTS.HEALTH_CHECK, method: 'GET' },
    
    // About Us endpoints
    { name: 'About Us Hero Images', endpoint: API_ENDPOINTS.GET_HERO_IMAGES, method: 'GET' },
    { name: 'About Us Statistics', endpoint: API_ENDPOINTS.GET_STATISTICS, method: 'GET' },
    { name: 'About Us Core Values', endpoint: API_ENDPOINTS.GET_CORE_VALUES, method: 'GET' },
    { name: 'About Us Campus Images', endpoint: API_ENDPOINTS.GET_CAMPUS_IMAGES, method: 'GET' },
    
    // Life at Inframe endpoints
    { name: 'Life at Inframe Sections', endpoint: API_ENDPOINTS.GET_LIFE_AT_INFRAME_SECTIONS, method: 'GET' },
    { name: 'Student Services', endpoint: API_ENDPOINTS.GET_STUDENT_SERVICES, method: 'GET' },
    { name: 'Sports Facilities', endpoint: API_ENDPOINTS.GET_SPORTS_FACILITIES, method: 'GET' },
    { name: 'Life at Inframe Gallery', endpoint: API_ENDPOINTS.GET_LIFE_AT_INFRAME_GALLERY, method: 'GET' },
    
    // Downloads endpoints
    { name: 'Downloads', endpoint: API_ENDPOINTS.GET_DOWNLOADS, method: 'GET' },
    { name: 'Download Categories', endpoint: API_ENDPOINTS.GET_DOWNLOAD_CATEGORIES, method: 'GET' },
    
    // Blog endpoints
    { name: 'Blog Posts', endpoint: API_ENDPOINTS.GET_BLOGS, method: 'GET' },
    { name: 'Published Blogs', endpoint: API_ENDPOINTS.GET_PUBLISHED_BLOGS, method: 'GET' },
    
    // Testimonials
    { name: 'Testimonials', endpoint: API_ENDPOINTS.GET_TESTIMONIALS, method: 'GET' },
    
    // Student Clubs
    { name: 'Student Clubs', endpoint: API_ENDPOINTS.GET_STUDENT_CLUBS, method: 'GET' },
    
    // Campus Events
    { name: 'Campus Events', endpoint: API_ENDPOINTS.GET_CAMPUS_EVENTS, method: 'GET' },
    
    // Membership
    { name: 'Membership', endpoint: API_ENDPOINTS.GET_MEMBERSHIP, method: 'GET' },
    
    // Advisors
    { name: 'Advisors', endpoint: API_ENDPOINTS.GET_ADVISORS, method: 'GET' },
    
    // Industry Partners
    { name: 'Industry Partners', endpoint: API_ENDPOINTS.GET_INDUSTRY_PARTNERS, method: 'GET' },
    
    // Enquiries
    { name: 'Enquiries', endpoint: API_ENDPOINTS.GET_ENQUIRIES, method: 'GET' },
    { name: 'Enquiry Stats', endpoint: API_ENDPOINTS.GET_ENQUIRY_STATS, method: 'GET' },
    
    // Courses
    { name: 'Courses', endpoint: API_ENDPOINTS.GET_COURSES, method: 'GET' },
    { name: 'Course Programs', endpoint: API_ENDPOINTS.GET_COURSE_PROGRAMS, method: 'GET' },
  ];

  const runTests = async () => {
    setIsRunning(true);
    setTests(endpointTests.map(test => ({ ...test, status: 'pending' as const })));

    const results: EndpointTest[] = [];

    for (const test of endpointTests) {
      try {
        console.log(`Testing ${test.name}...`);
        
                 let response;
         switch (test.method) {
           case 'GET':
             response = await apiClient.get(test.endpoint);
             break;
           default:
             throw new Error(`Unsupported method: ${test.method}`);
         }

        results.push({
          ...test,
          status: 'success',
          response: response.data
        });
        
        console.log(`✅ ${test.name} - Success`);
                    } catch (error: unknown) {
         console.error(`❌ ${test.name} - Error:`, error);
         const errorMessage = error instanceof Error ? error.message : 'Unknown error';
         results.push({
           ...test,
           status: 'error',
           error: errorMessage
         });
       }
    }

    setTests(results);
    
    const summary = {
      total: results.length,
      success: results.filter(r => r.status === 'success').length,
      error: results.filter(r => r.status === 'error').length
    };
    setSummary(summary);
    setIsRunning(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'error': return 'text-red-600 bg-red-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'pending': return '⏳';
      default: return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            API Endpoints Test
          </h1>
          <p className="text-gray-600 mb-6">
            This page tests all mapped API endpoints to ensure they are working correctly.
          </p>
          
          <div className="flex gap-4 mb-6">
            <button
              onClick={runTests}
              disabled={isRunning}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isRunning ? 'Running Tests...' : 'Run All Tests'}
            </button>
            
            {summary.total > 0 && (
              <div className="flex gap-4 text-sm">
                <span className="px-3 py-1 bg-gray-100 rounded">
                  Total: {summary.total}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded">
                  Success: {summary.success}
                </span>
                <span className="px-3 py-1 bg-red-100 text-red-800 rounded">
                  Errors: {summary.error}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-4">
          {tests.map((test, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{getStatusIcon(test.status)}</span>
                  <h3 className="font-semibold text-gray-900">{test.name}</h3>
                </div>
                <div className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(test.status)}`}>
                  {test.status.toUpperCase()}
                </div>
              </div>
              
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-mono">{test.method}</span>
                <span className="mx-2">•</span>
                <span className="font-mono">{test.endpoint}</span>
              </div>
              
              {test.status === 'success' && test.response && (
                <div className="mt-2 p-3 bg-green-50 rounded border border-green-200">
                  <div className="text-sm font-medium text-green-800 mb-1">Response:</div>
                  <pre className="text-xs text-green-700 overflow-auto max-h-32">
                    {JSON.stringify(test.response, null, 2)}
                  </pre>
                </div>
              )}
              
              {test.status === 'error' && test.error && (
                <div className="mt-2 p-3 bg-red-50 rounded border border-red-200">
                  <div className="text-sm font-medium text-red-800 mb-1">Error:</div>
                  <div className="text-xs text-red-700">{test.error}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {tests.length === 0 && (
          <div className="text-center py-12">
                         <p className="text-gray-500">Click &quot;Run All Tests&quot; to start testing the endpoints.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestEndpointsPage; 