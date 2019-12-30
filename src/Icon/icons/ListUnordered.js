import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const ListUnordered = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 24.4a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm-2.709 2.52c.225.055.36.103.46.147l.001 1.28a5.358 5.358 0 00-.296-.082l-.165-.039v-1.305zM32 25.278v2.66H6.033v-2.66H32zM0 22.923v.816l-.375-.592c.124-.084.249-.159.375-.224zm0-5.266v1.236H-.46v-.786l.459-.45zM2.25 14.3a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm29.75.87v2.66H6.033v-2.66H32zM.001 13.78L0 14.724l-.482-.554c.177-.156.338-.287.483-.391zM2.25 4.1a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM32 5.064v2.66H6.033v-2.66H32zM0 5.369v.654l-.324-.393L0 5.369z"
      />
    </IconWrapper>
  );
};

ListUnordered.defaultProps = {
  title: 'List Unordered Icon',
};

ListUnordered.propTypes = propTypes;

export default ListUnordered;
