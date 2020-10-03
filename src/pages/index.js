import React from "react";
import { graphql } from "gatsby";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

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
    </>
  );
};

export default index;
