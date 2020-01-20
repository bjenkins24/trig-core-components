import React from 'react';
import { render } from 'test/utils';
import StringField from 'Form/StringField';

describe('<StringField />', () => {
  test('renders and takes basic props', async () => {
    const label = 'label';
    const { getByLabelText, getByText, rerender } = render(
      <StringField label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    const error = 'error';
    rerender(<StringField error={error} />);
    expect(getByText(error)).toBeInTheDocument();
  });
});
