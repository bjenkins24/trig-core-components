import React, { useContext } from 'react';

import { css } from 'styled-components';
import { Body1Component } from '../Typography';
import { Theme } from '../utils/theme';
import { TabContext } from './Tabs';

const getColor = ({
  theme,
  isSelected,
  dark,
}: {
  theme: Theme;
  isSelected: boolean;
  dark: boolean;
}) => {
  if (dark && isSelected) {
    return theme.pc;
  }
  if (dark && !isSelected) {
    return theme.ps[200];
  }
  if (isSelected) {
    return theme.s;
  }
  return theme.p;
};

const getActiveColor = ({ dark, theme }: { dark: boolean; theme: Theme }) => {
  if (dark) {
    return theme.pc;
  }
  return theme.s;
};

const getPadding = ({
  tabIndex,
  theme,
}: {
  tabIndex: number;
  theme: Theme;
}) => {
  if (tabIndex === 0) {
    return css`
      padding-right: ${theme.space[2]}px;
    `;
  }
  return css`
    padding: 0 ${theme.space[2]}px;
  `;
};

interface TabProps {
  tabIndex?: number;
  dark?: boolean;
  children: string;
}

const Tab = ({ tabIndex, dark = false, children, ...restProps }: TabProps) => {
  const { selectedTab, setSelectedTab, tabRefs } = useContext(TabContext);
  const isSelected = selectedTab === tabIndex;

  return (
    <Body1Component
      ref={tabRefs[tabIndex]}
      mb={2}
      css={`
        ${getPadding};
        color: ${getColor};
        background: none;
        transition: 250ms;
        &:hover {
          color: ${getActiveColor};
        }
        &:focus {
          color: ${getActiveColor};
        }
      `}
      as="button"
      dark={dark}
      id={`tab-${tabIndex}`}
      role="tab"
      aria-controls={`panel-${tabIndex}`}
      onClick={() => setSelectedTab(tabIndex)}
      tabIndex={tabIndex}
      isSelected={isSelected}
      {...restProps}
    >
      {children}
    </Body1Component>
  );
};

export default Tab;
