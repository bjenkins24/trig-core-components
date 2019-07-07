import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';

export const TabContext = React.createContext();

const Tabs = ({children, ...restProps}) =>     {
    const [selectedTab, setSelectedTab] = useState(0);
    const [tabRefs, setTabRefs] = useState([]);
    const totalTabs = useRef(null);
    const tabRefsContainer = useRef([]);

    // Get the right amount of tab refs
    useEffect(() => {
        for(let i = 0; i < 4; i += 1) {
            tabRefsContainer.current = [...tabRefsContainer.current, React.createRef()];
        }
        setTabRefs(tabRefsContainer.current);
    }, []);

    return (
        <TabContext.Provider value={{ selectedTab, setSelectedTab, tabRefs }}>
            <div {...restProps}>
                {React.Children.map(children, (child, i) => {
                    totalTabs.current = i;
                    // TabList
                    if (i === 0) return child;
                    // TabPanel
                    return React.cloneElement(child, {
                        tabIndex: i-1,
                    });
                })}
            </div>
        </TabContext.Provider>
    );
};


export default Tabs;