import React, { useState } from "react";
import { CheckCircle } from "lucide-react";

const EligibilityChecker = () => {
  const [income, setIncome] = useState("");
  const [age, setAge] = useState("");
  const [employment, setEmployment] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  const checkEligibility = () => {
    if (!income || !age || !employment || !city) {
      setMessage("Please fill in all the details.");
      return;
    }

    if (parseInt(age) < 21 || parseInt(age) > 60) {
      setMessage("You must be between 21 and 60 years old.");
      return;
    }

    if (parseInt(income) < 25000) {
      setMessage("Minimum monthly income required is ₹25,000.");
      return;
    }

    if (employment === "Select employment type") {
      setMessage("Please select a valid employment type.");
      return;
    }

    setMessage("Congratulations! You are eligible for the loan.");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Check Your Eligibility
        </h2>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-700 text-sm">Monthly Income (₹)</label>
            <input
              type="number"
              placeholder="Enter your monthly income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">Employment Type</label>
            <select
              value={employment}
              onChange={(e) => setEmployment(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Select employment type</option>
              <option>Salaried</option>
              <option>Self-employed</option>
              <option>Business Owner</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 text-sm">Age</label>
            <input
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-700 text-sm">City</label>
            <input
              type="text"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Button */}
        <button
          onClick={checkEligibility}
          className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Check Eligibility
        </button>

        {/* Alert Box */}
        {message && (
          <div
            className={`mt-4 p-3 text-white font-semibold rounded-lg text-center ${
              message.includes("Congratulations")
                ? "bg-green-500"
                : "bg-red-500"
            }`}
          >
            {message}
          </div>
        )}

        {/* Eligibility Criteria */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-lg font-semibold mb-3">Basic Eligibility Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            {[
              "Age: 21-60 years",
              "Min. Monthly Income: ₹25,000",
              "Employment: Salaried/Self-employed",
              "Credit Score: 700+",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EligibilityChecker;
