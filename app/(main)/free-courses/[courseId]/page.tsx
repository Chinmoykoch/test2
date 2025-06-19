import React from "react";
import { notFound } from "next/navigation";
import { freeCourses } from "../../../../utils/constant";
import FreeCourseDetailPage from "../../../../components/FreeCourses/FreeCourseDetailPage";

interface PageProps {
  params: Promise<{ courseId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { courseId } = await params;
  const course = freeCourses.find((c) => c.id === courseId);

  if (!course) {
    return {
      title: "Course Not Found | Inframe School",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.title} - Free Course | Inframe School of Art & Design`,
    description: course.intent,
    keywords: `${course.title}, free course, ${course.category}, online learning, Inframe`,
  };
}

export async function generateStaticParams() {
  return freeCourses.map((course) => ({
    courseId: course.id,
  }));
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { courseId } = await params;
  const course = freeCourses.find((c) => c.id === courseId);

  if (!course) {
    notFound();
  }

  return <FreeCourseDetailPage course={course} />;
}
