'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, MessageSquare, Loader2 } from 'lucide-react';
import { apiHelpers, type BlogPost } from '../utils/api';
import { blogPostsData } from '../utils/constant';

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
};

interface DynamicBlogDetailProps {
  slug: string;
}

const DynamicBlogDetail: React.FC<DynamicBlogDetailProps> = ({ slug }) => {
  const [post, setPost] = useState<BlogPost | any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFromAPI, setIsFromAPI] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        setError(null);

        // First try to get from static data
        const staticPost = blogPostsData[slug as keyof typeof blogPostsData];
        if (staticPost) {
          setPost(staticPost);
          setIsFromAPI(false);
          setLoading(false);
          return;
        }

        // If not found in static data, try to fetch from API
        // First try by slug
        try {
          const apiPostBySlug = await apiHelpers.getBlogBySlug(slug);
          if (apiPostBySlug) {
            setPost(apiPostBySlug);
            setIsFromAPI(true);
            setLoading(false);
            return;
          }
        } catch (slugError) {
          console.log('Failed to fetch by slug, trying by ID...');
        }

        // If slug doesn't work, try treating it as an ID
        try {
          const apiPostById = await apiHelpers.getBlogById(slug);
          if (apiPostById) {
            setPost(apiPostById);
            setIsFromAPI(true);
            setLoading(false);
            return;
          }
        } catch (idError) {
          console.log('Failed to fetch by ID as well');
        }

        // If nothing works, set error
        setError('Blog post not found');
        setPost(null);
      } catch (err) {
        console.error('Failed to fetch blog post:', err);
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="flex items-center justify-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
          <span className="ml-2 text-gray-600">Loading blog post...</span>
        </div>
      </main>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <main className="min-h-screen bg-white">
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
            <p className="mb-6">{error || "The blog post you're looking for doesn't exist."}</p>
            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Format post data based on source (API or static)
  const formatPostData = (postData: BlogPost | any) => {
    if (isFromAPI) {
      return {
        title: postData.title,
        heroImage: postData.heroImage,
        category: postData.category,
        date: postData.date,
        readTime: postData.readTime,
        author: postData.author,
        sections: postData.sections || [],
        views: postData.views,
        relatedPosts: [], // API doesn't populate this yet
      };
    } else {
      return postData;
    }
  };

  const formattedPost = formatPostData(post);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Matching reference design */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={formattedPost.heroImage || "/images/gallery/1721737773149.jpg"}
          alt={formattedPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className={`${categoryColors[formattedPost.category] || 'bg-blue-500 text-white'} px-3 py-1 text-sm font-semibold mb-4`}>
              {formattedPost.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {formattedPost.title}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-3xl">
              {post.excerpt || "Explore the perfect blend of education, expertise, and exposure at Inframe School."}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Bar - Clean and simple */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center gap-2 text-gray-600 hover:text-black">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Matching reference design */}
          <aside className="lg:w-80 lg:sticky lg:top-8 lg:self-start">
            {/* Index Card */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Index</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#intro"
                    className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 text-sm py-2 px-3 rounded-md transition-colors duration-200"
                  >
                    Introduction
                  </Link>
                </li>
                {formattedPost.sections && formattedPost.sections.map((section: any, index: number) => (
                  <li key={section.id}>
                    <Link
                      href={`#${section.id}`}
                      className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 text-sm py-2 px-3 rounded-md transition-colors duration-200"
                    >
                      {index + 1}. {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share Card - Matching reference design */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Share this article</h3>
              <div className="flex gap-3">
                <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-4 py-2 text-sm">
                  Facebook
                </Button>
                <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white px-4 py-2 text-sm">
                  Twitter
                </Button>
                <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-4 py-2 text-sm">
                  LinkedIn
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content - Matching reference design */}
          <div className="flex-1">
            <article className="prose prose-lg max-w-none">
              {/* Introduction Section */}
              <div id="intro" className="mb-12 scroll-mt-16">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {post.excerpt || `Choosing the right educational path after 12th is a critical decision that can shape your child's future. With an overwhelming number of courses and career options available, it's easy to feel lost. However, if your child is passionate about design, arts, and creativity, then Inframe School offers the perfect blend of education, expertise, and exposure.`}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  As your child completes their 12th grade, the question of "what's next?" becomes more important than ever. The right educational path can significantly influence their future. If your child has an interest in design, arts, and creativity, then Inframe School offers a unique opportunity for them to develop both academically and professionally.
                </p>
              </div>

              {/* Dynamic Sections from API */}
              {formattedPost.sections && formattedPost.sections.length > 0 ? (
                formattedPost.sections.map((section: any, index: number) => (
                  <section key={section.id} id={section.id} className="mb-12 scroll-mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                      {index + 1}. {section.title}
                    </h2>

                    {section.image && (
                      <div className="mb-8 rounded-lg overflow-hidden">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          width={1000}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-6">
                      {section.content && section.content.split("\n\n").map((paragraph: string, idx: number) => (
                        <p key={idx} className="text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Quote Section */}
                    {section.quote && (
                      <blockquote className="border-l-4 border-gray-300 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
                        <p className="text-xl italic text-gray-800 mb-2">
                          "{section.quote}"
                        </p>
                        {section.quoteAuthor && (
                          <footer className="text-gray-600 font-medium">
                            – {section.quoteAuthor}
                          </footer>
                        )}
                      </blockquote>
                    )}

                    {/* Highlights Section */}
                    {section.highlights && section.highlights.length > 0 && (
                      <div className="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-400">
                        <h4 className="font-bold text-xl mb-4 text-gray-900">
                          {section.highlightTitle || "Key Points"}
                        </h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {section.highlights.map((highlight: string, idx: number) => (
                            <li key={idx} className="text-gray-700">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))
              ) : (
                // Fallback content when no sections available
                <div className="space-y-12">
                  <section id="section1" className="scroll-mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                      1. Industry-Driven Curriculum Designed for Future Creatives
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Inframe School offers a specialized curriculum aimed at nurturing future designers and artists. The programs are meticulously designed to combine theoretical knowledge with hands-on practice, enabling students to excel in their field of interest.
                    </p>
                    <blockquote className="border-l-4 border-gray-300 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
                      <p className="text-xl italic text-gray-800 mb-2">
                        "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work."
                      </p>
                      <footer className="text-gray-600 font-medium">– Steve Jobs</footer>
                    </blockquote>
                  </section>
                </div>
              )}

            </article>
          </div>
        </div>
      </div>

      {/* Footer Section - Matching reference design */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about-us" className="hover:text-yellow-400">About Us</Link></li>
                <li><Link href="/admission-process" className="hover:text-yellow-400">Admission Process</Link></li>
                <li><Link href="/lifeatinframe" className="hover:text-yellow-400">Campus</Link></li>
                <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
                <li><Link href="/advisors" className="hover:text-yellow-400">Advisors</Link></li>
                <li><Link href="/news-events" className="hover:text-yellow-400">News & Events</Link></li>
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-lg font-bold mb-4">Courses We Offer</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/interior-design" className="hover:text-yellow-400">Interior Design</Link></li>
                <li><Link href="/fashion-design" className="hover:text-yellow-400">Fashion Design</Link></li>
                <li><Link href="/graphic-design" className="hover:text-yellow-400">Graphic Design</Link></li>
                <li><Link href="/uiux-design" className="hover:text-yellow-400">UI & UX Design</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4">Locate Us</h3>
              <div className="text-sm space-y-2">
                <p>09, Pal Link Road,<br />
                Marudhar Nagar, Kamla Nehru Nagar,<br />
                Shyam Nagar, Jodhpur, Rajasthan 342008</p>
                <p><strong>Admissions:</strong> +91 9649 9649 37</p>
                <p><strong>Admin:</strong> +91 9649 9649 70</p>
                <p><strong>Email:</strong> info@inframeschool.com</p>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-black rounded-l-md text-sm"
                />
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2 rounded-r-md text-sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm">
            <p>© 2025 Inframe School of Art, Design & Business. All rights reserved</p>
          </div>
        </div>
      </footer>

    </main>
  );
};

export default DynamicBlogDetail;
