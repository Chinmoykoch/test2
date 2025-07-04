"use client";
import React from "react";
import {
  FileDown,
  Calendar,
  BookOpen,
  NewspaperIcon,
  Building,
  Users,
  Award,
  Loader2,
} from "lucide-react";

import { Poppins } from "next/font/google";
import Image from "next/image";
import ApplyNow from "./ApplyNow";
import DreamsSection from "./DreamSection";
import FreeResourcesCTABanner from "./FreeResourcesCTABanner";
import { useDownloads, useDownloadCategories } from "../utils/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface DownloadItemLocal {
  title: string;
  year?: string;
  semester?: string;
  link: string;
}

// Default categories for fallback
const DEFAULT_DOWNLOAD_CATEGORIES = [
  'Entrance Exam Schedule',
  'Previous Year Sample Papers',
  'Newsletters',
  'Brochure/Prospectus',
  'Placement Partner Documents',
  'Club Documents',
  'Scholarship and Discount'
];

const DownloadsSection = () => {
  // Fetch downloads and categories from backend
  const { downloads, loading: downloadsLoading, error: downloadsError } = useDownloads();
  const { categories, loading: categoriesLoading } = useDownloadCategories();

  // Icon mapping for categories
  const iconMap: { [key: string]: React.ElementType } = {
    "Entrance Exam Schedule": Calendar,
    "Previous Year Sample Papers": BookOpen,
    "Newsletters": NewspaperIcon,
    "Brochure/Prospectus": FileDown,
    "Placement Partner Documents": Building,
    "Club Documents": Users,
    "Scholarship and Discount": Award,
  };

  // Group downloads by category
  const groupedDownloads = React.useMemo(() => {
    const grouped: { [category: string]: DownloadItemLocal[] } = {};
    
    if (downloads && downloads.length > 0) {
      downloads.forEach((download) => {
        if (download.isActive) {
          if (!grouped[download.category]) {
            grouped[download.category] = [];
          }
          grouped[download.category].push({
            title: download.title,
            link: download.fileUrl,
            year: download.uploadDate,
          });
        }
      });
    }

    // Add empty categories for UI consistency
    const allCategories = categories.length > 0 
      ? categories.map(cat => cat.name)
      : DEFAULT_DOWNLOAD_CATEGORIES;
    
    allCategories.forEach(category => {
      if (!grouped[category]) {
        grouped[category] = [];
      }
    });

    return grouped;
  }, [downloads, categories]);

  // Loading state
  if (downloadsLoading || categoriesLoading) {
    return (
      <div className={`w-full bg-white ${poppins.className}`}>
        <div className="relative z-10">
          <div className="relative h-[75vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10" />
            <Image
              src="/images/gallery/1721366034581.jpg"
              alt="Campus Life Hero Image"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-yellow-400" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                      Downloads
                    </h1>
                  </div>
                  <p className="text-xl text-white max-w-2xl">
                    Access all your essential documents and resources in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto -mt-16 relative z-20 px-4">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-yellow-600" />
              <p className="text-gray-600">Loading downloads...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (downloadsError) {
    return (
      <div className={`w-full bg-white ${poppins.className}`}>
        <div className="relative z-10">
          <div className="relative h-[75vh]">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10" />
            <Image
              src="/images/gallery/1721366034581.jpg"
              alt="Campus Life Hero Image"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-yellow-400" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                      Downloads
                    </h1>
                  </div>
                  <p className="text-xl text-white max-w-2xl">
                    Access all your essential documents and resources in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto -mt-16 relative z-20 px-4">
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-600 mb-4">Failed to load downloads</p>
                <p className="text-sm text-gray-600">{downloadsError}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-white ${poppins.className}`}>
      {/* Hero Section */}
      <div className="relative z-10">
        <div className="relative h-[75vh]">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-transparent z-10" />
          <Image
            src="/images/gallery/1721366034581.jpg"
            alt="Campus Life Hero Image"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="max-w-7xl mx-auto px-4 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-12 bg-yellow-400" />
                  <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                    Downloads
                  </h1>
                </div>
                <p className="text-xl text-white max-w-2xl">
                  Access all your essential documents and resources in one place
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Icons */}
      <div className="container mx-auto -mt-16 relative z-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {Object.keys(groupedDownloads).map((category: string) => {
            const Icon = iconMap[category] || FileDown;
            return (
              <div
                key={category}
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-100"
              >
                <div className="w-14 h-14 bg-yellow-50 rounded-full flex items-center justify-center mb-3">
                  <Icon className="w-7 h-7 text-yellow-600" />
                </div>
                <span className="text-sm font-medium text-center text-gray-700">
                  {category}
                </span>
              </div>
            );
          })}
        </div>

        <DreamsSection />

        {/* Download Sections */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Download Center
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(groupedDownloads).map(([category, items], index) => (
              <AccordionItem
                key={category}
                value={`item-${index}`}
                id={category === "Brochure/Prospectus" ? "brochure-section" : undefined}
              >
                <AccordionTrigger className="px-4 hover:bg-yellow-50 rounded-xl transition-all duration-300">
                  <div className="flex items-center gap-3">
                    {React.createElement(iconMap[category] || FileDown, {
                      className: "w-5 h-5 text-yellow-600",
                    })}
                    <span className="text-lg font-medium text-gray-700">
                      {category}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4 px-4">
                    {items.length > 0 ? (
                      items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center justify-between p-4 bg-yellow-50 rounded-xl hover:bg-yellow-100 transition-all duration-300"
                        >
                          <div>
                            <h3 className="font-medium text-gray-700">
                              {item.title}
                            </h3>
                            {item.year && (
                              <p className="text-sm text-gray-500 mt-1">
                                Uploaded: {item.year}
                              </p>
                            )}
                          </div>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium"
                          >
                            <FileDown className="w-4 h-4" />
                            <span>Download</span>
                          </a>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <FileDown className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p>No downloads available in this category yet.</p>
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <FreeResourcesCTABanner />
      <ApplyNow />
    </div>
  );
};

export default DownloadsSection;
