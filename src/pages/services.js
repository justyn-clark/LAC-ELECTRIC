import React from 'react';
import styled from 'styled-components';
import { respondTo } from '../helper';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HR from '../components/HR';
import InnerWrap from '../components/InnerWrap';

const Content = styled(InnerWrap)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 4rem;
  .list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    ${respondTo.sm`
		  flex-direction: row;
	  `}
    &__left,
    &__right {
      margin-bottom: 2rem;
    }
  }

  h3 {
    padding-bottom: 1rem;
    color: #1e283a;
  }

  ul {
    padding-left: 17px;
    line-height: 28px;
  }

  li {
    color: #6f6969;
  }
`;

const Services = () => (
  <Layout>
    <SEO title="Our Services" />
    <Content>
      <h1>Our Services</h1>
      <HR />
      <div className="list">
        <div className="list__left">
          <h3>Residential Installations</h3>
          <ul>
            <li>Ground up construction</li>
            <li>Multifamily apartment buildings</li>
            <li>Condominium units</li>
            <li>Mix use buildings</li>
            <li>New homes</li>
            <li>Spec homes</li>
            <li>Custom homes</li>
            <li>Track homes</li>
            <li>Remodeling</li>
            <li>Service Upgrades</li>
            <li>Rewiring</li>
            <li>Lighting Upgrades</li>
            <li>Service Calls</li>
            <li>Troubleshooting</li>
            <li>Dry Utilities (Power and Communication)</li>
            <li>Electric Home Inspections</li>
          </ul>
        </div>
        <div className="list__right">
          <h3>Commercial Installations</h3>
          <ul>
            <li>Tenant Improvement</li>
            <li>New construction</li>
            <li>Troubleshooting</li>
            <li>EV Chargers</li>
            <li>Remodeling</li>
            <li>Service upgrades</li>
            <li>Service calls</li>
            <li>Retail Spaces</li>
            <li>Lighting automation</li>
            <li>Backup generator sets</li>
            <li>Commercial Offices</li>
            <li>Warehouses</li>
            <li>Emergency Inverters</li>
            <li>UPS systems</li>
            <li>Dry Utilities ( Power & Communication)</li>
          </ul>
        </div>
      </div>
    </Content>
  </Layout>
);

export default Services;
