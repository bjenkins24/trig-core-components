import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useSprings, animated } from 'react-spring';
import { get } from 'lodash';
import useTheme from '../utils/useTheme';

const Container = styled.div`
  display: flex;
`;

const getBorderRadius = () => ({ isLastChild, isFirstChild }) => {
  if (isLastChild) {
    return css`
      border-radius: 0 ${({ theme }) => theme.br} ${({ theme }) => theme.br} 0;
      border-top: 0.1rem solid ${({ theme }) => theme.s};
      border-right: 0.1rem solid ${({ theme }) => theme.s};
      border-bottom: 0.1rem solid ${({ theme }) => theme.s};
    `;
  }
  if (isFirstChild) {
    return css`
      border-radius: ${({ theme }) => theme.br} 0 0 ${({ theme }) => theme.br};
      border: 0.1rem solid ${({ theme }) => theme.s};
    `;
  }
  return css`
    border-top: 0.1rem solid ${({ theme }) => theme.s};
    border-bottom: 0.1rem solid ${({ theme }) => theme.s};
    border-right: 0.1rem solid ${({ theme }) => theme.s};
  `;
};

const Button = styled(animated.div)`
  cursor: ${({ selected }) => (selected ? 'default' : 'pointer')};
  ${getBorderRadius()};
  color: ${({ selected, theme }) => (selected ? theme.sc : theme.s)};
  width: 4rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  * {
    margin: 0 auto;
  }
`;

const buttonToggleTypes = {
  children: PropTypes.node.isRequired,
};

const ButtonToggle = ({ children }) => {
  const [selectedButton, setSelectedButton] = useState(0);
  const totalChildren = React.Children.count(children);
  const theme = useTheme();

  const [springs, set] = useSprings(totalChildren, (i) => {
    return {
      background: selectedButton === i ? theme.s : theme.b,
    };
  });

  return (
    <Container>
      {React.Children.map(children, (child, i) => {
        set((index) => {
          return {
            background: selectedButton === index ? theme.s : theme.b,
            from: { background: selectedButton === index ? theme.b : theme.s },
            config: { tension: 600, friction: 100 },
          };
        });
        const animateProps = springs.map((spring, springIndex) => {
          if (springIndex === i) {
            return spring;
          }
          return false;
        })[i];

        return (
          <Button
            style={animateProps}
            role="button"
            isFirstChild={i === 0}
            isLastChild={totalChildren === i + 1}
            selected={selectedButton === i}
            onClick={() => {
              const onClick = get(child, 'props.onClick', () => false);
              onClick();
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

ButtonToggle.propTypes = buttonToggleTypes;

export default ButtonToggle;
