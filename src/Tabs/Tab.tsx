import React, { useContext } from 'react';

import { css } from 'styled-components';
import {
  ColorProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';
import { Body1Component } from '../Typography';
import { Theme } from '../utils/theme';
import { TabContext } from './Tabs';

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

type TabProps = SpaceProps &
  PositionProps &
  ColorProps &
  TypographyProps &
  ShadowProps & {
    tabIndex?: number;
    dark?: boolean;
    children: string;
  };

const Tab = ({ tabIndex, dark = false, children, ...restProps }: TabProps) => {
  const { selectedTab, setSelectedTab, tabRefs } = useContext(TabContext);
  const isSelected = selectedTab === tabIndex;

  const getColor = () => {
    if (dark && isSelected) {
      return 'pc';
    }
    if (dark && !isSelected) {
      return 'ps.200';
    }
    if (isSelected) {
      return 's';
    }
    return 'p';
  };

  const getActiveColor = ({ theme }: { theme: Theme }) => {
    if (dark) {
      return theme.pc;
    }
    return theme.s;
  };

  if (typeof tabIndex === 'undefined') {
    return false;
  }

  return (
    <Body1Component
      ref={tabRefs[tabIndex]}
      mb={2}
      color={getColor()}
      bg="none"
      css={`
        ${getPadding};
        outline: none;
        cursor: pointer;
        background: none;
        transition: 250ms;
        &:hover {
          color: ${getActiveColor};
        }
        &:focus {
          color: ${getActiveColor};
        }
      `}
      dark={dark}
      id={`tab-${tabIndex}`}
      role="tab"
      onClick={() => setSelectedTab(tabIndex)}
      tabIndex={tabIndex}
      aria-controls={`panel-${tabIndex}`}
      {...restProps}
    >
      {children}
    </Body1Component>
  );
};

export default Tab;
