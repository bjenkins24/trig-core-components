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

const getPadding = ({ tabIndex }) => {
  if (tabIndex === 0) {
    return css`
      padding-right: 1.2rem;
    `;
  }
  return css`
    padding: 0 1.2rem;
  `;
};

const tabTypes = {
  tabIndex: PropTypes.number.isRequired,
  dark: PropTypes.bool,
};

const defaultProps = {
  dark: false,
};

const Tab = ({ tabIndex, dark, ...restProps }) => {
  const { selectedTab, setSelectedTab, tabRefs } = useContext(TabContext);
  const isSelected = selectedTab === tabIndex;

  return (
    <Body1Component
      ref={tabRefs[tabIndex]}
      css={`
        margin-bottom: 0.8rem;
        ${getPadding};
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
      id={`tab-${tabIndex}`}
      role="tab"
      aria-controls={`panel-${tabIndex}`}
      onClick={() => setSelectedTab(tabIndex)}
      tabIndex={tabIndex}
      isSelected={isSelected}
      {...restProps}
    />
  );
};

Tab.defaultProps = defaultProps;
Tab.propTypes = tabTypes;

export default Tab;
