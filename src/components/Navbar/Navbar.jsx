import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Menu, X } from "lucide-react"; // Added Menu and X icons
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu on link click (mobile)
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="shadow-md dark:bg-dark bg-white text-gray-800 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo + Zeetem text */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <span className="text-2xl font-bold select-none dark:text-white text-gray-900">Zeetem</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 font-medium text-sm">
          <li><Link to="/" className="hover:text-pink-500" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/services" className="hover:text-pink-500" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/about" className="hover:text-pink-500" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/booking" className="hover:text-pink-500" onClick={handleLinkClick}>Booking</Link></li>
          <li><Link to="/contact" className="hover:text-pink-500" onClick={handleLinkClick}>Contact</Link></li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger button */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-dark px-4 pb-4 space-y-4 font-medium text-sm text-gray-800 dark:text-white">
          <li><Link to="/" className="block hover:text-pink-500" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="/services" className="block hover:text-pink-500" onClick={handleLinkClick}>Services</Link></li>
          <li><Link to="/about" className="block hover:text-pink-500" onClick={handleLinkClick}>About</Link></li>
          <li><Link to="/booking" className="block hover:text-pink-500" onClick={handleLinkClick}>Booking</Link></li>
          <li><Link to="/contact" className="block hover:text-pink-500" onClick={handleLinkClick}>Contact</Link></li>
          <li>
            <button
              onClick={() => {
                toggleDarkMode();
                setMenuOpen(false); // Close menu after toggle
              }}
              className="w-full text-left p-2 rounded-md border border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <div className="flex items-center gap-2"><Sun size={18} /> Light Mode</div>
              ) : (
                <div className="flex items-center gap-2"><Moon size={18} /> Dark Mode</div>
              )}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
