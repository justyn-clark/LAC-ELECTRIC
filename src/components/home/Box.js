import styled from 'styled-components';
import { respondTo } from '../../helper';

const Box = styled.div`
  flex: 1;
  position: relative;
  margin: 0 1rem 2rem;
  color: #ffffff;
  overflow: hidden;
  ${respondTo.sm`   
    margin: 0 1rem;
  `};

  .top {
    height: 290px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 2rem;
    background: #1e283a;
    text-align: center;
    transition: 0.3s;
    &:hover {
      background: #e4012e;
      transition: 0.3s;
    }
  }

  .bottom {
    position: relative;
    overflow: hidden;

    .img {
      // width: 370px;
      height: auto;
      transition: 0.5s all ease;
    }

    &:hover {
      .img {
        transition: 0.5s all ease;
        transform: scale(1.2);
        cursor: pointer;
      }
      .overlay {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        transition: 0.5s all ease;
        &:hover {
          opacity: 1;
          background: rgba(0, 0, 0, 0.5);
          transition: 0.5s all ease;
          cursor: pointer;
        }
        &:before {
          content: '\f065';
          position: absolute;
          margin-top: -15px;
          top: 50%;
          left: 0;
          right: 0;
          font: 400 30px 'FontAwesome';
          color: white;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }

  h4 {
    text-transform: uppercase;
    padding-bottom: 0.5rem;
    font-size: 24px;
  }
  p {
    font-weight: 300;
    line-height: 22px;
    font-size: 14px;
  }
`;

export default Box;
