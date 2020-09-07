import React, {
  useState,
  useRef,
  useEffect,
  ReactElement,
  Ref,
  SetStateAction,
  Dispatch,
  RefObject,
} from 'react';

interface TabContextTypes {
  selectedTab: number;
  setSelectedTab: Dispatch<SetStateAction<number>>;
  tabRefs: Ref<HTMLElement>[];
}

export const TabContext = React.createContext<TabContextTypes>({
  selectedTab: 0,
  setSelectedTab: () => null,
  tabRefs: [],
});

const Tabs = ({ children, ...restProps }: { children: ReactElement[] }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabRefs, setTabRefs] = useState<RefObject<HTMLElement>[]>([]);
  const totalTabs = useRef<number | null>(null);
  const tabRefsContainer = useRef<RefObject<HTMLElement>[]>([]);

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
      <div {...restProps}>
        {React.Children.map(children, (child, i) => {
          totalTabs.current = i;
          // TabList
          if (i === 0) return child;
          // TabPanel
          return React.cloneElement(child, {
            tabIndex: i - 2,
          });
        })}
      </div>
    </TabContext.Provider>
  );
};

export default Tabs;
