import React from 'react';
import { render } from 'test/utils';
import Loading from 'Loading';

describe('<Loading />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle } = render(<Loading />);

    expect(getByTitle(/loading icon/i)).toBeTruthy();
  });
});
