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
  variant: PropTypes.oneOf(['dark', 'light']),
};

const defaultProps = {
  defaultTab: 0,
  tabPanels: [],
  variant: 'dark',
};

export const TabsNavigation = ({ defaultTab, tabs, tabPanels, variant }) => {
  return (
    <Tabs defaultTab={defaultTab}>
      <TabList variant={variant}>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              color={variant}
              css={`
                font-weight: ${({ theme }) => theme.fontWeights.bold};
                padding: ${({ theme }) => `0 ${theme.space[3]}px`};
                color: ${({ theme, color }) =>
                  color === 'dark'
                    ? theme.colors.pc
                    : theme.colors.p} !important;
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
      <SelectedBar
        variant={variant}
        data-testid="select-bar"
        css={`
          opacity: ${defaultTab < 0 ? '0' : '1'};
          top: 18px;
        `}
      />
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
