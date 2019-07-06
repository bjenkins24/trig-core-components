import React, {useState} from 'react';

export const TabContext = React.createContext();

const Tabs = ({children, ...restProps}) =>     {
    const [selectedTab, setSelectedTab] = useState(1);
    return (
        <TabContext.Provider value={{ selectedTab, setSelectedTab }}>
            <div {...restProps}>
            {React.Children.map(children, (child, i) => {
                // TabList
                if (i === 0) return child;
                // TabPanel
                return React.cloneElement(child, {
                    tabIndex: i,
                });
            })}
            </div>
        </TabContext.Provider>
    );
};


export default Tabs;