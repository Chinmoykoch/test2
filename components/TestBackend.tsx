import React, { useState } from 'react';
import { apiHelpers, API_ENDPOINTS } from '../utils/api';

const TestBackend = () => {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const addResult = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
  };

  const testBackend = async () => {
    setLoading(true);
    setTestResults([]);

    try {
      // Test 1: Basic GET request to enquiries
      addResult('Testing GET /api/v1/enquiries...');
      const getResponse = await fetch('https://backend-rakj.onrender.com/api/v1/enquiries');
      const getData = await getResponse.json();
      addResult(`GET Response: ${JSON.stringify(getData)}`);

      // Test 2: POST request to enquiries
      addResult('Testing POST /api/v1/enquiries...');
      const postResponse = await fetch('https://backend-rakj.onrender.com/api/v1/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Test User',
          phoneNumber: '1234567890',
          email: 'test@example.com',
          city: 'Mumbai',
          course: 'Test Course'
        })
      });
      const postData = await postResponse.json();
      addResult(`POST Response: ${JSON.stringify(postData)}`);

      // Test 3: Using apiHelpers
      addResult('Testing apiHelpers.submitEnquiry...');
      try {
        const helperResponse = await apiHelpers.submitEnquiry({
          name: 'Test User 2',
          phoneNumber: '1234567891',
          email: 'test2@example.com',
          city: 'Delhi',
          course: 'Test Course 2'
        });
        addResult(`Helper Response: ${JSON.stringify(helperResponse)}`);
      } catch (error: any) {
        addResult(`Helper Error: ${error.message}`);
      }

    } catch (error: any) {
      addResult(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Backend API Test</h1>
      
      <button
        onClick={testBackend}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Backend APIs'}
      </button>

      <div className="bg-gray-100 p-4 rounded">
        <h2 className="font-bold mb-2">Test Results:</h2>
        {testResults.length === 0 ? (
          <p className="text-gray-500">No tests run yet. Click the button above to start testing.</p>
        ) : (
          <div className="space-y-1">
            {testResults.map((result, index) => (
              <div key={index} className="text-sm font-mono bg-white p-2 rounded">
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestBackend; 