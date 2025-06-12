'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '../../components/ui/button';

const TestBlogDetailPage: React.FC = () => {
  const [blogId, setBlogId] = useState('6846f3e0e9d9d71b1d6d7ddb');

  const testUrls = [
    {
      label: 'Test Blog by ID (Backend)',
      url: `/blog/${blogId}`,
      description: 'Test fetching blog from backend API using the blog ID'
    },
    {
      label: 'Test Static Blog',
      url: '/blog/top-5-reasons-to-choose-inframe-school',
      description: 'Test existing static blog post'
    },
    {
      label: 'Test Non-existent Blog',
      url: '/blog/non-existent-blog-post',
      description: 'Test error handling for non-existent blog'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog Detail Page Testing</h1>
        
        {/* Blog ID Input */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Blog by ID</h2>
          <div className="flex gap-4 items-end">
            <div className="flex-grow">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Blog ID
              </label>
              <input
                type="text"
                value={blogId}
                onChange={(e) => setBlogId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter blog ID"
              />
            </div>
            <Link href={`/blog/${blogId}`}>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Test Blog
              </Button>
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Default ID: 6846f3e0e9d9d71b1d6d7ddb (from your backend)
          </p>
        </div>

        {/* API Endpoint Info */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">API Endpoint Information</h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-700">Get Blog by ID</h3>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm block mt-1">
                GET https://backend-rakj.onrender.com/api/v1/blog/getblogbyid/{blogId}
              </code>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Get Blog by Slug</h3>
              <code className="bg-gray-100 px-2 py-1 rounded text-sm block mt-1">
                GET https://backend-rakj.onrender.com/api/v1/blog/getblogbyslug/[slug]
              </code>
            </div>
          </div>
        </div>

        {/* Test Cases */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Test Cases</h2>
          <div className="space-y-4">
            {testUrls.map((test, index) => (
              <div key={index} className="border border-gray-200 rounded p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{test.label}</h3>
                    <p className="text-sm text-gray-600">{test.description}</p>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded mt-1 inline-block">
                      {test.url}
                    </code>
                  </div>
                  <Link href={test.url}>
                    <Button variant="outline" className="ml-4">
                      Test
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Response Structure */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Expected Backend Response</h2>
          <div className="bg-gray-100 rounded p-4 overflow-auto">
            <pre className="text-sm">
{`{
  "success": true,
  "data": {
    "_id": "6846f3e0e9d9d71b1d6d7ddb",
    "slug": "your-blog-slug",
    "title": "Blog Title",
    "excerpt": "Blog excerpt...",
    "heroImage": "https://res.cloudinary.com/dobngibkc/image/upload/...",
    "category": "ws2",
    "date": "June 9, 2025",
    "readTime": "5 min read",
    "author": {
      "name": "Inframe School Team",
      "image": "https://res.cloudinary.com/dobngibkc/image/upload/...",
      "_id": "6846f3e0e9d9d71b1d6d7ddc"
    },
    "sections": [
      {
        "id": "intro",
        "title": "Introduction",
        "content": "Content here...",
        "image": "https://res.cloudinary.com/dobngibkc/image/upload/...",
        "highlights": [],
        "_id": "6846f3e0e9d9d71b1d6d7ddd"
      }
    ],
    "relatedPosts": [],
    "isPublished": true,
    "views": 4,
    "createdAt": "2025-06-09T14:46:56.426Z",
    "updatedAt": "2025-06-09T14:54:37.331Z",
    "__v": 0
  }
}`}
            </pre>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Dynamic Blog Detail Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-green-600">✅ Implemented</h3>
              <ul className="text-sm space-y-1">
                <li>• Fetch blog by ID from backend</li>
                <li>• Fetch blog by slug from backend</li>
                <li>• Fallback to static blog data</li>
                <li>• Loading states with spinner</li>
                <li>• Error handling and 404 pages</li>
                <li>• Cloudinary image support</li>
                <li>• Author information display</li>
                <li>• View count display</li>
                <li>• Section-based content rendering</li>
                <li>• Table of contents (Index)</li>
                <li>• Social sharing buttons</li>
                <li>• Responsive design</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-600">🔧 How It Works</h3>
              <ul className="text-sm space-y-1">
                <li>• First tries static blog data</li>
                <li>• Then tries API by slug</li>
                <li>• Finally tries API by ID</li>
                <li>• Shows appropriate error if not found</li>
                <li>• Maintains original UI design</li>
                <li>• Indicates data source (API vs static)</li>
                <li>• Handles missing sections gracefully</li>
                <li>• Optimizes images automatically</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <Link href="/blog">
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
              View Blog List
            </Button>
          </Link>
          <Link href="/test-backend">
            <Button className="bg-green-600 text-white hover:bg-green-700">
              Test Backend APIs
            </Button>
          </Link>
          <Link href="/">
            <Button className="bg-gray-600 text-white hover:bg-gray-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestBlogDetailPage;
