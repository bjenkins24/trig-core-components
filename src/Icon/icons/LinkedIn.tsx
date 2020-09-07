import React from 'react';
import IconWrapper from '../IconWrapper';
import { IconProps } from './types';

export const LinkedIn = ({
  title = 'LinkedIn Icon',
  ...restProps
}: IconProps) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.775 0C2.691 0 1 1.719 1 3.84c0 2.123 1.69 3.882 3.772 3.882 2.083 0 3.775-1.759 3.775-3.881C8.547 1.72 6.86 0 4.775 0zm18.418 10.182c-3.17 0-4.984 1.688-5.854 3.366h-.092v-2.914H11V32h6.51V21.423c0-2.787.206-5.48 3.593-5.48 3.339 0 3.388 3.178 3.388 5.656V32H31V20.264c0-5.742-1.213-10.082-7.807-10.082zm-21.674.452V32h6.515V10.634H1.519z"
      />
    </IconWrapper>
  );
};
