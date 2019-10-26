import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label, { labelTypes } from './Label';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
import { VerticalGroup } from '../Groups';

const Input = styled.input`
  border-radius: ${({ theme }) => theme.br};
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 0.95rem 1.6rem;
  &::placeholder {
    color: ${({ theme }) => theme.ps[100]};
  }
  &:focus {
    outline: none;
    border: 0.1rem solid ${({ theme }) => theme.ps[200]};
  }
`;

const Container = styled(VerticalGroup)`
  ${getWidth}
`;

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: 0.6rem;
`;

const stringFieldTypes = {
  label: PropTypes.string,
  labelProps: PropTypes.shape(labelTypes),
  className: PropTypes.string,
  width: widthType,
};

const defaultProps = {
  label: '',
  labelProps: {},
  className: '',
  width: 20,
};

const StringField = ({ label, width, className, labelProps, ...restProps }) => {
  if (!label) {
    return <Input type="text" {...restProps} />;
  }

  return (
    <Container width={width} className={className}>
      <StyledLabel>{label}</StyledLabel>
      <Input type="text" {...restProps} />
    </Container>
  );
};

StringField.propTypes = stringFieldTypes;
StringField.defaultProps = defaultProps;

export default StringField;
