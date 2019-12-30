import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const HorizontalDots = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.49 19.049A3.494 3.494 0 0 1 0 15.559a3.494 3.494 0 0 1 3.49-3.49 3.494 3.494 0 0 1 3.49 3.49 3.494 3.494 0 0 1-3.49 3.49zm12.298 0a3.494 3.494 0 0 1-3.49-3.49 3.494 3.494 0 0 1 3.49-3.49 3.494 3.494 0 0 1 3.49 3.49 3.494 3.494 0 0 1-3.49 3.49zm12.69 0a3.494 3.494 0 0 1-3.49-3.49 3.494 3.494 0 0 1 3.49-3.49 3.494 3.494 0 0 1 3.491 3.49 3.494 3.494 0 0 1-3.49 3.49z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </svg>
    </IconWrapper>
  );
};

HorizontalDots.defaultProps = {
  title: 'Horizontal Dots Icon',
};

HorizontalDots.propTypes = propTypes;

export default HorizontalDots;
