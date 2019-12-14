import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Button, { textMap, heightMap } from 'Buttons/Button';

test('is clickable', () => {
  const mockCallBack = jest.fn();
  const { getByRole } = render(<Button onClick={mockCallBack} />);
  user.click(getByRole('button'));

  expect(mockCallBack.mock.calls.length).toEqual(1);
});

test('takes a className', () => {
  const exampleClass = 'example-class';
  const { getByRole } = render(<Button className={exampleClass} />);

  expect(getByRole('button')).toHaveClass(exampleClass);
});

test('renders Icon with icon prop', () => {
  const title = 'Deck';
  const { queryByTitle, rerender } = render(
    <Button iconProps={{ type: 'deck', title }} />
  );
  expect(queryByTitle(title)).toBeTruthy();

  // Check default title
  rerender(<Button iconProps={{ type: 'deck' }} />);
  expect(queryByTitle(/deck icon/i)).toBeTruthy();
});

test('renders correct sizes', () => {
  const { rerender, getByRole } = render(<Button />);

  Object.keys(textMap).forEach((size) => {
    rerender(<Button size={size} />);
    expect(getByRole('button')).toHaveStyleRule('height', heightMap[size]);
  });
});

test('renders transparent button transparent', () => {
  const transparents = ['transparent', 'transparent-dark'];

  const { rerender, getByRole } = render(<Button />);

  transparents.forEach((variant) => {
    rerender(<Button variant={variant} />);
    const button = getByRole('button');
    expect(button).toHaveStyleRule('background', 'none');
    expect(button).toHaveStyleRule('border', '0');
  });
});

test('renders inverse button no background', () => {
  const inverses = ['inverse-pl', 'inverse-pc', 'inverse-s'];

  const { rerender, getByRole } = render(<Button />);

  inverses.forEach((variant) => {
    rerender(<Button variant={variant} />);
    expect(getByRole('button')).toHaveStyleRule('background', 'none');
  });
});

test("renders test's children", () => {
  const text = 'Example';
  const { getByText } = render(<Button>{text}</Button>);
  expect(getByText(text)).toBeTruthy();
});

test('takes a className', () => {
  const exampleClass = 'example-class';
  const { getByRole } = render(<Button className={exampleClass} />);
  expect(getByRole('button')).toHaveClass(exampleClass);
});
