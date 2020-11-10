import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeFigma = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fillRule="nonzero" fill="none">
        <path fill="none" d="M5.036.015h21.928v31.97H5.036z" />
        <path
          d="M16 16c0-2.943 2.454-5.328 5.482-5.328s5.482 2.385 5.482 5.328c0 2.943-2.454 5.328-5.482 5.328S16 18.943 16 16z"
          fill="#1ABCFE"
        />
        <path
          d="M5.036 26.657c0-2.943 2.454-5.329 5.482-5.329H16v5.329c0 2.943-2.454 5.328-5.482 5.328S5.036 29.6 5.036 26.657z"
          fill="#0ACF83"
        />
        <path
          d="M16 .015v10.657h5.482c3.028 0 5.482-2.386 5.482-5.329 0-2.942-2.454-5.328-5.482-5.328H16z"
          fill="#FF7262"
        />
        <path
          d="M5.036 5.343c0 2.943 2.454 5.329 5.482 5.329H16V.015h-5.482C7.49.015 5.036 2.4 5.036 5.343z"
          fill="#F24E1E"
        />
        <path
          d="M5.036 16c0 2.943 2.454 5.328 5.482 5.328H16V10.672h-5.482c-3.028 0-5.482 2.385-5.482 5.328z"
          fill="#A259FF"
        />
      </g>
    </IconWrapper>
  );
};

TypeFigma.defaultProps = {
  title: 'Figma Icon',
};

TypeFigma.propTypes = propTypes;

export default TypeFigma;
