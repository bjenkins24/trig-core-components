import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeCode = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="nonzero">
        <path
          fill="#2C3E50"
          d="M2.91 1.5A2.913 2.913 0 000 4.41v23.272c0 1.6 1.302 2.909 2.91 2.909h26.18c1.608 0 2.91-1.31 2.91-2.91V4.41c0-1.6-1.302-2.91-2.91-2.91H2.91z"
        />
        <path
          fill="#34495E"
          d="M2.91 29.136A2.913 2.913 0 010 26.227V8.773h32v17.454c0 1.6-1.302 2.91-2.91 2.91H2.91z"
        />
        <path
          fill="#ECF0F1"
          d="M4.364 5.136v1.6l2.909 3.491-2.909 3.346v1.6l4.363-4.946-4.363-5.091z"
        />
        <path
          fill="#34495E"
          d="M2.91 1.5A2.909 2.909 0 000 4.41v17.454h32V4.41a2.909 2.909 0 00-2.91-2.91H2.91z"
        />
        <path
          fill="#ECF0F1"
          d="M4.364 6.045v1.637l4.363 2.545-4.363 2.546v1.636l7.272-4.182-7.272-4.182zm7.272 7.091v1.455h7.273v-1.455h-7.273z"
        />
      </g>
    </IconWrapper>
  );
};

TypeCode.defaultProps = {
  title: 'Code Icon',
};

TypeCode.propTypes = propTypes;

export default TypeCode;
