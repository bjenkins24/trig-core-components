import React from 'react';
import { ThemeProvider } from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import ListItemContent from '../src/Lists/ListItemContent';
import ListItem from '../src/Lists/ListItem';
import Icon from '../src/Icon';
import Avatar from '../src/Avatar';
import './consoleOverrides';
import themeForProvider from './theme';

storiesOf('Lists', module)
  .addDecorator((story) => (
    <ThemeProvider theme={themeForProvider}>{story()}</ThemeProvider>
  ))
  .add('List Item', () => (
    <div
      css={`
        width: 62rem;
      `}
    >
      <ListItem
        renderItem={() => <Icon type="doc" size={2.4} />}
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
          <Icon type="heart" color="s" size={1.6} />,
          <Icon type="comments" color="s" size={1.6} count={16} />,
          <Icon type="horizontal-dots" color="s" size={1.6} />,
        ]}
      />
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
  .addDecorator(withKnobs);
