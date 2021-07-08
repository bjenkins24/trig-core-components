import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Eye = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M31.79 15.55c.2.24.21.6 0 .85-.04.06-15.49 18.95-31.6.02a.66.66 0 01-.02-.87c16.05-18.86 31.43-.23 31.62 0zm-30.24.43c13.56 15.42 26.52 2.57 28.85 0-2.33-2.57-15.29-15.42-28.85 0zm14.43-4.92a4.9 4.9 0 013.48 8.4 4.9 4.9 0 01-8.4-3.48 4.9 4.9 0 014.92-4.92zm0 1.33a3.58 3.58 0 00-2.54 6.13 3.58 3.58 0 006.13-2.54 3.58 3.58 0 00-3.6-3.6z"
      />
    </IconWrapper>
  );
};

Eye.defaultProps = {
  title: 'Eye Icon',
};

Eye.propTypes = propTypes;

export default Eye;
