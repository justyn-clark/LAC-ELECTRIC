import styled from 'styled-components';
import { respondTo } from '../../helper';

const Header = styled.header`
  position: relative;
  display: block;
  width: 100vw;
  padding: 10px 0;
  background: white;
  ${respondTo.sm`
    height: auto;
    padding: 1rem 0;
  `};
  .logo {
    width: 50px;
    height: auto;
    ${respondTo.sm`    
      width: 80px;
	  `}
  }
  nav {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    ${respondTo.sm`
      display: flex;		 
		  flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
	  `}
  }
`;

export default Header;
