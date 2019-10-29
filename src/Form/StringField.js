import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LabelContainer from './LabelContainer';
import getWidth from '../utils/getWidth';

export const inputStyles = css`
  border-radius: ${({ theme }) => theme.br};
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 0.95rem 1.6rem;
  ${getWidth}
  &::placeholder {
    color: ${({ theme }) => theme.ps[100]};
  }
  &:focus {
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.ps[200]};
  }
`;

const Input = styled.input`
  ${inputStyles}
`;

const stringFieldTypes = {
  label: PropTypes.string,
};

const defaultProps = {
  label: '',
};

const StringField = ({ label, ...restProps }) => {
  if (!label) {
    return <Input type="text" {...restProps} />;
  }

  return (
    <LabelContainer
      Component={(props) => <Input type="text" {...props} />}
      label={label}
      {...restProps}
    />
  );
};

StringField.propTypes = stringFieldTypes;
StringField.defaultProps = defaultProps;

export default StringField;
