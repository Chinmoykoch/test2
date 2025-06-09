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

const category = {
  design: [
    {
      title: "Interior Design",
      programs: [
        "BDes In Interior Design",
        "BVOC in Interior Design",
        "BSC in Interior Design",
        "One Year Diploma in Interior Design",
        "Three Year Diploma in Interior Design",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Fashion Design",
      programs: [
        "BDes In Fashion Design",
        "BVOC in Fashion Design",
        "BSC in Fashion Design",
        "One Year Diploma in Fashion Design",
        "Three Year Diploma in Fashion Design",
      ],
      image: "/fashion-1.JPG",
    },
    {
      title: "Graphic Design",
      programs: [
        "BDes In Graphic Design",
        "BVOC in Graphic Design",
        "BSC in Graphic Design",
        "One Year Diploma in Graphic Design",
        "Three Year Diploma in Graphic Design",
      ],
      image:
        "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "UIUX-Design",
      programs: [
        "BDes In UI & UX Design",
        "One Year Diploma in UI & UX Design",
      ],
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Animation-VFX",
      programs: [
        "BDes in Animation and VFX",
        "BVOC in Animation and VFX",
        "BSC in Animation and VFX",
        "One Year Diploma in Animation and VFX",
        "Two Year Diploma in Animation and VFX",
        "Three Year Diploma in Animation and VFX",
      ],
      image:
        "https://images.unsplash.com/photo-1628494391268-c9935bc384d5?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Jewellery Design",
      programs: [
        "BVOC in Jewellery Design",
        "One Year Diploma in Jewellery Design",
        "One Year Diploma in CAD Jewellery",
        "Six Month Certificate Course in Jewellery Design",
        "Six Month Certificate Course in CAD Jewellery",
      ],
      image:
        "https://images.unsplash.com/photo-1606293926249-ed22e446d476?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  art: [
    {
      title: "Fine Arts",
      programs: [
        "BFA in Painting",
        "BFA in Visual Communication",
        "BFA in Sculpture",
        "BFA in Applied",
        "B.VOC in Fine Arts",
        "One Year Diploma in Painting",
        "Three Year Diploma in Fine Arts",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1673514503009-912ffc6ff956?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  business: [
    {
      title: "Digital Marketing",
      programs: [
        "BVOC in Digital Marketing",
        "One Year Diploma in Digital Marketing",
        "Six Month Certificate Course in Digital Marketing",
      ],
      image: "/fetchpik.com-HAfwcPu9n1.jpg",
    },
    {
      title: "Entrepreneurship Skill",
      programs: [
        "BVOC in Entrepreneurship Skill",
        "One Year Diploma in Entrepreneurship Skill",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1726704124426-c220031548b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Media-Entertainment",
      programs: [
        "BVOC in Media and Entertainment",
        "One Year Diploma in Media and Entertainment",
      ],
      image:
        "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1lZGlhJTIwYW5kJTIwZW50ZXJ0YWlubWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Advertising Marketing",
      programs: ["BBA Advanced Advertising And Marketing Strategies"],
      image:
        "https://plus.unsplash.com/premium_photo-1684341008757-3b456034e943?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// interface DegreeMap {
//   [key: string]: string;
// }

// const getDegreeType = (text: string): string => {
//   const degreeMap: DegreeMap = {
//     "B. Des": "bdes",
//     "B.VOC": "bvoc",
//     "B.SC": "bsc",
//     "1 Year Diploma": "diploma1",
//     "3 Year Diploma": "diploma3",
//     "2 Year Diploma": "diploma2",
//     "6 Month Certificate": "certificate6",
//   };



  // Find which degree type this course belongs to
//   for (const [key, value] of Object.entries(degreeMap)) {
//     if (text.includes(key)) {
//       return value;
//     }
//   }

//   return "bdes"; // Default fallback
// };

interface Course {
  title: string;
  programs: string[];
  image: string;
}

interface CourseSectionProps {
  courses: Course[];
}

const CourseSection: React.FC<CourseSectionProps> = ({ courses }) => (
  <div
    className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 ${poppins.className}`}
  >
    {courses.map((course, idx) => (
      <Card
        key={idx}
        className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-yellow-100 hover:border-yellow-300"
      >
        <div className="relative">
          <Image
            src={course.image}
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
            {course.programs.map((program, idx) => (
            
              
              <li
                key={idx}
                className="text-sm text-gray-600 hover:text-yellow-600 transition-colors flex items-start"
              >
                <Link
                  className="hover:text-blue-500 hover:underline"
                  href={`/${course.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}/${program.replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <span className="text-yellow-400 mr-2 text-lg leading-none">
                    •
                  </span>
                  {program}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={`/${course.title.replace(/\s+/g, "-").toLowerCase()}`}
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

const CourseCatalog = () => {
  const allCourses = [
    ...category.design,
    ...category.art,
    ...category.business,
  ];

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
              {["all", "art","design" , "business" ].map((tab) => (
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
            <CourseSection courses={allCourses} />
          </TabsContent>
          <TabsContent value="art">
            <CourseSection courses={category.art} />
          </TabsContent>
          <TabsContent value="business">
            <CourseSection courses={category.business} />
          </TabsContent>
          <TabsContent value="design">
            <CourseSection courses={category.design} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseCatalog;
