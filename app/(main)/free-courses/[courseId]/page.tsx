import React from "react";
import FreeCourseDetailPageWrapper from "../../../../components/FreeCourses/FreeCourseDetailPageWrapper";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { courseId } = await params;
  
  // For now, return basic metadata - this can be enhanced with actual API call
  return {
    title: `Free Course ${courseId} | Inframe School of Art & Design`,
    description: "Explore our free course designed to help you master new skills and advance your career.",
    keywords: "free course, online learning, design course, Inframe",
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params;

  return <FreeCourseDetailPageWrapper courseId={courseId} />;
}
