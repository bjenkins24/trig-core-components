import styled from 'styled-components';
import { getWidth } from '../utils';

const Fieldset = styled.fieldset`
  ${getWidth}
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  > * {
    ${({ margin }) =>
      margin ? `margin-bottom: ${margin}rem` : `margin-bottom: 2.4rem`};
  }
`;

export default Fieldset;
