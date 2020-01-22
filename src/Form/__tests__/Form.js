import React from 'react';
import { render } from 'test/utils';
import Fieldset from 'Form/Fieldset';
import Legend from 'Form/Legend';

describe('<Fieldset />, <Legend />', () => {
  it('renders and takes basic props', async () => {
    const text = 'text';
    const { getByText, rerender } = render(
      <form>
        <Fieldset>
          <Legend>{text}</Legend>
        </Fieldset>
      </form>
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
