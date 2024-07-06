import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className={`p-3 ${isDarkMode ? "bg-gray-800" : "bg-blue-900"}`}>
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0  text-white mr-6">
          <Link to="/" className="flex items-center no-underline">
            <span className=" font-semibold text-white text-xl ">
              Helping Hands
            </span>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400 mt-2"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-500  ${
            isOpen ? "max-h-screen" : "max-h-0"
          } overflow-hidden lg:max-h-full`}
        >
          <div className="links text-sm lg:flex-grow">
            <Link
              to="/"
              className="block no-underline mt-1 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block  no-underline  mt-1 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block  no-underline  mt-1 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Contact
            </Link>
          </div>
          <div className="flex lg:flex items-center mt-2 lg:mt-0">
            <button className="bg-blue-500  px-2 py-1 rounded-lg hover:bg-blue-600 mr-2">
              <Link
                to="/login"
                className="block lg:inline-block  no-underline  text-white hover:text-gray-400"
              >
                Log In
              </Link>
            </button>
            <button className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-600 mr-2">
              <Link
                to="/sign-up"
                className="block lg:inline-block  no-underline  text-white hover:text-gray-400"
              >
                Sign Up
              </Link>
            </button>
            <button
              onClick={toggleDarkMode}
              className="bg-gray-300 px-2 py-1 rounded-lg dark:bg-gray-700 "
            >
              {isDarkMode ? (
                <FiSun className="text-black" />
              ) : (
                <FiMoon className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
