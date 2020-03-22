import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import FieldContainer from './FieldContainer';
import { widthType } from '../utils/propTypes';

export const inputStyles = css`
  border-radius: ${({ theme }) => theme.br};
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 0.95rem 1.6rem;
  width: 100%;
  box-sizing: border-box;
  &::placeholder {
    color: ${({ theme }) => theme.ps[100]};
  }
  &[disabled] {
    background: ${({ theme }) => theme.ps[50]};
    border: solid 1px #d2d2d2;
  }
  &:focus {
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.ps[200]};
  }
  ${({ error, theme }) => error && `border: solid 1px ${theme.e};`}
`;

const Input = styled.input`
  ${inputStyles}
`;

export const stringFieldTypes = {
  label: PropTypes.string,
  labelProps: PropTypes.object,
  className: PropTypes.string,
  width: widthType,
  error: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export const defaultProps = {
  label: '',
  labelProps: {},
  className: '',
  width: 20,
  error: null,
};

const StringField = forwardRef(
  ({ label, width, className, error, labelProps, ...restProps }, ref) => {
    return (
      <FieldContainer
        width={width}
        className={className}
        error={error}
        id="string-field"
        label={label}
        labelProps={labelProps}
      >
        {({ id }) => {
          return (
            <Input
              ref={ref}
              id={id}
              type="text"
              error={error}
              className={className}
              {...restProps}
            />
          );
        }}
      </FieldContainer>
    );
  }
);

StringField.propTypes = stringFieldTypes;
StringField.defaultProps = defaultProps;

export default StringField;
