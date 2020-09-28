import React, { useRef } from 'react';
// eslint-disable-next-line import/named
import { render, fireEvent } from 'test/utils';
import user from '@testing-library/user-event';
import Popover from '../Popover';

const triggerText = 'My Trigger';
const popoverText = 'My popover';
const mockCallback = jest.fn();
const preventClickTestId = 'test';

const PopoverWrapper = ({ hasPreventClickRef, hasTriggerOnClick, variant }) => {
  const testRef = useRef(null);
  return (
    <Popover
      variant={variant}
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

  it('closes on escape', () => {
    const { getByRole, getByText, queryByText } = render(<PopoverWrapper />);

    const trigger = getByRole('button');

    user.click(trigger);
    expect(getByText(popoverText)).toBeInTheDocument();

    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
    });

    expect(queryByText(popoverText)).toBeNull();
  });

  it('renders a light variant', () => {
    const { getByTestId, getByRole } = render(
      <PopoverWrapper variant="light" />
    );
    const trigger = getByRole('button');
    user.click(trigger);
    getByTestId('popover__container').toHaveStyleRule('background: ');
  });
});
