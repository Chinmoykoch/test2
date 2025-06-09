"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import Link from "next/link"
import { categories } from "../../utils/constant"
import { Poppins } from "next/font/google"
import {FaArrowRight } from "react-icons/fa"
import Image from "next/image"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
})

const allCategories = ["All", "Art", "Design", "Business"]

const StudyDropDown = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

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

  const filteredCategories = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) => {
          const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
          const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
          return matchesCategory && matchesSearch
        }),
      }))
      .filter((category) => category.items.length > 0)
  }, [selectedCategory, searchQuery])

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
        <div className="absolute z-50 mt-2 w-screen max-w-[1200px] bg-white shadow-xl rounded-md p-7 h-[800px] overflow-y-auto">
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

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h3 className="text-lg font-semibold">{category.title}</h3>
                <div className="space-y-4">
                  {category.items.map((item) => {
                    const mainLink = `/${item.title.replace(/\s+/g, "-").toLowerCase()}`

                    return (
                      <div
                        key={item.title}
                        className="group rounded-lg border p-4 hover:bg-muted transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={96}
                            height={96}
                            className="w-full sm:w-24 sm:h-24 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <Link href={mainLink} onClick={handleLinkClick}>
                              <h4 className="text-sm font-medium leading-none mb-2 hover:underline">
                                {item.title}
                              </h4>
                            </Link>
                            <div className="text-sm text-muted-foreground mb-2">
                              {item.links.map((link, idx) => (
                                <p key={idx} className="mb-1">
                                  <Link
                                    className="hover:text-blue-500 hover:underline"
                                    href={`${mainLink}/${link.text
                                      .replace(/\s+/g, "-")
                                      .replace(/\./g, "")
                                      .toLowerCase()}`}
                                    onClick={handleLinkClick}
                                  >
                                    {link.text}
                                  </Link>
                                </p>
                              ))}
                            </div>
                            <Link href={mainLink} onClick={handleLinkClick}>
                              <Button
                                className={`my-3 bg-yellow-400 hover:bg-yellow-500 text-black flex items-center space-x-2 px-5 py-3 rounded-md ${poppins.className}`}
                              >
                                <span>Explore Now</span>
                                <FaArrowRight className="text-black" />
                                
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
