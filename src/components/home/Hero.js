import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { respondTo } from '../../helper';
import { graphql, useStaticQuery } from 'gatsby';

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  & > * {
    flex-grow: 1;
  }

  h1 {
    position: absolute;
    color: white;
    width: 70%;
    font-size: 24px;
    font-weight: lighter;
    text-align: center;
    text-transform: initial;
    transform: translateX(-50%);
    left: 50%;
    ${respondTo.sm`
      font-size: 36px;
      width: 50%;
	  `}
  }
`;

export default () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { eq: "home/hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Hero>
      <Img fadeIn={false} fluid={data.hero.childImageSharp.fluid} />
      <h1>
        Serving Los Angeles County and neighboring cities for over 18 years and
        counting.
      </h1>
    </Hero>
  );
};
