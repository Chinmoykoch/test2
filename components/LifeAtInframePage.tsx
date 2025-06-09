"use client"
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Suspense, lazy, useState } from "react";
import { Poppins } from "next/font/google";
import "../components/style.css";
import { experienceCamputLife2 } from "../utils/constant";
import ApplyNowForm from "./ApplyNowForm";

// Lazy load components
const CampusLife = lazy(() => import("../components/CampusLife"));
const ModernGallery = lazy(() => import("../components/CampusGallery"));
const SportsArena = lazy(() => import("../components/SportsArena"));
const StudentClubs = lazy(() => import("../components/StudentClubs"));
const CampusTour = lazy(() => import("../components/CampusTour"));

// Load font with display swap
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-96">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
  </div>
);

export const LifeAtCampus = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
      const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsFormOpen(true);
      };
  const services = [
    {
      title: "Academic Support",
      description:
        "Access tutoring services, writing centers, and academic advisors who are committed to helping you achieve your educational goals.",
      color: "bg-red-500",
      icon: "circle",
    },
    {
      title: "Career Development",
      description:
        "Prepare for your future career with our comprehensive career services including resume workshops and job fairs.",
      color: "bg-blue-600",
      icon: "square",
    },
    {
      title: "Student Wellness",
      description:
        "Take care of your physical and mental well-being with our comprehensive wellness programs and health services.",
      color: "bg-green-600",
      icon: "triangle",
    },
  ];

  const events = [
    {
      title: "Arts & Culture",
      description:
        "Express yourself through our vibrant arts and culture scene. Participate in theatrical productions and music concerts.",
      image: "/fine art/SKF09513.JPG",
    },
    {
      title: "Sports & Recreation",
      description:
        "Stay active and competitive with our comprehensive sports programs for all skill levels.",
      image: "/IMG_8698.jpg",
    },
    {
      title: "Student Organizations",
      description:
        "Find your community in our diverse student organizations. From academic clubs to special interest groups.",
      image: "/images/gallery/1717492692489 - Copy (2).jpg",
    },
  ];

  return (
    <div>
      <div className={`min-h-screen ${poppins.className}`}>
        {/* Background Pattern */}
        <div
          className="fixed inset-0 h-full w-full opacity-10 bg-white bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:150px_150px] z-0"
          aria-hidden="true"
        />

        {/* Hero Section */}
        <div className="relative z-10">
          <div className="relative h-screen">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent z-10" />
            <Image
              src="/images/gallery/1721738128651.jpg"
              alt="Campus Life Hero Image"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHSIfIR0jIyUkJSMiIiMlKy4wLisqMx8hJzQnKi46PT4+JSZHSUFQLTc6Tj7/2wBDARUXFx4bHt0dHT4qIio+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj7/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-1.5 h-12 bg-yellow-500" />
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                      LIFE @ INFRAME
                    </h1>
                  </div>
                  <p className="text-xl text-white/80 max-w-2xl">
                    Discover a vibrant community where learning, innovation, and
                    personal growth intersect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="w-full py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-black">
                  Welcome to Campus Life
                </h2>
                <p className="text-lg text-gray-600 mb-6 text-justify">
                  {`Our campus is more than just buildings and classrooms – it's a thriving ecosystem 
                  where ideas flourish, friendships form, and futures take shape.`}
                </p>
                <p className="text-lg text-gray-600 mb-6 text-justify">
                  {`Whether you're pursuing academic excellence, exploring new interests through clubs 
                  and societies, or developing leadership skills, our campus provides the perfect 
                  environment for your growth and success.`}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative w-full h-64">
                  <Image
                    src="/fashion-1.JPG"
                    alt="Campus view 1"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
                <div className="relative w-full h-64 mt-8">
                  <Image
                    src="/images/gallery/1721366034581.jpg"
                    alt="Campus view 2"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Student Services Section */}
        <section className="w-full py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Comprehensive Student Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide extensive support services to ensure your academic
                journey is smooth and successful.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className={`${service.color} text-white hover:scale-105 transition-transform duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="h-16 w-16 mb-6">
                      <svg viewBox="0 0 24 24" className="w-full h-full">
                        {service.icon === "circle" && (
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="white"
                            fillOpacity="0.2"
                          />
                        )}
                        {service.icon === "square" && (
                          <rect
                            width="18"
                            height="18"
                            x="3"
                            y="3"
                            fill="white"
                            fillOpacity="0.2"
                          />
                        )}
                        {service.icon === "triangle" && (
                          <polygon
                            points="12 2 22 22 2 22"
                            fill="white"
                            fillOpacity="0.2"
                          />
                        )}
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="mb-6 text-justify ">{service.description}</p>
                    <Button
                      variant="outline"
                      className="text-white border-white bg-transparent hover:bg-white/20 w-full"
                    >
                      Learn More <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <div className="bg bg1  "></div>

        {/* Lazy Loaded Components */}
        <Suspense fallback={<LoadingSpinner />}>
          <CampusLife experienceCamputLife={experienceCamputLife2} />
          <StudentClubs />
          <div className="bg bg2" />
          <SportsArena />
          <CampusTour />
        </Suspense>

        {/* Events & Activities Section */}
        <section className="w-full py-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-black">
                Campus Events & Activities
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Immerse yourself in a diverse range of events and activities
                that make campus life exciting and memorable.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={85}
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <div className="bg bg3" />

        {/* Campus Gallery */}
        <Suspense fallback={<LoadingSpinner />}>
          <ModernGallery />
        </Suspense>

        {/* CTA Section */}
        <section className="w-full py-24 my-10 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Begin Your Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to become part of our vibrant campus community? Take the
              first step towards your future today.
            </p>
            <div className="flex gap-6 justify-center">

            <Button 
                onClick={handleApplyClick}
                className="bg-yellow-400 text-black px-24 py-8 font-bold text-lg hover:bg-yellow-500 relative z-50"
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
        </section>
      </div>
    </div>
  );
};

export default LifeAtCampus;
