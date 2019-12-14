import React from 'react';
import { render } from 'test/utils';
// import user from '@testing-library/user-event';
import Avatar from 'Avatar';

test('renders and takes basic props', () => {
  const { getByTitle } = render(<Avatar />);

  expect(getByTitle('A user')).toBeTruthy();
});
