import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import Label, { labelTypes } from './Label';
import { VerticalGroup } from '../Groups';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';

const Container = styled(VerticalGroup)`
  ${getWidth}
`;

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: 0.6rem;
`;

const labelContainerProps = {
  Component: PropTypes.node.isRequired,
  width: widthType.isRequired,
  className: PropTypes.string,
  labelProps: PropTypes.shape(labelTypes),
  label: PropTypes.string,
};

const defaultProps = {
  label: '',
  className: '',
  labelProps: {},
};

const LabelContainer = ({
  Component,
  width,
  className,
  labelProps,
  label,
  ...restProps
}) => {
  const [id] = useState(uniqueId('labelContainer-'));

  return (
    <Container width={width} className={className}>
      <StyledLabel htmlFor={id} {...labelProps}>
        {label}
      </StyledLabel>
      <Component id={id} {...restProps} />
    </Container>
  );
};

LabelContainer.propTypes = labelContainerProps;
LabelContainer.defaultProps = defaultProps;

export default LabelContainer;
