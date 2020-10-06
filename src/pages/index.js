import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";

export const query = graphql`
  query MyQuery {
    allMenu {
      edges {
        node {
          nombre
          imagen
          precio
          side
        }
      }
    }
  }
`;

const index = ({ data }) => {
  return (
    <>
      <Hero />
      <Menu menu={data.allMenu.edges} />
      <About />
    </>
  );
};

export default index;
