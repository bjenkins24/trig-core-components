import React from 'react';
import { ThemeProvider } from 'styled-components';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  select,
  number,
  text,
  boolean,
  date,
} from '@storybook/addon-knobs';
import Card from '../src/Card';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';

storiesOf('Cards', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('Thumbnail', () => (
    <Card
      id={1}
      onClick={action('clicked')}
      onClickFavorite={action('favorited')}
      onClickComment={action('comments')}
      onClickMore={action('more')}
      title={text('title', 'Why AI is Going to Take Your Job')}
      dateTime={date('dateTime', new Date())}
      renderAvatar={() => (
        <Avatar
          size={1.6}
          firstName={text('firstName', 'Brian')}
          lastName={text('lastName', 'Jenkins')}
        />
      )}
      image={text('image', 'https://picsum.photos/300/300')}
      type={select(
        'type',
        { youtube: 'youtube', doc: 'doc', xls: 'xls', ppt: 'ppt', code: 'sh' },
        'youtube'
      )}
      totalFavorites={number('totalFavorites', 10)}
      isFavorited={boolean('isFavorited', false)}
      totalComments={number('totalComments', 45)}
    />
  ));
