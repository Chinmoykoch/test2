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

export default function BlogPost() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [showIndex, setShowIndex] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const indexItems: IndexItem[] = [
    { id: "intro", title: "Introduction", level: 1 },
    { id: "reason1", title: "1. Focused Curriculum Tailored for Creative Excellence", level: 1 },
    { id: "reason2", title: "2. World-Class Infrastructure and State-of-the-Art Facilities", level: 1 },
    { id: "reason3", title: "3. Expert Faculty with Industry Experience", level: 1 },
    { id: "reason4", title: "4. Placement Opportunities and Industry Exposure", level: 1 },
    { id: "reason5", title: "5. Holistic Development and Personality Building", level: 1 },
    { id: "conclusion", title: "Final Thought", level: 1 },
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
      <section className="relative h-[60vh] min-h-[400px] bg-black">
        <Image
          src="/images/gallery/1717492615506 - Copy (2).jpg"
          alt="Students in a design classroom"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <Badge className="bg-yellow-500 hover:bg-yellow-600 my-20 text-white px-4 py-1 rounded-full mb-4 text-sm font-medium">
            Education
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            {`Top 5 Reasons to Choose Inframe School for Your Child's Education`}
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Discover why Inframe School stands out as one of the best design schools in India and the top arts & design
            school in Rajasthan.
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
                          "text-left w-full py-1 px-2 rounded hover:bg-yellow-100 transition-colors",
                          activeSection === item.id ? "bg-yellow-200 font-medium" : "",
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
                  {`In today's rapidly changing world, selecting the right school for your child is a crucial decision. As
                  parents, you want a place where your child can not only grow academically but also thrive in
                  creativity and innovation. Inframe School offers an outstanding educational experience for students
                  interested in design, arts, and creative fields. If you're considering the best design school in India
                  or the top arts & design school in Rajasthan, here are five compelling reasons why Inframe School
                  stands out as the top choice for your child's education.`}
                </p>
              </section>

              <section id="reason1" ref={(el) => { sectionRefs.current["reason1"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">1. Focused Curriculum Tailored for Creative Excellence</h2>
                    <p>
                      {`At Inframe School, the curriculum is designed to nurture the creative minds of tomorrow. Whether
                      your child is interested in arts, design, or technology, the school offers a specialized approach
                      that caters to individual talents. The school's unique combination of theoretical learning and
                      hands-on training in design and art ensures students gain not just academic knowledge but
                      practical skills that set them apart in the real world.`}
                    </p>
                    <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-4">
                      {`"Creativity is intelligence having fun." – Albert Einstein`}
                    </blockquote>
                    <p>
                      {`Inframe School is one of the best design schools in India, offering personalized learning paths
                      that align with your child's passion for design, arts, and creativity.`}
                    </p>
                  </CardContent>
                </Card>
              </section>

              <section id="reason2" ref={(el) => { sectionRefs.current["reason2"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      2. World-Class Infrastructure and State-of-the-Art Facilities
                    </h2>
                    <p>
                     {`Inframe School prides itself on its modern infrastructure. The school is equipped with
                      cutting-edge facilities that provide students with the resources they need to thrive. From
                      spacious art studios to fully-equipped design labs, the school's infrastructure is built to foster
                      creativity and innovation. It's a place where students can experiment with new ideas and
                      technologies to bring their visions to life.`}
                    </p>
                    <p>
                      {`If you are looking for the best designing school in Rajasthan, Inframe School's state-of-the-art
                      design labs and facilities are second to none.`}
                    </p>
                    <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-4">
                      {`"The best way to predict the future is to create it." – Peter Drucker`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="reason3" ref={(el) => { sectionRefs.current["reason3"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">3. Expert Faculty with Industry Experience</h2>
                    <p>
                      {`The Inframe School faculty comprises highly skilled professionals with extensive experience in the
                      design and art industries. This expertise ensures that students receive education and mentorship
                      from the very best in the field. The hands-on learning approach with industry professionals helps
                      students stay ahead of the curve and prepares them for future success.`}
                    </p>
                    <p>
                      {`Whether your child is pursuing design, architecture, or other creative fields, Inframe School's
                      expert faculty will guide them every step of the way.`}
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">
                        {`Learning from the Best: Why Inframe School's Faculty is Key to Your Child's Success`}
                      </h4>
                      <ul className="list-disc pl-5 mt-2">
                        <li>Industry professionals with real-world experience</li>
                        <li>Mentorship beyond the classroom</li>
                        <li>Up-to-date knowledge of current design trends</li>
                        <li>Personalized guidance for each student</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="reason4" ref={(el) => { sectionRefs.current["reason4"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">4. Placement Opportunities and Industry Exposure</h2>
                    <p>
                      {`Inframe School not only focuses on academics but also prioritizes real-world experience. The
                      school has partnerships with leading companies and organizations in the design and arts sectors.
                      Through these partnerships, students gain valuable internship and placement opportunities that
                      give them a competitive edge in the job market.`}
                    </p>
                    <p>
                      {`As one of the top arts & design schools in Rajasthan, Inframe School's network and exposure to
                      industry leaders ensures your child is always in the loop about the latest trends and
                      opportunities in design.`}
                    </p>
                    <blockquote className="border-l-4 border-yellow-400 pl-4 italic my-4">
                      {`"Success is where preparation and opportunity meet." – Bobby Unser`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="reason5" ref={(el) => { sectionRefs.current["reason5"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-yellow-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">5. Holistic Development and Personality Building</h2>
                    <p>
                      {`At Inframe School, education is about more than just academic learning. The school emphasizes the
                      holistic development of students by fostering skills such as communication, teamwork, and
                      leadership. Through various extracurricular activities, workshops, and exposure to real-world
                      scenarios, students at Inframe School develop the personality traits that employers highly value
                      in creative professionals.`}
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">
                        {`Beyond Books: How Inframe School Shapes Your Child's Future as a Leader`}
                      </h4>
                      <p className="mt-2">
                        {`Students at Inframe School don't just learn design principles; they develop critical thinking,
                        problem-solving abilities, and the confidence to present their ideas effectively in professional
                        settings.`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="conclusion" ref={(el) => { sectionRefs.current["conclusion"] = el }} className="mb-12">
                <Card className="mb-6 border border-yellow-400 bg-yellow-50">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Final Thought</h2>
                    <p>
                      {`Inframe School provides a comprehensive, innovative, and hands-on learning environment where
                      students can truly excel in their chosen creative field. With a focus on personalized education,
                      expert guidance, modern infrastructure, and industry exposure, Inframe School is the best choice
                      for your child's future in design and arts. Whether you're looking for the best design school in
                      India or the top arts & design school in Rajasthan, Inframe School's offerings make it a top
                      contender in shaping the leaders of tomorrow.`}
                    </p>
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
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}

