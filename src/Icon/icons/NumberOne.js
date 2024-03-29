import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const NumberOne = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.556 0C2.627 0 1.67.33 1 1c-.67.67-1 1.627-1 2.556v24.888C0 29.373.33 30.33 1 31c.67.67 1.627 1 2.556 1h24.888c.929 0 1.886-.33 2.556-1 .67-.67 1-1.627 1-2.556V3.556c0-.929-.33-1.886-1-2.556-.67-.67-1.627-1-2.556-1H3.556zm0 3.556h24.888v24.888H3.556V3.556zm14.388 4.11l-6.722 2.445v2.667l3.89-1.222v12.61h3.221v-16.5h-.389z"
      />
    </IconWrapper>
  );
};

NumberOne.defaultProps = {
  title: 'Number One Icon',
};

NumberOne.propTypes = propTypes;

export default NumberOne;
