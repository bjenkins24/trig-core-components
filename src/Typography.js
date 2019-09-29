import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { getColor } from './utils/getColor';

const getWeight = ({ weight }) => {
  const weightMap = {
    normal: 400,
    bold: 600,
  };
  return get(weightMap, weight, 400);
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
      color: ${({ theme }) => theme.s};
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

const Heading1 = styled.h1`
  font-size: 3.4rem;
  line-height: 1.3;
  color: ${getColor()};
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const Heading2 = styled.h2`
  font-size: 2.6rem;
  line-height: 1.3;
  font-weight: 600;
  color: ${getColor('s')};
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const Heading3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  color: ${getColor()};
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const Heading4 = styled.h4`
  font-size: 1.3rem;
  line-height: 1.7;
  color: ${getColor('bcs.200')};
  margin-top: 0;
  margin-bottom: 1.6rem;
  ${buttonStyles};
`;

const Body1Styles = css`
  font-size: 1.6rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body1 = styled.span`
  ${Body1Styles}
`;

const Body2Styles = css`
  font-size: 1.4rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const Body2 = styled.span``;

const Body3 = styled.span`
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: ${getWeight};
  color: ${getColor()};
  ${buttonStyles};
`;

const TinyText = styled.span`
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  color: ${getColor()};
  ${buttonStyles};
`;

export {
  Huge,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Body1,
  Body1Styles,
  Body2,
  Body2Styles,
  Body3,
  TinyText,
};
