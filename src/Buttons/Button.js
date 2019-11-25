import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';
import { sizeProp } from '../utils/propTypes';
import { HorizontalGroup } from '../Groups';
import Icon, { iconTypes } from '../Icon';
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

const iconVariantColor = {
  'inverse-pl': 'ps.100',
  'inverse-pc': 'pc',
  s: 'sc',
  transparent: 'ps.100',
  'transparent-dark': 'p',
};

const getVariantStyles = ({ variant }) => {
  switch (variant) {
    case 'transparent-dark':
      return css`
        background: none;
        border: 0;
        span {
          color: ${({ theme }) => theme.p};
          font-weight: 400;
          transition: all 0.2s;
        }
        &:hover {
          span {
            color: ${({ theme }) => theme.ps[200]};
          }
        }
      `;
    case 'transparent':
      return css`
        background: none;
        border: 0;
        span {
          color: ${({ theme }) => theme.ps[100]};
          font-weight: 400;
          transition: all 0.2s;
        }
        &:hover {
          span {
            color: ${({ theme }) => theme.ps[200]};
          }
        }
      `;
    case 'inverse-pl':
      return css`
        background: none;
        border: 0.1rem solid ${({ theme }) => theme.ps[100]};
        span {
          color: ${({ theme }) => theme.ps[100]};
          font-weight: 400;
        }
        &:hover,
        &:focus {
          background: ${({ theme }) => theme.s};
          border: 0.1rem solid ${({ theme }) => theme.s};
          span {
            color: ${({ theme }) => theme.sc};
          }
        }
      `;
    case 'inverse-pc':
      return css`
        background: none;
        border: 0.1rem solid ${({ theme }) => theme.pc};
        span {
          color: ${({ theme }) => theme.pc};
        }
        &:hover {
          background: ${({ theme }) => theme.pc};
          span {
            color: ${({ theme }) => theme.p};
          }
        }
      `;
    case 'inverse-s':
      return css`
        background: none;
        border: 0.1rem solid ${({ theme }) => theme.s};
        span {
          color: ${({ theme }) => theme.s};
        }
        &:hover {
          background: ${({ theme }) => theme.s};
          span {
            color: ${({ theme }) => theme.sc};
          }
        }
      `;
    default:
      return css`
        background: ${({ theme }) => theme.s};
        border: 0.1rem solid ${({ theme }) => theme.s};
        &:hover {
          background: ${({ theme }) => theme.ss[800]};
          border: 0.1rem solid ${({ theme }) => theme.ss[800]};
        }
      `;
  }
};

const StyledButton = styled.button`
  font-family: inherit;
  height: ${getHeight};
  border: 0;
  ${getVariantStyles};
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.br};
  padding: 0 1.6rem;
  cursor: pointer;
  transition: all 150ms ease-in;
  outline: none;

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

export const buttonTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    's',
    'inverse-s',
    'inverse-pc',
    'inverse-pl',
    'transparent',
    'transparent-dark',
  ]),
  iconProps: PropTypes.shape(iconTypes),
  size: sizeProp,
};

const defaultProps = {
  size: 'md',
  variant: 's',
  iconProps: null,
};

const Button = ({ children, variant, iconProps, ...restProps }) => {
  const Text = getTypography(restProps.size);

  return (
    <StyledButton type="button" variant={variant} {...restProps}>
      <HorizontalGroup margin={0.8}>
        {iconProps && (
          <Icon color={iconVariantColor[variant]} size={1.6} {...iconProps} />
        )}
        <Text color="sc" weight="bold">
          {children}
        </Text>
      </HorizontalGroup>
    </StyledButton>
  );
};

Button.propTypes = buttonTypes;
Button.defaultProps = defaultProps;

export default Button;
