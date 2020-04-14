import React, { useState, useEffect, useRef } from 'react';
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
  &:hover,
  &:focus,
  &:active {
    background: ${({ theme }) => theme.s};
    color: ${({ theme }) => theme.sc};
    outline: none;
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
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const refs = useRef(navigationList.map(React.createRef));
  const closePopoverRef = useRef(() => null);

  const navigateWithKeyboard = (event) => {
    const upKey = 38;
    const downKey = 40;
    const enterKey = 13;
    const tabKey = 9;
    const totalItems = navigationList.length;
    const { keyCode, shiftKey } = event;

    if (keyCode === upKey || (shiftKey && keyCode === tabKey)) {
      if (selectedItem === null || selectedItem === 0) {
        return setSelectedItem(totalItems - 1);
      }
      return setSelectedItem(selectedItem - 1);
    }

    if (keyCode === downKey || keyCode === tabKey) {
      if (selectedItem === null || selectedItem === totalItems - 1) {
        return setSelectedItem(0);
      }
      return setSelectedItem(selectedItem + 1);
    }

    if (keyCode === enterKey) {
      navigationList[selectedItem].onClick();
      return closePopoverRef.current();
    }

    return false;
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', navigateWithKeyboard, false);
      return () =>
        document.removeEventListener('keydown', navigateWithKeyboard, false);
    }
    return () => {};
  }, [isOpen, selectedItem]);

  useEffect(() => {
    if (selectedItem !== null) {
      refs.current[selectedItem].current.focus();
    }
  }, [selectedItem]);

  return (
    <Popover
      {...restProps}
      onRequestOpen={() => setIsOpen(true)}
      onRequestClose={() => {
        setSelectedItem(null);
        setIsOpen(false);
      }}
      renderPopover={({ closePopover }) => {
        closePopoverRef.current = closePopover;
        return (
          <List>
            {navigationList.map(({ onClick, item }, index) => {
              /* eslint-disable react/no-array-index-key */
              return (
                <ListItem
                  data-testid={`popover-navigation__item-${index}`}
                  tabIndex={0}
                  key={index}
                  role="button"
                  onClick={() => {
                    onClick();
                    closePopover();
                  }}
                  ref={refs.current[index]}
                >
                  {item}
                </ListItem>
              );
              /* eslint-enable react/no-array-index-key */
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
