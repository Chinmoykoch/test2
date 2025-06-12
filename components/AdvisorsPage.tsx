"use client";
import { Poppins } from "next/font/google";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { apiHelpers, Advisor } from "@/utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const AdvisorsPage = () => {
  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        setLoading(true);
        setError(null);
        const advisorsData = await apiHelpers.getAdvisors();
        setAdvisors(advisorsData);
      } catch (err) {
        console.error('Failed to fetch advisors:', err);
        setError('Failed to load advisors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAdvisors();
  }, []);

  return (
    <div className={`w-full min-h-screen bg-zinc-100 ${poppins.className}`}>
      {/* Header Section with Industrial Elements */}
      <div className="relative text-white py-32">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.png')] bg-repeat" />
        <div className="absolute left-0 right-0 h-1 bottom-0 bg-amber-500" />
        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-amber-500 opacity-50" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-amber-500 opacity-50" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 border border-amber-500 text-amber-500 text-sm font-medium tracking-wider mb-4">
              LEADERSHIP
            </span>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Our Advisors</h1>
            <div className="w-24 h-1 bg-amber-500 mb-8"></div>
            <p className="text-xl text-zinc-300 max-w-2xl">
              Meet the exceptional individuals who guide our institution with
              their expertise and vision, shaping the future of creative education.
            </p>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="relative h-24 bg-zinc-100">
        <div className="absolute top-0 left-0 w-full h-24 bg-zinc-900 skew-y-3 transform origin-top-right z-0"></div>
      </div>

      {/* Advisors Grid with Industrial Design - All images on left side */}
      <div className="container mx-auto px-6 py-16 -mt-12 relative z-10">
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Advisors Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advisors.length > 0 ? (
              advisors.map((advisor) => (
                <div
                  key={advisor._id}
                  className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl border-b border-l border-zinc-200"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                  <div className="flex flex-col md:flex-row">
                    {/* Image consistently positioned on the left */}
                    <div className="md:w-40 h-56 md:h-auto flex-shrink-0 relative overflow-hidden">
                      <Image
                        src={advisor.image}
                        alt={advisor.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 160px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <div>
                        <div className="flex items-center mb-3">
                          <div className="w-6 h-px bg-amber-500 mr-3"></div>
                          <span className="text-xs font-semibold text-zinc-500 tracking-widest uppercase">
                            Advisor
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                          {advisor.name}
                        </h2>
                        <h3 className="text-xs font-semibold text-zinc-600 mb-5 uppercase tracking-wider">
                          {advisor.role}
                        </h3>
                        <p className="text-zinc-600 text-sm leading-relaxed">
                          {advisor.description}
                        </p>
                      </div>

                      {/* View Profile button removed as requested */}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-zinc-600">No advisors available at the moment.</p>
              </div>
            )}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default AdvisorsPage;