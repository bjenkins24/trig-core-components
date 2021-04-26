import React from 'react';
import IconWrapper from '../IconWrapper';
import propTypes from '../propTypes';

const Tags = ({ title, ...restProps }) => {
  return (
    <IconWrapper title={title} {...restProps}>
      <g
        id="bfKYIevtMs"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="SfipRvcOnR"
          transform="translate(0 3)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <path
            d="M25.926 9.02c.763 0 1.48-.296 2.022-.836a2.861 2.861 0 000-4.04 2.843 2.843 0 00-2.023-.838 2.84 2.84 0 00-2.021.837 2.863 2.863 0 000 4.04c.54.54 1.259.838 2.022.838zm-1.221-4.077a1.713 1.713 0 011.22-.505 1.727 1.727 0 11-1.22.505z"
            id="Shape"
          />
          <path
            d="M6.824 11.452a3.314 3.314 0 000 4.681l9.133 9.135a3.302 3.302 0 002.341.968 3.3 3.3 0 002.34-.968l9.986-9.985c.773-.773 1.377-2.236 1.376-3.33l-.009-4.779-.001-.036-.2-3.054C31.662 2.127 29.964.43 28.008.303l-3.055-.2-.036-.001-4.78-.009h-.005c-1.093 0-2.553.604-3.325 1.375l-9.983 9.984zm10.784-9.184c.557-.556 1.736-1.043 2.525-1.043h.003l4.762.008 3.037.198c1.387.091 2.635 1.34 2.726 2.727l.199 3.033.008 4.765c.002.788-.486 1.969-1.044 2.526l-9.985 9.985c-.85.85-2.231.85-3.08 0l-9.134-9.134a2.18 2.18 0 010-3.08l9.983-9.985z"
            id="Shape"
          />
          <path
            d="M9.96 25.18c.67.67 1.55 1.004 2.43 1.004.879 0 1.758-.335 2.428-1.004a.567.567 0 00-.8-.801 2.283 2.283 0 01-1.629.671 2.282 2.282 0 01-1.628-.671l-8.958-8.958a2.286 2.286 0 01-.671-1.628c0-.618.238-1.196.671-1.629L11.669 2.3c.586-.586 1.842-1.088 2.657-1.092l1.58.009h.003a.566.566 0 00.003-1.132L14.333.075h-.017c-1.136 0-2.647.623-3.447 1.424l-9.867 9.865A3.41 3.41 0 000 13.793c0 .92.356 1.783 1.002 2.429l8.959 8.958z"
            id="Path"
          />
        </g>
      </g>
    </IconWrapper>
  );
};

Tags.defaultProps = {
  title: 'Tags Icon',
};

Tags.propTypes = propTypes;

export default Tags;