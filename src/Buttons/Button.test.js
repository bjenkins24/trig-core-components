import React from 'react';
import { mount, shallow } from 'enzyme';
import theme from '../../stories/theme';
import Button, { textMap, heightMap } from './Button';
import Icon from '../Icon';

describe('<Button />', () => {
  it('is clickable', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack} />);

    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('renders Icon with icon prop', () => {
    const button = mount(<Button theme={theme} iconProps={{ type: 'deck' }} />);
    expect(button.find(Icon).exists()).toEqual(true);
  });

  it('renders correct sizes', () => {
    Object.keys(textMap).forEach((size) => {
      const button = mount(<Button size={size} theme={theme} />);
      expect(button.find(textMap[size]).exists()).toEqual(true);
      expect(button).toHaveStyleRule('height', heightMap[size]);
    });
  });

  it('renders transparent button transparent', () => {
    const transparents = ['transparent', 'transparent-dark'];

    transparents.forEach((variant) => {
      const button = mount(<Button variant={variant} theme={theme} />);
      expect(button).toHaveStyleRule('background', 'none');
      expect(button).toHaveStyleRule('border', '0');
    });
  });

  it('renders inverse button no background', () => {
    const inverses = ['inverse-pl', 'inverse-pc', 'inverse-s'];

    inverses.forEach((variant) => {
      const button = mount(<Button theme={theme} variant={variant} />);
      expect(button).toHaveStyleRule('background', 'none');
    });
  });

  it("renders it's children", () => {
    const text = 'Example';
    const button = mount(<Button theme={theme}>{text}</Button>);
    expect(button.text()).toEqual(text);
  });
});
