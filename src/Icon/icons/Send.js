import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Send = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="oyxvtjciuq"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="ypayvxyeem"
          transform="rotate(-1 -384.56 764.326)"
          fill="currentColor"
        >
          <path
            d="M25.45 39.358h-.001a.463.463 0 01-.428-.288l-5.213-12.706L7.1 21.15a.465.465 0 01-.001-.857L38.103 7.463a.464.464 0 01.606.605L25.88 39.072a.463.463 0 01-.43.286zM8.495 20.72l11.845 4.86a.465.465 0 01.252.253l4.86 11.844L37.424 8.748 8.494 20.72z"
            id="rmwfiofxgy"
            transform="rotate(46 22.78 23.393)"
          />
          <path
            d="M22.728 32.82a.462.462 0 01-.328-.791l17.622-17.622a.463.463 0 11.656.656L23.056 32.684a.462.462 0 01-.328.136z"
            id="tumylinyot"
            transform="rotate(46 31.539 23.546)"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

Send.defaultProps = {
  title: 'Send Icon',
};

Send.propTypes = propTypes;

export default Send;
