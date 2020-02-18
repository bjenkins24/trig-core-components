import React from 'react';
import styled from 'styled-components';
import { render } from 'test/utils';
import getWidth from '../getWidth';

const TestComponent = styled.div`
  ${getWidth};
`;

test('prints width correctly', () => {
  const testId = 'test';
  const { getByTestId, rerender } = render(
    <TestComponent width="100%" data-testid={testId} />
  );
  expect(getByTestId(testId)).toHaveStyleRule('width', '100%');
  rerender(<TestComponent width={1.2} data-testid={testId} />);
  expect(getByTestId(testId)).toHaveStyleRule('width', '1.2rem');
  rerender(<TestComponent width="auto" data-testid={testId} />);
  expect(getByTestId(testId)).toHaveStyleRule('width', 'auto');
});
