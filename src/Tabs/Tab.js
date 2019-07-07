import React, {useContext} from 'react';
import {css } from 'styled-components';
import {Body1} from '../Typography.js';
import {TabContext} from './Tabs.js';

const Tab = ({tabIndex, ...restProps}) => {
    const context = useContext(TabContext);
    const isSelected = context.selectedTab === tabIndex;

    const getColor = ({theme}) => {
        if (!isSelected) return false;
        return css`
            color: ${theme.cs};
        `;
    }
    const getPadding = () => {
        if (tabIndex === 1) {
            return css`
                padding-right: 1.2rem;
            `;
        }
        return css`
            padding: 0 1.2rem;
        `;
    }

    return (
        <div>
                <Body1
                    as="button"
                    id={`tab-${tabIndex}`}
                    role="tab"
                    aria-controls={`panel-${tabIndex}`}
                    onClick={() => context.setSelectedTab(tabIndex)}
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
                {isSelected && <div
                    css={`
                        height: 0.3rem;
                        background: ${({theme}) => theme.cs};
                        position: relative;
                        bottom: -0.3rem;
                    `}
                />}
        </div>
    );
}

export default Tab;