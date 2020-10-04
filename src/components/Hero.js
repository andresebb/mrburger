import React from "react";
import Image from "./Image";
import { StyledJumbo } from "../styles/componente";
import "../styles/hero.css";

const Hero = () => {
  return (
    <StyledJumbo>
      <div className="hero-legal">
        <span className="hero-span">MARCH OFFERS</span>
        <h1 className="hero-title">3$ OFF BIG MAG DEAL</h1>
        <p className="hero-description">
          the one and only Big Mac, served with our world Famous Frier and your
          choice of an icy soft drink.
        </p>
        <button className="btn-amarillo">Find out more</button>
      </div>
      <Image name="bigMac" />
    </StyledJumbo>
  );
};

export default Hero;
