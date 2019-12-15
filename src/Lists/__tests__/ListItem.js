import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import ListItem from '../ListItem';

const testId = 'test-id';

describe('<ListItem />', () => {
  it('list item loads and renders basic props', () => {
    const mockCallBack = jest.fn();
    const exampleClass = 'example-class';
    const firstAction = 'first-action';
    const secondAction = 'second-action';
    const item = 'item';
    const content = 'content';
    const { getByText, getByTestId } = render(
      <ListItem
        data-testid={testId}
        onClick={mockCallBack}
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
    expect(mockCallBack.mock.calls.length).toEqual(1);

    expect(listItem).toHaveClass(exampleClass);
    expect(getByText(content)).toBeTruthy();
    expect(getByText(item)).toBeTruthy();
    expect(getByText(firstAction)).toBeTruthy();
    expect(getByText(secondAction)).toBeTruthy();
  });

  it('renderItem defaults to null', () => {
    const { getByTestId } = render(
      <ListItem data-testid={testId} renderContent={() => null} />
    );
    expect(getByTestId('listItem__itemContent').firstChild).toBeNull();
  });
});
