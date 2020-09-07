import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const ArrowRight = ({
  title = 'Arrow Right Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M24.352 17.584l-13.577 13.76a2.19 2.19 0 0 1-3.127 0 2.262 2.262 0 0 1 0-3.17L19.662 16 7.648 3.826a2.263 2.263 0 0 1 0-3.17 2.19 2.19 0 0 1 3.127 0l13.578 13.76c.431.437.647 1.01.647 1.584a2.25 2.25 0 0 1-.648 1.584z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};
