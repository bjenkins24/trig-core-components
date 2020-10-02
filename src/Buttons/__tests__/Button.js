import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Button, { textMap, heightMap } from 'Buttons/Button';

jest.spyOn(console, 'error').mockImplementation(() => {});

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

    const { queryByTitle, rerender, container } = render(
      <Button as="a" iconProps={{ type: 'deck', title }}>
        Button
      </Button>
    );
    user.click(container.firstChild);
    expect(queryByTitle(title)).toBeInTheDocument();

    // Check default title
    rerender(<Button iconProps={{ type: 'deck' }}>Button</Button>);
    expect(queryByTitle(/deck icon/i)).toBeInTheDocument();
  });

  it('renders correct sizes', () => {
    const { rerender, getByRole } = render(<Button>Test</Button>);

    Object.keys(textMap).forEach((size) => {
      rerender(<Button size={size}>Button</Button>);
      expect(getByRole('button')).toHaveStyleRule('height', heightMap[size]);
    });
  });

  it('renders transparent button transparent', () => {
    const transparents = ['transparent', 'transparent-dark', 'inline'];

    const { rerender, getByRole } = render(<Button>Button</Button>);

    transparents.forEach((variant) => {
      rerender(<Button variant={variant}>Button</Button>);
      const button = getByRole('button');
      expect(button).toHaveStyleRule('background', 'none');
      expect(button).toHaveStyleRule('border', '0');
    });
  });

  it('renders inverse button no background', () => {
    const inverses = ['inverse-pl', 'inverse-pc', 'inverse-s'];

    const { rerender, getByRole } = render(<Button>Button</Button>);

    inverses.forEach((variant) => {
      rerender(<Button variant={variant}>Button</Button>);
      expect(getByRole('button')).toHaveStyleRule('background', 'none');
    });
  });

  it('renders disabled when loading', () => {
    const { getByRole, getByTitle } = render(<Button loading>Button</Button>);
    expect(getByRole('button')).toHaveAttribute('disabled');
    expect(getByTitle(/loading icon/i)).toBeInTheDocument();
  });

  it('renders additional content correctly', () => {
    const additionalContent = 'Connected';

    const { getByText, rerender } = render(
      <Button
        size="hg"
        variant="inverse-s"
        additionalContent={additionalContent}
      >
        Button
      </Button>
    );
    expect(getByText(additionalContent)).toBeInTheDocument();

    rerender(<Button additionalContent={additionalContent}>Button</Button>);
    expect(console.error).toHaveBeenCalledTimes(1);
  });
});
