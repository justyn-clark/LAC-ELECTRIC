import React from 'react';
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/custom-animations/open-animation.css';
import hero from '../../images/Buildings/ProjectPictures-167.jpg';
import hero2 from '../../images/Buildings/ProjectPictures-48.jpg';
import hero3 from '../../images/Buildings/ProjectPictures-208.jpg';

const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  .awssld {
    height: 450px;
  }

  .content {
    position: absolute;
    left: 50%;
    width: 90vw;
    transform: translate(-50%, 50%);
  }

  p {
    color: white;
    font-size: 24px;
    font-weight: lighter;
    text-align: center;
    text-transform: initial;
  }

  h1 {
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-transform: initial;
  }
`;

export default () => {
  const slider = (
    <AwesomeSlider bullets={false}>
      <img alt="Hero picture 1" data-src={hero}>
        <div className="content">
          <h1>LAC Electric Inc</h1>
          <p>
            Serving Los Angeles County and neighboring cities for over 18 years
            and counting.
          </p>
        </div>
      </img>
      <img alt="Hero picture 2" data-src={hero2} />
      <img alt="Hero picture 3" data-src={hero3} />
    </AwesomeSlider>
  );

  return <Hero>{slider}</Hero>;
};
