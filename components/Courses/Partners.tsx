"use client";

import React from "react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useIndustryPartners } from "@/utils/api";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const IndustryPartners: React.FC = () => {
  const { partners, loading, error } = useIndustryPartners();

  // Show loading state
  if (loading) {
    return (
      <div className="w-full container mx-auto px-4 lg:px-8 mt-20">
        <h2
          className={`text-center xl:text-left font-sans text-3xl font-bold text-gray-800 mb-4 ${poppins.className}`}
        >
          INDUSTRY & PLACEMENT PARTNER
        </h2>
        <p
          className={`text-center xl:text-left text-lg text-gray-600 mb-8 max-w-3xl mx-auto xl:mx-0 ${poppins.className}`}
        >
          Inframe&apos;s strong industry partnerships provide students with
          unparalleled career opportunities and real-world experience to excel in
          design and business.
        </p>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
        </div>
      </div>
    );
  }

  // Show error state with fallback to static data
  if (error) {
    console.warn('Using fallback industry partners due to API error:', error);
    
    // Fallback static data
    const fallbackPartners = [
      { _id: 'fallback-1', name: 'Design Studio Pro', src: '/company logo/logo.png' },
      { _id: 'fallback-2', name: 'Creative Solutions', src: '/company logo/logo.png' },
      { _id: 'fallback-3', name: 'Art & Design Hub', src: '/company logo/logo.png' },
      { _id: 'fallback-4', name: 'Innovation Labs', src: '/company logo/logo.png' },
    ];

    return (
      <div className="w-full container mx-auto px-4 lg:px-8 mt-20">
        <h2
          className={`text-center xl:text-left font-sans text-3xl font-bold text-gray-800 mb-4 ${poppins.className}`}
        >
          INDUSTRY & PLACEMENT PARTNER
        </h2>
        <p
          className={`text-center xl:text-left text-lg text-gray-600 mb-8 max-w-3xl mx-auto xl:mx-0 ${poppins.className}`}
        >
          Inframe&apos;s strong industry partnerships provide students with
          unparalleled career opportunities and real-world experience to excel in
          design and business.
        </p>
        
        {/* Warning message */}
        <div className="text-center mb-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-md mx-auto">
            <p className="text-yellow-700 text-sm">⚠️ Showing cached partners. API temporarily unavailable.</p>
          </div>
        </div>

        {/* Fallback partners display */}
        <div className="overflow-hidden">
          <div className="relative flex items-center w-full">
            <div className="flex flex-nowrap whitespace-nowrap animate-[scroll_20s_linear_infinite] space-x-12">
              {fallbackPartners.map((partner, index) => (
                <div
                  key={`fallback-${partner._id}-${index}`}
                  className="flex flex-col items-center justify-center text-slate-800"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={160}
                      height={160}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600">
                    {partner.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state
  if (!partners || partners.length === 0) {
    return (
      <div className="w-full container mx-auto px-4 lg:px-8 mt-20">
        <h2
          className={`text-center xl:text-left font-sans text-3xl font-bold text-gray-800 mb-4 ${poppins.className}`}
        >
          INDUSTRY & PLACEMENT PARTNER
        </h2>
        <p
          className={`text-center xl:text-left text-lg text-gray-600 mb-8 max-w-3xl mx-auto xl:mx-0 ${poppins.className}`}
        >
          Inframe&apos;s strong industry partnerships provide students with
          unparalleled career opportunities and real-world experience to excel in
          design and business.
        </p>
        <div className="text-center py-12">
          <p className="text-gray-600">No industry partners available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full container mx-auto px-4 lg:px-8 mt-20">
      {/* Heading */}
      <h2
        className={`text-center xl:text-left font-sans text-3xl font-bold text-gray-800 mb-4 ${poppins.className}`}
      >
        INDUSTRY & PLACEMENT PARTNER
      </h2>

      {/* Short Description Paragraph */}
      <p
        className={`text-center xl:text-left text-lg text-gray-600 mb-8 max-w-3xl mx-auto xl:mx-0 ${poppins.className}`}
      >
        Inframe&apos;s strong industry partnerships provide students with
        unparalleled career opportunities and real-world experience to excel in
        design and business.
      </p>

      {/* Slider container */}
      <div className="overflow-hidden">
        <div className="relative flex items-center w-full">
          {/* Animated slider */}
          <div className="flex flex-nowrap whitespace-nowrap animate-[scroll_20s_linear_infinite] space-x-12">
            {/* First set of logos */}
            {partners.map((partner, index) => (
              <div
                key={`partner-1-${partner._id}-${index}`}
                className="flex flex-col items-center justify-center text-slate-800"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.src || "/company logo/logo.png"}
                    alt={partner.name}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {partner.name}
                </p>
              </div>
            ))}

            {/* Second set of logos to create infinite scroll effect */}
            {partners.map((partner, index) => (
              <div
                key={`partner-2-${partner._id}-${index}`}
                className="flex flex-col items-center justify-center text-slate-800"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={partner.src || "/company logo/logo.png"}
                    alt={partner.name}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryPartners;
