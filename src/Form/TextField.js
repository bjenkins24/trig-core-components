import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FieldContainer from './FieldContainer';
import { inputStyles } from './StringField';
import { widthType } from '../utils/propTypes';

const TextArea = styled.textarea`
  ${inputStyles}
  height: ${({ height }) => `${height}rem`};
  padding: 1.6rem;
  resize: none;
  width: 100%;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.default};
`;

export const textFieldTypes = {
  width: widthType,
  height: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export const defaultProps = {
  width: 50,
  height: 17,
  label: '',
  className: '',
  error: '',
};

const TextField = ({ label, className, width, error, ...restProps }) => {
  return (
    <FieldContainer
      label={label}
      className={className}
      width={width}
      error={error}
      id="text-field"
    >
      {({ id }) => {
        return (
          <TextArea
            id={id}
            data-testid="textfield__textarea"
            type="text"
            error={error}
            {...restProps}
          />
        );
      }}
    </FieldContainer>
  );
};

TextField.propTypes = textFieldTypes;
TextField.defaultProps = defaultProps;

export default TextField;
