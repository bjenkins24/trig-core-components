import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Body1 } from '../Typography';
import { HorizontalGroup } from '../Groups';
import Icon from '../Icon';
import { posType } from '../utils/propTypes';

const LabelContainer = styled.label`
  display: inline-block;
  cursor: pointer;
  position: relative;

  &:hover .trig-checkbox--unselected {
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

  /* Unselected */
  &:checked ~ div:nth-of-type(1) {
    opacity: 0;
  }

  /* Selected */
  &:checked ~ div:nth-of-type(2) {
    opacity: 1;
  }
`;

const Unselected = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  border-radius: 0.2rem;
  opacity: 1;
  transition: all 0.2s;
`;

const Selected = styled.div`
  background: ${({ theme }) => theme.s};
  display: flex;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  color: ${({ theme }) => theme.bs[200]};
  height: 1.5rem;
  width: 1.5rem;
  border: 0.1rem solid ${({ theme }) => theme.s};
  border-radius: 0.2rem;
  transition: all 0.2s;
`;

const StyledIcon = styled(Icon)`
  margin: 0 auto;
  align-self: center;
  transform: translate(-0.05rem, 0);
`;

const checkboxTypes = {
  label: PropTypes.string,
  labelPos: posType,
};

const defaultProps = {
  label: '',
  labelPos: 'end',
};

const Checkbox = ({ label, labelPos, ...restProps }) => {
  return (
    <LabelContainer>
      <HorizontalGroup margin={0.8}>
        {label && labelPos === 'start' && <Body1 color="ps.200">{label}</Body1>}
        <div>
          <HiddenInput {...restProps} />
          <Unselected className="trig-checkbox--unselected" />
          <Selected>
            <StyledIcon type="check" size={1.2} />
          </Selected>
        </div>
        {label && labelPos === 'end' && <Body1 color="ps.200">{label}</Body1>}
      </HorizontalGroup>
    </LabelContainer>
  );
};

Checkbox.propTypes = checkboxTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
