import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Code = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="currentColor" fillRule="nonzero">
        <path d="M24.185 8.44a1.198 1.198 0 00-1.7.027c-.462.48-.45 1.245.027 1.71l6.49 6.323-6.49 6.323a1.214 1.214 0 00-.027 1.71 1.196 1.196 0 001.7.027l7.382-7.192a1.212 1.212 0 000-1.736L24.185 8.44zM8.584 24.9c.315 0 .628-.123.864-.367.462-.48.45-1.245-.027-1.71L2.931 16.5l6.49-6.323c.477-.465.49-1.23.027-1.71a1.198 1.198 0 00-1.7-.027L.366 15.632a1.213 1.213 0 000 1.736l7.382 7.191c.233.228.535.341.836.341zM18.625 3.09a1.203 1.203 0 00-1.414.948L12.363 28.49a1.209 1.209 0 001.181 1.446c.562 0 1.064-.398 1.178-.973L19.57 4.51a1.209 1.209 0 00-.945-1.422z" />
      </g>
    </IconWrapper>
  );
};

Code.defaultProps = {
  title: 'Code Icon',
};

Code.propTypes = propTypes;

export default Code;
