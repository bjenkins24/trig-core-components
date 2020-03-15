import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { uniqueId } from 'lodash';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';
import { HorizontalGroup } from '../Groups';
import { Body1 } from '../Typography';
import Icon from '../Icon';

const LabelContainer = styled.label.attrs({
  'data-testid': 'labelContainer',
})`
  display: inline-block;
  cursor: pointer;
  position: relative;
  ${getWidth}
`;

const checkedStyles = css`
  border: 0.1rem solid ${({ theme }) => theme.s};
  background: ${({ theme }) => theme.s};
`;

const uncheckedStyles = css`
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  background: none;
`;

const HiddenInput = styled.input.attrs({
  type: 'checkbox',
})`
  /* Source: https://polished.js.org/docs/#hidevisually */
  border: 0;
  height: 1px;
  margin: -1px;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;

  :checked + div {
    ${checkedStyles}
  }
`;

const StyledCheckbox = styled.div`
  display: flex;
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme.bs[200]};
  border-radius: 0.2rem;
  ${uncheckedStyles}
  &:hover {
    border: 0.1rem solid ${({ theme }) => theme.s};
  }
`;

const StyledIcon = styled(Icon)`
  margin: 0 auto;
  align-self: center;
`;

const checkboxTypes = {
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.func,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  width: widthType,
};

const defaultProps = {
  label: '',
  children: null,
  className: '',
  checked: false,
  onChange: () => null,
  width: null,
};

const Checkbox = ({
  label,
  children,
  className,
  checked,
  onChange,
  width,
  ...restProps
}) => {
  const [forId] = useState(() => uniqueId('checkbox-'));
  const inputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <HorizontalGroup className={className} padding={width ? 0 : 0.8}>
      {label && (
        <LabelContainer width={width} htmlFor={forId}>
          <Body1 color="ps.200">{label}</Body1>
        </LabelContainer>
      )}
      <HiddenInput
        ref={inputRef}
        id={forId}
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(!isChecked);
          onChange(e);
        }}
        {...restProps}
      />
      <StyledCheckbox
        data-testid="checkbox-icon"
        onClick={() => {
          inputRef.current.click();
        }}
      >
        {isChecked && <StyledIcon type="check" size={1.2} />}
      </StyledCheckbox>
    </HorizontalGroup>
  );
};

Checkbox.propTypes = checkboxTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
