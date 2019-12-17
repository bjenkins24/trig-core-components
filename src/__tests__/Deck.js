import React from 'react';
import { render } from 'test/utils';
import Deck from 'Deck';

jest.mock('react-truncate', () => {
  return (props) => <div {...props} />;
});

const totalCards = 5;
const totalFollowers = 10;
const description = 'This is my description';
const title = 'This is my title';
const user = {
  firstName: 'Brian',
  lastName: 'Jenkins',
  position: 'CEO',
  email: 'brian@example',
};

const buildDeck = (props) => {
  return (
    <Deck
      totalCards={totalCards}
      totalFollowers={totalFollowers}
      user={user}
      title={title}
      description={description}
      image="http://exampleimage.png"
      {...props}
    />
  );
};

describe('<Deck />', () => {
  it('renders and takes basic props', () => {
    const { getByText, getAllByText, getByRole, rerender } = render(
      buildDeck()
    );

    expect(getByText(`${totalCards}`)).toBeTruthy();
    expect(getByText(`${totalFollowers}`)).toBeTruthy();
    expect(getByText(`${description}`)).toBeTruthy();
    expect(getByText(`${user.position}`)).toBeTruthy();
    expect(getByText(`${user.firstName} ${user.lastName}`)).toBeTruthy();
    expect(getAllByText(`${title}`)).toBeTruthy();

    expect(getByRole('link')).toHaveStyleRule(
      'background',
      expect.stringContaining('url')
    );
    rerender(buildDeck({ image: '' }));

    expect(getByRole('link')).not.toHaveStyleRule(
      'background',
      expect.stringContaining('url')
    );
  });
});
