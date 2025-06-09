"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const SportsArena = () => {
  const images = [
    {
      src: "/sports day/IMG_8860.jpg",
      alt: "Snooker Room",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8865.jpg",
      alt: "Indoor Gym",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8829.jpg",
      alt: "Cricket Stadium",
      className: "h-[32rem] md:row-span-2",
    },
    {
      src: "/sports day/IMG_8851.jpg",
      alt: "Badminton Courts",
      className: "h-64 md:col-span-2",
    },
    {
      src: "/sports day/IMG_8777.jpg",
      alt: "Football Ground",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8871.jpg",
      alt: "Fitness Center",
      className: "h-64",
    },
    {
      src: "/sports day/IMG_8854.jpg",
      alt: "Sports Training",
      className: "h-64",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Sports Arena
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whilst conquering new levels in our academics, we find it essential
            to strike a balance with sports too, for it is true that a fit mind
            and a fit body go together.{" "}
            <span className="font-semibold text-gray-900">
              The International Sports Arena – The League
            </span>{" "}
            has been established with an Olympic vision to rouse the champion in
            students, covering a wide array of sporting facilities.
          </p>
        </div>
        <a
          href="#"
          className="text-red-500 font-semibold hover:underline mt-4 md:mt-0"
        >
          Read More &gt;
        </a>
      </div>

      {/* Image Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {images.map((image, index) => (
          <div key={index} className={`relative ${image.className}`}>
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-lg object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              priority={index < 3}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default SportsArena;
