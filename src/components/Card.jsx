import React from "react";
import { images } from "../constants";

export const Card = () => {
  return (
    <div className="flex flex-row m-4 pl-16 ">
      <div className="flex flex-col">
        <img src={images.air1} alt="air1" />
        <p>⭐️5.0 (6) • USA</p>
        <p>Life lessons with Katie Zafaries</p>
        <p>From $136 / person</p>
      </div>

      <div className="flex flex-col">
        <img src={images.air2} alt="air2" className=" pl-5 w-72" />
        <div className="pl-5">
          <p>⭐️5.0 (30) • USA</p>
          <p>Learn wedding photography</p>
          <p>From $125 / person</p>
        </div>
      </div>

      <div>
        <img src={images.air3} alt="air3" className=" pl-5 w-52 my-1" />
        <div className="pl-5">
          <p>⭐️4.0 (6) • USA</p>
          <p>Group mountain biking</p>
          <p>From $50 / person</p>
        </div>
      </div>
    </div>
  );
};
