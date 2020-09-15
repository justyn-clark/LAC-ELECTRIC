import React, { useContext } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { respondTo } from '../helper';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HR from '../components/HR';
import Gallery from '../../src/components/Gallery';
import PageInnerWrap from '../components/PageInnerWrap';

import { useProjectImages } from '../hooks/useProjectImages';
import { GlobalDispatchContext } from '../context/GlobalContextProvider';

const Content = styled(PageInnerWrap)`
  flex-direction: column;
  padding: 1rem 0 4rem;
  .projectsWrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${respondTo.md`
      flex-direction: initial;
		  flex-wrap: wrap;
      justify-content: space-between;
	  `}
  }
  .projectWrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 350px;
    margin-bottom: 3rem;
    h2 {
      font-size: 24px;
    }
  }
  .images {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;
    position: relative;
    width: 100%;
    ${respondTo.sm`
      flex-wrap: wrap;
		  flex-direction: row;
	`}
    &__img {
      flex-grow: 1;
      width: 100%;
      padding: 1rem;
      cursor: pointer;
      ${respondTo.sm`
          max-width: 250px;
        `}
    }
    &__imgMain {
      width: 100%;
      transition: transform ease 300ms;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        transition: transform ease 300ms;
      }
    }
  
`;

const SectionHR = styled.hr`
  margin: 7rem 0;
`;

const Projects = () => {
  const {
    BalboaApartments,
    KensingtonCampus,
    NveApartments,
    NewhallCrossing,
    TheOtsego,
    Urbanpolitian,
    Vaughn,
  } = useProjectImages();

  const dispatch = useContext(GlobalDispatchContext);

  const handleOnClick = (item, obj) => {
    dispatch({ type: 'SET_MODAL_STATE' });
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: item });
    dispatch({ type: 'SET_SELECTED_GROUP', payload: obj });
  };

  const renderMainImage = (obj) => {
    return obj.edges.map((item) => {
      if (item.node.name.match(/main/)) {
        return (
          <div
            key={item.node.id}
            className="images__imgMain"
            onClick={() => handleOnClick(item, obj)}
          >
            <Img
              fluid={item.node.childImageSharp.fluid}
              key={item.node.id}
              alt={item.node.name.replace(/-/g, ' ')}
              fadeIn={false}
            />
          </div>
        );
      }
    });
  };

  const renderGroup = (obj) => (
    <div className="images">
      {obj.edges.map((item) => {
        return (
          <div
            key={item.node.id}
            className="images__img"
            onClick={() => handleOnClick(item, obj)}
          >
            <Img
              fluid={item.node.childImageSharp.fluid}
              key={item.node.id}
              alt={item.node.name.replace(/-/g, ' ')}
              fadeIn={false}
            />
          </div>
        );
      })}
    </div>
  );

  const Project = ({ title, children }) => (
    <div className="projectWrap">
      <h2>{title}</h2>
      {children}
    </div>
  );

  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <h1>Projects</h1>
        <HR />
        <Gallery renderGroup={renderGroup} />
        <SectionHR />
        <div className="projectsWrap">
          <Project title="Kensington Campus">
            <HR />
            {renderMainImage(KensingtonCampus)}
          </Project>
          <Project title="Balboa Condos">
            <HR />
            {renderMainImage(BalboaApartments)}
          </Project>
          <Project title="The Otsego">
            <HR />
            {renderMainImage(TheOtsego)}
          </Project>
          <Project title="Vaughn">
            <HR />
            {renderMainImage(Vaughn)}
          </Project>
          <Project title="Nve Apartments">
            <HR />
            {renderMainImage(NveApartments)}
          </Project>
          <Project title="Urbanpolitian">
            <HR />
            {renderMainImage(Urbanpolitian)}
          </Project>
          <Project title="Newhall Crossing">
            <HR />
            {renderMainImage(NewhallCrossing)}
          </Project>
        </div>
      </Content>
    </Layout>
  );
};
export default Projects;
