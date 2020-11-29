import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeQuora = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        d="M17.1 24.607c-1.023-2.081-2.226-4.191-4.568-4.191a3.326 3.326 0 00-1.352.27l-.797-1.649c.968-.861 2.536-1.536 4.505-1.536 3.13 0 4.738 1.56 6.018 3.553.757-1.7 1.117-3.996 1.117-6.846 0-7.107-2.149-10.711-7.172-10.711-4.955 0-7.085 3.65-7.085 10.711 0 7.06 2.14 10.679 7.085 10.679a7.422 7.422 0 002.154-.289l.094.01zm1.225 2.483a12.75 12.75 0 01-3.379.465C8.356 27.56 1.9 22.121 1.9 14.213 1.9 6.235 8.356.8 14.946.8c6.699 0 13.082 5.402 13.082 13.413.033 4.085-1.794 7.95-4.933 10.432.901 1.462 1.92 2.435 3.275 2.435 1.478 0 2.072-1.183 2.176-2.11h1.928c.112 1.235-.487 6.362-5.87 6.362-3.261 0-4.987-1.956-6.28-4.247v.005z"
        fill="#B92B27"
        fillRule="nonzero"
      />
    </IconWrapper>
  );
};

TypeQuora.defaultProps = {
  title: 'Quora Icon',
};

TypeQuora.propTypes = propTypes;

export default TypeQuora;
