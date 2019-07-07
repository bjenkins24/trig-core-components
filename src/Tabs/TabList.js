import React, {useRef, useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups.js';
import {TabContext} from './Tabs.js';
import {useSpring, animated} from 'react-spring';

const separatorHeight = '0.3rem';

const SelectedBar = styled(animated.div)`
    height: ${separatorHeight};
    width: ${({width}) => width / 10}rem;
    background: ${({theme}) => theme.cs};
    margin-bottom: -${separatorHeight};
    position: relative;
`;

const TabList = ({children, ...restProps}) => {
    const {selectedTab, tabRefs} = useContext(TabContext);
    const [selectedWidth, setSelectedWidth] = useState(0);
    const [lastWidth, setLastWidth] = useState(selectedWidth);
    const [selectedPosition, setSelectedPosition] = useState(0);
    const [lastPosition, setLastPosition] = useState(0);

    const animateProps = useSpring({
        left: selectedPosition,
        width: selectedWidth,
        from: { left: lastPosition, width: lastWidth },
        config: { duration: 200 }
    })

    useEffect(() => {
        if (tabRefs[selectedTab]) {
            setLastPosition(selectedPosition);
            setLastWidth(selectedWidth);
            setSelectedWidth(tabRefs[selectedTab].current.offsetWidth);
            const position = tabRefs.reduce((accumulator, tabRef, i) => {
                if (i > selectedTab - 1) return accumulator;
                return accumulator + tabRef.current.offsetWidth
            }, 0);
            setSelectedPosition(position);
        }
    });

    return (
        <div
            role="presentational"
            css={`
                border-bottom: solid ${separatorHeight} ${({theme}) => theme.cp};
                margin-bottom: 2.4rem;
            `}
        >
            <HorizontalGroup
                role="tablist"
                {...restProps}
            >
                {React.Children.map(children, (child, i) => {
                    return React.cloneElement(child, {
                      tabIndex: i
                    })
                 })}
            </HorizontalGroup>
            <SelectedBar width={selectedWidth} style={animateProps} />
        </div>
    );
}

export default TabList;