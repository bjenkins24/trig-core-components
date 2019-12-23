import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading3, Heading4 } from '../Typography';
import { getColor } from '../utils';
import Icon from '../Icon';

const Container = styled.div`
  width: 14.8rem;
  border-radius: ${({ theme }) => theme.br};
  background: ${({ theme }) => theme.bs[200]};
  box-shadow: ${({ theme }) => theme.sh};
  border-top: 0.4rem solid ${getColor()};
  padding: 1.6rem;
  cursor: pointer;
  transition: transform 150ms ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

const IconContainer = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  margin: 0 auto 2.4rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  background: ${getColor()};
`;

const StyledIcon = styled(Icon)`
  margin: 0 auto;
`;

const Title = styled(Heading3)`
  text-align: center;
`;

const Description = styled(Heading4)`
  text-align: center;
  font-weight: 400;
  margin-bottom: 0;
`;

const buttonSelectTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired,
};

const ButtonSelect = ({ title, description, iconType, color }) => {
  return (
    <Container color={color}>
      <IconContainer color={color}>
        <StyledIcon color={`${color}c`} type={iconType} size={3.2} />
      </IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};

ButtonSelect.propTypes = buttonSelectTypes;

export default ButtonSelect;
