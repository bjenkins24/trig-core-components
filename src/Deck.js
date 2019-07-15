import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { H2, Body3 } from './Typography';
import Icon from './Icon';
import Avatar from './Avatar';
import { HorizontalGroup } from './Groups';

const Wrapper = styled.div`
  border-radius: 0.4rem;
  background: rgb(${({ theme }) => theme.cs});
  padding: 1.6rem;
  width: 26.2rem;
  height: 22.5rem;
`;

const Deck = ({ title, user, totalCards, totalFollowers }) => {
  return (
    <Wrapper>
      <H2>{title}</H2>
      <HorizontalGroup margin={1.6}>
        <Avatar
          firstName={user.firstName}
          lastName={user.lastName}
          email={user.email}
          size={2.4}
        />
        <HorizontalGroup margin={1.8}>
          <Icon type="cards" size={2.2} />
          <Body3>{totalCards}</Body3>
        </HorizontalGroup>
        <HorizontalGroup margin={1.8}>
          <Icon type="followers" size={1.6} />
          <Body3>{totalFollowers}</Body3>
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
