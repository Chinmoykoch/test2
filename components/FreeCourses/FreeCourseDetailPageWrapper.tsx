"use client";

import React from "react";
import { notFound } from "next/navigation";
import FreeCourseDetailPage from "./FreeCourseDetailPage";
import { useFreeCourseById } from "../../utils/api";

interface FreeCourseDetailPageWrapperProps {
  courseId: string;
}

const FreeCourseDetailPageWrapper: React.FC<FreeCourseDetailPageWrapperProps> = ({ courseId }) => {
  const { course, loading, error } = useFreeCourseById(courseId);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-300 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (error || !course) {
    notFound();
  }

  return <FreeCourseDetailPage course={course} />;
};

export default FreeCourseDetailPageWrapper; 