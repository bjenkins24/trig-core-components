import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const Close = ({ title = 'Close Icon', ...restProps }: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M18.828 16l8.486 8.485a2 2 0 1 1-2.829 2.829L16 18.828l-8.485 8.486a2 2 0 1 1-2.829-2.829L13.172 16 4.686 7.515a2 2 0 1 1 2.829-2.829L16 13.172l8.485-8.486a2 2 0 1 1 2.829 2.829L18.828 16z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};
