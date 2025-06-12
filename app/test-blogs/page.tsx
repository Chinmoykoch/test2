'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { apiHelpers, type BlogPost } from '../../utils/api';

const TestBlogsPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawResponse, setRawResponse] = useState<unknown>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Direct API call to see raw response
        const response = await fetch('https://backend-rakj.onrender.com/api/v1/blog/getblogs');
        const rawData = await response.json();
        setRawResponse(rawData);
        
        // Using our API helper
        const data = await apiHelpers.getBlogs();
        setBlogs(data);
        
        console.log('Raw API Response:', rawData);
        console.log('Processed Blogs:', data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Testing Blog API</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2">Loading blogs from API...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog API Test Results</h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h2 className="text-lg font-semibold text-red-800 mb-2">Error</h2>
            <p className="text-red-600">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Raw API Response */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Raw API Response</h2>
            <div className="bg-gray-100 rounded p-4 overflow-auto max-h-96">
              <pre className="text-sm">
                {JSON.stringify(rawResponse, null, 2)}
              </pre>
            </div>
          </div>

          {/* Processed Blogs */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Processed Blogs ({blogs.length} found)
            </h2>
            <div className="space-y-4 max-h-96 overflow-auto">
              {blogs.map((blog) => (
                <div key={blog._id} className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Category: {blog.category}</span>
                    <span>Views: {blog.views}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                    <span>Date: {blog.date}</span>
                    <span>Read Time: {blog.readTime}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-gray-500">Author: {blog.author.name}</span>
                  </div>
                  {blog.heroImage && (
                    <div className="mt-2">
                      <Image
                        src={blog.heroImage}
                        alt={blog.title}
                        width={400}
                        height={128}
                        className="w-full h-32 object-cover rounded"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* API Endpoint Info */}
        <div className="bg-white rounded-lg shadow p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">API Endpoint Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Endpoint</h3>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                GET https://backend-rakj.onrender.com/api/v1/blog/getblogs
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Response Structure</h3>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                {`{ success: boolean, data: BlogPost[] }`}
              </code>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            View Blog Page
          </Link>
          <Link
            href="/test-backend"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Test Backend APIs
          </Link>
          <Link
            href="/"
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestBlogsPage;
