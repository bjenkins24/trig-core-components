import styled from 'styled-components';
import { getColor, getColorContrast, getColorShade } from '../utils/getColor';

const defaultSize = 5.6;

const Fab = styled.div`
  background: ${getColor('s')};
  box-shadow: ${({ theme }) => theme.sh};
  border-radius: 50%;
  width: ${({ size }) => (size ? `${size}rem` : `${defaultSize}rem`)};
  height: ${({ size }) => (size ? `${size}rem` : `${defaultSize}rem`)};
  display: flex;
  align-items: center;
  color: ${getColorContrast('s')};
  cursor: pointer;
  transition: background 150ms;
  &:hover {
    background: ${getColorShade('s', 600)};
  }
`;

export default Fab;
