"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { Button, Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import ApplyNowForm from "./ApplyNowForm";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// Event & News Types
interface EventItem {
  id: number;
  title: string;
  category: "art" | "design" | "business" | "general";
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  featured?: boolean;
}

interface NewsItem {
  id: number;
  title: string;
  category: "art" | "design" | "business" | "general";
  summary: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

const NewsAndEventsPage = () => {
  // Sample data - in a real application, this would come from an API
  const events: EventItem[] = [
    {
      id: 1,
      title: "Annual Design Exhibition 2025",
      category: "design",
      description:
        "Showcasing the innovative works of our final year design students, exploring sustainable solutions for everyday challenges.",
      date: "May 15, 2025",
      time: "10:00 AM - 6:00 PM",
      location: "Campus Gallery Hall",
      image:
        "https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Business Innovation Summit",
      category: "business",
      description:
        "Connect with industry leaders and explore emerging trends in entrepreneurship and business development.",
      date: "June 3, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Contemporary Art Workshop Series",
      category: "art",
      description:
        "A hands-on workshop series led by renowned contemporary artists exploring new mediums and techniques.",
      date: "May 22-24, 2025",
      time: "1:00 PM - 4:00 PM",
      location: "Studio B, Art Building",
      image:
        "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "UX Research Masterclass",
      category: "design",
      description:
        "Learn advanced user research methodologies from industry experts to enhance your design process.",
      date: "June 10, 2025",
      time: "10:00 AM - 3:00 PM",
      location: "Design Lab",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Investment Strategies Seminar",
      category: "business",
      description:
        "Expert financial advisors share insights on investment opportunities in the creative industries.",
      date: "June 15, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Business School Auditorium",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Alumni Meet & Greet",
      category: "general",
      description:
        "Connect with successful alumni from various fields and expand your professional network.",
      date: "July 5, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Campus Central Square",
      image:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  const news: NewsItem[] = [
    {
      id: 1,
      title: "School of Design Wins National Creative Excellence Award",
      category: "design",
      summary:
        "Our design department has been recognized for outstanding contributions to sustainable design practices and innovation in education.",
      date: "April 20, 2025",
      author: "Communications Team",
      image:
        "https://images.unsplash.com/photo-1561489401-fc2876ced162?q=80&w=2070&auto=format&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "New Business Analytics Program Launching Fall 2025",
      category: "business",
      summary:
        "Responding to industry demands, our business school introduces a specialized program in creative industry analytics.",
      date: "April 15, 2025",
      author: "Academic Affairs",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Student Art Installation Featured in City Museum",
      category: "art",
      summary:
        "Three senior art students' collaborative work has been selected for permanent display at the National Contemporary Art Museum.",
      date: "April 12, 2025",
      author: "Arts Department",
      image:
        "https://images.unsplash.com/photo-1594749794743-c23c6dadde5a?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Faculty Research on Sustainable Design Practices Published",
      category: "design",
      summary:
        "Professor Michaels' groundbreaking research on eco-friendly materials has been published in the International Design Journal.",
      date: "April 8, 2025",
      author: "Research Office",
      image:
        "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Entrepreneurship Fund Grants $1M to Student Startups",
      category: "business",
      summary:
        "Ten innovative student business ventures receive funding to develop their concepts into market-ready products and services.",
      date: "April 5, 2025",
      author: "Business Development Center",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Campus Expansion Project Breaks Ground",
      category: "general",
      summary:
        "Construction begins on the new Creative Technologies Center that will house state-of-the-art facilities for all departments.",
      date: "April 1, 2025",
      author: "Facilities Management",
      image:
        "https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2071&auto=format&fit=crop",
    },
  ];

  // State management
  const [, setActiveTab] = useState(0);
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filteredNews, setFilteredNews] = useState(news);
  // const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Categories for filtering
  // const categories = [
  //   { id: "all", name: "All" },
  //   { id: "art", name: "Art" },
  //   { id: "design", name: "Design" },
  //   { id: "business", name: "Business" },
  //   { id: "general", name: "General" }
  // ];

  // Filter logic
  useEffect(() => {
    const filterItems = () => {
      // Filter events
      const eventResults = events.filter((event) => {
        // const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
        const matchesSearch =
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
      });
      setFilteredEvents(eventResults);

      // Filter news
      const newsResults = news.filter((item) => {
        // const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        const matchesSearch =
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.summary.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesSearch;
      });
      setFilteredNews(newsResults);
    };

    filterItems();
  }, [searchTerm]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const handleApplyClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsFormOpen(true);
  };
  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      {/* Hero Section */}
      <div className="relative py-28 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?q=80&w=2071&auto=format&fit=crop"
            alt="Design School Background"
            className="w-full h-full object-cover"
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

            {/* <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0">
              <Filter className="text-gray-500 h-4 w-4" />
              <span className="text-sm font-medium text-gray-700">Filter:</span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? "bg-yellow-400 text-black font-medium"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div> */}
          </div>
        </div>
      </div>
      <div className="text-black-300 text-lg leading-relaxed max-w-8xl mt-10 mx-8 text-justify font-light">
        The Inframe School of Art, Design, and Business is a vibrant hub of
        creativity and innovation, hosting a diverse array of events throughout
        the year. From cutting-edge exhibitions showcasing student and faculty
        work to industry-led workshops connecting our community with leading
        professionals, there`s always something inspiring happening on campus.
        Our lecture series brings renowned artists, designers, and business
        leaders to share their insights and experiences, while our annual
        festivals celebrate the intersection of creativity and entrepreneurship.
        Whether you`re interested in our upcoming gallery openings, professional
        development seminars, or collaborative projects with community partners,
        this page will keep you informed about all the exciting opportunities to
        engage with our dynamic community. Check back regularly for updates on
        exhibition dates, workshop registration, guest speaker announcements,
        and student showcases.
      </div>
      <div className="relative w-full mt-5 h-[300px] overflow-hidden">
  <img
    src="/images/gallery/1721738128651.jpg"
    alt="Design School Background"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
    <h1 className="text-white text-3xl sm:text-4xl font-bold">Explore the Events</h1>
  </div>
</div>


      {/* Tabs Section */}
      <div className="container mx-auto px-4 py-12">
        <Tab.Group onChange={setActiveTab} defaultIndex={0}>
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
              Upcoming
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
              Recent
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
              Featured
            </Tab>
          </Tab.List>

          <Tab.Panels>
            {/* All Tab - Combined Events and News */}
            <Tab.Panel>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {/* All Events */}
                {filteredEvents.map((event) => (
                  <motion.div
                    key={`event-${event.id}`}
                    variants={itemVariants}
                    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="relative h-48">
                      <Image
                        src={event.image}
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
                            event.category === "art"
                              ? "bg-pink-100 text-pink-800"
                              : event.category === "design"
                                ? "bg-blue-100 text-blue-800"
                                : event.category === "business"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-y-1 gap-x-4 text-gray-500 text-sm mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{event.time}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {event.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-500">
                          {event.location}
                        </span>
                        <Link
                          href={""}
                          className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* All News */}
                {filteredNews.map((item) => (
                  <motion.div
                    key={`news-${item.id}`}
                    variants={itemVariants}
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
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded capitalize ${
                            item.category === "art"
                              ? "bg-pink-100 text-pink-800"
                              : item.category === "design"
                                ? "bg-blue-100 text-blue-800"
                                : item.category === "business"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm mb-3">
                        <div className="flex items-center text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <span className="text-xs text-gray-500">
                          By {item.author}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {item.summary}
                      </p>
                      <Link
                        href={""}
                        className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </Tab.Panel>

            {/* Upcoming Tab - Events only */}
            <Tab.Panel>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event) => (
                    <motion.div
                      key={event.id}
                      variants={itemVariants}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="relative h-48">
                        <Image
                          src={event.image}
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
                              event.category === "art"
                                ? "bg-pink-100 text-pink-800"
                                : event.category === "design"
                                  ? "bg-blue-100 text-blue-800"
                                  : event.category === "business"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {event.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex flex-wrap gap-y-1 gap-x-4 text-gray-500 text-sm mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {event.location}
                          </span>
                          <Link
                            href={""}
                            className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                          >
                            View Details
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-3 py-16 text-center">
                    <p className="text-gray-500">
                      No events found matching your criteria.
                    </p>
                  </div>
                )}
              </motion.div>
            </Tab.Panel>

            {/* Recent Tab - News only */}
            <Tab.Panel>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {filteredNews.length > 0 ? (
                  filteredNews.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={itemVariants}
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
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded capitalize ${
                              item.category === "art"
                                ? "bg-pink-100 text-pink-800"
                                : item.category === "design"
                                  ? "bg-blue-100 text-blue-800"
                                  : item.category === "business"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {item.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm mb-3">
                          <div className="flex items-center text-gray-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{item.date}</span>
                          </div>
                          <span className="text-xs text-gray-500">
                            By {item.author}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {item.summary}
                        </p>
                        <Link
                          href={""}
                          className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-3 py-16 text-center">
                    <p className="text-gray-500">
                      No news found matching your criteria.
                    </p>
                  </div>
                )}
              </motion.div>
            </Tab.Panel>

            {/* Featured Tab - Featured content from both categories */}
            <Tab.Panel>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="show"
              >
                {/* Featured Events */}
                {filteredEvents
                  .filter((event) => event.featured)
                  .map((event) => (
                    <motion.div
                      key={`event-${event.id}`}
                      variants={itemVariants}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="relative h-48">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-yellow-400 text-black text-xs font-medium px-2 py-1 rounded">
                            EVENT
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{event.date}</span>
                          <Clock className="h-4 w-4 mx-1 ml-3" />
                          <span>{event.time}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {event.description}
                        </p>
                        <Link
                          href={""}
                          className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}

                {/* Featured News */}
                {filteredNews
                  .filter((item) => item.featured)
                  .map((item) => (
                    <motion.div
                      key={`news-${item.id}`}
                      variants={itemVariants}
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
                        <div className="absolute top-4 left-4">
                          <span className="bg-black text-yellow-400 text-xs font-medium px-2 py-1 rounded">
                            NEWS
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-gray-500 text-sm mb-2">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {item.summary}
                        </p>
                        <Link
                          href={""}
                          className="inline-flex items-center text-sm font-medium text-black bg-transparent hover:bg-yellow-400 border border-yellow-400 py-2 px-4 rounded-md transition-all duration-300 group"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </motion.div>
                  ))}
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="w-full  bg-opacity-90 py-16 px-6 md:px-12">
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
                need to thrive in today’s design landscape.
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
