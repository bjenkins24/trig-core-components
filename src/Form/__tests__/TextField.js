import React from 'react';
import { render } from 'test/utils';
import TextField from 'Form/TextField';

describe('<TextField />', () => {
  it('renders and takes basic props', async () => {
    const label = 'label';
    const { getByLabelText, rerender, container } = render(
      <TextField label={label} />
    );

    expect(getByLabelText(label)).toBeInTheDocument();
    rerender(<TextField height={4} />);
    expect(container.firstChild).toHaveStyleRule('height', '4rem');
  });
});
