'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ChevronLeft, Loader2 } from 'lucide-react';
import { apiHelpers } from '../utils/api';
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
  "Video Editing": "bg-cyan-500 text-white",
  "BBA Course in Advertising and Marketing": "bg-emerald-500 text-white",
  ws2: "bg-gray-500 text-white",
};

interface DynamicBlogDetailProps {
  slug: string;
}

interface BlogPostData {
  title: string;
  heroImage?: string;
  category: string;
  date?: string;
  readTime?: string;
  author?: string | { name: string; image: string };
  excerpt?: string;
  sections?: BlogSection[];
  views?: number;
  relatedPosts?: unknown[];
}

interface BlogSection {
  id: string;
  title: string;
  image?: string;
  content?: string;
  quote?: string;
  quoteAuthor?: string;
  highlights?: string[];
  highlightTitle?: string;
}

const DynamicBlogDetail: React.FC<DynamicBlogDetailProps> = ({ slug }) => {
  const [post, setPost] = useState<BlogPostData | null>(null);
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
        } catch {
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
        } catch {
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
      <div className="flex items-center justify-center py-20 pt-32">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Loading blog post...</span>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="mb-6">{error || "The blog post you're looking for doesn't exist."}</p>
          <Link href="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Format post data based on source (API or static)
  const formatPostData = (postData: BlogPostData): BlogPostData => {
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
    <div className="bg-white">
      {/* Hero Section - Matching reference design */}
      <section className="relative h-[40vh] md:h-[65vh] min-h-[250px] md:min-h-[400px] mt-24">
        <Image
          src={formattedPost.heroImage || "/images/gallery/1721737773149.jpg"}
          alt={formattedPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 px-4 md:px-8 pb-6 md:pb-8">
          <div className="max-w-7xl mx-auto">
            <Badge className={`${categoryColors[formattedPost.category] || 'bg-blue-500 text-white'} px-3 py-1 text-xs md:text-sm font-semibold mb-4`}>
              {formattedPost.category}
            </Badge>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight break-words text-center md:text-left mb-4 max-w-4xl">
              {formattedPost.title}
            </h1>
            <p className="text-base md:text-xl text-white/90 mb-6 max-w-3xl">
              {post.excerpt || "Explore the perfect blend of education, expertise, and exposure at Inframe School."}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Bar - Clean and simple */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center gap-2 text-gray-600 hover:text-black">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Matching reference design */}
          <aside className="w-full lg:w-80 lg:sticky lg:top-8 lg:self-start order-2 lg:order-1">
            {/* Index Card */}
            <div className="bg-gray-50 rounded-lg p-4 md:p-6 mb-6">
              <h3 className="text-base md:text-lg font-bold mb-4 text-gray-800">Index</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#intro"
                    className="block text-blue-600 hover:text-blue-800 hover:bg-blue-50 text-sm py-2 px-3 rounded-md transition-colors duration-200"
                  >
                    Introduction
                  </Link>
                </li>
                {formattedPost.sections && formattedPost.sections.map((section: BlogSection, index: number) => (
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
            <div className="bg-gray-50 rounded-lg p-4 md:p-6">
              <h3 className="text-base md:text-lg font-bold mb-4 text-gray-800">Share this article</h3>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-4 py-2 text-xs md:text-sm">
                  Facebook
                </Button>
                <Button className="bg-[#1DA1F2] hover:bg-[#1DA1F2]/90 text-white px-4 py-2 text-xs md:text-sm">
                  Twitter
                </Button>
                <Button className="bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white px-4 py-2 text-xs md:text-sm">
                  LinkedIn
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content - Matching reference design */}
          <div className="flex-1 order-1 lg:order-2">
            <article className="prose prose-base md:prose-lg max-w-none">
              {/* Introduction Section */}
              <div id="intro" className="mb-8 md:mb-12 scroll-mt-16">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                  {post.excerpt || `Choosing the right educational path after 12th is a critical decision that can shape your child's future. With an overwhelming number of courses and career options available, it's easy to feel lost. However, if your child is passionate about design, arts, and creativity, then Inframe School offers the perfect blend of education, expertise, and exposure.`}
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
                  As your child completes their 12th grade, the question of &quot;what&apos;s next?&quot; becomes more important than ever. The right educational path can significantly influence their future. If your child has an interest in design, arts, and creativity, then Inframe School offers a unique opportunity for them to develop both academically and professionally.
                </p>
              </div>

              {/* Dynamic Sections from API */}
              {formattedPost.sections && formattedPost.sections.length > 0 ? (
                formattedPost.sections.map((section: BlogSection, index: number) => (
                  <section key={section.id} id={section.id} className="mb-8 md:mb-12 scroll-mt-16">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
                      {index + 1}. {section.title}
                    </h2>

                    {section.image && (
                      <div className="mb-6 md:mb-8 rounded-lg overflow-hidden">
                        <Image
                          src={section.image || "/placeholder.svg"}
                          alt={section.title}
                          width={1000}
                          height={500}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}

                    <div className="space-y-4 md:space-y-6">
                      {section.content && section.content.split("\n\n").map((paragraph: string, idx: number) => (
                        <p key={idx} className="text-base md:text-lg text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Quote Section */}
                    {section.quote && (
                      <blockquote className="border-l-4 border-gray-300 pl-4 md:pl-6 py-4 my-6 md:my-8 bg-gray-50 rounded-r-lg">
                        <p className="text-base md:text-xl italic text-gray-800 mb-2">
                          &ldquo;{section.quote}&rdquo;
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
                      <div className="bg-blue-50 p-4 md:p-6 rounded-lg my-6 md:my-8 border-l-4 border-blue-400">
                        <h4 className="font-bold text-lg md:text-xl mb-2 md:mb-4 text-gray-900">
                          {section.highlightTitle || "Key Points"}
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 md:space-y-2">
                          {section.highlights.map((highlight: string, idx: number) => (
                            <li key={idx} className="text-gray-700 text-base md:text-lg">{highlight}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </section>
                ))
              ) : (
                // Fallback content when no sections available
                <div className="space-y-8 md:space-y-12">
                  <section id="section1" className="scroll-mt-16">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
                      1. Industry-Driven Curriculum Designed for Future Creatives
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                      Inframe School offers a specialized curriculum aimed at nurturing future designers and artists. The programs are meticulously designed to combine theoretical knowledge with hands-on practice, enabling students to excel in their field of interest.
                    </p>
                    <blockquote className="border-l-4 border-gray-300 pl-4 md:pl-6 py-4 my-6 md:my-8 bg-gray-50 rounded-r-lg">
                      <p className="text-base md:text-xl italic text-gray-800 mb-2">
                        &ldquo;Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.&rdquo;
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
    </div>
  );
};

export default DynamicBlogDetail;
