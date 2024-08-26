import React from "react";
import myHeroSvg from "./assets/myHero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Bon Projects</h1>
          <h2>Stay Tune For My Newest Projects...</h2>
          <p>
            Sit back, relax and enjoy the wonderful features of my projects 😇
          </p>
        </div>
        <div className="img-container">
          <img src={myHeroSvg} alt="Hero Image" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
