import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const ArrowUp = ({
  title = 'Arrow Up Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M17.578 6.656l13.755 13.755a2.24 2.24 0 1 1-3.168 3.168l-12.17-12.17-12.17 12.17A2.24 2.24 0 0 1 .655 20.41L14.411 6.656A2.232 2.232 0 0 1 15.994 6c.574 0 1.147.219 1.584.656z"
      />
    </IconWrapper>
  );
};
