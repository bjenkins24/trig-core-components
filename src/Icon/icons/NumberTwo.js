import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const NumberTwo = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.556 0C2.627 0 1.67.33 1 1c-.67.67-1 1.627-1 2.556v24.888C0 29.373.33 30.33 1 31c.67.67 1.627 1 2.556 1h24.888c.929 0 1.886-.33 2.556-1 .67-.67 1-1.627 1-2.556V3.556c0-.929-.33-1.886-1-2.556-.67-.67-1.627-1-2.556-1H3.556zm0 3.556h24.888v24.888H3.556V3.556zM15 7.666c-3.799.417-4.889 3.834-4.889 5.334H13.5c0-.533.022-2.889 2.333-2.889 1.778 0 2.111 1.622 2.111 2.333 0 2.134-2.644 4.112-7.444 9.445v2.278h11.167v-2.5h-7.111c4.622-4.623 6.61-6.723 6.61-9.39 0-1.955-.888-4.61-5.333-4.61-.277 0-.58-.028-.833 0z"
      />
    </IconWrapper>
  );
};

NumberTwo.defaultProps = {
  title: 'Number Two Icon',
};

NumberTwo.propTypes = propTypes;

export default NumberTwo;
