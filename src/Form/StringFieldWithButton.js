import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StringField from './StringField';
import FieldContainer from './FieldContainer';
import { HorizontalGroup } from '../Groups';
import { Button } from '../Buttons';
import { widthType } from '../utils/propTypes';

const focusedButtonStyles = ({ isFocused, theme }) => {
  if (!isFocused) return null;
  return css`
    border: 0.1rem solid ${theme.ps[200]};
    color: ${theme.ps[200]} !important;
  `;
};

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  flex-shrink: 0;
  align-self: flex-start;
  &:hover span {
    color: ${({ theme }) => theme.sc} !important;
  }
  ${focusedButtonStyles}
`;

const StyledStringField = styled(StringField)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  &:focus {
    border-right: 0;
  }
  width: 100%;
`;

const stringFieldWithButtonTypes = {
  width: widthType,
  onSubmit: PropTypes.func,
  buttonProps: PropTypes.object,
  buttonContent: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

const defaultProps = {
  width: 20,
  className: '',
  buttonProps: {},
  label: '',
  onFocus: () => null,
  onKeyDown: () => null,
  onBlur: () => null,
  error: '',
  onSubmit: () => null,
};

const StringFieldWithButton = ({
  width,
  error,
  onSubmit,
  buttonContent,
  buttonProps,
  className,
  label,
  onFocus,
  onKeyDown,
  onBlur,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const StringFieldRef = useRef(null);
  const ButtonRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      StringFieldRef.current.focus();
    }
  });

  return (
    <FieldContainer
      id="string-field-button"
      className={className}
      label={label}
      width={width}
      error={error}
    >
      {({ id }) => {
        return (
          <HorizontalGroup>
            <StyledStringField
              ref={StringFieldRef}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  onSubmit(value);
                }
                onKeyDown(event);
              }}
              onFocus={(event) => {
                setIsFocused(true);
                onFocus(event);
              }}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              onBlur={(event) => {
                onBlur(event);
                setTimeout(() => setIsFocused(false), 10);
              }}
              width="100%"
              id={id}
              {...restProps}
            />
            <StyledButton
              ref={ButtonRef}
              variant="inverse-pl"
              size="lg"
              onClick={() => onSubmit(value)}
              isFocused={isFocused}
              {...buttonProps}
              onFocus={(event) => {
                if (typeof buttonProps.onFocus !== 'undefined') {
                  buttonProps.onFocus(event);
                }
                setTimeout(() => ButtonRef.current.focus(), 20);
              }}
            >
              {buttonContent}
            </StyledButton>
          </HorizontalGroup>
        );
      }}
    </FieldContainer>
  );
};

StringFieldWithButton.propTypes = stringFieldWithButtonTypes;
StringFieldWithButton.defaultProps = defaultProps;

export default StringFieldWithButton;
