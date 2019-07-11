import React from 'react';
import { Body1 } from '../Typography.js';

const getTypography = size => {
  const textMap = {
    sm: Body3,
    md: Body2,
    lg: Body1,
  };
  return textMap[size];
};

const StyledButton = styled.button`
  border: 0;
  background: none;
  font-family: inherit;
`;

const ButtonTransparent = () => {
  <StyledButton></StyledButton>;
};

export default ButtonTransparent;
