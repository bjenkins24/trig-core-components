import React from 'react';
import PropTypes from 'prop-types';
import { Body1 } from '../Typography';

export const labelTypes = {
  children: PropTypes.string.isRequired,
};

const Label = ({ children, ...restProps }) => {
  return (
    <Body1 color="ps.200" as="label" {...restProps}>
      {children}
    </Body1>
  );
};

Label.propTypes = labelTypes;

export default Label;
