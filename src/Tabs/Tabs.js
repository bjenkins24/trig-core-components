import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export const TabContext = React.createContext();

const tabsTypes = {
  children: PropTypes.node.isRequired,
};

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabRefs, setTabRefs] = useState([]);
  const tabRefsContainer = useRef([]);

  // Get the right amount of tab refs
  useEffect(() => {
    for (let i = 0; i < 4; i += 1) {
      tabRefsContainer.current = [
        ...tabRefsContainer.current,
        React.createRef(),
      ];
    }
    setTabRefs(tabRefsContainer.current);
  }, []);

  return (
    <TabContext.Provider value={{ selectedTab, setSelectedTab, tabRefs }}>
      {children}
    </TabContext.Provider>
  );
};

Tabs.propTypes = tabsTypes;

export default Tabs;
