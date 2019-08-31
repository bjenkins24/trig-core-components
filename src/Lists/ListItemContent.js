import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading3, Heading4 } from '../Typography';
import { HorizontalGroup, VerticalGroup } from '../Groups';

const Primary = styled(Heading3)`
  margin-bottom: 0;
`;

const Secondary = styled(Heading4)`
  font-weight: 400;
  margin-bottom: 0;
`;

const ListItemContent = ({ renderItem, primary, secondary }) => {
  return (
    <HorizontalGroup margin={1.6}>
      {renderItem()}
      <VerticalGroup>
        <Primary>{primary}</Primary>
        <Secondary>{secondary}</Secondary>
      </VerticalGroup>
    </HorizontalGroup>
  );
};

ListItemContent.propTypes = {
  renderItem: PropTypes.func.isRequired,
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

export default ListItemContent;
