import React from 'react';
import PropTypes from 'prop-types';
import mapIconTypes from './mapIconTypes';

const fileIconTypes = {
  type: PropTypes.string.isRequired,
};

const FileIcon = ({ type, ...restProps }) => {
  const resultType = mapIconTypes(type);
  const Icon = resultType.type;

  return <Icon title={resultType.title} {...restProps} />;
};

FileIcon.propTypes = fileIconTypes;

export default FileIcon;
