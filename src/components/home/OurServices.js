import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HR from '../HR';
import InnerWrap from '../InnerWrap';
import { fetchAllImageContent, respondTo } from '../../helper';
import { useSiteData } from '../../hooks/useSiteData';

const Wrap = styled.section`
  position: relative;
  width: 100%;
  padding: 3rem 0;
  background: white;
`;

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${respondTo.sm`     
		  flex-direction: row;
	`}

  .img {
    width: 35%;
    margin-bottom: 2rem;
  }

  .item {
    flex: 1;
    text-align: center;
    margin-bottom: 4rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    ${respondTo.sm`     
		  margin: 0 1rem 2rem;		
	`}

    p {
      color: #6f6969;
      font-size: 14px;
    }

    h4 {
      margin-bottom: 1rem;
    }
  }
`;

export default () => {
  const {
    services: { title, items },
    allImageContent,
  } = useSiteData();

  return (
    <Wrap>
      <InnerWrap>
        <h2>{title}</h2>
        <HR />
        <ItemWrap>
          {items.map((item) => {
            return (
              <div key={item.title} className="item">
                <Img
                  className="img"
                  fadeIn={false}
                  alt={item.title}
                  fluid={
                    fetchAllImageContent(allImageContent, item, 'image').node
                      .fluid
                  }
                />
                <h3>{item.title}</h3>
                <p>{item.info}</p>
              </div>
            );
          })}
        </ItemWrap>
      </InnerWrap>
    </Wrap>
  );
};
