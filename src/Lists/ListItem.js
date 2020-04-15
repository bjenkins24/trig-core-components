import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
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
  text-decoration: none;
  background: ${({ theme }) => theme.b};
  &:hover {
    background: ${({ theme }) => theme.bs[300]};
  }
  &:hover ${Item} {
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

/* eslint-disable react/prop-types */
const ListItemContent = ({
  actions,
  renderItem,
  renderContent,
  actionClass,
}) => {
  return (
    <>
      <Item>
        <ItemContent data-testid="listItem__itemContent">
          {renderItem()}
        </ItemContent>
      </Item>
      <Content>{renderContent()}</Content>
      <Actions margin={1.6}>
        {actions.map((action) => (
          <Action className={actionClass} key={uniqueId('actions')}>
            {action}
          </Action>
        ))}
      </Actions>
    </>
  );
};
/* eslint-enable react/prop-types */

const listItemTypes = {
  renderItem: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string,
};

const defaultProps = {
  renderItem: () => null,
  actions: [],
  href: '',
};

const ListItem = ({
  renderItem,
  renderContent,
  actions,
  onClick,
  href,
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
    e.preventDefault();
    let node = e.target;
    for (let i = 0; i < 5; i += 1) {
      if (node.classList && node.classList.contains(actionClass)) return;
      node = node.parentNode;
    }
    onClick(e);
  };

  if (href) {
    return (
      <li {...restProps}>
        <Container as="a" onClick={clickListItem} href={href}>
          <ListItemContent
            actions={actions}
            renderItem={renderItem}
            renderContent={renderContent}
            actionClass={actionClass}
          />
        </Container>
      </li>
    );
  }

  return (
    <Container onClick={clickListItem} {...restProps}>
      <ListItemContent
        actions={actions}
        renderItem={renderItem}
        renderContent={renderContent}
        actionClass={actionClass}
      />
    </Container>
  );
};

ListItem.propTypes = listItemTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
