import React from 'react';
import { render } from 'test/utils';
import Separator from 'Separator';

describe('<Separator />', () => {
  it('renders and takes basic props', () => {
    const { container, rerender } = render(<Separator size={3} />);
    expect(container.firstChild).toHaveStyleRule('height', '3rem');
    rerender(<Separator />);
    expect(container.firstChild).toHaveStyleRule('height', '0.1rem');
  });
});
