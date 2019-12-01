import React from 'react';
import { shallow } from 'enzyme';
import theme from './stories/theme';

const testIsClickable = (Component) => {
  const mockCallBack = jest.fn();
  const component = shallow(<Component theme={theme} onClick={mockCallBack} />);

  component.simulate('click');
  expect(mockCallBack.mock.calls.length).toEqual(1);
};

const testIfTakesClassName = (Component) => {
  const exampleClass = 'example-class';
  const component = shallow(
    <Component className={exampleClass} theme={theme} />
  );

  expect(component.hasClass(exampleClass)).toEqual(true);
};

export { testIsClickable, testIfTakesClassName };
