import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import getWidth from '../utils/getWidth';
import { Body1 } from '../Typography';

export const labelTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

const Body1Styled = styled(Body1)`
  cursor: pointer;
  ${getWidth}
`;

const Label = ({ children, ...restProps }) => {
  return (
    <Body1Styled color="ps.200" forwardedAs="label" {...restProps}>
      {children}
    </Body1Styled>
  );
};

Label.propTypes = labelTypes;

export default Label;
