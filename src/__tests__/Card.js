import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Card from 'Card';

jest.mock('react-truncate', () => {
  return (props) => <div {...props} />;
});

const totalFavorites = 12;
const title = 'My cool card';
const alt = `Thumbnail for the card: ${title}`;

const onClickMock = jest.fn();
const onClickFavoriteMock = jest.fn();

const buildCard = (props) => {
  return (
    <Card
      id={1}
      href="https://example.com"
      onClick={onClickMock}
      onClickFavorite={onClickFavoriteMock}
      totalFavorites={totalFavorites}
      type="link"
      isFavorited
      dateTime={new Date()}
      title={title}
      navigationList={[{ onClick: () => null, item: 'first item' }]}
      {...props}
    />
  );
};

describe('<Card />', () => {
  it('renders and takes basic props', () => {
    const {
      getAllByText,
      getByText,
      getByTitle,
      getByTestId,
      queryByAltText,
      rerender,
      queryByTitle,
    } = render(buildCard());

    expect(getByText(totalFavorites.toString())).toBeInTheDocument();
    expect(getAllByText(title)).toBeTruthy();
    expect(getByTitle(/Favorited/i)).toBeInTheDocument();
    expect(getByTestId(/card__avatar-null/i)).toBeInTheDocument();
    expect(getByTitle(/more options/i)).toBeInTheDocument();
    expect(queryByAltText(alt)).toBeNull();

    user.click(getByTestId(/card__clickable-area/i));
    expect(onClickMock.mock.calls.length).toEqual(1);

    user.click(getByTestId(/card__favorite/i));
    expect(onClickFavoriteMock.mock.calls.length).toEqual(1);

    rerender(buildCard({ isFavorited: false }));
    expect(getByTitle(/Favorite/i)).toBeInTheDocument();

    rerender(buildCard({ isLoading: true }));
    expect(getByTitle(/syncing card.../i)).toBeInTheDocument();
    expect(queryByTitle(/more options/i)).toBeNull();
  });

  it('renders thumbnail', () => {
    const { getByAltText } = render(buildCard({ image: 'testimage.png' }));
    expect(getByAltText(alt)).toBeInTheDocument();
  });

  it('renders avatar', () => {
    const avatarText = 'avatar-text';
    const { getByText } = render(
      buildCard({ renderAvatar: () => <div>{avatarText}</div> })
    );
    expect(getByText(avatarText)).toBeInTheDocument();
  });
});
