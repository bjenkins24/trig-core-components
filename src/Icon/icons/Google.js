import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Google = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="nonzero">
        <path
          fill="#FFC107"
          d="M19.75 8.588h-.805v-.041h-9v4h5.653a6.001 6.001 0 01-5.653 4c-3.314 0-6-2.686-6-6 0-3.315 2.686-6 6-6 1.53 0 2.922.576 3.98 1.52l2.829-2.829A9.952 9.952 0 009.945.547c-5.523 0-10 4.476-10 10 0 5.523 4.477 10 10 10 5.524 0 10-4.477 10-10 0-.67-.068-1.324-.195-1.96z"
        />
        <path
          fill="#FF3D00"
          d="M1.098 5.893l3.287 2.41a5.996 5.996 0 015.56-3.756c1.53 0 2.922.576 3.98 1.52l2.829-2.829A9.952 9.952 0 009.945.547a9.994 9.994 0 00-8.847 5.346z"
        />
        <path
          fill="#4CAF50"
          d="M9.945 20.547c2.582 0 4.93-.988 6.705-2.596l-3.095-2.619a5.96 5.96 0 01-3.61 1.215 5.995 5.995 0 01-5.64-3.973l-3.262 2.512c1.654 3.238 5.016 5.46 8.902 5.46z"
        />
        <path
          fill="#1976D2"
          d="M19.75 8.588h-.805v-.041h-9v4h5.653a6.027 6.027 0 01-2.045 2.785h.002l3.095 2.62c-.218.196 3.295-2.405 3.295-7.405 0-.67-.068-1.324-.195-1.96z"
        />
      </g>
    </IconWrapper>
  );
};

Google.defaultProps = {
  title: 'Google Icon',
};

Google.propTypes = propTypes;

export default Google;
