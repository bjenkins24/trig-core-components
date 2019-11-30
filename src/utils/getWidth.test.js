import React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import getWidth from './getWidth';

const TestComponent = styled.div`
  ${getWidth};
`;

describe('getWidth()', () => {
  it('prints percentage', () => {
    const component = mount(<TestComponent width="100%" />);
    expect(component).toHaveStyleRule('width', '100%');
  });
  it('adds rem to width', () => {
    const component = mount(<TestComponent width={1.2} />);
    expect(component).toHaveStyleRule('width', '1.2rem');
  });
});
