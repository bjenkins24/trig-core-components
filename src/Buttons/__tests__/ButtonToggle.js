import React from 'react';
import { shallow } from 'enzyme';
import ButtonToggle from '../Button';

test('Button toggle is clickable', () => {
  // Render a checkbox with label in the document
  const mockCallBack = jest.fn();
  const button = shallow(
    <ButtonToggle onClick={mockCallBack}>Hello</ButtonToggle>
  );

  button.simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
