import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import { Heading2, Body2, Body3, TinyText } from './Typography';
import Icon from './Icon';
import Avatar from './Avatar';
import { HorizontalGroup, VerticalGroup } from './Groups';

const DeckThumbnail = styled.div`
  width: 23rem;
  align-self: flex-end;
`;

const DeckHover = styled.div`
  width: 23rem;
  display: none;
`;

const Wrapper = styled.div`
  border-radius: 0.4rem;
  background: rgb(${({ theme }) => theme.cs});
  padding: 1.6rem;
  width: 23rem;
  height: 19.3rem;
  color: rgb(${({ theme }) => theme.csc});
  display: flex;
  cursor: pointer;
  &:hover ${DeckThumbnail} {
    opacity: 0;
    display: none;
  }
  &:hover ${DeckHover} {
    opacity: 1;
    display: block;
  }
`;

const Deck = ({
  title,
  user,
  totalCards,
  totalFollowers,
  description,
  ...restProps
}) => {
  const totalCountLength = `${totalCards}${totalFollowers}`.length;

  const AvatarWrapper = () => {
    return (
      <Avatar
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        size={2.4}
        css={`
          color: rgb(${({ theme }) => theme.cp});
        `}
      />
    );
  };

  return (
    <Wrapper {...restProps}>
      <DeckThumbnail>
        <Heading2
          color="csc"
          css={`
            overflow-wrap: break-word;
          `}
        >
          <Truncate lines={4}>{title}</Truncate>
        </Heading2>
        <HorizontalGroup margin={1.6}>
          <AvatarWrapper user={user} />
          <HorizontalGroup margin={0.8}>
            <Icon type="cards" size={2.2} />
            <Body3 weight="bold" color="csc">
              {totalCards} {totalCountLength <= 3 && ' Cards'}
            </Body3>
          </HorizontalGroup>
          <HorizontalGroup margin={0.8}>
            <Icon type="followers" size={1.6} />
            <Body3 weight="bold" color="csc">
              {totalFollowers} {totalCountLength <= 3 && ' Followers'}
            </Body3>
          </HorizontalGroup>
        </HorizontalGroup>
      </DeckThumbnail>
      <DeckHover>
        <Heading2
          color="csc"
          css={`
            overflow-wrap: break-word;
            margin-bottom: 0.3rem;
          `}
        >
          <Truncate lines={2}>{title}</Truncate>
        </Heading2>
        <Body2
          color="csc"
          as="p"
          css={`
            margin: 0 0 0.8rem 0;
          `}
        >
          <Truncate lines={4}>{description}</Truncate>
        </Body2>
        <HorizontalGroup margin={0.8}>
          <AvatarWrapper user={user} />
          <VerticalGroup
            css={`
              margin-top: 0.1rem;
            `}
          >
            <TinyText color="csc">
              {user.firstName} {user.lastName}
            </TinyText>
            <TinyText color="csc">{user.position}</TinyText>
          </VerticalGroup>
        </HorizontalGroup>
      </DeckHover>
    </Wrapper>
  );
};

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
  totalFollowers: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Deck;
