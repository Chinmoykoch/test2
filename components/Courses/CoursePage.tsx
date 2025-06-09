"use client"
import type React from "react"
import { type CourseType } from "../../utils/courseTypes"
import CourseContent from "./CourseContent"
import { usePathname } from "next/navigation"
// import { courses } from "../../utils/constant"
// import Link from "next/link"
// import FAQSection from "./FAQSection"
// import CategoryLandingPage from "./CategoryLandingPage"

interface CoursePageProps {
  courseType: CourseType[]
  category: string
}

const CoursePage: React.FC<CoursePageProps> = ({ courseType, category }) => {
  const pathname = usePathname()
  

  if (!courseType?.length) {
    return (
      <div className="min-h-screen pt-20 font-sans bg-black text-white flex items-center justify-center">
        <p>No courses available for this category.</p>
      </div>
    )
  }

  return (

    <div className="min-h-screen pt-20 font-sans text-white">
      {/* Show course content by specific course value in the path */}
      {courseType
        .filter((course) => pathname.endsWith(course.value))
        .map((course, index) => (
          <CourseContent key={course.value} {...course} category={category} index={index} />
        ))}
      </div>
    


    //   Category-wise full course section
    /* {courses.map((co) => {
        const formattedCategory = co.category.toLowerCase().replace(/\s+/g, "-");
        const currentPath = pathname.replace(/\/$/, "").toLowerCase();

        if (currentPath.endsWith("/" + formattedCategory)) {
          return (
            <div key={co.category} className="bg-yellow-50 px-4 py-10 w-full text-black">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{co.category}</h2>
              <div className="h-1 w-32 bg-yellow-400 mb-8"></div>
              <p className="mb-6">{
                co.description}</p>
              

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {courseType.map((program, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:shadow-xl"
                  >
                    <div className="h-48 w-full bg-gray-100 relative"></div>
                    <div className="p-6">
                      <span className="bg-yellow-400 text-sm text-white px-4 py-1 rounded-full inline-block mb-4">
                        {co.category}
                      </span>
                      <h3 className="font-bold text-lg text-gray-900 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4">{program.description}</p>
                      <div className="text-gray-600 text-sm mb-4">{program.duration}</div>
                      <Link href={`${program.redirectUrl}`}>
                        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-10">
                <FAQSection />
              </div>
            </div>
          );
        }
      })}
    </div> */
  )
}

export default CoursePage
