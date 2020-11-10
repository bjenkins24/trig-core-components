import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeTrello = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <defs>
        <linearGradient
          x1="49.957%"
          y1="43.571%"
          x2="49.957%"
          y2="138.051%"
          id="a"
        >
          <stop stopColor="#2684FF" offset="0%" />
          <stop stopColor="#0052CC" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M28.19.76H4.034C1.787.76 0 2.53 0 4.757v23.943C0 30.928 1.787 32.7 4.034 32.7H28.19c2.247 0 4.034-1.772 4.034-3.999V4.758C32.173 2.531 30.386.76 28.19.76zM13.993 24.954a1.931 1.931 0 01-1.94 1.924H6.127c-1.072 0-1.94-.86-1.94-1.924V6.834c0-1.063.868-1.924 1.94-1.924h5.975c1.073 0 1.94.86 1.94 1.924v18.121h-.05zm13.992-7.998a1.931 1.931 0 01-1.94 1.924H20.12c-1.073 0-1.94-.86-1.94-1.924V6.834c0-1.063.867-1.924 1.94-1.924h5.975c1.072 0 1.94.86 1.94 1.924l-.05 10.123z"
        transform="translate(0 -.7)"
        fill="url(#a)"
        fillRule="nonzero"
      />
    </IconWrapper>
  );
};

TypeTrello.defaultProps = {
  title: 'Trello Icon',
};

TypeTrello.propTypes = propTypes;

export default TypeTrello;
