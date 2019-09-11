import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
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

const ripple = keyframes`
   0% {
      transform: scale(0, 0);
      opacity: 1;
    }
    20% {
      transform: scale(25, 25);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
`;

const ButtonSecondary = styled.button`
  font-family: inherit;
  height: ${getHeight};
  border: 0;
  background: ${({ theme }) => theme.s};
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.br};
  padding: 0 1.6rem;
  cursor: pointer;
  transition: background 150ms ease-in;
  outline: none;
  &:hover {
    background: ${({ theme }) => theme.ss[800]};
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.15);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ${ripple} 1s ease-out;
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
