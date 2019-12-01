import React from 'react';
import { mount } from 'enzyme';
import ListItemContent, { Primary, Secondary } from './ListItemContent';
import { testIfTakesClassName } from '../../jest.utils';

describe('<ListItemContent />', () => {
  let component;
  const primary = 'Hello';
  const secondary = 'Goodbye';
  beforeAll(() => {
    component = mount(
      <ListItemContent
        primary={primary}
        secondary={secondary}
        renderItem={() => <div className="my-item" />}
      />
    );
  });

  it('takes a className', () => {
    testIfTakesClassName(ListItemContent);
  });

  it('renders primary prop', () => {
    expect(component.find(Primary).text()).toEqual(primary);
  });

  it('renders secondary prop', () => {
    expect(component.find(Secondary).text()).toEqual(secondary);
  });

  it('renders an item', () => {
    expect(component.find('.my-item').exists()).toEqual(true);
  });
});
