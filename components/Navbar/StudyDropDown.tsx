"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"

import { Poppins } from "next/font/google"
import {FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import { useCourses, Course, CourseProgram, generateConsistentSlug } from "@/utils/api"

// TypeScript interfaces
interface Link {
  text: string
}

interface CategoryItem {
  title: string
  category: string
  image: string
  links: Link[]
  slug: string
}

interface Category {
  title: string
  items: CategoryItem[]
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const allCategories = ["All",  "Art", "Design", "Business"]

const StudyDropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  
  // Fetch courses from backend
  const { courses, loading, error } = useCourses()

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev)

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleOutsideClick)
    return () => document.removeEventListener("mousedown", handleOutsideClick)
  }, [])

  const handleLinkClick = () => setIsDropdownOpen(false)

  // Transform backend course data to frontend format
  const categories: Category[] = useMemo(() => {
    if (!courses || courses.length === 0) return []

    return courses.map((course: Course) => {
      const levels = course.programs?.map((program: CourseProgram) => ({
        text: program.title || ''
      })) || []

      // Determine category based on course title
      let category = "Design"
      if (["Fine Arts", "Animation and VFX"].some(art => course.title.includes(art))) {
        category = "Art"
      } else if (["Digital Marketing", "Entrepreneurship", "Advertising"].some(business => course.title.includes(business))) {
        category = "Business"
      }

      return {
        title: course.title,
        items: [{
          title: course.title,
          category: category,
          image: course.heroImage || "/images/gallery/1719304885452_1.jpg",
          links: levels,
          slug: course.slug
        }]
      }
    })
  }, [courses])

  const filteredCategories = useMemo((): Category[] => {
    return categories
      .map((category: Category) => ({
        ...category,
        items: category.items.filter((item: CategoryItem) => {
          const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
          const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
          return matchesCategory && matchesSearch
        }),
      }))
      .filter((category: Category) => category.items.length > 0)
  }, [categories, selectedCategory, searchQuery])

  if (loading) {
    return (
      <div className="relative" ref={dropdownRef}>
        <Button
          className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          Study
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </Button>
        {isDropdownOpen && (
          <div className="absolute z-50 mt-2 w-screen max-w-[1200px] bg-white shadow-xl rounded-md p-7 max-h-[90vh] overflow-y-auto">
            <div className="text-center py-20 text-xl">Loading courses...</div>
          </div>
        )}
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative" ref={dropdownRef}>
        <Button
          className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-haspopup="true"
        >
          Study
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </Button>
        {isDropdownOpen && (
          <div className="absolute z-50 mt-2 w-screen max-w-[1200px] bg-white shadow-xl rounded-md p-7 max-h-[90vh] overflow-y-auto">
            <div className="text-center py-20 text-red-500">Failed to load courses: {error}</div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold"
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        Study
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
        />
      </Button>

      {isDropdownOpen && (
        <div className="absolute z-50 mt-2 w-screen max-w-[1200px] bg-white shadow-xl rounded-md p-7 max-h-[90vh] overflow-y-auto">
          <div className="flex flex-col lg:flex-row lg:gap-4 mb-6">
            <div className="relative flex-1 mb-4 lg:mb-0">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
            {filteredCategories.map((category: Category) => (
              <div key={category.title} className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h3>
                  {category.items.map((item: CategoryItem) => {
                    const mainLink = `/${item.slug}`

                    return (
                      <div
                        key={item.title}
                        className="group rounded-lg border border-gray-200 p-4 hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Image
                              src={item.image || "/images/gallery/1719304885452_1.jpg"}
                              alt={item.title}
                              width={80}
                              height={80}
                              className="w-20 h-20 object-cover rounded-lg"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/images/gallery/1719304885452_1.jpg";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <Link href={mainLink} onClick={handleLinkClick}>
                              <h4 className="text-sm font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                                {item.title}
                              </h4>
                            </Link>
                            <div className="space-y-1 mb-3">
                              {item.links.map((link: Link, idx: number) => {
                                const programSlug = generateConsistentSlug(link.text);
                                return (
                                  <div key={idx} className="text-xs text-gray-600">
                                    <Link
                                      className="hover:text-blue-500 hover:underline transition-colors"
                                      href={`${mainLink}/${programSlug}`}
                                      onClick={handleLinkClick}
                                    >
                                      {link.text}
                                    </Link>
                                  </div>
                                )
                              })}
                            </div>
                            <Link href={mainLink} onClick={handleLinkClick}>
                              <Button
                                className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium flex items-center justify-center space-x-2 px-4 py-2 rounded-md transition-colors ${poppins.className}`}
                              >
                                <span>Explore Now</span>
                                <FaArrowRight className="text-black text-xs" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default StudyDropDown
