import React, { useState } from 'react';
// eslint-disable-next-line
import { render, fireEvent } from 'test/utils';
import SelectTagField from 'Form/SelectTagField';

const labelName = 'My cool name';

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('react-select', () => ({
  __esModule: true,
  default: ({ options, onChange, size, className }) => (
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
  ),
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
        const value = selectedValue || [];
        let label = 'Value 1';
        if (e.target.value === 2) {
          label = 'Value 2';
        }
        setSelectedValue([...value, { value: e.target.value, label }]);
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
    const { queryByText, getByRole, getByText } = render(
      <SelectFieldWrapper />
    );
    expect(getByText('First one')).toBeInTheDocument();
    const input = getByRole('combobox');
    expect(queryByText('Value 1')).toBeNull();
    fireEvent.change(input);
    expect(getByText('Value 1')).toBeInTheDocument();
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(getByText(/value 1/i)).toBeInTheDocument();
  });
});
