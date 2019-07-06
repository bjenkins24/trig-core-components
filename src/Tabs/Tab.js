import React, {useContext} from 'react';
import {Body1} from '../Typography.js';
import {TabContext} from './Tabs.js';

const Tab = ({tabIndex, ...restProps}) => {
    const context = useContext(TabContext);

    return (
        <Body1
            as="button"
            id={`tab-${tabIndex}`}
            role="tab"
            aria-controls={`panel-${tabIndex}`}
            onClick={() => context.setSelectedTab(tabIndex)}
            {...restProps}
        />);
}

export default Tab;