"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../components/ui/carousel";
import { Card, CardContent } from "../../components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselImages = [
  {
    src: "/images/gallery/1721366034581.jpg",
    alt: "University campus view",
  },
  {
    src: "/images/gallery/1719471947426.jpg",
    alt: "Students in classroom",
  },
  {
    src: "/images/gallery/1721642783350.jpg",
    alt: "Library interior",
  },
  {
    src: "/images/gallery/1721123080085.jpg",
    alt: "Campus life",
  },
];

const AdmissionProcess = () => {
  return (
    <div className="font-sans my-20 mx-3 md:mx-0 bg-white text-white">
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-lg mb-8">
        <h1 className="text-4xl text-black font-bold mb-4">
          Admission Process
        </h1>
        <p className="text-black text-xl font-medium">
          {`"Join us on an exhilarating journey of creativity, innovation, and celebrity-inspired design education."`}
        </p>

        <div className="mt-4">
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {carouselImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="border-2 border-black">
                    <CardContent className="p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover rounded-lg"
                          priority={index === 0} // Load the first image faster
                        />
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            step: 1,
            title: "Upload your portfolio online",
            icon: "📁",
            bgColor: "bg-yellow-400",
            textColor: "text-black",
            borderColor: "border-blue-600",
          },
          {
            step: 2,
            title:
              "Candidate has to attend the DAT conducted by Inframe on the specified dates",
            icon: "📝",
            bgColor: "bg-blue-600",
            borderColor: "border-yellow-400",
          },
          {
            step: 3,
            title:
              "Shortlisted candidates from DAT have to attend an online interview for further interviewing",
            icon: "🎯",
            bgColor: "bg-orange-500",
            borderColor: "border-black",
          },
          {
            step: 4,
            title:
              "Payment of the admission fees before the prescribed due date",
            icon: "💰",
            bgColor: "bg-black",
            borderColor: "border-yellow-400",
          },
        ].map((step) => (
          <div
            key={step.step}
            className={`${step.bgColor} ${
              step.textColor || "text-white"
            } p-6 rounded-lg flex items-center space-x-4 border-2 ${
              step.borderColor
            } hover:scale-[1.02] transition-transform duration-200`}
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                {step.icon}
              </div>
            </div>
            <div className="flex-grow">
              <div className="font-bold mb-1">STEP: {step.step}</div>
              <div>{step.title}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-gradient-to-r from-blue-600 to-orange-500 p-4 rounded-lg border-2 border-yellow-400">
        <ul className="list-disc pl-4 text-sm text-white font-medium">
          <li>
            These scholarship will be processed after a student joins the
            college.
          </li>
          <li>
            Until the time of joining, the candidates are expected to follow the
            common selection process.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdmissionProcess;
