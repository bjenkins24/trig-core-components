import React from 'react';
import { render } from 'test/utils';
import Deck from 'Deck';
import userEvent from '@testing-library/user-event';

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

const buildDeck = ({ onClick, ...restProps }) => {
  return (
    <Deck
      totalCards={totalCards}
      totalFollowers={totalFollowers}
      user={user}
      title={title}
      description={description}
      href="https://google.com"
      onClick={onClick}
      image="http://exampleimage.png"
      {...restProps}
    />
  );
};

describe('<Deck />', () => {
  it('renders and takes basic props', () => {
    const mockCallback = jest.fn();
    const { getByText, getAllByText, container, rerender } = render(
      buildDeck({ onClick: mockCallback })
    );

    expect(getByText(`${totalCards}`)).toBeInTheDocument();
    expect(getByText(`${totalFollowers}`)).toBeInTheDocument();
    expect(getByText(`${description}`)).toBeInTheDocument();
    expect(getByText(`${user.position}`)).toBeInTheDocument();
    expect(getByText(`${user.firstName} ${user.lastName}`)).toBeInTheDocument();
    expect(getAllByText(`${title}`)).toBeTruthy();
    expect(getAllByText(`${title}`)).toBeTruthy();

    expect(container.firstChild).toHaveStyleRule(
      'background',
      expect.stringContaining('url')
    );
    rerender(buildDeck({ image: '', onClick: mockCallback }));

    expect(container.firstChild).not.toHaveStyleRule(
      'background',
      expect.stringContaining('url')
    );
    userEvent.click(container.firstChild);
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
