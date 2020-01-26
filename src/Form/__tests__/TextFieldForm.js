import React from 'react';
import { render } from 'test/utils';
import TextFieldForm from 'Form/TextFieldForm';

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

describe('<TextFieldForm />', () => {
  test('renders and takes basic props', () => {
    const label = 'label';
    const { getByLabelText, getByText } = render(
      <TextFieldForm label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText('Cool beans')).toBeInTheDocument();
  });
});
