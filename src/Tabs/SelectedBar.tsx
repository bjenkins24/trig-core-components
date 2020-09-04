import React, { useContext, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { animated, useSpring } from 'react-spring';
import { separatorHeight } from './constants';
import { TabContext } from './Tabs';

interface SelectedBarContainerProps {
  dark: boolean;
  width: number;
}

const SelectedBarContainer = styled(animated.div)<SelectedBarContainerProps>`
  height: ${separatorHeight}px;
  width: ${({ width }) => width / 10}rem;
  background: ${({ theme, dark }) => (dark ? theme.pc : theme.s)};
  position: relative;
`;

interface ReducerActionTypes {
  type:
    | 'setSelectedWidth'
    | 'setLastWidth'
    | 'setSelectedPosition'
    | 'setLastPosition';
  payload: number;
}

const initialState = {
  selectedWidth: 0,
  lastWidth: 0,
  selectedPosition: 0,
  lastPosition: 0,
};

interface StateProps {
  selectedWidth: number;
  lastWidth: number;
  selectedPosition: number;
  lastPosition: number;
}

const reducer = (state: StateProps, action: ReducerActionTypes) => {
  switch (action.type) {
    case 'setSelectedWidth':
      return { ...state, selectedWidth: action.payload };
    case 'setLastWidth':
      return { ...state, lastWidth: action.payload };
    case 'setSelectedPosition':
      return { ...state, selectedPosition: action.payload };
    case 'setLastPosition':
      return { ...state, lastPosition: action.payload };
    /* istanbul ignore next */
    default:
      throw new Error('The action you dispatched was not allowed.');
  }
};

interface SelectedBarProps {
  variant?: 'dark' | 'light';
}

export const SelectedBar = ({ variant = 'dark' }: SelectedBarProps) => {
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
      const position = tabRefs.reduce(
        (accumulator: number, tabRef, i: number) => {
          if (i > selectedTab - 1) return accumulator;
          return accumulator + tabRef.current.offsetWidth;
        },
        0
      );
      dispatch({ type: 'setSelectedPosition', payload: position });
    }
  }, [selectedTab, tabRefs]);

  return (
    <SelectedBarContainer
      dark={variant === 'dark'}
      width={state.selectedWidth}
      style={animateProps}
    />
  );
};
