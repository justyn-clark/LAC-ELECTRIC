import React from 'react';
import styled from 'styled-components';
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaExpandAlt,
} from 'react-icons/fa';
import { ImLinkedin2, ImYelp } from 'react-icons/im';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const Icon = styled.span`
  display: inline-flex;
  padding: ${(props) => props.padding};
  svg {
    color: ${(props) => props.color || 'white'};
    font-size: ${(props) => props.size};
  }
`;

const renderIcon = (icon) => {
  switch (icon) {
    case 'instagram':
      return <FaInstagram />;
    case 'facebook':
      return <FaFacebook />;
    case 'linkedin':
      return <ImLinkedin2 />;
    case 'yelp':
      return <ImYelp />;
    case 'envelope':
      return <FaEnvelope />;
    case 'marker':
      return <FaMapMarkerAlt />;
    case 'phone':
      return <FaPhoneAlt />;
    case 'arrow-circle-o-right':
      return <HiOutlineArrowCircleRight />;
    case 'expand':
      return <FaExpandAlt />;
    default:
      return null;
  }
};

export default ({ className, color, padding, size, icon }) => (
  <Icon className={className} color={color} padding={padding} size={size}>
    {renderIcon(icon)}
  </Icon>
);
