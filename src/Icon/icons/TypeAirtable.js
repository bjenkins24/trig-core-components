import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const TypeAirtable = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g fillRule="nonzero" fill="none">
        <path
          d="M14.286 2.649L2.358 7.743c-.663.284-.656 1.256.011 1.53l11.978 4.902c1.052.431 2.224.431 3.277 0l11.978-4.903c.667-.273.674-1.245.01-1.529L17.685 2.648a4.317 4.317 0 00-3.399 0"
          fill="#FCB400"
        />
        <path
          d="M17.048 16.853V29.1c0 .582.57.982 1.094.767l13.347-5.348a.825.825 0 00.504-.767V11.505c0-.582-.569-.981-1.094-.767l-13.346 5.348a.825.825 0 00-.505.767"
          fill="#18BFFF"
        />
        <path
          d="M13.931 17.485l-3.96 1.974-.403.2-8.361 4.136C.677 24.059 0 23.66 0 23.052V11.556c0-.22.11-.41.256-.552a.912.912 0 01.202-.157.828.828 0 01.727-.058l12.68 5.186c.644.264.695 1.196.066 1.51"
          fill="#F82B60"
        />
        <path
          d="M13.931 17.485l-3.96 1.974-9.715-8.455a.911.911 0 01.202-.157.828.828 0 01.727-.058l12.68 5.186c.644.264.695 1.196.066 1.51"
          fillOpacity=".25"
          fill="#000"
        />
      </g>
    </IconWrapper>
  );
};

TypeAirtable.defaultProps = {
  title: 'Airtable Icon',
};

TypeAirtable.propTypes = propTypes;

export default TypeAirtable;
