import React from 'react';
import { render } from 'test/utils';
import Icon from 'Icon';

describe('<Icon type="hamburger" />', () => {
  it('changes to close button and back when clicked ', () => {
    const { getByTestId, rerender } = render(<Icon type="hamburger" />);
    expect(getByTestId('hamburger__bar2')).toHaveStyleRule('opacity', '1');
    rerender(<Icon type="hamburger" isOpen />);
    expect(getByTestId('hamburger__bar2')).toHaveStyleRule('opacity', '0');
  });
});
