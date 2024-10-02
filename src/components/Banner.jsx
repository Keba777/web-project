import React from "react";
import card1 from "../assets/card1.svg";
import logo from "../assets/logo.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import card5 from "../assets/card5.svg";

const Banner = () => {
  return (
    <div className="banner ">
      <div className="pt-64 flex justify-evenly">
        <img src={card1} alt="card" className="w-64" />
        <img src={logo} alt="logo" className="w-36" />
        <img src={card2} alt="card" className="w-56 -mt-32" />
      </div>
      <div className="flex space-x-44">
        <div className="flex flex-col">
          <img src={card2} alt="card" className="w-56 -ml-28 mb-6 -mt-10 " />
          <img src={card3} alt="card" className="w-96 " />
        </div>

        <div className="flex flex-col items-center space-y-8">
          <h2 className="font-sans font-normal text-primary text-[64px] leading-[64px] text-center tracking-[-0.02em]">
            Unlock Seamless Efficiency
          </h2>
          <button className="flex flex-col justify-center items-center gap-2 px-0 py-4 w-[167px] h-[52px] left-[80px] top-[550px] bg-white shadow-[0px_5px_30px_rgba(255,255,255,0.61)] rounded-[52px] text-black font-medium text-[16px] leading-none">
            Join Waitlist
          </button>
        </div>
        <img src={card3} alt="card" className="w-56 -mt-40 -mr-60" />
      </div>
      <div className="flex justify-between px-20 ">
        <img src={card4} alt="card" className="w-72 mt-28" />
        <img src={card5} alt="card" className="w-52 -mt-20 " />
      </div>
    </div>
  );
};

export default Banner;
