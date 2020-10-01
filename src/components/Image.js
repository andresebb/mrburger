import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Image = ({ name }) => {
  const data = useStaticQuery(
    graphql`
      query {
        bigMac: file(relativePath: { eq: "bigMac.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return <Img fluid={data[name].childImageSharp.fluid} />;
};

export default Image;
