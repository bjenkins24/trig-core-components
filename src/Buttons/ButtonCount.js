import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Body2 } from 'Typography';
import Button, { buttonTypes, heightMap } from './Button';

const buttonCountTypes = {
  countTotal: PropTypes.number,
  countVariant: PropTypes.oneOf(['light', 'dark']),
  buttonProps: PropTypes.shape(buttonTypes),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  countTotal: null,
  countVariant: 'dark',
  buttonProps: {},
  className: '',
};

const ButtonCount = forwardRef(
  ({ buttonProps, countTotal, countVariant, className, children }, ref) => {
    let shortenedTotal = countTotal;
    if (countTotal > 999) {
      shortenedTotal = `${Math.floor((countTotal / 1000) * 10) / 10}k`;
    }
    if (countTotal > 999999) {
      shortenedTotal = `${Math.floor((countTotal / 1000000) * 10) / 10}m`;
    }

    return (
      <div
        css={`
          display: flex;
        `}
        className={className}
      >
        <Button {...buttonProps} ref={ref}>
          {children}
        </Button>
        {countTotal !== null && (
          <>
            <div
              color={countVariant}
              css={`
                width: 0;
                height: 0;
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-right: 7px solid
                  ${({ theme, color }) =>
                    color === 'light' ? theme.colors.p : theme.colors.pc};
                align-self: center;
              `}
            />
            <div
              color={countVariant}
              css={`
                display: flex;
                background: ${({ theme, color }) =>
                  color === 'light' ? theme.colors.p : theme.colors.pc};
                padding: 0 ${({ theme }) => theme.space[3]}px;
                border-radius: ${({ theme }) => theme.br};
                height: ${typeof buttonProps.size !== 'undefined'
                  ? heightMap[buttonProps.size]
                  : heightMap.md};
              `}
            >
              <div
                css={`
                  margin: 0 auto;
                  display: flex;
                  align-self: center;
                `}
              >
                <Body2
                  color={countVariant === 'light' ? 'pc' : 'p'}
                  weight="bold"
                >
                  {shortenedTotal}
                </Body2>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
);

ButtonCount.propTypes = buttonCountTypes;
ButtonCount.defaultProps = defaultProps;

export default ButtonCount;
