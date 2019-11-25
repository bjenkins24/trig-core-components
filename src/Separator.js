import styled from 'styled-components';
import { getColor } from './utils';

const Separator = styled.div`
  width: 100%;
  height: ${({ size }) => (size ? `${size}rem` : '0.1rem')};
  background: ${getColor('bcs.100')};
`;

export default Separator;
