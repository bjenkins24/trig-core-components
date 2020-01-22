import React from 'react';
import { render } from 'test/utils';
import TextField from 'Form/TextField';

describe('<TextField />', () => {
  it('renders and takes basic props', async () => {
    const label = 'label';
    const error = 'error';
    const { getByLabelText, rerender, getByTestId, getByText } = render(
      <TextField label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    rerender(<TextField height={4} />);
    expect(getByTestId('textfield__textarea')).toHaveStyleRule(
      'height',
      '4rem'
    );
    rerender(<TextField error={error} height={4} />);
    expect(getByText(error));
  });
});
