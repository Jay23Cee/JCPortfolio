import React, { useState } from 'react';
import '../App.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-gray-800">
      <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-gray-800">
        <h1 className="text-2xl font-semibold uppercase tracking-wide text-white">
          <a href="index.html">Jackson</a>
        </h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed top-0 left-0 lg:relative bg-gray-800 w-full lg:w-64 z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div
          className={`flex flex-col lg:flex-row justify-between items-start py-6 px-8 ${
            isOpen ? 'h-screen' : 'h-auto'
          }`}
        >
          <h1 className="lg:text-2xl font-semibold uppercase tracking-wide text-white">
            <a href="index.html">Jackson</a>
          </h1>
          <p className="mt-2 mb-4 text-sm text-white lg:hidden">
            Full Stack Developer
          </p>
          <nav className="lg:mt-0 px-8 flex flex-col lg:flex-row">
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white mb-2 lg:mb-0 lg:mr-2"
              href="#home"
              onClick={handleOptionClick}
            >
              Home
            </a>
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white mb-2 lg:mb-0 lg:mr-2"
              href="#skills"
              onClick={handleOptionClick}
            >
              Skills
            </a>
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white mb-2 lg:mb-0 lg:mr-2"
              href="#portfolios"
              onClick={handleOptionClick}
            >
              Portfolios
            </a>
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white"
              href="#contact"
              onClick={handleOptionClick}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
