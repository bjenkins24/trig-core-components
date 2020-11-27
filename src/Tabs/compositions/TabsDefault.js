import React from 'react';
import PropTypes from 'prop-types';
import { Separator } from '../Separator';
import { SelectedBar } from '../SelectedBar';
import { Tab, TabList, TabPanel, Tabs } from '../index';

const tabsTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
  tabs: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, onClick: PropTypes.func })
  ).isRequired,
  tabPanels: PropTypes.arrayOf(PropTypes.node),
  defaultTab: PropTypes.number,
};

const defaultProps = {
  variant: 'light',
  defaultTab: 0,
  tabPanels: [],
};

export const TabsDefault = ({ variant, defaultTab, tabs, tabPanels }) => {
  return (
    <Tabs defaultTab={defaultTab}>
      <TabList variant={variant}>
        {tabs.map((tab, index) => {
          return (
            <Tab dark={variant === 'dark'} key={index} onClick={tab.onClick}>
              {tab.text}
            </Tab>
          );
        })}
      </TabList>
      <Separator
        variant={variant}
        css={`
          position: relative;
          top: ${({ theme }) => theme.space[2]}px;
          margin-bottom: ${({ theme }) => `${theme.space[4]}px`};
        `}
      >
        <SelectedBar variant={variant} tabs={tabs} />
      </Separator>
      {tabPanels.map((content, key) => {
        return (
          <TabPanel tabPosition={key} key={key}>
            {content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

TabsDefault.propTypes = tabsTypes;
TabsDefault.defaultProps = defaultProps;
