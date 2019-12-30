import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const ThumbnailView = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M7.004 0h-4.16A2.853 2.853 0 0 0 0 2.844v4.16A2.853 2.853 0 0 0 2.844 9.85h4.16A2.853 2.853 0 0 0 9.85 7.004v-4.16A2.853 2.853 0 0 0 7.004 0zm.712 7.004c0 .392-.32.712-.712.712h-4.16a.713.713 0 0 1-.71-.712v-4.16c0-.39.32-.71.71-.71h4.16c.392 0 .712.32.712.71v4.16zM18.062 0h-4.124a2.853 2.853 0 0 0-2.845 2.844v4.16a2.853 2.853 0 0 0 2.845 2.845h4.16a2.853 2.853 0 0 0 2.844-2.845v-4.16C20.907 1.28 19.627 0 18.062 0zm.711 7.004c0 .392-.32.712-.71.712h-4.125a.713.713 0 0 1-.711-.712v-4.16c0-.39.32-.71.71-.71h4.16c.392 0 .712.32.712.71v4.16h-.036zM29.156 0h-4.16a2.853 2.853 0 0 0-2.845 2.844v4.16a2.853 2.853 0 0 0 2.845 2.845h4.16A2.853 2.853 0 0 0 32 7.004v-4.16A2.853 2.853 0 0 0 29.156 0zm.71 7.004c0 .392-.32.712-.71.712h-4.16a.713.713 0 0 1-.712-.712v-4.16c0-.39.32-.71.712-.71h4.16c.39 0 .71.32.71.71v4.16zM7.005 11.058h-4.16A2.853 2.853 0 0 0 0 13.902v4.16a2.853 2.853 0 0 0 2.844 2.845h4.16a2.853 2.853 0 0 0 2.845-2.845v-4.16c0-1.529-1.28-2.844-2.845-2.844zm.712 7.004c0 .391-.32.711-.712.711h-4.16a.713.713 0 0 1-.71-.71v-4.16c0-.392.32-.712.71-.712h4.16c.392 0 .712.32.712.711v4.16zm10.346-7.004h-4.124a2.853 2.853 0 0 0-2.845 2.844v4.16a2.853 2.853 0 0 0 2.845 2.845h4.16a2.853 2.853 0 0 0 2.844-2.845v-4.16c-.035-1.529-1.315-2.844-2.88-2.844zm.711 7.004c0 .391-.32.711-.71.711h-4.125a.713.713 0 0 1-.711-.71v-4.16c0-.392.32-.712.71-.712h4.16c.392 0 .712.32.712.711v4.16h-.036zm10.383-7.004h-4.16a2.853 2.853 0 0 0-2.845 2.844v4.16a2.853 2.853 0 0 0 2.845 2.845h4.16A2.853 2.853 0 0 0 32 18.062v-4.16c0-1.529-1.28-2.844-2.844-2.844zm.71 7.004c0 .391-.32.711-.71.711h-4.16a.713.713 0 0 1-.712-.71v-4.16c0-.392.32-.712.712-.712h4.16c.39 0 .71.32.71.711v4.16zm-22.862 4.09h-4.16A2.853 2.853 0 0 0 0 24.995v4.16A2.853 2.853 0 0 0 2.844 32h4.16a2.853 2.853 0 0 0 2.845-2.844v-4.16a2.853 2.853 0 0 0-2.845-2.845zm.712 7.004c0 .39-.32.71-.712.71h-4.16a.713.713 0 0 1-.71-.71v-4.16c0-.392.32-.712.71-.712h4.16c.392 0 .712.32.712.712v4.16zm10.346-7.005h-4.124a2.853 2.853 0 0 0-2.845 2.845v4.16A2.853 2.853 0 0 0 13.938 32h4.16a2.853 2.853 0 0 0 2.844-2.844v-4.16c-.035-1.565-1.315-2.845-2.88-2.845zm.711 7.005c0 .39-.32.71-.71.71h-4.125a.713.713 0 0 1-.711-.71v-4.16c0-.392.32-.712.71-.712h4.16c.392 0 .712.32.712.712v4.16h-.036zm10.383-7.005h-4.16a2.853 2.853 0 0 0-2.845 2.845v4.16A2.853 2.853 0 0 0 24.996 32h4.16A2.853 2.853 0 0 0 32 29.156v-4.16a2.853 2.853 0 0 0-2.844-2.845zm.71 7.005c0 .39-.32.71-.71.71h-4.16a.713.713 0 0 1-.712-.71v-4.16c0-.392.32-.712.712-.712h4.16c.39 0 .71.32.71.712v4.16z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};

ThumbnailView.defaultProps = {
  title: 'ThumbnailView Icon',
};

ThumbnailView.propTypes = propTypes;

export default ThumbnailView;
