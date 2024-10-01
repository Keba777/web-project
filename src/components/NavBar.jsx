import React from 'react';

const NavBar = () => {
  return (
    <nav className="py-11 px-10 text-white">
      <div className="flex justify-between items-center">
        {/* First section of the Nav */}
        <ul className="flex space-x-8">
          <li className="nav-item" >
            What we believe
          </li>
          <li className="nav-item" >
            Our features
          </li>
        </ul>
        {/* Second section of the Nav */}
        <ul className="flex space-x-8">
          <li className="nav-item" >
            Our story
          </li>
          <li className="nav-item" >
            The waitlist
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
