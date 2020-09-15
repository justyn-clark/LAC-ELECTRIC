import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { respondTo } from '../helper';
import { useSiteData } from '../hooks/useSiteData';
import Inner from './InnerWrap';
import Icon from './Icon';

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
  }

  ${respondTo.sm`
		flex-direction: row;
		align-items: flex-end;
	`}

  svg {
    font-size: 2rem;
  }

  .logo {
    margin-bottom: 1rem;
    max-width: 101px;
  }

  .address {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2;
    a {
      color: white;
      text-decoration: none;
    }
    ${respondTo.sm`
		  align-self: flex-end;
	    `}
  }

  .social {
    display: flex;
    margin: 3rem 0;
    ${respondTo.sm`
      margin: 0 0 1rem 0;
    `};
    a {
      text-decoration: none;
    }
  }

  p {
    ${respondTo.sm`
		  align-self: flex-end;
	  `}
  }
`;

const Footer = () => {
  const { contact } = useSiteData();
  return (
    <Wrap>
      <Content>
        <img src={logo} alt="logo" className="logo" />
        <div className="address">
          <h3>CONTACT</h3>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.google.com/maps/place/7835+Noble+Ave,+Van+Nuys,+CA+91405/@34.2130952,-118.4642288,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29735e4345219:0x6de4b7273310ba9d!8m2!3d34.2130952!4d-118.4620401"
            aria-label={contact.address}
          >
            {contact.address}
          </a>
          {contact.email}
          <br />
          {contact.phone}
          <br />
        </div>
        <div className="right">
          <div className="social">
            <a
              rel="noopener"
              aria-label="Instagram"
              target="_blank"
              href="https://www.instagram.com/Lacelectric"
            >
              <Icon icon={'instagram'} padding="0 0.5rem" />
            </a>
            <a
              rel="noopener"
              aria-label="Facebook"
              target="_blank"
              href="https://www.facebook.com/francisco.larin.1675"
            >
              <Icon icon={'facebook'} padding="0 0.5rem" />
            </a>
            <a
              rel="noopener"
              aria-label="LinkedIn"
              target="_blank"
              href="https://www.linkedin.com/company/lac-electric-inc"
            >
              <Icon icon={'linkedin'} padding="0 0.5rem" />
            </a>
            <a
              rel="noopener"
              aria-label="Yelp"
              target="_blank"
              href="https://www.yelp.com/biz/lac-electric-van-nuys"
            >
              <Icon icon={'yelp'} padding="0 0.5rem" />
            </a>
          </div>
          <p>© LAC ELECTRIC, INC.</p>
        </div>
      </Content>
    </Wrap>
  );
};

export default Footer;
