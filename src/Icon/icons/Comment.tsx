import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const Comment = ({
  title = 'Comment Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M16 7a.5.5 0 0 1 0 1c-5.327 0-10 2.804-10 6a.5.5 0 0 1-1 0c0-3.794 5.037-7 11-7zm0-5c8.836 0 16 5.373 16 12s-7.165 12-16 12a21.18 21.18 0 0 1-3.086-.229c-.684.832-3.628 3.703-6.753 4.215.004-.011-.161.014-.255.014a.906.906 0 0 1-.832-1.264h-.002C5.661 27.723 7 25.793 7 24c0-.029.008-.047.008-.074C2.779 21.766 0 18.127 0 14 0 7.373 7.163 2 16 2zm0 22c7.719 0 14-4.486 14-10S23.718 4 16 4C8.28 4 2 8.486 2 14c0 3.207 2.212 6.252 5.918 8.144a2 2 0 0 1 1.081 1.965c-.021 1.034-.326 2.037-.716 2.932 1.439-.855 2.657-2.018 3.085-2.539a2 2 0 0 1 1.836-.709c.938.137 1.879.207 2.796.207z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};
