import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalGroup } from '../Groups';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
import Label, { labelTypes } from './Label';

const Select = styled.select`
  appearance: none;
  font-size: 1.6rem;
  background: none;
  padding-left: 1.6rem;
  border-radius: ${({ theme }) => theme.br};
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  height: 4.5rem;
  cursor: pointer;
`;

const Container = styled(VerticalGroup)`
  ${getWidth}
`;

const selectFieldTypes = {
  className: PropTypes.string,
  labelProps: labelTypes,
  label: PropTypes.string,
  width: widthType,
};

const defaultProps = {
  className: '',
  labelProps: {},
  width: 20,
  label: '',
};

const SelectField = ({ className, width, label, labelProps, ...restProps }) => {
  if (!label) {
    return <Select {...restProps} />;
  }

  return (
    <Container width={width} className={className}>
      <Label {...labelProps}>{label}</Label>
      <Select {...restProps} />
    </Container>
  );
};

SelectField.defaultProps = defaultProps;
SelectField.propTypes = selectFieldTypes;

export default SelectField;
