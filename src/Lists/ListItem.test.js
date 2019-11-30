import React from 'react';
import { mount } from 'enzyme';
import { ListItem } from './index';
import theme from '../../stories/theme';

const exampleClass = 'example-class';

describe('<ListItem />', () => {
  let component;
  let mockCallBack;
  beforeAll(() => {
    mockCallBack = jest.fn();
    component = mount(
      <ListItem
        className={exampleClass}
        onClick={mockCallBack}
        theme={theme}
        renderContent={() => <div className="my-content" />}
        renderItem={() => <div className="my-item" />}
        actions={[
          <div key={1} className="first-action" />,
          <div key={2} className="second-action" />,
        ]}
      />
    );
  });

  it('renders actions correctly', () => {
    expect(component.find('.first-action').exists()).toEqual(true);
    expect(component.find('.second-action').exists()).toEqual(true);
  });

  it('renders item correctly', () => {
    expect(component.find('.my-item').exists()).toEqual(true);
  });
  it('renders content correctly', () => {
    expect(component.find('.my-content').exists()).toEqual(true);
  });

  it('is clickable', () => {
    component.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('takes a className', () => {
    expect(component.hasClass(exampleClass)).toEqual(true);
  });
});
