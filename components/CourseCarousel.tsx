"use client";
import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/tabs";
import { Card, CardContent } from "../components/ui/card";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useCourses, Course, CourseProgram } from "@/utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface CourseSectionProps {
  courses: Course[];
}

const CourseSection: React.FC<CourseSectionProps> = ({ courses }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ${poppins.className}`}
  >
    {courses.map((course, idx) => (
      <Card
        key={course._id || idx}
        className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-100 hover:border-yellow-300"
      >
        <div className="relative">
          <Image
            src={course.heroImage}
            alt={course.title}
            width={600}
            height={300}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent" />
        </div>
        <CardContent className="p-6 bg-white">
          <h3 className="text-xl font-bold mb-4 text-gray-800 group-hover:text-yellow-600 transition-colors">
            {course.title}
          </h3>
          <ul className="space-y-2">
            {course.programs?.map((program: CourseProgram, idx: number) => (
              <li
                key={program._id ?? idx}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors flex items-start"
              >
                <Link
                  className="hover:text-blue-500 hover:underline flex items-center"
                  href={`/${course.slug}/${program.slug}`}
                >
                  <span className="text-yellow-400 mr-2 text-lg leading-none">•</span>
                  {program.title ?? ''}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={`/${course.slug}`}
            className="block mt-6"
            scroll={false}
          >
            <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black flex items-center justify-center space-x-2 px-5 py-3 rounded-md">
              <span>Explore Now</span>
              <FaArrowRight className="text-black" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
);

const tabOrder = ["all", "art", "design", "business"];

const CourseCatalog = () => {
  const { courses, loading, error } = useCourses();

  if (loading) {
    return <div className="text-center py-20 text-xl">Loading courses...</div>;
  }
  if (error) {
    return <div className="text-center py-20 text-red-500">Failed to load courses: {error}</div>;
  }
  if (!courses || courses.length === 0) {
    return <div className="text-center py-20 text-gray-500">No courses available.</div>;
  }

  const filterByCategory = (category: string) => {
    if (category === "all") return courses;
    // TODO: Map with backend category field when available
    // For now, return all courses as placeholder
    return courses;
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-yellow-50 to-white ${poppins.className}`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="text-left mb-12">
          <h1 className="text-4xl md:text-5xl my-10 font-bold mb-4 text-gray-800">
            Our Industry-Centered Programs
          </h1>
          <div className="w-24 h-1 bg-yellow-400 rounded-full" />
        </div>
        <Tabs defaultValue="all" className="w-full">
          <div className="p-2 mb-12">
            <TabsList className="flex flex-wrap justify-center sm:justify-start my-3 rounded-lg gap-2 font-bold text-black font-sans">
              {tabOrder.map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="px-8 py-3 data-[state=active]:bg-yellow-400 border border-black font-sans font-bold data-[state=active]:text-black transition-all duration-300"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <TabsContent value="all">
            <CourseSection courses={courses} />
          </TabsContent>
          <TabsContent value="art">
            <CourseSection courses={filterByCategory("art")} />
          </TabsContent>
          <TabsContent value="business">
            <CourseSection courses={filterByCategory("business")} />
          </TabsContent>
          <TabsContent value="design">
            <CourseSection courses={filterByCategory("design")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseCatalog;