import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { sizeProp } from 'utils/propTypes';
import { HorizontalGroup } from 'Groups';
import Icon from 'Icon';
import { BodyBiggest, Body1, Body2, Body3 } from 'Typography';

export const textMap = {
  sm: Body3,
  md: Body2,
  lg: Body1,
  hg: BodyBiggest,
};

export const heightMap = {
  sm: '2.4rem',
  md: '4rem',
  lg: '4.8rem',
  hg: '7.1rem',
};

const getHeight = ({ size }) => {
  return heightMap[size];
};

const getTypography = (size) => {
  return textMap[size];
};

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
        div {
          color: ${({ theme }) => theme.p};
          font-weight: 400;
          transition: all 0.2s;
        }
        &:hover {
          div {
            color: ${({ theme }) => theme.ps[200]};
          }
        }
      `;
    case 'transparent':
      return css`
        background: none;
        border: 0;
        div {
          color: ${({ theme }) => theme.ps[100]};
          font-weight: 400;
          transition: all 0.2s;
        }
        &:hover {
          div {
            color: ${({ theme }) => theme.ps[200]};
          }
        }
      `;
    case 'inline':
      return css`
        background: none;
        border: 0;
        padding: 0;
        height: auto;
        div {
          color: ${({ theme }) => theme.ps[100]};
          font-weight: 400;
          transition: all 0.2s;
          font-size: inherit;
        }
        &:hover {
          div {
            color: ${({ theme }) => theme.ps[200]};
          }
        }
      `;
    case 'inverse-pl':
      return css`
        background: none;
        border: 0.1rem solid ${({ theme }) => theme.ps[100]};
        div {
          color: ${({ theme }) => theme.ps[100]};
          font-weight: 400;
        }
        &:hover,
        &:focus {
          background: ${({ theme }) => theme.s};
          border: 0.1rem solid ${({ theme }) => theme.s};
          div {
            color: ${({ theme }) => theme.sc};
          }
        }
      `;
    case 'inverse-pc':
      return css`
        background: none;
        border: 0.1rem solid ${({ theme }) => theme.pc};
        div {
          color: ${({ theme }) => theme.pc};
        }
        &:hover {
          background: ${({ theme }) => theme.pc};
          div {
            color: ${({ theme }) => theme.p};
          }
        }
      `;
    case 'inverse-s':
      return css`
        background: none;
        border: 0.1rem solid ${({ theme }) => theme.s};
        div {
          color: ${({ theme }) => theme.s};
        }
        &:hover {
          background: ${({ theme }) => theme.s};
          div {
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
  padding: 0 1.6rem;
  ${getVariantStyles};
  & .button__text {
    margin: 0 auto;
  }
  &[disabled] {
    cursor: not-allowed;
    background: #e6e5e5;
    border: solid 1px #d2d2d2;
    & .button__text {
      color: #b2b2b2;
    }
  }
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.br};
  cursor: pointer;
  transition: all 150ms ease-in;
  outline: none;
`;

const rippleEffect = (event) => {
  const btn = event.currentTarget;
  const x = event.pageX - btn.offsetLeft;
  const y = event.pageY - btn.offsetTop;

  const duration = 500;
  let animationFrame;
  let animationStart;

  const animationStep = (timestamp) => {
    if (!animationStart) {
      animationStart = timestamp;
    }

    const frame = timestamp - animationStart;
    /* istanbul ignore else */
    if (frame < duration) {
      const easing = (frame / duration) * (2 - frame / duration);

      const circle = `circle at ${x}px ${y}px`;
      const color = `rgba(0, 0, 0, ${0.3 * (1 - easing)})`;
      const stop = `${90 * easing}%`;

      btn.style.backgroundImage = `radial-gradient(${circle}, ${color}, ${stop}, transparent ${stop})`;

      animationFrame = window.requestAnimationFrame(animationStep);
    } else {
      btn.style.backgroundImage = 'none';
      window.cancelAnimationFrame(animationFrame);
    }
  };

  animationFrame = window.requestAnimationFrame(animationStep);
};

export const buttonTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    's',
    'inverse-s',
    'inverse-pc',
    'inverse-pl',
    'transparent',
    'transparent-dark',
    'inline',
  ]),
  iconProps: PropTypes.object,
  size: sizeProp,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  size: 'md',
  variant: 's',
  iconProps: null,
  disabled: false,
  onClick: () => null,
};

const Button = ({
  children,
  variant,
  iconProps,
  disabled,
  onClick,
  ...restProps
}) => {
  const Text = getTypography(restProps.size);

  return (
    <StyledButton
      type="button"
      variant={variant}
      disabled={disabled}
      onClick={(event) => {
        rippleEffect(event);
        // Make sure onclick still works
        onClick(event);
      }}
      {...restProps}
    >
      <HorizontalGroup margin={0.8}>
        {iconProps && (
          <Icon color={iconVariantColor[variant]} size={1.6} {...iconProps} />
        )}
        <Text
          className="button__text"
          disabled={disabled}
          color="sc"
          weight="bold"
          as="div"
        >
          {children}
        </Text>
      </HorizontalGroup>
    </StyledButton>
  );
};

Button.propTypes = buttonTypes;
Button.defaultProps = defaultProps;

export default Button;
