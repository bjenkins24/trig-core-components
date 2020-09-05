import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { uniqueId } from 'lodash';
import { widthType } from 'utils/propTypes';
import { HorizontalGroup } from 'Groups';
import ErrorMessage from './ErrorMessage';
import Label from './Label';

import Icon from '../Icon';

const LabelContainer = styled(Label).attrs({
  'data-testid': 'labelContainer',
})`
  padding-left: ${({ labelPosition }) =>
    labelPosition === 'right' ? '1.6rem' : 0};
`;

const checkedStyles = css`
  border: 0.1rem solid ${({ theme }) => theme.s};
  background: ${({ theme }) => theme.s};
`;

const uncheckedStyles = css`
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  background: none;
`;

const StyledCheckbox = styled.div`
  display: flex;
  align-self: flex-start;
  margin-top: 0.4rem;
  flex-shrink: 0;
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
  &:not(:checked):focus ~ ${StyledCheckbox} {
    border: 0.1rem solid ${({ theme }) => theme.s};
  }
  &:checked:focus ~ ${StyledCheckbox} {
    border: 0.1rem solid ${({ theme }) => theme.ss[800]};
  }
`;

const StyledIcon = styled(Icon)`
  margin: 0 auto;
  align-self: center;
`;

export const checkboxTypes = {
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.func,
  className: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  width: widthType,
  labelPosition: PropTypes.oneOf(['left', 'right']),
  labelProps: PropTypes.object,
  error: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
    PropTypes.bool,
  ]),
};

const defaultProps = {
  label: '',
  labelProps: {},
  children: null,
  className: '',
  checked: false,
  onChange: () => null,
  width: null,
  labelPosition: 'left',
  error: null,
};

const Checkbox = ({
  label,
  labelProps,
  labelPosition,
  children,
  className,
  checked,
  onChange,
  width,
  error,
  ...restProps
}) => {
  const [forId] = useState(() => uniqueId('checkbox-'));
  const inputRef = useRef(null);
  const [isChecked, setIsChecked] = useState(checked);

  const renderLabel = () => {
    return (
      <LabelContainer
        width={width}
        labelPosition={labelPosition}
        color="ps.200"
        {...labelProps}
        htmlFor={forId}
      >
        {label}
      </LabelContainer>
    );
  };

  return (
    <div className={className}>
      <HorizontalGroup padding={labelPosition === 'right' ? 0 : 1.6}>
        {label && labelPosition === 'left' && renderLabel()}
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
        {label && labelPosition === 'right' && renderLabel()}
      </HorizontalGroup>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

Checkbox.propTypes = checkboxTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
