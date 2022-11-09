import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import karen from "../assets/karen.jpeg";

export const HomePage = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#EBD8D0]">
      <div className="max-w-[1000 px] mx-auto px-20 flex flex-row justify-center h-full">
        <div className="max-w-[1000 px] mx-auto px-20 flex flex-col justify-center h-full">
          <p className="text-black">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-gray-700">
            Karen Seim Midtlien
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#848794]">
            I´m a developer.
          </h2>
          <p className="text-[#848794] py-4 max-w-[700px]">
            Thanks for visiting my page, feel free to check out my portifolio
          </p>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-gray-700 group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#989cab] hover:border-[#989cab] hover:text-white">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <img src={karen}></img>
      </div>
    </div>
  );
};
