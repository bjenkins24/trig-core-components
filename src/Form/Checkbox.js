import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

const Container = styled.label`
  display: block;
  width: 1.6rem;
  height: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  cursor: pointer;
  border-radius: 0.2rem;
`;

const DefaultCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Checkmark = styled(Icon).attrs({
  type: 'check',
})`
  position: absolute;
  display: none;
`;

const Checkbox = () => {
  return (
    <Container>
      <DefaultCheckbox />
      <Checkmark />
    </Container>
  );
};

export default Checkbox;
