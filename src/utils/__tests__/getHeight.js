import React from 'react';
import styled from 'styled-components';
import { render } from 'test/utils';
import getHeight from '../getHeight';

const TestComponent = styled.div`
  ${getHeight};
`;

test('prints width correctly', () => {
  const testId = 'test';
  const { getByTestId, rerender } = render(
    <TestComponent height="100%" data-testid={testId} />
  );
  expect(getByTestId(testId)).toHaveStyleRule('height', '100%');
  rerender(<TestComponent height={1.2} data-testid={testId} />);
  expect(getByTestId(testId)).toHaveStyleRule('height', '1.2rem');
  rerender(<TestComponent height="auto" data-testid={testId} />);
  expect(getByTestId(testId)).toHaveStyleRule('height', 'auto');
});
