import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeBasecamp = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="MdYwstQHKY"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g
          id="qvXTkpFpAU"
          transform="translate(1.1 3)"
          stroke="#1D2D35"
          strokeWidth="3.41"
        >
          <path
            d="M.607 14.292C2.837 7.97 7.107.624 15.727.624S28.61 11.96 29.148 19.649c-2.264 3.93-7.688 5.407-13.42 5.407a16.12 16.12 0 01-12.31-5.407s2.699-7.287 5.219-7.305c1.854 0 3.417 3.418 4.895 3.418 1.478 0 4.553-6.561 4.553-6.561"
            id="Path"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

TypeBasecamp.defaultProps = {
  title: 'Basecamp Icon',
};

TypeBasecamp.propTypes = propTypes;

export default TypeBasecamp;
