import React from 'react';
import { mount, shallow } from 'enzyme';
import { render } from 'test/utils';
import Button, { textMap, heightMap } from 'Buttons/Button';
import theme from '../../../stories/theme';
import Icon from '../../Icon';
import { testIsClickable, testIfTakesClassName } from '../../../jest.utils';

describe('<Button />', () => {
  it('is clickable', () => {
    testIsClickable(Button);
  });

  it('takes a className', () => {
    testIfTakesClassName(Button);
  });

  it('renders Icon with icon prop', () => {
    const button = render(
      <Button theme={theme} iconProps={{ type: 'deck' }} />
    );
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

  it('takes a className', () => {
    const exampleClass = 'example-class';
    const button = shallow(<Button className={exampleClass} />);
    expect(button.hasClass(exampleClass)).toEqual(true);
  });
});
