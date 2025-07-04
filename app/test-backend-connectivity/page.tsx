"use client";
import React, { useState, useEffect } from 'react';
import { BACKEND_URL, API_BASE_URL } from '@/utils/env';

const TestBackendConnectivityPage = () => {
  const [healthStatus, setHealthStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [healthResponse, setHealthResponse] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    testBackendHealth();
  }, []);

  const testBackendHealth = async () => {
    try {
      setHealthStatus('pending');
      setError('');
      
      console.log('Testing backend connectivity...');
      console.log('Backend URL:', BACKEND_URL);
      console.log('API Base URL:', API_BASE_URL);
      
      const response = await fetch(`${API_BASE_URL}/health`);
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setHealthResponse(data);
      setHealthStatus('success');
      console.log('✅ Backend health check successful:', data);
    } catch (err: unknown) {
      setHealthStatus('error');
      const errorMessage = err instanceof Error ? err.message : 'Unknown error';
      setError(errorMessage);
      console.error('❌ Backend health check failed:', err);
    }
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
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Backend Connectivity Test
          </h1>
          <p className="text-gray-600 mb-6">
            This page tests the basic connectivity to the backend server.
          </p>
          
          <div className="grid gap-4 mb-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Configuration</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-medium">Backend URL:</span>
                  <span className="ml-2 font-mono text-blue-600">{BACKEND_URL}</span>
                </div>
                <div>
                  <span className="font-medium">API Base URL:</span>
                  <span className="ml-2 font-mono text-blue-600">{API_BASE_URL}</span>
                </div>
              </div>
            </div>
          </div>
          
          <button
            onClick={testBackendHealth}
            disabled={healthStatus === 'pending'}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {healthStatus === 'pending' ? 'Testing...' : 'Test Connectivity'}
          </button>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Health Check Results</h2>
            <div className={`px-3 py-1 rounded text-sm font-medium ${getStatusColor(healthStatus)}`}>
              {healthStatus.toUpperCase()}
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">{getStatusIcon(healthStatus)}</span>
            <span className="text-gray-700">
              {healthStatus === 'pending' && 'Testing backend connectivity...'}
              {healthStatus === 'success' && 'Backend is reachable and healthy'}
              {healthStatus === 'error' && 'Backend connectivity failed'}
            </span>
          </div>
          
          {healthStatus === 'success' && healthResponse && (
            <div className="p-4 bg-green-50 rounded border border-green-200">
              <div className="text-sm font-medium text-green-800 mb-2">Response:</div>
              <pre className="text-xs text-green-700 overflow-auto">
                {JSON.stringify(healthResponse, null, 2)}
              </pre>
            </div>
          )}
          
          {healthStatus === 'error' && error && (
            <div className="p-4 bg-red-50 rounded border border-red-200">
              <div className="text-sm font-medium text-red-800 mb-2">Error:</div>
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestBackendConnectivityPage; 