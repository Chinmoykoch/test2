"use client";
import React from "react";
import CategoryLandingPage from "../../../components/Courses/CategoryLandingPage";
import { useCourseBySlug } from "../../../utils/api";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

// Metadata generation removed - using client-side rendering

// ✅ Category Page Component
export default function CategoryPage({ params }: CategoryPageProps) {
  const [category, setCategory] = React.useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [categoryData, setCategoryData] = React.useState<any>(null);

  React.useEffect(() => {
    const getParams = async () => {
      const { category: cat } = await params;
      setCategory(cat.toLowerCase());
    };
    getParams();
  }, [params]);

  const { course, loading, error } = useCourseBySlug(category);

  // Debug logging
  React.useEffect(() => {
    console.log('CategoryPage Debug:', {
      category,
      course,
      loading,
      error,
      categoryData
    });
  }, [category, course, loading, error, categoryData]);

  React.useEffect(() => {
    if (course && course.programs && course.programs.length > 0) {
      console.log('Course found with programs, transforming data:', course);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const transformedData = course.programs.map((program: any) => {
         
        let value = program.value;
        if (!value && program.slug) {
          value = program.slug
            .replace("bachelor-of-design-in-", "bdes-in-")
            .replace("bachelor-of-vocation-in-", "bvoc-in-")
            .replace("bachelor-of-science-in-", "bsc-in-")
            .replace(/[^a-z0-9-]/g, "");
        }
        if (!value && program.title) {
          value = program.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
        }
        const programSlug = program.slug || value;
         
        console.log('Creating program link:', { title: program.title, slug: programSlug, backendSlug: program.slug, value });
        
        return {
          redirectUrl: `/${category}/${programSlug}`,
          mainTitle: category,
          metaTitle: program.title,
          metaDescription: program.description,
          value,
          label: program.title,
          title: program.title,
          duration: program.duration,
          description: program.description,
          content: program.description,
          software: course.software || [],
          whatYouWillLearn: [],
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          videos: course.testimonials?.filter((t: any) => t.youtubeUrl)?.map((t: any) => ({ url: t.youtubeUrl })) || [],
          curriculum: course.curriculum || {},
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

  if (!categoryData) {
    // Show loading or error state if needed
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      videos={course?.testimonials?.filter((t: any) => t.youtubeUrl)?.map((t: any) => ({ url: t.youtubeUrl })) || []} 
      backendCourse={course}
    />
  );
}

// Static params generation removed - using dynamic rendering
