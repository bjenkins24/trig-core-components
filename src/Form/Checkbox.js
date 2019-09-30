import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups';
import { Body1 } from '../Typography';
import Icon from '../Icon';

const LabelContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  position: relative;

  &:hover .trig-checkbox__container {
    border: 0.1rem solid ${({ theme }) => theme.s};
  }
`;

const HiddenInput = styled.input.attrs({
  type: 'checkbox',
})`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  /* Container */
  &:checked + div {
    border: 0.1rem solid ${({ theme }) => theme.s};
    background: ${({ theme }) => theme.s};
  }

  /* Selected */
  &:checked + div > div {
    opacity: 1;
  }
`;

const CheckboxContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  border-radius: 0.2rem;
  transition: all 0.2s;
`;

const Selected = styled.div`
  display: flex;
  cursor: pointer;
  opacity: 0;
  color: ${({ theme }) => theme.bs[200]};
  height: 1.5rem;
  width: 1.5rem;
  transition: all 0.2s;
`;

const StyledIcon = styled(Icon)`
  margin: 0 auto;
  align-self: center;
  transform: translate(-0.05rem, 0);
`;

const checkboxTypes = {
  label: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.func,
};

const defaultProps = {
  label: '',
  children: null,
};

const Checkbox = ({ label, children, ...restProps }) => {
  const CheckboxComponent = () => {
    return (
      <div>
        <HiddenInput {...restProps} />
        <CheckboxContainer className="trig-checkbox__container">
          {/* <Unselected className="trig-checkbox--unselected" /> */}
          <Selected>
            <StyledIcon type="check" size={1.2} />
          </Selected>
        </CheckboxContainer>
      </div>
    );
  };

  if (children) {
    return (
      <LabelContainer>
        {children({ renderCheckbox: () => <CheckboxComponent /> })}
      </LabelContainer>
    );
  }

  return (
    <LabelContainer>
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
