import React from "react";
import { courseTypes } from "../../../utils/courseTypes";
// import CoursePage from "../../../components/Courses/CoursePage";
import CategoryLandingPage from "../../../components/Courses/CategoryLandingPage";


// ✅ Generate Metadata
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params; // ✅ Await the promise
  const categoryLower = category.toLowerCase();
  const categoryData = courseTypes[categoryLower];

  if (!categoryData || !Array.isArray(categoryData) || categoryData.length === 0) {
    return {
      title: "Courses | Inframe School of Art & Design",
      description: "Explore our courses and find the perfect fit for you.",
    };
  }

  const metaInfo = categoryData[0] || {}; // ✅ Prevent undefined errors

  return {
    title: metaInfo.metaTitle || `${category} Courses`,
    description: metaInfo.metaDescription || `Browse our ${category} courses`,
  };
}

// ✅ Category Page Component
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params; // ✅ Await the promise
  const categoryLower = category.toLowerCase();
  const categoryCourses = courseTypes[categoryLower] || [];
  

  return <CategoryLandingPage category={categoryLower} courses={categoryCourses} videos={[]} />;
}

// ✅ Static Params for SSG
export async function generateStaticParams() {
  return Object.keys(courseTypes).map((category) => ({ category }));
}
