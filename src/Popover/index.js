import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

const popoverTypes = {
  renderPopover: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Popover = ({ renderPopover, children }) => {
  return (
    <>
      {React.cloneElement(children, {
        'data-for': 'sup',
        'data-tip': '',
      })}
      <ReactTooltip id="sup">{renderPopover()}</ReactTooltip>
    </>
  );
};

Popover.propTypes = popoverTypes;

export default Popover;
