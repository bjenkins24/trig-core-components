import React, {useState, useContext, useRef, useEffect} from 'react';

import styled, {css, ThemeContext } from 'styled-components';
import {Body1} from '../Typography.js';
import {TabContext} from './Tabs.js';

const getColor = ({theme, isSelected}) => {
    if (!isSelected) return false;
    return css`
        color: rgb(${theme.cs});
    `;
}
const getPadding = ({tabIndex}) => {
    if (tabIndex === 0) {
        return css`
            padding-right: 1.2rem;
        `;
    }
    return css`
        padding: 0 1.2rem;
    `;
}

const Tab = ({tabIndex, ...restProps}) => {
    const {selectedTab, setSelectedTab, tabRefs} = useContext(TabContext);
    const isSelected = selectedTab === tabIndex;

    return (
        <Body1
            ref={tabRefs[tabIndex]}
            css={`
                margin-bottom: 0.8rem;
                ${getPadding};
                ${getColor};
                transition: 250ms;
                &:hover {
                    color: ${({theme}) => `rgb(${theme.cs})`}
                }
            `}
            as="button"
            id={`tab-${tabIndex}`}
            role="tab"
            aria-controls={`panel-${tabIndex}`}
            onClick={() => setSelectedTab(tabIndex)}
            tabIndex={tabIndex}
            isSelected={isSelected}
            {...restProps}
        />
    );
}

export default Tab;