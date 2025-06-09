import React from "react";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { cards } from "../utils/constant";
import { Poppins } from "next/font/google";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const LifeAtInframe = () => {
  return (
    <section className="py-16 font-sans relative overflow-hidden">
      <div className="pl-4 md:pl-6 lg:pl-[calc(((95vw-1200px)/2)+1rem)] pr-0">
        {/* Section header */}
        <div className="mb-12 max-w-3xl">
          <h3 className="text-sm font-medium uppercase tracking-wider text-gray-600 mb-2">
            OUR CULTURE
          </h3>
          <h2
            className={`text-2xl md:text-3xl font-bold text-left ${poppins.className}`}
          >
            Life @ Inframe
          </h2>
          <p
            className={`text-left text-lg text-gray-600 mt-3 ${poppins.className}`}
          >
            Experience a vibrant, collaborative environment at Inframe where
            creativity and innovation thrive.
          </p>
        </div>

        {/* Carousel implementation */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-6">
            {cards.map((card, index) => (
              <CarouselItem
                key={index}
                className="pl-6 basis-full md:basis-[398px]"
              >
                <Card className="h-[598px] ml-3 overflow-hidden border-0 shadow-lg rounded-lg bg-transparent z-10 text-white group relative">
                  {/* Image with gradient overlay */}
                  <div className="relative w-full h-full">
                    <Image
                      src={card.image}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:filter-none filter grayscale transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="absolute bottom-0 left-0 right-0 p-6">
                    <CardTitle className="text-xl font-bold leading-tight mb-3">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-300">
                      {card.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LifeAtInframe;
