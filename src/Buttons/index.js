import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { sizeProp } from '../utils/propTypes';
import { Body1, Body2, Body3 } from '../Typography';

const getHeight = ({ size }) => {
  const sizeMap = {
    sm: '2.4rem',
    md: '4rem',
    lg: '4.8rem',
  };
  return sizeMap[size];
};

const getTypography = (size) => {
  const textMap = {
    sm: Body3,
    md: Body2,
    lg: Body1,
  };
  return textMap[size];
};

const ButtonSecondary = styled.button`
  font-family: inherit;
  height: ${getHeight};
  border: 0;
  background: ${({ theme }) => theme.s};
  border-radius: 0.4rem;
  padding: 0 1.6rem;
  cursor: pointer;
  transition: background 100ms ease-in;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.ss[600]};
  }
  &:active {
    position: relative;
    top: 2px;
  }
`;

const Button = ({ children, ...restProps }) => {
  const Text = getTypography(restProps.size);

  return (
    <ButtonSecondary {...restProps}>
      <Text color="sc" weight="bold">
        {children}
      </Text>
    </ButtonSecondary>
  );
};

Button.defaultProps = {
  size: 'md',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: sizeProp,
};

export default Button;
