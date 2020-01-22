import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getWidth } from 'utils';
import { VerticalGroup } from '../Groups';
import ErrorMessage from './ErrorMessage';
import Label from './Label';
import { inputStyles } from './StringField';
import { widthType } from '../utils/propTypes';

const Container = styled(VerticalGroup)`
  ${getWidth}
`;

const TextArea = styled.textarea`
  ${inputStyles}
  height: ${({ height }) => `${height}rem`};
  padding: 1.6rem;
  resize: none;
`;

const LabelContainer = styled.span`
  display: block;
  margin-bottom: 0.6rem;
  ${({ error, theme }) => error && `color: ${theme.e};`}
`;

const StyledErrorMessage = styled(ErrorMessage)`
  /* I'm not sure why I have to do this */
  margin-top: -0.4rem;
`;

export const textFieldTypes = {
  width: widthType,
  height: PropTypes.number,
  label: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
};

export const defaultProps = {
  width: 50,
  height: 17,
  label: '',
  className: '',
  error: '',
};

const TextField = ({ label, className, width, error, ...restProps }) => {
  if (!label) {
    return (
      <Container width={width} className={className}>
        <TextArea
          data-testid="textfield__textarea"
          type="text"
          error={error}
          className={className}
          {...restProps}
        />
        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      </Container>
    );
  }

  return (
    <Container width={width} className={className}>
      <Label>
        <LabelContainer error={error}>{label}</LabelContainer>
        <TextArea
          data-testid="textfield__textarea"
          error={error}
          type="text"
          {...restProps}
        />
      </Label>
      {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
    </Container>
  );
};

TextField.propTypes = textFieldTypes;
TextField.defaultProps = defaultProps;

export default TextField;
