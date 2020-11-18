import React from 'react';
import { render } from 'test/utils';
import Highlight from '../Highlight';

it('formats highlights correctly', () => {
  const testString = '<em>Test</em> today <em>is</em> cool';

  const { getByText, queryByText } = render(
    <Highlight string={testString} style={{ fontWeight: 'bold' }} />
  );

  expect(getByText('Test')).toBeInTheDocument();
  expect(getByText('today')).toBeInTheDocument();
  expect(getByText('is')).toBeInTheDocument();
  expect(getByText('cool')).toBeInTheDocument();
  expect(queryByText('Test today')).toBeNull();
});
