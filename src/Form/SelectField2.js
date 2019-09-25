import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import { Body1Styles } from '../Typography';

const selectFieldTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  value: null,
};

const StyledSelect = styled(Select)`
  ${Body1Styles}
  .react-select {
    &__placeholder {
      color: ${({ theme }) => theme.ps[100]};
    }
    &__control {
      cursor: pointer;
    }
    &__value-container {
      padding: 0.6rem 1.6rem;
    }
    &__option {
      cursor: pointer;
    }
  }
`;

const SelectField = ({ options, value, onChange }) => {
  return (
    <StyledSelect
      className="react-select-container"
      classNamePrefix="react-select"
      value={value}
      options={options}
      onChange={onChange}
    />
  );
};

SelectField.propTypes = selectFieldTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
