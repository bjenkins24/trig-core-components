import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import { HorizontalGroup } from 'Groups';
import { Body2 } from 'Typography';

const Item = styled.div`
  width: ${({ variant }) => (variant === 'withContent' ? '90px' : '72px')};
  min-height: 7.2rem;
  background: ${({ theme, variant }) =>
    variant === 'withContent' ? 'none' : theme.p};
  margin-right: ${({ variant, theme }) =>
    variant === 'withContent' ? 0 : theme.space[4]}px;
  display: flex;
  flex-shrink: 0;
`;

const Container = styled.li`
  min-height: 7.2rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  display: block;
  padding-right: 1.6rem;
  cursor: pointer;
  text-decoration: none;
  background: ${({ theme }) => theme.b};
  border-radius: ${({ theme, variant }) =>
    variant === 'withContent' ? theme.br : 0};
  &:hover {
    background: ${({ theme }) => theme.bs[300]};
  }
  &:hover ${Item} {
    background: ${({ theme, variant }) =>
      variant === 'withContent' ? 'none' : theme.ps[400]};
  }
`;

export const ItemContent = styled.div`
  margin: 0 auto;
  align-self: center;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) =>
    `${theme.space[3]}px ${theme.space[3]}px ${theme.space[3]}px 0`};
  flex-flow: row wrap;
`;

const Actions = styled(HorizontalGroup)`
  margin-left: auto;
  align-self: center;
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
  variant,
}) => {
  return (
    <>
      <Item variant={variant}>
        <ItemContent variant={variant} data-testid="listItem__itemContent">
          {renderItem()}
        </ItemContent>
      </Item>
      <Content>{renderContent()}</Content>
      <Actions variant={variant} margin={1.6}>
        {actions.map((action) => (
          <Action className={actionClass} key={uniqueId('actions')}>
            {action}
          </Action>
        ))}
      </Actions>
    </>
  );
};

const DescriptionComponent = ({ description }) => {
  if (!description) return null;
  return (
    <div
      css={`
        display: flex;
        margin-bottom: ${({ theme }) => theme.space[3]}px;
      `}
    >
      <div
        css={`
          width: 9rem;
        `}
      />
      <Body2>{description}</Body2>
      <div />
    </div>
  );
};
/* eslint-enable react/prop-types */

const listItemTypes = {
  renderItem: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  onClick: PropTypes.func.isRequired,
  href: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

const defaultProps = {
  renderItem: () => null,
  actions: [],
  href: '',
  description: '',
};

const ListItem = ({
  renderItem,
  renderContent,
  actions,
  onClick,
  href,
  description,
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
        <Container
          variant={description ? 'withContent' : 'default'}
          as="a"
          onClick={clickListItem}
          href={href}
        >
          <div
            css={`
              display: flex;
            `}
          >
            <ListItemContent
              variant={description ? 'withContent' : 'default'}
              actions={actions}
              renderItem={renderItem}
              renderContent={renderContent}
              actionClass={actionClass}
            />
          </div>
          <DescriptionComponent description={description} />
        </Container>
      </li>
    );
  }

  return (
    <Container
      variant={description ? 'withContent' : 'default'}
      onClick={clickListItem}
      {...restProps}
    >
      <ListItemContent
        variant={description ? 'withContent' : 'default'}
        actions={actions}
        renderItem={renderItem}
        renderContent={renderContent}
        actionClass={actionClass}
      />
      <DescriptionComponent description={description} />
    </Container>
  );
};

ListItem.propTypes = listItemTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
