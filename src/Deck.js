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
  width: 23rem;
  height: 19.3rem;
  color: rgb(${({ theme }) => theme.csc});
  display: flex;
  align-items: flex-end;
`;

const Deck = ({ title, user, totalCards, totalFollowers }) => {
  return (
    <Wrapper>
      <div>
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
      </div>
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
