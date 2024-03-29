import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeExcel = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M31.111 3.556H16.89v24.888H31.11a.886.886 0 0 0 .889-.888V4.444a.886.886 0 0 0-.889-.888z"
          fill="#4CAF50"
        />
        <path
          fill="#FFF"
          d="M23.111 8h6.222v2.667h-6.222zM23.111 16.889h6.222v2.667h-6.222zM23.111 21.333h6.222V24h-6.222zM23.111 12.444h6.222v2.667h-6.222zM16.889 8h4.444v2.667H16.89zM16.889 16.889h4.444v2.667H16.89zM16.889 21.333h4.444V24H16.89zM16.889 12.444h4.444v2.667H16.89z"
        />
        <path fill="#2E7D32" d="M18.667 32L0 28.444V3.556L18.667 0z" />
        <path
          d="M11.67 22.222l-2.142-4.055c-.084-.15-.167-.427-.254-.834h-.03a6.79 6.79 0 0 1-.29.872l-2.152 4.017h-3.34L7.427 16 3.8 9.778h3.41l1.78 3.729c.14.295.261.646.372 1.049h.035c.07-.24.201-.605.392-1.084l1.98-3.694h3.124l-3.732 6.166 3.833 6.275H11.67v.003z"
          fill="#FFF"
        />
      </g>
    </IconWrapper>
  );
};

TypeExcel.defaultProps = {
  title: 'Excel Icon',
};

TypeExcel.propTypes = propTypes;

export default TypeExcel;
