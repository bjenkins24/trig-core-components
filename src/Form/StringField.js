import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useField } from 'formik';
import { isEmpty } from 'lodash';
import { VerticalGroup } from '../Groups';
import Label from './Label';
import ErrorMessage from './ErrorMessage';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';

export const inputStyles = css`
  border-radius: ${({ theme }) => theme.br};
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 0.95rem 1.6rem;
  width: calc(100% - 3.2rem - 0.2rem);
  &::placeholder {
    color: ${({ theme }) => theme.ps[100]};
  }
  &[disabled] {
    background: ${({ theme }) => theme.ps[50]};
    border: 0.1rem solid ${({ theme }) => theme.ps[50]};
  }
  &:focus {
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.ps[200]};
  }
  ${({ hasError, theme }) => hasError && `border: 0.1rem solid ${theme.e}`}
`;

const Input = styled.input`
  ${inputStyles}
`;

const Container = styled(VerticalGroup)`
  ${getWidth}
`;

const LabelContainer = styled.span`
  display: block;
  margin-bottom: 0.6rem;
  ${({ hasError, theme }) => hasError && `color: ${theme.e}`}
`;

const stringFieldTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  width: widthType,
};

const defaultProps = {
  label: '',
  className: '',
  width: '20rem',
};

const StringField = ({ label, width, className, ...restProps }) => {
  const [field, meta] = useField(restProps);

  if (!label) {
    return (
      <Input type="text" className={className} {...field} {...restProps} />
    );
  }

  const hasError = meta.touched && !isEmpty(meta.error);

  return (
    <Container width={width} className={className}>
      <Label>
        <LabelContainer hasError={hasError}>{label}</LabelContainer>
        <Input hasError={hasError} type="text" {...field} {...restProps} />
      </Label>
      {hasError ? <ErrorMessage>{meta.error}</ErrorMessage> : null}
    </Container>
  );
};

StringField.propTypes = stringFieldTypes;
StringField.defaultProps = defaultProps;

export default StringField;
