import React from 'react';
import { render } from 'test/utils';
import ListItemContent from '../ListItemContent';

describe('<ListItemContent />', () => {
  it('renders with basic props', () => {
    const primary = 'Hello';
    const secondary = 'Goodbye';
    const item = 'item';
    const exampleClass = 'example-class';
    const testId = 'listItemContent';

    const { getByText, getByTestId } = render(
      <ListItemContent
        data-testid={testId}
        className={exampleClass}
        primary={primary}
        secondary={secondary}
        renderItem={() => <div>{item}</div>}
      />
    );

    expect(getByTestId(testId)).toHaveClass(exampleClass);
    expect(getByText(primary)).toBeTruthy();
    expect(getByText(secondary)).toBeTruthy();
    expect(getByText(item)).toBeTruthy();
    expect(getByText(item)).toBeTruthy();
  });

  it('renderItem defaults to null', () => {
    const { getByTestId } = render(
      <ListItemContent primary="primary" secondary="secondary" />
    );
    expect(
      getByTestId('listItemContent__renderItemNull').firstChild
    ).toBeNull();
  });
});
