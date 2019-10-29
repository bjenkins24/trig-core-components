import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import LabelContainer from './LabelContainer';
import useTheme from '../utils/useTheme';
import { widthType, sizeProp } from '../utils/propTypes';
import { Body1Styles, Body2Styles } from '../Typography';

const getSize = (type) => ({ size }) => {
  const sizeMap = {
    font: {
      sm: Body2Styles,
      md: Body1Styles,
    },
    padding: {
      sm: 'padding: 0.5rem 1.2rem',
      md: 'padding: 0.5rem 1.6rem',
    },
  };
  return sizeMap[type][size];
};

const StyledSelect = styled(Select)`
  ${getSize('font')}
  .react-select {
    &__single-value {
      margin-top: -0.1rem;
    }
    &__placeholder {
      color: ${({ scTheme }) => scTheme.ps[100]};
      margin-top: -0.1rem;
    }
    &__control {
      cursor: pointer;
      border: solid 0.1rem ${({ scTheme }) => scTheme.ps[100]};
      &--is-focused {
        box-shadow: none;
        border: solid 0.1rem ${({ scTheme }) => scTheme.ps[200]};
      }
    }
    &__value-container {
      ${getSize('padding')}
    }
    &__option {
      cursor: pointer;
      color: ${({ scTheme }) => scTheme.p};
      &--is-focused,
      &--is-selected {
        color: ${({ scTheme }) => scTheme.bs[200]};
      }
    }
    &__indicator {
      margin-top: -0.1rem;
    }
    &__indicator-separator {
      display: none;
    }
  }
`;

const selectFieldTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  width: widthType,
  size: sizeProp,
  label: PropTypes.string,
};

const defaultProps = {
  width: 20,
  size: 'md',
  label: '',
};

const SelectField = ({ options, label, size, ...restProps }) => {
  const scTheme = useTheme();

  return (
    <LabelContainer
      label={label}
      Component={(props) => (
        <StyledSelect
          size={size}
          className="react-select-container"
          classNamePrefix="react-select"
          scTheme={scTheme}
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary25: scTheme.ss[200],
              primary: scTheme.s,
            },
          })}
          options={options}
          {...props}
        />
      )}
      {...restProps}
    />
  );
};

SelectField.propTypes = selectFieldTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
