import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { uniqueId } from 'lodash';
import { HorizontalGroup } from 'Groups';
import { Body2 } from 'Typography';

const Item = styled.div`
  width: 72px;
  min-height: 7.2rem;
  display: flex;
  flex-shrink: 0;
`;

const Container = styled.li`
  color: ${({ theme }) => theme.colors.p};
  min-height: 7.2rem;
  border: 0.1rem solid ${({ theme }) => theme.ps[100]};
  display: ${({ href }) => (href ? 'block' : 'flex')};
  padding: 0 ${({ theme }) => theme.space[3]}px;
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
  text-decoration: none;
  background: ${({ theme }) => theme.bs[200]};
  border-radius: ${({ theme }) => theme.br};
  &:hover {
    background: ${({ isClickable, theme }) =>
      isClickable ? theme.bs[300] : 'none'};
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
  cursor: pointer;
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
      {!renderItem ? null : (
        <Item>
          <ItemContent data-testid="listItem__itemContent">
            {renderItem()}
          </ItemContent>
        </Item>
      )}
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

const Description = ({ description }) => {
  if (!description) return null;

  return (
    <div
      css={`
        padding-bottom: ${({ theme }) => theme.space[3]}px;
        & div div > *:last-child {
          margin-bottom: 0;
        }
      `}
    >
      <Body2 as="div">{description}</Body2>
    </div>
  );
};
/* eslint-enable react/prop-types */

const listItemTypes = {
  renderItem: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  renderContent: PropTypes.func.isRequired,
  actions: PropTypes.arrayOf(PropTypes.node),
  onClick: PropTypes.func,
  href: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  openInNewTab: PropTypes.bool,
  target: PropTypes.string,
};

const defaultProps = {
  renderItem: () => null,
  actions: [],
  href: '',
  description: '',
  onClick: null,
  openInNewTab: false,
  target: '_self',
};

const ListItem = ({
  renderItem,
  renderContent,
  actions,
  onClick,
  href,
  description,
  openInNewTab,
  target,
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
      if (node.classList && node.classList.contains(actionClass)) {
        e.preventDefault();
        return;
      }
      node = node.parentNode;
    }
    /* istanbul ignore next */
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <li {...restProps}>
        <Container
          as="a"
          onClick={clickListItem}
          href={href}
          isClickable
          data-testid="list-item__container"
          target={target}
          rel="noopener"
        >
          <div
            css={`
              display: flex;
              margin-left: -${({ theme, hasItem }) => (hasItem ? `${theme.space[3]}px` : 0)};
            `}
            hasItem={renderItem}
          >
            <ListItemContent
              actions={actions}
              renderItem={renderItem}
              renderContent={renderContent}
              actionClass={actionClass}
            />
          </div>
          <Description description={description} />
        </Container>
      </li>
    );
  }

  return (
    <Container
      onClick={clickListItem}
      isClickable={href || onClick}
      data-testid="list-item__container"
      {...restProps}
    >
      <div
        css={`
          margin-left: -${({ theme }) => theme.space[3]}px;
        `}
      >
        <ListItemContent
          actions={actions}
          renderItem={renderItem}
          renderContent={renderContent}
          actionClass={actionClass}
        />
      </div>
      <Description description={description} />
    </Container>
  );
};

ListItem.propTypes = listItemTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
