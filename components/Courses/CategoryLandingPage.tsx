"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { FaArrowRight } from "react-icons/fa"
import { Poppins } from "next/font/google"
import { useState } from "react"
import ApplyNowForm from "../ApplyNowForm"
import FAQSection from "./FAQSection"
import TestimonialSlider from "./TestimonialSlider"
import IndustryPartners from "./Partners"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

interface CategoryLandingPageProps {
  category: string
  courses: any[]
  heroImage?: string
  categoryTitle?: string
  description?: string
  videos : any[];
  backendCourse?: any;
}



const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({
  category,
  courses,
  heroImage: customHeroImage,
  categoryTitle: customTitle,
  description: customDescription,
  videos = [],
  backendCourse
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  // Use backend data if available, otherwise fall back to custom props or default values
  const title = backendCourse?.title || customTitle || category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  const description = backendCourse?.description || customDescription || "Explore our comprehensive programs and start your journey towards a successful career.";
  const heroImage = backendCourse?.heroImage || customHeroImage || "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80";
  const ctaTitle = backendCourse?.ctaTitle || "Ready to Start Your Journey?";
  const ctaDescription = backendCourse?.ctaDescription || "Take the first step towards a successful career. Apply now or contact us for more information.";

  // Find a brochure PDF URL from the first course that has it
  const brochurePdfUrl = courses.find(c => c.brochurePdfUrl)?.brochurePdfUrl;

  const finalVideos = videos.length > 0 ? videos : courses.find(course => course.videos)?.videos || [];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <Image
          src={heroImage || "/placeholder.svg"}
          alt={`${title} Hero Image`}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">{title}</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 mb-8">{description}</p>
            <Button
              className={`bg-yellow-400 text-black font-semibold hover:bg-yellow-500 px-8 py-6 text-lg ${poppins.className}`}
              onClick={() => {
                document.getElementById('programs-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Programs <FaArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Degree Cards Section */}
      <div id="programs-section" className="max-w-7xl mx-auto py-20 px-4">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${poppins.className}`}>
          Our {title} Programs
        </h2>
        {courses.length === 0 ? (
          <div className="text-center text-gray-500 py-12">No programs found for this category.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <DegreeCard key={course.value} course={course} category={category} />
            ))}
          </div>
        )}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${poppins.className}`}>
            Why Choose Our {title} Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Industry-Relevant Curriculum</h3>
              <p className="text-gray-600">
                Our programs are designed in collaboration with industry experts to ensure you learn the most relevant
                skills and knowledge.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Experienced Faculty</h3>
              <p className="text-gray-600">
                Learn from industry professionals and experienced educators who bring real-world knowledge to the
                classroom.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Career Support</h3>
              <p className="text-gray-600">
                Get placement assistance, internship opportunities, and career guidance to help you succeed in your
                professional journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>{ctaTitle}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {brochurePdfUrl ? (
              <a
                href={brochurePdfUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <Button
                  variant="outline"
                  className="border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-black"
                >
                  Download Brochure
                </Button>
              </a>
            ) : (
              <Button variant="outline" className="border-yellow-400 text-yellow-500 opacity-50 cursor-not-allowed" disabled>
                Brochure Not Available
              </Button>
            )}
            <Button onClick={handleApplyClick} className="bg-yellow-400 text-black hover:bg-yellow-500 px-4 py-2">
              Apply Now
            </Button>
            <ApplyNowForm
              isFormOpen={isFormOpen}
              setIsFormOpen={setIsFormOpen}
              isScrolled={false}
            />
          </div>
        </div>
      </div>
      
      <div className="m-11">
      <IndustryPartners />
      {finalVideos?.length > 0 && <TestimonialSlider videos={finalVideos} />}

      </div>
{/* Enhanced Newsletter Section with SEO */}
<section className="py-16 my-10 bg-black text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Inframe School</h2>
            <p className="mb-8">Subscribe to our newsletter to receive the latest articles, news, and updates about design education and career opportunities.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow text-black"
                aria-label="Email for newsletter"
              />
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-6">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-400">By subscribing, you`ll receive exclusive content about design education, career opportunities, and admission updates.</p>
          </div>
        </section>  
      <div className="m-11">
        

      
      < FAQSection />
      </div>
      
    </div>
  )
}

// Degree Card Component
interface DegreeCardProps {
  course: any
  category: string
}

const DegreeCard: React.FC<DegreeCardProps> = ({ course, category }) => {
  const imageUrl = course.imageUrl || "/placeholder.svg";
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageUrl}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full">{course.duration}</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${poppins.className}`}>{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>
        <Link href={`/${category}/${course.value}`}>
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">View Details</Button>
        </Link>
      </div>
    </div>
  )
}

export default CategoryLandingPage

