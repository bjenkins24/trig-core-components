import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const ArrowDown = ({
  title = 'Arrow Down Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.41 24.334L.658 10.58a2.24 2.24 0 1 1 3.167-3.168l12.17 12.171 12.17-12.17a2.24 2.24 0 0 1 3.169 3.168L17.578 24.334a2.232 2.232 0 0 1-1.583.656 2.233 2.233 0 0 1-1.584-.656z"
      />
    </IconWrapper>
  );
};
