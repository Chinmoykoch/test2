"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import ImageCarousel from "./ImageCarousel";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const HeroSection = () => {
  const slides = [
    {
      title: "LIFE@Inframe",
      description:
        "Inframe’s enthusiastic and colourful atmosphere strives to inspire future designers to make their dreams a reality, encouraging them to pursue a fulfilling career.",
    },
    {
      title: "CREATIVITY UNLEASHED",
      description:
        "Our community nurtures creativity and innovation, helping students bring their unique visions to life.",
    },
    {
      title: "DESIGN YOUR FUTURE",
      description:
        "Explore endless possibilities in design and craft a future that resonates with your passion.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically cycle through slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen flex items-center bg-black overflow-hidden">
      {/* Background Image with Carousel */}
      <div className="absolute inset-0">
        <ImageCarousel />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col lg:flex-row justify-center md:justify-start px-6 md:px-12 lg:px-24 xl:px-32 text-white h-full w-full">
        {/* Left Text Section */}
        <div
          className={`flex flex-col justify-center items-start text-left space-y-4 lg:space-y-6 max-w-lg lg:max-w-xl xl:max-w-2xl ${poppins.className}`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 tracking-tight leading-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-gray-300 mt-4">
                {slides[currentSlide].description}
              </p>
              <Button className="mt-6 border font-bold py-6 bg-white text-black hover:bg-white text-sm sm:text-base px-10  rounded-full">
                Read More
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
