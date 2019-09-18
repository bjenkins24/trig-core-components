import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  const [isOpen, setIsOpen] = useState(isOpenDefault);
  const [wasUpdated, setWasUpdated] = useState(false);

  const randomString = useMemo(() => {
    return Math.random()
      .toString(36)
      .substring(2, 15);
  });

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
      (e.target.id && e.target.id === `popover-trigger-${randomString}`)
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
          return React.Children.map(children, (child) => {
            let childId = '';
            if (typeof child.props.id !== 'undefined') {
              childId = `${child.props.id} `;
            }
            return React.cloneElement(children, {
              ref,
              id: `${childId}popover-trigger-${randomString}`,
              onClick: () => {
                setIsOpen(!isOpen);
                if (typeof child.props.onClick !== 'undefined') {
                  child.props.onClick();
                }
              },
            });
          });
        }}
      </Reference>
      <Popper placement={placement}>
        {({ placement: position, ref, style, scheduleUpdate, arrowProps }) => {
          const containerId = `popover-container-${randomString}`;
          return (
            <PopoverContainer
              id={containerId}
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
                containerId={containerId}
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
