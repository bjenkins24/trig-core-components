import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading3, Heading4 } from '../Typography';
import { HorizontalGroup, VerticalGroup } from '../Groups';

const Primary = styled(Heading3)`
  margin-bottom: 0;
  padding-top: 0.3rem;
`;

const Secondary = styled(Heading4)`
  font-weight: 400;
  margin-bottom: 0;
`;

const defaultProps = {
  renderItem: () => null,
};

const listItemContentTypes = {
  renderItem: PropTypes.func,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

const ListItemContent = ({ renderItem, primary, secondary, ...restProps }) => {
  return (
    <HorizontalGroup margin={1.6} {...restProps}>
      {renderItem()}
      <VerticalGroup>
        <Primary>{primary}</Primary>
        <Secondary>{secondary}</Secondary>
      </VerticalGroup>
    </HorizontalGroup>
  );
};

ListItemContent.propTypes = listItemContentTypes;
ListItemContent.defaultProps = defaultProps;

export default ListItemContent;
