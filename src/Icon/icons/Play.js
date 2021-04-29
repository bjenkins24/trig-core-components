import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Play = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="gvJSMUdUUo"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="LCFlHYUXwK" fill="currentColor" fillRule="nonzero">
          <path
            d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.163 16-16S24.836 0 16 0zm5.53 16.848l-8 5A1 1 0 0112 21V11a1 1 0 011.53-.848l8 5a1.001 1.001 0 010 1.696z"
            id="fCeosuSLHS"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

Play.defaultProps = {
  title: 'Play Icon',
};

Play.propTypes = propTypes;

export default Play;
