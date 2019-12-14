import React from 'react';
import { render } from 'test/utils';
import useTheme from '../useTheme';
import theme from '../../../stories/theme';

const TestComponent = (props) => {
  const myTheme = useTheme();
  return (
    <div
      {...props}
      css={`
        background: ${myTheme.p};
      `}
    />
  );
};

test('get the theme', () => {
  const testId = 'test-id';
  const { getByTestId } = render(<TestComponent data-testid={testId} />);
  expect(getByTestId(testId)).toHaveStyleRule('background', theme.p);
});
