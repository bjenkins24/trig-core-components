import React from 'react';
import { render } from 'test/utils';
import CardTwitter from 'CardLarge/compositions/CardTwitter';

const totalFavorites = 12;
const totalViews = 11;
const title = 'My cool card';
const tweet = 'My cool tweet';
const avatar = 'https://image.jpg';
const name = 'Brian';
const handle = '@brian';
const date = 'July 3';

const onClickMock = jest.fn();
const onClickFavoriteMock = jest.fn();
const onClickTrash = jest.fn();

const buildCard = (props) => {
  return (
    <CardTwitter
      id={1}
      href="https://example.com"
      onClick={onClickMock}
      onClickFavorite={onClickFavoriteMock}
      onClickTrash={onClickTrash}
      totalFavorites={totalFavorites}
      totalViews={totalViews}
      isFavorited
      title={title}
      content={tweet}
      {...props}
    />
  );
};

describe('<CardTwitter />', () => {
  it('renders and takes basic props', () => {
    const { getAllByTitle, getByText } = render(
      buildCard({ date, handle, tweet, name, avatar })
    );

    expect(getAllByTitle(/Favorite/i)[0]).toBeInTheDocument();

    expect(getByText(tweet)).toBeInTheDocument();
  });
});
