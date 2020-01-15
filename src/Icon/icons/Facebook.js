import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Facebook = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M24 11.2h-5.359V8c0-1.651.128-2.691 2.376-2.691h2.84V.22A37.69 37.69 0 0019.695 0C15.57 0 12.56 2.651 12.56 7.518V11.2H8v6.4l4.56-.002V32h6.081V17.595l4.661-.001L24 11.2z"
      />
    </IconWrapper>
  );
};

Facebook.defaultProps = {
  title: 'Facebook Icon',
};

Facebook.propTypes = propTypes;

export default Facebook;
