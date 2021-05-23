import React from 'react';
import { render } from 'test/utils';
import Logo from '../Logo';
import theme from '../../stories/theme';

describe('<Logo />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, rerender, getByTestId } = render(<Logo />);
    expect(getByTitle('Trig Logo')).toBeInTheDocument();
    expect(getByTestId('logo__path').getAttribute('fill')).toEqual(theme.pc);

    const title = 'Cool Logo';
    rerender(<Logo type="light" title={title} />);
    expect(getByTitle(title)).toBeInTheDocument();
    expect(getByTestId('logo__path').getAttribute('fill')).toEqual(theme.p);
  });
});
