import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeGmail = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="lSmsoUSujC"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="iconfinder_google-gmail_7089163"
          transform="translate(0 4)"
          fillRule="nonzero"
        >
          <path
            d="M32 6.248l-3.81 2.095-3.809 3.619V24.38h5.333A2.286 2.286 0 0032 22.095V6.248z"
            id="PiXuHaHdIE"
            fill="#4CAF50"
          />
          <path
            d="M0 6.248L2.754 7.55l4.865 4.412V24.38H2.286A2.286 2.286 0 010 22.095V6.248z"
            id="PiXuHaHdIE"
            fill="#1E88E5"
          />
          <path
            id="PiXuHaHdIE"
            fill="#E53935"
            d="M24.381 2.438L16 8.724 7.619 2.438l-.762 4.42.762 5.104L16 18.248l8.381-6.286.762-5.105z"
          />
          <path
            d="M0 3.275v2.973l7.619 5.714V2.438L5.239.654A3.274 3.274 0 000 3.274z"
            id="PiXuHaHdIE"
            fill="#C62828"
          />
          <path
            d="M32 3.275v2.973l-7.619 5.714V2.438l2.38-1.784A3.274 3.274 0 0132 3.274z"
            id="PiXuHaHdIE"
            fill="#FBC02D"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

TypeGmail.defaultProps = {
  title: 'Gmail Icon',
};

TypeGmail.propTypes = propTypes;

export default TypeGmail;
