import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Body1 } from '../Typography';

const StyledLabel = styled(Body1)`
  color: ${({ theme }) => theme.ps[200]};
`;

const Label = ({ children, ...restProps }) => {
  return (
    <StyledLabel as="label" {...restProps}>
      {children}
    </StyledLabel>
  );
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Label;
