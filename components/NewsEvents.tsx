"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import { Search, Calendar, Clock, ArrowRight, FileText, CalendarDays, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Poppins } from "next/font/google";
import ApplyNowForm from "./ApplyNowForm";
import { useNews, useCampusEvents, NewsItem, CampusEvent } from "../utils/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NewsAndEventsPage = () => {
  // State management
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from backend
  const { news, loading: newsLoading, error: newsError } = useNews();
  const { events, loading: eventsLoading, error: eventsError } = useCampusEvents();

  // Loading and error states
  const isLoading = newsLoading || eventsLoading;
  const hasError = newsError || eventsError;

  // Filter logic using useMemo instead of useEffect
  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm, events]);

  const filteredNews = useMemo(() => {
    return news.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm, news]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };

  // Empty state component
  const EmptyState = ({ type, searchTerm }: { type: 'news' | 'events' | 'all', searchTerm: string }) => (
    <div className="col-span-full py-16 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          {type === 'news' ? (
            <FileText className="w-8 h-8 text-gray-400" />
          ) : type === 'events' ? (
            <CalendarDays className="w-8 h-8 text-gray-400" />
          ) : (
            <AlertCircle className="w-8 h-8 text-gray-400" />
          )}
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {searchTerm ? 'No results found' : `No ${type === 'all' ? 'content' : type} available`}
        </h3>
        <p className="text-gray-500 mb-4">
          {searchTerm 
            ? `No ${type === 'all' ? 'news or events' : type} found matching "${searchTerm}". Try adjusting your search terms.`
            : `There are currently no ${type === 'all' ? 'news articles or events' : type} to display. Check back soon for updates!`
          }
        </p>
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="inline-flex items-center text-sm font-medium text-yellow-600 hover:text-yellow-700"
          >
            Clear search
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      {/* Hero Section */}
      <div className="relative py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2071&auto=format&fit=crop"
            alt="Design School Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTMwIDMwaDMwVjBoLTMwdjMwek0wIDMwaDMwdjMwSDBWMzB6IiBmaWxsPSIjMjEyMTIxIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

          {/* Accent line */}
          <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-20"></div>
        </div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="flex flex-col max-w-5xl">
            {/* Section indicator */}
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-yellow-400"
                >
                  <path d="M16.881 4.346A23.112 23.112 0 018.25 6H7.5a5.25 5.25 0 00-.88 10.427 21.593 21.593 0 001.378 3.94c.464 1.004 1.674 1.32 2.582.796l.657-.379c.88-.508 1.165-1.592.772-2.468a17.116 17.116 0 01-.628-1.607c1.918.258 3.76.75 5.5 1.446A21.727 21.727 0 0018 11.25c0-2.413-.393-4.735-1.119-6.904zM18.26 3.74a23.22 23.22 0 011.24 7.51 23.22 23.22 0 01-1.24 7.51c-.055.161-.111.322-.17.482a.75.75 0 101.409.516 24.555 24.555 0 001.415-6.43 2.992 2.992 0 00.836-2.078c0-.806-.319-1.54-.836-2.078a24.65 24.65 0 00-1.415-6.43.75.75 0 10-1.409.516c.059.16.115.321.17.483z" />
                </svg>
              </div>
              <span className="text-yellow-400 uppercase tracking-wider font-medium text-sm">
                Latest Updates
              </span>
            </div>

            {/* Main heading with animated typing effect style */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              News &{" "}
              <span className="text-yellow-400 relative">
                Events
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400 transform scale-x-100 origin-left"></span>
              </span>
            </h1>

            {/* Description with better typography */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-8">
              Discover the latest happenings, exhibitions, workshops, and
              announcements from the School of Art, Design, and Business.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search news and events..."
                className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-black-300 text-lg leading-relaxed max-w-8xl mt-10 mx-8 text-justify font-light">
        The Inframe School of Art, Design, and Business is a vibrant hub of
        creativity and innovation, hosting a diverse array of events throughout
        the year. From cutting-edge exhibitions showcasing student and faculty
        work to industry-led workshops connecting our community with leading
        professionals, there&apos;s always something inspiring happening on campus.
        Our lecture series brings renowned artists, designers, and business
        leaders to share their insights and experiences, while our annual
        festivals celebrate the intersection of creativity and entrepreneurship.
        Whether you&apos;re interested in our upcoming gallery openings, professional
        development seminars, or collaborative projects with community partners,
        this page will keep you informed about all the exciting opportunities to
        engage with our dynamic community. Check back regularly for updates on
        exhibition dates, workshop registration, guest speaker announcements,
        and student showcases.
      </div>

      <div className="relative w-full mt-5 h-[300px] overflow-hidden">
        <Image
          src="/images/gallery/1721738128651.jpg"
          alt="Design School Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">Explore the Events</h1>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading news and events...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div className="container mx-auto px-4 py-12">
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Error loading content</h3>
            <p className="text-red-600 mb-4">{newsError || eventsError}</p>
            <p className="text-gray-600">Please try again later</p>
          </div>
        </div>
      )}

      {/* Content Section */}
      {!isLoading && !hasError && (
        <div className="container mx-auto px-4 py-12">
          <Tab.Group>
            <Tab.List className="flex space-x-4 border-b border-gray-200 mb-8">
              <Tab
                className={({ selected }) =>
                  `px-6 py-3 text-sm font-medium border-b-2 outline-none transition-colors ${
                    selected
                      ? "text-black border-yellow-400"
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }`
                }
              >
                All
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-6 py-3 text-sm font-medium border-b-2 outline-none transition-colors ${
                    selected
                      ? "text-black border-yellow-400"
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }`
                }
              >
                News
              </Tab>
              <Tab
                className={({ selected }) =>
                  `px-6 py-3 text-sm font-medium border-b-2 outline-none transition-colors ${
                    selected
                      ? "text-black border-yellow-400"
                      : "text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300"
                  }`
                }
              >
                Events
              </Tab>
            </Tab.List>

            <Tab.Panels>
              {/* All Tab - Combined Events and News */}
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Check if both arrays are empty */}
                  {filteredEvents.length === 0 && filteredNews.length === 0 ? (
                    <EmptyState type="all" searchTerm={searchTerm} />
                  ) : (
                    <>
                      {/* Events */}
                      {filteredEvents.length > 0 && filteredEvents.map((event: CampusEvent, index: number) => (
                        <div
                          key={event._id || index}
                          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                          <div className="relative h-48">
                            <Image
                              src={event.image || "/images/gallery/1721738128651.jpg"}
                              alt={event.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute top-4 left-4 flex space-x-2">
                              <span className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded">
                                EVENT
                              </span>
                              <span
                                className={`text-xs font-medium px-2 py-1 rounded capitalize ${
                                  event.category === "arts-culture"
                                    ? "bg-pink-100 text-pink-800"
                                    : event.category === "sports-recreation"
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-green-100 text-green-800"
                                }`}
                              >
                                {event.category.replace('-', ' ')}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                              {event.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {event.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">
                                Order: {event.order}
                              </span>
                              <Link
                                href={`/news-events/event/${event._id}`}
                                className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                              >
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}

                      {/* News */}
                      {filteredNews.length > 0 && filteredNews.map((item: NewsItem, index: number) => (
                        <div
                          key={item._id || index}
                          className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                          <div className="relative h-48">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <div className="absolute top-4 left-4 flex space-x-2">
                              <span className="bg-black text-yellow-400 text-xs font-medium px-2 py-1 rounded">
                                NEWS
                              </span>
                              <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-800">
                                {item.type}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex flex-wrap gap-y-1 gap-x-4 text-gray-500 text-sm mb-3">
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{item.date}</span>
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{item.time}</span>
                              </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {item.description}
                            </p>
                            <div className="flex justify-between items-center">
                              <div className="flex flex-wrap gap-1">
                                {item.tags.slice(0, 2).map((tag, tagIndex) => (
                                  <span key={tagIndex} className="text-xs bg-yellow-100 text-black px-2 py-1 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <Link
                                href={`/news-events/${item._id}`}
                                className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                              >
                                Read More
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Tab.Panel>

              {/* News Tab */}
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredNews.length > 0 ? (
                    filteredNews.map((item: NewsItem, index: number) => (
                      <div
                        key={item._id || index}
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="relative h-48">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute top-4 left-4 flex space-x-2">
                            <span className="bg-black text-yellow-400 text-xs font-medium px-2 py-1 rounded">
                              NEWS
                            </span>
                            <span className="text-xs font-medium px-2 py-1 rounded bg-gray-100 text-gray-800">
                              {item.type}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex flex-wrap gap-y-1 gap-x-4 text-gray-500 text-sm mb-3">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{item.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{item.time}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {item.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-1">
                              {item.tags.slice(0, 2).map((tag, tagIndex) => (
                                <span key={tagIndex} className="text-xs bg-yellow-100 text-black px-2 py-1 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <Link
                              href={`/news-events/${item._id}`}
                              className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                            >
                              Read More
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <EmptyState type="news" searchTerm={searchTerm} />
                  )}
                </div>
              </Tab.Panel>

              {/* Events Tab */}
              <Tab.Panel>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredEvents.length > 0 ? (
                    filteredEvents.map((event: CampusEvent, index: number) => (
                      <div
                        key={event._id || index}
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                      >
                        <div className="relative h-48">
                          <Image
                            src={event.image || "/images/gallery/1721738128651.jpg"}
                            alt={event.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                          <div className="absolute top-4 left-4 flex space-x-2">
                            <span className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded">
                              EVENT
                            </span>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded capitalize ${
                                event.category === "arts-culture"
                                  ? "bg-pink-100 text-pink-800"
                                  : event.category === "sports-recreation"
                                    ? "bg-blue-100 text-blue-800"
                                    : "bg-green-100 text-green-800"
                              }`}
                            >
                              {event.category.replace('-', ' ')}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {event.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-500">
                              Order: {event.order}
                            </span>
                            <Link
                              href={`/news-events/event/${event._id}`}
                              className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                            >
                              View Details
                              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <EmptyState type="events" searchTerm={searchTerm} />
                  )}
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      )}

      {/* CTA Section */}
      <div className="w-full bg-opacity-90 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-black bg-opacity-90 rounded-2xl shadow-2xl border border-zinc-800 px-6 md:px-12 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-white mb-6 leading-tight">
                Ready to Join Our Creative Community?
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto md:mx-0">
                Take the next step in your creative journey. Our programs offer
                hands-on experience, industry connections, and the skills you
                need to thrive in today&apos;s design landscape.
              </p>
            </div>

            {/* CTA Button */}
            <div className="w-full md:w-auto flex flex-col items-center space-y-3">
              <Button
                onClick={handleApplyClick}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-10 rounded-xl shadow-md transition transform hover:-translate-y-1 hover:shadow-lg w-full md:w-auto text-lg"
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
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black py-20">
        <div className="container mx-auto px-6">
          <div className="relative bg-zinc-900 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl border border-zinc-800">
            {/* Abstract geometric accent elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400 rounded-full opacity-5 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="absolute h-full w-1 bg-gradient-to-b from-yellow-400 via-yellow-500 to-transparent opacity-20 left-0 top-0 rounded-full"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Stay <span className="text-yellow-400">Connected</span>
                </h2>
                <p className="text-gray-300 text-lg">
                  Get exclusive updates on upcoming events, exhibitions, and
                  opportunities delivered straight to your inbox.
                </p>
              </div>

              <div className="w-full md:w-auto">
                <form className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-zinc-800 text-white border border-zinc-700 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent placeholder-gray-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-zinc-500 text-sm mt-3 text-center sm:text-left">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsAndEventsPage;
