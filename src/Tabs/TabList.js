import React, { useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { HorizontalGroup } from '../Groups';
import { TabContext } from './Tabs';

const separatorHeight = '0.3rem';

const Separator = styled.div`
  height: ${separatorHeight};
  background: ${({ theme, dark }) => (dark ? theme.ps[200] : theme.p)};
  overflow: hidden;
`;

const SelectedBar = styled(animated.div)`
  height: ${separatorHeight};
  width: ${({ width }) => width / 10}rem;
  background: ${({ theme, dark }) => (dark ? theme.pc : theme.s)};
  position: relative;
`;

const initialState = {
  selectedWidth: 0,
  lastWidth: 0,
  selectedPosition: 0,
  lastPosition: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSelectedWidth':
      return { ...state, selectedWidth: action.payload };
    case 'setLastWidth':
      return { ...state, lastWidth: action.payload };
    case 'setSelectedPosition':
      return { ...state, selectedPosition: action.payload };
    case 'setLastPosition':
      return { ...state, lastPosition: action.payload };
    default:
      throw new Error();
  }
};

const TabList = ({ children, dark, ...restProps }) => {
  const { selectedTab, tabRefs } = useContext(TabContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const animateProps = useSpring({
    left: state.selectedPosition,
    width: state.selectedWidth,
    from: { left: state.lastPosition, width: state.lastWidth },
    config: { tension: 210, friction: 22 },
  });

  useEffect(() => {
    if (tabRefs[selectedTab]) {
      dispatch({ type: 'setLastPosition', payload: state.selectedPosition });
      dispatch({ type: 'setLastWidth', payload: state.selectedWidth });
      dispatch({
        type: 'setSelectedWidth',
        payload: tabRefs[selectedTab].current.offsetWidth,
      });
      const position = tabRefs.reduce((accumulator, tabRef, i) => {
        if (i > selectedTab - 1) return accumulator;
        return accumulator + tabRef.current.offsetWidth;
      }, 0);
      dispatch({ type: 'setSelectedPosition', payload: position });
    }
  }, [selectedTab, tabRefs]);

  return (
    <div
      css={`
        margin-bottom: 2.4rem;
      `}
    >
      <HorizontalGroup role="tablist" {...restProps}>
        {React.Children.map(children, (child, i) => {
          return React.cloneElement(child, {
            tabIndex: i,
            dark,
          });
        })}
      </HorizontalGroup>
      <Separator dark={dark}>
        <SelectedBar
          dark={dark}
          width={state.selectedWidth}
          style={animateProps}
        />
      </Separator>
    </div>
  );
};

TabList.defaultProps = {
  dark: false,
};

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
};

export default TabList;
