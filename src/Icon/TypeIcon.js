import React from 'react';
import PropTypes from 'prop-types';
import mapLinkToIcon from 'utils/mapLinkToIcon';
import mapIconTypes from './mapIconTypes';
import Icon from './index';

const fileIconTypes = {
  type: PropTypes.string.isRequired,
  url: PropTypes.string,
};

const defaultProps = {
  url: '',
};

const TypeIcon = ({ type, url, ...restProps }) => {
  if (type === 'link' && url) {
    const iconString = mapLinkToIcon(url);
    return <Icon type={iconString} {...restProps} />;
  }
  const resultType = mapIconTypes(type);
  const IconFile = resultType.type;

  return <IconFile title={resultType.title} {...restProps} />;
};

TypeIcon.propTypes = fileIconTypes;
TypeIcon.defaultProps = defaultProps;

export default TypeIcon;
