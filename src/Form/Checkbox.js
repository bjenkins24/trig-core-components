import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { HorizontalGroup } from '../Groups';
import { Body1 } from '../Typography';
import Icon from '../Icon';

const LabelContainer = styled.label.attrs({
  'data-testid': 'labelContainer',
})`
  display: inline-block;
  cursor: pointer;
  position: relative;
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
  margin: 0 auto;
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
};

const defaultProps = {
  label: '',
  children: null,
  className: '',
  checked: false,
  onChange: () => null,
};

const Checkbox = ({
  label,
  children,
  className,
  checked,
  onChange,
  ...restProps
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const CheckboxComponent = () => {
    return (
      <>
        <HiddenInput
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(!isChecked);
            onChange(e);
          }}
          {...restProps}
        />
        <StyledCheckbox>
          {isChecked && <StyledIcon type="check" size={1.2} />}
        </StyledCheckbox>
      </>
    );
  };

  if (children) {
    return (
      <LabelContainer className={className}>
        {children({ renderCheckbox: () => <CheckboxComponent /> })}
      </LabelContainer>
    );
  }

  return (
    <LabelContainer className={className}>
      <HorizontalGroup margin={0.8}>
        <CheckboxComponent />
        {label && <Body1 color="ps.200">{label}</Body1>}
      </HorizontalGroup>
    </LabelContainer>
  );
};

Checkbox.propTypes = checkboxTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
