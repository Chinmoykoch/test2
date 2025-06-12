'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronRight, Loader2, Calendar, Clock } from 'lucide-react';
import { apiHelpers, type BlogPost, type BlogAuthor } from '../utils/api';

// Category colors mapping
const categoryColors: Record<string, string> = {
  Education: "bg-yellow-400 text-black",
  Career: "bg-blue-500 text-white",
  Facilities: "bg-green-500 text-white",
  Alumni: "bg-purple-500 text-white",
  Curriculum: "bg-red-500 text-white",
  Placements: "bg-indigo-500 text-white",
  Faculty: "bg-pink-500 text-white",
  "Student Life": "bg-orange-500 text-white",
  // Add more categories as needed
  ws2: "bg-gray-500 text-white",
};

interface StaticBlog {
  id: string;
  slug?: string;
  _id?: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  author: BlogAuthor;
  tags: string[];
  keywords: string;
}

interface BlogSectionProps {
  staticBlogs?: StaticBlog[]; // Fallback static blogs
  showTitle?: boolean;
  maxPosts?: number;
}

const BlogSection: React.FC<BlogSectionProps> = ({ 
  staticBlogs = [], 
  showTitle = true, 
  maxPosts = 6 
}) => {
  const [apiBlogs, setApiBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiHelpers.getBlogs();
        setApiBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs');
        // Fallback to static blogs if API fails
        setApiBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Use API blogs if available, otherwise fallback to static ones
  const displayBlogs = apiBlogs.length > 0 ? apiBlogs.slice(0, maxPosts) : staticBlogs.slice(0, maxPosts);

  // Convert API blog to display format
  const formatBlogForDisplay = (blog: BlogPost) => ({
    id: blog.slug,
    title: blog.title,
    excerpt: blog.excerpt,
    image: blog.heroImage,
    category: blog.category,
    date: blog.date,
    readTime: blog.readTime,
    author: blog.author,
  });

  // Loading state
  if (loading) {
    return (
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        {showTitle && (
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <span className="w-2 h-8 bg-yellow-400 inline-block"></span>
              Latest Blog Posts
            </h2>
          </div>
        )}
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-2 text-gray-600">Loading blog posts...</span>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {showTitle && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span className="w-2 h-8 bg-yellow-400 inline-block"></span>
            Latest Blog Posts
          </h2>
          {error && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
              <p className="text-yellow-700 text-sm">
                ⚠️ {error}. Showing cached posts.
              </p>
            </div>
          )}
          <Link href="/blog">
            <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors">
              View All Posts
            </Button>
          </Link>
        </div>
      )}

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayBlogs.map((blog) => {
          // Format blog data based on source (API or static)
          const formattedBlog = apiBlogs.length > 0 ? formatBlogForDisplay(blog as BlogPost) : blog as BlogPost;

          return (
            <div key={('slug' in formattedBlog ? formattedBlog.slug : '') || ('_id' in formattedBlog ? formattedBlog._id : '') || ('id' in formattedBlog ? formattedBlog.id : '')} className="scroll-mt-16">
              <Link href={`/blog/${('slug' in formattedBlog ? formattedBlog.slug : '') || ('_id' in formattedBlog ? formattedBlog._id : '') || ('id' in formattedBlog ? formattedBlog.id : '')}`} className="group">
                <Card className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={('image' in formattedBlog ? formattedBlog.image : formattedBlog.heroImage) || "/placeholder.svg"}
                      alt={formattedBlog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${categoryColors[formattedBlog.category] || 'bg-gray-500 text-white'} px-3 py-1 text-xs font-semibold`}>
                        {formattedBlog.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                      {formattedBlog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{formattedBlog.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{formattedBlog.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{formattedBlog.readTime}</span>
                      </div>
                    </div>
                    <Button className="mt-4 bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors w-full">
                      Read More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Show message if no blogs available */}
      {displayBlogs.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">No blog posts available at the moment.</p>
          <p className="text-gray-500 text-sm mt-2">Please check back later for new content.</p>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
