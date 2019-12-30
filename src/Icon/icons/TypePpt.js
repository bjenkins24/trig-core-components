import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypePpt = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M31.111 3.556H16.89v24.888H31.11a.888.888 0 0 0 .889-.888V4.444a.888.888 0 0 0-.889-.888z"
          fill="#FF8A65"
        />
        <g fill="#FBE9E7">
          <path d="M16 20.444h12.444v1.778H16zM16 24h12.444v1.778H16zM21.333 8a5.334 5.334 0 1 0 5.334 5.333h-5.334V8z" />
          <path d="M23.111 6.222v5.334h5.333a5.334 5.334 0 0 0-5.333-5.334z" />
        </g>
        <path fill="#E64A19" d="M18.667 32L0 28.444V3.556L18.667 0z" />
        <path
          d="M9.625 9.778H5.333v12.444H8v-4.287h1.38c1.47 0 2.645-.387 3.524-1.159.878-.772 1.32-1.784 1.317-3.033.001-2.643-1.532-3.965-4.596-3.965zm-.475 6.03H8V11.93h1.15c1.459 0 2.188.64 2.188 1.918 0 1.308-.73 1.96-2.188 1.96z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </IconWrapper>
  );
};

TypePpt.defaultProps = {
  title: 'PPT Icon',
};

TypePpt.propTypes = propTypes;

export default TypePpt;
