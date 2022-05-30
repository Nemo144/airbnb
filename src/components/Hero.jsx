import React from "react";

export const Hero = ({ img, exp, int, host, home }) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex justify-center items-center pt-5 pl-56">
        <img src={img} alt="hero" className="" />
      </div>
      <div className="flex flex-col pl-20 pt-10">
        <div className="text-2xl pb-5">
          <h1>{exp}</h1>
        </div>
        <p>{int}</p>
        <p>{host}</p>
        <p>{home}</p>
      </div>
    </div>
  );
};
