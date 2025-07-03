"use client";
import React, { useState } from 'react';
import { apiHelpers, useCourseBySlug, useCourseProgramBySlug } from '../utils/api';

export default function TestBackend() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [testResults, setTestResults] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const testAPIs = async () => {
    setLoading(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const results: any = {};

    try {
      // Test health check
      console.log('Testing health check...');
      const healthResult = await apiHelpers.healthCheck();
      results.health = { success: true, data: healthResult };
      console.log('Health check result:', healthResult);
    } catch (error) {
      results.health = { success: false, error: error };
      console.error('Health check failed:', error);
    }

    try {
      // Test courses endpoint
      console.log('Testing courses endpoint...');
      const coursesResult = await apiHelpers.getAllCourses();
      results.courses = { success: true, data: coursesResult };
      console.log('Courses result:', coursesResult);
    } catch (error) {
      results.courses = { success: false, error: error };
      console.error('Courses failed:', error);
    }

    try {
      // Test course by slug
      console.log('Testing course by slug (interior-design)...');
      const courseResult = await apiHelpers.getCourseBySlug('interior-design');
      results.courseBySlug = { success: true, data: courseResult };
      console.log('Course by slug result:', courseResult);
    } catch (error) {
      results.courseBySlug = { success: false, error: error };
      console.error('Course by slug failed:', error);
    }

    try {
      // Test course program by slug
      console.log('Testing course program by slug (interior-design/bdes-in-interior-design)...');
      const programResult = await apiHelpers.getCourseProgramBySlug('interior-design', 'bdes-in-interior-design');
      results.courseProgramBySlug = { success: true, data: programResult };
      console.log('Course program by slug result:', programResult);
    } catch (error) {
      results.courseProgramBySlug = { success: false, error: error };
      console.error('Course program by slug failed:', error);
    }

    setTestResults(results);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Backend API Test</h1>
        
        <button
          onClick={testAPIs}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Test All APIs'}
        </button>

        <div className="space-y-6">
          {Object.entries(testResults).map(([key, result]: [string, any]) => (
            <div key={key} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h2>
              
              {result.success ? (
                <div>
                  <div className="text-green-600 font-semibold mb-2">✅ Success</div>
                  <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
                    {JSON.stringify(result.data, null, 2)}
                  </pre>
                </div>
              ) : (
                <div>
                  <div className="text-red-600 font-semibold mb-2">❌ Failed</div>
                  <pre className="bg-red-50 p-4 rounded text-sm overflow-auto max-h-96">
                    {JSON.stringify(result.error, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Test with React hooks */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">React Hooks Test</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">useCourseBySlug Hook</h3>
              <CourseBySlugTest />
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">useCourseProgramBySlug Hook</h3>
              <CourseProgramBySlugTest />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseBySlugTest() {
  const { course, loading, error } = useCourseBySlug('interior-design');

  return (
    <div>
      {loading && <div className="text-blue-600">Loading...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {course && (
        <div>
          <div className="text-green-600 font-semibold mb-2">✅ Course Found</div>
          <div className="text-sm">
            <p><strong>Title:</strong> {course.title}</p>
            <p><strong>Slug:</strong> {course.slug}</p>
            <p><strong>Programs:</strong> {course.programs?.length || 0}</p>
            {course.programs && course.programs.length > 0 && (
              <div className="mt-2">
                <strong>Program Titles:</strong>
                <ul className="list-disc list-inside ml-2">
                  {course.programs.map((program: any, index: number) => (
                    <li key={index}>{program.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CourseProgramBySlugTest() {
  const { program, loading, error } = useCourseProgramBySlug('interior-design', 'bdes-in-interior-design');

  return (
    <div>
      {loading && <div className="text-blue-600">Loading...</div>}
      {error && <div className="text-red-600">Error: {error}</div>}
      {program && (
        <div>
          <div className="text-green-600 font-semibold mb-2">✅ Program Found</div>
          <div className="text-sm">
            <p><strong>Title:</strong> {program.title}</p>
            <p><strong>Duration:</strong> {program.duration}</p>
            <p><strong>Description:</strong> {program.description?.substring(0, 100)}...</p>
          </div>
        </div>
      )}
    </div>
  );
} 