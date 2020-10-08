import React from 'react';
// eslint-disable-next-line
import { render, wait } from 'test/utils';
import user from '@testing-library/user-event';
import { string } from 'yup';
import StringFieldWithButtonForm from 'Form/StringFieldWithButtonForm';

describe('<StringFieldWithButtonForm />', () => {
  test('renders and takes basic props', async () => {
    const buttonContent = 'Button Content';
    const mockCallBack = jest.fn();
    const label = 'My label';
    const error = 'error';
    const { getByText, getByRole } = render(
      <StringFieldWithButtonForm
        buttonContent={buttonContent}
        validate={string().required(error)}
        label={label}
        onSubmit={async ({ resetForm }) => {
          mockCallBack();
          resetForm();
        }}
      />
    );

    const submitButton = getByRole('button');

    expect(getByText(buttonContent)).toBeInTheDocument();

    await wait(() => user.click(submitButton));
    expect(getByText(error)).toBeInTheDocument();
    await wait(() => user.type(getByRole('textbox'), 'hello'));
    await wait(() => user.click(submitButton));
    expect(mockCallBack.mock.calls.length).toEqual(1);
    await wait();
    expect(getByRole('textbox').value).toEqual('');
  });
});
