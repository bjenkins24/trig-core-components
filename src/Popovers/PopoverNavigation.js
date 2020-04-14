import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Popover, { popoverPadding } from './Popover';

const List = styled.ul`
  margin: 0;
  list-style-type: none;
  padding: 0;
  margin-top: -${popoverPadding}rem;
`;

const ListItem = styled.li`
  margin-left: -${popoverPadding}rem;
  padding: 0.8rem ${popoverPadding}rem;
  width: 100%;
  cursor: pointer;
  transition: background 0.15s;
  &:hover {
    background: ${({ theme }) => theme.s};
    color: ${({ theme }) => theme.sc};
  }
  &:first-child {
    border-top-right-radius: ${({ theme }) => theme.br};
    border-top-left-radius: ${({ theme }) => theme.br};
  }
  &:last-child {
    margin-bottom: -${popoverPadding}rem;
    border-bottom-right-radius: ${({ theme }) => theme.br};
    border-bottom-left-radius: ${({ theme }) => theme.br};
  }
`;

const popoverNavigationTypes = {
  children: PropTypes.node.isRequired,
  navigationList: PropTypes.arrayOf(
    PropTypes.shape({
      onClick: PropTypes.func.isRequired,
      item: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    })
  ).isRequired,
};

const PopoverNavigation = ({ children, navigationList, ...restProps }) => {
  return (
    <Popover
      {...restProps}
      renderPopover={({ closePopover }) => {
        return (
          <List>
            {navigationList.map(({ onClick, item }) => {
              return (
                <ListItem
                  onClick={() => {
                    onClick();
                    closePopover();
                  }}
                >
                  {item}
                </ListItem>
              );
            })}
          </List>
        );
      }}
    >
      {children}
    </Popover>
  );
};

PopoverNavigation.propTypes = popoverNavigationTypes;

export default PopoverNavigation;
