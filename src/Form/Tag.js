import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups';
import { Body3 } from '../Typography';
import Icon from '../Icon';
import { iconTypes } from '../Icon/IconWrapper';

const Container = styled(HorizontalGroup)`
  height: 2.8rem;
`;

const Content = styled(Body3)`
  background: ${({ theme }) => theme.ss[400]};
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  height: 100%;
  text-align: center;
  padding: 0 0.8rem;
  line-height: 2.8rem;
  cursor: default;
`;

const Remove = styled.div`
  background: ${({ theme }) => theme.ss[300]};
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  cursor: pointer;
  text-align: center;
  height: 100%;
  padding: 0 1rem;
  line-height: 2.8rem;
  position: relative;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.ss[400]};
  }
`;

const IconStyled = styled(Icon)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const tagTypes = {
  children: PropTypes.node.isRequired,
  onRequestRemove: PropTypes.func.isRequired,
  iconProps: PropTypes.shape({ iconTypes }),
};

const defaultProps = {
  iconProps: {},
};

const Tag = ({ children, onRequestRemove, iconProps, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Content weight="bold" color="sc">
        {children}
      </Content>
      <Remove aria-label="Remove" role="button" onClick={onRequestRemove}>
        <IconStyled
          title="Remove Button"
          type="close"
          color="bs.200"
          size={0.8}
          {...iconProps}
        />
      </Remove>
    </Container>
  );
};

Tag.propTypes = tagTypes;
Tag.defaultProps = defaultProps;

export default Tag;
