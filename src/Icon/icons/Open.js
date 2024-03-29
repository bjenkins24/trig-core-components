import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Open = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.01 10.798h2.588c.453 0 .809.36.809.819 0 .459-.356.82-.809.82H8.011c-1.326 0-2.394 1.08-2.394 2.424v13.076c0 1.343 1.068 2.424 2.394 2.424h15.978c1.326 0 2.394-1.08 2.394-2.424V14.86c0-1.343-1.068-2.425-2.394-2.425h-2.587a.806.806 0 01-.809-.819c0-.459.356-.82.809-.82h2.587c2.2 0 4.011 1.836 4.011 4.064v13.076C28 30.165 26.189 32 23.99 32H8.01C5.812 32 4 30.165 4 27.937V14.86c0-2.228 1.811-4.063 4.01-4.063zm2.006-3.933c.324.328.841.328 1.132 0l4.043-4.063v14.943c0 .459.356.82.809.82.453 0 .809-.361.809-.82V2.802l4.01 4.063c.162.164.356.23.583.23.226 0 .42-.066.582-.23.323-.327.323-.852 0-1.147L16.582.246c-.323-.328-.84-.328-1.132 0l-5.434 5.472c-.29.328-.29.852 0 1.147z"
      />
    </IconWrapper>
  );
};

Open.defaultProps = {
  title: 'Open Icon',
};

Open.propTypes = propTypes;

export default Open;
