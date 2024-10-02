import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="py-6 px-10 text-white">
      <div className="flex justify-between items-center">
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden w-full md:flex space-x-8 md:justify-between">
          <ul className="flex space-x-8">
            <li className="nav-item">
              What we believe
            </li>
            <li className="nav-item">
              Our features
            </li>
          </ul>
          <ul className="flex space-x-8">
            <li className="nav-item">
              Our story
            </li>
            <li className="nav-item">
              The waitlist
            </li>
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4 text-center">
            <li className="nav-item">
              What we believe
            </li>
            <li className="nav-item">
              Our features
            </li>
            <li className="nav-item">
              Our story
            </li>
            <li className="nav-item">
              The waitlist
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
