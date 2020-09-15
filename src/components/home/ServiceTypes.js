import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { fetchAllImageContent, respondTo } from '../../helper';
import { useSiteData } from '../../hooks/useSiteData';
import InnerWrap from '../InnerWrap';
import Box from './Box';
import Icon from '../Icon';
import Img from 'gatsby-image';

const Section = styled.section`
  padding: 3rem 0;
  background: #e1e2e4;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${respondTo.sm`
		flex-direction: row;
		justify-content: space-between;
	`}
  a {
    text-decoration: none;
  }
  .icon {
    svg {
      transition: color ease 300ms;
      &:hover {
        color: #1e283a;
        transition: color ease 300ms;
      }
    }
  }
`;

const ServiceTypes = () => {
  const { serviceTypes, allImageContent } = useSiteData();
  return (
    <Section>
      <InnerWrap>
        <Content>
          {serviceTypes.map((item, i) => {
            return (
              <Box key={i}>
                <div className="top">
                  <p className="title">{item.title}</p>
                  <p>{item.info}</p>
                  <Link aria-label="link to services" to={'/services'}>
                    <Icon
                      icon={'arrow-circle-o-right'}
                      size="24px"
                      padding="1rem 0 0"
                      className="icon"
                    />
                  </Link>
                </div>
                <div className="bottom">
                  <Link to={'/services'}>
                    <Img
                      fadeIn={false}
                      className="img"
                      fluid={
                        fetchAllImageContent(allImageContent, item, 'image')
                          .node.fluid
                      }
                      alt={item.image.replace(/-/g, ' ')}
                    />
                    <div className="overlay">
                      <Icon icon={'expand'} size="30px" />
                    </div>
                  </Link>
                </div>
              </Box>
            );
          })}
        </Content>
      </InnerWrap>
    </Section>
  );
};

export default ServiceTypes;
