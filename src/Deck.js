import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { useSpring, useTransition, animated, config } from 'react-spring';
import styled, { css } from 'styled-components';
import Truncate from 'react-truncate';
import {
  Heading2,
  Body2Component,
  Body3Component,
  TinyText,
} from './Typography';
import Icon from './Icon';
import Avatar from './Avatar';
import { HorizontalGroup, VerticalGroup } from './Groups';

const DeckThumbnail = styled(animated.div)`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  position: absolute;
  bottom: 0;
  width: calc(100% - 3.2rem);
`;

const DeckHover = styled(animated.div)`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
`;

const getBackground = ({ theme, isHovered, image }) => {
  if (image && !isHovered) {
    return css`
      background: linear-gradient(0deg, ${rgba(theme.s, 0.9)} 25%, ${rgba(
      theme.sc,
      0.8
    )} 80%), url('${image}');
      background-size: cover;
      box-shadow: inset 0 0 0 1000px ${rgba(theme.s, 0.25)};
    `;
  }
  if (image && isHovered) {
    return css`
      background: url('${image}');
      background-size: cover;
      box-shadow: inset 0 0 0 1000px ${rgba(theme.s, 0.9)};
    `;
  }
  return false;
};

const Wrapper = styled(animated.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.br};
  ${getBackground}
  width: 100%;
  height: 135px;
  color: ${({ theme }) => theme.sc};
  cursor: pointer;
`;

const Deck = ({
  title,
  image,
  user,
  totalCards,
  totalFollowers,
  description,
  ...restProps
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const animateProps = useSpring({
    transform: isHovered ? 'translate(-20%, -20%)' : 'translate(0px, 0px)',
    width: isHovered ? '105%' : '100%',
    paddingTop: isHovered ? 'calc(3 / 4 * 25%)' : 'calc(3 / 4 * 20%)',
  });
  const transitions = useTransition(!isHovered, null, {
    from: { opacity: 0, display: 'none' },
    enter: { opacity: 1, display: 'flex' },
    leave: { opacity: 0, display: 'none' },
    config: config.gentle,
  });

  const AvatarWrapper = () => {
    return (
      <Avatar
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        size={2.4}
        css={`
          color: ${({ theme }) => theme.p};
        `}
      />
    );
  };

  return (
    <Wrapper
      image={image}
      isHovered={isHovered}
      onMouseEnter={() => setIsHovered(!isHovered)}
      onMouseLeave={() => setIsHovered(!isHovered)}
      style={animateProps}
      {...restProps}
    >
      {transitions.map(({ item, key, props }) =>
        item ? (
          <DeckThumbnail key={key} style={props}>
            <Heading2
              color="sc"
              css={`
                overflow-wrap: break-word;
                margin-top: auto;
              `}
            >
              <Truncate lines={4}>{title}</Truncate>
            </Heading2>
            <div
              css={`
                display: flex;
              `}
            >
              <AvatarWrapper user={user} />
              <HorizontalGroup
                margin={0.8}
                css={`
                  margin-left: auto;
                `}
              >
                <HorizontalGroup margin={0.8}>
                  <Icon type="cards" size={2.2} />
                  <Body3Component weight="bold" color="sc">
                    {totalCards}
                  </Body3Component>
                </HorizontalGroup>
                <HorizontalGroup margin={0.8}>
                  <Icon type="followers" size={1.6} />
                  <Body3Component weight="bold" color="sc">
                    {totalFollowers}
                  </Body3Component>
                </HorizontalGroup>
              </HorizontalGroup>
            </div>
          </DeckThumbnail>
        ) : (
          <DeckHover style={props} key={key}>
            <Heading2
              color="sc"
              css={`
                overflow-wrap: break-word;
                margin-bottom: 0.3rem;
              `}
            >
              <Truncate lines={2}>{title}</Truncate>
            </Heading2>
            <Body2Component
              color="sc"
              as="p"
              css={`
                margin: 0 0 0.8rem 0;
              `}
            >
              <Truncate lines={4}>{description}</Truncate>
            </Body2Component>
            <HorizontalGroup margin={0.8}>
              <AvatarWrapper user={user} />
              <VerticalGroup
                css={`
                  margin-top: 0.1rem;
                `}
              >
                <TinyText color="sc">
                  {user.firstName} {user.lastName}
                </TinyText>
                <TinyText color="sc">{user.position}</TinyText>
              </VerticalGroup>
            </HorizontalGroup>
          </DeckHover>
        )
      )}
    </Wrapper>
  );
};

Deck.defaultProps = {
  image: '',
};

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
  totalFollowers: PropTypes.number.isRequired,
  image: PropTypes.string,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Deck;
