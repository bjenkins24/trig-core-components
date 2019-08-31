import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import get from 'lodash/get';
import capitalize from 'lodash/capitalize';
import { getColor } from '../utils/getColor';
import mapIconTypes from './mapIconTypes';
import iconTypePropTypes from './iconTypePropTypes';

const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const getTitle = ({ title, mappedIcon, type }) => {
  if (title) return title;
  return get(mappedIcon, 'title', `${capitalize(type)} icon`);
};

const StyledSvg = styled.svg`
  color: ${getColor()};
`;

const Icon = ({ type, size, title, desc, ...restProps }) => {
  const mappedIcon = mapIconTypes(type);

  return (
    <StyledSvg
      width={`${size}rem`}
      height={`${size}rem`}
      role="img"
      {...restProps}
    >
      <title>{getTitle({ title, mappedIcon, type })}</title>
      <desc>{desc}</desc>
      <use xlinkHref={`#${mappedIcon.type}`} />
    </StyledSvg>
  );
};

Icon.defaultProps = {
  size: 3.2,
  desc: '',
  title: '',
};

export const iconPropTypes = {
  type: iconTypePropTypes.isRequired,
  size: PropTypes.number,
  title: PropTypes.string,
  desc: PropTypes.string,
};

Icon.propTypes = iconPropTypes;

export default Icon;
