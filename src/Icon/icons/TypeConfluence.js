import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeConfluence = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <defs>
        <linearGradient
          x1="99.054%"
          y1="66.079%"
          x2="33.452%"
          y2="47.259%"
          id="cwsedtgwza"
        >
          <stop stopColor="#0052CC" offset="0%" />
          <stop stopColor="#2380FB" offset="91.82%" />
          <stop stopColor="#2684FF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1=".869%"
          y1="33.881%"
          x2="66.58%"
          y2="52.75%"
          id="ijurjbmzwv"
        >
          <stop stopColor="#0052CC" offset="0%" />
          <stop stopColor="#2380FB" offset="91.82%" />
          <stop stopColor="#2684FF" offset="100%" />
        </linearGradient>
      </defs>
      <g fillRule="nonzero" fill="none">
        <path
          d="M1.475 23.984c-.306.567-.713 1.187-1.018 1.703-.306.464-.153 1.083.356 1.393l6.617 4.128c.51.31 1.12.155 1.425-.36.255-.465.611-1.033.967-1.652 2.647-4.387 5.243-3.87 10.028-1.548l6.566 3.148c.509.258 1.12 0 1.374-.516l3.156-7.225c.203-.516 0-1.136-.51-1.342-1.373-.67-4.122-1.961-6.616-3.2-8.959-4.334-16.543-4.076-22.345 5.47z"
          fill="url(#cwsedtgwza)"
          transform="translate(-.3 .2)"
        />
        <path
          d="M31.15 7.624c.305-.567.712-1.186 1.017-1.702.306-.465.153-1.084-.356-1.394L25.194.4c-.509-.31-1.12-.155-1.425.36-.255.465-.61 1.033-.967 1.652-2.647 4.387-5.243 3.87-10.028 1.549L6.26.76c-.509-.258-1.12 0-1.374.516L1.729 8.502c-.203.516 0 1.135.51 1.342 1.373.67 4.122 1.96 6.616 3.2 8.908 4.386 16.492 4.128 22.294-5.42z"
          fill="url(#ijurjbmzwv)"
          transform="translate(-.3 .2)"
        />
      </g>
    </IconWrapper>
  );
};

TypeConfluence.defaultProps = {
  title: 'Confluence Icon',
};

TypeConfluence.propTypes = propTypes;

export default TypeConfluence;
