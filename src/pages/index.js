import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/home/Hero';
import ServiceTypes from '../components/home/ServiceTypes';
import OurServices from '../components/home/OurServices';
import RecentProjects from '../components/home/RecentProjects';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <ServiceTypes />
        <OurServices />
        <RecentProjects />
      </Layout>
    </>
  );
};

export default IndexPage;
