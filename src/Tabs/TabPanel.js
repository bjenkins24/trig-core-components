import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TabContext } from './Tabs';

const tabPanelTypes = {
  tabPosition: PropTypes.number.isRequired,
};

const TabPanel = ({ tabPosition, ...restProps }) => {
  const { selectedTab } = useContext(TabContext);
  console.log('selectedTab', selectedTab);
  return (
    <div
      {...restProps}
      role="tabpanel"
      hidden={selectedTab !== tabPosition}
      id={`panel-${tabPosition}`}
    />
  );
};

TabPanel.propTypes = tabPanelTypes;

export default TabPanel;
