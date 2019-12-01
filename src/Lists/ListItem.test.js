import React from 'react';
import { mount } from 'enzyme';
import ListItem, { ItemContent } from './ListItem';
import theme from '../../stories/theme';
import { testIsClickable } from '../../jest.utils';

const exampleClass = 'example-class';

describe('<ListItem />', () => {
  let component;
  beforeAll(() => {
    component = mount(
      <ListItem
        className={exampleClass}
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
    const listItemTest = (props) => (
      <ListItem renderContent={() => null} {...props} />
    );
    testIsClickable(listItemTest);
  });

  it('takes a className', () => {
    expect(component.hasClass(exampleClass)).toEqual(true);
  });

  it('renderItem defaults to null', () => {
    const thisComponent = mount(
      <ListItem theme={theme} renderContent={() => null} />
    );
    expect(thisComponent.find(ItemContent).isEmptyRender()).toEqual(true);
  });
});
