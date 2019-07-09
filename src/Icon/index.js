import React from 'react';
const files = require.context('./icons', false, /.*\.svg$/);
files.keys().forEach(files);

const Icon = ({ type, className }) => {
  return (<svg width="1em" height="1em">
    <use xlinkHref={ `#${ type }` }></use>
  </svg>);
};

export default Icon;
