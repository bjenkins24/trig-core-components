import React from 'react';
import { render } from 'test/utils';
import DatePicker from 'Form/DatePicker';

describe('<DatePicker />', () => {
  it('renders with basic props', () => {
    const { getByTitle } = render(<DatePicker />);
    expect(getByTitle(/arrow right icon/i)).toBeTruthy();
  });
});
