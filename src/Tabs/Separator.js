import styled from 'styled-components';
import { separatorHeight } from './constants';

export const Separator = styled.div`
  height: ${separatorHeight};
  background: ${({ theme, variant }) =>
    variant === 'dark' ? theme.ps[200] : theme.p};
  overflow: hidden;
`;
