import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Document = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M12 21H8v-1h12v1h-8zM4 3.537C4 3.24 4.235 3 4.525 3h14.7c.011 0 .022.006.03.004a.51.51 0 0 1 .185.046c.057.026.11.062.154.107l5.25 5.37c.044.046.08.1.105.158.008.017.012.033.017.05.016.045.025.091.027.139.001.011.007.021.007.033v22.556a.531.531 0 0 1-.525.537H4.525A.531.531 0 0 1 4 31.463V3.537zM23.208 8.37L19.75 4.833V8.37h3.458zM5.05 4.074v26.852h18.9V9.444h-4.725a.531.531 0 0 1-.525-.537V4.074H5.05zM25.9 27.926h1.05V1.074H8.05v1.074H7V.538C7 .24 7.235 0 7.525 0h19.95c.29 0 .525.24.525.537v27.926a.531.531 0 0 1-.525.537H25.9v-1.074zM8 11h12v1H8v-1zm0-3h4v1H8V8zm0 5h8v1H8v-1zm9 0h3v1h-3v-1zm-9 5h12v1H8v-1zm0 6h12v1H8v-1zm0 3h2v1H8v-1zm3 0h10v1H11v-1z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};

Document.defaultProps = {
  title: 'Document Icon',
};

Document.propTypes = propTypes;

export default Document;
