import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, useTransition, animated, config } from 'react-spring';
import styled, { css } from 'styled-components';
import Truncate from 'react-truncate';
import { Heading2, Body2, Body3, TinyText } from './Typography';
import Icon from './Icon';
import Avatar from './Avatar';
import { HorizontalGroup, VerticalGroup } from './Groups';

const DeckThumbnail = styled(animated.div)`
  display: flex;
  flex-direction: column;
  transform: translateY(-100%);
  padding: 1.6rem;
`;

const DeckHover = styled(animated.div)`
  display: flex;
  flex-direction: column;
  transform: translateY(-100%);
  padding: 1.6rem;
`;

const getBackground = ({ theme, isHovered, image }) => {
  if (image && !isHovered) {
    return css`
      background: linear-gradient(0deg, rgba(${theme.cs},0.90) 25%, rgba(${theme.csc},.8) 80%), url('${image}');
      background-size: cover;
      box-shadow: inset 0 0 0 1000px rgba(${theme.cs}, .25);
    `;
  }
  if (image && isHovered) {
    return css`
      background: url('${image}');
      background-size: cover;
      box-shadow: inset 0 0 0 1000px rgba(${theme.cs}, .9);
    `;
  }
  return false;
};

const Wrapper = styled(animated.div)`
  position: relative;
  border-radius: 0.4rem;
  ${getBackground}
  padding-top: calc(3 / 4 * 20%);
  height: 0;
  width: 20%;
  color: rgb(${({ theme }) => theme.csc});
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
  const totalCountLength = `${totalCards}${totalFollowers}`.length;
  const [isHovered, setIsHovered] = useState(false);
  const animateProps = useSpring({
    transform: isHovered ? 'translate(-20%, -20%)' : 'translate(0px, 0px)',
    width: isHovered ? '25%' : '20%',
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
          color: rgb(${({ theme }) => theme.cp});
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
              color="csc"
              css={`
                overflow-wrap: break-word;
                margin-top: auto;
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
        ) : (
          <DeckHover style={props} key={key}>
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
