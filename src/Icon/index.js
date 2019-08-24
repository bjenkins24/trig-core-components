import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
import mapTypes from './mapTypes';

const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const getTitle = ({ title, mappedIcon, type }) => {
  if (title) return title;
  return get(mappedIcon, 'title', `${capitalize(type)} icon`);
};

const Icon = ({ type, size, title, desc, ...restProps }) => {
  const mappedIcon = mapTypes(type);

  return (
    <svg width={`${size}rem`} height={`${size}rem`} role="img" {...restProps}>
      <title>{getTitle({ title, mappedIcon, type })}</title>
      <desc>{desc}</desc>
      <use xlinkHref={`#${mappedIcon.type}`} />
    </svg>
  );
};

Icon.defaultProps = {
  size: 3.2,
  desc: '',
  title: '',
};

Icon.propTypes = {
  type: PropTypes.oneOf([
    'avatar',
    'cards',
    'comments',
    'deck',
    'followers',
    'heart',
    'left-arrow',
    'right-arrow',
  ]).isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default Icon;
