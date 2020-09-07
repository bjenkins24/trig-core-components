import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const Loading = ({
  title = 'Loading Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper
      title={title}
      svgProps={{
        preserveAspectRatio: 'xMidYMid',
        style: { background: '0 0' },
        className: 'lds-rolling',
        viewBox: '0 0 100 100',
      }}
      {...restProps}
    >
      <circle
        cx="50"
        cy="50"
        r="47"
        fill="none"
        stroke="currentColor"
        strokeDasharray="221.482 75.827"
        strokeWidth="4.5"
        transform="rotate(106.1 50 50)"
      >
        <animateTransform
          attributeName="transform"
          begin="0s"
          calcMode="linear"
          dur="0.9s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="rotate"
          values="0 50 50;360 50 50"
        />
      </circle>
    </IconWrapper>
  );
};
