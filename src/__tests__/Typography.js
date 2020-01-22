import React from 'react';
import { render } from 'test/utils';
import { Huge } from 'Typography';

describe('<Typography />', () => {
  it('renders and takes basic props', () => {
    const text = 'text';
    const { container, getByTestId, rerender } = render(<Huge>{text}</Huge>);
    expect(container.firstChild).toHaveStyleRule('font-size', '4.8rem');
    rerender(<Huge separator>{text}</Huge>);
    expect(getByTestId('typography__separator')).toBeInTheDocument();
  });
});
