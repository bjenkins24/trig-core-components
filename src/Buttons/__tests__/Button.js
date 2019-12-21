import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Button, { textMap, heightMap } from 'Buttons/Button';

describe('<Button />', () => {
  it('renders and takes basic props', () => {
    const mockCallBack = jest.fn();
    const exampleClass = 'example-class';
    const text = 'Example';

    const { getByRole, getByText } = render(
      <Button className={exampleClass} onClick={mockCallBack}>
        {text}
      </Button>
    );

    const button = getByRole('button');

    // Clickable
    user.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);

    expect(button).toHaveClass(exampleClass);
    expect(getByText(text)).toBeInTheDocument();
  });

  it('renders Icon with icon prop', () => {
    const title = 'Deck';

    const { queryByTitle, rerender } = render(
      <Button iconProps={{ type: 'deck', title }} />
    );

    expect(queryByTitle(title)).toBeInTheDocument();

    // Check default title
    rerender(<Button iconProps={{ type: 'deck' }} />);
    expect(queryByTitle(/deck icon/i)).toBeInTheDocument();
  });

  it('renders correct sizes', () => {
    const { rerender, getByRole } = render(<Button />);

    Object.keys(textMap).forEach((size) => {
      rerender(<Button size={size} />);
      expect(getByRole('button')).toHaveStyleRule('height', heightMap[size]);
    });
  });

  it('renders transparent button transparent', () => {
    const transparents = ['transparent', 'transparent-dark'];

    const { rerender, getByRole } = render(<Button />);

    transparents.forEach((variant) => {
      rerender(<Button variant={variant} />);
      const button = getByRole('button');
      expect(button).toHaveStyleRule('background', 'none');
      expect(button).toHaveStyleRule('border', '0');
    });
  });

  it('renders inverse button no background', () => {
    const inverses = ['inverse-pl', 'inverse-pc', 'inverse-s'];

    const { rerender, getByRole } = render(<Button />);

    inverses.forEach((variant) => {
      rerender(<Button variant={variant} />);
      expect(getByRole('button')).toHaveStyleRule('background', 'none');
    });
  });
});
