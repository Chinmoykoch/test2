"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Award, Monitor, ArrowRight, Star } from "lucide-react";
import { Poppins } from "next/font/google";

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
  mode: "Online";
  category: string;
  image: string;
}

interface FreeCourseCardProps {
  course: FreeCourse;
}

const FreeCourseCard: React.FC<FreeCourseCardProps> = ({ course }) => {
  return (
    <Link href={`/free-courses/${course.id}`}>
      <div className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 group ${poppins.className}`}>
        {/* Course Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {course.category}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {course.fees}
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>

          {/* Intent */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.intent}
          </p>

          {/* Course Details */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Monitor size={14} />
              <span>{course.mode}</span>
            </div>
          </div>

          {/* Why to Learn */}
          <div className="mb-4">
            <h4 className="text-blue-600 font-semibold text-sm mb-1 flex items-center gap-1">
              <Star size={14} />
              Why Learn This?
            </h4>
            <p className="text-gray-600 text-sm line-clamp-2">
              {course.whyToLearn}
            </p>
          </div>

          {/* Career Opportunities */}
          <div className="mb-6">
            <h4 className="text-blue-600 font-semibold text-sm mb-1 flex items-center gap-1">
              <Award size={14} />
              Career Opportunities
            </h4>
            <p className="text-gray-600 text-sm line-clamp-2">
              {course.placement}
            </p>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between">
            <span className="text-blue-600 font-semibold text-sm">Start Learning</span>
            <ArrowRight size={16} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FreeCourseCard;
