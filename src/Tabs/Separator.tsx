import styled from 'styled-components';
import { separatorHeight } from './constants';
import { Theme } from '../utils/theme';
import { VariantType } from './types';

interface SeparatorProps {
  variant: VariantType;
}

export const Separator = styled.div<SeparatorProps>`
  height: ${separatorHeight};
  background: ${({ theme, variant }: { theme: Theme; variant: VariantType }) =>
    variant === 'dark' ? theme.ps[200] : theme.p};
  overflow: hidden;
`;
