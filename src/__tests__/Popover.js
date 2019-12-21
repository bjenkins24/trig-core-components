import React, { useRef } from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Popover from 'Popover';

// https://github.com/mui-org/material-ui/issues/15726#issuecomment-493124813
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
});

jest.mock('@material-ui/core/ClickAwayListener', () => {
  return ({ children }) => <div>{children}</div>;
});

jest.mock('@material-ui/core/Grow', () => {
  return ({ children }) => <div>{children}</div>;
});

const triggerText = 'My Trigger';
const popoverText = 'My popover';
const mockCallback = jest.fn();
const preventClickTestId = 'test';

const PopoverWrapper = ({ hasPreventClickRef, hasTriggerOnClick }) => {
  const testRef = useRef(null);
  return (
    <Popover
      preventClickRef={hasPreventClickRef && testRef}
      renderPopover={({ closePopover }) => (
        <div onClick={closePopover}>{popoverText}</div>
      )}
    >
      {/* this element should have the role button applied since it will be clickable */}
      <div onClick={hasTriggerOnClick ? mockCallback : null}>
        {triggerText}
        <div data-testid={preventClickTestId} ref={testRef} />
      </div>
    </Popover>
  );
};

describe('<Popover />', () => {
  it('renders and takes basic props', () => {
    const { getByRole } = render(<PopoverWrapper />);

    const trigger = getByRole('button');
    expect(trigger).toHaveTextContent(triggerText);
  });

  it('open and closes the popover correctly', () => {
    const { getByText, queryByText, getByRole } = render(
      <PopoverWrapper hasTriggerOnClick />
    );

    const trigger = getByRole('button');

    user.click(trigger);
    expect(getByText(popoverText)).toBeInTheDocument();

    // Make sure on click can still be callable by trigger
    expect(mockCallback.mock.calls.length).toEqual(1);

    user.click(getByText(popoverText));
    expect(queryByText(popoverText)).toBeNull();
  });

  it('prevents clicks on trigger with preventClickRef', () => {
    const { getByRole, queryByText, getByTestId, getByText } = render(
      <PopoverWrapper hasPreventClickRef />
    );

    const trigger = getByRole('button');
    user.click(getByTestId(preventClickTestId));
    expect(queryByText(popoverText)).toBeNull();

    user.click(trigger);
    expect(getByText(popoverText)).toBeInTheDocument();
  });
});
