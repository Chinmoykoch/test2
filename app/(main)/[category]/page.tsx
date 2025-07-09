"use client";
import React from "react";
import CategoryLandingPage from "../../../components/Courses/CategoryLandingPage";
import { useCourseBySlug, transformCurriculumData } from "../../../utils/api";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

interface Program {
  slug?: string;
  title: string;
  duration: string;
  description: string;
  curriculum?: unknown[];
  imageUrl: string;
  brochurePdfUrl?: string;
  isActive: boolean;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [category, setCategory] = React.useState<string>("");
  const [categoryData, setCategoryData] = React.useState<unknown[]>([]);

  React.useEffect(() => {
    const getParams = async () => {
      const { category: cat } = await params;
      setCategory(cat.toLowerCase());
    };
    getParams();
  }, [params]);

  const { course, loading, error } = useCourseBySlug(category);

  React.useEffect(() => {
    if (course && course.programs && course.programs.length > 0) {
      // Only show active programs with a defined slug
      const activePrograms = course.programs.filter((program: Program) => program.isActive && !!program.slug);
      const transformedData = activePrograms.map((program: Program) => {
        const programSlug = program.slug!;
        return {
          redirectUrl: `/${category}/${programSlug}`,
          mainTitle: category,
          metaTitle: program.title,
          metaDescription: program.description,
          value: programSlug,
          label: program.title,
          title: program.title,
          duration: program.duration,
          description: program.description,
          content: program.description,
          software: course.software || [],
          whatYouWillLearn: [],
          videos: course.testimonials?.filter((t: { youtubeUrl?: string }) => t.youtubeUrl)?.map((t: { youtubeUrl?: string }) => ({ url: t.youtubeUrl })) || [],
          curriculum: transformCurriculumData(program.curriculum || []),
          imageUrl: program.imageUrl,
          brochurePdfUrl: program.brochurePdfUrl || course.brochurePdfUrl,
        };
      });
      setCategoryData(transformedData);
    }
  }, [course, category, loading, error]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20 font-sans bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading course information...</p>
        </div>
      </div>
    );
  }

  if (!categoryData.length) {
    return (
      <div className="min-h-screen pt-20 font-sans bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading course information...</p>
        </div>
      </div>
    );
  }

  return (
    <CategoryLandingPage 
      category={category} 
      courses={categoryData} 
      videos={course?.testimonials?.filter((t: { youtubeUrl?: string }) => t.youtubeUrl)?.map((t: { youtubeUrl?: string }) => ({ url: t.youtubeUrl })) || []} 
      backendCourse={course}
    />
  );
}
