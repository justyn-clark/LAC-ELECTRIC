import styled from 'styled-components';
import { respondTo } from '../../helper';

const TopBar = styled.header`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  padding: 0.5rem 0;
  color: white;
  background: #1e283a;
  ${respondTo.sm`
    display: flex;
		flex-direction: row;
		padding: 0.5rem 100px;
		height: 50px;
	`}
`;

export default TopBar;
