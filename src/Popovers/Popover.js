import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Grow from '@material-ui/core/Grow';
import { uniqueId } from 'lodash';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Body1Styles } from '../Typography';
import { placementType, refType } from '../utils/propTypes';

export const popoverPadding = 1.6;

const PopoverContainer = styled.div`
  ${Body1Styles}
  border-radius: ${({ theme }) => theme.br};
  background: ${({ theme }) => theme.p};
  box-shadow: ${({ theme }) => theme.sh};
  padding: ${popoverPadding}rem 0;
  color: ${({ theme }) => theme.pc};
`;

const popoverTypes = {
  preventClickRef: refType,
  placement: placementType,
  children: PropTypes.node.isRequired,
  renderPopover: PropTypes.func.isRequired,
  onRequestOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
};

const defaultProps = {
  placement: 'bottom',
  preventClickRef: null,
  onRequestOpen: () => null,
  onRequestClose: () => null,
};

const Popover = ({
  children,
  renderPopover,
  preventClickRef,
  onRequestOpen,
  onRequestClose,
  placement,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  let id = useRef(uniqueId('popover')).current;
  id = open ? id : undefined;

  const onClose = () => {
    setAnchorEl(null);
    onRequestClose();
  };

  const closeOnEscape = (event) => {
    if (event.keyCode !== 27) return;
    onClose();
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', closeOnEscape, false);
      return () =>
        document.removeEventListener('keydown', closeOnEscape, false);
    }
    return () => {};
  });

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
      role: 'button',
      onClick: (event) => {
        const { onClick } = child.props;
        if (typeof onClick === 'function') {
          onClick(event);
        }

        if (shouldPreventClick(event)) return true;

        onRequestOpen();
        return setAnchorEl(event.currentTarget);
      },
    });
  });

  return (
    <>
      {trigger}
      <Popper
        style={{ zIndex: 1001 }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        placement={placement}
      >
        {({ TransitionProps }) => (
          <ClickAwayListener
            data-testid="popover__clickAwayListener"
            onClickAway={onClose}
          >
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
