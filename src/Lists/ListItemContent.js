import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading3Styles, Heading4Styles, Body2Styles } from 'Typography';
import { HorizontalGroup, VerticalGroup } from 'Groups';

const Primary = styled.span`
  ${({ size }) => (size === 'md' ? Heading3Styles : Body2Styles)}
  margin: 0;
  padding-top: 0.3rem;
  color: ${({ variant, theme }) =>
    variant === 'dark' ? theme.colors.pc : 'initial'};
`;

const Secondary = styled.span`
  ${({ size }) => (size === 'md' ? Heading4Styles : Body2Styles)}
  font-weight: 400;
  margin: 0;
  color: ${({ variant, theme }) =>
    variant === 'dark' ? theme.colors.ps[100] : 'initial'};
`;

const defaultProps = {
  renderItem: () => (
    <span
      data-testid="listItemContent__renderItemNull"
      style={{ marginRight: 0 }}
    />
  ),
  size: 'md',
  variant: 'light',
};

const listItemContentTypes = {
  renderItem: PropTypes.func,
  primary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  secondary: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md']),
  variant: PropTypes.oneOf(['light', 'dark']),
};

const ListItemContent = ({
  renderItem,
  primary,
  secondary,
  size,
  variant,
  ...restProps
}) => {
  return (
    <HorizontalGroup margin={1.6} {...restProps}>
      {renderItem()}
      <VerticalGroup>
        <Primary as="h3" variant={variant} size={size}>
          {primary}
        </Primary>
        <Secondary as="h4" variant={variant} size={size}>
          {secondary}
        </Secondary>
      </VerticalGroup>
    </HorizontalGroup>
  );
};

ListItemContent.propTypes = listItemContentTypes;
ListItemContent.defaultProps = defaultProps;

export default ListItemContent;
