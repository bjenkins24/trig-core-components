import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import { format } from 'utils/dateFns';
import CardItem from '../CardItem';

const navigationList = [{ onClick: () => null, item: <div>Hello</div> }];

describe('<CardItem />', () => {
  it('renders correctly', () => {
    const content = 'content';
    const title = 'My cool title';
    const date = new Date('2020-11-18T04:06:43+0000');
    const { getByText, getByTitle, queryByText, rerender, container } = render(
      <CardItem
        href="https://google.com"
        content={content}
        cardType="doc"
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        title={title}
        dateTime={date}
        moreProps={{ onClick: () => null }}
        favoriteProps={{ onClick: () => null }}
        navigationList={navigationList}
      />
    );
    const moreOptions = getByTitle('More Options');
    expect(moreOptions).toBeInTheDocument();
    user.click(moreOptions);
    expect(getByText('Hello')).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
    expect(getByText('BJ')).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(
      getByText(`${format(date, 'MMM d, yyyy')} at ${format(date, 'h:mm a')}`)
    ).toBeInTheDocument();

    rerender(
      <CardItem
        cardType="doc"
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        title={title}
        dateTime={date}
        moreProps={{ onClick: () => null }}
        favoriteProps={{ onClick: () => null }}
        navigationList={navigationList}
      />
    );

    user.click(container);
    expect(queryByText(content)).not.toBeInTheDocument();

    rerender(
      <CardItem
        content="hello"
        cardType="doc"
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        title={title}
        dateTime={date}
        moreProps={{ onClick: () => null }}
        favoriteProps={{ onClick: () => null }}
        navigationList={navigationList}
      />
    );
  });
});
