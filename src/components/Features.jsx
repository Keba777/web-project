import React from 'react';
import iphone14 from "../assets/iphone14.svg";
import Card from './Card';

const Features = () => {
  return (
    <section className="text-primary pt-20 px-14">
      <p className="flex justify-center pb-4">Our Features</p>
      <h2
        className="font-sans font-normal text-[64px] leading-[64px] text-center tracking-[-0.02em] px-60"
      >
        Fluid AI was born out of a desire to simplify and streamline modern life
      </h2>
      <div className="pt-12 grid grid-cols-7">
        <div className="col-span-2 flex items-center">
          <Card title="Fluid AI: Simplify, Organize, and Achieve More" 
                body=" In a world where daily tasks, communication, 
                and goals often become overwhelming, Fluid AI offers an innovative solution. 
                Combining advanced AI technology with a user-friendly interface, 
                it brings together to-do lists, chats, saved items, 
                and bucket lists into one seamless platform."
            />
        </div>        
        <div className="col-span-5 flex justify-start ">
          <img src={iphone14} alt="iphone14" className="w-2/3" />
        </div>
      </div>
    </section>
  );
}

export default Features;
