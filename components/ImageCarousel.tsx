"use client";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/ui/carousel";
import Image from "next/image";

const images = [
  "/images/gallery/DSC04209.JPG",
  "/images/gallery/1721738128651.jpg",
  "/images/gallery/1721122517472.jpg",
  "/images/gallery/1717660987952.jpg",
  "/images/gallery/1719304885452_1.jpg",
  "/images/gallery/1717485117120 - Copy (2).jpg",
  "/images/gallery/1719471947426.jpg",
  "/images/gallery/DSC04143.JPG",
];

function ImageCarousel() {
  return (
    <Carousel
      orientation="horizontal"
      plugins={[
        Autoplay({
          delay: 4000,
        }),
      ]}
      className="relative h-full"
    >
      <CarouselContent className="flex relative top-0">
        {images.map((src, index) => (
          <CarouselItem
            key={index}
            className="relative flex-shrink-0 w-full h-screen"
          >
            <Image
              src={src}
              alt={`Background ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="z-0"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default ImageCarousel;
