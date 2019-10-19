import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Body1Styles } from './Typography';
import { placementType, refType } from './utils/propTypes';

const popoverTypes = {
  preventClickRef: refType,
  placement: placementType,
  children: PropTypes.node.isRequired,
  renderPopover: PropTypes.func.isRequired,
};

const defaultProps = {
  placement: 'bottom',
  preventClickRef: null,
};

const PopoverContainer = styled.div`
  ${Body1Styles}
  border-radius: ${({ theme }) => theme.br};
  background: ${({ theme }) => theme.p};
  box-shadow: ${({ theme }) => theme.sh};
  padding: 1.6rem;
  color: ${({ theme }) => theme.pc};
`;

const Popover = ({ children, renderPopover, preventClickRef }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let id = useRef((Math.random() + 1).toString(36).substring(7)).current;
  id = open ? id : undefined;

  const onClose = () => {
    setAnchorEl(null);
  };

  const shouldPreventClick = (event) => {
    if (!preventClickRef) {
      return false;
    }

    const { current } = preventClickRef;
    if (
      event.target === current ||
      (current !== null && current.contains(event.target))
    ) {
      return true;
    }

    return false;
  };

  const trigger = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      'aria-describedby': id,
      onClick: (event) => {
        if (typeof child.onClick === 'function') {
          child.onClick();
        }

        if (shouldPreventClick(event)) return true;

        return setAnchorEl(anchorEl ? null : event.currentTarget);
      },
    });
  });

  return (
    <>
      {trigger}
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <ClickAwayListener onClickAway={onClose}>
            <Grow {...TransitionProps}>
              <PopoverContainer>
                {renderPopover({ closePopover: onClose })}
              </PopoverContainer>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </>
  );
};

Popover.propTypes = popoverTypes;
Popover.defaultProps = defaultProps;

export default Popover;
