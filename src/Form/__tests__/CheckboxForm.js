import React from 'react';
import { render } from 'test/utils';
import CheckboxForm from 'Form/CheckboxForm';

jest.mock('react-final-form', () => {
  return {
    Field: ({ children }) => {
      return children({
        input: {},
        meta: { error: 'Cool beans', touched: true },
      });
    },
  };
});

describe('<StringFieldForm />', () => {
  test('renders and takes basic props', () => {
    const label = 'label';
    const { getByLabelText, getByText } = render(
      <CheckboxForm label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    expect(getByText('Cool beans')).toBeInTheDocument();
  });
});
