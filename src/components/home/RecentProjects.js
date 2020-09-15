import styled from 'styled-components';
import { Link } from 'gatsby';
import HR from '../HR';
import React from 'react';
import InnerWrap from '../InnerWrap';
import { fetchAllImageContent, respondTo } from '../../helper';
import { useSiteData } from '../../hooks/useSiteData';
import Img from 'gatsby-image';

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  width: 100%;
  background: #e1e2e4;
  p {
    text-align: center;
  }
  img {
    flex: 1;
  }
  .images {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    position: relative;
    width: 100%;
    ${respondTo.sm`    
		  flex-direction: row;
	`}

    .images_img {
      flex-grow: 1;
      padding: 1rem;
    }
  }
`;

const Button = styled(Link)`
  display: block;
  padding: 18px 38px 19px 36px;
  max-width: 300px;
  width: 100%;
  margin: 2rem auto;
  border: none;
  color: white;
  background: #f20079;
  text-align: center;
  font-size: 24px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    background: #1e283a;
    text-decoration: none;
  }
`;

const RecentProjects = () => {
  const {
    projects: { title, info, cta, imagesRecent: images },
    allImageContent,
  } = useSiteData();
  return (
    <Wrap>
      <InnerWrap>
        <h2>{title}</h2>
        <HR />
        <p>{info}</p>
        <div className="images">
          {images.map((image, i) => {
            return (
              <div key={i} className="images_img">
                <Img
                  fadeIn={false}
                  className="img"
                  fluid={
                    fetchAllImageContent(allImageContent, image, 'src').node
                      .fluid
                  }
                  alt={image.src.replace(/-/g, ' ')}
                />
              </div>
            );
          })}
        </div>
        <Button to={'/projects'}>{cta}</Button>
      </InnerWrap>
    </Wrap>
  );
};

export default RecentProjects;
