import styled from 'styled-components';
import { position, flexbox, layout, space, color, border } from 'styled-system';

const Box = styled.div`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${position}
  ${border}
`;

export default Box;
