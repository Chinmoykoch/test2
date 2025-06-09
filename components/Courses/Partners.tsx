import { LOGOS } from "../../utils/constant";
import React from "react";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import Image from "next/image";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const IndustryPartners: React.FC = () => {
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
        Inframe’s strong industry partnerships provide students with
        unparalleled career opportunities and real-world experience to excel in
        design and business.
      </p>

      {/* Slider container */}
      <div className="relative bg-white overflow-hidden py-12 w-full">
        <div className="relative flex items-center w-full">
          {/* Animated slider */}
          <div className="flex flex-nowrap whitespace-nowrap animate-[scroll_20s_linear_infinite] space-x-12">
            {/* First set of logos */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-1-${index}`}
                className="flex flex-col items-center justify-center text-slate-800"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {logo.name}
                </p>
              </div>
            ))}

            {/* Second set of logos to create infinite scroll effect */}
            {LOGOS.map((logo, index) => (
              <div
                key={`logo-2-${index}`}
                className="flex flex-col items-center justify-center text-slate-800"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 shadow-md border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={160}
                    height={160}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-gray-600">
                  {logo.name}
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
