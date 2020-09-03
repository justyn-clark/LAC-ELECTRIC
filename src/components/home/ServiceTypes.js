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
                  <h4>{item.title}</h4>
                  <p>{item.info}</p>
                  <Icon
                    icon={'arrow-circle-o-right'}
                    size="24px"
                    padding="1rem 0 0"
                  />
                </div>
                <div className="bottom">
                  <Link to={'/services'}>
                    <Img
                      fadeIn={false}
                      fadeIn={false}
                      fadeIn={false}
                      className="img"
                      fluid={
                        fetchAllImageContent(allImageContent, item, 'image')
                          .node.fluid
                      }
                    />
                    <div className="overlay" />
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
