import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeBitbucket = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <defs>
        <linearGradient
          x1="108.571%"
          y1="31.413%"
          x2="48.477%"
          y2="66.198%"
          id="a"
        >
          <stop stopColor="#0052CC" offset="17.6%" />
          <stop stopColor="#2684FF" offset="100%" />
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <path
          d="M.963 2.272c-.618 0-1.133.548-1.03 1.145l4.379 25.656c.103.647.67 1.145 1.39 1.145h20.966c.515 0 .927-.348 1.03-.846l4.379-25.955c.103-.597-.36-1.145-1.03-1.145H.963zm18.442 18.531h-6.697l-1.803-9.166h10.148l-1.648 9.166z"
          fill="#2684FF"
        />
        <path
          d="M32.186 9.637h-9.684l-1.597 9.166h-6.697L6.275 27.87s.36.348.927.348h20.966c.515 0 .927-.348 1.03-.847l2.988-17.734z"
          fill="url(#a)"
          transform="translate(-1.5 2)"
        />
      </g>
    </IconWrapper>
  );
};

TypeBitbucket.defaultProps = {
  title: 'Bitbucket Icon',
};

TypeBitbucket.propTypes = propTypes;

export default TypeBitbucket;
