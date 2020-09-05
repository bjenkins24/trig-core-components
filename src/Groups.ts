import styled from 'styled-components';
import {
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  border,
  BorderProps,
} from 'styled-system';

type GroupProps = PositionProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  ColorProps &
  BorderProps & {
    spacer: number;
    spacerPadding: number;
  };

const HorizontalGroup = styled.div<GroupProps>`
  display: flex;
  align-items: center;

  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  
  > *:not(:last-child) {
    ${({ margin }) => margin && `margin-right: ${String(margin)}rem`};
    ${({ padding }) => padding && `padding-right: ${String(padding)}rem`};
  } 
  > *:not(:last-child) {
    ${({ spacer, theme }) =>
      spacer && `margin-right: ${String(theme.space[spacer])}px`};
    ${({ spacerPadding, theme }) =>
      spacerPadding &&
      `padding-right: ${String(theme.space[spacerPadding])}px`};
  }
`;

const VerticalGroup = styled.div<GroupProps>`
  display: flex;
  flex-direction: column;

  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}

  > *:not(:last-child) {
    ${({ margin }) => margin && `margin-bottom: ${String(margin)}rem`};
    ${({ padding }) => padding && `padding-bottom: ${String(padding)}rem`};
  }
  > *:not(:last-child) {
    ${({ spacer, theme }) =>
      spacer && `margin-bottom: ${String(theme.space[spacer])}px`};
    ${({ spacerPadding, theme }) =>
      spacerPadding &&
      `padding-bottom: ${String(theme.space[spacerPadding])}px`};
  }
`;

export { HorizontalGroup, VerticalGroup };
