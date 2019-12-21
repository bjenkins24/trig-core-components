import React from 'react';
import { render } from 'test/utils';
import Card from 'Card';

jest.mock('react-truncate', () => {
  return (props) => <div {...props} />;
});

const totalFavorites = 12;
const totalComments = 10;
const title = 'My cool card';
const alt = `Thumbnail for the card: ${title}`;

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

describe('<Card />', () => {
  it('renders and takes basic props', () => {
    const {
      getAllByText,
      getByText,
      getByTitle,
      getByTestId,
      queryByAltText,
      rerender,
    } = render(buildCard());

    expect(getByText(totalFavorites.toString())).toBeInTheDocument();
    expect(getByText(totalComments.toString())).toBeInTheDocument();
    expect(getAllByText(title)).toBeTruthy();
    expect(getByTitle(/heart filled icon/i)).toBeInTheDocument();
    expect(getByTestId(/card__avatar-null/i)).toBeInTheDocument();
    expect(queryByAltText(alt)).toBeNull();

    rerender(buildCard({ isFavorited: false }));
    expect(getByTitle(/heart icon/i)).toBeInTheDocument();
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
