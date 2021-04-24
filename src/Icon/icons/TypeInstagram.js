import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeInstagram = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <defs>
        <linearGradient
          x1="6.731%"
          y1="93.485%"
          x2="93.591%"
          y2="6.619%"
          id="jBRiFHjNUT"
        >
          <stop stopColor="#FD5" offset="0%" />
          <stop stopColor="#FF543E" offset="50%" />
          <stop stopColor="#C837AB" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="PQPSZaWHKV"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="rrOjYqEFWx" fillRule="nonzero">
          <path
            d="M2.133 2.247C-.367 4.844.145 7.603.145 15.983c0 6.96-1.214 13.936 5.14 15.578 1.985.51 19.567.51 21.549-.003 2.646-.682 4.798-2.828 5.093-6.57.04-.523.04-17.478-.002-18.01-.312-3.987-2.766-6.284-6-6.75-.74-.107-.889-.139-4.69-.145C7.75.089 4.794-.511 2.133 2.247z"
            id="wFYpJRYWwr"
            fill="url(#jBRiFHjNUT)"
          />
          <path
            d="M16.05 4.244c-4.814 0-9.385-.428-11.13 4.052-.721 1.85-.617 4.254-.617 7.695 0 3.02-.096 5.858.617 7.694 1.741 4.483 6.35 4.053 11.126 4.053 4.61 0 9.362.48 11.129-4.053.722-1.87.616-4.237.616-7.694 0-4.59.253-7.552-1.972-9.776-2.254-2.254-5.301-1.971-9.775-1.971h.005zM14.996 6.36c10.04-.016 11.317-1.132 10.612 14.373-.25 5.484-4.426 4.882-9.559 4.882-9.358 0-9.627-.268-9.627-9.63 0-9.472.742-9.62 8.574-9.628v.003zm7.322 1.95a1.41 1.41 0 100 2.818 1.41 1.41 0 000-2.818zm-6.27 1.647a6.032 6.032 0 000 12.064 6.03 6.03 0 006.03-6.031 6.031 6.031 0 00-6.03-6.033zm0 2.117c5.176 0 5.183 7.832 0 7.832-5.175 0-5.183-7.832 0-7.832z"
            id="vXYmgikxrL"
            fill="#FFF"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

TypeInstagram.defaultProps = {
  title: 'Instagram Icon',
};

TypeInstagram.propTypes = propTypes;

export default TypeInstagram;
