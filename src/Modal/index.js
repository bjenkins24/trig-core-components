import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { device } from '@trig-app/constants';
import ReactModal from 'react-modal';
import { widthType } from 'utils/propTypes';
import Icon from '../Icon';
import { getWidth, getHeight } from '../utils';

const transitionTimeMS = 150;

const padding = 4;

const GlobalStyle = createGlobalStyle`
.ReactModal {
  &__Body--open, &__Html--open {
    overflow: hidden;
  }
  &__Overlay {
    background: rgba(0, 0, 0, 0.4) !important;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity ${transitionTimeMS}ms ease-in-out;
    z-index: 1000;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
}
.${({ contentClassName }) => contentClassName} .ReactModal__Content {
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: 50% !important;
    padding: ${padding}rem !important;
    transform: translateX(-50%);
    height: calc(100vh - 8rem);
    width: calc(100% - 8rem);
    border-radius: 0 !important;
    border: 0 !important;
    @media ${device.tabletPortraitUp} {
      ${getWidth};
      ${getHeight};
      max-height: calc(100% - ${padding * 4}rem);
      border-radius: 0.4rem !important;
    }
  }
`;

const CloseButton = styled(Icon).attrs({ size: 1.6, type: 'close' })`
  position: absolute;
  top: ${({ theme }) => theme.space[3]}px;
  right: ${({ theme }) => theme.space[3]}px;
  cursor: pointer;
  color: ${({ theme }) => theme.bcs[200]} !important;
  &:hover {
    color: ${({ theme }) => theme.bc} !important;
  }
`;

const makeRandomClass = () => {
  const randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 8; i += 1) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

const modalTypes = {
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  width: widthType,
  height: widthType,
  appElement: PropTypes.string,
};

const defaultProps = {
  width: 'auto',
  height: 'auto',
  appElement: '',
};

const Modal = ({
  children,
  onRequestClose,
  isOpen,
  width,
  height,
  appElement,
  ...restProps
}) => {
  const contentClassName = useRef(makeRandomClass());

  if (appElement) {
    ReactModal.setAppElement(appElement);
  }

  return (
    <>
      <GlobalStyle
        width={width}
        height={height}
        contentClassName={contentClassName.current}
      />
      <ReactModal
        contentLabel="Modal"
        closeTimeoutMS={transitionTimeMS}
        onRequestClose={onRequestClose}
        isOpen={isOpen}
        portalClassName={contentClassName.current}
        {...restProps}
      >
        <CloseButton
          role="button"
          aria-label="Close"
          onClick={onRequestClose}
        />
        {children}
      </ReactModal>
    </>
  );
};

Modal.propTypes = modalTypes;
Modal.defaultProps = defaultProps;

export default Modal;
