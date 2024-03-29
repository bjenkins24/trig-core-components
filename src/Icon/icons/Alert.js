import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Alert = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M15.954 2.006c.906 0 1.775.595 2.379 1.6l13.14 22.289c.566 1.004.642 2.046.188 2.827-.49.782-1.434 1.228-2.605 1.228H2.927c-1.208 0-2.152-.446-2.605-1.228-.49-.781-.415-1.823.189-2.827L13.575 3.606c.567-1.005 1.435-1.6 2.379-1.6zm0 1.563c-.34 0-.717.298-1.02.819L1.87 26.676c-.302.52-.377.967-.189 1.265.151.26.605.447 1.209.447h26.128c.604 0 1.02-.15 1.209-.447.188-.298.113-.744-.19-1.265L16.974 4.388c-.302-.521-.68-.82-1.019-.82zm0 19.423c.772 0 1.397.617 1.397 1.377s-.625 1.377-1.397 1.377a1.387 1.387 0 01-1.397-1.377c0-.76.625-1.377 1.397-1.377zm0-13.656c.453 0 .793.335.793.782v10.344c0 .446-.34.781-.793.781a.769.769 0 01-.793-.781V10.118c0-.447.34-.782.793-.782z"
      />
    </IconWrapper>
  );
};

Alert.defaultProps = {
  title: 'Alert Icon',
};

Alert.propTypes = propTypes;

export default Alert;
