"use client";

import React from "react";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { 
  Clock, 
  Award, 
  Users, 
  CheckCircle, 
  Target,
  Briefcase,
  Star,
  Globe
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface FreeCourse {
  id: string;
  title: string;
  intent: string;
  duration: string;
  whyToLearn: string;
  placement: string;
  fees: string;
  mode: string;
  category: string;
  image: string;
}

interface FreeCourseDetailPageProps {
  course: FreeCourse;
}

const FreeCourseDetailPage: React.FC<FreeCourseDetailPageProps> = ({ course }) => {
  const benefits = [
    "Expert-designed curriculum",
    "Self-paced learning",
    "Industry-relevant skills",
    "Certificate of completion",
    "Lifetime access to materials",
    "Community support"
  ];

  const learningOutcomes = [
    `Master the fundamentals of ${course.title}`,
    "Apply practical skills in real-world scenarios",
    "Build a portfolio of work",
    "Understand industry best practices",
    "Develop professional competencies"
  ];

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-900 pt-20 ${poppins.className}`}>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {course.title}
          </h1>
          
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
            {course.intent}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Image */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <div className="relative h-64 md:h-80">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Why Learn This */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <Target className="text-yellow-300" size={24} />
                Why Learn This Course?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {course.whyToLearn}
              </p>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-xl p-8 mb-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <Briefcase className="text-yellow-300" size={24} />
                Career Opportunities
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {course.placement}
              </p>
            </div>

            {/* Course Benefits */}
            <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Course Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Star className="text-yellow-300" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-24">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Course Details</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Clock className="text-yellow-300" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold text-gray-900">{course.duration}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Globe className="text-yellow-300" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Mode</div>
                    <div className="font-semibold text-gray-900">{course.mode}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Award className="text-yellow-300" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Certificate</div>
                    <div className="font-semibold text-gray-900">Yes</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Users className="text-yellow-300" size={20} />
                  <div>
                    <div className="text-sm text-gray-500">Level</div>
                    <div className="font-semibold text-gray-900">Beginner</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-yellow-300 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-sm">
                Start Learning Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeCourseDetailPage;
