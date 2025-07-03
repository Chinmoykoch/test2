"use client";
import React from "react";
import { notFound } from "next/navigation";
import CoursePage from "../../../../components/Courses/CoursePage";
import { useCourseProgramBySlug, useCourseBySlug } from "../../../../utils/api";

type ParamsType = { 
  category: string; 
  degree: string; 
};

interface DegreePageProps {
  params: Promise<ParamsType>;
}

export default function DegreePage({ params }: DegreePageProps) {
  const [category, setCategory] = React.useState<string>("");
  const [degree, setDegree] = React.useState<string>("");
  const [courseData, setCourseData] = React.useState<any>(null);

  React.useEffect(() => {
    const getParams = async () => {
      const { category: cat, degree: deg } = await params;
      setCategory(cat.toLowerCase());
      setDegree(deg.toLowerCase());
    };
    getParams();
  }, [params]);

  const { program, loading: programLoading, error: programError } = useCourseProgramBySlug(category, degree);
  const { course, loading: courseLoading, error: courseError } = useCourseBySlug(category);

  // Debug logging
  React.useEffect(() => {
    console.log('DegreePage Debug:', {
      category,
      degree,
      program,
      course,
      programLoading,
      courseLoading,
      programError,
      courseError,
      courseData
    });
  }, [category, degree, program, course, programLoading, courseLoading, programError, courseError, courseData]);

  React.useEffect(() => {
    if (program && course) {
      console.log('Program and course found, transforming data:', { program, course });
      
      // Transform backend data to match the expected format
      // Use course data for hero image, CTA, etc. and program data for specific details
      const transformedData = [{
        redirectUrl: `/${category}/${degree}`,
        mainTitle: category,
        metaTitle: program.title,
        metaDescription: program.description,
        value: degree,
        label: program.title,
        title: program.title,
        duration: program.duration,
        description: program.description,
        content: program.description,
        // Use course data for hero image, CTA, etc.
        heroImage: course.heroImage,
        ctaTitle: course.ctaTitle,
        ctaDescription: course.ctaDescription,
        brochurePdfUrl: course.brochurePdfUrl,
        // Use course data for additional sections
        software: course.software || [],
        whatYouWillLearn: course.features || [],
        videos: [], // Will be populated if available
        curriculum: course.curriculum || {},
        testimonials: course.testimonials || [],
        faqs: course.faqs || [],
        careerProspects: course.careerProspects || [],
      }];

      setCourseData(transformedData);
    }
  }, [program, course, category, degree, programLoading, courseLoading, programError, courseError]);

  if (programLoading || courseLoading) {
    return (
      <div className="min-h-screen pt-20 font-sans bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading course program...</p>
        </div>
      </div>
    );
  }

  if (programError || courseError) {
    return (
      <div className="min-h-screen pt-20 font-sans bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-600">Error loading course: {programError || courseError}</p>
        </div>
      </div>
    );
  }

  if (!courseData) {
    return (
      <div className="min-h-screen pt-20 font-sans bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-gray-600">Course not found</p>
        </div>
      </div>
    );
  }

  return <CoursePage courseType={courseData} category={category} />;
}

// Static params generation removed - using dynamic rendering
