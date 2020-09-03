import React from 'react';
import TopBar from './TopBar';
import { useSiteData } from '../../hooks/useSiteData';
import Icon from '../Icon';

export default () => {
  const { contact } = useSiteData();
  return (
    <TopBar>
      <p>
        <Icon icon={'map-marker'} padding="0 1rem 0 0" />
        {contact.address}
      </p>
      <p>
        <Icon icon={'envelope'} padding="0 1rem 0 0" />
        {contact.email}
      </p>
      <p>
        <Icon icon={'phone'} padding="0 1rem 0 0" />
        {contact.phone}
      </p>
    </TopBar>
  );
};
