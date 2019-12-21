import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Popover from 'Popover';

jest.mock('@material-ui/core/Popper', () => {
  return ({ id, children }) => (
    <div id={id}>{children({ fakeProps: 'fake' })}</div>
  );
});

jest.mock('@material-ui/core/ClickAwayListener', () => {
  return ({ children }) => <div>{children}</div>;
});

jest.mock('@material-ui/core/Grow', () => {
  return ({ children }) => <div>{children}</div>;
});

describe('<Popover />', () => {
  it('renders and takes basic props', () => {
    const triggerText = 'My Trigger';
    const popoverText = 'My popover';
    const mockCallback = jest.fn();
    const { getByRole, getByText } = render(
      <Popover renderPopover={() => <div>{popoverText}</div>}>
        {/* this element should have the role button applied since it will be clickable */}
        <div onClick={mockCallback}>{triggerText}</div>
      </Popover>
    );

    const trigger = getByRole('button');
    expect(getByText(popoverText)).toBeInTheDocument();
    expect(trigger).toHaveTextContent(triggerText);
    user.click(trigger);
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
