import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Toast from '../ToastContainer';
import Notification from '../Notification';

describe('<Notification />', () => {
  it('renders and takes basic props', () => {
    const content = 'content';
    const mockCallback = jest.fn();
    const { getByText, getByTitle, rerender } = render(
      <>
        <Toast />
        <Notification onClose={mockCallback}>{content}</Notification>
      </>
    );

    expect(getByText(content)).toBeInTheDocument();
    expect(getByTitle('Check Circle Icon')).toBeInTheDocument();
    user.click(getByTitle('Close Icon'));
    expect(mockCallback.mock.calls.length).toEqual(1);

    rerender(<Notification variant="error">{content}</Notification>);
    expect(getByTitle('Alert Icon')).toBeInTheDocument();
    user.click(getByTitle('Close Icon'));
  });
});
