import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TabContext } from './Tabs';

const tabPanelTypes = {
  tabIndex: PropTypes.number.isRequired,
};

const TabPanel = ({ tabIndex, ...restProps }) => {
  const { selectedTab } = useContext(TabContext);
  return (
    <div
      {...restProps}
      role="tabpanel"
      hidden={selectedTab !== tabIndex}
      id={`panel-${tabIndex}`}
    />
  );
};

TabPanel.propTypes = tabPanelTypes;

export default TabPanel;
