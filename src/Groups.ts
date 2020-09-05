import styled from 'styled-components';
import { position, flexbox, layout, space, color, border } from 'styled-system';

const HorizontalGroup = styled.div`
  display: flex;
  align-items: center;

  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}
  
  > *:not(:last-child) {
    ${({ margin }) => margin && `margin-right: ${margin}rem`};
    ${({ padding }) => padding && `padding-right: ${padding}rem`};
  } 
  > *:not(:last-child) {
    ${({ spacer, theme }) =>
      spacer && `margin-right: ${theme.space[spacer]}px`};
    ${({ spacerPadding, theme }) =>
      spacerPadding && `padding-right: ${theme.space[spacerPadding]}px`};
  }
`;

const VerticalGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${space}
  ${color}
  ${layout}
  ${flexbox}
  ${border}
  ${position}

  > *:not(:last-child) {
    ${({ margin }) => margin && `margin-bottom: ${margin}rem`};
    ${({ padding }) => padding && `padding-bottom: ${padding}rem`};
  }
`;

export { HorizontalGroup, VerticalGroup };
