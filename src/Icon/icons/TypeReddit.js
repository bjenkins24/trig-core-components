import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeReddit = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fillRule="nonzero" fill="none">
        <circle fill="#FF4500" cx="16" cy="16" r="16" />
        <path
          d="M16.878 5.809a.529.529 0 01.63-.398l4.324.956a1.711 1.711 0 11-.18.957l-3.918-.868-1.33 5.714c2.556.029 5.038.85 7.106 2.35a2.518 2.518 0 013.863.304 2.612 2.612 0 01-1.042 3.732 6.096 6.096 0 01-2.612 5.715A12.927 12.927 0 0116 26.599a12.92 12.92 0 01-7.72-2.328 6.096 6.096 0 01-2.611-5.714 2.612 2.612 0 01-1.042-3.726 2.527 2.527 0 013.863-.31 12.336 12.336 0 016.919-2.348l1.47-6.364zm1.434 12.212a1.73 1.73 0 103.461 0 1.73 1.73 0 00-3.461 0zm2.06 4.77a.398.398 0 00-.424-.652 6.746 6.746 0 01-7.896 0 .398.398 0 00-.424.653 7.4 7.4 0 008.744 0zm-10.145-4.77a1.73 1.73 0 103.461 0 1.73 1.73 0 00-3.461 0z"
          fill="#FFF"
        />
      </g>
    </IconWrapper>
  );
};

TypeReddit.defaultProps = {
  title: 'Reddit Icon',
};

TypeReddit.propTypes = propTypes;

export default TypeReddit;
