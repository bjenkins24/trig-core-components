import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import { components } from 'react-select';
import SelectField from './SelectField';
import { HorizontalGroup } from '../Groups';
import Tag from './Tag';

const SelectFieldStyled = styled(SelectField)`
  margin-bottom: 1.6rem;
`;

const { ValueContainer, Placeholder } = components;

/* eslint-disable react/prop-types */
export const CustomValueContainer = ({
  children,
  selectProps,
  isFocused,
  ...props
}) => {
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

const selectTagFieldTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
  value: null,
};

const SelectTagField = ({ value, onChange, className, ...restProps }) => {
  const removeTag = (tagKey) => {
    return value.filter((item, itemKey) => {
      if (itemKey === tagKey) return false;
      return true;
    });
  };

  return (
    <div className={className}>
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
              <Tag
                key={uniqueId('tag')}
                onRequestRemove={() => onChange(removeTag(key))}
              >
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
SelectTagField.defaultProps = defaultProps;

export default SelectTagField;
