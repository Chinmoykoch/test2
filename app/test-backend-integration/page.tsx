'use client';

import React, { useState } from 'react';
import { apiClient, API_ENDPOINTS } from '@/utils/api';
import { env } from '@/utils/env';

interface TestResult {
  endpoint: string;
  status: 'pending' | 'success' | 'error';
  response?: unknown;
  error?: string;
  time?: number;
}

const TestBackendIntegration = () => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const testEndpoints = [
    { name: 'Health Check', endpoint: '/health' },
    { name: 'Testimonials', endpoint: API_ENDPOINTS.GET_TESTIMONIALS },
    { name: 'Industry Partners', endpoint: API_ENDPOINTS.GET_INDUSTRY_PARTNERS },
    { name: 'Student Clubs', endpoint: API_ENDPOINTS.GET_STUDENT_CLUBS },
    { name: 'Membership', endpoint: API_ENDPOINTS.GET_MEMBERSHIP },
    { name: 'Blog Posts', endpoint: API_ENDPOINTS.GET_BLOGS },
  ];

  const testEndpoint = async (endpoint: string, name: string) => {
    const startTime = Date.now();
    
    try {
      const response = await apiClient.get(endpoint);
      const endTime = Date.now();
      
      return {
        endpoint: name,
        status: 'success' as const,
        response: response.data,
        time: endTime - startTime,
      };
    } catch (error: unknown) {
      const endTime = Date.now();
      
      return {
        endpoint: name,
        status: 'error' as const,
        error: error instanceof Error ? error.message : 'Unknown error',
        time: endTime - startTime,
      };
    }
  };

  const runAllTests = async () => {
    setIsLoading(true);
    setResults([]);

    const testResults: TestResult[] = [];
    
    for (const test of testEndpoints) {
      const result = await testEndpoint(test.endpoint, test.name);
      testResults.push(result);
      setResults([...testResults]);
    }

    setIsLoading(false);
  };

  const runSingleTest = async (endpoint: string, name: string) => {
    const result = await testEndpoint(endpoint, name);
    setResults(prev => [...prev.filter(r => r.endpoint !== name), result]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Backend Integration Test
          </h1>

          {/* Configuration Display */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-4">
              Current Configuration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-blue-700">Backend URL:</span>
                <br />
                <code className="bg-white px-2 py-1 rounded border text-sm">
                  {env.BACKEND_URL}
                </code>
              </div>
              <div>
                <span className="text-sm font-medium text-blue-700">API Base URL:</span>
                <br />
                <code className="bg-white px-2 py-1 rounded border text-sm">
                  {env.API_BASE_URL}
                </code>
              </div>
            </div>
          </div>

          {/* Test Controls */}
          <div className="mb-8">
            <button
              onClick={runAllTests}
              disabled={isLoading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 mr-4"
            >
              {isLoading ? 'Running Tests...' : 'Run All Tests'}
            </button>
            
            <button
              onClick={() => setResults([])}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
            >
              Clear Results
            </button>
          </div>

          {/* Individual Test Buttons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {testEndpoints.map((test) => (
              <button
                key={test.name}
                onClick={() => runSingleTest(test.endpoint, test.name)}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-sm"
              >
                Test {test.name}
              </button>
            ))}
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Test Results
              </h2>
              
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`border rounded-lg p-4 ${
                    result.status === 'success'
                      ? 'border-green-200 bg-green-50'
                      : 'border-red-200 bg-red-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">
                      {result.endpoint}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          result.status === 'success'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {result.status.toUpperCase()}
                      </span>
                      {result.time && (
                        <span className="text-xs text-gray-500">
                          {result.time}ms
                        </span>
                      )}
                    </div>
                  </div>

                  {result.status === 'success' ? (
                    <div className="text-sm">
                      <p className="text-green-700 mb-2">
                        ✅ Successfully connected to backend
                      </p>
                      <details className="text-xs">
                        <summary className="cursor-pointer text-gray-600">
                          View Response Data
                        </summary>
                        <pre className="mt-2 bg-white p-2 rounded border overflow-auto max-h-32">
                          {JSON.stringify(result.response, null, 2)}
                        </pre>
                      </details>
                    </div>
                  ) : (
                    <div className="text-sm">
                      <p className="text-red-700">
                        ❌ Error: {result.error}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Summary */}
          {results.length > 0 && (
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Test Summary
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {results.length}
                  </div>
                  <div className="text-sm text-gray-600">Total Tests</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {results.filter(r => r.status === 'success').length}
                  </div>
                  <div className="text-sm text-gray-600">Successful</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">
                    {results.filter(r => r.status === 'error').length}
                  </div>
                  <div className="text-sm text-gray-600">Failed</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestBackendIntegration; 