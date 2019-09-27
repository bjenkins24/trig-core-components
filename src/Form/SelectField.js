import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Select from 'react-select';
import Label, { labelTypes } from './Label';
import useTheme from '../utils/useTheme';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
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
  width: widthType,
  labelProps: labelTypes,
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
};

const defaultProps = {
  value: null,
  width: 20,
  htmlFor: '',
  labelProps: {},
  label: '',
  className: '',
};

const Container = styled.div`
  ${getWidth};
`;

const StyledSelect = styled(Select)`
  ${Body1Styles}
  .react-select {
    &__placeholder {
      color: ${({ scTheme }) => scTheme.ps[100]};
      margin-top: -0.1rem;
    }
    &__control {
      cursor: pointer;
      border: solid 0.1rem ${({ scTheme }) => scTheme.ps[100]};
      &--is-focused {
        box-shadow: none;
        border: solid 0.1rem ${({ scTheme }) => scTheme.ps[300]};
      }
    }
    &__value-container {
      padding: 0.4rem 1.6rem;
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

const SelectField = ({
  options,
  value,
  onChange,
  width,
  htmlFor,
  className,
  label,
  labelProps,
  ...restProps
}) => {
  const scTheme = useTheme();

  return (
    <Container width={width} className={className}>
      {label && (
        <Label htmlFor={htmlFor} {...labelProps}>
          {label}
        </Label>
      )}
      <StyledSelect
        className="react-select-container"
        classNamePrefix="react-select"
        value={value}
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
        onChange={onChange}
        {...restProps}
      />
    </Container>
  );
};

SelectField.propTypes = selectFieldTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
