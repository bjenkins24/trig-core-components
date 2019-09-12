import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { VerticalGroup } from '../Groups';
import Icon from '../Icon';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
import Label, { labelTypes } from './Label';

const Container = styled(VerticalGroup)`
  ${getWidth}
  position: relative;
`;

const getSelectWidth = ({ width, fullWidth }) => {
  if (fullWidth) {
    return css`
      width: 100%;
    `;
  }
  return css`
    width: ${width}rem;
  `;
};

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.select`
  appearance: none;
  font-size: 1.6rem;
  background: none;
  padding-left: 1.6rem;
  border-radius: ${({ theme }) => theme.br};
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  height: 4.5rem;
  cursor: pointer;
  ${getSelectWidth};
  outline: 0;
`;

const ArrowDown = styled(Icon).attrs({
  type: 'arrow-down',
  size: 1.6,
})`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
  cursor: pointer;
`;

const selectFieldTypes = {
  className: PropTypes.string,
  labelProps: labelTypes,
  label: PropTypes.string,
  width: widthType,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  className: '',
  labelProps: {},
  width: 20,
  label: '',
  htmlFor: '',
};

// eslint-disable-next-line react/prop-types

const SelectField = ({
  className,
  width,
  label,
  htmlFor,
  labelProps,
  children,
  ...restProps
}) => {
  const SelectWithArrow = () => {
    return (
      <SelectContainer>
        <Select
          width={width}
          onMouseDown={(e) => e.preventDefault()}
          fullWidth={!!label}
          id={htmlFor}
          {...restProps}
        >
          {children}
        </Select>
        <ArrowDown />
      </SelectContainer>
    );
  };

  if (!label) {
    return <SelectWithArrow />;
  }

  return (
    <Container width={width} className={className}>
      <Label htmlFor={htmlFor} {...labelProps}>
        {label}
      </Label>
      <SelectWithArrow />
    </Container>
  );
};

SelectField.defaultProps = defaultProps;
SelectField.propTypes = selectFieldTypes;

export default SelectField;
