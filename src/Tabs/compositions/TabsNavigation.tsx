import React, { ReactNode } from 'react';
import { SelectedBar } from '../SelectedBar';
import { VariantType } from '../types';
import { Theme } from '../../utils/theme';
import { Tab, TabList, TabPanel, Tabs } from '../index';

interface CompositionProps {
  variant: VariantType;
  tabs: string[];
  tabPanels: ReactNode[];
}

const TabsNavigation = ({
  variant = 'dark',
  tabs,
  tabPanels,
}: CompositionProps) => {
  return (
    <Tabs>
      <TabList variant={variant}>
        {tabs.map((tab: string, index: number) => {
          return (
            <Tab
              key={index}
              fontWeight="bold"
              mb={2}
              css={`
                padding: ${({ theme }: { theme: Theme }) =>
                  `0 ${theme.space[2]}px`};
                color: ${({ theme }: { theme: Theme }) =>
                  theme.colors.pc} !important;
                &:focus,
                &:hover {
                  color: ${({ theme }: { theme: Theme }) =>
                    theme.colors.s} !important;
                }
              `}
            >
              {tab}
            </Tab>
          );
        })}
      </TabList>
      <SelectedBar variant={variant} />
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

export default TabsNavigation;
