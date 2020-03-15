import React from 'react';
import { render } from 'test/utils';
import FieldContainer from 'Form/FieldContainer';

describe('<FieldContainer />', () => {
  it('renders with basic props', () => {
    const label = 'My Label';
    const { getByText } = render(
      <FieldContainer label={label}>
        {({ id }) => {
          return <div id={id} />;
        }}
      </FieldContainer>
    );
    expect(getByText(label)).toBeInTheDocument();
  });
});
