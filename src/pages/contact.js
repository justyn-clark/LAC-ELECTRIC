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
  text-align: center;

  a {
    color: #1e283a;
  }

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
      svg {
        margin-bottom: 1rem;
      }
      &.address {
        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #1e283a;
          text-decoration: none;
        }
      }
    }
  }
`;

const Contact = () => {
  const { contact, pdf } = useSiteData();
  const applicationPDF = pdf?.edges[0]?.node?.publicURL;
  return (
    <Layout>
      <SEO title="Contact Us" />
      <Content>
        <h1>Contact Us</h1>
        <HR />
        <div className="wrap">
          <div className="item address">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/7835+Noble+Ave,+Van+Nuys,+CA+91405/@34.2130952,-118.4642288,17z/data=!3m1!4b1!4m5!3m4!1s0x80c29735e4345219:0x6de4b7273310ba9d!8m2!3d34.2130952!4d-118.4620401"
              rel="noopener"
            >
              <Icon icon={'marker'} size="89px" color="#1e283a" />
              <p>{contact.address}</p>
            </a>
          </div>
          <div className="item">
            <Icon icon={'envelope'} size="89px" color="#1e283a" />
            <p>{contact.email}</p>
          </div>
          <div className="item">
            <Icon icon={'phone'} size="89px" color="#1e283a" />
            <p>{contact.phone}</p>
          </div>
        </div>
        <p>
          For career opportunities please download this application{' '}
          <a
            rel="noopener"
            aria-label="Application"
            href={applicationPDF}
            target="_blank"
          >
            PDF
          </a>{' '}
          file, fill it and send it to our email!
        </p>
      </Content>
    </Layout>
  );
};

export default Contact;
