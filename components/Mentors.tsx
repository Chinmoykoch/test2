"use client";
import { Poppins } from "next/font/google";
import React from "react";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface Mentor {
  name: string;
  title: string;
  expertise: string[];
  description: string;
  image: string;
}

const MentorsPage = () => {
  const mentors: Mentor[] = [
    {
      name: "Sarah Chen",
      title: "SENIOR UX RESEARCHER",
      expertise: ["User Experience", "Product Strategy", "Design Thinking"],
      description:
        "Sarah Chen brings over 15 years of expertise in user-centered design practices. With a background in cognitive psychology and human-computer interaction, she has led research initiatives at major tech companies including Google and Microsoft. Sarah specializes in transforming complex user data into actionable design insights, helping students bridge the gap between theoretical concepts and practical application.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop",
    },
    {
      name: "Michael Rodriguez",
      title: "CREATIVE DIRECTOR",
      expertise: ["Brand Identity", "Visual Design", "Art Direction"],
      description:
        "Michael Rodriguez has spent two decades shaping visual identities for Fortune 500 companies and cultural institutions alike. After serving as lead designer at Pentagram, he founded his own studio focusing on sustainable design practices. Michael's mentorship emphasizes the importance of conceptual thinking and craftsmanship in creating impactful visual communications that stand the test of time.",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop",
    },
    {
      name: "Aisha Johnson",
      title: "MOTION DESIGN SPECIALIST",
      expertise: ["Animation", "Interaction Design", "Visual Storytelling"],
      description:
        "Aisha Johnson is an award-winning motion designer whose work spans film, interactive media, and digital platforms. Having contributed to projects for Netflix, Apple, and Pixar, she brings industry-standard techniques and creative approaches to her mentorship. Aisha focuses on helping students develop their unique visual voice while mastering technical skills in animation and interactive storytelling.",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&h=500&fit=crop",
    },
    {
      name: "David Park",
      title: "FRONT-END DEVELOPMENT LEAD",
      expertise: ["Responsive Design", "Web Animation", "Design Systems"],
      description:
        "David Park bridges the worlds of design and development with his expertise in creating seamless digital experiences. Formerly a senior developer at AirbnB and Spotify, he specializes in translating complex design concepts into elegant, efficient code. David's mentorship focuses on technical implementation while maintaining design integrity, helping students understand the full product development lifecycle.",
      image:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=500&h=500&fit=crop",
    },
    {
      name: "Elena Martinez",
      title: "SERVICE DESIGN STRATEGIST",
      expertise: ["Design Research", "Systems Thinking", "Strategic Innovation"],
      description:
        "Elena Martinez brings a holistic approach to design challenges through her background in service design and strategic innovation. Having worked with organizations ranging from healthcare providers to government agencies, she specializes in designing complex service ecosystems. Elena helps students develop critical thinking skills necessary for addressing multifaceted problems in today's interconnected world.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&h=500&fit=crop",
    },
    {
      name: "Thomas Williams",
      title: "AR/VR EXPERIENCE DESIGNER",
      expertise: ["Immersive Environments", "Spatial Computing", "3D Modeling"],
      description:
        "Thomas Williams is at the forefront of immersive technology design, having pioneered AR/VR experiences for education, healthcare, and entertainment. With patents in spatial interaction design and background at Magic Leap, he brings cutting-edge knowledge to emerging designers. Thomas mentors students in creating meaningful interactions in three-dimensional spaces, preparing them for the future of digital experience design.",
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&h=500&fit=crop",
    },
  ];

  return (
    <div className={`w-full min-h-screen bg-white ${poppins.className}`}>
      {/* Header Section with Modern Geometric Elements */}
      <div className="relative text-black py-24">
        <div className="absolute inset-0 bg-yellow-400" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px]" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            
            <h1 className="text-6xl font-bold mb-6 mt-10 leading-tight">Our Mentors</h1>
            <div className="w-24 h-1 bg-black mb-8"></div>
            <p className="text-xl text-black max-w-2xl">
              Learn directly from industry professionals who bring real-world experience
              and cutting-edge insights to guide your creative journey.
            </p>
          </div>
        </div>
      </div>

      {/* Curved Divider */}
      <div className="relative h-16">
        <svg className="absolute bottom-0 w-full h-16 fill-white" preserveAspectRatio="none" viewBox="0 0 1440 54">
          <path d="M0 0L1440 0C1440 0 1440 54 720 54C0 54 0 0 0 0Z"></path>
        </svg>
      </div>

      {/* Mentors Section */}
      <div className="container mx-auto px-6 py-16 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-yellow-400 shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col h-full"
            >
              {/* Hover accent */}
              <div className="absolute inset-0 border-2 border-yellow-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100"></div>
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-xl font-bold text-white">{mentor.name}</h2>
                  <h3 className="text-sm font-medium text-yellow-300">{mentor.title}</h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.expertise.map((skill, i) => (
                    <span 
                      key={i}
                      className="text-xs font-medium bg-yellow-100 text-black py-1 px-2 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {mentor.description}
                </p>
                
                {/* Connect button */}
                <button className="mt-6 text-sm font-medium text-black hover:text-yellow-600 flex items-center transition-colors duration-200">
                  Schedule a Session
                  <FaCalendarAlt className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Call to Action Section */}
      <div className="bg-black text-white py-16 mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="relative">
            {/* Yellow accent shapes */}
            <div className="absolute top-0 left-1/4 w-20 h-20 bg-yellow-400 rounded-full mix-blend-screen opacity-20"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-400 rounded-full mix-blend-screen opacity-20"></div>
            
            <h2 className="text-3xl font-bold mb-4 relative z-10">Ready to elevate your skills?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 relative z-10">
              Our mentors are available for one-on-one sessions, workshops, and portfolio reviews.
              Take the next step in your creative journey with personalized guidance.
            </p>
            <button className="bg-yellow-400 text-black  hover:bg-yellow-500 font-medium py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl relative z-10">
              Apply for Mentorship Program
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsPage;