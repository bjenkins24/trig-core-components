import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeAsana = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <defs>
        <radialGradient
          cx="50%"
          cy="54.652%"
          fx="50%"
          fy="54.652%"
          r="70.951%"
          gradientTransform="matrix(.93393 0 0 1 .033 0)"
          id="ivpydjrbne"
        >
          <stop stopColor="#FFB900" offset="0%" />
          <stop stopColor="#F95D8F" offset="60%" />
          <stop stopColor="#F95353" offset="99.91%" />
        </radialGradient>
      </defs>
      <path
        d="M24.984 15.786c-3.835 0-6.944 3.141-6.944 7.016s3.109 7.016 6.944 7.016 6.943-3.141 6.943-7.016-3.108-7.016-6.943-7.016zm-18.04 0C3.109 15.786 0 18.927 0 22.802s3.109 7.016 6.944 7.016 6.944-3.141 6.944-7.016-3.11-7.016-6.944-7.016zm15.963-8.77c0 3.875-3.108 7.016-6.943 7.016-3.835 0-6.944-3.141-6.944-7.016S12.13 0 15.964 0s6.943 3.141 6.943 7.016z"
        transform="translate(0 1)"
        fill="url(#ivpydjrbne)"
        fillRule="nonzero"
      />
    </IconWrapper>
  );
};

TypeAsana.defaultProps = {
  title: 'Asana Icon',
};

TypeAsana.propTypes = propTypes;

export default TypeAsana;
