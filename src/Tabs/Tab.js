import React from 'react';
import {Body1} from '../Typography.js';

const Tab = ({tabIndex, ...restProps}) => {
    return (<Body1 as="button" role="tab" aria-controls={`panel-${tabIndex}`} {...restProps}/>);
}

export default Tab;