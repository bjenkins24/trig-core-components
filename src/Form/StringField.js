import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
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
  ${({ error, theme }) => error && `border: solid 1px ${theme.e};`}
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
  ${({ error, theme }) => error && `color: ${theme.e}`}
`;

export const stringFieldTypes = {
  label: PropTypes.string,
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
  className: '',
  width: 20,
  error: null,
};

const StringField = ({ label, width, className, error, ...restProps }) => {
  if (!label) {
    return (
      <Container width={width} className={className}>
        <Input type="text" error={error} className={className} {...restProps} />
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </Container>
    );
  }

  return (
    <Container width={width} className={className}>
      <Label>
        <LabelContainer error={error}>{label}</LabelContainer>
        <Input error={error} type="text" {...restProps} />
      </Label>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

StringField.propTypes = stringFieldTypes;
StringField.defaultProps = defaultProps;

export default StringField;
