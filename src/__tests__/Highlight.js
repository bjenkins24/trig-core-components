import React from 'react';
import { render } from 'test/utils';
import Highlight from '../Highlight';

it('formats highlights correctly', () => {
  const testString =
    '<highlight>Test</highlight> today <hightlight>is</hightlight> cool';

  const { getByText } = render(
    <Highlight string={testString} styles="font-weight: bold" />
  );

  expect(getByText('Test')).toBeInTheDocument();
  expect(getByText('is')).toBeInTheDocument();
});
