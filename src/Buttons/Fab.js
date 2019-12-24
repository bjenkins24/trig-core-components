import styled from 'styled-components';
import { getColor, getColorContrast, getColorShade } from '../utils';

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
    background: ${getColorShade({ default: 's', shade: 600 })};
  }
  & > * {
    margin: 0 auto;
  }
`;

export default Fab;
