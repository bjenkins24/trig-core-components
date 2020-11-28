import React from 'react';
// eslint-disable-next-line import/named
import { render, waitFor } from 'test/utils';
import user from '@testing-library/user-event';
import { Form, StringFieldForm, Fieldset, Legend } from '../../index';

describe('<Form />, <Fieldset />, <Legend />', () => {
  it('renders and takes basic props', async () => {
    const text = 'text';
    const errorMessage = 'error';
    const errorMessage2 = 'error-2';
    const initialValue = 'first value';
    const initialValue2 = 'second value';
    const inputId = 'input-id';
    const inputId2 = 'input-id-2';
    const { getByText, getByTestId, queryByText, rerender } = render(
      <Form
        initialValues={{ test: initialValue, testMe: initialValue2 }}
        onSubmit={() => {
          console.log('hello');
        }}
        validate={(values) => {
          const errors = {};
          if (values.testMe !== initialValue2) {
            errors.testMe = errorMessage2;
          }
          return errors;
        }}
        validationSchema={{
          validate: (values) => {
            if (values.test !== initialValue) {
              /* eslint-disable no-throw-literal */
              throw {
                inner: [
                  {
                    name: 'ValidationError',
                    value: '',
                    path: 'test',
                    type: 'required',
                    errors: [errorMessage],
                    inner: [],
                    message: errorMessage,
                  },
                ],
              };
              /* eslint-enable */
            }
          },
        }}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Fieldset>
                <Legend>{text}</Legend>
                <StringFieldForm name="test" data-testid={inputId} />
                <StringFieldForm name="testMe" data-testid={inputId2} />
                <button type="submit">Submit</button>
              </Fieldset>
            </form>
          );
        }}
      </Form>
    );
    const submitButton = getByText('Submit');
    user.type(getByTestId(inputId2), 'Change the value');
    user.click(submitButton);
    await waitFor(() => {
      expect(getByText(errorMessage2)).toBeInTheDocument();
    });
    expect(queryByText(errorMessage)).toBeNull();
    user.type(getByTestId(inputId), 'Change the value');

    user.click(submitButton);
    await waitFor(() => {
      expect(getByText(errorMessage)).toBeInTheDocument();
    });

    expect(getByText(text)).toBeInTheDocument();
    rerender(
      <form>
        <Fieldset margin={5}>
          <div>{text}</div>
        </Fieldset>
      </form>
    );
    expect(getByText(text)).toBeInTheDocument();
  });
});
