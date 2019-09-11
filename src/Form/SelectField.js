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
  height: 4.7rem;
  cursor: pointer;
  ${getWidth}
`;

const selectFieldTypes = {
  labelProps: labelTypes,
  label: PropTypes.string,
  width: widthType,
};

const defaultProps = {
  labelProps: {},
  width: 20,
  label: '',
};

const SelectField = ({ label, labelProps, ...restProps }) => {
  if (!label) {
    return <Select {...restProps} />;
  }

  return (
    <VerticalGroup>
      <Label {...labelProps}>{label}</Label>
      <Select {...restProps} />
    </VerticalGroup>
  );
};

SelectField.defaultProps = defaultProps;
SelectField.propTypes = selectFieldTypes;

export default SelectField;
