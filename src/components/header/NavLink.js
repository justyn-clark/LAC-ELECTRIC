import styled from 'styled-components';
import { Link } from 'gatsby';
import { respondTo } from '../../helper';

const NavLink = styled(Link)`
  position: relative;
  margin: 0.6rem 1rem;
  color: #1e283a;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  font-size: 19px;
  text-decoration: none;
  transition: all ease 0.2s;

  ${respondTo.sm`
     margin: 0 1rem;
  `};

  &:after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 2px;
    background: #f20079;
    content: '';
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
    transform: translateY(10px);
  }

  &:hover {
    &:after {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &.active {
    &:after {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 2px;
      background: #f20079;
      content: '';
      opacity: 1;
      transform: translateY(0px);
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default NavLink;
