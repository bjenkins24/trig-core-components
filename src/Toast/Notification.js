import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups';
import { Body1 } from '../Typography';
import Icon from '../Icon';

const Container = styled.div`
  border-radius: ${({ theme }) => theme.br};
  padding: 1.6rem;
`;

const SuccessIcon = styled(Icon).attrs({ size: 2.4, type: 'check-circle' })`
  color: #21d86f;
`;

const ErrorIcon = styled(Icon).attrs({ size: 2.4, type: 'alert' })`
  color: ${({ theme }) => theme.e};
`;

const Close = styled(Icon)`
  color: ${({ theme }) => theme.ps[200]};
  &:hover {
    color: ${({ theme }) => theme.p};
  }
`;

const notificationTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  variant: PropTypes.oneOf(['success', 'error']),
  onClose: PropTypes.func,
};

const defaultProps = {
  variant: 'success',
  onClose: () => null,
};

const Notification = ({ children, variant, onClose }) => {
  return (
    <Container>
      <HorizontalGroup margin={1.6}>
        {variant === 'error' ? <ErrorIcon /> : <SuccessIcon />}
        <Body1
          color={variant === 'error' ? 'e' : 'p'}
          css={`
            transform: translate(-0.1rem, 0.1rem);
          `}
        >
          {children}
        </Body1>
        <Close forwardedAs="button" type="close" size={1.6} onClick={onClose} />
      </HorizontalGroup>
    </Container>
  );
};

Notification.propTypes = notificationTypes;
Notification.defaultProps = defaultProps;

export default Notification;
