import React from 'react';
import { render } from 'test/utils';
import StringField from 'Form/StringField';

test('renders and takes basic props', async () => {
  const label = 'label';
  const { getByLabelText, rerender } = render(<StringField label={label} />);

  expect(getByLabelText(label)).toBeInTheDocument();
  rerender(<StringField />);
});
