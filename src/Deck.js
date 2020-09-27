import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import Truncate from 'react-truncate';
import { Heading2, Body2Component, Body3Component, TinyText } from 'Typography';
import { HorizontalGroup, VerticalGroup } from 'Groups';
import Icon from './Icon';
import Avatar from './Avatar';

const DeckThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[3]}px;
  position: absolute;
  transition: all 0.2s;
  bottom: 0;
  width: calc(100% - ${({ theme }) => theme.space[4]}px);
`;

const DeckHover = styled.div`
  display: flex;
  transition: all 0.2s;
  opacity: 0;
  flex-direction: column;
  padding: ${({ theme }) => theme.space[3]}px;
`;

const getBackground = (isHovered) => ({ theme, image }) => {
  const opacity = isHovered ? 0.6 : 0.25;
  let backgroundCss = css`
    background: linear-gradient(
      0deg,
      ${rgba(theme.s, 0.9)} 25%,
      ${rgba(theme.sc, 0.8)} 80%
    );
  `;
  if (image) {
    backgroundCss = css`
      background: linear-gradient(0deg, ${rgba(theme.s, 0.9)} 25%, ${rgba(
      theme.sc,
      0.8
    )} 80%), url('${image}');
   `;
  }
  return css`
    ${backgroundCss}
    background-size: cover;
    box-shadow: inset 0 0 0 1000px ${rgba(theme.s, opacity)};
  `;
};

const Wrapper = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  border-radius: ${({ theme }) => theme.br};
  ${getBackground(false)}
  transition: opacity 200ms;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.sc};
  cursor: pointer;
  outline: none;
  &:focus {
    box-shadow: inset 0px 0px 0px 0px;
  }
  &:hover {
    ${getBackground(true)}
    .deck__thumbnail {
      opacity: 0;
    }
    .deck__hover {
      opacity: 1;
    }
  }
`;

const userType = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  position: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
});

const AvatarWrapperProps = {
  user: userType.isRequired,
};

const AvatarWrapper = ({ user, ...restProps }) => {
  return (
    <Avatar
      firstName={user.firstName}
      lastName={user.lastName}
      email={user.email}
      size={2.4}
      css={`
        color: ${({ theme }) => theme.p};
      `}
      {...restProps}
    />
  );
};

AvatarWrapper.propTypes = AvatarWrapperProps;

const defaultProps = {
  image: '',
};

const deckTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
  totalFollowers: PropTypes.number.isRequired,
  image: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

const Deck = ({
  title,
  image,
  user,
  totalCards,
  totalFollowers,
  description,
  href,
  onClick,
  ...restProps
}) => {
  return (
    <Wrapper
      href={href}
      image={image}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      {...restProps}
    >
      <DeckThumbnail className="deck__thumbnail">
        <Heading2
          color="sc"
          css={`
            overflow-wrap: break-word;
            margin-bottom: ${({ theme }) => theme.space[4]}px;
          `}
        >
          <Truncate trimWhitespace lines={3}>
            {title}
          </Truncate>
        </Heading2>
        <div
          css={`
            display: flex;
            position: absolute;
            bottom: ${({ theme }) => theme.space[3]}px;
            width: calc(100% - ${({ theme }) => theme.space[4]}px);
          `}
        >
          <AvatarWrapper user={user} />
          <HorizontalGroup
            margin={1.6}
            css={`
              margin-left: auto;
            `}
          >
            <HorizontalGroup margin={0.8}>
              <Icon type="cards" size={2.2} color="sc" />
              <Body3Component weight="bold" color="sc">
                {totalCards}
              </Body3Component>
            </HorizontalGroup>
            <HorizontalGroup margin={0.8}>
              <Icon type="followers" size={1.6} color="sc" />
              <Body3Component weight="bold" color="sc">
                {totalFollowers}
              </Body3Component>
            </HorizontalGroup>
          </HorizontalGroup>
        </div>
      </DeckThumbnail>
      <DeckHover className="deck__hover">
        <Body2Component
          color="sc"
          css={`
            margin: 0 0 ${({ theme }) => theme.space[3]}px 0;
            text-decoration: none;
          `}
        >
          <Truncate trimWhitespace lines={6}>
            {description}
          </Truncate>
        </Body2Component>
        <HorizontalGroup
          margin={0.8}
          css={`
            position: absolute;
            bottom: 16px;
          `}
        >
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
    </Wrapper>
  );
};

Deck.defaultProps = defaultProps;
Deck.propTypes = deckTypes;

export default Deck;
