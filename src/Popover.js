import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledPopover } from 'reactstrap';
import { placementType } from './utils/propTypes';

const popoverTypes = {
  placement: placementType,
  children: PropTypes.node.isRequired,
  renderPopover: PropTypes.func.isRequired,
};

const defaultProps = {
  placement: 'bottom',
};

const Popover = ({ placement, children, renderPopover }) => {
  const trigger = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      id: 'myid',
    });
  });

  return (
    <>
      {trigger}
      <UncontrolledPopover trigger="legacy" placement={placement} target="myid">
        {renderPopover()}
      </UncontrolledPopover>
    </>
  );
};

Popover.propTypes = popoverTypes;
Popover.defaultProps = defaultProps;

export default Popover;
