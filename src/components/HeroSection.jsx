import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-1 justify-center items-center text-center p-2">
      <div className="text-white text-2xl md:text-4xl font-bold max-w-3xl leading-relaxed">
        Empower Your Decisions with <br />{" "}
        <span className="text-orange-500"> AI-Driven</span> Insights <br />
        <div className="p-2">
          <span className=" text-3xl md:text-5xl font-thin">Ask.</span>{" "}
          <span  className="text-3xl md:text-5xl font-thin">Analyze.</span>{" "}
          <span className="text-3xl md:text-5xl font-thin">Act.</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
