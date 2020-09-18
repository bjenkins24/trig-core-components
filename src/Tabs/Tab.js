import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { css } from 'styled-components';
import { Body1Component } from '../Typography';
import { TabContext } from './Tabs';

const getColor = ({ theme, isSelected, dark }) => {
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

const getActiveColor = ({ dark, theme }) => {
  if (dark) {
    return theme.pc;
  }
  return theme.s;
};

const getPadding = ({ tabPosition }) => {
  if (tabPosition === 0) {
    return css`
      padding-right: 1.2rem;
    `;
  }
  return css`
    padding: 0 1.2rem;
  `;
};

const tabTypes = {
  tabPosition: PropTypes.number.isRequired,
  dark: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  dark: false,
  onClick: () => null,
};

const Tab = ({ tabPosition, dark, onClick, ...restProps }) => {
  const { selectedTab, setSelectedTab, tabRefs } = useContext(TabContext);
  const isSelected = selectedTab === tabPosition;

  return (
    <Body1Component
      ref={tabRefs[tabPosition]}
      css={`
        ${getPadding};
        background: none;
        color: ${getColor};
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
      id={`tab-${tabPosition}`}
      role="tab"
      aria-controls={`panel-${tabPosition}`}
      onClick={(e) => {
        onClick(e);
        setSelectedTab(tabPosition);
      }}
      tabPosition={tabPosition}
      isSelected={isSelected}
      {...restProps}
    />
  );
};

Tab.defaultProps = defaultProps;
Tab.propTypes = tabTypes;

export default Tab;
