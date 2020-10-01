import React from "react";
import Image from "./Image";
import { StyledJumbo } from "../styles/componente";

const Hero = () => {
  return (
    <StyledJumbo>
      <div>
        <span>MARCH OFFERS</span>
        <h1>3$ OFF BIG MAG DEAL</h1>
        <p>
          the one and only Big Mac, served with our world Famous Frier <br />
          and your choice of an icy soft drink.
        </p>
        <button>Find out more</button>
      </div>
      <Image name="bigMac" />
    </StyledJumbo>
  );
};

export default Hero;
