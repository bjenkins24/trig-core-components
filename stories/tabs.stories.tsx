import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'theme-ui';
import './consoleOverrides';
import { Tabs, TabsNavigation } from '../src/compositions';
import theme from './theme';

storiesOf('Tabs', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tabs
      variant="dark"
      tabs={['All Cards', 'Recently Viewed', 'Most Viewed', 'Favorites']}
      tabPanels={[
        'All Cards Stuff',
        'Recently Viewed Stuff',
        'Most Viewed Stuff',
        'Favorite Stuff',
      ]}
    />
  ))
  .add('navigation', () => (
    <TabsNavigation
      variant="dark"
      tabs={['All Cards', 'Recently Viewed', 'Most Viewed', 'Favorites']}
      tabPanels={[
        <div>All Cards Stuff</div>,
        'Recently Viewed Stuff',
        'Most Viewed Stuff',
        'Favorite Stuff',
      ]}
    />
  ));
