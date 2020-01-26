import React from 'react';
import { render } from 'test/utils';
import StringFieldForm from 'Form/StringFieldForm';

jest.mock('formik', () => {
  return {
    Field: ({ children }) => {
      return children({
        field: {},
        meta: { error: 'Cool beans', touched: true },
      });
    },
  };
});

describe('<StringFieldForm />', () => {
  test('renders and takes basic props', () => {
    const label = 'label';
    const { getByLabelText, getByText } = render(
      <StringFieldForm label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText('Cool beans')).toBeInTheDocument();
  });
});
