import React from "react";
import { images } from "../constants";

export const Hero = () => {
  return (
    <section>
      <div>
        <img src={images.group77} alt="hero" />
        <h1>Online Experience</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};
