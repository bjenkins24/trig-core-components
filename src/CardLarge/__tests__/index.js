import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import CardLarge from '../index';

const totalFavorites = 12;
const totalViews = 11;
const title = 'My cool card';
const alt = `Screenshot for the card: ${title}`;

const onClickMock = jest.fn();
const onClickFavoriteMock = jest.fn();

const buildCard = (props) => {
  return (
    <CardLarge
      id={1}
      href="https://example.com"
      onClick={onClickMock}
      onClickFavorite={onClickFavoriteMock}
      totalFavorites={totalFavorites}
      totalViews={totalViews}
      isFavorited
      image="http://fakeimage.com"
      title={title}
      navigationList={[{ onClick: () => null, item: 'first item' }]}
      {...props}
    />
  );
};

describe('<CardLarge />', () => {
  it('renders and takes basic props', () => {
    const {
      getAllByText,
      getAllByTitle,
      getAllByTestId,
      queryByAltText,
      rerender,
    } = render(buildCard());

    expect(getAllByText(totalFavorites.toString())[0]).toBeInTheDocument();
    expect(getAllByText(totalFavorites.toString())).toHaveLength(2);
    expect(getAllByText(totalViews.toString())[0]).toBeInTheDocument();
    expect(getAllByText(totalViews.toString())).toHaveLength(2);

    expect(getAllByTitle(/Favorited/i)[0]).toBeInTheDocument();
    expect(getAllByTitle(/Favorited/i)).toHaveLength(2);
    expect(queryByAltText(alt)).toBeInTheDocument();

    user.click(getAllByTestId(/card__favorite/i)[1]);
    expect(onClickFavoriteMock.mock.calls.length).toEqual(1);

    rerender(buildCard({ isFavorited: false }));
    expect(getAllByTitle(/Favorite/i)[0]).toBeInTheDocument();
  });
});
