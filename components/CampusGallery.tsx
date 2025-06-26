"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLifeAtInframeGallery, GalleryImage } from "@/utils/api";

const ModernGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { galleryImages, loading, error } = useLifeAtInframeGallery();

  // Fallback images if API data is not available
  const fallbackImages = [
    {
      url: "/campus-27.JPG",
      alt: "Pow Wow celebration with red balloons",
      size: "large",
      width: 1920,
      height: 1080,
    },
    {
      url: "/fashion-2.JPG",
      alt: "Convocation ceremony",
      size: "medium",
      width: 1080,
      height: 1320,
    },
    {
      url: "/fashion-1.JPG",
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
      url: "/campus-32.JPG",
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
      url: "/campus-29.jpg",
      alt: "Ethnic Day celebration",
      size: "medium",
      width: 1080,
      height: 1320,
    },
  ];

  // Use API data if available, otherwise use fallback
  const displayImages = React.useMemo(() => {
    if (galleryImages && galleryImages.length > 0) {
      return galleryImages.map((img: GalleryImage, index: number) => ({
        url: img.imageUrl || fallbackImages[index % fallbackImages.length]?.url || "/campus-27.JPG",
        alt: img.title || fallbackImages[index % fallbackImages.length]?.alt || "Campus Image",
        size: index === 0 ? "large" : "medium",
        width: 1080,
        height: 810,
      }));
    }
    return fallbackImages;
  }, [galleryImages, fallbackImages]);

  const navigateGallery = (direction: number) => {
    if (selectedIndex !== null) {
      const newIndex = selectedIndex + direction;
      if (newIndex >= 0 && newIndex < displayImages.length) {
        setSelectedIndex(newIndex);
      }
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Gallery</h1>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Gallery</h1>
        <div className="text-center py-12">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  // Safety check - if no images are available, show fallback
  if (!displayImages || displayImages.length === 0) {
    return (
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12">Gallery</h1>
        <div className="text-center py-12">
          <p className="text-gray-600">No gallery images available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {/* Large image - First image */}
        {displayImages[0] && (
          <div className="col-span-1 lg:col-span-2 aspect-[16/9] relative group">
            <Image
              src={displayImages[0].url}
              alt={displayImages[0].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedIndex(0)}
              priority // Load this image immediately
            />
          </div>
        )}

        {/* Medium image - Second image */}
        {displayImages[1] && (
          <div className="aspect-[9/11] relative group">
            <Image
              src={displayImages[1].url}
              alt={displayImages[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedIndex(1)}
            />
          </div>
        )}

        {/* Medium image - Third image */}
        {displayImages[2] && (
          <div className="aspect-[4/3] relative group">
            <Image
              src={displayImages[2].url}
              alt={displayImages[2].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg cursor-pointer"
              onClick={() => setSelectedIndex(2)}
            />
          </div>
        )}

        {/* Remaining images */}
        {displayImages.slice(3).map((image, index) => (
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
      {selectedIndex !== null && displayImages[selectedIndex] && (
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
                  src={displayImages[selectedIndex].url}
                  alt={displayImages[selectedIndex].alt}
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
                disabled={selectedIndex === displayImages.length - 1}
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
