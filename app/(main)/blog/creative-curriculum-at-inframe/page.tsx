"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Download, Calendar, Clock, Users, Award } from "lucide-react"

export default function CreativeCurriculum() {
  const [activeTab, setActiveTab] = useState("overview")

interface TabChangeHandler {
    (tab: string): void;
}

const handleTabChange: TabChangeHandler = (tab) => {
    setActiveTab(tab);
}

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-black">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Inframe School students working in a design studio"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <div className="bg-red-500 text-white px-4 py-1 rounded-full mb-4 text-sm font-medium">
            Curriculum
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl">
            The Creative Curriculum at Inframe School
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Discover our innovative approach to design education that combines theory, practice, and industry exposure.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/blog">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Button>
          </Link>
          <div className="text-sm text-gray-500">Updated Feb 10, 2025 · 5 min read</div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Calendar className="h-10 w-10 text-red-500" />
              <div>
                <div className="text-sm text-gray-500">Program Duration</div>
                <div className="font-bold">4 Years</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Clock className="h-10 w-10 text-red-500" />
              <div>
                <div className="text-sm text-gray-500">Credit Hours</div>
                <div className="font-bold">120 Credits</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Users className="h-10 w-10 text-red-500" />
              <div>
                <div className="text-sm text-gray-500">Class Size</div>
                <div className="font-bold">Max 25 Students</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <Award className="h-10 w-10 text-red-500" />
              <div>
                <div className="text-sm text-gray-500">Job Placement</div>
                <div className="font-bold">92% Success Rate</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="border-b mb-8">
          <div className="flex space-x-8">
            <button
              className={`py-2 px-1 -mb-px ${
                activeTab === "overview"
                  ? "border-b-2 border-red-500 font-medium text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabChange("overview")}
            >
              Overview
            </button>
            <button
              className={`py-2 px-1 -mb-px ${
                activeTab === "tracks"
                  ? "border-b-2 border-red-500 font-medium text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabChange("tracks")}
            >
              Specialized Tracks
            </button>
            <button
              className={`py-2 px-1 -mb-px ${
                activeTab === "methods"
                  ? "border-b-2 border-red-500 font-medium text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabChange("methods")}
            >
              Teaching Methods
            </button>
            <button
              className={`py-2 px-1 -mb-px ${
                activeTab === "outcomes"
                  ? "border-b-2 border-red-500 font-medium text-red-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabChange("outcomes")}
            >
              Outcomes
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="prose prose-lg max-w-none">
          {activeTab === "overview" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">A Three-Pillar Approach</h2>
              <p>
                At Inframe School, our curriculum represents a groundbreaking approach to design education that seamlessly 
                integrates theoretical foundations with hands-on practice and valuable industry exposure.
              </p>
              
              <p>
                Our educational philosophy rests on three essential pillars that form the backbone of every program we offer:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <Card className="border-t-4 border-t-red-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Theoretical Excellence</h3>
                    <p className="text-gray-700">
                      Students build a strong conceptual understanding of design principles, history, and critical thinking. 
                      Our courses explore color theory, composition, typography, and the psychology of design to provide a 
                      solid intellectual foundation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-red-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Practical Mastery</h3>
                    <p className="text-gray-700">
                      We believe in learning by doing. Our studio-based classes allow students to apply theories to real-world 
                      projects, with 70% of course time dedicated to hands-on work. Students gain proficiency in industry-standard 
                      tools and techniques through intensive workshops and project-based assignments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-t-4 border-t-red-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Industry Integration</h3>
                    <p className="text-gray-700">
                      Education extends beyond our campus. Through internships, guest lectures from leading professionals, 
                      industry partnerships, and client-based projects, students develop professional networks and gain insights 
                      into current market demands and emerging trends.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Curriculum Structure</h3>
              <p>
                The Inframe School curriculum is carefully structured to progressively build skills and knowledge:
              </p>

              <div className="my-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Year 1: Foundation</h4>
                <p>
                  Core principles of design, visual language, digital tools mastery, and creative thinking. All students 
                  share a common foundation regardless of their intended specialization.
                </p>
              </div>

              <div className="my-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Year 2: Exploration</h4>
                <p>
                  Introduction to specialized tracks, intermediate techniques, collaborative projects, and design research 
                  methods. Students begin to explore their chosen discipline while continuing to build broad design skills.
                </p>
              </div>

              <div className="my-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Year 3: Specialization</h4>
                <p>
                  Deep dive into chosen track, advanced techniques, industry internships, and specialized electives. 
                  Students develop expertise in their field through immersive, focused coursework.
                </p>
              </div>

              <div className="my-6 bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3">Year 4: Professional Development</h4>
                <p>
                  Capstone projects, portfolio development, industry placement, and entrepreneurship. The final year 
                  focuses on preparing students for successful entry into the creative industry.
                </p>
              </div>
            </div>
          )}

          {activeTab === "tracks" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Specialized Tracks</h2>
              <p>
                Our curriculum offers specialized tracks that allow students to develop deep expertise in their chosen 
                field while maintaining a strong foundation in design fundamentals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">UI/UX Design</h3>
                    <p className="text-gray-700 mb-4">
                      Focus on creating intuitive, user-centered digital experiences across web, mobile, and emerging platforms.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>User Research & Testing</li>
                      <li>Interface Design Systems</li>
                      <li>Interaction Design</li>
                      <li>Prototyping & Usability</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Graphic Design</h3>
                    <p className="text-gray-700 mb-4">
                      Master visual communication through typography, imagery, and composition for print and digital media.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Brand Identity Systems</li>
                      <li>Typography & Layout</li>
                      <li>Print Production</li>
                      <li>Editorial Design</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Motion Graphics</h3>
                    <p className="text-gray-700 mb-4">
                      Bring design to life through animation, video, and interactive motion for entertainment and advertising.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>2D & 3D Animation</li>
                      <li>Visual Effects</li>
                      <li>Motion Theory</li>
                      <li>Narrative Sequencing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Visual Communication</h3>
                    <p className="text-gray-700 mb-4">
                      Develop a comprehensive approach to visual storytelling across multiple platforms and media.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Information Design</li>
                      <li>Storytelling & Narrative</li>
                      <li>Cross-media Communication</li>
                      <li>Visual Systems</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Fashion Design</h3>
                    <p className="text-gray-700 mb-4">
                      Create innovative apparel with emphasis on sustainability, construction, and contemporary aesthetics.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Textile Innovation</li>
                      <li>Garment Construction</li>
                      <li>Sustainable Fashion</li>
                      <li>Collection Development</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Advertising Design</h3>
                    <p className="text-gray-700 mb-4">
                      Blend strategy and creativity to develop compelling campaigns across traditional and digital channels.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li>Campaign Strategy</li>
                      <li>Copywriting</li>
                      <li>Art Direction</li>
                      <li>Social Media Marketing</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "methods" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Innovative Teaching Methods</h2>
              <p>
                At Inframe School, we employ cutting-edge teaching methodologies that prepare students for the 
                ever-evolving creative industry. Our approach goes beyond traditional education to foster innovation, 
                collaboration, and real-world problem-solving skills.
              </p>

              <div className="my-8">
                <h3 className="text-2xl font-bold mb-4">Project-Based Learning</h3>
                <div className="flex flex-col md:flex-row gap-6 mb-8">
                  <div className="md:w-1/2">
                    <p>
                      Rather than theoretical exercises, students work on comprehensive projects that simulate real-world 
                      challenges. Each project includes:
                    </p>
                    <ul className="list-disc pl-5 mt-4">
                      <li>Client briefs (real or simulated)</li>
                      <li>Research and discovery phases</li>
                      <li>Iterative development</li>
                      <li>Professional presentations</li>
                      <li>Peer and instructor critique</li>
                    </ul>
                  </div>
                  <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Spotlight Project</h4>
                    <p>
                      {`"Brand Evolution" – Third-year students work with local businesses to refresh their visual identity. 
                      Students research, strategize, design, and present to real clients, often seeing their work implemented 
                      in the market.`}
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">Cross-Disciplinary Collaboration</h3>
                <p>
                  Just as in the professional world, our students learn to collaborate across specialties:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2">Collaborative Studios</h4>
                      <p className="text-sm">
                        Dedicated courses where students from different tracks work together on integrated projects that require diverse skill sets.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2">Industry Simulation</h4>
                      <p className="text-sm">
                        Studios organized like design agencies with specialized roles and team-based workflows.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-50">
                    <CardContent className="p-4">
                      <h4 className="font-bold mb-2">Design Sprints</h4>
                      <p className="text-sm">
                        Intensive week-long challenges where diverse teams tackle complex problems with tight deadlines.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-2xl font-bold mb-4">Technology-Enhanced Learning</h3>
                <p>
                  We leverage cutting-edge technology to enhance the learning experience:
                </p>
                <ul className="list-disc pl-5 my-4">
                  <li><span className="font-medium">Virtual Reality Design Labs</span> – Experiment with spatial design and immersive experiences</li>
                  <li><span className="font-medium">Digital Collaboration Platforms</span> – Mirror industry tools and workflows</li>
                  <li><span className="font-medium">AI-Assisted Creativity Tools</span> – Learn to work with emerging technologies</li>
                  <li><span className="font-medium">Interactive Learning Resources</span> – Self-paced tutorials and skill-building modules</li>
                </ul>

                <h3 className="text-2xl font-bold mt-8 mb-4">Critique Culture</h3>
                <p>
                  We foster a strong culture of constructive feedback:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Peer Reviews</h4>
                    <p>
                      {`Structured feedback sessions where students evaluate each other's work, developing critical analysis skills and learning to articulate design decisions.`}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold mb-2">Industry Critiques</h4>
                    <p>
                      Regular sessions where practicing professionals review student work, providing real-world perspective and industry standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "outcomes" && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Industry-Recognized Results</h2>
              <p>
                {`The effectiveness of our curriculum is evident in our graduates' success. With a 92% job placement rate within six months of graduation and alumni working at leading design firms worldwide, the Inframe approach proves that thoughtful curriculum design creates exceptional designers ready to thrive in the creative industries.`}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <Card className="bg-red-50 border border-red-100">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">92%</div>
                    <p className="text-gray-700">Job Placement Rate within 6 Months</p>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 border border-red-100">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">87%</div>
                    <p className="text-gray-700">Graduate with Portfolio-Ready Work</p>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 border border-red-100">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">26+</div>
                    <p className="text-gray-700">Countries with Inframe Alumni</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Where Our Graduates Work</h3>
              <p>
                Inframe alumni can be found at leading companies and agencies worldwide:
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">TechSolutions Inc.</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">CreativeMinds Agency</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">GlobalMedia Network</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">Animation Studios</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">StyleFusion</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">DesignWorks Co.</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">Digital Frontier</span>
                </div>
                <div className="p-4 bg-gray-100 rounded-lg flex items-center justify-center h-24">
                  <span className="font-bold text-gray-700">+ many more</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Industry Recognition</h3>
              <p>
                Our curriculum has been recognized for its excellence:
              </p>
              <ul className="list-disc pl-5 my-4">
                <li><span className="font-medium">Top 10 Design Schools</span> – International Design Education Council (2024)</li>
                <li><span className="font-medium">Excellence in Industry Integration</span> – Creative Education Awards (2023)</li>
                <li><span className="font-medium">Most Innovative Curriculum</span> – Design Futures Foundation (2022)</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold mb-4">Alumni Testimonial</h3>
                <blockquote className="border-l-4 border-red-400 pl-4 italic">
                  {`"What sets Inframe apart is how the curriculum seamlessly bridges theory and practice. I graduated not just with technical skills, but with the strategic thinking and professional mindset that helped me advance quickly in my career. Four years at Inframe prepared me better than colleagues who spent years in the industry."`}
                </blockquote>
                <div className="mt-4 text-right">
                  <p className="font-medium">— Rahul Sharma, UI/UX Design Lead at TechSolutions Inc.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Download Syllabus */}
        <div className="bg-gray-50 p-8 rounded-lg my-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Want to learn more?</h3>
              <p className="text-gray-600 max-w-2xl">
                Download our detailed curriculum guide including course descriptions, learning outcomes, and program structure.
              </p>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Curriculum Guide
            </Button>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-black text-white p-8 rounded-lg my-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Creative Journey?</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Join the next generation of design professionals at Inframe School. Applications for the Fall 2025 semester are now open.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-500 hover:bg-red-600 text-white">
                Apply Now
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Schedule a Campus Tour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}