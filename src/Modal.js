import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ReactModal from 'react-modal';

const transitionTimeMS = 150;

const GlobalStyle = createGlobalStyle`
.ReactModal {
  &__Body--open, &__Html--open {
    overflow: hidden;
  }
  &__Overlay {
    opacity: 0;
    transition: opacity ${transitionTimeMS}ms ease-in-out;
    &--after-open {
      opacity: 1;
    }
    &--before-close {
      opacity: 0;
    }
  }
}
`;

const Modal = (props) => {
  return (
    <>
      <GlobalStyle />
      <ReactModal
        contentLabel="Modal"
        closeTimeoutMS={transitionTimeMS}
        {...props}
      />
    </>
  );
};

export default Modal;
