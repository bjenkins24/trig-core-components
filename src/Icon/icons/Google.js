import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Google = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="nonzero">
        <path
          fill="#FFC107"
          d="M31.688 12.866H30.4V12.8H16v6.4h9.044c-1.322 3.725-4.866 6.4-9.044 6.4A9.598 9.598 0 016.4 16c0-5.303 4.297-9.6 9.6-9.6a9.54 9.54 0 016.369 2.431l4.525-4.525C24.038 1.644 20.216 0 16 0 7.162 0 0 7.162 0 16c0 8.837 7.162 16 16 16 8.837 0 16-7.163 16-16 0-1.072-.11-2.119-.313-3.134z"
        />
        <path
          fill="#FF3D00"
          d="M1.844 8.553l5.26 3.856C8.524 8.887 11.968 6.4 16 6.4a9.54 9.54 0 016.369 2.431l4.525-4.525C24.038 1.644 20.216 0 16 0 9.853 0 4.525 3.469 1.844 8.553z"
        />
        <path
          fill="#4CAF50"
          d="M16 32c4.131 0 7.887-1.581 10.728-4.153l-4.953-4.19A9.535 9.535 0 0116 25.6c-4.162 0-7.694-2.653-9.025-6.356l-5.219 4.018C4.403 28.444 9.781 32 16 32z"
        />
        <path
          fill="#1976D2"
          d="M31.688 12.866H30.4V12.8H16v6.4h9.044a9.643 9.643 0 01-3.272 4.456h.003l4.953 4.19C26.378 28.164 32 24 32 16c0-1.072-.11-2.119-.313-3.134z"
        />
      </g>
    </IconWrapper>
  );
};

Google.defaultProps = {
  title: 'Google Icon',
};

Google.propTypes = propTypes;

export default Google;
