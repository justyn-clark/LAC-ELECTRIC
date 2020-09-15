import React from 'react';
import styled from 'styled-components';
import useScrollTop from '../hooks/useScrollTop';
import { respondTo } from '../helper';

const ScrollTopBtn = styled.button`
  display: ${(props) => (props.modalOpen ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background-color: #f20079;
  transform: translateY(200%);
  transition: transform ease 300ms 300ms;
  cursor: pointer;
  z-index: 100;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  &.isScrollTop {
    transform: translateY(0);
    border: none;
  }

  ${respondTo.sm`
    display: none
  `}

  .arrow {
    display: inline-block;
    padding: 3px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(-135deg);
  }
`;

export default ({ modalOpen }) => {
  const isScrollTop = useScrollTop();
  return (
    <ScrollTopBtn
      className={isScrollTop ? 'isScrollTop' : ''}
      onClick={() => window.scrollTo(0, 0)}
      modalOpen={modalOpen}
      aria-label="Scroll to top button"
    >
      <span className="arrow" />
    </ScrollTopBtn>
  );
};
