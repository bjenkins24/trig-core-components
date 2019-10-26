import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import './consoleOverrides';
import { Tabs, TabList, Tab, TabPanel } from '../src/Tabs';
import theme from './theme';

storiesOf('Tabs', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <Tabs>
      <TabList dark={boolean('Dark', false)}>
        <Tab>All Cards</Tab>
        <Tab>Recently Viewed</Tab>
        <Tab>Most Viewed</Tab>
        <Tab>Favorites</Tab>
      </TabList>
      <TabPanel>All Cards Stuff</TabPanel>
      <TabPanel>Recently Viewed Stuff</TabPanel>
      <TabPanel>Most Viewed Stuff</TabPanel>
      <TabPanel>Favorite Stuff</TabPanel>
    </Tabs>
  ));
