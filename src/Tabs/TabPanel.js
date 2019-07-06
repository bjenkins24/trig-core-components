import React, {useContext} from 'react';
import {TabContext} from './Tabs.js';

const TabPanel = ({ tabIndex, ...restProps }) => {
    const context = useContext(TabContext);
    return <div {...restProps}
        role="tabpanel"
        hidden={context.selectedTab !== tabIndex}
        id={`panel-${tabIndex}`}
    />
}

export default TabPanel;