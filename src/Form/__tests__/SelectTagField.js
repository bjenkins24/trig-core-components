import React, { useState } from 'react';
// eslint-disable-next-line
import { render, fireEvent } from 'test/utils';
import SelectTagField, { CustomValueContainer } from 'Form/SelectTagField';
import { components as MyPlaceholder } from 'react-select';

const labelName = 'My cool name';

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('react-select', () => ({
  __esModule: true,
  default: ({ options, onChange, size, className, components }) => {
    const { ValueContainer } = components;
    return (
      <>
        <select
          id="labelContainer-1"
          onChange={onChange}
          size={size}
          className={className}
        >
          {options.map(({ value, label }, key) => {
            return (
              <option key={key} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <ValueContainer
          isFocused
          selectProps={{ inputValue: 1, placeholder: 'placeholder' }}
        >
          Value
        </ValueContainer>
      </>
    );
  },
  components: {
    ValueContainer: (props) => <div {...props} />,
    Placeholder: (props) => <div {...props} />,
  },
}));

const SelectFieldWrapper = ({ size, ...restProps }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SelectTagField
      label={labelName}
      value={selectedValue}
      size={size}
      onChange={(e) => {
        if (Array.isArray(e)) {
          return setSelectedValue(e);
        }
        const value = selectedValue || [];

        return setSelectedValue([
          ...value,
          { value: e.target.value, label: e.target.label },
        ]);
      }}
      options={[
        { value: 1, label: 'First one' },
        { value: 2, label: 'Second one' },
        { value: 3, label: 'Third one' },
        { value: 4, label: 'Fourth one' },
        { value: 5, label: 'Fifth one' },
        { value: 6, label: 'Sixth one' },
        { value: 7, label: 'Seventh one' },
      ]}
      {...restProps}
    />
  );
};

describe('<SelectTagField />', () => {
  it('renders with basic props', () => {
    const { queryByTitle, getByText } = render(
      <SelectFieldWrapper size="md" />
    );
    expect(getByText('First one')).toBeInTheDocument();
    expect(queryByTitle(/remove button/i)).toBeNull();
  });

  it('renders custom value container correctly', () => {
    const placeholderText = 'hello';
    const childValue = 'Test 1';
    const { getByText, queryByText, rerender } = render(
      <CustomValueContainer
        selectProps={{
          inputValue: '',
          placeholder: placeholderText,
        }}
        isFocused
      >
        {childValue}
      </CustomValueContainer>
    );
    expect(getByText(placeholderText)).toBeInTheDocument();
    expect(getByText(childValue)).toBeInTheDocument();
    rerender(
      <CustomValueContainer
        selectProps={{
          inputValue: '',
          placeholder: placeholderText,
        }}
        isFocused
      >
        <MyPlaceholder.Placeholder>{childValue}</MyPlaceholder.Placeholder>
      </CustomValueContainer>
    );
    expect(queryByText(childValue)).toBeNull();
  });

  it('adds and removes tags correctly', () => {
    const { queryByText, getByRole, getByText, getAllByLabelText } = render(
      <SelectFieldWrapper size="md" />
    );
    const firstLabel = 'Value 1';
    const secondLabel = 'Value 2';
    fireEvent.change(getByRole('combobox'), {
      target: { value: 1, label: firstLabel },
    });
    fireEvent.change(getByRole('combobox'), {
      target: { value: 1, label: secondLabel },
    });
    expect(getByText(firstLabel)).toBeInTheDocument();
    expect(getByText(secondLabel)).toBeInTheDocument();
    expect(console.error).toHaveBeenCalledTimes(1);
    // We're in reverse order, so the second label will remove the first one added
    fireEvent.click(getAllByLabelText(/remove/i)[1]);
    expect(queryByText(firstLabel)).toBeNull();
  });
});
