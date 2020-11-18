import React from 'react';
import { toast, cssTransition } from 'react-toastify';
import Notification from './Notification';

const transition = cssTransition({
  enter: 'fadeInDown',
  exit: 'fadeOutUp',
  duration: 150,
});

const showToast = ({
  message,
  type = 'success',
  position = toast.POSITION.TOP_CENTER,
  timeout = false,
  autoClose = true,
}) => {
  let toastTimeout = 3000;
  if (type === 'error') {
    toastTimeout = 10000;
  }
  if (timeout) {
    toastTimeout = timeout;
  }

  const options = {
    position,
    autoClose: !autoClose ? false : toastTimeout,
    hideProgressBar: true,
    type,
    transition,
    closeButton: false,
  };

  return toast(
    ({ closeToast }) => (
      <Notification variant={type} onClose={closeToast}>
        {message}
      </Notification>
    ),
    options
  );
};

export default showToast;
