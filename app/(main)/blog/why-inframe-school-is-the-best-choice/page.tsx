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
    { id: "reason1", title: "1. Industry-Driven Curriculum Designed for Future Creatives", level: 1 },
    { id: "reason2", title: "2. Top-Notch Infrastructure for Creativity to Thrive", level: 1 },
    { id: "reason3", title: "3. Faculty with Practical Industry Expertise", level: 1 },
    { id: "reason4", title: "4. Career-Oriented Opportunities and Placement Support", level: 1 },
    { id: "reason5", title: "5. Fostering Holistic Growth Beyond Academics", level: 1 },
    { id: "reason6", title: "6. Strong Alumni Network and Industry Recognition", level: 1 },
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
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
          alt="Students working on design projects"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <Badge className="bg-blue-500 hover:bg-blue-600 my-20 text-white px-4 py-1 rounded-full mb-4 text-sm font-medium">
            Career
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            {`Why Inframe School is the Best Choice for Your Child's Future`}
          </h1>
          <p className="text-xl text-white max-w-2xl">
            {`Explore the perfect blend of education, expertise, and exposure at Inframe School for students after 12th
            grade.`}
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
                          "text-left w-full py-1 px-2 rounded hover:bg-blue-100 transition-colors",
                          activeSection === item.id ? "bg-blue-200 font-medium" : "",
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
                  {`Choosing the right educational path after 12th is a critical decision that can shape your child's
                  future. With an overwhelming number of courses and career options available, it's easy to feel lost.
                  However, if your child is passionate about design, arts, and creativity, then Inframe School offers
                  the perfect blend of education, expertise, and exposure. In this article, we'll explore why Inframe
                  School is the best choice for your child's future, especially if you're searching for the best
                  designing school in Rajasthan or guidance on what to do after 12th.`}
                </p>
                <p>
                  {`As your child completes their 12th grade, the question of "what's next?" becomes more important than
                  ever. The right educational path can significantly influence their future. If your child has an
                  interest in design, arts, and creativity, then Inframe School offers a unique opportunity for them to
                  develop both academically and professionally. If you're wondering what to do after 12th or looking for
                  the best designing school in Rajasthan, this article will highlight why Inframe School is the best
                  choice for your child's bright future.`}
                </p>
              </section>

              <section id="reason1" ref={(el) => { sectionRefs.current["reason1"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-blue-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      1. Industry-Driven Curriculum Designed for Future Creatives
                    </h2>
                    <p>
                      {`Inframe School offers a specialized curriculum aimed at nurturing future designers and artists.
                      The programs are meticulously designed to combine theoretical knowledge with hands-on practice,
                      enabling students to excel in their field of interest. Whether your child is inclined towards
                      graphic design, fashion design, or architecture, the curriculum is customized to support these
                      passions and more.`}
                    </p>
                    <p>
                      {`Inframe School's curriculum isn't just about academics—it's about preparing students for
                      real-world challenges. If you're looking for a course that bridges the gap between education and
                      industry for your child, Inframe School is one of the best design schools in Rajasthan.`}
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
                      {`"Your work is going to fill a large part of your life, and the only way to be truly satisfied is
                      to do what you believe is great work." – Steve Jobs`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="reason2" ref={(el) => { sectionRefs.current["reason2"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-blue-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">2. Top-Notch Infrastructure for Creativity to Thrive</h2>
                    <p>
                      {`When it comes to learning, the environment plays a crucial role. Inframe School prides itself on
                      offering world-class infrastructure that supports students' creative journeys. The school boasts
                      advanced design labs, art studios, and digital media centers where students can experiment,
                      explore, and enhance their creativity. These facilities are specially designed to foster
                      innovation and technical skill, allowing students to turn their ideas into reality.`}
                    </p>
                    <p>
                      {`For students considering their options after 12th, Inframe School provides an environment where
                      creativity thrives. Its facilities make it one of the best designing schools in Rajasthan.`}
                    </p>
                    <div className="bg-blue-100 p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">
                        {`Where Creativity Meets Technology: The Power of Inframe School's Facilities`}
                      </h4>
                      <ul className="list-disc pl-5 mt-2">
                        <li>State-of-the-art design studios with industry-standard equipment</li>
                        <li>Digital labs with the latest software and hardware</li>
                        <li>Collaborative spaces for group projects and brainstorming</li>
                        <li>Exhibition areas to showcase student work</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="reason3" ref={(el) => { sectionRefs.current["reason3"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-blue-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">3. Faculty with Practical Industry Expertise</h2>
                    <p>
                      {`One of the standout features of Inframe School is its team of highly experienced and qualified
                      faculty members. Unlike traditional schools, the faculty at Inframe School comprises professionals
                      with significant experience in the arts and design industries. This ensures that students receive
                      education based on current trends and industry needs, allowing them to stay relevant and ahead of
                      the curve.`}
                    </p>
                    <p>
                      {`If your child is looking to explore creative careers, Inframe School's expert faculty members
                      offer guidance, mentorship, and practical insights to help them succeed. It's this blend of
                      academic rigor and industry expertise that makes Inframe School an outstanding choice.`}
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
                      {`"The best way to predict the future is to create it." – Peter Drucker`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="reason4" ref={(el) => { sectionRefs.current["reason4"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-blue-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">4. Career-Oriented Opportunities and Placement Support</h2>
                    <p>
                      {`At Inframe School, education goes beyond the classroom. The school places a strong emphasis on
                      offering career-oriented experiences that help students transition from the academic world to
                      professional life seamlessly. Through internships, industry workshops, and career placement
                      programs, students gain valuable experience and exposure to the design industry.`}
                    </p>
                    <p>
                      {`If you're wondering about career options after 12th or how to gain industry experience, Inframe
                      School's strong ties with design firms and professionals offer the ideal platform to launch your
                      child's career. The school ensures that your child is career-ready by the time they graduate.`}
                    </p>
                    <div className="bg-blue-50p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">
                        {`Turning Passion into Profession: How Inframe School Prepares Students for Career Success`}
                      </h4>
                      <p className="mt-2">
                        {`The school's placement cell works tirelessly to connect students with opportunities that match
                        their skills and interests, ensuring a smooth transition from education to employment.`}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <section id="reason5" ref={(el) => { sectionRefs.current["reason5"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-blue-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">5. Fostering Holistic Growth Beyond Academics</h2>
                    <p>
                      {`At Inframe School, the focus is not only on academics but also on developing students' personal
                      growth and leadership skills. By encouraging participation in extracurricular activities,
                      workshops, and student-led projects, the school helps students build confidence, communication
                      skills, and teamwork. These attributes are equally important for professional success, especially
                      in the creative industries.`}
                    </p>
                    <p>
                      {`The school's comprehensive approach ensures that students not only excel in their academic field
                      but also develop the well-rounded personality needed to succeed in any career path.`}
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4">
                      {`"Success is the sum of small efforts, repeated day in and day out." – Robert Collier`}
                    </blockquote>
                  </CardContent>
                </Card>
              </section>

              <section id="reason6" ref={(el) => { sectionRefs.current["reason6"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-blue-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">6. Strong Alumni Network and Industry Recognition</h2>
                    <p>
                      {`Choosing Inframe School means joining a community of successful professionals in the design and
                      arts fields. The school has an impressive alumni network that continues to support and guide
                      current students, offering mentorship and valuable industry connections. Being part of this
                      network ensures that your child can access career opportunities even after they graduate.`}
                    </p>
                    <p>
                      {`Inframe School's industry recognition as one of the best designing schools in Rajasthan gives your
                      child a competitive edge, both during their studies and in their future career.`}
                    </p>
                    <div className="bg-blue-50p-4 rounded-md my-4">
                      <h4 className="font-bold text-lg">The Inframe Advantage: A Network That Opens Doors</h4>
                      <p className="mt-2">
                        {`Alumni regularly return to campus for guest lectures, workshops, and recruitment drives,
                        creating a continuous cycle of knowledge sharing and opportunity creation for current students.`}
                      </p>
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
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}

