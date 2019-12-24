import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Fab from 'Buttons/Fab';

describe('<Fab />', () => {
  it('renders and takes basic props', () => {
    const mockCallback = jest.fn();
    const content = 'Fab Content';
    const { container, getByText, rerender } = render(
      <Fab onClick={mockCallback}>{content}</Fab>
    );
    expect(getByText(content)).toBeInTheDocument();
    user.click(container.firstChild);
    expect(mockCallback.mock.calls.length).toEqual(1);
    rerender(<Fab size={3}>Hello</Fab>);
    expect(container.firstChild).toHaveStyleRule('width', '3rem');
  });
});
