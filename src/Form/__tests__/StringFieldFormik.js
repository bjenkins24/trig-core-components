import React from 'react';
import { render } from 'test/utils';
import StringFieldFormik from 'Form/StringFieldFormik';

jest.mock('formik', () => {
  return {
    useField: () => [
      { onClick: () => null },
      { touched: true, error: 'Cool beans' },
    ],
  };
});

describe('<StringFieldFormik />', () => {
  test('renders and takes basic props', () => {
    const label = 'label';
    const { getByLabelText, getByText } = render(
      <StringFieldFormik label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText('Cool beans')).toBeInTheDocument();
  });
});
