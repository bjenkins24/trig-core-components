import styled, { css } from 'styled-components';
import get from 'lodash/get';

const getWeight = ({ weight }) => {
  const weightMap = {
    normal: 400,
    bold: 600,
  };
  return get(weightMap, weight, 400);
};

const getColor = (defaultColor = 'cp') => ({ theme, color }) => {
  return `rgb(${get(theme, color, theme[defaultColor])})`;
};

const buttonStyles = ({ as }) => {
  if (as !== 'button') return false;
  return css`
    margin-top: 0;
    border: 0;
    padding: 0;
    cursor: pointer;
    font-family: hero-new, sans-serif;
    &:focus {
      outline: 0;
      color: ${({ theme }) => `rgb(${theme.cs})`};
    }
  `;
};

const Huge = styled.h1`
  font-size: 6.4rem;
  line-height: 1.3;
  color: ${getColor()};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 2.4rem;
  ${buttonStyles};
`;

const H1 = styled.h1`
  font-size: 3.4rem;
  line-height: 1.3;
  color: ${getColor()};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const H2 = styled.h2`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 600;
  color: ${getColor('cs')};
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const H3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${getColor()};
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const H4 = styled.h4`
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${getColor()};
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const Body1 = styled.span`
  font-size: 1.6rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body2 = styled.span`
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body3 = styled.span`
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const TinyText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${getColor()};
  ${buttonStyles};
`;

export { TinyText, Body1, Body2, Body3, H4, H3, H2, H1, Huge };
