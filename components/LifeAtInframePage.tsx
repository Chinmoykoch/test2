"use client"
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Suspense, lazy, useState, useEffect } from "react";
import { Poppins } from "next/font/google";
import "../components/style.css";
import { experienceCamputLife2 } from "../utils/constant";
import ApplyNowForm from "./ApplyNowForm";
import { 
  apiHelpers, 
  CampusEvent, 
  useLifeAtInframeSections,
  useStudentServices,
  useSportsFacilities,
  useLifeAtInframeGallery
} from "@/utils/api";

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
    const [events, setEvents] = useState<CampusEvent[]>([]);
    const [eventsLoading, setEventsLoading] = useState(true);
    const [eventsError, setEventsError] = useState<string | null>(null);

    // Custom hooks for API data
    const { sections: lifeAtInframeSections, loading: sectionsLoading, error: sectionsError } = useLifeAtInframeSections();
    const { services: studentServices, loading: servicesLoading, error: servicesError } = useStudentServices();
    const { loading: sportsLoading, error: sportsError } = useSportsFacilities();
    const { loading: galleryLoading, error: galleryError } = useLifeAtInframeGallery();

    const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setIsFormOpen(true);
    };

    useEffect(() => {
        const fetchCampusEvents = async () => {
            try {
                setEventsLoading(true);
                setEventsError(null);
                const eventsData = await apiHelpers.getCampusEvents();
                // Sort events by order field
                const sortedEvents = eventsData.sort((a, b) => a.order - b.order);
                setEvents(sortedEvents);
            } catch (err) {
                console.error('Failed to fetch campus events:', err);
                setEventsError('Failed to load campus events. Please try again later.');
            } finally {
                setEventsLoading(false);
            }
        };

        fetchCampusEvents();
    }, []);

    // Helper function to get section by type
    const getSectionByType = (type: string) => {
        return lifeAtInframeSections.find(section => section.sectionType === type);
    };

    // Helper function to get display title for categories
    const getCategoryDisplayTitle = (category: string): string => {
        switch (category) {
            case 'arts-culture':
                return 'Arts & Culture';
            case 'sports-recreation':
                return 'Sports & Recreation';
            case 'organizations':
                return 'Student Organizations';
            default:
                return category;
        }
    };

    // Fallback data for sections that don't have API data
    const fallbackServices = [
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
    ] as const;

    // Use API data if available, otherwise use fallback
    const displayServices = studentServices.length > 0 ? studentServices : fallbackServices;

    // Top-level loading and error handling
    if (sectionsLoading || servicesLoading || sportsLoading || galleryLoading) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading Life at Inframe content...</p>
          </div>
        </div>
      );
    }
    if (sectionsError || servicesError || sportsError || galleryError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 text-lg mb-4">
              {sectionsError || servicesError || sportsError || galleryError}
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      );
    }

  return (
    <div className="relative">
      <div className={`min-h-screen ${poppins.className} relative`}>
        {/* Background Pattern */}
        <div
          className="absolute inset-0 h-full w-full opacity-10 bg-white bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:150px_150px] -z-10 pointer-events-none"
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
                      {getSectionByType('hero')?.title || 'LIFE @ INFRAME'}
                    </h1>
                  </div>
                  <p className="text-xl text-white/80 max-w-2xl">
                    {getSectionByType('hero')?.description || 'Discover a vibrant community where learning, innovation, and personal growth intersect'}
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
                  {getSectionByType('welcome')?.title || 'Welcome to Campus Life'}
                </h2>
                <div className="text-lg text-gray-600 mb-6 text-justify">
                  {getSectionByType('welcome')?.content ? (
                    <div dangerouslySetInnerHTML={{ __html: getSectionByType('welcome')?.content || '' }} />
                  ) : (
                    <>
                      <p className="mb-6">
                        {`Our campus is more than just buildings and classrooms – it's a thriving ecosystem 
                        where ideas flourish, friendships form, and futures take shape.`}
                      </p>
                      <p>
                        {`Whether you're pursuing academic excellence, exploring new interests through clubs 
                        and societies, or developing leadership skills, our campus provides the perfect 
                        environment for your growth and success.`}
                      </p>
                    </>
                  )}
                </div>
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
                {getSectionByType('services')?.title || 'Comprehensive Student Services'}
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {getSectionByType('services')?.description || 'We provide extensive support services to ensure your academic journey is smooth and successful.'}
              </p>
            </div>

            {/* Loading State */}
            {servicesLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
              </div>
            )}

            {/* Error State */}
            {servicesError && (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600">{servicesError}</p>
                </div>
              </div>
            )}

            {/* Services Grid */}
            {!servicesLoading && !servicesError && (
              <div className="grid md:grid-cols-3 gap-8">
                {displayServices.map((service, index) => {
                  // Handle both API service and fallback service types
                  const isApiService = '_id' in service;
                  const serviceKey = isApiService ? service._id : index;
                  const serviceColor = isApiService
                    ? 'bg-blue-600'
                    : (typeof service === 'object' && 'color' in service && typeof service.color === 'string'
                        ? service.color
                        : 'bg-gray-600');
                  const serviceIcon = isApiService
                    ? service.icon
                    : (typeof service === 'object' && 'icon' in service ? service.icon : undefined);
                  
                  return (
                    <Card
                      key={serviceKey}
                      className={`${serviceColor} text-white hover:scale-105 transition-transform duration-300`}
                    >
                      <CardContent className="p-8">
                        <div className="h-16 w-16 mb-6">
                          {serviceIcon ? (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-2xl">{serviceIcon}</span>
                            </div>
                          ) : (
                            <svg viewBox="0 0 24 24" className="w-full h-full">
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="white"
                                fillOpacity="0.2"
                              />
                            </svg>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="mb-6 text-justify">{service.description}</p>
                        <Button
                          variant="outline"
                          className="text-white border-white bg-transparent hover:bg-white/20 w-full"
                        >
                          Learn More <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            )}
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

            {/* Loading State */}
            {eventsLoading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
              </div>
            )}

            {/* Error State */}
            {eventsError && (
              <div className="text-center py-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                  <p className="text-red-600">{eventsError}</p>
                </div>
              </div>
            )}

            {/* Events Grid */}
            {!eventsLoading && !eventsError && (
              <div className="grid md:grid-cols-3 gap-8">
                {events.length > 0 ? (
                  events.map((event) => (
                    <Card
                      key={event._id}
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
                        <h3 className="text-2xl font-bold mb-4">{getCategoryDisplayTitle(event.category)}</h3>
                        <p className="text-gray-600 mb-6">{event.description}</p>
                        <Button variant="outline" className="w-full">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-600">No campus events available at the moment.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <div className="bg bg3" />

        {/* Campus Gallery */}
        <Suspense fallback={<LoadingSpinner />}>
          <ModernGallery />
        </Suspense>

        {/* CTA Section */}
        <section className="w-full py-24 my-10 bg-black text-white relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Begin Your Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to become part of our vibrant campus community? Take the
              first step towards your future today.
            </p>
            <div className="flex gap-6 justify-center">

            <Button
                onClick={handleApplyClick}
                className="bg-yellow-400 text-black px-24 py-8 font-bold text-lg hover:bg-yellow-500"
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
