"use client";
import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ThankYouPage = () => {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b my-16 from-white  to-gray-50 flex items-center justify-center p-4 ${poppins.className}`}
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-black  md:p-12">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 animate-bounce">
              <CheckCircle size={48} className="text-green-500" />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Submitted Successfully!
          </h1>

          <div className="space-y-4 mb-8">
            <p className="text-lg text-gray-600">
              {`Thank you for choosing to apply with us. We're excited to review your application!`}
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-gray-600">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="space-y-2 text-left list-disc pl-4">
                <li>{`You'll receive a confirmation email within the next few minutes`}</li>
                <li>
                  Our admissions team will review your application within 2-3
                  business days
                </li>
                <li>{`We'll schedule an interview if required for your chosen program`}</li>
              </ul>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = "/landingpage")}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6"
            >
              Return to Homepage
            </Button>
          </div>

          {/* Contact Information */}
          <div className="mt-8 text-sm text-gray-500">
            <p>Have questions? Contact our admissions team:</p>
            <p className="font-medium">
              info@inframeschool.com | +91 9649 9649 37
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
