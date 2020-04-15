import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const FullScreen = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M31.035 21.562c.533 0 .965.432.965.965v8.508a.965.965 0 01-.965.965h-8.508a.965.965 0 110-1.93h7.544v-7.543c0-.533.432-.965.964-.965zm-30.07 0c.532 0 .964.432.964.965v7.544h7.544a.965.965 0 010 1.929H.965A.965.965 0 010 31.035v-8.508c0-.533.432-.965.965-.965zM9.473 0a.965.965 0 110 1.93H1.93v7.543a.965.965 0 11-1.93 0V.965C0 .432.432 0 .965 0h8.508zm21.562 0c.533 0 .965.432.965.965v8.508a.965.965 0 11-1.93 0V1.93h-7.543a.965.965 0 110-1.93h8.508z"
      />
    </IconWrapper>
  );
};

FullScreen.defaultProps = {
  title: 'FullScreen Icon',
};

FullScreen.propTypes = propTypes;

export default FullScreen;
