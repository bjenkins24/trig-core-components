import React from 'react';
import styled from 'styled-components';

const StyledTabList = styled.div`
    border-bottom: solid 0.3rem ${({theme}) => theme.cp};
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