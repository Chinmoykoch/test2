import React from "react";
import { Poppins } from "next/font/google"; // Import Google Fonts via next/font
import {
  FaHandshake,
  FaUserGraduate,
  FaStar,
  FaLaptop,
  FaRegMoneyBillAlt,
  FaClock,
} from "react-icons/fa";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Including various font weights
});

const WhyInframe = () => {
  const features = [
    {
      title: "Guaranteed",
      description: "100% Written Guaranteed Placement",
      icon: <FaStar size={40} />,
    },
    {
      title: "Highest Placement",
      description: "100% Placement from Inframe from Jodhpur",
      icon: <FaUserGraduate size={40} />,
    },
    {
      title: "Celebrity Tie-Ups",
      description: "Best Mentorship",
      icon: <FaHandshake size={40} />,
    },
    {
      title: "Internship",
      description: "Industry tie-ups for Best Internship",
      icon: <FaLaptop size={40} />,
    },
    {
      title: "Up to 100% Scholarship",
      description: "Scholarship for all students",
      icon: <FaRegMoneyBillAlt size={40} />,
    },
    {
      title: "Flexible Class Timings",
      description: "Timings for Classes are Flexible as per choice",
      icon: <FaClock size={40} />,
    },
  ];

  return (
    <section className="why-choose-us grybg py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-start">
            <h6 className={`text-xl text-gray-600 mb-2 ${poppins.className}`}>
              Transparent Process
            </h6>
            <h2 className={`text-4xl font-bold mb-4 ${poppins.className}`}>
              Why People Choose Us
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-sans">
              At Inframe, we are committed to providing a transformative
              learning experience that blends industry expertise with hands-on
              opportunities. Our comprehensive approach ensures that students
              not only receive the best education but also gain the real-world
              experience needed to thrive in a competitive market.
            </p>
            <div className="relative">
              <Image
                src="/images/gallery/1721366034581.jpg"
                alt="Why Choose Us"
                width={500} // Adjust width accordingly
                height={300} // Adjust height accordingly
                className="rounded-lg p-8 shadow-lg"
              />
              <a
                href="#"
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-500 text-6xl"
              >
                <i className="fas fa-play-circle"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white text-center p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ${poppins.className}`}
              >
                <div className="text-yellow-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyInframe;
