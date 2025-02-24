import React from "react";

import { useNavigate } from "react-router-dom"; // For navigation

const DocumentsSection = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleStartApplication = () => {
    alert("Redirecting to the application form...");
    navigate("/application-form"); // Redirect to form page
  };

  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Simple & Fast Documentation Process
          </h2>
          <p className="text-gray-600 mt-2 md:text-lg">
            Complete your loan application in just three easy steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Fill Application",
              desc: "Complete the online application form with your basic details.",
            },
            {
              step: "2",
              title: "Upload Documents",
              desc: "Submit required documents online for verification.",
            },
            {
              step: "3",
              title: "Get Approval",
              desc: "Receive loan approval and disbursement within 24 hours*.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition hover:shadow-xl"
            >
              <div className="h-14 w-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-base">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleStartApplication}
            className="bg-blue-600 text-white px-8 py-3 text-lg rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md"
          >
            Start Your Application
          </button>
          <p className="mt-4 text-sm text-gray-500">*Terms and conditions apply</p>
        </div>
      </div>
    </div>
  );
};

export default DocumentsSection;
