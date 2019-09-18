import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { refType } from '../utils/propTypes';

const Arrow = styled.div`
  background: blue;
  width: 5px;
  height: 5px;
  position: absolute;
`;

const popperElementTypes = {
  contentRef: refType.isRequired,
  arrowRef: refType.isRequired,
  isOpen: PropTypes.bool.isRequired,
  // eslint-disable-next-line
  arrowProps: PropTypes.object.isRequired,
  placement: PropTypes.string,
  scheduleUpdate: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};

const defaultProps = {
  placement: 'bottom',
};

const PopperElement = ({
  contentRef,
  arrowRef,
  arrowProps,
  placement,
  scheduleUpdate,
  renderContent,
  isOpen,
  containerId,
}) => {
  const [actualPlacement, setActualPlacement] = useState(placement);
  useEffect(() => {
    console.log('sup');
    scheduleUpdate();
  }, [isOpen, actualPlacement]);

  useEffect(() => {
    // Popper doesn't want to give me the new
    const container = document.getElementById(containerId);
    if (container && container.dataset.placement) {
      setActualPlacement(container.dataset.placement);
    }
  });

  if (actualPlacement.includes('top') || actualPlacement.includes('left')) {
    return (
      <div>
        <div ref={contentRef}>{renderContent()}</div>
        <div ref={arrowRef}>
          <Arrow
            {...arrowProps}
            style={{
              ...arrowProps.style,
              right: placement.includes('left') ? 0 : 'auto',
            }}
          />
        </div>
      </div>
    );
  }

  if (actualPlacement.includes('bottom') || actualPlacement.includes('right')) {
    return (
      <div>
        <div ref={arrowRef}>
          <Arrow {...arrowProps} />
        </div>
        <div ref={contentRef}>{renderContent()}</div>
      </div>
    );
  }
  return false;
};

PopperElement.propTypes = popperElementTypes;
PopperElement.defaultProps = defaultProps;

export default PopperElement;
