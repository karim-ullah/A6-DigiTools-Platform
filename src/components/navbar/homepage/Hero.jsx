import { CircleDot, Play } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-between items-center gap-10 flex-col lg:flex-row-reverse py-21">
        <div>
          <img
            src="/src/assets/banner.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        </div>
        <div className="">
          <p className="bg-[#E1E7FF] text-[#4F39F6] font-medium text-sm px-4 py-2 rounded-full w-fit flex gap-2 items-center">
           <CircleDot></CircleDot> New Ai-Powered Tools Available
          </p>
          <h1 className="text-4xl lg:text-7xl text-[#101727] font-extrabold py-6">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="pb-6">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <button className="btn btn-primary rounded-full">
            Explore Products
          </button>
          <button className="btn btn-outline rounded-full ml-3">
            {" "}
            <Play></Play> Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
