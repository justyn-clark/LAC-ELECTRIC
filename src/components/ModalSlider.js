import React, { useContext, useState, useEffect } from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { respondTo } from '../helper';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from '../context/GlobalContextProvider';

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
    border: solid white;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 15px;
  }

  .right {
    right: -40px;
    transform: rotate(-45deg);
  }

  .left {
    left: -40px;
    transform: rotate(135deg);
  }
`;

const Wrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;

  & > * {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .gatsby-image-wrapper {
    height: 300px;
    ${respondTo.sm`
      height: auto;
    `}
  }

  .closeBtn {
    position: absolute;
    top: -35px;
    right: 0;
    display: flex;
    align-items: center;
    width: 32px;
    height: 32px;
    color: white;
    background: none;
    border: none;
    outline: none;
    z-index: 1;
    cursor: pointer;
    &:before,
    &:after {
      position: absolute;
      left: 15px;
      content: ' ';
      height: 22px;
      width: 2px;
      background-color: white;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }
`;

export default () => {
  const [index, setIndex] = useState(0);
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const { selectedGroup, selectedImage } = state;
  const length = selectedGroup.edges.length - 1; //Minus 1 for array offset from 0

  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1);

  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1);

  const setSelectedIndex = () => {
    selectedGroup.edges.forEach((item, i) => {
      if (selectedImage.node.id === item.node.id) {
        setIndex(i);
      }
    });
  };

  const { node } = selectedGroup.edges[index];

  useEffect(() => {
    setSelectedIndex();
  }, []);

  return (
    <Wrap>
      <button
        className="closeBtn"
        onClick={() => dispatch({ type: 'SET_MODAL_STATE' })}
      />
      <Img
        fluid={node.childImageSharp.fluid}
        key={node.id}
        alt={node.name.replace(/-/g, ' ').substring(2)}
        fadeIn={false}
      />
      <BtnWrap>
        <button className="arrow left" onClick={() => handlePrevious()} />
        <button className="arrow right" onClick={() => handleNext()} />
      </BtnWrap>
    </Wrap>
  );
};
