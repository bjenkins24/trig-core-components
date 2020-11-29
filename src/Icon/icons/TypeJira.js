import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeJira = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <defs>
        <linearGradient
          x1="98.042%"
          y1="7.825%"
          x2="60.093%"
          y2="43.168%"
          id="gmptuvezrz"
        >
          <stop stopColor="#0052CC" offset="17.6%" />
          <stop stopColor="#2684FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="100.6%"
          y1="8.115%"
          x2="56.647%"
          y2="46.633%"
          id="emxfaxlitp"
        >
          <stop stopColor="#0052CC" offset="17.6%" />
          <stop stopColor="#2684FF" offset="100%" />
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <path
          d="M30.83 1H15.325c0 3.567 3.137 6.47 6.99 6.47h2.869V10c0 3.566 3.137 6.469 6.99 6.469V2.244C32.174 1.54 31.592 1 30.83 1z"
          fill="#2684FF"
        />
        <path
          d="M23.167 7.133H7.663c0 3.567 3.136 6.47 6.99 6.47h2.868v2.57c0 3.567 3.137 6.47 6.99 6.47V8.377c0-.663-.582-1.244-1.344-1.244z"
          fill="url(#gmptuvezrz)"
          transform="translate(0 1)"
        />
        <path
          d="M15.505 14.308H0c0 3.566 3.137 6.47 6.99 6.47h2.868v2.529c0 3.567 3.137 6.47 6.991 6.47V15.552c0-.705-.627-1.244-1.344-1.244z"
          fill="url(#emxfaxlitp)"
          transform="translate(0 1)"
        />
      </g>
    </IconWrapper>
  );
};

TypeJira.defaultProps = {
  title: 'Jira Icon',
};

TypeJira.propTypes = propTypes;

export default TypeJira;
