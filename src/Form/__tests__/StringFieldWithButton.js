import React from 'react';
// eslint-disable-next-line
import { render, fireEvent, wait } from 'test/utils';
import user from '@testing-library/user-event';
import StringFieldWithButton from 'Form/StringFieldWithButton';
import theme from '../../../stories/theme';

describe('<StringFieldWithButton />', () => {
  test('renders and takes basic props', async () => {
    const buttonContent = 'Button Content';
    const exampleClass = 'example class';
    const mockCallBack = jest.fn();
    const label = 'My label';
    const { getByText, getByRole, container, rerender } = render(
      <StringFieldWithButton
        className={exampleClass}
        onSubmit={mockCallBack}
        buttonContent={buttonContent}
      />
    );
    expect(container.firstChild).toHaveClass(exampleClass);
    expect(getByText(buttonContent)).toBeInTheDocument();
    user.click(getByRole('button'));
    fireEvent.keyDown(getByRole('textbox'), { key: 'Enter', code: 13 });
    expect(mockCallBack.mock.calls.length).toEqual(2);
    fireEvent.keyDown(getByRole('textbox'), { key: 't' });
    rerender(
      <StringFieldWithButton
        buttonContent={buttonContent}
        onSubmit={mockCallBack}
        label={label}
      />
    );
    fireEvent.focus(getByRole('textbox'));
    expect(getByRole('button')).toHaveStyleRule(
      `border: 0.1rem solid ${theme.ps[200]}`
    );

    fireEvent.change(getByRole('textbox'), { target: { value: 'a' } });
    await wait(() => fireEvent.blur(getByRole('textbox')), { timeout: 20 });
    expect(getByRole('button')).not.toHaveStyleRule(
      `border: 0.1rem solid ${theme.ps[200]}`
    );
    expect(getByText(label)).toBeInTheDocument();
    wait();
  });
});
