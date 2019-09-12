import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalGroup } from '../Groups';
import Icon from '../Icon';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
import Label, { labelTypes } from './Label';

const Container = styled(VerticalGroup)`
  ${getWidth}
  position: relative;
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
  width: 100%;
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

const SelectField = ({
  className,
  width,
  label,
  htmlFor,
  labelProps,
  children,
  ...restProps
}) => {
  if (!label) {
    return <Select {...restProps} />;
  }

  return (
    <Container width={width} className={className}>
      <Label htmlFor={htmlFor} {...labelProps}>
        {label}
      </Label>
      <div
        css={`
          position: relative;
        `}
      >
        <Select
          onMouseDown={(e) => e.preventDefault()}
          id={htmlFor}
          {...restProps}
        >
          {children}
        </Select>
        <ArrowDown />
      </div>
    </Container>
  );
};

SelectField.defaultProps = defaultProps;
SelectField.propTypes = selectFieldTypes;

export default SelectField;
