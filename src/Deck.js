import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import Truncate from 'react-truncate';
import { Heading2, Body2Component, Body3Component, TinyText } from 'Typography';
import { HorizontalGroup, VerticalGroup } from 'Groups';
import Box from './Box';
import Icon from './Icon';
import Avatar from './Avatar';

const DeckThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  position: absolute;
  transition: all 0.2s;
  bottom: 0;
  width: calc(100% - 3.2rem);
`;

const DeckHover = styled.div`
  display: flex;
  transition: all 0.2s;
  opacity: 0;
  flex-direction: column;
  padding: 1.6rem;
`;

const getBackground = ({ theme, image }) => {
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
    box-shadow: inset 0 0 0 1000px ${rgba(theme.s, 0.6)};
  `;
};

const defaultProps = {
  image: '',
};

const deckTypes = {
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

const Deck = ({
  title,
  image,
  user,
  totalCards,
  totalFollowers,
  description,
  ...restProps
}) => {
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
    <Box
      color="sc"
      width="100%"
      height="100%"
      position="relative"
      borderRadius={1}
      role="link"
      tabIndex="0"
      image={image}
      css={`
        ${getBackground}
        transition: all 200ms;
        cursor: pointer;
        &:hover {
          ${getBackground}
          .deck__thumbnail {
            opacity: 0;
          }
          .deck__hover {
            opacity: 1;
          }
        }
      `}
      {...restProps}
    >
      <DeckThumbnail className="deck__thumbnail">
        <Heading2
          color="sc"
          mt="auto"
          css={`
            overflow-wrap: break-word;
          `}
        >
          <Truncate lines={4}>{title}</Truncate>
        </Heading2>
        <Box display="flex">
          <AvatarWrapper user={user} />
          <HorizontalGroup spacer={3} ml="auto">
            <HorizontalGroup spacer={2}>
              <Icon type="cards" size={2.2} />
              <Body3Component weight="bold" color="sc">
                {totalCards}
              </Body3Component>
            </HorizontalGroup>
            <HorizontalGroup spacer={2}>
              <Icon type="followers" size={1.6} />
              <Body3Component weight="bold" color="sc">
                {totalFollowers}
              </Body3Component>
            </HorizontalGroup>
          </HorizontalGroup>
        </Box>
      </DeckThumbnail>
      <DeckHover className="deck__hover">
        <Heading2
          color="sc"
          css={`
            overflow-wrap: break-word;
            margin-bottom: 0.3rem;
          `}
        >
          <Truncate lines={2}>{title}</Truncate>
        </Heading2>
        <Body2Component color="sc" mb={3}>
          <Truncate lines={4}>{description}</Truncate>
        </Body2Component>
        <HorizontalGroup spacer={1}>
          <AvatarWrapper user={user} />
          <VerticalGroup mt="0.1rem">
            <TinyText color="sc">
              {user.firstName} {user.lastName}
            </TinyText>
            <TinyText color="sc">{user.position}</TinyText>
          </VerticalGroup>
        </HorizontalGroup>
      </DeckHover>
    </Box>
  );
};

Deck.defaultProps = defaultProps;
Deck.propTypes = deckTypes;

export default Deck;
