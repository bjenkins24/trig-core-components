import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import ListItemContent from '../src/Lists/ListItemContent';
import ListItem from '../src/Lists/ListItem';
import List from '../src/Lists/List';
import Icon, { FileIcon } from '../src/Icon';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';

// eslint-disable-next-line react/prop-types
const StoryListItem = ({ onClick }) => {
  return (
    <ListItem
      href="https://google.com"
      onClick={onClick}
      renderItem={() => <FileIcon type="doc" size={2.4} />}
      renderContent={() => (
        <ListItemContent
          renderItem={() => (
            <Avatar firstName="Brian" lastName="Jenkins" size={4} />
          )}
          primary={text('primary', 'How To Memorize Music 5 Times Faster')}
          secondary={text('secondary', 'Oct 27, 2018 at 5:35pm')}
        />
      )}
      actions={[
        <Icon
          onClick={action('clicked heart')}
          type="heart"
          color="s"
          size={1.6}
        />,
        <Icon
          type="comment"
          color="s"
          size={1.6}
          count={16}
          onClick={action('clicked comment')}
        />,
        <Icon
          type="horizontal-dots"
          color="s"
          size={1.6}
          onClick={action('clicked more')}
        />,
      ]}
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
  ));
