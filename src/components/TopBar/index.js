import React from 'react';
import TopBar from './TopBar';
import { useSiteData } from '../../hooks/useSiteData';
import Icon from '../Icon';

export default () => {
  const { contact } = useSiteData();
  return (
    <TopBar>
      <div className="social">
        <a
          rel="noopener"
          aria-label="Instagram"
          target="_blank"
          href="https://www.instagram.com/Lacelectric"
        >
          <Icon icon={'instagram'} padding="0 0.3rem" />
        </a>
        <a
          rel="noopener"
          aria-label="Facebook"
          target="_blank"
          href="https://www.facebook.com/francisco.larin.1675"
        >
          <Icon icon={'facebook'} padding="0 0.3rem" />
        </a>
        <a
          rel="noopener"
          aria-label="LinkedIn"
          target="_blank"
          href="https://www.linkedin.com/company/lac-electric-inc"
        >
          <Icon icon={'linkedin'} padding="0 0.3rem" />
        </a>
        <a
          rel="noopener"
          aria-label="Yelp"
          target="_blank"
          href="https://www.yelp.com/biz/lac-electric-van-nuys"
        >
          <Icon icon={'yelp'} padding="0 0.3rem" />
        </a>
      </div>
      <div className="contactInfo">
        <a
          className="flex"
          rel="noopener"
          aria-label={contact.address}
          target="_blank"
          href="https://www.google.com/maps/place/7835+Noble+Ave,+Van+Nuys,+CA+91405/@34.2130952,-118.4642288,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29735e4345219:0x6de4b7273310ba9d!8m2!3d34.2130952!4d-118.4620401"
        >
          <Icon icon={'marker'} padding="0 0.5rem 0 0" />
          {contact.address}
        </a>
        <p className="flex">
          <Icon icon={'envelope'} padding="0 0.5rem 0 0" />
          {contact.email}
        </p>
        <p className="flex">
          <Icon icon={'phone'} padding="0 0.5rem 0 0" />
          {contact.phone}
        </p>
      </div>
    </TopBar>
  );
};
