'use client';

import React, { useState, useEffect } from 'react';
import { apiHelpers, BlogPost } from '../../utils/api';

const TestBlogDisplay: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        console.log('Testing blog fetch...');
        const data = await apiHelpers.getBlogs();
        console.log('Blogs fetched successfully:', data);
        setBlogs(data);
      } catch (err) {
        console.error('Blog fetch failed:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Testing Blog Display</h1>
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Testing Blog Display</h1>
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Testing Blog Display</h1>
      <p className="mb-4">Found {blogs.length} blogs</p>
      
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog._id} className="border border-gray-300 p-4 rounded">
            <h2 className="text-lg font-semibold">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>Category: {blog.category}</span> | 
              <span> Date: {blog.date}</span> | 
              <span> Views: {blog.views}</span>
            </div>
            <div className="mt-2">
              <strong>Slug:</strong> {blog.slug}
            </div>
            {blog.heroImage && (
              <div className="mt-2">
                <strong>Image:</strong> {blog.heroImage.substring(0, 50)}...
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestBlogDisplay; 