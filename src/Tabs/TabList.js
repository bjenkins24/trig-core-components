import React from 'react';
import PropTypes from 'prop-types';
import { HorizontalGroup } from 'Groups';

const tabListTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  variant: 'dark',
};

const TabList = ({ variant = 'dark', children, ...restProps }) => {
  return (
    <HorizontalGroup role="tablist" {...restProps}>
      {React.Children.map(children, (child, i) => {
        return React.cloneElement(child, {
          tabPosition: i,
          variant,
        });
      })}
    </HorizontalGroup>
  );
};

TabList.propTypes = tabListTypes;
TabList.defaultProps = defaultProps;

export default TabList;
