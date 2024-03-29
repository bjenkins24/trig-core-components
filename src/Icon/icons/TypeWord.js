import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeWord = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fill="none" fillRule="evenodd">
        <path
          d="M31.111 3.556H16.89v24.888H31.11a.886.886 0 0 0 .889-.888V4.444a.886.886 0 0 0-.889-.888z"
          fill="#2196F3"
        />
        <path
          fill="#FFF"
          d="M16.889 8h12.444v1.778H16.89zM16.889 11.556h12.444v1.777H16.89zM16.889 15.111h12.444v1.778H16.89zM16.889 18.667h12.444v1.777H16.89zM16.889 22.222h12.444V24H16.89z"
        />
        <path fill="#0D47A1" d="M18.667 32L0 28.444V3.556L18.667 0z" />
        <path
          d="M13.483 22.233h-2.417l-1.6-7.99a8.36 8.36 0 0 1-.157-1.4h-.028a10.544 10.544 0 0 1-.173 1.4l-1.646 7.99H4.948L2.406 9.774h2.379l1.364 8.292c.056.361.101.837.129 1.43h.038c.014-.444.087-.933.198-1.461l1.75-8.26h2.33l1.587 8.36c.055.31.107.75.152 1.34h.028c.017-.454.063-.916.142-1.388l1.334-8.313h2.194l-2.548 12.459z"
          fill="#FFF"
        />
      </g>
    </IconWrapper>
  );
};

TypeWord.defaultProps = {
  title: 'Word Icon',
};

TypeWord.propTypes = propTypes;

export default TypeWord;
