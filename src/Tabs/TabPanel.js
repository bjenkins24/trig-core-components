import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TabContext } from './Tabs';

const tabPanelTypes = {
  tabPosition: PropTypes.number,
};

const defaultProps = {
  tabPosition: 0,
};

const TabPanel = ({ tabPosition, ...restProps }) => {
  const { selectedTab } = useContext(TabContext);

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
TabPanel.defaultProps = defaultProps;

export default TabPanel;
