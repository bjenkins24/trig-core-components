import React, {useContext, useRef, useEffect} from 'react';

import {css } from 'styled-components';
import {Body1} from '../Typography.js';
import {TabContext} from './Tabs.js';

const Tab = ({tabIndex, ...restProps}) => {
    const {selectedTab, setSelectedTab, tabRefs} = useContext(TabContext);
    const isSelected = selectedTab === tabIndex;

    const getColor = ({theme}) => {
        if (!isSelected) return false;
        return css`
            color: ${theme.cs};
        `;
    }
    const getPadding = () => {
        if (tabIndex === 0) {
            return css`
                padding-right: 1.2rem;
            `;
        }
        return css`
            padding: 0 1.2rem;
        `;
    }

    return (
        <Body1
            ref={tabRefs[tabIndex]}
            as="button"
            id={`tab-${tabIndex}`}
            role="tab"
            aria-controls={`panel-${tabIndex}`}
            onClick={() => setSelectedTab(tabIndex)}
            css={`
                margin-bottom: 0.8rem;
                ${getPadding};
                ${getColor};
                &:hover {
                    color: ${({theme}) => theme.cs}
                }
            `}
            {...restProps}
        />
    );
}

export default Tab;