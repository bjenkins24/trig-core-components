import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HorizontalGroup } from 'Groups';
import { Body3 } from 'Typography';
import Icon from '../Icon';

const Container = styled(HorizontalGroup)`
  height: 2.4rem;
`;

const Content = styled(Body3)`
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.ss[300] : theme.bs[200]};
  border-top-left-radius: 0.2rem;
  border-bottom-left-radius: 0.2rem;
  border-top-right-radius: ${({ onRequestRemove }) =>
    onRequestRemove ? 0 : '0.2rem'};
  border-bottom-right-radius: ${({ onRequestRemove }) =>
    onRequestRemove ? 0 : '0.2rem'};
  height: 100%;
  text-align: center;
  padding: 0 0.8rem;
  line-height: 2.4rem;
  color: ${({ theme, isSelected }) => (isSelected ? theme.bs[200] : theme.p)};
  ${({ onClick, theme }) => {
    if (onClick) {
      return `
      cursor: pointer;
      &:hover {
        background: ${theme.ss[300]};
        color: ${theme.sc};
      }`;
    }
    return ``;
  }}
`;

const Remove = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  cursor: pointer;
  text-align: center;
  height: 100%;
  padding: 0 0.8rem;
  color: ${({ theme }) => theme.p};
  line-height: 2.8rem;
  position: relative;
  transition: all 0.2s;
  &:hover {
    background: ${({ theme }) => theme.ss[300]};
  }
  &:hover svg {
    color: ${({ theme }) => theme.sc};
  }
`;

const IconStyled = styled(Icon)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

const tagTypes = {
  children: PropTypes.node.isRequired,
  onRequestRemove: PropTypes.func,
  iconProps: PropTypes.object,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

const defaultProps = {
  iconProps: {},
  onRequestRemove: null,
  isSelected: false,
  onClick: null,
};

const Tag = ({
  children,
  onRequestRemove,
  iconProps,
  isSelected,
  onClick,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <Content
        isSelected={isSelected}
        onRequestRemove={onRequestRemove}
        weight="bold"
        color="sc"
        onClick={onClick}
      >
        {children}
      </Content>
      {onRequestRemove && (
        <Remove aria-label="Remove" role="button" onClick={onRequestRemove}>
          <IconStyled
            title="Remove Button"
            type="close"
            color="p"
            size={0.8}
            {...iconProps}
          />
        </Remove>
      )}
    </Container>
  );
};

Tag.propTypes = tagTypes;
Tag.defaultProps = defaultProps;

export default Tag;
