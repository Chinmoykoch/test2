"use client";
import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { useActiveMentors, Mentor } from "../utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



const MentorsPage = () => {
  // Fetch mentors from backend
  const { mentors, loading, error } = useActiveMentors();

  return (
    <div className={`w-full min-h-screen bg-white ${poppins.className}`}>
      {/* Header Section with Modern Geometric Elements */}
      <div className="relative text-black py-24">
        <div className="absolute inset-0 bg-yellow-400" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            
            <h1 className="text-6xl font-bold mb-6 mt-10 leading-tight">Our Mentors</h1>
            <div className="w-24 h-1 bg-black mb-8"></div>
            <p className="text-xl text-black max-w-2xl">
              Learn directly from industry professionals who bring real-world experience
              and cutting-edge insights to guide your creative journey.
            </p>
          </div>
        </div>
      </div>

      {/* Curved Divider */}
      <div className="relative h-16">
        <svg className="absolute bottom-0 w-full h-16 fill-white" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path d="M0 0L1440 0C1440 0 1440 54 720 54C0 54 0 0 0 0Z"></path>
        </svg>
      </div>

      {/* Mentors Section */}
      <div className="container mx-auto px-6 py-16 -mt-8">
        {loading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading mentors...</p>
          </div>
        )}
        
        {error && (
          <div className="text-center py-12">
            <p className="text-red-600 mb-4">Error loading mentors: {error}</p>
            <p className="text-gray-600">Please try again later</p>
          </div>
        )}
        
        {!loading && !error && mentors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 mb-4">No mentors available at the moment</p>
            <p className="text-gray-500">Please check back later for updates</p>
          </div>
        )}
        
        {!loading && !error && mentors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor: Mentor, index: number) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-yellow-400 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full"
            >
              {/* Hover accent */}
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100"></div>
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-xl font-bold text-white">{mentor.name}</h2>
                  <h3 className="text-sm font-medium text-yellow-300">{mentor.role}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.tags.map((skill: string, i: number) => (
                    <span 
                      key={i}
                      className="text-xs font-medium bg-yellow-100 text-black py-1 px-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {mentor.description}
                </p>
                
                {/* Connect button */}
                <button className="mt-6 text-sm font-medium text-black hover:text-yellow-600 flex items-center transition-colors duration-200">
                  Schedule a Session
                  <FaCalendarAlt className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          </div>
        )}
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-black text-white py-16 mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="relative">
            {/* Yellow accent shapes */}
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-screen opacity-20"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-screen opacity-20"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to elevate your skills?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">
              Our mentors are available for one-on-one sessions, workshops, and portfolio reviews.
              Take the next step in your creative journey with personalized guidance.
            </p>
            <button className="bg-yellow-400 text-black  hover:bg-yellow-500 font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl relative z-10">
              Apply for Mentorship Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;