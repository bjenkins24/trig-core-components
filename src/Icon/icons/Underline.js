import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Underline = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M9.022-.578v16.582c0 6.219 2.757 8.872 6.46 8.872 4.073 0 6.748-2.738 6.748-8.872V-.578h3.62v16.334c0 8.581-4.485 12.063-10.492 12.063-5.679 0-9.957-3.234-9.957-11.94V-.577h3.62zM5.401 29.981H25.85v2.597H5.401z" />
      </g>
    </IconWrapper>
  );
};

Underline.defaultProps = {
  title: 'Underline Icon',
};

Underline.propTypes = propTypes;

export default Underline;
