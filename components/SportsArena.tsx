"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSportsFacilities, useLifeAtInframeSections, SportsFacility } from "@/utils/api";

const SportsArena = () => {
  const { facilities, loading, error } = useSportsFacilities();
  const { sections, loading: sectionsLoading, error: sectionsError } = useLifeAtInframeSections();

  // Get the sports section from backend
  const sportsSection = React.useMemo(() =>
    sections.find((section) => section.sectionType === "sports"),
    [sections]
  );

  // Fallback images if API data is not available
  const fallbackImages = [
    {
      src: "/sports day/IMG_8860.jpg",
      alt: "Snooker Room",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8865.jpg",
      alt: "Indoor Gym",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8829.jpg",
      alt: "Cricket Stadium",
      className: "h-[32rem] md:row-span-2",
    },
    {
      src: "/sports day/IMG_8851.jpg",
      alt: "Badminton Courts",
      className: "h-64 md:col-span-2",
    },
    {
      src: "/sports day/IMG_8777.jpg",
      alt: "Football Ground",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8871.jpg",
      alt: "Fitness Center",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8854.jpg",
      alt: "Sports Training",
      className: "h-64",
    },
  ];

  // Use API data if available, otherwise use fallback
  const displayImages = facilities.length > 0 
    ? facilities.map((facility: SportsFacility, index: number) => ({
        src: facility.image,
        alt: facility.name,
        className: index === 2 ? "h-[32rem] md:row-span-2" : index === 3 ? "h-64 md:col-span-2" : "h-64",
      }))
    : fallbackImages;

  // Loading state
  if (loading || sectionsLoading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || sectionsError) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600">{error || sectionsError}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {sportsSection?.title || "Sports Arena"}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            {sportsSection?.description ||
              `Whilst conquering new levels in our academics, we find it essential
              to strike a balance with sports too, for it is true that a fit mind
              and a fit body go together. The International Sports Arena – The League
              has been established with an Olympic vision to rouse the champion in
              students, covering a wide array of sporting facilities.`}
          </p>
        </div>
        {sportsSection?.content ? (
          <a
            href={sportsSection.content}
            className="text-red-500 font-semibold hover:underline mt-4 md:mt-0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More &gt;
          </a>
        ) : (
          <a
            href="#"
            className="text-red-500 font-semibold hover:underline mt-4 md:mt-0"
          >
            Read More &gt;
          </a>
        )}
      </div>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {displayImages.map((image, index) => (
          <div key={index} className={`relative ${image.className}`}>
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 3}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SportsArena;
