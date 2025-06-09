"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, List, X } from "lucide-react"
import { cn } from "../../../../lib/utils"
import { Badge } from "@/components/ui/badge"

interface IndexItem {
  id: string
  title: string
  level: number
}

export default function FacilitiesBlogPost() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [showIndex, setShowIndex] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const indexItems: IndexItem[] = [
    { id: "intro", title: "Introduction", level: 1 },
    { id: "environment", title: "Creating the Perfect Environment for Creative Minds", level: 1 },
    { id: "designStudios", title: "Design Studios That Mirror Industry Standards", level: 1 },
    { id: "digitalLabs", title: "Digital Media Labs for the Digital Age", level: 1 },
    { id: "collaborativeSpaces", title: "Collaborative Spaces That Foster Innovation", level: 1 },
    { id: "materialsLibrary", title: "Materials Library & Workshop", level: 1 },
    { id: "exhibitionSpaces", title: "Exhibition Spaces to Showcase Student Work", level: 1 },
    { id: "resourceCenter", title: "Resource Center & Specialized Libraries", level: 1 },
    { id: "outdoorSpaces", title: "Outdoor Creative Spaces", level: 1 },
    { id: "technology", title: "Technology Integration Throughout Campus", level: 1 },
    { id: "sustainability", title: "Sustainability in Design", level: 1 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: "-100px 0px -80% 0px" },
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      Object.values(sectionRefs.current).forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = sectionRefs.current[id]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveSection(id)
      setShowIndex(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-black">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Modern design facilities at Inframe School"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <Badge className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full mb-4 text-sm font-medium">
            Facilities
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            Explore the State-of-the-Art Facilities at Inframe School
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Take a virtual tour of our modern design labs, creative spaces, and innovative learning environments.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex justify-between items-center mb-8">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          <div className="text-sm text-gray-500">Feb 8, 2025 · 5 min read</div>
          <Button
            variant="outline"
            className="md:hidden flex items-center gap-2"
            onClick={() => setShowIndex(!showIndex)}
          >
            {showIndex ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
            {showIndex ? "Close Index" : "Show Index"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Index Sidebar */}
          <aside
            className={cn(
              "md:w-1/4 md:sticky md:top-8 md:self-start md:h-[calc(100vh-120px)] md:overflow-auto md:block",
              showIndex ? "fixed inset-0 z-50 bg-white p-4 overflow-auto" : "hidden",
            )}
          >
            <div className="md:hidden flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Index</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowIndex(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <Card>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-4 hidden md:block">Index</h3>
                <ul className="space-y-2">
                  {indexItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          "text-left w-full py-1 px-2 rounded hover:bg-green-100 transition-colors",
                          activeSection === item.id ? "bg-green-200 font-medium" : "",
                          item.level === 1 ? "text-base" : "text-sm pl-4",
                        )}
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="md:w-3/4">
            <article className="prose prose-lg max-w-none">
              <section id="intro" ref={(el) => { sectionRefs.current["intro"] = el }} className="mb-12">
                <p>
                  At Inframe School, we believe that the right environment is crucial for nurturing creativity and 
                  innovation. Our campus has been thoughtfully designed to provide students with spaces that inspire, 
                  challenge, and support their creative journey after 12th grade.
                </p>
              </section>

              <section id="environment" ref={(el) => { sectionRefs.current["environment"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Creating the Perfect Environment for Creative Minds</h2>
                    <p>
                      At Inframe School, we believe that the right environment is crucial for nurturing creativity and 
                      innovation. Our campus has been thoughtfully designed to provide students with spaces that inspire, 
                      challenge, and support their creative journey after 12th grade.
                    </p>
                    <p>
                      {`The physical surroundings play a significant role in how students learn and develop their creative 
                      abilities. That's why we've invested in creating spaces that not only meet industry standards but 
                      also foster a sense of community and collaboration among our students.`}
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section id="designStudios" ref={(el) => { sectionRefs.current["designStudios"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Design Studios That Mirror Industry Standards</h2>
                    <p>
                      Our design studios are equipped with the latest tools and technologies used by professionals in the 
                      field. From advanced drawing tablets and 3D printers to professional-grade software and hardware, 
                      students have access to everything they need to bring their creative visions to life.
                    </p>
                    <blockquote className="border-l-4 border-green-500 pl-4 italic my-4">
                      {`"The moment I stepped into Inframe's design studio, I knew this was where I wanted to study. 
                      The facilities are exactly what you'd find in top design firms." - Ananya Sharma, Graphic Design Student`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="digitalLabs" ref={(el) => { sectionRefs.current["digitalLabs"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Digital Media Labs for the Digital Age</h2>
                    <p>
                      {`In today's digital world, mastering digital tools is essential for any creative professional. 
                      Our digital media labs feature high-performance computers, industry-standard software, and 
                      specialized equipment for photography, videography, and digital art creation.`}
                    </p>
                    <div className="bg-green-100 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">State-of-the-Art Digital Facilities</h4>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Animation Studio: Complete with motion capture technology</li>
                        <li>Photography Lab: Professional lighting setups and post-processing workstations</li>
                        <li>Sound Design Room: Acoustic treatment and professional recording equipment</li>
                        <li>VR/AR Lab: Cutting-edge virtual and augmented reality tools</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="collaborativeSpaces" ref={(el) => { sectionRefs.current["collaborativeSpaces"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Collaborative Spaces That Foster Innovation</h2>
                    <p>
                      Creativity thrives in collaboration. Our campus features numerous spaces designed specifically 
                      for group projects, brainstorming sessions, and interdisciplinary collaboration. These areas 
                      are equipped with smart boards, comfortable seating, and all the tools needed for effective teamwork.
                    </p>
                    <p>
                      {`We understand that some of the best ideas emerge from casual conversations and impromptu 
                      collaborations. That's why our facilities include both formal meeting rooms and informal 
                      gathering spaces where students can exchange ideas and insights.`}
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section id="materialsLibrary" ref={(el) => { sectionRefs.current["materialsLibrary"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Materials Library & Workshop</h2>
                    <p>
                      Understanding materials is fundamental to design. Our extensive materials library contains 
                      samples of various textiles, papers, woods, metals, and synthetic materials that students 
                      can explore and experiment with. Adjacent to the library is our fully-equipped workshop 
                      where students can prototype their designs using various materials.
                    </p>
                    <blockquote className="border-l-4 border-green-500pl-4 italic my-4">
                      {`"The hands-on experience I gained in the materials workshop completely transformed my 
                      approach to design. Working with actual materials gives you insights you can't get from 
                      digital work alone." - Rohan Kapoor, Product Design Student`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="exhibitionSpaces" ref={(el) => { sectionRefs.current["exhibitionSpaces"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Exhibition Spaces to Showcase Student Work</h2>
                    <p>
                      We believe in celebrating creativity. Our campus features dedicated exhibition spaces where 
                      students can display their work throughout the year. These professional gallery-style areas 
                      are also used for hosting industry events, giving students opportunities to network with 
                      professionals and showcase their talents.
                    </p>
                    <div className="bg-green-100 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">Exhibition Benefits</h4>
                      <p className="mt-2">
                        Regular exhibitions provide students with experience in presenting their work professionally, 
                        receiving feedback from peers and industry experts, and building their portfolios. These events 
                        often attract potential employers and clients, creating valuable networking opportunities.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="resourceCenter" ref={(el) => { sectionRefs.current["resourceCenter"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Resource Center & Specialized Libraries</h2>
                    <p>
                      Our resource center houses an extensive collection of books, magazines, and digital resources 
                      related to various design disciplines. Students have access to specialized libraries focusing 
                      on architecture, fashion, graphic design, and more.
                    </p>
                    <p>
                      The resource center is staffed by knowledgeable librarians who can assist students in finding 
                      relevant references and research materials for their projects. We also maintain subscriptions 
                      to leading design journals and online resources to ensure our students stay current with 
                      industry trends and developments.
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section id="outdoorSpaces" ref={(el) => { sectionRefs.current["outdoorSpaces"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Outdoor Creative Spaces</h2>
                    <p>
                      {`Creativity isn't confined to indoor spaces. Our campus includes thoughtfully designed outdoor 
                      areas where students can sketch, conceptualize, or simply find inspiration in nature. These 
                      spaces provide a refreshing change of environment and encourage students to think outside 
                      conventional boundaries.`}
                    </p>
                    <div className="bg-green-100 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">Inspiration in Nature</h4>
                      <p className="mt-2">
                        Our outdoor spaces include quiet garden areas for reflection, open-air amphitheaters for 
                        presentations and performances, and covered work areas where students can create while 
                        enjoying the natural environment. These spaces are particularly popular during good weather 
                        and provide a welcome break from indoor studio work.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="technology" ref={(el) => { sectionRefs.current["technology"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Technology Integration Throughout Campus</h2>
                    <p>
                      Technology is seamlessly integrated throughout our campus. High-speed internet, cloud-based 
                      collaboration tools, and our custom-designed student portal ensure that learning and creativity 
                      can happen anywhere on campus.
                    </p>
                    <p>
                      {`We regularly update our technology infrastructure to keep pace with industry developments, 
                      ensuring that our students are familiar with the tools and systems they'll encounter in 
                      their professional careers. From wireless presentation capabilities to specialized software 
                      licenses, we provide the technological foundation for creative excellence.`}
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section id="sustainability" ref={(el) => { sectionRefs.current["sustainability"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-green-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Sustainability in Design</h2>
                    <p>
                      {`Our facilities aren't just state-of-the-art—they're also designed with sustainability in mind. 
                      From energy-efficient lighting and climate control to recycling programs and sustainable materials, 
                      we teach environmental responsibility by example.`}
                    </p>
                    <blockquote className="border-l-4 border-green-500pl-4 italic my-4">
                      {`"Sustainable design isn't just a course at Inframe—it's embedded in how the entire campus 
                      functions. It's inspiring to learn in an environment that practices what it teaches." 
                      - Meera Joshi, Interior Design Student`}
                    </blockquote>
                    <div className="bg-green-100 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">Schedule a Campus Tour</h4>
                      <p className="mt-2">
                       {`Ready to explore Inframe School's facilities in person? Schedule a campus tour today and 
                        see why we're recognized as having the best design school infrastructure in Rajasthan.`}
                      </p>
                      <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white">
                        Book a Tour Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-[#1877F2] text-white hover:bg-[#1877F2]/90">
                    Facebook
                  </Button>
                  <Button variant="outline" className="bg-[#1DA1F2] text-white hover:bg-[#1DA1F2]/90">
                    Twitter
                  </Button>
                  <Button variant="outline" className="bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90">
                    LinkedIn
                  </Button>
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="text-sm text-gray-500">Tags:</span>
                  <span className="text-sm text-blue-500">#InframeSchool</span>
                  <span className="text-sm text-blue-500">#DesignFacilities</span>
                  <span className="text-sm text-blue-500">#CreativeSpaces</span>
                  <span className="text-sm text-blue-500">#DesignEducation</span>
                  <span className="text-sm text-blue-500">#AfterTwelfth</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}