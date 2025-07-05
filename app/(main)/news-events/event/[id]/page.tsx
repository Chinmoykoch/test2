"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { CampusEvent } from "../../../../../utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const EventDetailPage = () => {
  const params = useParams();
  const eventId = params.id as string;
  
  const [event, setEvent] = useState<CampusEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEventDetail = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`https://backend-rakj.onrender.com/api/v1/campusevent/getcampusevents`);
        const data = await response.json();
        
        if (data.success) {
          const allEvents = data.data;
          const foundEvent = allEvents.find((item: CampusEvent) => item._id === eventId);
          
          if (foundEvent) {
            setEvent(foundEvent);
          } else {
            setError("Event not found");
          }
        } else {
          setError("Failed to fetch event");
        }
      } catch (error) {
        console.error("Error fetching event detail:", error);
        setError("Failed to load event");
      } finally {
        setLoading(false);
      }
    };

    if (eventId) {
      fetchEventDetail();
    }
  }, [eventId]);

  if (loading) {
    return (
      <div className={`min-h-screen bg-white ${poppins.className}`}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className={`min-h-screen bg-white ${poppins.className}`}>
        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">{error || "The requested event could not be found."}</p>
          <Link 
            href="/news-events"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const getCategoryDisplay = (category: string) => {
    switch (category) {
      case 'arts-culture':
        return 'Arts & Culture';
      case 'sports-recreation':
        return 'Sports & Recreation';
      case 'organizations':
        return 'Organizations';
      default:
        return category;
    }
  };

  // Generate realistic date/time
  const publishedDate = new Date(2024, 6, 15, 14, 30); // July 15, 2024, 2:30 PM
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link 
            href="/news-events"
            className="text-gray-600 hover:text-gray-900 text-sm font-medium"
          >
            ← Back to Events
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <article>
        {/* Featured Image - Full Width */}
        <figure className="w-full">
          <div className="relative h-64 md:h-96 bg-gray-100 overflow-hidden">
            <Image
              src={event.image || "/images/gallery/1721738128651.jpg"}
              alt={event.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </figure>

        {/* Article Header */}
        <header className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="mb-4">
                <Link 
                  href={`/events/category/${event.category}`}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium uppercase tracking-wide"
                >
                  {getCategoryDisplay(event.category)}
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {event.title}
              </h1>
            </div>
            
            <div className="text-gray-500 text-sm text-right ml-8 mt-4">
              <time dateTime={publishedDate.toISOString()}>
                {formatDate(publishedDate)} at {formatTime(publishedDate)}
              </time>
              <span className="block mt-1">Campus Events</span>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8 font-light">
              {event.description}
            </p>

            <div className="bg-gray-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                About {getCategoryDisplay(event.category)} Events
              </h3>
              
              {event.category === 'arts-culture' && (
                <p className="text-gray-700 leading-relaxed">
                  Our Arts & Culture events showcase the vibrant creative community on campus. From 
                  student exhibitions to professional performances, these events celebrate artistic 
                  expression and cultural diversity. Students, faculty, and community members come 
                  together to explore new perspectives and engage with contemporary and traditional 
                  art forms.
                </p>
              )}
              
              {event.category === 'sports-recreation' && (
                <p className="text-gray-700 leading-relaxed">
                  Sports & Recreation events promote physical wellness, team building, and healthy 
                  competition within our campus community. These activities range from intramural 
                  tournaments to fitness workshops, encouraging students to stay active while building 
                  lasting friendships and developing leadership skills through athletic participation.
                </p>
              )}
              
              {event.category === 'organizations' && (
                <p className="text-gray-700 leading-relaxed">
                  Organization events provide valuable opportunities for professional development, 
                  networking, and skill building. These gatherings connect students with industry 
                  professionals, alumni, and peers, fostering career growth and creating pathways 
                  for future success in various fields and industries.
                </p>
              )}
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Category</h4>
                  <p className="text-gray-700">{getCategoryDisplay(event.category)}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Event Order</h4>
                  <p className="text-gray-700">#{event.order}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Target Audience</h4>
                  <p className="text-gray-700">Students, Faculty & Staff</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Event Type</h4>
                  <p className="text-gray-700">Campus Event</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
              {getCategoryDisplay(event.category)}
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              Campus Event
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
              Order #{event.order}
            </span>
          </div>
        </div>
      </article>
    </div>
  );
};

export default EventDetailPage;