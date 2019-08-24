import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import CardThumbnail from '../src/Cards/CardThumbnail';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';

storiesOf('Cards', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('Thumbnail', () => (
    <CardThumbnail
      title="Why AI is Going to Take Your Job"
      dateTime={new Date()}
      renderAvatar={() => (
        <Avatar size={1.6} firstName="Brian" lastName="Jenkins" />
      )}
      image="https://picsum.photos/300/300"
      type="doc"
      totalFavorites={10}
      isFavorited
      totalComments={45}
    />
  ))
  .addDecorator(withKnobs);
