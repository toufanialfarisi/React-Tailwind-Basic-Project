import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex flex-col text-center justify-center">
        <p className="text-[#00df9a] md:text-4xl sm:text-4xl text-xl font-bold mb-4">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold mb-2">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4 "
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 mt-4">
          Monitor your data analytics to increase revenue for BTB, BTC, & SAAS
          platform
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium py-3 mx-auto my-6 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
