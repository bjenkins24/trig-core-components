import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Icon from '../../Icon';
import ListItem from '../ListItem';

const testId = 'test-id';

describe('<ListItem />', () => {
  it('list item loads and renders basic props', () => {
    const mockCallback = jest.fn();
    const exampleClass = 'example-class';
    const firstAction = 'first-action';
    const secondAction = 'second-action';
    const item = 'item';
    const content = 'content';
    const { getByText, getByTestId } = render(
      <ListItem
        data-testid={testId}
        onClick={mockCallback}
        className={exampleClass}
        renderContent={() => <div>{content}</div>}
        renderItem={() => <div>{item}</div>}
        actions={[
          <div key={1}>{firstAction}</div>,
          <div key={2}>{secondAction}</div>,
        ]}
      />
    );
    const listItem = getByTestId(testId);
    user.click(listItem);
    expect(mockCallback.mock.calls.length).toEqual(1);

    expect(listItem).toHaveClass(exampleClass);
    expect(getByText(content)).toBeTruthy();
    expect(getByText(item)).toBeTruthy();
    expect(getByText(firstAction)).toBeTruthy();
    expect(getByText(secondAction)).toBeTruthy();
  });

  it('renderItem defaults to null', () => {
    const { getByTestId } = render(
      <ListItem
        href="https://google.com"
        data-testid={testId}
        renderContent={() => null}
        onClick={() => null}
      />
    );
    expect(getByTestId('listItem__itemContent').firstChild).toBeNull();
  });

  it('only clicks action when clicked', () => {
    const mockCallback = jest.fn();
    const mockCallbackHeart = jest.fn();
    const { getByTestId, rerender } = render(
      <ListItem
        renderContent={() => null}
        onClick={mockCallback}
        actions={[
          <Icon
            type="heart"
            data-testid="listItem__heart"
            onClick={mockCallbackHeart}
          />,
          <Icon type="comment" />,
        ]}
      />
    );
    user.click(getByTestId('listItem__heart'));
    expect(mockCallback.mock.calls.length).toEqual(0);
    expect(mockCallbackHeart.mock.calls.length).toEqual(1);
    rerender(<ListItem renderContent={() => null} />);
    expect(getByTestId('list-item__container')).toHaveStyleRule(
      'cursor: default'
    );

    rerender(<ListItem renderContent={() => null} href="sup" />);
    expect(getByTestId('list-item__container')).toHaveStyleRule(
      'cursor: default'
    );
  });
});
