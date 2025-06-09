"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import { Card } from "../components/ui/card";
import Image from "next/image";
import { testimonials } from "../utils/constant";
import { Poppins } from "next/font/google";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function TestimonialCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4 lg:px-8">
      {/* Header Section */}
      <div className="mb-16 max-w-2xl">
        <h2
          className={`text-4xl lg:text-5xl font-bold mb-4 ${poppins.className}`}
        >
          Student Success Stories
        </h2>
        <p className="text-gray-600 text-lg">
          Discover how our platform has transformed the learning journey of our
          students
        </p>
      </div>

      <Carousel
        className="w-full"
        orientation="horizontal"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
            >
              <Card className="border-none">
                <div className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden group">
                  {/* Image with subtle hover effect */}
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    layout="fill"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* Semi-transparent gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                  {/* Content Container */}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-24">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <div className="space-y-4">
                      <p className="text-white/90 text-lg leading-relaxed line-clamp-4">
                        {`"${testimonial.feedback}"`}
                      </p>

                      {/* Student Info */}
                      <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
                          <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.name}
                            layout="fill"
                            className="object-cover"
                            priority
                          />
                        </div>
                        <div>
                          <h3 className="text-white text-xl font-semibold">
                            {testimonial.name}
                          </h3>
                          <p className="text-blue-400">Student</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Progress indicator */}
        <div className="mt-8 flex justify-center gap-2">
          {[...Array(Math.ceil(testimonials.length / 4))].map((_, i) => (
            <div
              key={i}
              className="w-16 h-1 rounded-full bg-gray-200 overflow-hidden"
            >
              <div className="w-full h-full bg-blue-600 transform origin-left scale-x-0 animate-[progress_4s_ease-in-out_infinite]"></div>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
