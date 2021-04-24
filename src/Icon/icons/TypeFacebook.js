import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeFacebook = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="DSBsLWUCxK"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="XhfJPGWJPg" fillRule="nonzero">
          <circle
            id="SNRsmRJUVu"
            fill="#1977F3"
            cx="15.99"
            cy="15.99"
            r="15.99"
          />
          <path
            d="M22.214 20.613l.708-4.623h-4.434v-3c0-1.264.618-2.498 2.606-2.498h2.017V6.557s-1.83-.313-3.58-.313c-3.651 0-6.04 2.213-6.04 6.222v3.524h-4.06v4.623h4.06v11.173a16.332 16.332 0 004.996 0V20.613h3.727z"
            id="Path"
            fill="#FFF"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

TypeFacebook.defaultProps = {
  title: 'Facebook Icon',
};

TypeFacebook.propTypes = propTypes;

export default TypeFacebook;
