import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import CardItem from '../CardItem';

describe('<CardItem />', () => {
  it('renders correctly', () => {
    const content = 'content';
    const title = 'My cool title';
    const date = 'My cool date';
    const { getByText, queryByText, rerender, container } = render(
      <CardItem
        href="https://google.com"
        content={content}
        cardType="doc"
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        title={title}
        dateTimeCreated={date}
        moreProps={{ onClick: () => null }}
        favoriteProps={{ onClick: () => null }}
      />
    );
    expect(getByText(content)).toBeInTheDocument();
    expect(getByText('BJ')).toBeInTheDocument();
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(date)).toBeInTheDocument();

    rerender(
      <CardItem
        cardType="doc"
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        title={title}
        dateTimeCreated={date}
        moreProps={{ onClick: () => null }}
        favoriteProps={{ onClick: () => null }}
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
        dateTimeCreated={date}
        moreProps={{ onClick: () => null }}
        favoriteProps={{ onClick: () => null }}
      />
    );
  });
});
