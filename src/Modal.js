import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';
import Icon from './Icon';

const transitionTimeMS = 150;

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
    padding: 3.2rem !important;
    background: ${({ theme }) => theme.cbl};
    border: 0 !important;
    transform: translateX(-50%);
  }
}
`;

const CloseButton = styled(Icon).attrs({ size: 1.6, type: 'close' })`
  cursor: pointer;
`;

const Modal = ({ children, onRequestClose, ...restProps }) => {
  return (
    <>
      <GlobalStyle />
      <ReactModal
        contentLabel="Modal"
        closeTimeoutMS={transitionTimeMS}
        onRequestClose={onRequestClose}
        {...restProps}
      >
        <CloseButton onClick={onRequestClose} />
        {children}
      </ReactModal>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};

export default Modal;
