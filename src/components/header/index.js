import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import logo from '../../../static/logo.png';
import NavLink from './NavLink';
import Header from './Header';
import { respondTo } from '../../helper';
import { useSiteData } from '../../hooks/useSiteData';
import { useIsLagerThanTablet } from '../../hooks/useIsLagerThanTablet';
import Burger from '../Menu/Burger';

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
  ${respondTo.sm`
		flex-direction: row;
		justify-content: space-between;
		width: calc(100% - 200px);		
		height: auto;
	`}
`;

export default () => {
  const { navigation } = useSiteData();
  const [open, setOpen] = React.useState(false);
  useIsLagerThanTablet(() => setOpen(false));
  return (
    <Header open={open}>
      <Burger open={open} setOpen={setOpen} />
      <Inner>
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          {navigation.map((link, i) => {
            return (
              <NavLink key={i} to={link.path} activeClassName="active">
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </Inner>
    </Header>
  );
};
