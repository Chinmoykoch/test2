"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns"; // Formatting dates
import { ChevronRight, Clock } from "lucide-react"; // Lucide icons for better UX
import Image from "next/image"; // Optimized image loading in Next.js

import { Poppins } from "next/font/google"; // Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const LatestNews = () => {
  interface Article {
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
  }

  const [news, setNews] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=graphic+design OR UI/UX OR web+design OR digital+art OR art+exhibitions OR tech+innovations OR technology+startups&language=en&sortBy=publishedAt&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
        );

        // Log the response to check if the API is providing relevant data
        console.log(response.data);

        interface ApiResponse {
          articles: Article[];
        }

        const filteredNews = (response.data as ApiResponse).articles.filter(
          (article: Article) => {
            const keywords = [
              "graphic design",
              "UI/UX",
              "web design",
              "digital art",
              "art exhibitions",
              "tech innovations",
              "technology startups",
              "art",
              "design",
              "technology",
            ];

            return keywords.some(
              (keyword) =>
                article.title.toLowerCase().includes(keyword) ||
                (article.description &&
                  article.description.toLowerCase().includes(keyword))
            );
          }
        );

        setNews(filteredNews);
        setLoading(false);
      } catch {
        setError("Error fetching news");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);
  console.log("ENV API KEY:", process.env.NEXT_PUBLIC_NEWS_API_KEY);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <section className="latest-news font-sans px-4 py-8">
      <h2 className={`text-3xl font-bold text-left mb-4 ${poppins.className}`}>
        Latest News
      </h2>

      {/* Short Description */}
      <p
        className={`text-left text-lg text-gray-600 mb-8 ${poppins.className}`}
      >
        Stay up-to-date with the latest trends in design, art, and technology.
        Our curated news covers the most innovative developments in the creative
        world.
      </p>
      <ul className="news-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {news.slice(0, 5).map((article, index) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl"
          >
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.urlToImage && (
                <div className="relative h-56">
                  <Image
                    src={article.urlToImage}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full rounded-t-lg"
                  />
                </div>
              )}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 flex items-center space-x-1">
                    <Clock size={14} />
                    <span>
                      {format(new Date(article.publishedAt), "MMM dd, yyyy")}
                    </span>
                  </span>
                  <ChevronRight
                    size={18}
                    className="text-gray-500 hover:text-gray-700 transition-colors"
                  />
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestNews;
