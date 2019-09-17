import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Manager, Reference, Popper } from 'react-popper';
import PopperElement from './PopperElement';

const popoverTypes = {
  isOpenDefault: PropTypes.bool,
  renderContent: PropTypes.func.isRequired,
  placement: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  isOpenDefault: false,
  placement: 'bottom',
};

const PopoverContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
`;

const Popover = ({ placement, renderContent, children, isOpenDefault }) => {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const triggerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const [wasUpdated, setWasUpdated] = useState(false);

  useEffect(() => {
    if (!isOpen && wasUpdated) {
      setWasUpdated(false);
    }
  });

  const onEscape = (e) => {
    if (!isOpen) return false;
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
    return true;
  };

  const closeOnOutsideClick = (e) => {
    if (!isOpen) return false;
    if (
      contentRef.current.contains(e.target) ||
      arrowRef.current.contains(e.target) ||
      triggerRef.current.contains(e.target)
    ) {
      // inside click
      return false;
    }
    setIsOpen(false);
    return true;
  };

  useEffect(() => {
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  });

  useEffect(() => {
    document.addEventListener('mousedown', closeOnOutsideClick);

    return () => {
      document.removeEventListener('mousedown', closeOnOutsideClick);
    };
  });

  return (
    <Manager>
      <Reference>
        {({ ref }) => {
          return (
            <div ref={triggerRef}>
              {React.Children.map(children, (child) => {
                return React.cloneElement(children, {
                  ref,
                  onClick: () => {
                    setIsOpen(!isOpen);
                    if (typeof child.props.onClick !== 'undefined') {
                      child.props.onClick();
                    }
                  },
                });
              })}
            </div>
          );
        }}
      </Reference>
      <Popper placement={placement}>
        {({ placement: position, ref, style, scheduleUpdate, arrowProps }) => {
          if (!wasUpdated && isOpen) {
            setWasUpdated(true);
            scheduleUpdate();
          }
          return (
            <PopoverContainer
              isOpen={isOpen}
              ref={ref}
              style={style}
              data-placement={position}
            >
              <PopperElement
                contentRef={contentRef}
                arrowRef={arrowRef}
                arrowProps={arrowProps}
                placement={placement}
                scheduleUpdate={scheduleUpdate}
                renderContent={renderContent}
                isOpen={isOpen}
              />
            </PopoverContainer>
          );
        }}
      </Popper>
    </Manager>
  );
};

Popover.propTypes = popoverTypes;
Popover.defaultProps = defaultProps;

export default Popover;
