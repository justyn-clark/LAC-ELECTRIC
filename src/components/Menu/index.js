import React from 'react';
import styled from 'styled-components';
import NavLink from '../header/NavLink';
import { respondTo } from '../../helper';
import { useSiteData } from '../../hooks/useSiteData';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  width: 100%;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export default ({ open }) => {
  const { navigation } = useSiteData();
  return (
    <StyledMenu open={open}>
      <NavLink to="/">Home</NavLink>
      {navigation.map((link, i) => {
        return (
          <NavLink key={i} to={link.path} activeClassName="active">
            {link.label}
          </NavLink>
        );
      })}
    </StyledMenu>
  );
};
