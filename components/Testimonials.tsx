"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const testimonials = [
  {
    quote: "I Received The Finest Career Training",
    text: "Being at Infame College not only allowed me to secure a Job, but it also provided me with the best career development opportunities which equipped me with the best competencies and skill sets to secure a good placement, with a great package at my dream company.",
    name: "Manish soni",
    image: "/testimonials images/pixelcut-export (5).png",
  },
  {
    quote: "An Experience That Changed My Life",
    text: "The hands-on training and industry exposure I received here were invaluable. The faculty's guidance and support helped me develop both professionally and personally, leading to excellent career opportunities.",
    name: "Rawal",
    image: "/testimonials images/pixelcut-export (2).png",
  },
  {
    quote: "World-Class Education & Opportunities",
    text: "The university's focus on practical learning and industry connections made all the difference. I gained not just knowledge, but real-world skills that employers value, leading to multiple job offers upon graduation.",
    name: "Bharat",
    image: "/testimonials images/pixelcut-export (7).png",
  },
];

export default function Testimonial() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="flex items-center gap-3 mb-12">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${poppins.className}`}
            >
              Our Students Speak
            </h2>
            <svg
              width="40"
              height="24"
              viewBox="0 0 40 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.39339C28.9289 0.807609 27.9792 0.807609 27.3934 1.39339C26.8076 1.97917 26.8076 2.92892 27.3934 3.51471L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z"
                fill="#FFB800"
              />
            </svg>
          </div>

          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <div className="grid lg:grid-cols-[1fr,auto] gap-8 lg:gap-16 items-center">
                    <div className="space-y-6 max-w-3xl">
                      <h3
                        className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight ${poppins.className}`}
                      >
                        {testimonial.quote}
                      </h3>
                      <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
                        {testimonial.text}
                      </p>
                      <div
                        className={`bg-yellow-400 font-bold font-sans py-2 px-10 inline-block  text-lg ${poppins.className}`}
                      >
                        {testimonial.name}
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute -top-6 -left-6 -right-6 -bottom-6 z-10">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 600 800"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="animate-draw"
                            d="M20,20 C100,10 200,30 300,20 S500,10 580,20"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M580,20 C500,30 400,10 300,20 S100,30 20,20"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M20,780 C100,770 200,790 300,780 S500,770 580,780"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M580,780 C500,790 400,770 300,780 S100,790 20,780"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M20,20 C10,100 30,200 20,300 S10,500 20,580"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M20,580 C30,500 10,400 20,300 S30,100 20,20"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M580,20 C570,100 590,200 580,300 S570,500 580,580"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                          <path
                            className="animate-draw"
                            d="M580,580 C590,500 570,400 580,300 S590,100 580,20"
                            stroke="black"
                            strokeWidth="2"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={`${testimonial.name}'s testimonial`}
                        width={600} // Set appropriate width
                        height={800} // Set appropriate height
                        className="relative z-0 w-full h-[600px] lg:h-[800px] object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
