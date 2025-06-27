"use client";

import React from "react";
import IndustryPartnerManagement from "../../components/IndustryPartnerManagement";
import IndustryPartners from "../../components/Courses/Partners";

const TestIndustryPartnersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Industry Partners Backend Integration Test</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Management Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Management Interface</h2>
            <p className="text-gray-600 mb-4">
              Use this interface to add, edit, and delete industry partners. Changes will be reflected in the display section below.
            </p>
            <IndustryPartnerManagement />
          </div>

          {/* Display Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Display Component</h2>
            <p className="text-gray-600 mb-4">
              This shows how the industry partners will appear on the actual website.
            </p>
            <IndustryPartners />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Integration Status</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>✅ API endpoints configured</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>✅ TypeScript interfaces defined</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>✅ Helper functions implemented</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>✅ Custom hook created</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>✅ Components updated to use backend data</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span>✅ Management interface created</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestIndustryPartnersPage; 