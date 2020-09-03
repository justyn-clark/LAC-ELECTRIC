import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HR from '../components/HR';
import PageInnerWrap from '../components/PageInnerWrap';
import Icon from '../components/Icon';
import { respondTo } from '../helper';
import { useSiteData } from '../hooks/useSiteData';

const Content = styled(PageInnerWrap)`
  padding: 1rem 0 4rem;

  .wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 4rem 0;
    ${respondTo.sm`     
		  flex-direction: row;		
	  `}
    .item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 3rem;
    }
  }
`;

const Contact = () => {
  const { contact } = useSiteData();
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Content>
        <h1>Contact Us</h1>
        <HR />
        <div className="wrap">
          <div className="item">
            <Icon icon={'map-marker'} size="89px" color="#1e283a" />
            <span>{contact.address}</span>
          </div>
          <div className="item">
            <Icon icon={'envelope'} size="89px" color="#1e283a" />
            <span>{contact.email}</span>
          </div>
          <div className="item">
            <Icon icon={'phone'} size="89px" color="#1e283a" />
            <span>{contact.phone}</span>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Contact;
