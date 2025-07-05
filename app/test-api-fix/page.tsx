"use client";

import { useState, useEffect } from 'react';
import { 
  useIndustryPartners, 
  useActiveMentors, 
  useCampusEvents, 
  useNews,
  useAdvisors,
  useCourses
} from '../../utils/api';

interface ApiTestResult {
  name: string;
  status: 'loading' | 'success' | 'error';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  error?: string;
  url?: string;
}

export default function TestApiFix() {
  const [results, setResults] = useState<ApiTestResult[]>([]);

  // API Hooks
  const industryPartners = useIndustryPartners();
  const mentors = useActiveMentors();
  const campusEvents = useCampusEvents();
  const news = useNews();
  const advisors = useAdvisors();
  const courses = useCourses();

  useEffect(() => {
    const testResults: ApiTestResult[] = [
      {
        name: 'Industry Partners',
        status: industryPartners.loading ? 'loading' : industryPartners.error ? 'error' : 'success',
        data: industryPartners.partners,
        error: industryPartners.error || undefined,
        url: 'https://backend-rakj.onrender.com/api/v1/logo/getlogo'
      },
      {
        name: 'Mentors',
        status: mentors.loading ? 'loading' : mentors.error ? 'error' : 'success',
        data: mentors.mentors,
        error: mentors.error || undefined,
        url: 'https://backend-rakj.onrender.com/api/v1/mentor/all'
      },
      {
        name: 'Campus Events',
        status: campusEvents.loading ? 'loading' : campusEvents.error ? 'error' : 'success',
        data: campusEvents.events,
        error: campusEvents.error || undefined,
        url: 'https://backend-rakj.onrender.com/api/v1/campusevent/getcampusevents'
      },
      {
        name: 'News',
        status: news.loading ? 'loading' : news.error ? 'error' : 'success',
        data: news.news,
        error: news.error || undefined,
        url: 'https://backend-rakj.onrender.com/api/v1/news/all'
      },
      {
        name: 'Advisors',
        status: advisors.loading ? 'loading' : advisors.error ? 'error' : 'success',
        data: advisors.advisors,
        error: advisors.error || undefined,
        url: 'https://backend-rakj.onrender.com/api/v1/advisor/getadvisors'
      },
      {
        name: 'Courses',
        status: courses.loading ? 'loading' : courses.error ? 'error' : 'success',
        data: courses.courses,
        error: courses.error || undefined,
        url: 'https://backend-rakj.onrender.com/api/v1/courses'
      }
    ];

    setResults(testResults);
  }, [
    industryPartners, mentors, campusEvents, news, advisors, courses
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'error': return 'text-red-600 bg-red-100';
      case 'loading': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'loading': return '⏳';
      default: return '❓';
    }
  };

  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.filter(r => r.status === 'error').length;
  const loadingCount = results.filter(r => r.status === 'loading').length;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            API Base URL Fix Test Results
          </h1>
          <p className="text-gray-600 mb-6">
            This page tests all backend API integrations to verify the base URL fix is working correctly.
          </p>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">{successCount}</div>
              <div className="text-sm text-green-700">Successful APIs</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">{errorCount}</div>
              <div className="text-sm text-red-700">Failed APIs</div>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600">{loadingCount}</div>
              <div className="text-sm text-yellow-700">Loading APIs</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">{results.length}</div>
              <div className="text-sm text-blue-700">Total APIs</div>
            </div>
          </div>

          {/* API Results */}
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {result.name}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(result.status)}`}>
                    {getStatusIcon(result.status)} {result.status.toUpperCase()}
                  </span>
                </div>
                
                <div className="text-sm text-gray-600 mb-2">
                  <strong>URL:</strong> {result.url}
                </div>

                {result.status === 'success' && result.data && (
                  <div className="text-sm text-gray-700">
                    <strong>Data Count:</strong> {Array.isArray(result.data) ? result.data.length : 'Object'}
                    {Array.isArray(result.data) && result.data.length > 0 && (
                      <div className="mt-2">
                        <strong>Sample Data:</strong>
                        <pre className="bg-gray-100 p-2 rounded text-xs overflow-auto max-h-32">
                          {JSON.stringify(result.data[0], null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {result.status === 'error' && result.error && (
                  <div className="text-sm text-red-600">
                    <strong>Error:</strong> {result.error}
                  </div>
                )}

                {result.status === 'loading' && (
                  <div className="text-sm text-yellow-600">
                    Loading data...
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">What This Test Verifies</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• All API endpoints are accessible with the correct base URL</li>
              <li>• No more 404 errors due to double URL construction</li>
              <li>• Data is being fetched successfully from the backend</li>
              <li>• Components will load data correctly in production</li>
            </ul>
          </div>

          {/* Success Message */}
          {errorCount === 0 && successCount > 0 && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-2">🎉</span>
                <div>
                  <h3 className="text-lg font-semibold text-green-900">
                    All APIs Working Successfully!
                  </h3>
                  <p className="text-sm text-green-700">
                    The API base URL fix has been successfully implemented. All mapped components should now load data correctly in production.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorCount > 0 && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center">
                <span className="text-2xl mr-2">⚠️</span>
                <div>
                  <h3 className="text-lg font-semibold text-red-900">
                    Some APIs Are Still Failing
                  </h3>
                  <p className="text-sm text-red-700">
                    {errorCount} API(s) are still returning errors. Please check the backend server status and API endpoints.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 