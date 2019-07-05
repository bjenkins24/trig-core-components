import React from 'react';

const TabPanel = ({ tabIndex, props }) => {
    return <div {...props} role="tabpanel" id={`panel-${tabIndex}`} />
}

export default TabPanel;