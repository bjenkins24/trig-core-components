import React from 'react';
import { render } from 'test/utils';
import Card from 'Card';

jest.mock('react-truncate', () => {
  return (props) => <div {...props} />;
});

const totalFavorites = 12;
const totalComments = 10;
const title = 'My cool card';

const buildCard = (props) => {
  return (
    <Card
      totalFavorites={totalFavorites}
      totalComments={totalComments}
      type="link"
      isFavorited
      dateTime={new Date()}
      title={title}
      {...props}
    />
  );
};

test('renders and takes basic props', () => {
  const { getByTitle, rerender, getByText, getByTestId } = render(buildCard());

  expect(getByText(totalFavorites.toString())).toBeTruthy();
  expect(getByText(totalComments.toString())).toBeTruthy();
  expect(getByText(title)).toBeTruthy();
  expect(getByTitle(/heart filled icon/i)).toBeTruthy();
  expect(getByTestId(/card__avatar-null/i)).toBeTruthy();

  rerender(buildCard({ isFavorited: false }));
  expect(getByTitle(/heart icon/i)).toBeTruthy();

  const avatarText = 'avatar-text';
  rerender(buildCard({ renderAvatar: () => <div>{avatarText}</div> }));
  expect(getByText(avatarText)).toBeTruthy();
});
