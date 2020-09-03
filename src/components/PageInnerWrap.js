import styled from 'styled-components';
import { respondTo } from '../helper';

const PageInnerWrap = styled.div`
  width: 80vw;
  margin: 0 auto;
  ${respondTo.sm`
		width: calc(100% - 200px);
	`}
`;

export default PageInnerWrap;
