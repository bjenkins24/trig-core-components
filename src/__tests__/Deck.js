import React from 'react';
import { render } from 'test/utils';
import Collection from 'Collection';
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

const buildCollection = ({ onClick, ...restProps }) => {
  return (
    <Collection
      totalCards={totalCards}
      totalFollowers={totalFollowers}
      user={user}
      title={title}
      description={description}
      href="https://google.com"
      onClick={onClick}
      image="http://exampleimage.png"
      permission="public"
      {...restProps}
    />
  );
};

describe('<Collection />', () => {
  it('renders and takes basic props', () => {
    const mockCallback = jest.fn();
    const { getByText, getAllByText, container, rerender, getByTitle } = render(
      buildCollection({ onClick: mockCallback })
    );

    expect(getByText(`${totalCards}`)).toBeInTheDocument();
    expect(getByText(`${totalFollowers}`)).toBeInTheDocument();
    expect(getByText(`${description}`)).toBeInTheDocument();
    expect(getByText(`${user.position}`)).toBeInTheDocument();
    expect(getByText(`${user.firstName} ${user.lastName}`)).toBeInTheDocument();
    expect(getAllByText(`${title}`)).toBeTruthy();
    expect(getAllByText(`${title}`)).toBeTruthy();
    expect(getByTitle('Public')).toBeInTheDocument();

    expect(container.firstChild).toHaveStyleRule(
      'background',
      expect.stringContaining('url')
    );
    rerender(
      buildCollection({
        image: '',
        onClick: mockCallback,
        permission: 'private',
      })
    );
    expect(getByTitle('Private')).toBeInTheDocument();

    expect(container.firstChild).not.toHaveStyleRule(
      'background',
      expect.stringContaining('url')
    );
    userEvent.click(container.firstChild);
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
