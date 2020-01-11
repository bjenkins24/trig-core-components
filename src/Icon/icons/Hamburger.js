import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { getColor } from 'utils';

const Container = styled.div`
  display: inline-block;
  cursor: pointer;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const BarStyles = css`
  width: 3.5rem;
  height: 0.3rem;
  background-color: ${getColor('p')};
  transition: 0.2s;
  border-radius: ${({ theme }) => theme.br};
`;

const Bar1 = styled.div`
  ${BarStyles};
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(-45deg) translate(-0.8rem, 0.6rem)' : 'none'};
`;

const Bar2 = styled.div`
  ${BarStyles};
  opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
`;

const Bar3 = styled.div`
  ${BarStyles};
  transform: ${({ isOpen }) =>
    isOpen ? 'rotate(45deg) translate(-0.9rem, -0.8rem)' : 'none'};
`;

const hamburgerTypes = {
  color: PropTypes.string,
  isOpen: PropTypes.bool,
};

const defaultProps = {
  color: 'pc',
  isOpen: false,
};

const Hamburger = ({ color, isOpen, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Bar1 isOpen={isOpen} color={color} />
      <Bar2 data-testid="hamburger__bar2" isOpen={isOpen} color={color} />
      <Bar3 isOpen={isOpen} color={color} />
    </Container>
  );
};

Hamburger.propTypes = hamburgerTypes;
Hamburger.defaultProps = defaultProps;

export default Hamburger;
