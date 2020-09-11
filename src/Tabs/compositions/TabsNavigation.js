import React from 'react';
import PropTypes from 'prop-types';
import { SelectedBar } from '../SelectedBar';
import { Tab, TabList, TabPanel, Tabs } from '../index';

const tabsNavigationTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
  tabs: PropTypes.arrayOf(PropTypes.node).isRequired,
  tabPanels: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const defaultProps = {
  variant: 'dark',
};

export const TabsNavigation = ({ variant = 'dark', tabs, tabPanels }) => {
  return (
    <Tabs>
      <TabList variant={variant}>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              css={`
                margin-bottom: ${({ theme }) => `${theme.space[2]}px`};
                font-weight: ${({ theme }) => theme.fontWeights.bold};
                padding: ${({ theme }) => `0 ${theme.space[2]}px`};
                color: ${({ theme }) => theme.colors.pc} !important;
                &:focus,
                &:hover {
                  color: ${({ theme }) => theme.colors.s} !important;
                }
              `}
            >
              {tab}
            </Tab>
          );
        })}
      </TabList>
      <SelectedBar variant={variant} />
      {tabPanels.map((content, index) => {
        return (
          <TabPanel
            key={index}
            tabPosition={index}
            css={`
              margin-top: ${({ theme }) => `${theme.space[3]}px`};
            `}
          >
            {content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

TabsNavigation.propTypes = tabsNavigationTypes;
TabsNavigation.defaultProps = defaultProps;
