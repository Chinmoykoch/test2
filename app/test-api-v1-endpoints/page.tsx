"use client";

import React, { useState} from 'react';
import { API_ENDPOINTS, API_BASE_URL } from '../../utils/api';

interface TestResult {
  endpoint: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  url: string;
}

export default function TestApiV1Endpoints() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const testEndpoints = async () => {
    setIsLoading(true);
    setResults([]);

    const endpointsToTest = [
      { name: 'Health Check', endpoint: API_ENDPOINTS.HEALTH_CHECK },
      { name: 'Testimonials', endpoint: API_ENDPOINTS.GET_TESTIMONIALS },
      { name: 'Blogs', endpoint: API_ENDPOINTS.GET_BLOGS },
      { name: 'Student Clubs', endpoint: API_ENDPOINTS.GET_STUDENT_CLUBS },
      { name: 'Campus Events', endpoint: API_ENDPOINTS.GET_CAMPUS_EVENTS },
      { name: 'Membership', endpoint: API_ENDPOINTS.GET_MEMBERSHIP },
      { name: 'Advisors', endpoint: API_ENDPOINTS.GET_ADVISORS },
      { name: 'Mentors', endpoint: API_ENDPOINTS.GET_MENTORS },
      { name: 'Industry Partners', endpoint: API_ENDPOINTS.GET_INDUSTRY_PARTNERS },
      { name: 'Career Posts', endpoint: API_ENDPOINTS.GET_CAREER_POSTS },
      { name: 'About Us Hero Images', endpoint: API_ENDPOINTS.GET_HERO_IMAGES },
      { name: 'About Us Statistics', endpoint: API_ENDPOINTS.GET_STATISTICS },
      { name: 'About Us Core Values', endpoint: API_ENDPOINTS.GET_CORE_VALUES },
      { name: 'About Us Campus Images', endpoint: API_ENDPOINTS.GET_CAMPUS_IMAGES },
      { name: 'Life at Inframe Sections', endpoint: API_ENDPOINTS.GET_LIFE_AT_INFRAME_SECTIONS },
      { name: 'Student Services', endpoint: API_ENDPOINTS.GET_STUDENT_SERVICES },
      { name: 'Sports Facilities', endpoint: API_ENDPOINTS.GET_SPORTS_FACILITIES },
      { name: 'Life at Inframe Gallery', endpoint: API_ENDPOINTS.GET_LIFE_AT_INFRAME_GALLERY },
      { name: 'Downloads', endpoint: API_ENDPOINTS.GET_DOWNLOADS },
      { name: 'Download Categories', endpoint: API_ENDPOINTS.GET_DOWNLOAD_CATEGORIES },
      { name: 'News All', endpoint: API_ENDPOINTS.GET_NEWS_ALL },
      { name: 'Latest News', endpoint: API_ENDPOINTS.GET_LATEST_NEWS },
      { name: 'Active News', endpoint: API_ENDPOINTS.GET_ACTIVE_NEWS },
      { name: 'News Types', endpoint: API_ENDPOINTS.GET_NEWS_TYPES },
      { name: 'News Subtypes', endpoint: API_ENDPOINTS.GET_NEWS_SUBTYPES },
      { name: 'News Tags', endpoint: API_ENDPOINTS.GET_NEWS_TAGS },
      { name: 'Session Logins', endpoint: API_ENDPOINTS.GET_SESSION_LOGINS },
      { name: 'Free Courses', endpoint: API_ENDPOINTS.GET_FREE_COURSES },
    ];

    const newResults: TestResult[] = [];

    for (const { name, endpoint } of endpointsToTest) {
      const fullUrl = `${API_BASE_URL}${endpoint}`;
      
      newResults.push({
        endpoint: name,
        status: 'pending',
        message: 'Testing...',
        url: fullUrl
      });

      setResults([...newResults]);

      try {
        const response = await fetch(fullUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          newResults[newResults.length - 1] = {
            endpoint: name,
            status: 'success',
            message: `✅ Success (${response.status})`,
            url: fullUrl
          };
        } else {
          newResults[newResults.length - 1] = {
            endpoint: name,
            status: 'error',
            message: `❌ Error (${response.status}): ${response.statusText}`,
            url: fullUrl
          };
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        newResults[newResults.length - 1] = {
          endpoint: name,
          status: 'error',
          message: `❌ Network Error: ${errorMessage}`,
          url: fullUrl
        };
      }

      setResults([...newResults]);
    }

    setIsLoading(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-600';
      case 'error':
        return 'text-red-600';
      case 'pending':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'pending':
        return '⏳';
      default:
        return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            API v1 Endpoints Test
          </h1>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Testing all API endpoints with the new <code className="bg-gray-100 px-2 py-1 rounded">/api/v1</code> prefix.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Base URL: <code className="bg-gray-100 px-2 py-1 rounded">{API_BASE_URL}</code>
            </p>
            
            <button
              onClick={testEndpoints}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              {isLoading ? 'Testing...' : 'Test All Endpoints'}
            </button>
          </div>

          {results.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Test Results ({results.length} endpoints)
              </h2>
              
              <div className="grid gap-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="border rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {result.endpoint}
                        </h3>
                        <p className={`text-sm ${getStatusColor(result.status)}`}>
                          {getStatusIcon(result.status)} {result.message}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 font-mono">
                          {result.url}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Summary</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Total:</span> {results.length}
                  </div>
                  <div className="text-green-600">
                    <span className="font-medium">Success:</span> {results.filter(r => r.status === 'success').length}
                  </div>
                  <div className="text-red-600">
                    <span className="font-medium">Errors:</span> {results.filter(r => r.status === 'error').length}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 