import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import get from 'lodash/get';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';
import { MasonryScroller, usePositioner, useResizeObserver } from 'masonic';
import Card from '../src/Card/index';
import Avatar from '../src/Avatar';
import Icon from '../src/Icon';
import { HorizontalGroup } from '../src/Groups';
import './consoleOverrides';
import themeForProvider from './theme';
import { mockCards } from './mockCards';

/* eslint-disable */
const CardBase = ({ data }) => {
  return (
    <Card
      isLoading={!get(data, 'id', false) || !data.lastAttemptedSync}
      key={data.id}
      dateTime={new Date(data.createdAt)}
      isFavorited={data.isFavorited}
      totalFavorites={data.totalFavorites}
      onClickFavorite={() => null}
      description={data.description}
      openInNewTab
      title={data.title}
      href={data.url}
      type={data.cardType}
      image={data.image}
      imageWidth={data.imageWidth}
      imageHeight={data.imageHeight}
      renderAvatar={() => {
        return (
          <Avatar
            size={1.6}
            firstName={data.user.firstName}
            lastName={data.user.lastName}
            email={data.user.email}
          />
        );
      }}
      navigationList={[
        {
          onClick: () => null,
          text: 'hello',
        },
      ]}
    />
  );
};

// this has to be defined outside of the component or the UI flashes
const CardRenderer = ({ data }) => {
  return <CardBase data={data} />;
};

const items = get(mockCards, 'data', []);

const Mason = () => {
  const positioner = usePositioner(
    { width: 780, columnWidth: 251, columnGutter: 6 },
    // This is our dependencies array. When these dependencies
    // change, the positioner cache will be cleared and the
    // masonry component will reset as a result.
    [items.length]
  );

  const resizeObserver = useResizeObserver(positioner);

  return (
    <MasonryScroller
      // Provides the data for our grid items
      items={items}
      itemHeightEstimate={400}
      itemkey={(data) => data.id}
      positioner={positioner}
      height={900}
      resizeObserver={resizeObserver}
      // Pre-renders 5 windows worth of content
      overscanBy={5}
      // This is the grid item component
      render={CardRenderer}
    />
  );
};

const CreateCard = () => {
  const imageHeight = 150;
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <Card
      id={1}
      href={text('href', 'https://trello.com')}
      onClick={action('clicked')}
      onClickFavorite={() => setIsFavorited(!isFavorited)}
      title={text('title', 'Why AI is Going to Take Your Job')}
      dateTime={new Date()}
      description="We’ll take care of customer support for you — faster responses, smaller backlogs, and happier customers. We help growing companies provide great customer support. Support for all all the time"
      renderAvatar={() => (
        <Avatar
          size={1.6}
          firstName={text('firstName', 'Brian')}
          lastName={text('lastName', 'Jenkins')}
        />
      )}
      imageWidth={251}
      imageHeight={imageHeight}
      image={text('image', `https://picsum.photos/251/${imageHeight}`)}
      type={select(
        'type',
        {
          link: 'link',
          googleDoc: 'application/vnd.google-apps.document',
          word: 'application/msword',
        },
        'link'
      )}
      totalFavorites={number('totalFavorites', 10)}
      isFavorited={isFavorited}
      totalComments={number('totalComments', 45)}
      navigationList={[
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="new-window" size={1.6} />
              <span>Open in New Window</span>
            </HorizontalGroup>
          ),
        },
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="edit" size={1.6} />
              <span>Edit Card</span>
            </HorizontalGroup>
          ),
        },
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="lock" size={1.6} />
              <span>Share</span>
            </HorizontalGroup>
          ),
        },
        {
          onClick: () => null,
          item: (
            <HorizontalGroup margin={1.6}>
              <Icon type="trash" size={1.6} />
              <span>Remove From Trig</span>
            </HorizontalGroup>
          ),
        },
      ]}
    />
  );
};

storiesOf('Cards', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('Thumbnail', () => <CreateCard />)
  .add('Masonry Example', () => {
    return <Mason />;
  });
