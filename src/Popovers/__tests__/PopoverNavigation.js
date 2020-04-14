import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import PopoverNavigation from '../PopoverNavigation';

const triggerText = 'Open now';
const mockCallback = jest.fn();

const PopoverWrapper = () => {
  return (
    <PopoverNavigation
      navigationList={[
        {
          onClick: mockCallback,
          item: 'First Item',
        },
        {
          onClick: () => null,
          item: 'Second Item',
        },
      ]}
    >
      <button type="button">{triggerText}</button>
    </PopoverNavigation>
  );
};

describe('<PopoverNavigation />', () => {
  it('renders and takes basic props', () => {
    const { getByTestId, getByText } = render(<PopoverWrapper />);

    const trigger = getByText(triggerText);
    user.click(trigger);
    user.click(getByTestId('popover-navigation__item-0'));
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
