import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { css } from 'styled-components';
import { Body1 } from '../Typography';
import { TabContext } from './Tabs';

const getColor = ({ theme, isSelected, dark }) => {
  if (dark && isSelected) {
    return theme.cpc;
  }
  if (isSelected) {
    return theme.cs;
  }
  return theme.cp;
};

const getActiveColor = ({ dark, theme }) => {
  if (dark) {
    return theme.cpc;
  }
  return theme.cs;
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

const Tab = ({ tabIndex, dark, ...restProps }) => {
  const { selectedTab, setSelectedTab, tabRefs } = useContext(TabContext);
  const isSelected = selectedTab === tabIndex;

  return (
    <Body1
      ref={tabRefs[tabIndex]}
      css={`
        margin-bottom: 0.8rem;
        ${getPadding};
        color: rgb(${getColor});
        transition: 250ms;
        &:hover {
          color: rgb(${getActiveColor});
        }
        &:focus {
          color: rgb(${getActiveColor});
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

Tab.defaultProps = {
  dark: false,
};

Tab.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  dark: PropTypes.bool,
};

export default Tab;
