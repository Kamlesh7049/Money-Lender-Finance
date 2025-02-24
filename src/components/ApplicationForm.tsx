import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    loanAmount: "",
    aadharNumber: "",
    panCardNumber: "",
    dateOfBirth: "",
    officialGmail: "",
    pincode: "",
    currentAddress: "",
    permanentAddress: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 p-6">
      <div className="bg-white bg-opacity-20 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-lg w-full border border-white border-opacity-30">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Loan Application</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-white text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full mt-1 px-4 py-2 bg-transparent border border-white border-opacity-40 rounded-lg text-white focus:ring-2 focus:ring-white outline-none placeholder-gray-200"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="text-white text-sm">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 bg-transparent border border-white border-opacity-40 rounded-lg text-white focus:ring-2 focus:ring-white outline-none placeholder-gray-200"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-white text-sm">Personal Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 bg-transparent border border-white border-opacity-40 rounded-lg text-white focus:ring-2 focus:ring-white outline-none placeholder-gray-200"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-white text-sm">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Enter your phone number"
              className="w-full mt-1 px-4 py-2 bg-transparent border border-white border-opacity-40 rounded-lg text-white focus:ring-2 focus:ring-white outline-none placeholder-gray-200"
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="text-white text-sm">Loan Amount (₹)</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
              placeholder="Enter loan amount"
              className="w-full mt-1 px-4 py-2 bg-transparent border border-white border-opacity-40 rounded-lg text-white focus:ring-2 focus:ring-white outline-none placeholder-gray-200"
            />
          </div>

          {/* Current Address */}
          <div>
            <label className="text-white text-sm">Current Address</label>
            <textarea
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              required
              placeholder="Enter your current address"
              className="w-full mt-1 px-4 py-2 bg-transparent border border-white border-opacity-40 rounded-lg text-white focus:ring-2 focus:ring-white outline-none placeholder-gray-200 resize-none"
              rows="2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-4 py-3 bg-white text-blue-700 font-bold rounded-lg text-lg hover:bg-blue-700 hover:text-white transition duration-300 shadow-md"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
