"use client";

import React, { useState } from "react";
import { apiHelpers } from "@/utils/api";

const TestApiDebug: React.FC = () => {
  type ApiResult = { success?: boolean; error?: string; time?: number; data?: unknown };
  const [results, setResults] = useState<Record<string, ApiResult>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const testApi = async (endpoint: string, testFunction: () => Promise<unknown>) => {
    setLoading(endpoint);
    setError(null);
    try {
      console.log(`Testing ${endpoint}...`);
      const startTime = Date.now();
      const result = await testFunction();
      const endTime = Date.now();
      console.log(`${endpoint} result:`, result);
      console.log(`${endpoint} took ${endTime - startTime}ms`);
      
      setResults((prev) => ({
        ...prev,
        [endpoint]: {
          success: true,
          time: endTime - startTime,
          data: result,
        },
      }));
    } catch (err) {
      console.error(`${endpoint} error:`, err);
      setError(`${endpoint}: ${err instanceof Error ? err.message : 'Unknown error'}`);
      setResults((prev) => ({
        ...prev,
        [endpoint]: {
          success: false,
          error: err instanceof Error ? err.message : 'Unknown error',
        },
      }));
    } finally {
      setLoading(null);
    }
  };

  const testIndustryPartners = () => testApi('Industry Partners', () => apiHelpers.getIndustryPartners());
  const testTestimonials = () => testApi('Testimonials', () => apiHelpers.getTestimonials());
  const testMemberships = () => testApi('Memberships', () => apiHelpers.getMemberships());

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">API Debug Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <button
            onClick={testIndustryPartners}
            disabled={loading === 'Industry Partners'}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
          >
            {loading === 'Industry Partners' ? 'Testing...' : 'Test Industry Partners'}
          </button>
          
          <button
            onClick={testTestimonials}
            disabled={loading === 'Testimonials'}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:opacity-50"
          >
            {loading === 'Testimonials' ? 'Testing...' : 'Test Testimonials'}
          </button>
          
          <button
            onClick={testMemberships}
            disabled={loading === 'Memberships'}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:opacity-50"
          >
            {loading === 'Memberships' ? 'Testing...' : 'Test Memberships'}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <div className="space-y-6">
          {Object.entries(results).map(([endpoint, result]) => (
            <div key={endpoint} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-4">{endpoint}</h3>
              
              {result.success ? (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">Success</span>
                    {result.time && (
                      <span className="text-gray-500 text-sm">({result.time}ms)</span>
                    )}
                  </div>
                  
                  <div className="bg-gray-50 rounded p-4">
                    <h4 className="font-medium mb-2">Response Data:</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-gray-500">Time:</span>
                      <span className="font-mono text-xs">{result.time}ms</span>
                    </div>
                    <pre className="text-sm overflow-auto max-h-64">
                      {JSON.stringify(result.data, null, 2)}
                    </pre>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Failed</span>
                  </div>
                  
                  <div className="bg-red-50 rounded p-4">
                    <p className="text-red-600">{result.error}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestApiDebug; 