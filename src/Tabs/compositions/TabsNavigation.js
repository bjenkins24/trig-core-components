import React from 'react';
import PropTypes from 'prop-types';
import { SelectedBar } from '../SelectedBar';
import { Tab, TabList, TabPanel, Tabs } from '../index';

const tabsNavigationTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, onClick: PropTypes.func })
  ).isRequired,
  tabPanels: PropTypes.arrayOf(PropTypes.node),
  defaultTab: PropTypes.number,
};

const defaultProps = {
  defaultTab: 0,
  tabPanels: [],
};

export const TabsNavigation = ({ defaultTab, tabs, tabPanels }) => {
  const variant = 'dark';

  return (
    <Tabs defaultTab={defaultTab}>
      <TabList variant={variant}>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              css={`
                margin-bottom: 15px;
                font-weight: ${({ theme }) => theme.fontWeights.bold};
                padding: ${({ theme }) => `0 ${theme.space[3]}px`};
                color: ${({ theme }) => theme.colors.pc} !important;
                &:focus,
                &:hover {
                  color: ${({ theme }) => theme.colors.s} !important;
                }
              `}
              onClick={tab.onClick}
            >
              {tab.text}
            </Tab>
          );
        })}
      </TabList>
      {defaultTab >= 0 && <SelectedBar variant={variant} />}
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
