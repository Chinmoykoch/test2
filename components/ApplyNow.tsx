
"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import ApplyNowForm from "./ApplyNowForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ApplyNow = () => {
      const [isFormOpen, setIsFormOpen] = useState(false);
        const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          setIsFormOpen(true);
        };
  return (
    <div>
      <div className="bg-black w-full h-52 md:h-36 border-b-yellow-400 border-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center h-full px-6">
          <h1
            className={` text-center md:text-left py-5 md:py-0 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white ${poppins.className}`}
          >
            THE ART OF BUSINESS, THE BUSINESS OF DESIGN.
          </h1>

          <Button 
                onClick={handleApplyClick}
                className={`
              text-lg sm:text-xl py-6 sm:py-6 my-5 md:my-0 px-6 sm:px-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
              font-bold border-4 border-yellow-400 transition-all duration-300 ease-in-out
              hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
              hover:text-white shadow-lg rounded-lg ${poppins.className}
            `}
              >
                Apply Now
            </Button>


              <ApplyNowForm
                  isFormOpen={isFormOpen}
                  setIsFormOpen={setIsFormOpen}
                  isScrolled={false}
              />
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
