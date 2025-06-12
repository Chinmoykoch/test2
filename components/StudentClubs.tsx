"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { apiHelpers, StudentClub } from "@/utils/api";

const StudentClubs = () => {
  const [clubs, setClubs] = useState<StudentClub[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudentClubs = async () => {
      try {
        setLoading(true);
        setError(null);
        const clubsData = await apiHelpers.getStudentClubs();
        // Sort clubs by order field
        const sortedClubs = clubsData.sort((a, b) => a.order - b.order);
        setClubs(sortedClubs);
      } catch (err) {
        console.error('Failed to fetch student clubs:', err);
        setError('Failed to load student clubs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchStudentClubs();
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Student Clubs & Societies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover your passion and connect with like-minded individuals
            through our diverse range of student clubs. Each club offers unique
            opportunities for personal growth, leadership development, and
            unforgettable experiences.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Clubs List */}
        {!loading && !error && (
          <div className="space-y-12">
            {clubs.length > 0 ? (
              clubs.map((club, index) => (
                <motion.div
                  key={club._id}
                  className="bg-white overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Text Content */}
                    <div className="flex-1 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {club.name}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold capitalize">
                          {club.category}
                        </span>
                      </div>

                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {club.description}
                      </p>
                    </div>

                    {/* Image */}
                    <div className="md:w-2/5">
                      <Image
                        src={club.image}
                        alt={club.name}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600">No student clubs available at the moment.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentClubs;
