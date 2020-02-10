import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import ToastStyles from './ToastStyles';

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
      <ToastStyles />
      <StyledToastContainer {...props} />
    </>
  );
};

export default Toast;
