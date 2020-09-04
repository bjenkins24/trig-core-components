import React, { ReactNode, useContext } from 'react';
import { TabContext } from './Tabs';
import { Theme } from '../utils/theme';

interface TabPanelProps {
  tabIndex?: number;
  children: ReactNode;
}

const TabPanel = ({ tabIndex, children, ...restProps }: TabPanelProps) => {
  const { selectedTab } = useContext(TabContext);
  return (
    <div
      role="tabpanel"
      hidden={selectedTab !== tabIndex}
      id={`panel-${tabIndex}`}
      {...restProps}
    >
      {children}
    </div>
  );
};

export default TabPanel;
