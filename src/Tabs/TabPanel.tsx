import React, { ReactNode, useContext } from 'react';
import { TabContext } from './Tabs';

interface TabPanelProps {
  tabIndex?: number;
  children: ReactNode;
}

const TabPanel = ({ tabIndex, children, ...restProps }: TabPanelProps) => {
  const { selectedTab } = useContext(TabContext);
  return (
    <div
      {...restProps}
      role="tabpanel"
      hidden={selectedTab !== tabIndex}
      id={`panel-${tabIndex}`}
    >
      {children}
    </div>
  );
};

export default TabPanel;
