import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeTypeform = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M15.096.06c4.111-.34 7.064.752 10.241 3.927 3.43 3.428 5.711 7.87 6.326 12.603.683 5.263-.257 9.19-3.154 12.065-2.77 2.75-6.816 3.656-12.22 3.205l-.224-.02c-4.603-.423-7.858-1.932-11.012-5.127C1.684 23.301-.09 19.427.003 15.361c.047-1.99.61-3.687 1.698-5.351.713-1.092 1.437-1.943 2.952-3.504l.505-.518.557-.565C9.305 1.815 11.668.341 15.096.06zm9.997 4.171C21.987 1.128 19.134.073 15.124.404c-3.379.278-5.7 1.754-9.332 5.433l-.263.266C3.76 7.903 2.931 8.822 2.2 9.886l-.106.157-.103.156C.937 11.81.394 13.446.349 15.369c-.092 3.966 1.643 7.752 4.95 11.102 3.146 3.186 6.378 4.656 11.018 5.044l.23.019c5.198.4 9.074-.499 11.719-3.124 2.81-2.79 3.725-6.61 3.054-11.775-.605-4.655-2.85-9.028-6.227-12.404zm-4.301 7.397v1.689h-3.586v9.676H15.42v-9.676h-3.586v-1.689h8.958z"
        fill="#262627"
        fillRule="nonzero"
      />
    </IconWrapper>
  );
};

TypeTypeform.defaultProps = {
  title: 'Typeform Icon',
};

TypeTypeform.propTypes = propTypes;

export default TypeTypeform;