import React, { useEffect } from 'react';
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
  placement: '',
};

const PopperElement = ({
  contentRef,
  arrowRef,
  arrowProps,
  placement,
  scheduleUpdate,
  renderContent,
  isOpen,
}) => {
  useEffect(() => {
    scheduleUpdate();
  }, [isOpen]);

  if (
    placement.includes('top') ||
    placement.includes('left') ||
    placement.includes('auto')
  ) {
    return (
      <div>
        <div ref={contentRef}>{renderContent()}</div>
        <div ref={arrowRef}>
          <Arrow {...arrowProps} />
        </div>
      </div>
    );
  }

  if (placement.includes('bottom') || placement.includes('right')) {
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
