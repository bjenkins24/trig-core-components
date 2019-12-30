import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Bold = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4 32V0h10.412c3.706 0 6.706.711 8.823 2.133 2.118 1.423 3.177 3.734 3.177 6.578 0 1.422-.353 2.845-1.06 3.911-.705 1.245-1.94 1.956-3.352 2.667 1.941.355 3.53 1.244 4.412 2.667a7.838 7.838 0 011.588 4.8c0 3.022-1.059 5.333-3 6.933-2.118 1.6-5.118 2.311-8.647 2.311H4zm6.353-18.667h4.235c1.765 0 3-.355 3.883-1.066 1.058-.534 1.411-1.6 1.411-3.023 0-1.422-.53-2.488-1.411-3.2-.883-.71-2.295-1.066-4.06-1.066h-4.058v8.355zm0 4.445v9.244h6c1.765 0 3-.355 3.882-1.066.883-.712 1.412-1.778 1.412-3.2 0-1.6-.353-2.667-1.235-3.556-.883-.889-2.118-1.244-3.883-1.244h-6.176v-.178z"
      />
    </IconWrapper>
  );
};

Bold.defaultProps = {
  title: 'Bold Icon',
};

Bold.propTypes = propTypes;

export default Bold;
