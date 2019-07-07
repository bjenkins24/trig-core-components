import React, {useContext} from 'react';
import {css } from 'styled-components';
import {Body1} from '../Typography.js';
import {TabContext} from './Tabs.js';

const Tab = ({tabIndex, ...restProps}) => {
    const context = useContext(TabContext);

    const getColor = ({theme}) => {
        if (context.selectedTab !== tabIndex) return false;
        return css`
            color: ${theme.cs};
        `;
    }

    return (
        <Body1
            as="button"
            id={`tab-${tabIndex}`}
            role="tab"
            aria-controls={`panel-${tabIndex}`}
            onClick={() => context.setSelectedTab(tabIndex)}
            css={`
                padding-right: 1.6rem;
                margin-bottom: 0.8rem;
                ${getColor};
                &:hover {
                    color: ${({theme}) => theme.cs}
                }
            `}
            {...restProps}
        />);
}

export default Tab;