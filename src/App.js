import React from "react";
import { Card } from "./components/Card";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { images } from "./constants";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero
        img={images.group77}
        exp="Online Experience"
        int="Join unique interactive activities led by"
        host="one-of-a-kind hosts—all without leaving"
        home="home."
      />
      <Card
        img1={images.air1}
        img2={images.air2}
        img3={images.air3}
        star1="⭐️5.0 (6) • USA"
        lessons1="Life lessons with Katie Zafaries"
        rate1="From $136 / person"
        star2="⭐️5.0 (30) • USA"
        lessons2="Learn wedding photography"
        rate2="From $125 / person"
        star3="⭐️4.0 (6) • USA"
        lessons3="Group mountain biking"
        rate3="From $50 / person"
      />
    </div>
  );
};

export default App;
