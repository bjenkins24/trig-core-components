import React, {useState} from 'react';
import styled from 'styled-components';
import {Body1} from './Typography.js';
import {HorizontalGroup} from './Groups.js'

const TabsContainer = styled.div`
    width: 100%;
    border-bottom: 0.3rem solid ${({ theme }) => theme.cp};
`;

const Tabs = ({ tabs }) => {
    return (<TabsContainer>
        <HorizontalGroup padding={1.6}>
        {tabs.map(tab => {
            return (
            <Body1 as="button">{tab.label}</Body1>
            )
        })}
            </HorizontalGroup>
    </TabsContainer>);
}

export default Tabs;