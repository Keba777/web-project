import React from "react";
import iphone14 from "../assets/iphone14.svg";
import iphone14b from "../assets/iphone14b.svg";
import iphone14c from "../assets/iphone14c.svg";
import iphone14d from "../assets/iphone14d.svg";
import Card from "./Card";

const Features = () => {
  return (
    <section className="text-primary pt-20 px-14">
      <p className="flex justify-center pb-4">Our Features</p>
      <h2 className="font-sans font-normal text-[64px] leading-[64px] text-center tracking-[-0.02em] px-60">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </h2>
      <div className=" grid grid-cols-7 mt-20">
        <div className="col-span-2 pt-52">
          <Card
            title="Fluid AI: Simplify, Organize, and Achieve More"
            body=" In a world where daily tasks, communication, 
                and goals often become overwhelming, Fluid AI offers an innovative solution. 
                Combining advanced AI technology with a user-friendly interface, 
                it brings together to-do lists, chats, saved items, 
                and bucket lists into one seamless platform."
          />
        </div>
        <div className="col-span-5 flex justify-start -ml-12">
          <img src={iphone14} alt="iphone14" className="w-2/3" />
        </div>
      </div>
      <div className="grid grid-cols-7 -mt-[420px]">
        <div className="col-span-5 flex justify-end -mr-10">
          <img src={iphone14b} alt="iphone14" className="w-2/3" />
        </div>
        <div className="col-span-2 pt-52">
          <Card
            title="Fluid AI: Simplify, Organize, and Achieve More"
            body=" In a world where daily tasks, communication, 
                and goals often become overwhelming, Fluid AI offers an innovative solution. 
                Combining advanced AI technology with a user-friendly interface, 
                it brings together to-do lists, chats, saved items, 
                and bucket lists into one seamless platform."
          />
        </div>
      </div>

      <div className=" grid grid-cols-7 -mt-[420px]">
        <div className="col-span-2 pt-52">
          <Card
            title="Fluid AI: Simplify, Organize, and Achieve More"
            body=" In a world where daily tasks, communication, 
                and goals often become overwhelming, Fluid AI offers an innovative solution. 
                Combining advanced AI technology with a user-friendly interface, 
                it brings together to-do lists, chats, saved items, 
                and bucket lists into one seamless platform."
          />
        </div>
        <div className="col-span-5 flex justify-start -ml-12">
          <img src={iphone14c} alt="iphone14" className="w-2/3" />
        </div>
      </div>
      <div className="grid grid-cols-7 -mt-[420px]">
        <div className="col-span-5 flex justify-end -mr-10">
          <img src={iphone14d} alt="iphone14" className="w-2/3" />
        </div>
        <div className="col-span-2 pt-52">
          <Card
            title="Fluid AI: Simplify, Organize, and Achieve More"
            body=" In a world where daily tasks, communication, 
                and goals often become overwhelming, Fluid AI offers an innovative solution. 
                Combining advanced AI technology with a user-friendly interface, 
                it brings together to-do lists, chats, saved items, 
                and bucket lists into one seamless platform."
          />
        </div>
      </div>
      <h2 className="text-5xl -mt-80 mb-20 mr-[300px]">
        Fluid AI was born out of a desire to simplify and streamline modern life
      </h2>
    </section>
  );
};

export default Features;
