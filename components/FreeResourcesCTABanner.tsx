import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { Poppins } from "next/font/google"; // Importing Google Fonts via next/font
import { Button } from "@/components/ui/button";

// Using the Poppins font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const FreeResourcesCTABanner = () => {
  return (
    <div className={`max-w-7xl mx-auto px-4 my-20 ${poppins.className}`}>
      <div className="bg-gradient-to-r from-gray-700 via-black to-black text-white rounded-xl shadow-xl p-6 lg:p-10 flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-10">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-3 flex-1">
          <h2 className="text-2xl lg:text-4xl font-bold flex items-center justify-center lg:justify-start gap-2">
            <BookOpen size={28} className="text-white" />
            Access Free Learning Resources!
          </h2>
          <p className="text-sm lg:text-lg opacity-80">
            Explore free courses, guides, and templates to help you excel in
            your field.
          </p>
        </div>

        {/* Button Section */}
        <div className="flex-shrink-0">
          <Button className="flex items-center justify-center gap-2 bg-white text-gray-900 font-semibold text-sm lg:text-base px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300 w-full lg:w-auto">
            <span>Explore Free Courses</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FreeResourcesCTABanner;
