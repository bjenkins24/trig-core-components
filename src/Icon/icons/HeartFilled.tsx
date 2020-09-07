import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const HeartFilled = ({
  title = 'Heart Filled Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M23.5 2c-1.736 0-3.328.55-4.732 1.635-1.345 1.04-2.24 2.366-2.768 3.33-.527-.964-1.423-2.29-2.768-3.33C11.828 2.55 10.236 2 8.5 2 3.654 2 0 5.964 0 11.22c0 5.678 4.559 9.563 11.46 15.444 1.173 1 2.501 2.131 3.882 3.339a.999.999 0 0 0 1.316 0c1.381-1.208 2.71-2.34 3.882-3.34C27.441 20.784 32 16.899 32 11.22 32 5.964 28.346 2 23.5 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};
