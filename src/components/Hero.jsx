import React from 'react';
import logo from '../assets/logo.svg';

const Hero = () => {
  return (
    <section>
      <span className="flex justify-center my-32 ">
        <img src={logo} alt="Logo" className="w-1/2 " />
      </span>
    </section>
  );
};

export default Hero;
