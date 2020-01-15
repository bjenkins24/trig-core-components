import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Twitter = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M32 6.068c-1.198.531-2.401.932-3.734 1.067 1.333-.802 2.4-2.135 2.932-3.604-1.333.802-2.667 1.334-4.13 1.604C25.734 3.802 24 3 22.135 3 18.531 3 15.6 5.932 15.6 9.531c0 .537 0 1.068.135 1.469-5.468-.266-10.265-2.802-13.468-6.802-.667.937-.933 2.135-.933 3.333 0 2.271 1.198 4.271 2.933 5.469-1.068-.135-2.13-.401-2.933-.802v.135c0 3.198 2.266 5.865 5.198 6.401C6 18.864 5.47 19 4.802 19 4.401 19 4 19 3.6 18.865 4.401 21.53 6.802 23.4 9.734 23.4 7.47 25.135 4.667 26.198 1.6 26.198c-.531 0-1.068 0-1.599-.13A18.681 18.681 0 0010 29c12.135 0 18.667-10 18.667-18.667v-.802C30 8.6 31.067 7.401 32 6.068"
      />
    </IconWrapper>
  );
};

Twitter.defaultProps = {
  title: 'Twitter Icon',
};

Twitter.propTypes = propTypes;

export default Twitter;
