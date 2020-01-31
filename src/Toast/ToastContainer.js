import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    @-webkit-keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }

        to {
            opacity: 1;
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .fadeInDown {
        -webkit-animation-name: fadeInDown;
        animation-name: fadeInDown;
    }

    @-webkit-keyframes fadeOutUp {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
    }

    @keyframes fadeOutUp {
        from {
            opacity: 1;
        }

        to {
            opacity: 0;
            -webkit-transform: translate3d(0, -100%, 0);
            transform: translate3d(0, -100%, 0);
        }
    }

    .fadeOutUp {
        -webkit-animation-name: fadeOutUp;
        animation-name: fadeOutUp;
    }
`;

const StyledToastContainer = styled(ToastContainer)`
  && {
    &.Toastify__toast-container--top-center {
      top: 2rem;
      margin: 0;
      transform: translateX(-50%);
    }
    &.Toastify__toast-container {
      width: auto;
      max-width: 65rem;
    }
  }
  .Toastify {
    &__toast {
      min-height: auto;
      padding: 0;
      border-radius: ${({ theme }) => theme.br};
      background: ${({ theme }) => theme.bs[200]};
    }
  }
`;

const Toast = (props) => {
  return (
    <>
      <GlobalStyle />
      <StyledToastContainer {...props} />
    </>
  );
};

export default Toast;
