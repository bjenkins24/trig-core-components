import React from 'react';
import styled from 'styled-components';
import StringField from './StringField';
import { HorizontalGroup } from '../Groups';
import Button from '../Buttons';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';

const Container = styled(HorizontalGroup)`
  ${getWidth}
`;

const StyledStringField = styled(StringField)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
`;

const StyledButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const stringFieldButtonTypes = {
  width: widthType,
};

const defaultProps = {
  width: 50,
};

const StringFieldButton = ({ width, ...restProps }) => {
  return (
    <Container width={width}>
      <StyledStringField width="80%" {...restProps} />
      <StyledButton size="lg">Add</StyledButton>
    </Container>
  );
};

StringFieldButton.propTypes = stringFieldButtonTypes;
StringFieldButton.defaultProps = defaultProps;

export default StringFieldButton;
