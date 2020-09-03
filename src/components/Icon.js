import React from 'react';
import styled from 'styled-components';

const Icon = styled.span`
  display: inline-flex;
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
`;

const IconTag = styled.i`
  font-size: 32px;
  color: ${(props) => props.color || 'white'};
`;

export default ({ color, icon, padding, size }) => (
  <Icon size={size} padding={padding}>
    <IconTag color={color} className={`fa fa-${icon}`} />
  </Icon>
);
