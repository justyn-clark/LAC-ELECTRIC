import styled from 'styled-components';
import { respondTo } from '../helper';

const InnerWrap = styled.div`
  width: 80vw;
  margin: 0 auto;
  ${respondTo.sm`
		width: calc(100% - 100px);
	`}
`;

export default InnerWrap;
