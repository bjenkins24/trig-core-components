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
`;

const ArrowDown = styled(Icon).attrs({
  type: 'arrow-down',
  size: 1.6,
})`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
`;

const selectFieldTypes = {
  className: PropTypes.string,
  labelProps: labelTypes,
  label: PropTypes.string,
  width: widthType,
};

const defaultProps = {
  className: '',
  labelProps: {},
  width: 20,
  label: '',
};

const SelectField = ({ className, width, label, labelProps, ...restProps }) => {
  if (!label) {
    return <Select {...restProps} />;
  }

  return (
    <Container width={width} className={className}>
      <Label {...labelProps}>{label}</Label>
      <div
        css={`
          position: relative;
        `}
      >
        <Select {...restProps} />
        <ArrowDown />
      </div>
    </Container>
  );
};

SelectField.defaultProps = defaultProps;
SelectField.propTypes = selectFieldTypes;

export default SelectField;
