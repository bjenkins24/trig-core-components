import React, { useState } from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import './consoleOverrides';
import { Tabs, TabList, Tab, TabPanel } from '../src/Tabs';
import theme from './theme';
import { TabsDefault } from '../src/Tabs/compositions/TabsDefault';
import { TabsNavigation } from '../src/Tabs/compositions/TabsNavigation';

const NavigationWithChange = () => {
  const [tab, setTab] = useState('All Cards');
  return (
    <>
      <TabsNavigation
        tabs={[
          { text: tab },
          { text: 'Recently Viewed' },
          { text: 'Recently Edited' },
        ]}
        tabPanels={['EVERYTHING', 'just viewed', 'just edited']}
        variant="light"
      />
      <button
        type="button"
        onClick={() =>
          tab === 'All Cards'
            ? setTab('A long title just for separator')
            : setTab('All Cards')
        }
      >
        Change tab
      </button>
    </>
  );
};

storiesOf('Tabs', module)
  .addDecorator((story) => (
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  ))
  .addDecorator(withKnobs)
  .add('Without select bar', () => (
    <Tabs>
      <TabList dark={boolean('Dark', false)}>
        <Tab>All Cards</Tab>
        <Tab>Recently Viewed</Tab>
        <Tab>Most Viewed</Tab>
        <Tab>Favorites</Tab>
      </TabList>
      <TabPanel tabPosition={0}>All Cards Stuff</TabPanel>
      <TabPanel tabPosition={1}>Recently Viewed Stuff</TabPanel>
      <TabPanel tabPosition={2}>Most Viewed Stuff</TabPanel>
      <TabPanel tabPosition={3}>Favorite Stuff</TabPanel>
    </Tabs>
  ))
  .add('Composition - Default', () => (
    <TabsDefault
      tabs={[
        { text: 'All Cards' },
        { text: 'Recently Viewed' },
        { text: 'Recently Edited' },
      ]}
      tabPanels={['EVERYTHING', 'just viewed', 'just edited']}
    />
  ))
  .add('Composition - Navigation', () => {
    return <NavigationWithChange />;
  });
