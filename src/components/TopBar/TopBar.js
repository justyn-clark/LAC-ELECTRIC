import styled from 'styled-components';
import { respondTo } from '../../helper';

const TopBar = styled.header`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  padding: 0.5rem 50px;
  color: white;
  background: #1e283a;
  ${respondTo.sm`
    display: flex;
		flex-direction: row;
		padding: 0.5rem 27px;
		height: 50px;
	`}
  ${respondTo.md`
		padding: 0.5rem 80px;
	`}
  a {
    margin-right: 2rem;
    color: white;
    text-decoration: none;
    & + p {
      margin-right: 0.5rem;
    }
  }
  .social {
    flex: 1;
    a {
      margin-right: 0.2rem;
    }
  }
  .contactInfo {
    display: flex;
    align-items: center;
    .flex {
      display: flex;
      align-items: center;
    }
  }
`;

export default TopBar;
