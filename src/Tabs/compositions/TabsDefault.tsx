import React, { ReactNode } from 'react';
import { Separator } from '../Separator';
import { SelectedBar } from '../SelectedBar';
import { VariantType } from '../types';
import { Theme } from '../../utils/theme';
import { Tab, TabList, TabPanel, Tabs } from '../index';

interface CompositionProps {
  variant: VariantType;
  tabs: string[];
  tabPanels: ReactNode[];
}

const TabsDefault = ({
  variant = 'dark',
  tabs,
  tabPanels,
}: CompositionProps) => {
  return (
    <Tabs>
      <TabList variant={variant}>
        {tabs.map((tab: string) => {
          return <Tab dark={variant === 'dark'}>{tab}</Tab>;
        })}
      </TabList>
      <Separator variant={variant}>
        <SelectedBar variant={variant} />
      </Separator>
      {tabPanels.map((content: ReactNode) => {
        return (
          <TabPanel
            css={`
              margin-top: ${({ theme }: { theme: Theme }) =>
                `${theme.space[3]}px`};
            `}
          >
            {content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

export default TabsDefault;
