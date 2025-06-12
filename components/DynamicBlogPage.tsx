'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ChevronRight, Search, Tag, Loader2 } from 'lucide-react';
import { apiHelpers, type BlogPost } from '../utils/api';
import Head from 'next/head';

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
    tags: ["career guidance", "after 12th", "design career", "career planning", "design education"],
    keywords: "design career after 12th, best design college, career opportunities in design",
  },
  {
    id: "state-of-the-art-facilities",
    title: "Explore the State-of-the-Art Facilities at Inframe School",
    excerpt: "Take a virtual tour of our modern design labs, creative spaces, and innovative learning environments.",
    image: "/images/gallery/SKF02844.JPG",
    category: "Facilities",
    date: "Feb 20, 2025",
    readTime: "4 min read",
    tags: ["design labs", "creative spaces", "modern facilities", "design infrastructure", "technology"],
    keywords: "design school facilities, creative studio, design labs, modern campus",
  },
  {
    id: "success-stories-from-inframe-alumni",
    title: "Success Stories from Inframe School Alumni",
    excerpt: "Read inspiring stories of our graduates who are making waves in the design and creative industries.",
    image: "/images/gallery/1721366034581.jpg",
    category: "Alumni",
    date: "Feb 15, 2025",
    readTime: "7 min read",
    tags: ["alumni success", "design careers", "industry leaders", "graduate achievements", "placements"],
    keywords: "design school alumni, successful designers, career after design school, placement success",
  },
  {
    id: "creative-curriculum-at-inframe",
    title: "The Creative Curriculum at Inframe School",
    excerpt: "Discover our innovative approach to design education that combines theory, practice, and industry exposure.",
    image: "/images/gallery/1717475821142 - Copy (8).jpg",
    category: "Curriculum",
    date: "Feb 10, 2025",
    readTime: "5 min read",
    tags: ["design curriculum", "creative education", "practical learning", "industry exposure", "design theory"],
    keywords: "design school curriculum, creative education, practical design training, industry-focused learning",
  },
  {
    id: "industry-partnerships-and-placements",
    title: "Industry Partnerships and Placement Opportunities at Inframe",
    excerpt: "Learn about our extensive network of industry partners and how they help our students launch successful careers.",
    image: "/images/gallery/1717475821142 - Copy (8).jpg",
    category: "Placements",
    date: "Feb 5, 2025",
    readTime: "6 min read",
    tags: ["placements", "industry partnerships", "career opportunities", "internships", "job placement"],
    keywords: "design school placements, industry partnerships, design internships, career launch",
  },
  {
    id: "faculty-spotlight-meet-our-experts",
    title: "Faculty Spotlight: Meet Our Industry Experts",
    excerpt: "Get to know the accomplished professionals who make up our teaching faculty at Inframe School.",
    image: "/images/gallery/DSC04264.JPG",
    category: "Faculty",
    date: "Jan 30, 2025",
    readTime: "8 min read",
    tags: ["expert faculty", "industry professionals", "design mentors", "experienced teachers", "design education"],
    keywords: "design school faculty, industry experts teaching, professional mentors, design educators",
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
  const [apiBlogs, setApiBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching blogs from API...');
        const data = await apiHelpers.getBlogs();
        console.log('Fetched blogs:', data);
        setApiBlogs(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError('Failed to load blogs from backend');
        // Don't set apiBlogs to empty on error, keep existing data
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // Use API blogs if available, otherwise fallback to static ones
  const displayBlogs = apiBlogs.length > 0 ? apiBlogs : staticBlogs;

  // Convert API blog to display format for consistency
  const formatBlogForDisplay = (blog: BlogPost | any) => {
    if (blog._id) {
      // API blog format
      return {
        id: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        image: blog.heroImage,
        category: blog.category,
        date: blog.date,
        readTime: blog.readTime,
        tags: [], // API doesn't have tags, we'll generate some
        keywords: `${blog.category}, ${blog.title}`,
      };
    } else {
      // Static blog format
      return blog;
    }
  };

  // Get all tags from blogs for the hashtag section
  const allTags = Array.from(new Set([
    ...staticBlogs.flatMap(post => post.tags),
    ...displayBlogs.map(blog => blog.category || 'General')
  ]));

  // Filter blogs based on search
  const filteredBlogs = displayBlogs.filter(blog => {
    const formattedBlog = formatBlogForDisplay(blog);
    return formattedBlog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           formattedBlog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  });

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative z-10">
          <div className="relative h-[80vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <Image
              src="/images/gallery/DSC04232.JPG"
              alt="Inframe School - Best Design School in Rajasthan - Campus Life"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-yellow-500" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                      Inframe School Blog
                    </h1>
                  </div>
                  <p className="text-xl text-white/90 max-w-2xl mb-8">
                    Insights, stories, and inspiration from the top design school in Rajasthan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loading Content */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
            <span className="ml-2 text-gray-600">Loading blog posts from backend...</span>
          </div>
        </section>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Error Loading Blogs</h1>
            <p className="text-gray-600 mb-6">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-yellow-400 text-black hover:bg-yellow-500"
            >
              Try Again
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <Head>
        {/* Schema.org JSON-LD structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "Inframe School Blog",
              "description": "Insights, stories, and information about the best design school in Rajasthan",
              "url": "https://inframeschool.edu.in/blog",
              "publisher": {
                "@type": "Organization",
                "name": "Inframe School",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://inframeschool.edu.in/logo.png"
                }
              },
              "blogPost": filteredBlogs.map(blog => {
                const formatted = formatBlogForDisplay(blog);
                return {
                  "@type": "BlogPosting",
                  "headline": formatted.title,
                  "description": formatted.excerpt,
                  "keywords": formatted.keywords,
                  "datePublished": formatted.date,
                  "image": formatted.image
                };
              })
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-white">
        {/* Hero Section with Enhanced SEO */}
        <div className="relative z-10">
          <div className="relative h-[80vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
            <Image
              src="/images/gallery/DSC04232.JPG"
              alt="Inframe School - Best Design School in Rajasthan - Campus Life"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-yellow-500" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                      Inframe School Blog
                    </h1>
                  </div>
                  <p className="text-xl text-white/90 max-w-2xl mb-8">
                    Insights, stories, and inspiration from the top design school in Rajasthan focused on creating future-ready creative professionals
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow max-w-lg">
                      <input
                        type="text"
                        placeholder="Search articles, topics, keywords..."
                        className="w-full py-3 px-4 pl-12 rounded-md text-black"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        aria-label="Search blog posts"
                      />
                      <Search className="absolute left-3 top-3 text-gray-500" size={20} />
                    </div>
                    <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-6">
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Tags Section for SEO */}
        <section className="bg-gray-50 py-8 border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-4">
              <Tag className="text-yellow-500" />
              <h2 className="text-xl font-semibold">Popular Topics</h2>
              {error && (
                <div className="ml-auto">
                  <Badge className="bg-yellow-100 text-yellow-800 border border-yellow-300">
                    ⚠️ Using cached content
                  </Badge>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag, index) => (
                <Link key={index} href={`/tag/${tag.replace(/\s+/g, '-').toLowerCase()}`}>
                  <Badge className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 px-3 py-1">
                    #{tag}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles Section with Enhanced UI */}
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
              const formattedBlog = formatBlogForDisplay(blog);
              return (
                <div key={formattedBlog.id || blog._id} id={formattedBlog.id} className="scroll-mt-16">
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
                        {blog.views && (
                          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {blog.views} views
                          </div>
                        )}
                      </div>
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors">
                          {formattedBlog.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">{formattedBlog.excerpt}</p>
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

          {filteredBlogs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No blog posts found matching your search.</p>
              <p className="text-gray-500 text-sm mt-2">Try adjusting your search terms.</p>
            </div>
          )}
        </section>

        {/* Enhanced Newsletter Section with SEO */}
        <section className="py-16 my-10 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Inframe School</h2>
            <p className="mb-8">Subscribe to our newsletter to receive the latest articles, news, and updates about design education and career opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-black"
                aria-label="Email for newsletter"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-6">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">By subscribing, you&apos;ll receive exclusive content about design education, career opportunities, and admission updates.</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default DynamicBlogPage;
