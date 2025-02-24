import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-700 text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-blue-400"
          >
            ABC Finance
          </motion.div>

          {/* Desktop Menu */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center space-x-8"
          >
            <a href="#" className="hover:text-blue-400 transition-colors">Personal Loan</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Business Loan</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Home Loan</a>
            <a href="tel:+91 704-977-6747" className="flex items-center hover:text-blue-400 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>+91 704-977-6747</span> 
            </a>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/apply')} // Navigate to Form Page
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            >
              Apply Now
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-800"
          >
            <div className="px-4 py-4 space-y-3">
              <a href="#" className="block text-white hover:text-blue-400 transition-colors">Personal Loan</a>
              <a href="#" className="block text-white hover:text-blue-400 transition-colors">Business Loan</a>
              <a href="#" className="block text-white hover:text-blue-400 transition-colors">Home Loan</a>
              <a href="tel:1800-123-4567" className="flex items-center text-white hover:text-blue-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>1800-123-4567</span>
              </a>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setIsOpen(false); // Close menu
                  navigate('/apply'); // Navigate to Form Page
                }}
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
