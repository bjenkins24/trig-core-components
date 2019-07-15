import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Heading2, Body3 } from './Typography';
import Icon from './Icon';
import Avatar from './Avatar';
import { HorizontalGroup } from './Groups';

const Wrapper = styled.div`
  border-radius: 0.4rem;
  background: rgb(${({ theme }) => theme.cs});
  padding: 1.6rem;
  width: 26.2rem;
  height: 22.5rem;
  color: rgb(${({ theme }) => theme.csc});
`;

const Deck = ({ title, user, totalCards, totalFollowers }) => {
  return (
    <Wrapper>
      <Heading2 color="csc">{title}</Heading2>
      <HorizontalGroup margin={1.6}>
        <Avatar
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          size={2.4}
          css={`
            color: rgb(${({ theme }) => theme.cp});
          `}
        />
        <HorizontalGroup margin={0.8}>
          <Icon type="cards" size={2.2} />
          <Body3 weight="bold" color="csc">
            {totalCards} Cards
          </Body3>
        </HorizontalGroup>
        <HorizontalGroup margin={0.8}>
          <Icon type="followers" size={1.6} />
          <Body3 weight="bold" color="csc">
            {totalFollowers} Followers
          </Body3>
        </HorizontalGroup>
      </HorizontalGroup>
    </Wrapper>
  );
};

Deck.propTypes = {
  title: PropTypes.string.isRequired,
  totalCards: PropTypes.number.isRequired,
  totalFollowers: PropTypes.number.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default Deck;
