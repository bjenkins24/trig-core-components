import React from 'react';
import { render } from 'test/utils';
import List from '../List';
import ListItem from '../ListItem';

test('renders children', () => {
  const testContent = 'test-content';
  const { getByText } = render(
    <List>
      <ListItem renderContent={() => <div>{testContent}</div>} />
    </List>
  );
  expect(getByText(testContent)).toBeTruthy();
});
