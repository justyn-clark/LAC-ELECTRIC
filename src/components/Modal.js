import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalDispatchContext } from '../context/GlobalContextProvider';
import ModalSlider from './ModalSlider';

const ModalOverlay = styled.div`
  display: block;
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #000000;
  opacity: 0.8;
  z-index: 5;
`;

const Wrap = styled.div`
  position: fixed;
  width: 65vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export default ({ modalOpen }) => {
  const dispatch = useContext(GlobalDispatchContext);
  return (
    <>
      <Wrap>
        <ModalSlider />
      </Wrap>
      <ModalOverlay
        modalOpen={modalOpen}
        onClick={() => dispatch({ type: 'SET_MODAL_STATE' })}
      />
    </>
  );
};
