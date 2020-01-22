import React from 'react';
import { render } from 'test/utils';
import TextFieldFormik from 'Form/TextFieldFormik';

jest.mock('formik', () => {
  return {
    useField: () => [
      { onClick: () => null },
      { touched: true, error: 'Cool beans' },
    ],
  };
});

describe('<TextFieldFormik />', () => {
  test('renders and takes basic props', () => {
    const label = 'label';
    const { getByLabelText, getByText } = render(
      <TextFieldFormik label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText('Cool beans')).toBeInTheDocument();
  });
});
