"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { apiHelpers, Membership } from "@/utils/api";

const MembershipPartnership = () => {
  const [memberships, setMemberships] = useState<Membership[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        setLoading(true);
        setError(null);
        const membershipData = await apiHelpers.getMemberships();
        setMemberships(membershipData);
      } catch (err) {
        console.error('Failed to fetch memberships:', err);
        setError('Failed to load memberships. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMemberships();
  }, []);
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          Membership & Partnership
        </h2>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-600"></div>
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

        {/* Memberships Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-center">
            {memberships.length > 0 ? (
              memberships.map((membership) => (
                <div key={membership._id} className="flex justify-center items-center">
                  <Image
                    src={membership.src}
                    alt={membership.name}
                    width={230}
                    height={220}
                    className="transition-transform transform hover:scale-110 shadow-lg rounded-lg bg-white p-4 object-contain"
                  />
                </div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600">No memberships available at the moment.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MembershipPartnership;
