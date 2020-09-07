import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const ArrowLeft = ({
  title = 'Arrow Left Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M7.648 14.416L21.225.656a2.19 2.19 0 0 1 3.127 0 2.262 2.262 0 0 1 0 3.17L12.338 16l12.014 12.174a2.263 2.263 0 0 1 0 3.17 2.19 2.19 0 0 1-3.127 0L7.647 17.584A2.248 2.248 0 0 1 7 16c0-.573.216-1.147.648-1.584z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};
