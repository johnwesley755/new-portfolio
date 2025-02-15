import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
    );
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="absolute w-full shadow-lg z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold text-white tracking-wide">
        John<span className="text-yellow-300"> Wesley</span>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-item text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://github.com/johnwesley755"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/john-wesley-6707ab258/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-yellow-300 text-2xl transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl text-white"
            onClick={toggleSidebar}
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-gradient-to-tl from-black via-gray-800 to-black text-white shadow-2xl z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 w-64`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-purple-600">
          <h1 className="text-2xl font-bold">Menu</h1>
          <button className="text-3xl" onClick={toggleSidebar}>
            <FiX />
          </button>
        </div>

        {/* Sidebar Links */}
        <ul className="mt-8 space-y-6 px-6">
          {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={toggleSidebar}
                className="block text-lg hover:text-yellow-300 font-medium transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Sidebar Footer */}
        <div className="absolute bottom-8 left-6 flex items-center gap-4">
          <a
            href="https://github.com/johnwesley755"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/john-wesley-6707ab258/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Navbar;
