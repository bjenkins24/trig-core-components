import React from 'react';
import PropTypes from 'prop-types';
import { Heading1 } from '../Typography';
import Separator from '../Separator';

const modalHeaderTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};

const ModalHeader = ({ children }) => {
  return (
    <>
      <Heading1>{children}</Heading1>
      <Separator
        css={`
          margin-bottom: 3.2rem;
        `}
      />
    </>
  );
};

ModalHeader.propTypes = modalHeaderTypes;

export default ModalHeader;
