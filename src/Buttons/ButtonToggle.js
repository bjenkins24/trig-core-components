import React, { useState } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const getBorderRadius = () => ({ isLastChild, isFirstChild }) => {
  if (isLastChild) {
    return css`
      border-radius: 0 0.2rem 0.2rem 0;
      border: 0.1rem solid ${({ theme }) => theme.s};
    `;
  }
  if (isFirstChild) {
    return css`
      border-radius: 0.2rem 0 0 0.2rem;
      border: 0.1rem solid ${({ theme }) => theme.s};
    `;
  }
  return css`
    border-top: 0.1rem solid ${({ theme }) => theme.s};
    border-bottom: 0.1rem solid ${({ theme }) => theme.s};
  `;
};

const Button = styled.div`
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
  ${getBorderRadius()};
  background: ${({ selected, theme }) => (selected ? theme.s : theme.b)};
  color: ${({ selected, theme }) => (selected ? theme.sc : theme.s)};
  width: 4rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  * {
    margin: 0 auto;
  }
`;

const ButtonToggle = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const totalChildren = React.Children.count(children);
  return (
    <Container>
      {React.Children.map(children, (child, i) => {
        return (
          <Button
            isFirstChild={i === 0}
            isLastChild={totalChildren === i + 1}
            selected={selectedButton === i}
            onClick={() => {
              const onClick = get(child, 'props.onClick', () => false);
              if (onClick) {
                onClick();
              }
              setSelectedButton(i);
            }}
          >
            {React.cloneElement(child, {
              // We're moving the onclick from the child to the button above
              // so we don't want to execute it twice so we're overwriting it here
              onClick: () => false,
            })}
          </Button>
        );
      })}
    </Container>
  );
};

ButtonToggle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonToggle;
