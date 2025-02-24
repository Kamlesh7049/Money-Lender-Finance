import React from "react";
import { Facebook, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <h2 className="text-xl font-semibold text-white">ABC Finance</h2>
            <p className="mt-2 text-sm">
              Your trusted partner for Personal, Business, and Home Loans.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-white">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Personal Loan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Business Loan</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home Loan</a></li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-white">Contact Us</h2>
            <ul className="mt-2 space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+91 704-977-6747" className="hover:text-blue-400">+91 704-977-6747</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kamleshprasadshah56@gmail.com" className="hover:text-blue-400">kamleshprasadshah56@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-400"><Facebook /></a>
          <a href="#" className="hover:text-blue-400"><Twitter /></a>
          <a href="#" className="hover:text-blue-400"><Linkedin /></a>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 text-center text-sm">
          © {new Date().getFullYear()} ABC Finance. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
