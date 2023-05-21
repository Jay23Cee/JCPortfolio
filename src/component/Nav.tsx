import { useState } from 'react';
import '../App.css';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  const scrollToSection = (event: any, sectionId: any) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const navbar = document.getElementsByClassName('sticky')[0] as HTMLElement; // Explicitly type navbar as HTMLElement
    const navbarHeight = navbar.offsetHeight;
    if (section) {
      const topOffset = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: topOffset - navbarHeight, behavior: 'smooth' });
      handleOptionClick();
    }
  };
  
  
  return (
    <div className="sticky top-0 z-50 bg-gray-800 ">
      <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-gray-800">
        <h1 className="text-2xl font-semibold uppercase tracking-wide text-white">
          <a href="index.html">Jackson</a>
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="relative z-50">
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
        className={`fixed top-0 left-0 lg:relative bg-gray-800 w-auto lg:w-64 z-20 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div
          className={`flex flex-col lg:flex-row justify-between items-start py-6 px-8 ${
            isOpen ? 'h-screen' : 'h-auto'
          }`}
        >
          <nav className="lg:mt-0 px-8 flex flex-col lg:flex-row">
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white mb-2 lg:mb-0 lg:mr-2 text-lg"
              href="#about"
              onClick={(event) => scrollToSection(event, 'about')}
            >
              About
            </a>
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white mb-2 lg:mb-0 lg:mr-2 text-lg"
              href="#skills"
              onClick={(event) => scrollToSection(event, 'skills')}
            >
              Skills
            </a>
            <a
              className="py-2 px-4 rounded transition duration-200 hover:bg-gray-700 text-white mb-2 lg:mb-0 lg:mr-2 text-lg"
              href="#portfolios"
              onClick={(event) => scrollToSection(event, 'portfolios')}
            >
              Portfolios
            </a>
          </nav>
          <h1 className="lg:text-2xl font-semibold uppercase tracking-wide text-white mt-4 lg:mt-0">
            <a href="index.html">Jackson</a>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Nav;
