import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ListItem from '../src/Lists/ListItem';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';

storiesOf('Lists', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('List Item', () => (
    <ListItem
      renderItem={() => (
        <Avatar firstName="Brian" lastName="Jenkins" size={4} />
      )}
      title={text('title', 'How To Memorize Music 5 Times Faster')}
      description={text('description', 'Oct 27, 2018 at 5:35pm')}
    />
  ))
  .addDecorator(withKnobs);
