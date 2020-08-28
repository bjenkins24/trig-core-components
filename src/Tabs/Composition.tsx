import React, { ReactNode } from 'react';
import { Tab, TabList, TabPanel, Tabs } from './index';

interface CompositionProps {
  variant: 'dark' | 'light';
  tabs: string[];
  tabPanels: ReactNode[];
}

const Composition = ({
  variant = 'dark',
  tabs,
  tabPanels,
}: CompositionProps) => {
  return (
    <Tabs>
      <TabList dark={variant === 'dark'}>
        {tabs.map((tab: string) => {
          return <Tab>{tab}</Tab>;
        })}
      </TabList>
      {tabPanels.map((content: ReactNode) => {
        return <TabPanel>{content}</TabPanel>;
      })}
    </Tabs>
  );
};

export default Composition;
