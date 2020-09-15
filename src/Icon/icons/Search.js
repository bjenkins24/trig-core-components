import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Search = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M24.085 20l7.069 7.07a2.887 2.887 0 11-4.084 4.084L20 24.084A13.606 13.606 0 0024.085 20zM12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9zm0 2v2c-2.757 0-5 2.243-5 5H5c0-3.86 3.14-7 7-7z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </IconWrapper>
  );
};

Search.defaultProps = {
  title: 'Search Icon',
};

Search.propTypes = propTypes;

export default Search;
