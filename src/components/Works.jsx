import React, { useState } from "react";
import work1 from "../assets/work1.svg"; // Import images
import work2 from "../assets/work2.svg";
import work3 from "../assets/work3.svg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Works = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const backgrounds = [work1, work2, work3];

  // Function to handle previous screen navigation
  const handlePrev = () => {
    setCurrentScreen((prev) => (prev === 0 ? prev : prev - 1));
  };

  // Function to handle next screen navigation
  const handleNext = () => {
    setCurrentScreen((prev) =>
      prev === backgrounds.length - 1 ? prev : prev + 1
    );
  };

  return (
    <div
      className="relative w-full h-screen "
      style={{
        backgroundImage: `url(${backgrounds[currentScreen]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {currentScreen > 0 && (
        <button
          className="absolute left-[350px] top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-[rgba(186,186,186,0)] to-[rgba(186,186,186,0.4)] border border-[rgba(255,255,255,0.4)] rounded-full text-white px-2 py-2 z-50"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
      )}

      {currentScreen < backgrounds.length - 1 && (
        <button
          className="absolute right-[350px] top-1/2 transform -translate-y-1/2 bg-gradient-to-b from-[rgba(186,186,186,0)] to-[rgba(186,186,186,0.4)] border border-[rgba(255,255,255,0.4)] rounded-full text-white px-2 py-2 z-50"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      )}

      {/* Card in the middle */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-7 flex flex-col justify-between text-primary w-[460px] h-[460px] bg-gradient-to-b from-[rgba(186,186,186,0)] to-[rgba(186,186,186,0.4)] border border-[rgba(255,255,255,0.4)] rounded-[32px]">
          <p className="mr-48">
            Fluid has Internet access, so you can get up-to-date information
            from it.
          </p>
          <h3 className="text-3xl">Time to Work</h3>
        </div>
      </div>
    </div>
  );
};

export default Works;
