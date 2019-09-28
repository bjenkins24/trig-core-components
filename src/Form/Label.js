import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Body1 } from '../Typography';

const StyledLabel = styled(Body1)`
  color: ${({ theme }) => theme.ps[200]};
`;

export const labelTypes = {
  children: PropTypes.string.isRequired,
};

const Label = ({ children, ...restProps }) => {
  return (
    <StyledLabel as="label" {...restProps}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = labelTypes;

export default Label;
