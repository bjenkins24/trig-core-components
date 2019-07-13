import React from 'react';
import PropTypes from 'prop-types';
import capitalize from 'lodash/capitalize';

const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, size, title, desc, ...restProps }) => {
  return (
    <svg width={`${size}rem`} height={`${size}rem`} role="img" {...restProps}>
      <title>{title || `${capitalize(type)} icon`}</title>
      <desc>{desc}</desc>
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 3.2,
  desc: '',
  title: '',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
