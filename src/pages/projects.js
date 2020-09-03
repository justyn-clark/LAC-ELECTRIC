import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HR from '../components/HR';
import { useSiteData } from '../hooks/useSiteData';
import PageInnerWrap from '../components/PageInnerWrap';
import styled from 'styled-components';
import { fetchAllImageContent, respondTo } from '../helper';
import Img from 'gatsby-image';

const Content = styled(PageInnerWrap)`
  flex-direction: column;
  padding: 1rem 0 4rem;

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
      max-width: 80%;
      width: 100%;
      padding: 1rem;
      ${respondTo.sm`
      max-width: 250px;
	`}
    }
  }
`;

const Projects = () => {
  const {
    projects: { imagesAll: images },
    allImageContent,
  } = useSiteData();
  return (
    <Layout>
      <SEO title="Projects" />
      <Content>
        <h1>Our Projects</h1>
        <HR />
        <div className="images">
          {images.map((image, i) => {
            return (
              <div key={i} className="images__img">
                <Img
                  className="img"
                  fluid={
                    fetchAllImageContent(allImageContent, image, 'src').node
                      .fluid
                  }
                />
              </div>
            );
          })}
        </div>
      </Content>
    </Layout>
  );
};
export default Projects;
