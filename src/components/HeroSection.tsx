import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface QuickEnquiryForm {
  name: string;
  mobile: string;
  email: string;
  city: string;
}

const HeroSection = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<QuickEnquiryForm>();

  const onSubmit = (data: QuickEnquiryForm) => {
    console.log("Form Submitted: ", data);
    alert("Your enquiry has been submitted successfully!");
  };

  return (
    <div className="pt-16 bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quick Personal Loans for Your Every Need
            </h1>
            <p className="text-lg mb-8">
              Get instant personal loans up to ₹25 Lakhs with minimal documentation and quick approval.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                ✅ Interest rates starting at 10.49%* p.a.
              </li>
              <li className="flex items-center">
                ✅ Flexible tenure up to 60 months
              </li>
              <li className="flex items-center">
                ✅ Quick disbursement within 24 hours*
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white text-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Quick Enquiry</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

              <input
                type="tel"
                placeholder="Mobile Number"
                {...register("mobile", { 
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Please enter a valid 10-digit mobile number"
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>}

              <input
                type="email"
                placeholder="Email Address"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

              <input
                type="text"
                placeholder="City"
                {...register("city", { required: "City is required" })}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Call Back
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
