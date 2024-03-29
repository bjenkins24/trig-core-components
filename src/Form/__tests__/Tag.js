import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Tag from 'Form/Tag';

describe('<Tag />', () => {
  it('renders and takes basic props', () => {
    const tagText = 'My Cool Tag';
    const testId = 'test';
    const exampleClass = 'example-class';
    const mockCallback = jest.fn();
    const {
      getByText,
      getByLabelText,
      getByTitle,
      getByTestId,
      getByRole,
      rerender,
    } = render(
      <Tag
        data-testid={testId}
        onRequestRemove={mockCallback}
        className={exampleClass}
      >
        {tagText}
      </Tag>
    );

    expect(getByText(tagText)).toBeInTheDocument();
    // Remove button
    expect(getByRole('button')).toBeInTheDocument();

    user.click(getByLabelText('Remove'));
    expect(mockCallback.mock.calls.length).toEqual(1);
    expect(getByTitle(/remove button/i)).toBeInTheDocument();
    expect(getByTestId(testId)).toHaveClass(exampleClass);
    rerender(
      <Tag
        data-testid={testId}
        onRequestRemove={mockCallback}
        className={exampleClass}
        onClick={() => null}
      >
        {tagText}
      </Tag>
    );
  });
});
