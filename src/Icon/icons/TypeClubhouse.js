import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeClubhouse = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="MMoiGTFssY"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="iyXdUSsaJF"
          transform="translate(0 4.5)"
          fill="#6515DD"
          fillRule="nonzero"
        >
          <path
            d="M2.322 20.277A2.323 2.323 0 000 22.588a2.323 2.323 0 004.644 0 2.316 2.316 0 00-2.322-2.311z"
            id="Path"
          />
          <path
            d="M30.911.088L16.29 4.735V.144L.522 5.154v13.308l13.6-4.325v4.569L32 13.03l-4.844-4.712L30.91.089zm-16.789 11.77L2.7 15.487v-8.75l11.422-3.629v8.75zm13.834.188l-11.667 3.706V7.013l10.744-3.418-2.466 5.177 3.389 3.274z"
            id="Shape"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

TypeClubhouse.defaultProps = {
  title: 'Clubhouse Icon',
};

TypeClubhouse.propTypes = propTypes;

export default TypeClubhouse;
