"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { INFRAME_LOGO, LOGO } from "../../utils/constant";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import StudyDropDown from "./StudyDropDown";
import { Poppins } from "next/font/google";
import { Menu } from "lucide-react";
import ApplyNowForm from "../ApplyNowForm";
import { useState } from "react";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Navbar = () => {
  const [openSheet, setOpenSheet] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleLinkClick = () => {
    setOpenSheet(false);
  };

  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  return (
    <>
      <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50 py-4 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xl">
                  <Link href="/" onClick={handleLinkClick}>
                    <Image
                      src={INFRAME_LOGO}
                      alt="Inframe College Logo"
                      width={150}
                      height={10}
                      className="object-contain"
                    />
                  </Link>
                </span>
              </div>
              <StudyDropDown />

              <nav
                className={`hidden md:flex items-center gap-8 ${poppins.className}`}
              >
                <Link
                  href={"/about-us"}
                  className="text-muted-foreground text-white font-bold"
                  onClick={handleLinkClick}
                >
                  About
                </Link>
                <Link
                  href={"/lifeatinframe"}
                  className="text-muted-foreground text-white font-bold"
                  onClick={handleLinkClick}
                >
                  Life @ Inframe
                </Link>
              </nav>
            </div>

            <div className="hidden md:flex items-center space-x-7">
              <Link
                className="text-white font-bold"
                href="/contact-us"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
              <Button
                onClick={handleApplyClick}
                className={`py-5 px-7 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-black
    font-bold border-2 border-yellow-400 transition-all duration-300 ease-in-out
    hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
    hover:text-white shadow-lg rounded-lg ${poppins.className}`}
              >
                Apply Now
              </Button>
            </div>

            <div className="md:hidden">
              <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                <SheetTrigger
                  className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                  asChild
                >
                  <Menu className="text-white w-8 h-8" />
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="bg-white text-black  backdrop-blur-sm"
                >
                  <nav className="flex flex-col h-full">
                    <div className="mb-8 pt-4">
                      <Link href="/" onClick={handleLinkClick}>
                        <Image
                          src={LOGO}
                          alt="Inframe College Logo"
                          width={150}
                          height={10}
                          className="object-contain"
                        />
                      </Link>
                    </div>

                    <div className="space-y-6">
                      <Link
                        href="/about-us"
                        className="block w-full text-left text-lg hover:text-yellow-300 transition-colors duration-200 transform hover:translate-x-2"
                        onClick={handleLinkClick}
                      >
                        About
                      </Link>
                      <Link
                        href="/lifeatinframe"
                        className="block w-full text-left text-lg hover:text-yellow-300 transition-colors duration-200 transform hover:translate-x-2"
                        onClick={handleLinkClick}
                      >
                        LIFE@Inframe
                      </Link>
                      <Link
                        href="/contact-us"
                        className="block w-full text-left text-lg hover:text-yellow-300 transition-colors duration-200 transform hover:translate-x-2"
                        onClick={handleLinkClick}
                      >
                        Contact Us
                      </Link>
                    </div>

                    <div className="mt-8">
                      <button onClick={handleApplyClick}>
                        <Button
                          className={`w-full py-5 px-7 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 
                            text-black font-bold border-2 border-yellow-400 transition-all duration-300 ease-in-out
                            hover:bg-gradient-to-l hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-500 
                            hover:text-white shadow-lg rounded-lg ${poppins.className}`}
                        >
                          Apply Now
                        </Button>
                      </button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <ApplyNowForm
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        isScrolled={false}
      />
    </>
  );
};

export default Navbar;
