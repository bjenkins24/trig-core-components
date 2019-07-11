import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { css } from 'styled-components';
import { Body1 } from '../Typography';
import { TabContext } from './Tabs';

const getColor = ({ theme, isSelected }) => {
  if (!isSelected) return false;
  return css`
    color: rgb(${theme.cs});
  `;
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

const Tab = ({ tabIndex, ...restProps }) => {
  const { selectedTab, setSelectedTab, tabRefs } = useContext(TabContext);
  const isSelected = selectedTab === tabIndex;

  return (
    <Body1
      ref={tabRefs[tabIndex]}
      css={`
        margin-bottom: 0.8rem;
        ${getPadding};
        ${getColor};
        transition: 250ms;
        &:hover {
          color: ${({ theme }) => `rgb(${theme.cs})`};
        }
      `}
      as="button"
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

Tab.propTypes = {
  tabIndex: PropTypes.number.isRequired,
};

export default Tab;
