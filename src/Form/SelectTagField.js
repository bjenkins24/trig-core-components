import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { components } from 'react-select';
import SelectField from './SelectField';
import { HorizontalGroup } from '../Groups';
import Tag from './Tag';

const SelectFieldStyled = styled(SelectField)`
  margin-bottom: 1.6rem;
`;

const selectTagFieldTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

const { ValueContainer, Placeholder } = components;

/* eslint-disable react/prop-types */
const CustomValueContainer = ({ children, ...props }) => {
  const { isFocused, selectProps } = props;
  const { inputValue, placeholder } = selectProps;
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={isFocused}>
        {!inputValue && placeholder}
      </Placeholder>
      {React.Children.map(children, (child) => {
        return child && child.type !== Placeholder ? child : null;
      })}
    </ValueContainer>
  );
};
/* eslint-enable react/prop-types */

const SelectTagField = ({ value, onChange, ...restProps }) => {
  const removeTag = (tagKey) => {
    return value.filter((item, itemKey) => {
      if (itemKey === tagKey) return false;
      return true;
    });
  };

  return (
    <div>
      <SelectFieldStyled
        isMulti
        isClearable={false}
        value={value}
        onChange={onChange}
        {...restProps}
        components={{
          ValueContainer: CustomValueContainer,
        }}
      />
      {value && (
        <HorizontalGroup margin={0.8}>
          {value.reverse().map((item, key) => {
            return (
              <Tag onRequestClose={() => onChange(removeTag(key))}>
                {item.label}
              </Tag>
            );
          })}
        </HorizontalGroup>
      )}
    </div>
  );
};

SelectTagField.propTypes = selectTagFieldTypes;

export default SelectTagField;
