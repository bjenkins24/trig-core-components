import React from 'react';
import { render } from 'test/utils';
import Form from 'Form/Form';
import Fieldset from 'Form/Fieldset';
import Legend from 'Form/Legend';

describe('<Fieldset />, <Legend />', () => {
  it('renders and takes basic props', async () => {
    const text = 'text';
    const { getByText, rerender } = render(
      <Form
        onSubmit={() => {
          console.log('hello');
        }}
      >
        {({ validationSchema }) => {
          return (
            <Fieldset>
              <Legend>{text}</Legend>
              <p>{validationSchema}</p>
            </Fieldset>
          );
        }}
      </Form>
    );

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
