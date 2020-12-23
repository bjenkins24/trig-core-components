import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import Label from './Label';
import { VerticalGroup } from '../Groups';
import ErrorMessage from './ErrorMessage';
import getWidth from '../utils/getWidth';
import { widthType } from '../utils/propTypes';

const Container = styled(VerticalGroup)`
  ${getWidth}
  margin-bottom: auto;
`;

const StyledLabel = styled(Label)`
  display: block;
  margin-bottom: 0.6rem;
  ${({ error, theme }) => error && `color: ${theme.e};`}
`;

const FieldContainerProps = {
  width: widthType,
  className: PropTypes.string,
  labelProps: PropTypes.shape({
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  }),
  label: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.func.isRequired,
};

const defaultProps = {
  id: '',
  label: '',
  className: '',
  labelProps: {},
  error: '',
  width: '100%',
};

const FieldContainer = ({
  children,
  width,
  className,
  labelProps,
  label,
  id,
  error,
}) => {
  const [forId] = useState(() => {
    const prefix =
      id ||
      Math.random()
        .toString(36)
        .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);
    return uniqueId(`${prefix}-`);
  });

  return (
    <Container width={width} className={className}>
      {label && (
        <StyledLabel htmlFor={forId} error={error} {...labelProps}>
          {label}
        </StyledLabel>
      )}
      {children({ id: forId })}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

FieldContainer.propTypes = FieldContainerProps;
FieldContainer.defaultProps = defaultProps;

export default FieldContainer;
