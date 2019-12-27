import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LabelContainer from './LabelContainer';
import { inputStyles } from './StringField';
import { widthType } from '../utils/propTypes';

const TextArea = styled.textarea`
  ${inputStyles}
  height: ${({ height }) => `${height}rem`};
  padding: 1.6rem;
  resize: none;
`;

const textFieldTypes = {
  width: widthType,
  height: PropTypes.number,
  label: PropTypes.string,
};

const defaultProps = {
  width: 50,
  height: 17,
  label: '',
};

const TextField = ({ label, ...restProps }) => {
  if (!label) {
    return <TextArea {...restProps} />;
  }

  return (
    <LabelContainer
      Component={(props) => <TextArea {...props} />}
      label={label}
      {...restProps}
    />
  );
};

TextField.propTypes = textFieldTypes;
TextField.defaultProps = defaultProps;

export default TextField;
