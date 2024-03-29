import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { sizeProp, widthType } from 'utils/propTypes';
import { HorizontalGroup } from 'Groups';
import { getWidth } from 'utils';
import Icon from 'Icon';
import { BodyBiggest, Body1, Body2, Body3 } from 'Typography';
import rippleEffect from 'Buttons/ripple';

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

const iconSize = {
  sm: 1.2,
  md: 1.6,
  lg: 1.6,
  hg: 2.4,
};

const iconMargin = {
  sm: 0.8,
  md: 0.8,
  lg: 0.8,
  hg: 1.6,
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
          color: ${({ theme }) => theme.ps[200]};
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
        &:hover,
        &:focus {
          background: ${({ theme }) => theme.ss[800]};
          border: 0.1rem solid ${({ theme }) => theme.ss[800]};
        }
      `;
  }
};

const StyledButton = styled.button`
  font-family: inherit;
  box-sizing: border-box;
  height: ${getHeight};
  border: 0;
  display: inline-block;
  padding: 0 1.6rem;
  ${getVariantStyles};
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
  ${getWidth}
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
    'inline',
  ]),
  iconProps: PropTypes.object,
  size: sizeProp,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  width: widthType,
  additionalContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const defaultProps = {
  size: 'md',
  variant: 's',
  iconProps: null,
  disabled: false,
  onClick: () => null,
  loading: false,
  width: 'auto',
  additionalContent: '',
};

const Button = forwardRef(
  (
    {
      children,
      variant,
      iconProps,
      disabled,
      onClick,
      loading,
      size,
      width,
      additionalContent,
      ...restProps
    },
    ref
  ) => {
    const Text = getTypography(size);

    const disabledButton = loading || disabled;
    const iconColor = disabledButton ? '#b2b2b2' : iconVariantColor[variant];

    let typeProp = {};
    if (
      typeof restProps.as === 'undefined' &&
      typeof restProps.forwardedAs === 'undefined'
    ) {
      typeProp = { type: 'button' };
    }

    if (additionalContent && size !== 'hg') {
      console.error(
        'Additional content for a <Button> component is only available when the size is "hg"'
      );
    }

    return (
      <StyledButton
        width={width}
        variant={variant}
        disabled={disabledButton}
        ref={ref}
        size={size}
        onClick={(event) => {
          rippleEffect({ event, fromCenter: event.pageX === 0 });
          // Make sure onclick still works
          onClick(event);
        }}
        {...typeProp}
        {...restProps}
      >
        <div
          css={`
            display: flex;
            height: 100%;
          `}
        >
          <HorizontalGroup
            margin={iconMargin[size]}
            css={`
              height: 100%;
              margin: 0 auto;
            `}
          >
            {iconProps && !loading && (
              <Icon color={iconColor} size={iconSize[size]} {...iconProps} />
            )}
            <Text
              className="button__text"
              disabled={disabledButton}
              color="sc"
              weight="bold"
              as="div"
            >
              {children}
            </Text>
            {loading && (
              <Icon
                type="loading"
                color={iconColor}
                size={iconSize[size]}
                {...iconProps}
              />
            )}
          </HorizontalGroup>
        </div>
        {additionalContent && size === 'hg' && (
          <div
            css={`
              height: 13px;
              background: ${({ theme }) => theme.colors.s};
              position: absolute;
              bottom: 0;
              width: 100%;
              margin-left: -1.6rem;
            `}
          >
            <span
              css={`
                font-size: 0.9rem;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.sc};
                text-align: center;
                display: block;
                margin-top: 2px;
              `}
            >
              {additionalContent}
            </span>
          </div>
        )}
      </StyledButton>
    );
  }
);

Button.propTypes = buttonTypes;
Button.defaultProps = defaultProps;

export default Button;
