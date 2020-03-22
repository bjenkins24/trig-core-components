import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Lock = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M27.333 12h-2V9.333C25.333 4.187 21.147 0 16 0c-5.146 0-9.333 4.187-9.333 9.333V12h-2a.666.666 0 00-.667.667v16.666A2.67 2.67 0 006.667 32h18.666A2.67 2.67 0 0028 29.333V12.667a.666.666 0 00-.667-.667zm-9.337 13.926a.668.668 0 01-.663.74h-2.666a.667.667 0 01-.663-.74l.42-3.781A2.638 2.638 0 0113.335 20 2.67 2.67 0 0116 17.333 2.67 2.67 0 0118.667 20c0 .862-.408 1.648-1.091 2.145l.42 3.781zM21.333 12H10.667V9.333A5.34 5.34 0 0116 4a5.34 5.34 0 015.333 5.333V12z"
      />
    </IconWrapper>
  );
};

Lock.defaultProps = {
  title: 'Lock Icon',
};

Lock.propTypes = propTypes;

export default Lock;
