import React from 'react';
import styled from 'styled-components';
import { useSiteData } from '../hooks/useSiteData';
import HR from './HR';
import InnerWrap from './InnerWrap';
import Icon from './Icon';

const Wrap = styled.section`
  position: relative;
  width: 100%;
  padding: 3rem 0;
  background: white;
`;

const Reviews = styled.section`
  width: 80vw;
  margin: 3rem auto 0;
  text-align: left;
  .revWrap {
    border-left: 1px solid #0000000f;
    margin-left: 12px;
    padding-left: 12px;
  }
  .item2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 0 3rem;
    i {
      margin-right: 5px;
    }
  }
  .userName {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .text {
    color: #6f6969;
    font-style: italic;
  }
`;

export default () => {
  const { reviews } = useSiteData();
  return (
    <Wrap>
      <InnerWrap>
        <h2>Reviews</h2>
        <HR />
        <Reviews>
          {reviews.map((item) => (
            <div key={item.id} className="item2">
              <Icon size="34px" color="#0000000f" icon={'yelp'} />
              <div className="revWrap">
                <p className="userName">{item.user.name}</p>
                <p className="text">"{item.text}"</p>
              </div>
            </div>
          ))}
        </Reviews>
      </InnerWrap>
    </Wrap>
  );
};
