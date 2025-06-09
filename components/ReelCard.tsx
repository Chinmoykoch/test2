// components/ReelCard.js
"use client";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowLeft,
  Camera,
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  Instagram,
  Twitter,
  Youtube,
  Facebook,
  Tally1,
} from "lucide-react"; // Import Lucid icons
import { useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ReelCard = () => {
  const [videoIndex, setVideoIndex] = useState(0);
  const [isredHeart, setIsredHeart] = useState(false);

  const videos = [
    "/videos/Sports day__--___quotes _love _likesforlike _travel _foryou _followforfollowback _trendingreels _ootdfashion(MP4).mp4",
  ];

  const handleVideoEnd = () => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen flex flex-col items-center py-10">
      <div className=" flex flex-col md:flex md:flex-row justify-between items-center max-w-7xl w-full px-6">
        <section className="text-left max-w-lg">
          <h1
            className={`text-white text-5xl lg:text-7xl font-extrabold mb-6 ${poppins.className}`}
          >
            Follow Us on Social Media
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Stay updated with the latest trends, reels, and stories by following
            our social media channels.
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-white w-10 h-10 hover:text-pink-500 transition-transform duration-300 transform hover:scale-110" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="text-white w-10 h-10 hover:text-blue-400 transition-transform duration-300 transform hover:scale-110" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="text-white w-10 h-10 hover:text-red-600 transition-transform duration-300 transform hover:scale-110" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="text-white w-10 h-10 hover:text-blue-600 transition-transform duration-300 transform hover:scale-110" />
            </a>
          </div>
        </section>
        <section className="my-10">
          <Card className="relative w-[354px] h-[629px] rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              onEnded={handleVideoEnd}
            >
              <source src={videos[videoIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="flex justify-between items-center mb-4 p-4 relative z-10">
              <div className="flex items-center">
                <Button className="text-white mr-2">
                  <ArrowLeft />
                </Button>
                <p className="text-white font-semibold text-lg">Reels</p>
              </div>
              <Button className="text-white">
                <Camera />
              </Button>
            </div>

            <div className="flex justify-between pb-[5.5rem] items-end h-full relative z-10 px-4">
              <div className="flex flex-col mb-4 text-white">
                <div className="flex items-center mb-2">
                  <Image
                    src="/96252855_545538459478510_4060708075890278400_n.jpg"
                    alt="Profile Picture"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-3 border-2 border-gray-800"
                  />
                  <Link
                    href={"https://www.instagram.com/inframecollege/?hl=en"}
                  >
                    <p className="font-semibold mr-2">inframecollege</p>
                  </Link>
                  <Link
                    href={"https://www.instagram.com/inframecollege/?hl=en"}
                  >
                    <Button className="text-black bg-white font-sans font-bold hover:bg-gray-200  px-3 shadow-md">
                      Follow
                    </Button>
                  </Link>
                </div>
                <p className="mb-2">Trees, fogs, and mountains⛰️🌳</p>
                <p className="flex items-center text-sm">
                  <Button className="mr-2">
                    <Tally1 />
                  </Button>
                  AJR • The Good Part
                </p>
              </div>

              <div className="flex flex-col items-center space-y-6">
                <Button
                  onClick={() => setIsredHeart((prev) => !prev)}
                  className="text-white bg-transparent hover:text-red-500 "
                >
                  {isredHeart ? <Heart className="text-2xl" fill="red" /> : <Heart />}
                </Button>

                <Button className="text-white transform scale-x-[-1] hover:text-blue-500 transition-transform duration-300 transform hover:scale-125">
                  <MessageCircle />
                </Button>
                <Button className="text-white hover:text-green-500 transition-transform duration-300 transform hover:scale-125">
                  <Send />
                </Button>
                <Button className="text-white hover:text-gray-400 transition-transform duration-300 transform hover:scale-125">
                  <MoreHorizontal />
                </Button>
                <Image
                  src="https://i.scdn.co/image/ab67616d0000b2736227bea855e8e32fe0c4e81f"
                  alt="Music Cover"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover rounded-full border-2 border-gray-800"
                />
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ReelCard;
