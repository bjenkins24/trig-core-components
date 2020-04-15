import React from 'react';
// eslint-disable-next-line import/named
import { render, fireEvent } from 'test/utils';
import user from '@testing-library/user-event';
import PopoverNavigation from '../PopoverNavigation';

const triggerText = 'Open now';
const firstItem = 'first item';
const mockCallback = jest.fn();
const mockCallback2 = jest.fn();

const PopoverWrapper = () => {
  return (
    <PopoverNavigation
      navigationList={[
        {
          onClick: mockCallback,
          item: firstItem,
        },
        {
          onClick: mockCallback2,
          item: 'Second Item',
        },
      ]}
    >
      <button type="button">{triggerText}</button>
    </PopoverNavigation>
  );
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('<PopoverNavigation />', () => {
  it('renders and takes basic props', () => {
    const { getByTestId, getByText } = render(<PopoverWrapper />);

    const trigger = getByText(triggerText);
    user.click(trigger);
    user.click(getByTestId('popover-navigation__item-0'));
    expect(mockCallback.mock.calls.length).toEqual(1);
  });

  it('can navigate with keyboard', () => {
    const { getByText, queryByText } = render(<PopoverWrapper />);

    const trigger = getByText(triggerText);
    user.click(trigger);

    expect(mockCallback.mock.calls.length).toEqual(0);
    expect(getByText(firstItem)).toBeInTheDocument();

    fireEvent.keyDown(document.body, {
      key: 'ArrowDown',
    });
    fireEvent.keyDown(document.body, {
      key: 'Enter',
    });
    expect(mockCallback.mock.calls.length).toEqual(1);
    expect(queryByText(firstItem)).toBeNull();

    // Open it again going down
    user.click(trigger);
    fireEvent.keyDown(document.body, {
      key: 'ArrowDown',
    });
    fireEvent.keyDown(document.body, {
      key: 'ArrowDown',
    });
    // Go back to the top (and use tab just because both should work)
    fireEvent.keyDown(document.body, {
      key: 'Tab',
    });
    fireEvent.keyDown(document.body, {
      key: 'Enter',
    });
    expect(mockCallback.mock.calls.length).toEqual(2);

    // Open it again go up this time
    user.click(trigger);
    fireEvent.keyDown(document.body, {
      key: 'ArrowUp',
    });
    fireEvent.keyDown(document.body, {
      key: 'Shift',
    });
    fireEvent.keyDown(document.body, {
      key: 'ArrowUp',
    });
    fireEvent.keyDown(document.body, {
      key: 'Enter',
    });
    expect(mockCallback.mock.calls.length).toEqual(3);

    // Open it again go up this time
    user.click(trigger);
    fireEvent.keyDown(document.body, {
      key: 'ArrowUp',
    });
    fireEvent.keyDown(document.body, {
      key: 'Enter',
    });
    expect(mockCallback2.mock.calls.length).toEqual(1);
  });
});
