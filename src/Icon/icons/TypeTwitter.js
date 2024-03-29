import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeTwitter = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="IPzWzfDCjS"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ucfhzNhuqg"
          transform="translate(0 3)"
          fill="#03A9F4"
          fillRule="nonzero"
        >
          <path
            d="M32 3.078c-1.19.522-2.458.868-3.78 1.036A6.523 6.523 0 0031.106.488a13.11 13.11 0 01-4.16 1.588A6.574 6.574 0 0022.154 0c-3.632 0-6.556 2.948-6.556 6.562 0 .52.044 1.02.152 1.496-5.454-.266-10.28-2.88-13.522-6.862a6.605 6.605 0 00-.898 3.316 6.57 6.57 0 002.914 5.452 6.479 6.479 0 01-2.964-.808v.072c0 3.188 2.274 5.836 5.256 6.446a6.548 6.548 0 01-1.72.216 5.8 5.8 0 01-1.242-.112c.85 2.598 3.262 4.508 6.13 4.57a13.182 13.182 0 01-8.134 2.798c-.538 0-1.054-.024-1.57-.09A18.469 18.469 0 0010.064 26c12.072 0 18.672-10 18.672-18.668 0-.29-.01-.57-.024-.848A13.087 13.087 0 0032 3.078z"
            id="Path"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

TypeTwitter.defaultProps = {
  title: 'Twitter Icon',
};

TypeTwitter.propTypes = propTypes;

export default TypeTwitter;
