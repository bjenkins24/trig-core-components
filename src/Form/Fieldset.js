import styled from 'styled-components';
import { getWidth } from '../utils';

const defaultProps = {
  width: 30,
};

const Fieldset = styled.fieldset`
  ${getWidth}
  border: 0;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    ${({ margin }) =>
      margin ? `margin-bottom: ${margin}rem` : `margin-bottom: 2.4rem`};
  }
`;

Fieldset.defaultProps = defaultProps;

export default Fieldset;
