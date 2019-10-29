import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inputStyles } from './StringField';
import { widthType } from '../utils/propTypes';

const TextArea = styled.textarea`
  ${inputStyles}
  height: ${({ height }) => (height ? `${height}rem` : 'auto')};
  padding: 1.6rem;
`;

const textFieldTypes = {
  width: widthType,
  height: PropTypes.number,
};

const defaultProps = {
  width: 50,
  height: 17,
};

const TextField = (props) => {
  return <TextArea {...props} />;
};

TextField.propTypes = textFieldTypes;
TextField.defaultProps = defaultProps;

export default TextField;
