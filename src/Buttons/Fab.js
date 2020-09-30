import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rippleEffect from 'Buttons/ripple';
import { getColor, getColorContrast } from '../utils';

const defaultSize = 5.6;

const FabButton = styled.div`
  background: ${getColor('s')};
  box-shadow: ${({ theme }) => theme.sh};
  border-radius: 50%;
  width: ${({ size }) => (size ? `${size}rem` : `${defaultSize}rem`)};
  height: ${({ size }) => (size ? `${size}rem` : `${defaultSize}rem`)};
  display: flex;
  align-items: center;
  color: ${getColorContrast('s')};
  cursor: pointer;
  transition: background 150ms;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.ss[800]};
  }
  & > * {
    margin: 0 auto;
  }
`;

const FabProps = {
  onClick: PropTypes.func,
};

const defaultProps = {
  onClick: () => null,
};

const Fab = ({ onClick, ...restProps }) => {
  return (
    <FabButton
      onClick={(event) => {
        rippleEffect({ event, fromCenter: event.pageX === 0 });
        // Make sure onclick still works
        onClick(event);
      }}
      {...restProps}
    />
  );
};

Fab.propTypes = FabProps;
Fab.defaultProps = defaultProps;

export default Fab;
