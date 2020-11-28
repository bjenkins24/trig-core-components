import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';
import Card from '../src/Card/index';
import Avatar from '../src/Avatar';
import Icon from '../src/Icon';
import { HorizontalGroup } from '../src/Groups';
import './consoleOverrides';
import themeForProvider from './theme';

const CreateCard = () => {
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
      imageHeight={240}
      image={text('image', 'https://picsum.photos/251/240')}
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
  .add('Thumbnail', () => <CreateCard />);
