import React from 'react';
import PropTypes from 'prop-types';

const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, size, ...restProps }) => {
  return (
    <svg width={`${size}rem`} height={`${size}rem`} {...restProps}>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 3.2,
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default Icon;
