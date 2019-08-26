import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading3, Heading4 } from '../Typography';
import { HorizontalGroup, VerticalGroup } from '../Groups';

const Title = styled(Heading3)`
  margin-bottom: 0;
`;

const Description = styled(Heading4)`
  font-weight: 400;
  margin-bottom: 0;
`;

const ListItem = ({ renderItem, title, description }) => {
  return (
    <HorizontalGroup margin={1.6}>
      {renderItem()}
      <VerticalGroup>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </VerticalGroup>
    </HorizontalGroup>
  );
};

ListItem.propTypes = {
  renderItem: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ListItem;
