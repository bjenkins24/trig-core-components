import React from 'react';
import { render } from 'test/utils';
import Popover from 'Popover';

describe('<Popover />', () => {
  const triggerText = 'My Trigger';
  const popoverText = 'My popover';
  it('renders and takes basic props', () => {
    const { getByRole } = render(
      <Popover renderPopover={() => <div>{popoverText}</div>}>
        <div>{triggerText}</div>
      </Popover>
    );

    expect(getByRole('button')).toHaveTextContent(triggerText);
  });
});
