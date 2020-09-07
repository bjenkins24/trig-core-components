import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const CheckCircle = ({
  title = 'Check Circle Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 0C7.177 0 0 7.177 0 16s7.177 16 16 16 16-7.177 16-16S24.823 0 16 0zm0 2.286A13.697 13.697 0 0129.714 16 13.697 13.697 0 0116 29.714 13.697 13.697 0 012.286 16 13.697 13.697 0 0116 2.286zm7.192 7.192l-10.62 10.616-3.76-3.76-1.62 1.617 5.38 5.38 12.24-12.237-1.62-1.616z"
      />
    </IconWrapper>
  );
};
