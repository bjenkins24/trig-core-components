import React from 'react';
import { render } from 'test/utils';
import { Huge, Heading2 } from 'Typography';

describe('<Typography />', () => {
  it('renders and takes basic props', () => {
    const text = 'text';
    const { container, getByTestId, rerender } = render(<Huge>{text}</Huge>);
    expect(container.firstChild).toHaveStyleRule('font-size', '4.8rem');
    rerender(<Huge separator>{text}</Huge>);
    expect(getByTestId('typography__separator')).toBeInTheDocument();
  });

  it('takes a color prop', () => {
    const { container } = render(<Heading2 color="blue">Hello</Heading2>);
    expect(container.firstChild).toHaveStyleRule('color', 'blue');
  });
});
