"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, List, X, ChevronRight } from "lucide-react"
import { cn } from "../../../../lib/utils"
import { Badge } from "@/components/ui/badge"

interface IndexItem {
  id: string
  title: string
  level: number
}

interface AlumniStory {
  id: string
  name: string
  graduation: string
  field: string
  company: string
  position: string
  story: string
  achievement: string
  advice: string
  image: string
}

export default function AlumniSuccessStories() {
  const [activeSection, setActiveSection] = useState<string>("")
  const [showIndex, setShowIndex] = useState(false)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  const indexItems: IndexItem[] = [
    { id: "intro", title: "Introduction", level: 1 },
    { id: "rahulSharma", title: "Rahul Sharma - UI/UX Design Lead", level: 1 },
    { id: "priyaVerma", title: "Priya Verma - Creative Director", level: 1 },
    { id: "vikasGupta", title: "Vikas Gupta - Graphic Designer", level: 1 },
    { id: "ananyaSingh", title: "Ananya Singh - Art Director", level: 1 },
    { id: "rohitKumar", title: "Rohit Kumar - Motion Designer", level: 1 },
    { id: "nehaPatil", title: "Neha Patil - Fashion Designer", level: 1 },
    { id: "conclusion", title: "Join Our Alumni Network", level: 1 },
  ]

  const alumniStories: AlumniStory[] = [
    {
      id: "rahulSharma",
      name: "Rahul Sharma",
      graduation: "2020",
      field: "UI/UX Design",
      company: "TechSolutions Inc.",
      position: "UI/UX Design Lead",
      story: "After graduating from Inframe School's UI/UX program, Rahul joined a startup where he quickly made a name for himself by redesigning their core product interface, resulting in a 40% increase in user engagement. His innovative approach to user-centered design caught the attention of TechSolutions Inc., where he now leads a team of designers working on cutting-edge products.",
      achievement: "Led the redesign of a banking app that won the 'Best Financial App Design' award at the National Design Summit 2023.",
      advice: "Focus on solving real user problems rather than just creating something that looks good. The best designs are those that users don't even notice because they work so intuitively.",
      image: "/api/placeholder/400/320"
    },
    {
      id: "priyaVerma",
      name: "Priya Verma",
      graduation: "2018",
      field: "Advertising Design",
      company: "CreativeMinds Agency",
      position: "Creative Director",
      story: "Priya's journey began with an internship at a local advertising firm while still studying at Inframe. Her exceptional portfolio, developed during her coursework, impressed industry veterans and led to her rapid rise through the ranks. Within five years of graduation, she was heading creative campaigns for national brands.",
      achievement: "Her campaign for environmental awareness won three Gold Awards at the Regional Advertising Festival and was featured in Design Monthly magazine.",
      advice: "Build a diverse portfolio that shows range. In creative fields, employers want to see that you can adapt to different briefs and client needs while maintaining your unique perspective.",
      image: "/api/placeholder/400/320"
    },
    {
      id: "vikasGupta",
      name: "Vikas Gupta",
      graduation: "2021",
      field: "Graphic Design",
      company: "Freelance",
      position: "Graphic Designer & Illustrator",
      story: "Unlike many of his peers who sought corporate positions, Vikas chose to establish himself as a freelancer right after graduation. Using the entrepreneurial skills he developed at Inframe, he built a client base that now includes international brands seeking his distinctive illustration style.",
      achievement: "Created book covers for bestselling authors and developed a recognizable style that has attracted over 200,000 followers on social media.",
      advice: "Don't be afraid to specialize. Finding your niche doesn't limit you—it helps clients understand exactly what you excel at and makes marketing yourself much easier.",
      image: "/api/placeholder/400/320"
    },
    {
      id: "ananyaSingh",
      name: "Ananya Singh",
      graduation: "2019",
      field: "Visual Communication",
      company: "GlobalMedia Network",
      position: "Art Director",
      story: "Ananya's senior project at Inframe School caught the attention of a visiting professional from GlobalMedia Network. Her innovative approach to visual storytelling earned her a direct job offer upon graduation. Three years later, she now directs the visual identity for the network's flagship programs.",
      achievement: "Received the Young Achiever Award from the Design Council of India for her work on an international news program's visual rebrand.",
      advice: "Network actively while you're still in school. The connections you make during your education can open doors you didn't even know existed.",
      image: "/api/placeholder/400/320"
    },
    {
      id: "rohitKumar",
      name: "Rohit Kumar",
      graduation: "2022",
      field: "Motion Graphics",
      company: "Animation Studios",
      position: "Senior Motion Designer",
      story: "As the most recent graduate in our spotlight, Rohit demonstrates how Inframe's industry connections can fast-track careers. His motion graphics showreel, created in his final semester, went viral in industry circles and led to multiple job offers. He chose Animation Studios for their innovative approach and has already been promoted twice.",
      achievement: "His work on a music video for an international artist garnered over 50 million views and praise from industry leaders for its technical innovation.",
      advice: "Push beyond the software tutorials and find your own visual voice. Technical skills get you in the door, but a unique creative perspective keeps you there and helps you advance.",
      image: "/api/placeholder/400/320"
    },
    {
      id: "nehaPatil",
      name: "Neha Patil",
      graduation: "2017",
      field: "Fashion Design",
      company: "StyleFusion",
      position: "Fashion Designer & Sustainability Advocate",
      story: "Neha combined her passion for fashion with environmental consciousness, a perspective she developed during Inframe's sustainability workshops. After graduation, she worked with several fashion houses before launching her own sustainable collection within StyleFusion, proving that ethical fashion can also be commercially viable.",
      achievement: "Her sustainable clothing line was featured at Fashion Week and has been worn by celebrities advocating for environmental causes.",
      advice: "Find the intersection of your passion and the world's needs. When your work serves a purpose beyond aesthetics, it becomes more fulfilling and often more successful.",
      image: "/api/placeholder/400/320"
    }
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
          alt="Inframe School alumni working in design studios"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <Badge className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded-full mb-4 text-sm font-medium">
            Alumni
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            Success Stories from Inframe School Alumni
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Read inspiring stories of our graduates who are making waves in the design and creative industries.
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
          <div className="text-sm text-gray-500">Feb 15, 2025 · 7 min read</div>
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
                          "text-left w-full py-1 px-2 rounded hover:bg-purple-100 transition-colors",
                          activeSection === item.id ? "bg-purple-200 font-medium" : "",
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
                  At Inframe School, we take immense pride in the achievements of our alumni who have gone on to make 
                  significant contributions to the design and creative industries. Their journeys from classroom to 
                  career showcase the real-world impact of our education and the potential that lies ahead for current 
                  and prospective students.
                </p>
                <p>
                  The success stories featured here represent just a small sample of our accomplished graduates. Each 
                  narrative highlights not only their professional achievements but also the unique ways in which 
                  their education at Inframe School prepared them for the challenges and opportunities of the creative 
                  industry.
                </p>
                <p>
                  {`From leading design teams at prestigious companies to starting their own creative ventures, our alumni 
                  demonstrate the versatility and value of an Inframe education in today's competitive landscape.`}
                </p>
              </section>

              {alumniStories.map((alumnus) => (
                <section 
                  id={alumnus.id} 
                  ref={(el) => { sectionRefs.current[alumnus.id] = el }} 
                  className="mb-12" 
                  key={alumnus.id}
                >
                  <Card className="mb-6 border-l-4 border-l-purple-400">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="md:w-1/3">
                          <Image
                            src={alumnus.image}
                            alt={`${alumnus.name}, ${alumnus.position}`}
                            width={400}
                            height={320}
                            className="rounded-md object-cover w-full h-64"
                          />
                          <div className="mt-4 bg-gray-50 p-4 rounded-md">
                            <h4 className="font-bold text-lg">{alumnus.name}</h4>
                            <p className="text-gray-600">Class of {alumnus.graduation}</p>
                            <p className="text-gray-600">{alumnus.position}</p>
                            <p className="text-gray-600">{alumnus.company}</p>
                          </div>
                        </div>
                        <div className="md:w-2/3">
                          <h2 className="text-2xl font-bold mb-4">{alumnus.name} - {alumnus.position}</h2>
                          <h3 className="text-lg font-semibold text-gray-700 mb-3">Career Journey</h3>
                          <p className="mb-4">{alumnus.story}</p>
                          
                          <h3 className="text-lg font-semibold text-gray-700 mb-3">Notable Achievement</h3>
                          <div className="bg-purple-50 p-4 rounded-md my-4">
                            <p>{alumnus.achievement}</p>
                          </div>
                          
                          <h3 className="text-lg font-semibold text-gray-700 mb-3">Advice for Current Students</h3>
                          <blockquote className="border-l-4 border-purple-400 pl-4 italic my-4">
                            {`"${alumnus.advice}"`}
                          </blockquote>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              ))}

              <section id="conclusion" ref={(el) => { sectionRefs.current["conclusion"] = el }} className="mb-12">
                <Card className="mb-6 border-l-4 border-l-purple-400">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Join Our Alumni Network</h2>
                    <p>
                      {`These success stories illustrate the possibilities that await Inframe School graduates. Our 
                      alumni network continues to grow, creating a powerful community of creative professionals who 
                      support each other and contribute to the school's legacy of excellence.`}
                    </p>
                    <p>
                      Current students can connect with our alumni through mentorship programs, guest lectures, and 
                      networking events throughout the academic year. For prospective students, these stories offer 
                      a glimpse into the potential outcomes of choosing Inframe School for your creative education.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-md my-6 flex flex-col items-center text-center">
                      <h4 className="font-bold text-lg mb-2">Ready to Write Your Own Success Story?</h4>
                      <p className="mb-4">
                        Apply now to join the next generation of creative professionals at Inframe School.
                      </p>
                      <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                        Apply for Admission
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </section>

              <div className="mt-8 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share these success stories</h3>
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
                  <span className="text-sm text-blue-500">#InframeAlumni</span>
                  <span className="text-sm text-blue-500">#DesignCareers</span>
                  <span className="text-sm text-blue-500">#CreativeSuccess</span>
                  <span className="text-sm text-blue-500">#DesignEducation</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t">
                <Link href="/alumni-stories">
                  <Button className="w-full bg-black text-white hover:bg-gray-800 flex items-center justify-center gap-2">
                    Read More Alumni Stories <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}