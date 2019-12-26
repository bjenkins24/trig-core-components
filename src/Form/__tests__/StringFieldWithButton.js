import React from 'react';
// eslint-disable-next-line
import { render, fireEvent } from 'test/utils';
import user from '@testing-library/user-event';
import StringFieldWithButton from 'Form/StringFieldWithButton';

describe('<StringFieldWithButton />', () => {
  test('renders and takes basic props', () => {
    const buttonContent = 'Button Content';
    const exampleClass = 'example class';
    const mockCallBack = jest.fn();
    const { getByText, getByRole, container } = render(
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
  });
});
