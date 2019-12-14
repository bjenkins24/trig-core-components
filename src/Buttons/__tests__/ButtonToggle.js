import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import ButtonToggle from '../Button';

test('Button toggle is clickable', () => {
  // Render a checkbox with label in the document
  const mockCallBack = jest.fn();
  const { getByRole } = render(
    <ButtonToggle onClick={mockCallBack}>Hello</ButtonToggle>
  );

  user.click(getByRole('button'));
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
