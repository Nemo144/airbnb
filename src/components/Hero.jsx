import React from "react";
import { images } from "../constants";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex justify-center items-center pt-5 pl-56">
        <img src={images.group77} alt="hero" className="" />
      </div>
      <div className="flex flex-col pl-20 pt-10">
        <div className="text-2xl pb-5">
          <h1>Online Experience</h1>
        </div>
        <p>Join unique interactive activities led by</p>
        <p>one-of-a-kind hosts—all without leaving</p>
        <p>home.</p>
      </div>
    </div>
  );
};
