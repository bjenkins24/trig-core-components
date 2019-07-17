import styled from 'styled-components';

const HorizontalGroup = styled.div`
  display: flex;
  align-items: center;

  > *:not(:last-child) {
    ${({ margin }) => margin && `margin-right: ${margin}rem`};
    ${({ padding }) => padding && `padding-right: ${padding}rem`};
  }
`;

const VerticalGroup = styled.div`
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    ${({ margin }) => margin && `margin-bottom: ${margin}rem`};
    ${({ padding }) => padding && `padding-bottom: ${padding}rem`};
  }
`;

export { HorizontalGroup, VerticalGroup };
