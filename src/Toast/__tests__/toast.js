import React from 'react';
import { toast } from 'react-toastify';
import { render } from 'test/utils';
import showToast from '../toast';

jest.mock('react-toastify', () => ({
  toast: (component, options) => {
    return {
      Component: component,
      options: options.autoClose,
    };
  },
  cssTransition: (options) => options,
}));

toast.POSITION = {
  TOP_CENTER: 1,
};

describe('toast', () => {
  it('has the right timeout for a success', () => {
    const result = showToast({
      message: 'hello',
      type: 'success',
    });
    expect(result.options).toEqual(3000);
  });
  it('has the right timeout for an error', () => {
    const result = showToast({
      message: 'hello',
      type: 'error',
    });
    expect(result.options).toEqual(10000);
  });
  it('takes a custom timeout', () => {
    const timeout = 123;
    const result = showToast({
      message: 'hello',
      type: 'error',
      timeout,
    });
    expect(result.options).toEqual(timeout);
  });
  it('renders a notification', () => {
    const result = showToast({
      message: 'hello',
      autoClose: false,
    });
    const { Component } = result;
    const { getByTitle } = render(<Component />);
    expect(getByTitle('Close Icon')).toBeInTheDocument();
  });
});
