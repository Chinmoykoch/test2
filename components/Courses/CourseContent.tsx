"use client";

import { Poppins } from "next/font/google";
import HighlightsSection from "./HighlightsSection";
import CareerProspects from "./CareerProspects";
import CurriculumSection from "./CurriculumSection";
import SoftwareLogos from "./SoftwareLogos";
import TestimonialSlider from "./TestimonialSlider";
import FAQSection from "./FAQSection";
import IndustryPartners from "./Partners";
import AdmissionProcess from "./AdmissionProcess";
import WhatYouWillLearn from "./WhatYouWillLearn";
import DreamsSection from "../DreamSection";
import Image from "next/image";
import { Button } from "../ui/button";
import ApplyNowForm from "../ApplyNowForm";
import { useState } from "react";
import { CourseSoftware, CourseFeature } from "@/utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface CurriculumType {
  year?: string;
  semester?: string;
  subjects?: string[];
  description?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface SoftwareType {
  name?: string;
  logoUrl?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface WhatLearn {
  skill?: string;
  description?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface VideoType {
  url?: string;
}

interface CourseContentProps {
  title: string;
  duration: string;
  description: string;
  content: string;
  heroImage?: string;
  ctaTitle?: string;
  ctaDescription?: string;
  curriculum?: unknown; // Changed from CourseCurriculum[] to any to handle transformed object
  software?: CourseSoftware[];
  whatYouWillLearn?: CourseFeature[];
  videos?: { url: string }[];
}

// Add CurriculumData and Curriculum interfaces for type safety
interface CurriculumData {
  image: string;
  imageAlt: string;
  [key: string]: unknown;
}
interface Curriculum {
  [year: string]: CurriculumData;
}

const CourseContent = ({
  title,
  duration,
  description,
  content,
  heroImage,
  ctaTitle,
  ctaDescription,
  curriculum,
  software,
  whatYouWillLearn,
  videos = [],
}: CourseContentProps) => {
  const fallbackHeroImage =
    "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1600&q=80";

  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  // Use curriculum directly if it's already transformed, otherwise transform it
  const curriculumObj = curriculum && typeof curriculum === 'object' && !Array.isArray(curriculum)
    ? curriculum // Already transformed
    : curriculum && Array.isArray(curriculum)
    ? curriculum.reduce((acc, cur) => {
        if (cur.year) {
          acc[cur.year] = {
            image: cur.imageUrl || '',
            imageAlt: `${title} ${cur.year}`,
            [`Semester ${cur.semester || '1'}`]: cur.subjects || [],
            ...cur,
          };
        }
        return acc;
      }, {} as Curriculum)
    : undefined; // No curriculum data

  // Transform software for SoftwareLogos
  const softwareArr = software?.map((s) => ({
    name: s.name,
    src: s.logoUrl,
  })) || [];

  // Transform whatYouWillLearn for WhatYouWillLearn
  const whatYouWillLearnArr = whatYouWillLearn?.map((f) => ({
    skill: f.title,
    description: f.description,
  })) || [];

  return (
    <div className="bg-white text-black">
      <div className="relative h-[95vh] overflow-hidden" id="overview">
        <Image
          src={heroImage || fallbackHeroImage}
          alt={`${title} Hero Image`}
          layout="fill"
          objectFit="cover"
          className="opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-6xl mx-auto px-4">
            <div className="bg-yellow-400 text-black mb-6 px-4 py-2 mt-14 text-lg inline-block rounded-full">
              {duration}
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              {title}
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className={`text-3xl font-bold mb-6 ${poppins.className}`}>
              Course Overview
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">{content}</p>
          </div>
          <div className="sm:w-[413px] p-14 sm:h-[300px] rounded-lg border bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">
            <h3
              className={`text-2xl ${poppins.className} text-center py-5 font-bold text-black`}
            >
              {ctaTitle || `Step into the World of ${title.split(" in ")[1] || "Design"}`}
            </h3>
            <p className="text-center text-black mb-4">
              {ctaDescription || "Start your journey today"}
            </p>
            <div className="flex items-center gap-6">
            <Button onClick={handleApplyClick} className="bg-white text-black hover:bg-yellow-500 px-4 py-2">
              Apply Now
            </Button>

              <ApplyNowForm
                  isFormOpen={isFormOpen}
                  setIsFormOpen={setIsFormOpen}
                  isScrolled={false}
                />
              <Button
                onClick={() =>
                  document
                    .getElementById("curriculum")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:bg-white hover:text-black transition-all duration-200 font-bold"
              >
                Curriculum
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div id="admission">
          <AdmissionProcess />
          <DreamsSection />
        </div>

        <div id="highlights">
          <HighlightsSection />
        </div>

        <div id="career">
          <CareerProspects />
        </div>

        {curriculumObj && (
          <div id="curriculum">
            <CurriculumSection curriculum={curriculumObj} />
          </div>
        )}

        {softwareArr.length === 0 && whatYouWillLearnArr.length > 0 ? (
          <WhatYouWillLearn whatYouWillLearn={whatYouWillLearnArr} />
        ) : (
          <SoftwareLogos software={softwareArr} />
        )}

        <div id="partners">
          <IndustryPartners />
        </div>

        {videos.length > 0 && (
          <div id="testimonials">
            <TestimonialSlider videos={videos} />
          </div>
        )}

        <div id="faq">
          <FAQSection />
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
