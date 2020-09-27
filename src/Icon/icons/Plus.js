import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Plus = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M16 0a2 2 0 012 2v12h12a2 2 0 110 4H18v12a2 2 0 11-4 0V18H2a2 2 0 110-4h12V2a2 2 0 012-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};

Plus.defaultProps = {
  title: 'Plus Icon',
};

Plus.propTypes = propTypes;

export default Plus;
