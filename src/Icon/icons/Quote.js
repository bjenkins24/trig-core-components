import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Quote = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M32 6v10.663l-.088.091C31.792 21.202 28.904 25.2 24.35 28c.783-1.618 1.206-3.342 1.206-5.135 0-1.048-.146-2.071-.421-3.064H17V6h15zM15 6v10.625c-.05 4.501-2.955 8.548-7.568 11.375.782-1.612 1.208-3.332 1.208-5.12 0-1.069-.153-2.115-.443-3.128H0V6h15z"
      />
    </IconWrapper>
  );
};

Quote.defaultProps = {
  title: 'Quote Icon',
};

Quote.propTypes = propTypes;

export default Quote;
