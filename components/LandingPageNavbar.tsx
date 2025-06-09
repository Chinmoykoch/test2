import React from "react";

import Link from "next/link";
import Image from "next/image";

import StudyDropDown from "./Navbar/StudyDropDown";
import { LOGO } from "../utils/constant";
import { Button } from "@/components/ui/button";

import { Phone } from "lucide-react";

const LandingNavbar = () => {
  return (
    <header className="fixed w-full bg-white border shadow-sm z-50 py-4 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl">
                <Link href="/">
                  <Image
                    src={LOGO}
                    alt="Inframe College Logo"
                    width={150}
                    height={10}
                    className="object-contain"
                  />
                </Link>
              </span>
            </div>
            <StudyDropDown />
          </div>

          <div className="hidden md:flex items-center space-x-7">
            <Link href={"/applynow"}>
              <Button
                className={`py-5 text-lg bg-white text-black borde font-semibold border border-black font-sans hover:bg-white`}
              >
                {" "}
                <Phone />
                <span className="font-sans">+91 9649 9649 37</span>
              </Button>
            </Link>
          </div>

          {/* Mobile View Hamburger Button */}
        </div>
      </div>
    </header>
  );
};

export default LandingNavbar;
