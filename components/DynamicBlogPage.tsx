'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight, Search, Tag, Loader2 } from 'lucide-react';
import { apiHelpers, type BlogPost } from '../utils/api';

// Category colors mapping
const categoryColors: Record<string, string> = {
  Education: "bg-yellow-400 text-black",
  Career: "bg-yellow-300 text-white",
  Facilities: "bg-green-500 text-white",
  Alumni: "bg-purple-500 text-white",
  Curriculum: "bg-red-500 text-white",
  Placements: "bg-indigo-500 text-white",
  Faculty: "bg-pink-500 text-white",
  "Student Life": "bg-orange-500 text-white",
  "Video Editing": "bg-cyan-500 text-white",
  "BBA Course in Advertising and Marketing": "bg-emerald-500 text-white",
  ws2: "bg-gray-500 text-white",
  // Add more categories as needed
};

// Static fallback blogs (same as original)
const staticBlogs = [
  {
    id: "top-5-reasons-to-choose-inframe-school",
    title: "Top 5 Reasons to Choose Inframe School for Your Child's Education",
    excerpt: "Discover why Inframe School stands out as one of the best design schools in India and the top arts & design school in Rajasthan.",
    image: "/images/gallery/1717492615506 - Copy (2).jpg",
    category: "Education",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    tags: ["design education", "arts school", "best design college", "creative education", "Rajasthan"],
    keywords: "top design school, arts education in Rajasthan, best design college in India",
  },
  {
    id: "why-inframe-school-is-the-best-choice",
    title: "Why Inframe School is the Best Choice for Your Child's Future",
    excerpt: "Explore the perfect blend of education, expertise, and exposure at Inframe School for students after 12th grade.",
    image: "/images/gallery/1721737773149.jpg",
    category: "Career",
    date: "Feb 25, 2025",
    readTime: "6 min read",
    tags: ["career guidance", "design education", "student success", "future prospects", "creative careers"],
    keywords: "design school career, creative education future, design student success",
  },
  {
    id: "creative-curriculum-at-inframe",
    title: "Creative Curriculum at Inframe: Beyond Traditional Education",
    excerpt: "Discover how our innovative curriculum prepares students for real-world challenges in the creative industry.",
    image: "/images/gallery/1721737896096.jpg",
    category: "Curriculum",
    date: "Feb 20, 2025",
    readTime: "7 min read",
    tags: ["curriculum", "creative education", "innovation", "design thinking", "practical learning"],
    keywords: "creative curriculum, design education innovation, practical learning design",
  },
  {
    id: "state-of-the-art-facilities",
    title: "State-of-the-Art Facilities at Inframe School",
    excerpt: "Explore our world-class facilities designed to nurture creativity and provide hands-on learning experiences.",
    image: "/images/gallery/1721738128651.jpg",
    category: "Facilities",
    date: "Feb 18, 2025",
    readTime: "4 min read",
    tags: ["facilities", "modern equipment", "creative spaces", "learning environment", "technology"],
    keywords: "design school facilities, creative learning spaces, modern design equipment",
  },
  {
    id: "success-stories-from-inframe-alumni",
    title: "Success Stories from Inframe Alumni: Where Are They Now?",
    excerpt: "Meet our successful alumni who have made their mark in the creative industry worldwide.",
    image: "/images/gallery/1721737773149.jpg",
    category: "Alumni",
    date: "Feb 15, 2025",
    readTime: "8 min read",
    tags: ["alumni", "success stories", "career achievements", "design industry", "inspiration"],
    keywords: "design school alumni, creative career success, design industry professionals",
  },
  {
    id: "student-life-at-inframe-school",
    title: "Student Life at Inframe School: Beyond the Classroom",
    excerpt: "Explore the vibrant student community, extracurricular activities, and creative events at Inframe School.",
    image: "/images/gallery/1721738128651.jpg",
    category: "Student Life",
    date: "Jan 25, 2025",
    readTime: "5 min read",
    tags: ["student life", "campus activities", "creative events", "community", "extracurricular"],
    keywords: "design school campus life, creative activities, student community, design school events",
  },
];

const DynamicBlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await apiHelpers.getBlogs();
        setBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs');
        // Fallback to static blogs if API fails
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Use API blogs if available, otherwise fallback to static ones
  const allBlogs = blogs.length > 0 ? blogs : staticBlogs;

  // Convert API blog to display format
  const formatBlogForDisplay = (blog: BlogPost) => ({
    id: blog.slug || blog._id,
    title: blog.title,
    excerpt: blog.excerpt,
    image: blog.heroImage,
    category: blog.category,
    date: blog.date,
    readTime: blog.readTime,
    author: blog.author,
  });

  // Filter blogs based on search term and category
  const filteredBlogs = allBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ('tags' in blog && blog.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get unique categories from blogs
  const categories = ['All', ...Array.from(new Set(allBlogs.map(blog => blog.category)))];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-yellow-300" />
            <span className="ml-2 text-gray-600">Loading blog posts...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-yellow-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover insights, stories, and the latest updates from Inframe School
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md max-w-2xl mx-auto">
                <p className="text-yellow-700 text-sm">
                  ⚠️ {error}. Showing cached posts.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="featured-articles" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
            <span className="w-2 h-8 bg-yellow-400 inline-block"></span>
            Featured Articles
          </h2>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-50">
              All Categories
            </Button>
            <Button variant="outline" className="border-yellow-400 text-black hover:bg-yellow-50">
              Most Popular
            </Button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mb-10 overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            <Button className="bg-black text-white hover:bg-yellow-400 hover:text-black">
              All
            </Button>
            {Object.keys(categoryColors).map((category) => (
              <Button
                key={category}
                variant="outline"
                className={`border-2 ${categoryColors[category].replace('bg-', 'border-').replace(' text-white', '')} hover:bg-opacity-10`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid - Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => {
            const formattedBlog = formatBlogForDisplay(blog as BlogPost);
            return (
              <div key={formattedBlog.id || ('_id' in blog ? blog._id : '')} id={formattedBlog.id} className="scroll-mt-16">
                <Link href={`/blog/${formattedBlog.id}`} className="group">
                  <Card className="overflow-hidden border-2 hover:border-yellow-400 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={formattedBlog.image || "/placeholder.svg"}
                        alt={formattedBlog.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${categoryColors[formattedBlog.category] || 'bg-gray-500 text-white'} px-3 py-1 text-xs font-semibold`}>
                          {formattedBlog.category}
                        </Badge>
                      </div>
                      {'views' in blog && blog.views && (
                        <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {blog.views} views
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2">
                        {formattedBlog.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{formattedBlog.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
                        <span>{formattedBlog.date}</span>
                        <span>{formattedBlog.readTime}</span>
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
        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <div className="text-gray-500 text-xl mb-4">No blog posts found</div>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default DynamicBlogPage;
