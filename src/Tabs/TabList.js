import React from 'react';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups.js';

const StyledTabList = styled(HorizontalGroup)`
    border-bottom: solid 0.3rem ${({theme}) => theme.cp};
    margin-bottom: 2.4rem;
`;

const TabList = ({children, ...restProps}) => {
    return (
        <StyledTabList role="tablist" {...restProps}>
            {React.Children.map(children, (child, i) => {
                return React.cloneElement(child, {
                  tabIndex: i + 1
                })
             })}
        </StyledTabList>
    );
}

export default TabList;