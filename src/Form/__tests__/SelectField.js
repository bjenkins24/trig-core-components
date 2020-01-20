import React, { useState } from 'react';
import { render } from 'test/utils';
import SelectField from 'Form/SelectField';

const labelName = 'My cool name';

jest.mock('react-select', () => {
  return ({ options, onChange, size, className }) => (
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
  );
});

const SelectFieldWrapper = ({ size, ...restProps }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <SelectField
      label={labelName}
      value={selectedValue}
      size={size}
      onChange={(value) => setSelectedValue(value)}
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

describe('<SelectField />', () => {
  it('renders with basic props', () => {
    const { getByText } = render(<SelectFieldWrapper size="md" />);
    expect(getByText('First one')).toBeInTheDocument();
    expect(getByText(labelName)).toBeInTheDocument();
  });
});
