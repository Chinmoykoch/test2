"use client";

import React, { useState } from "react";
import { Poppins } from "next/font/google";
import { freeCourses, freeCourseCategories } from "../../utils/constant";
import FreeCourseCard from "./FreeCourseCard";
import { BookOpen, Filter, Search } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const FreeCoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter courses based on category and search term
  const filteredCourses = freeCourses.filter((course) => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.intent.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 ${poppins.className}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-yellow-100 p-3 rounded-full">
                <BookOpen size={32} className="text-yellow-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Free <span className="text-yellow-300">Courses</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive collection of free courses designed to help you master new skills 
              and advance your career. Learn from industry experts at your own pace.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Search Bar */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search courses by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-colors"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3">
              <Filter size={20} className="text-gray-500" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-yellow-300 transition-colors"
              >
                {freeCourseCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {freeCourseCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-yellow-300 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600 text-center">
            Showing <span className="font-semibold">{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? 's' : ''} 
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <FreeCourseCard key={course.id} course={{
                ...course,
                mode: "Online" as const
              }} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-500 text-xl mb-4">No courses found</div>
            <p className="text-gray-400">
              Try adjusting your search terms or category filter
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-yellow-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with our free courses. 
              Start your learning journey today!
            </p>
            <button className="bg-white text-yellow-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Browse All Courses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCoursesPage;
