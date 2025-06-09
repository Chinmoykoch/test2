"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ModernGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      url: "/campus-27.JPG", // Updated path
      alt: "Pow Wow celebration with red balloons",
      size: "large",
      width: 1920,
      height: 1080,
    },
    {
      url: "/fashion-2.JPG", // Updated path
      alt: "Convocation ceremony",
      size: "medium",
      width: 1080,
      height: 1320,
    },
    {
      url: "/fashion-1.JPG", // Updated path
      alt: "Students in knitting lab",
      size: "medium",
      width: 1080,
      height: 810,
    },
    {
      url: "/images/gallery/1721738128651.jpg",
      alt: "Ethnic Day celebration",
      size: "medium",
      width: 1080,
      height: 810,
    },
    {
      url: "/campus-32.JPG", // Updated path
      alt: "Ethnic Day celebration",
      size: "medium",
      width: 1080,
      height: 810,
    },
    {
      url: "/images/gallery/1721737896096.jpg",
      alt: "Ethnic Day celebration",
      size: "medium",
      width: 1920,
      height: 1080,
    },
    {
      url: "/campus-29.jpg", // Removed "- Copy"
      alt: "Ethnic Day celebration",
      size: "medium",
      width: 1080,
      height: 1320,
    },
  ];

  const navigateGallery = (direction: number) => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex + direction;
      if (newIndex >= 0 && newIndex < images.length) {
        setSelectedIndex(newIndex);
      }
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Large image - Pow Wow */}
        <div className="col-span-1 lg:col-span-2 aspect-[16/9] relative group">
          <Image
            src={images[0].url}
            alt={images[0].alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
            className="object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(0)}
            priority // Load this image immediately
          />
        </div>

        {/* Medium image - Convocation */}
        <div className="aspect-[9/11] relative group">
          <Image
            src={images[1].url}
            alt={images[1].alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(1)}
          />
        </div>

        {/* Medium image - Knitting Lab */}
        <div className="aspect-[4/3] relative group">
          <Image
            src={images[2].url}
            alt={images[2].alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-lg cursor-pointer"
            onClick={() => setSelectedIndex(2)}
          />
        </div>

        {/* Remaining images */}
        {images.slice(3).map((image, index) => (
          <div
            key={index + 3}
            className={`${
              image.size === "large"
                ? "col-span-1 lg:col-span-2 aspect-[16/9]"
                : image.size === "medium"
                ? "aspect-[4/3]"
                : "aspect-[9/11]"
            } relative group`}
          >
            <Image
              src={image.url}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedIndex(index + 3)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-16 right-0 text-white hover:bg-white/20"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative">
              <div className="relative w-full h-[80vh]">
                <Image
                  src={images[selectedIndex].url}
                  alt={images[selectedIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 disabled:opacity-50"
                onClick={() => navigateGallery(-1)}
                disabled={selectedIndex === 0}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 disabled:opacity-50"
                onClick={() => navigateGallery(1)}
                disabled={selectedIndex === images.length - 1}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernGallery;
