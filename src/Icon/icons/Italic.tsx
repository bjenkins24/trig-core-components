import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const Italic = ({ title = 'Italic Icon', ...restProps }: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.689 0l-.511 2h3.578c.843 0 1.356.653 1.126 1.453L11.03 28.547C10.8 29.347 9.932 30 9.089 30H5.51L5 32h14.822l.511-2h-4.089c-.843 0-1.356-.653-1.126-1.453L21.97 3.453C22.2 2.653 23.068 2 23.911 2h3.578L28 0H13.689z"
      />
    </IconWrapper>
  );
};
