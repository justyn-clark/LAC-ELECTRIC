import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HR from '../components/HR';
import PageInnerWrap from '../components/PageInnerWrap';
import { useSiteData } from '../hooks/useSiteData';

const Content = styled(PageInnerWrap)`
  width: 80vw;
  margin: 0 auto;
  padding: 1rem 0 4rem;
  h3 {
    padding-bottom: 1rem;
  }
`;

const About = () => {
  const {
    about: { info, objectives },
  } = useSiteData();
  return (
    <Layout>
      <SEO title="About" />
      <Content>
        <h1>About Us</h1>
        <HR />
        <h3>{info.title}</h3>
        <p>{info.desc}</p>
        <br />
        <h3>{objectives.title}</h3>
        <p>{objectives.desc}</p>
        <br />
        <p>
          Francisco Larin <br /> President <br /> <b>LAC Electric, Inc.</b>
        </p>
      </Content>
    </Layout>
  );
};

export default About;
