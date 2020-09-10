import React from 'react';
import PropTypes from 'prop-types';
import { Separator } from '../Separator';
import { SelectedBar } from '../SelectedBar';
import { Tab, TabList, TabPanel, Tabs } from '../index';

const tabsTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabPanels: PropTypes.arrayOf(PropTypes.node).isRequired,
};

const defaultProps = {
  variant: 'dark',
};

export const TabsDefault = ({ variant, tabs, tabPanels }) => {
  return (
    <Tabs>
      <TabList variant={variant}>
        {tabs.map((tab) => {
          return <Tab dark={variant === 'dark'}>{tab}</Tab>;
        })}
      </TabList>
      <Separator variant={variant}>
        <SelectedBar variant={variant} />
      </Separator>
      {tabPanels.map((content, key) => {
        return (
          <TabPanel
            sx={{
              marginTop: 3,
            }}
            tabPosition={key}
          >
            {content}
          </TabPanel>
        );
      })}
    </Tabs>
  );
};

TabsDefault.propTypes = tabsTypes;
TabsDefault.defaultProps = defaultProps;
