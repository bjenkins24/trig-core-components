import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups';

const Container = styled.div`
  height: 7.2rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  display: flex;
  padding-right: 1.6rem;
`;

const Item = styled.div`
  width: 7.2rem;
  height: 100%;
  background: ${({ theme }) => theme.p};
  margin-right: 1.2rem;
  display: flex;
`;

const ItemContent = styled.div`
  margin: 0 auto;
  align-self: center;
`;

const Actions = styled(HorizontalGroup)`
  margin-left: auto;
`;

const ListItem = ({ renderItem, renderContent, actions }) => {
  return (
    <Container>
      <Item>
        <ItemContent>{renderItem()}</ItemContent>
      </Item>
      {renderContent()}
      <Actions margin={1.6}>{actions.map((action) => action)}</Actions>
    </Container>
  );
};

ListItem.defaultProps = {
  renderItem: () => null,
  actions: [],
};

ListItem.propTypes = {
  renderItem: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
};

export default ListItem;
