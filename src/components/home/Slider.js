import React, { useContext, useState, useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { GlobalStateContext } from '../../context/GlobalContextProvider';

const BtnWrap = styled.div`
  position: absolute;
  width: 100%;

  .left,
  .right {
    position: absolute;
    cursor: pointer;
    outline: none;
    background: none;
  }

  .arrow {
    border: solid #1e283a;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 15px;
  }

  .right {
    right: 15px;
    transform: rotate(-45deg);
  }

  .left {
    left: 15px;
    transform: rotate(135deg);
  }
`;
const Wrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  & > * {
    flex-grow: 1;
  }

  .gatsby-image-wrapper {
    height: 500px;
  }
`;

export default (props) => {
  const {
    hero: { edges: arr },
  } = props;

  const [index, setIndex] = useState(0);
  const length = arr.length - 1; //Minus 1 for array offset from 0
  const { node } = arr[index];

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  return (
    <Wrap>
      <div>
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
          fadeIn={false}
        />
      </div>
      <BtnWrap>
        <button className="arrow left" onClick={() => handlePrevious()} />
        <button className="arrow right" onClick={() => handleNext()} />
      </BtnWrap>
    </Wrap>
  );
};
