'use client';

import React from 'react';
import BackendStatus from '@/components/BackendStatus';
import ExampleBackendUsage from '@/components/ExampleBackendUsage';
import { env } from '@/utils/env';

const TestBackendPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Backend Integration Test
          </h1>
          
          <div className="space-y-8">
            {/* Backend Status */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Backend Connection Status
              </h2>
              <BackendStatus showDetails={true} />
            </div>
            
            {/* Environment Variables */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Environment Configuration
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Backend URLs</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">Backend URL:</span>
                        <br />
                        <code className="bg-white px-2 py-1 rounded border">
                          {env.BACKEND_URL}
                        </code>
                      </div>
                      <div>
                        <span className="text-gray-600">API Base URL:</span>
                        <br />
                        <code className="bg-white px-2 py-1 rounded border">
                          {env.API_BASE_URL}
                        </code>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">App Configuration</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-600">App URL:</span>
                        <br />
                        <code className="bg-white px-2 py-1 rounded border">
                          {env.APP_URL}
                        </code>
                      </div>
                      <div>
                        <span className="text-gray-600">Environment:</span>
                        <br />
                        <code className="bg-white px-2 py-1 rounded border">
                          {env.NODE_ENV}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* API Keys Status */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                API Keys Configuration
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Razorpay Key ID:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        env.RAZORPAY_KEY_ID 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {env.RAZORPAY_KEY_ID ? 'Configured' : 'Not Set'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Razorpay Secret:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        env.RAZORPAY_KEY_SECRET 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {env.RAZORPAY_KEY_SECRET ? 'Configured' : 'Not Set'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">News API Key:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        env.NEWS_API_KEY 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {env.NEWS_API_KEY ? 'Configured' : 'Not Set'}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">MongoDB URI:</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        env.MONGODB_URI 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {env.MONGODB_URI ? 'Configured' : 'Optional'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* API Testing */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                API Testing
              </h2>
              <ExampleBackendUsage />
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Next Steps
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="space-y-3 text-sm">
                  <p className="text-blue-800">
                    <strong>✅ Backend URL is configured:</strong> {env.BACKEND_URL}
                  </p>
                  <p className="text-gray-700">
                    1. Update your API keys in <code>.env.local</code> file
                  </p>
                  <p className="text-gray-700">
                    2. Test API endpoints using the utilities in <code>utils/api.ts</code>
                  </p>
                  <p className="text-gray-700">
                    3. Use the <code>BackendStatus</code> component to monitor connection
                  </p>
                  <p className="text-gray-700">
                    4. Check the <code>ENV_SETUP.md</code> file for detailed documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestBackendPage;
