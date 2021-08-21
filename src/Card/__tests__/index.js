import React from 'react';
import { render, screen } from 'test/utils';
import user from '@testing-library/user-event';
import Card from '../index';

jest.spyOn(console, 'error').mockImplementation(() => {});

jest.mock('react-truncate', () => {
  return (props) => <div {...props} />;
});

// Make truncate lines return 7 all the time
jest.mock('Card/truncateLines', () => {
  return { truncateLines: () => 7 };
});

const totalFavorites = 12;
const title = 'My cool card';
const alt = `Thumbnail for the card: ${title}`;
const description = `My cool description`;

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
      description={description}
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
    } = render(buildCard({ description: '' }));

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

    rerender(buildCard({ hideType: true, isLoading: true }));
    expect(queryByTitle('link')).not.toBeInTheDocument();
    expect(getByTitle(/syncing card.../i)).toBeInTheDocument();
    expect(queryByTitle(/more options/i)).toBeNull();
  });

  it('renders thumbnail', () => {
    const { getByAltText } = render(buildCard({ image: 'testimage.png' }));
    expect(getByAltText(alt)).toBeInTheDocument();
  });

  it('renders avatar', () => {
    const avatarText = 'avatar-text';
    const { getByText, getByTestId } = render(
      buildCard({ renderAvatar: () => <div>{avatarText}</div> })
    );
    expect(getByText(avatarText)).toBeInTheDocument();
    expect(getByTestId('total_favorites')).toBeInTheDocument();
  });

  it('hides favorite count', () => {
    const { queryByTestId } = render(buildCard({ showTotalFavorites: false }));
    expect(queryByTestId('total_favorites')).toBeNull();
  });

  it('renders description correctly', () => {
    const { rerender } = render(
      buildCard({
        imageWidth: 300,
        imageHeight: 300,
        image: 'https://image.com',
      })
    );
    user.hover(screen.getByTestId('card__clickable-area'));
    expect(screen.getByText(description)).toBeInTheDocument();
    // This is a ref error that doesn't appear when actually rendering? I'm not sure
    // what to do with it
    expect(console.error).toHaveBeenCalledTimes(1);

    rerender(buildCard({ width: 150, maxImageHeight: 120 }));
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
