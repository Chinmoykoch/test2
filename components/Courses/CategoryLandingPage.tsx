"use client"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { courseTypes, type CourseType, type VideosType } from "../../utils/courseTypes"
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
  courses: CourseType[]
  heroImage?: string
  categoryTitle?: string
  description?: string
  videos : VideosType[];
}

interface CategoryInfo {
  title: string
  description: string
  heroImage: string
 
}

const getCategoryInfo = (category: string): CategoryInfo => {
  const categoryMap: { [key: string]: CategoryInfo } = {
    "interior-design": {
      title: "Interior Design",
      description:
        "Transform spaces and create beautiful environments with our comprehensive interior design programs. Learn from industry experts and build a successful career in interior design.",
      heroImage: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1920&auto=format&fit=crop",
      
    },
    "fashion-design": {
      title: "Fashion Design",
      description:
        "Unleash your creativity in the world of fashion. Our programs prepare you for a dynamic career in fashion design, from concept to runway.",
      heroImage: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop",
    },
    "graphic-design": {
      title: "Graphic Design",
      description:
        "Master the art of visual communication with our graphic design programs. Create compelling designs that captivate and communicate.",
      heroImage: "https://images.unsplash.com/photo-1626785774625-0b1c2c4efd7c?q=80&w=1920&auto=format&fit=crop",
    },
    "uiux-design": {
      title: "UI/UX Design",
      description:
        "Design seamless digital experiences that users love. Our UI/UX design programs prepare you for the growing digital design industry.",
      heroImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1920&auto=format&fit=crop",
    },
    "animation-vfx": {
      title: "Animation & VFX",
      description:
        "Bring stories to life through animation and visual effects. Our programs provide the skills needed for this exciting and evolving field.",
      heroImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1920&auto=format&fit=crop",
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "Master the strategies that drive online success. Our digital marketing programs prepare you for a career in this fast-paced digital world.",
      heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1920&auto=format&fit=crop",
    },
    "jewellery-design": {
      title: "Jewellery Design",
      description:
        "Create stunning jewellery pieces that combine artistry with craftsmanship. Our programs cover traditional techniques and modern design approaches.",
      heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1920&auto=format&fit=crop",
    },
    "entrepreneurship-skill": {
      title: "Entrepreneurship Skills",
      description:
        "Develop the skills needed to launch and grow successful businesses. Our programs prepare you for the challenges of entrepreneurship.",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop",
    },
    "media-entertainment": {
      title: "Media & Entertainment",
      description:
        "Prepare for a career in the dynamic world of media and entertainment. Our programs cover content creation, production, and distribution.",
      heroImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1920&auto=format&fit=crop",
    },
    "fine-arts": {
      title: "Fine Arts",
      description:
        "Express yourself through various artistic mediums. Our fine arts programs nurture creativity and technical skills for aspiring artists.",
      heroImage: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1920&auto=format&fit=crop",
      
    },
    "advertising-marketing": {
      title: "Advertising & Marketing",
      description:
        "Create compelling campaigns that drive results. Our programs prepare you for a career in the exciting field of advertising and marketing.",
      heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1920&auto=format&fit=crop",
    },
  }

  return (
    categoryMap[category] || {
      title: category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: "Explore our comprehensive programs and start your journey towards a successful career.",
      heroImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1920&q=80",
    }
  )
}

const CategoryLandingPage: React.FC<CategoryLandingPageProps> = ({
  category,
  courses,
  heroImage: customHeroImage,
  categoryTitle: customTitle,
  description: customDescription,
  videos = []
}) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };
  const { title, description, heroImage } =
    customTitle || customDescription || customHeroImage
      ? {
          title: customTitle,
          description: customDescription,
          heroImage: customHeroImage,
        }
      : getCategoryInfo(category)

      const categoryCourses = courseTypes[category] || [];
      const fallbackVideos = categoryCourses.find(course => course.videos)?.videos || [];
    
      const finalVideos = videos.length > 0 ? videos : fallbackVideos;


      


  // Group courses by degree type for better organization
  const degreeGroups = {
    bachelor: courses.filter(
      (course) =>
        course.value.includes("bdes") ||
        course.value.includes("bvoc") ||
        course.value.includes("bba") ||
        course.value.includes("bsc") ||
        course.value.includes("bfa")
    ),
    diploma: courses.filter(
      (course) =>
        course.value.includes("diploma") ||
        course.value.includes("diploma1") ||
        course.value.includes("diploma2") ||
        course.value.includes("diploma3") ||
        course.value.includes("cad")
    ),
    diploma1: courses.filter(
      (course) =>
        course.value.includes("diploma1") 
    ),
    certificate: courses.filter(
      (course) =>
        course.value.includes("cert") ||
        course.value.includes("certificate")
    ),
  };
  

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

        {/* Bachelor's Degrees */}
        {degreeGroups.bachelor.length > 0 && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 ${poppins.className}`}>{`Bachelor's Degrees`}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {degreeGroups.bachelor.map((course) => (
                <DegreeCard key={course.value} course={course} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Diplomas */}
        {/* {degreeGroups.diploma.length > 0 && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 ${poppins.className}`}>Diploma Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {degreeGroups.diploma.map((course) => (
                <DegreeCard key={course.value} course={course} category={category} />
              ))}
            </div>
          </div>
        )} */}

        {/* Diplomas1*/}
        {degreeGroups.diploma1.length > 0 && (
          <div className="mb-16">
            <h3 className={`text-2xl font-bold mb-8 ${poppins.className}`}>Diploma Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {degreeGroups.diploma1.map((course) => (
                <DegreeCard key={course.value} course={course} category={category} />
              ))}
            </div>
          </div>
        )}

        {/* Certificates */}
        {degreeGroups.certificate.length > 0 && (
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${poppins.className}`}>Certificate Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {degreeGroups.certificate.map((course) => (
                <DegreeCard key={course.value} course={course} category={category} />
              ))}
            </div>
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
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${poppins.className}`}>Ready to Start Your Journey?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Take the first step towards a successful career in {(title || "").toLowerCase()}. Apply now or contact us for more
            information.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href=""
            download="Academic-Brochure-2024.pdf"
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-500 hover:bg-yellow-400 hover:text-black"
            >
              Download Brochure
            </Button>
          </Link>


            
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
  course: CourseType
  category: string
}

const DegreeCard: React.FC<DegreeCardProps> = ({ course, category }) => {
  // Get appropriate image based on course type
  // Get appropriate image based on course type
const getCardImage = (courseValue: string, category: string) => {
    const imageMap = {
      bdes: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
      bvoc: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?w=800&q=80",
      bsc: "https://images.unsplash.com/photo-1616048056617-93b94a339009?w=800&q=80",
      diploma1: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80",
      diploma2: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
      diploma3: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800&q=80",
      certificate6: "https://images.unsplash.com/photo-1606112216719-3c2c2cce4507?w=800&q=80",
    }
  
    // Category-specific images
    const categoryImageMap: { [key: string]: string } = {
      "interior-design": "https://images.unsplash.com/photo-1618219944342-824e40a13285?w=800&q=80",
      "fashion-design": "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
      "graphic-design": "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80",
      "uiux-design": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      "animation-vfx": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
      "digital-marketing": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      "jewellery-design": "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80",
      "entrepreneurship-skill": "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      "media-entertainment": "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80",
      "fine-arts": "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&q=80",
      "advertising-marketing": "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
    }
  
    // Course-specific images for specific categories
    if (category === "fashion-design") {
      if (courseValue.includes("bdes")) {
        return "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
      } 
      else if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1516762689617-e1cffcef479d" 
      }
      else if (courseValue.includes("diploma")) {
        return "https://images.unsplash.com/photo-1537832816519-689ad163238b?w=800&q=80"
      } else {
        return "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
      }
    }
  
    if (category === "interior-design") {
      if (courseValue.includes("bdes")) {
        return "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
      } 
      else if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" 
      }
      else if (courseValue.includes("diploma1")) {
        return "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
      }
      else if (courseValue.includes("diploma")) {
        return "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80" 
      }
      
      else {
        return "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80"
      }
    }
  
    if (category === "graphic-design") {
      if (courseValue.includes("bdes") || courseValue.includes("bfa")) {
        return "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9"
      }
      else if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" 
      }
      else if (courseValue.includes("diploma")) {
        return "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80"
      } else {
        return "https://images.unsplash.com/photo-1572044162444-ad60f128bdea"
      }
    }
  
    if (category === "uiux-design") {
      if (courseValue.includes("bdes")) {
        return "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80"
      } else {
        return "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
      }
    }

    if (category === "advertising-marketing") {
      if (courseValue.includes("bba")) {
        return "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16"
      } else {
        return "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80"
      }
    }

    if (category === "entrepreneurship-skill") {
      if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      } else {
        return "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
      }
    }

    if (category === "fine-arts") {
      if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5"
      }
      else if (courseValue.includes("bfa")) {
        return "https://images.unsplash.com/photo-1518998053901-5348d3961a04" 
      }
      else {
        return "https://images.unsplash.com/photo-1547891654-e66ed7ebb968"
      }
    }

    if (category === "media-entertainment") {
      if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1485846234645-a62644f84728"
      } else {
        return "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80"
      }
    }
  
    if (category === "animation-vfx") {
      if (courseValue.includes("bdes") || courseValue.includes("bsc")) {
        return "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80"
      } else {
        return "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=800&q=80"
      }
    }
    
  
    if (category === "digital-marketing") {
      if (courseValue.includes("diploma")) {
        return "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80"
      }
      else if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1533750349088-cd871a92f312" 
      }
      else {
        return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
      }
    }
  
    if (category === "jewellery-design") {
      if (courseValue.includes("bvoc")) {
        return "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80"
      }
      else if (courseValue.includes("diploma1")) {
        return "https://images.unsplash.com/photo-1573408301185-9146fe634ad0" 
      }
      else if (courseValue.includes("certificate")) {
        return "https://images.unsplash.com/photo-1602173574767-37ac01994b2a" 
      }
      else {
        return "https://images.unsplash.com/photo-1573408301185-9146fe634ad0"
      }
    }
  
    // Check if we have a default image for the category
    if (categoryImageMap[category]) {
      return categoryImageMap[category]
    }
  
    // Default to the general map
    for (const [key, value] of Object.entries(imageMap)) {
      if (courseValue.includes(key)) {
        return value
      }
    }
  
    return "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80"
  }

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={getCardImage(course.value, category) || "/placeholder.svg"}
          alt={course.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 hover:scale-110"
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

