import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';
import Icon from '../Icon';

const transitionTimeMS = 150;

const padding = 4;

const GlobalStyle = createGlobalStyle`
.ReactModal {
  &__Body--open, &__Html--open {
    overflow: hidden;
  }
  &__Overlay {
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
  &__Content {
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: 50% !important;
    padding: ${padding}rem !important;
    transform: translateX(-50%);
    max-height: calc(100% - ${padding * 4}rem);
  }
}
`;

const CloseButton = styled(Icon).attrs({ size: 1.6, type: 'close' })`
  position: absolute;
  top: 2.4rem;
  right: 2.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.bcs[200]} !important;
  &:hover {
    color: ${({ theme }) => theme.bc} !important;
  }
`;

const modalTypes = {
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const Modal = ({ children, onRequestClose, isOpen, ...restProps }) => {
  return (
    <>
      <GlobalStyle />
      <ReactModal
        contentLabel="Modal"
        closeTimeoutMS={transitionTimeMS}
        onRequestClose={onRequestClose}
        isOpen={isOpen}
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

export default Modal;
