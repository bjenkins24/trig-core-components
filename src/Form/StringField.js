import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from './Label';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
import { VerticalGroup } from '../Groups';

const Input = styled.input`
  border-radius: 0.4rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  font-size: 1.6rem;
  line-height: 1.7;
  padding: 0.8rem 1.6rem;
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

const StringField = ({ label, width, className, ...restProps }) => {
  if (!label) {
    return <Input type="text" {...restProps} />;
  }

  return (
    <Container width={width} className={className}>
      <Label>{label}</Label>
      <Input type="text" {...restProps} />
    </Container>
  );
};

StringField.defaultProps = {
  label: '',
  className: '',
  width: 20,
};

StringField.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  width: widthType,
};

export default StringField;
