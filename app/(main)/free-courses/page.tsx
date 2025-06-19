import React from "react";
import FreeCoursesPage from "../../../components/FreeCourses/FreeCoursesPage";

export const metadata = {
  title: "Free Courses | Inframe School of Art & Design",
  description: "Explore our collection of free courses in design, business, art, fashion, and technology. Start learning today with Inframe's expert-designed curriculum.",
  keywords: "free courses, online learning, design courses, business courses, art courses, fashion courses, technology courses, Inframe",
};

const page = () => {
  return (
    <div className="min-h-screen">
      <FreeCoursesPage />
    </div>
  );
};

export default page;
