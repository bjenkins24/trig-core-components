import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Check = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M29.543 4L9.918 23.193l-7.461-7.296L0 18.3 9.918 28 32 6.403z"
      />
    </IconWrapper>
  );
};

Check.defaultProps = {
  title: 'Check Icon',
};

Check.propTypes = propTypes;

export default Check;
