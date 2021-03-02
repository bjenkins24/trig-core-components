import React from 'react';
import { keyframes } from 'styled-components';
import propTypes from '../propTypes';

const curve = 'cubic-bezier(0.650, 0.000, 0.450, 1.000)';

const stroke = keyframes`
  100% {
      stroke-dashoffset: 0;
  }
`;
const scale = keyframes`
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
`;

const fill = keyframes`
  100% {
      box-shadow: inset 0px 0px 0px 30px #009E8F;
  }
`;

const AnimatedCheck = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
      css={`
        width: ${size}rem;
        height: ${size}rem;
        border-radius: 50%;
        display: block;
        stroke-width: 2;
        stroke: ${({ theme }) => theme.sc};
        stroke-miterlimit: 10;
        box-shadow: inset 0px 0px 0px ${({ theme }) => theme.s};
        animation: ${fill} 0.4s ease-in-out 0.4s forwards,
          ${scale} 0.3s ease-in-out 0.9s both;
      `}
    >
      <circle
        css={`
          stroke-dasharray: 166;
          stroke-dashoffset: 166;
          stroke-width: 2;
          stroke-miterlimit: 10;
          stroke: ${({ theme }) => theme.s};
          fill: none;
          animation: ${stroke} 0.6s ${curve} forwards;
        `}
        cx="26"
        cy="26"
        r="25"
        fill="none"
      />
      <path
        css={`
          transform-origin: 50% 50%;
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: ${stroke} 0.3s ${curve} 0.8s forwards;
        `}
        fill="none"
        d="M14.1 27.2l7.1 7.2 16.7-16.8"
      />
    </svg>
  );
};

AnimatedCheck.defaultProps = {
  title: 'Check Icon',
  size: 3.2,
};

AnimatedCheck.propTypes = propTypes;

export default AnimatedCheck;
