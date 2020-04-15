import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HorizontalGroup } from '../Groups';

const Item = styled.div`
  width: 7.2rem;
  min-height: 7.2rem;
  background: ${({ theme }) => theme.p};
  margin-right: 2.4rem;
  display: flex;
  flex-shrink: 0;
`;

const Container = styled.li`
  min-height: 7.2rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  display: flex;
  padding-right: 1.6rem;
  cursor: pointer;
  background: ${({ theme }) => theme.b};
  &:hover,
  &:active,
  &:focus {
    outline: none;
    background: ${({ theme }) => theme.bs[300]};
  }
  &:hover ${Item}, &:active ${Item}, &:focus ${Item} {
    background: ${({ theme }) => theme.ps[400]};
  }
`;

export const ItemContent = styled.div`
  margin: 0 auto;
  align-self: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem 0.8rem 0;
`;

const Actions = styled(HorizontalGroup)`
  margin-left: auto;
`;

const Action = styled.div`
  &:hover svg {
    color: ${({ theme }) => theme.p};
  }
  &:hover .icon__count {
    background: ${({ theme }) => theme.p};
    color: ${({ theme }) => theme.pc};
  }
`;

const listItemTypes = {
  renderItem: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  renderItem: () => null,
  actions: [],
};

const ListItem = ({
  renderItem,
  renderContent,
  actions,
  onClick,
  ...restProps
}) => {
  const actionClass = 'listItem__action';

  /**
   * We want to stop the onClick function for the list item when
   * a user clicks on an action. We'll check the target and then
   * go up a few parents to find it.
   *
   * @param {*} e
   */
  const clickListItem = (e) => {
    let node = e.target;
    for (let i = 0; i < 5; i += 1) {
      if (node.className === actionClass) return;
      node = node.parentNode;
    }
    onClick(e);
  };

  return (
    <Container
      role="button"
      tabIndex={0}
      onClick={clickListItem}
      {...restProps}
    >
      <Item>
        <ItemContent data-testid="listItem__itemContent">
          {renderItem()}
        </ItemContent>
      </Item>
      <Content>{renderContent()}</Content>
      <Actions margin={1.6}>
        {actions.map((action) => (
          <Action className={actionClass}>{action}</Action>
        ))}
      </Actions>
    </Container>
  );
};

ListItem.propTypes = listItemTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
