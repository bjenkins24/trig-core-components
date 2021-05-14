import React, { forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Select from 'react-select';
import FieldContainer from './FieldContainer';
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
      sm: 'padding: 0.5rem 1.2rem !important',
      md: 'padding: 0.5rem 1.6rem !important',
    },
  };
  return sizeMap[type][size];
};

const GlobalStyles = createGlobalStyle`
${({ theme, randomClass, size }) => {
  return `.${randomClass} {
    &__clear-indicator {
      display: none;
    }
    &__multi-value {
      display: none;
    }
    &__placeholder {
      color: ${theme.ps[100]};
    }
    &__control {
      background: ${theme.colors.b} !important;
      cursor: pointer;
      border: solid 0.1rem ${theme.ps[100]};
      &--is-focused {
        box-shadow: none !important;
        border: solid 0.1rem ${theme.ps[200]};
      }
    }
    &__value-container {
      margin-top: 1px;
      cursor: pointer;
      ${getSize('font')({ size })}
      ${getSize('padding')({ size })}
    }
    &__option {
      background: ${theme.colors.b} !important;
      cursor: pointer !important;
      color: ${theme.p} !important;
      &--is-focused,
      &--is-selected {
        background: ${theme.colors.s} !important;
        color: ${theme.bs[200]} !important;
      }
    }
    &__indicator {
      margin-top: -0.1rem;
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      ${getSize('font')({ size })}
      background: ${theme.colors.b} !important;
      z-index: 3;
    }
  }`;
}}
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
  className: PropTypes.string,
};

const defaultProps = {
  width: 20,
  size: 'md',
  label: '',
  className: '',
};

const SelectField = forwardRef(
  ({ options, label, size, width, className, ...restProps }, ref) => {
    const scTheme = useTheme();
    const randomClass = useMemo(
      () =>
        (Math.random() + 1)
          .toString(36)
          .substr(2, 12)
          .replace(/[0-9]/g, 'a'),
      []
    );

    return (
      <>
        <GlobalStyles size={size} randomClass={randomClass} />
        <FieldContainer
          width={width}
          className={className}
          label={label}
          id="select"
        >
          {({ id }) => {
            return (
              <Select
                ref={ref}
                size={size}
                className="react-select-container"
                classNamePrefix={randomClass}
                menuPortalTarget={document.body}
                styles={{
                  menuPortal: (provided) => ({ ...provided, zIndex: 9999 }),
                }}
                theme={
                  /* istanbul ignore next */
                  (theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary25: scTheme.ss[200],
                      primary: scTheme.s,
                    },
                  })
                }
                options={options}
                {...restProps}
                id={id}
              />
            );
          }}
        </FieldContainer>
      </>
    );
  }
);

SelectField.propTypes = selectFieldTypes;
SelectField.defaultProps = defaultProps;

export default SelectField;
