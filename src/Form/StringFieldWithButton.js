import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import StringField from './StringField';
import Label from './Label';
import { HorizontalGroup } from '../Groups';
import { Button } from '../Buttons';
import getWidth from '../utils/getWidth';
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
  width: calc(100% - 3.2rem - 0.1rem);
`;

const Container = styled(HorizontalGroup)`
  ${getWidth}
`;

const stringFieldWithButtonTypes = {
  width: widthType,
  onSubmit: PropTypes.func.isRequired,
  buttonProps: PropTypes.object,
  buttonContent: PropTypes.node.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
};

const defaultProps = {
  width: 20,
  className: '',
  buttonProps: {},
  label: '',
};

const StringFieldWithButton = ({
  width,
  onSubmit,
  buttonContent,
  buttonProps,
  className,
  label,
  ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');
  const StringFieldRef = useRef(null);

  useEffect(() => {
    if (isFocused) {
      StringFieldRef.current.focus();
    }
  });

  const Component = () => {
    return (
      <Container className={className} width={width}>
        <StyledStringField
          ref={StringFieldRef}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              onSubmit(value);
            }
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onBlur={() => setTimeout(() => setIsFocused(false), 10)}
          width="100%"
          {...restProps}
        />
        <StyledButton
          variant="inverse-pl"
          size="lg"
          onClick={() => onSubmit(value)}
          isFocused={isFocused}
          {...buttonProps}
        >
          {buttonContent}
        </StyledButton>
      </Container>
    );
  };

  if (label) {
    return (
      <Label>
        {label}
        <Component />
      </Label>
    );
  }

  return <Component />;
};

StringFieldWithButton.propTypes = stringFieldWithButtonTypes;
StringFieldWithButton.defaultProps = defaultProps;

export default StringFieldWithButton;
