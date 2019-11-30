import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

test('Button is clickable', () => {
  // Render a checkbox with label in the document
  const mockCallBack = jest.fn();
  const button = shallow(<Button onClick={mockCallBack}>Hello</Button>);

  button.simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
