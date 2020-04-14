import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const NewWindow = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M18.073 0c.675 0 1.22.545 1.22 1.22 0 .676-.545 1.221-1.22 1.221H9.484v20.071h20.07v-8.288a1.222 1.222 0 012.442 0v9.509c0 .675-.545 1.22-1.22 1.22h-5.823v5.826c0 .672-.545 1.221-1.22 1.221H1.22C.545 32 0 31.45 0 30.78V8.262c0-.67.545-1.22 1.22-1.22h5.823V1.22C7.043.545 7.588 0 8.263 0zM7.043 9.484H2.44V29.56h20.071v-4.606H8.263c-.675 0-1.22-.545-1.22-1.22V9.484zM30.775 0c.078 0 .155.008.232.02.077.017.155.04.228.07l.106.048c.11.057.207.13.297.22a1.214 1.214 0 01.354.753l.003.004-.003.004.004.052-.001.015.003.043-.002.11v7.046c0 .672-.545 1.221-1.22 1.221-.672 0-1.221-.55-1.221-1.22v-4.22l-9.956 9.96a1.22 1.22 0 01-1.725 0 1.218 1.218 0 010-1.729l9.955-9.956h-4.214c-.676 0-1.221-.545-1.221-1.22 0-.676.545-1.221 1.22-1.221h7.161z"
      />
    </IconWrapper>
  );
};

NewWindow.defaultProps = {
  title: 'Number One Icon',
};

NewWindow.propTypes = propTypes;

export default NewWindow;
