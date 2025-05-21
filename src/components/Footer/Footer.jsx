import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand Info Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-bold text-pink-600 mb-3">Zeetem</h2>
          <p className="max-w-xs">
            Slay to Perfection — Where Beauty Meets Confidence.
          </p>
        </div>

        {/* Navigation Links Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <li><Link to="/" className="hover:text-pink-600 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-pink-600 transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-pink-600 transition">About</Link></li>
            <li><Link to="/booking" className="hover:text-pink-600 transition">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-pink-600 transition">Contact</Link></li>
            {/* ✅ New Links */}
            <li><Link to="/terms" className="hover:text-pink-600 transition">Terms</Link></li>
            <li><Link to="/policy" className="hover:text-pink-600 transition">Policy</Link></li>
          </ul>
        </div>

        {/* Social Media Widget */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
          <div className="flex gap-6 text-2xl text-pink-600 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/zee_tem?igsh=MW90YTF3azF1ZWE2ZQ=="
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/message/KPFDC3IAQC2YN1"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition"
              aria-label="Whatsapp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:zeetem2000@gmail.com"
              className="hover:text-pink-500 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Zeetem. All rights reserved.
      </div>
    </footer>
  );
}
