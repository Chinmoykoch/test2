'use client';

import React, { useState, useEffect } from 'react';
import { apiHelpers, config } from '@/utils/api';

interface BackendStatusProps {
  showDetails?: boolean;
}

const BackendStatus: React.FC<BackendStatusProps> = ({ showDetails = false }) => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        await apiHelpers.healthCheck();
        setStatus('connected');
        setError(null);
      } catch (err) {
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    };

    checkBackendStatus();
  }, []);

  if (!showDetails) {
    return (
      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
        status === 'connected' 
          ? 'bg-green-100 text-green-800' 
          : status === 'error' 
          ? 'bg-red-100 text-red-800' 
          : 'bg-yellow-100 text-yellow-800'
      }`}>
        <div className={`w-2 h-2 rounded-full mr-2 ${
          status === 'connected' 
            ? 'bg-green-500' 
            : status === 'error' 
            ? 'bg-red-500' 
            : 'bg-yellow-500 animate-pulse'
        }`} />
        {status === 'checking' && 'Checking...'}
        {status === 'connected' && 'Backend Connected'}
        {status === 'error' && 'Backend Error'}
      </div>
    );
  }

  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Backend Status</h3>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Backend URL:</span>
          <span className="text-sm font-mono">{config.backendUrl}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">API Base URL:</span>
          <span className="text-sm font-mono">{config.apiBaseUrl}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">Status:</span>
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            status === 'connected' 
              ? 'bg-green-100 text-green-800' 
              : status === 'error' 
              ? 'bg-red-100 text-red-800' 
              : 'bg-yellow-100 text-yellow-800'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              status === 'connected' 
                ? 'bg-green-500' 
                : status === 'error' 
                ? 'bg-red-500' 
                : 'bg-yellow-500 animate-pulse'
            }`} />
            {status === 'checking' && 'Checking...'}
            {status === 'connected' && 'Connected'}
            {status === 'error' && 'Error'}
          </div>
        </div>
        
        {error && (
          <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-sm text-red-700">
            <strong>Error:</strong> {error}
          </div>
        )}
        
        {status === 'connected' && (
          <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-700">
            ✅ Backend is accessible and responding
          </div>
        )}
      </div>
    </div>
  );
};

export default BackendStatus;
