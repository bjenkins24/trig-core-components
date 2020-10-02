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
  size: PropTypes.oneOf(['default', 'large']),
};

const defaultProps = {
  defaultTab: 0,
  tabPanels: [],
  variant: 'dark',
  size: 'default',
};

export const TabsNavigation = ({
  defaultTab,
  tabs,
  tabPanels,
  variant,
  size,
}) => {
  return (
    <Tabs defaultTab={defaultTab}>
      <TabList variant={variant}>
        {tabs.map((tab, index) => {
          return (
            <Tab
              key={index}
              color={variant}
              sizeType={size}
              css={`
                font-weight: ${({ theme }) => theme.fontWeights.bold};
                padding: ${({ theme, sizeType }) =>
                  sizeType === 'default'
                    ? `0 ${theme.space[3]}px`
                    : `0 ${theme.space[4]}px`};
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
        sizeType={size}
        css={`
          opacity: ${defaultTab < 0 ? '0' : '1'};
          top: ${({ theme, sizeType }) =>
            sizeType === 'default' ? '18' : theme.space[4]}px;
        `}
      />
      {tabPanels.map((content, index) => {
        return (
          <TabPanel
            key={index}
            tabPosition={index}
            sizeType={size}
            css={`
              margin-top: ${({ theme, sizeType }) =>
                sizeType === 'default' ? theme.space[3] : theme.space[4]}px;
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
