import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import ListItemContent from '../src/Lists/ListItemContent';
import List from '../src/Lists/List';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';
import CardItem from '../src/Lists/compositions/CardItem';
import Highlight from '../src/Highlight';

// eslint-disable-next-line react/prop-types
const StoryListItem = ({ onClick }) => {
  return (
    <CardItem
      onClick={onClick}
      onClickFavorite={action('clicked heart')}
      avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
      cardType="doc"
      title="How To Memorize Music 5 Times Faster"
      onClickMore={action('Clicked more')}
      dateTimeCreated="Oct 27, 2018 at 5:35pm"
      href="https://google.com"
    />
  );
};

storiesOf('Lists', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('List', () => (
    <List
      css={`
        width: 62rem;
      `}
    >
      <StoryListItem onClick={action('clicked first story')} key={1} />
      <StoryListItem onClick={action('clicked second story')} key={2} />
      <StoryListItem onClick={action('clicked third story')} key={3} />
      <StoryListItem onClick={action('clicked fourth story')} key={4} />
    </List>
  ))
  .add('List Item', () => (
    <div
      css={`
        width: 62rem;
      `}
    >
      <StoryListItem />
    </div>
  ))
  .add('List Item Content', () => (
    <div
      css={`
        width: 62rem;
      `}
    >
      <ListItemContent
        renderItem={() => (
          <Avatar firstName="Brian" lastName="Jenkins" size={4} />
        )}
        primary={text('primary', 'How To Memorize Music 5 Times Faster')}
        secondary={text('secondary', 'Oct 27, 2018 at 5:35pm')}
      />
    </div>
  ))
  .add('Search Results', () => (
    <div
      css={`
        width: 62rem;
      `}
    >
      <CardItem
        onClick={action('clicked!')}
        content={
          <Highlight
            style={{
              background: 'yellow',
              color: 'black',
              display: 'inline-block',
              padding: '0 4px',
            }}
            string="<em>Test</em> today <em>is</em> cool"
          />
        }
        onClickFavorite={action('clicked heart')}
        avatarProps={{ firstName: 'Brian', lastName: 'Jenkins' }}
        cardType="doc"
        title={
          <Highlight
            string="How To Memorize Music 5 <em>Times</em> Faster"
            style={{ color: 'blue' }}
          />
        }
        onClickMore={action('Clicked more')}
        dateTime={new Date('2020-11-18T04:06:43+0000')}
        href="https://google.com"
      />
    </div>
  ));
