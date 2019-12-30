import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeYoutube = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="nonzero">
        <path
          d="M31.085 8.477a3.977 3.977 0 0 0-2.797-2.797C25.804 5 15.869 5 15.869 5s-9.934 0-12.418.654C2.118 6.02 1.02 7.118.654 8.477 0 10.961 0 16.111 0 16.111s0 5.177.654 7.634a3.977 3.977 0 0 0 2.797 2.797c2.51.68 12.418.68 12.418.68s9.935 0 12.419-.653a3.977 3.977 0 0 0 2.797-2.798c.654-2.483.654-7.634.654-7.634s.026-5.176-.654-7.66z"
          fill="red"
        />
        <path fill="#FFF" d="M20.967 16.111l-8.261-4.758v9.516z" />
      </g>
    </IconWrapper>
  );
};

TypeYoutube.defaultProps = {
  title: 'YouTube Icon',
};

TypeYoutube.propTypes = propTypes;

export default TypeYoutube;
