import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TabContext } from './Tabs';

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

TabPanel.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default TabPanel;
