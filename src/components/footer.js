import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo_bottom.png';
import { respondTo } from '../helper';
import { useSiteData } from '../hooks/useSiteData';
import Inner from './InnerWrap';

const Wrap = styled.footer`
  margin: 0;
  padding: 3rem 0;
  background: #1e283a;
  ${respondTo.sm`
    flex-direction: row;
  `}
`;

const Content = styled(Inner)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 0 auto;
  color: white;
  
  * {
    margin-bottom: 1rem;
    ${respondTo.sm`
		 margin-bottom: 0rem;
	`}
  }
  
  ${respondTo.sm`
		flex-direction: row;
	`}
  
  .logo {
    max-width: 101px;
  }
  
  .address {
    line-height: 1.5;
     ${respondTo.sm`
		  align-self: flex-end;
	    `}
  }
  
  p {
    ${respondTo.sm`
		  align-self: flex-end;
	  `}
`;

const Footer = () => {
  const { contact } = useSiteData();
  return (
    <Wrap>
      <Content>
        <img src={logo} alt="logo" className="logo" />
        <div className="address">
          <h3>CONTACT</h3>
          {contact.address}
          <br />
          {contact.email}
          <br />
          {contact.phone}
          <br />
        </div>
        <p>© LAC ELECTRIC, INC.</p>
      </Content>
    </Wrap>
  );
};

export default Footer;
