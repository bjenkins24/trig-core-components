import React from 'react';
import PropTypes from 'prop-types';

const imageTypes = {
  alt: PropTypes.string.isRequired,
};

const Image = ({ alt, ...restProps }) => {
  return <img alt={alt} {...restProps} />;
};

Image.propTypes = imageTypes;

export default Image;
