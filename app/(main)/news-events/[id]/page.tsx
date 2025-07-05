"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { NewsItem } from "../../../../utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NewsDetailPage = () => {
  const params = useParams();
  const newsId = params.id as string;
  
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://backend-rakj.onrender.com/api/v1/news/all`);
        const data = await response.json();
        
        if (data.success) {
          const allNews = data.data.news || data.data;
          const foundNews = allNews.find((item: NewsItem) => item._id === newsId);
          
          if (foundNews) {
            setNews(foundNews);
          } else {
            setError("News article not found");
          }
        } else {
          setError("Failed to fetch news article");
        }
      } catch (error) {
        console.error("Error fetching news detail:", error);
        setError("Failed to load news article");
      } finally {
        setLoading(false);
      }
    };

    if (newsId) {
      fetchNewsDetail();
    }
  }, [newsId]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-white ${poppins.className}`}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !news) {
    return (
      <div className={`min-h-screen bg-white ${poppins.className}`}>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">{error || "The requested news article could not be found."}</p>
          <Link 
            href="/news-events"
            className="text-yellow-600 hover:text-yellow-800 font-medium"
          >
            ← Back to News & Events
          </Link>
        </div>
      </div>
    );
  }

  // Format date and time for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    return timeString; // Keep original time format from backend
  };

  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            href="/news-events"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            ← Back to News & Events
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <article>
        {/* Featured Image - Full Width */}
        <figure className="w-full">
          <div className="relative h-64 md:h-96 bg-gray-100 overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </figure>

        {/* Article Header */}
        <header className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="mb-4">
                <span className="text-yellow-600 hover:text-yellow-800 text-sm font-medium uppercase tracking-wide">
                  {news.type}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {news.title}
              </h1>
            </div>
            
            <div className="text-gray-500 text-sm text-right ml-8 mt-4">
              <time dateTime={news.date}>
                {formatDate(news.date)} at {formatTime(news.time)}
              </time>
              <span className="block mt-1">News Article</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
              {news.description}
            </p>

            {/* Point Details */}
            {news.pointdetails && news.pointdetails.length > 0 && (
              <div className="bg-gray-50 border-l-4 border-yellow-300 p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {news.pointdetails.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-yellow-300 rounded-full mt-2 mr-3"></div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Article Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Article Type</h4>
                  <p className="text-gray-700">{news.type}</p>
                </div>
                
                {news.subType && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Sub Category</h4>
                    <p className="text-gray-700">{news.subType}</p>
                  </div>
                )}
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Published Date</h4>
                  <p className="text-gray-700">{formatDate(news.date)}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Published Time</h4>
                  <p className="text-gray-700">{formatTime(news.time)}</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Status</h4>
                  <p className="text-gray-700">
                    {news.isActive ? 'Active' : 'Inactive'}
                  </p>
                </div>

                {news.createdAt && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Created</h4>
                    <p className="text-gray-700">{formatDate(news.createdAt)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tags */}
          {news.tags && news.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {news.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full border border-yellow-200">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Additional Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full border border-yellow-200">
              {news.type}
            </span>
            {news.subType && (
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {news.subType}
              </span>
            )}
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              News Article
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsDetailPage; 