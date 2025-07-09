"use client";
import React from "react";
import CoursePage from "../../../../components/Courses/CoursePage";
import { useCourseProgramBySlug, useCourseBySlug,  transformCurriculumData } from "../../../../utils/api";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      
      // Transform curriculum data from array to object format
      const curriculumData = transformCurriculumData(program.curriculum || course.curriculum || []);
      console.log('Transformed curriculum data:', curriculumData);
      
      // Transform backend data to match the expected format
      // Prefer program fields, fallback to course fields if missing
      const transformedData = [{
        redirectUrl: `/${category}/${degree}`,
        mainTitle: category,
        metaTitle: program.metaTitle || program.title || course.metaTitle || course.title,
        metaDescription: program.metaDescription || program.description || course.metaDescription || course.description,
        value: degree,
        label: program.title,
        title: program.title,
        duration: ("duration" in program ? program.duration : undefined) || ("duration" in course ? course.duration : undefined),
        description: program.description || course.description,
        content: program.courseOverview || program.description || course.description,
        heroImage: ("heroImage" in program ? program.heroImage : undefined) || course.heroImage,
        ctaTitle: program.ctaTitle || course.ctaTitle,
        ctaDescription: program.ctaDescription || course.ctaDescription,
        ctaButtonText: program.ctaButtonText,
        brochurePdfUrl: course.brochurePdfUrl,
        software: program.softwareTools || course.software || [],
        whatYouWillLearn: ("programHighlights" in program ? program.programHighlights : undefined) || course.features || [],
        videos: [], // Add if available
        curriculum: curriculumData, // Pass the transformed curriculum data
        testimonials: program.testimonials || course.testimonials || [],
        faqs: program.faqs || course.faqs || [],
        careerProspects: program.careerPaths || course.careerProspects || [],
        feeBenefits: program.feeBenefits || [],
        eligibility: program.eligibility || [],
        scheduleOptions: program.scheduleOptions || [],
      }];

      console.log('Final transformed data for CoursePage:', transformedData);
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
