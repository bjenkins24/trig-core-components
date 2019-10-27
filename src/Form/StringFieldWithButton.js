import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StringField from './StringField';
import { HorizontalGroup } from '../Groups';
import Button, { buttonTypes } from '../Buttons';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  flex-shrink: 0;
  &:hover span {
    color: ${({ theme }) => theme.sc} !important;
  }
`;

const StyledStringField = styled(StringField)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
  &:focus {
    border-right: 0;
  }
`;

const Container = styled(HorizontalGroup)`
  ${getWidth}
  & ${StyledStringField}:focus ~ ${StyledButton} {
    border: 0.1rem solid ${({ theme }) => theme.ps[200]};
    span {
      color: ${({ theme }) => theme.ps[200]};
    }
  }
`;

const stringFieldWithButtonTypes = {
  width: widthType,
  onSubmit: PropTypes.func.isRequired,
  buttonProps: PropTypes.shape(buttonTypes).isRequired,
  buttonContent: PropTypes.node.isRequired,
};

const defaultProps = {
  width: 20,
};

const StringFieldWithButton = ({
  width,
  onSubmit,
  buttonContent,
  buttonProps,
  ...restProps
}) => {
  return (
    <Container width={width}>
      <StyledStringField
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            onSubmit();
          }
        }}
        width="100%"
        {...restProps}
      />
      <StyledButton
        variant="inverse-pl"
        size="lg"
        onClick={onSubmit}
        {...buttonProps}
      >
        {buttonContent}
      </StyledButton>
    </Container>
  );
};

StringFieldWithButton.propTypes = stringFieldWithButtonTypes;
StringFieldWithButton.defaultProps = defaultProps;

export default StringFieldWithButton;
