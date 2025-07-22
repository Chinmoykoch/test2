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
  Download,
  FileText,
  Clock,
} from "lucide-react";

import { Poppins } from "next/font/google";
import Image from "next/image";
import DreamsSection from "./DreamSection";
import { useDownloads, useDownloadCategories } from "../utils/api";

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

  // Color mapping for categories
  const colorMap: { [key: string]: string } = {
    "Entrance Exam Schedule": "bg-blue-50 border-blue-200 text-blue-700",
    "Previous Year Sample Papers": "bg-green-50 border-green-200 text-green-700",
    "Newsletters": "bg-purple-50 border-purple-200 text-purple-700",
    "Brochure/Prospectus": "bg-yellow-50 border-yellow-200 text-yellow-700",
    "Placement Partner Documents": "bg-indigo-50 border-indigo-200 text-indigo-700",
    "Club Documents": "bg-pink-50 border-pink-200 text-pink-700",
    "Scholarship and Discount": "bg-orange-50 border-orange-200 text-orange-700",
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
      <div className="container mx-auto -mt-16 relative z-20 px-8">
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

        {/* Redesigned Download Center - All Items Visible */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Download Center
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find and download all the documents you need. Everything is organized by category for easy access.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="space-y-12">
            {Object.entries(groupedDownloads).map(([category, items]) => {
              const Icon = iconMap[category] || FileDown;
              const categoryColor = colorMap[category] || "bg-gray-50 border-gray-200 text-gray-700";
              
              return (
                <div key={category} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  {/* Category Header */}
                  <div className={`px-6 py-4 border-b ${categoryColor} bg-opacity-50`}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">
                          {category}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {items.length} document{items.length !== 1 ? 's' : ''} available
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Download Items */}
                  <div className="p-6">
                    {items.length > 0 ? (
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="group bg-gray-50 rounded-xl p-4 hover:bg-yellow-50 transition-all duration-300 border border-gray-100 hover:border-yellow-200"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors">
                                  {item.title}
                                </h4>
                                {item.year && (
                                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-500">
                                    <Clock className="w-3 h-3" />
                                    <span>Uploaded: {item.year}</span>
                                  </div>
                                )}
                              </div>
                              <div className="ml-3">
                                <FileText className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 transition-colors" />
                              </div>
                            </div>
                            
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-medium text-sm group-hover:bg-yellow-100 px-3 py-2 rounded-lg transition-all duration-300"
                            >
                              <Download className="w-4 h-4" />
                              <span>Download</span>
                            </a>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileDown className="w-8 h-8 text-gray-400" />
                        </div>
                        <h4 className="text-lg font-medium text-gray-600 mb-2">
                          No documents available
                        </h4>
                        <p className="text-gray-500">
                          Documents in this category will appear here when they become available.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Download Statistics
              </h3>
              <p className="text-gray-600">
                Everything you need, organized and ready to download
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {Object.keys(groupedDownloads).length}
                </div>
                <div className="text-gray-600">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {Object.values(groupedDownloads).reduce((total, items) => total + items.length, 0)}
                </div>
                <div className="text-gray-600">Total Documents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {Object.values(groupedDownloads).filter(items => items.length > 0).length}
                </div>
                <div className="text-gray-600">Active Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadsSection;
