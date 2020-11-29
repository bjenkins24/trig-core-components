import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeStackOverflow = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fillRule="nonzero" fill="none">
        <path
          fill="#BBB"
          d="M25.129 20.645h2.828V32H2.5V20.645h2.829v8.516h19.8z"
        />
        <path
          d="M8.411 19.801l13.892 2.93.584-2.786-13.892-2.932-.584 2.788zm1.838-6.676l12.87 6.015 1.198-2.583-12.869-6.015-1.199 2.583zM13.81 6.79l10.91 9.118 1.817-2.19L15.627 4.6 13.81 6.79zM20.853.05L18.574 1.75l8.473 11.432 2.278-1.7L20.853.05zM8.157 26.324H22.3v-2.84H8.157v2.84z"
          fill="#F58025"
        />
      </g>
    </IconWrapper>
  );
};

TypeStackOverflow.defaultProps = {
  title: 'Stack Overflow Icon',
};

TypeStackOverflow.propTypes = propTypes;

export default TypeStackOverflow;
