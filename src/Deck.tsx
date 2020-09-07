/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { rgba } from 'polished';
import Truncate from 'react-truncate';
import { Heading2, Body2Component, Body3Component, TinyText } from 'Typography';
import { HorizontalGroup, VerticalGroup } from 'Groups';
import Icon from './Icon';
import Avatar from './Avatar';

interface DeckProps {
  title: string;
  image?: string;
  user: {
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    image: string;
  };
  totalCards: number;
  totalFollowers: number;
  description: string;
}

export const Deck = ({
  title,
  image = '',
  user,
  totalCards,
  totalFollowers,
  description,
  ...restProps
}: DeckProps) => {
  const AvatarWrapper = () => {
    return (
      <Avatar
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        size={2.4}
        sx={{
          color: 'p',
        }}
      />
    );
  };

  return (
    <Flex
      sx={{
        color: 'sc',
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: 1,
        cursor: 'pointer',
        transition: 'all 200ms',
        backgroundSize: 'cover',
        boxShadow: (theme) => `inset 0 0 0 1000px ${rgba(theme.s, 0.6)}`,
        background: (theme) => {
          let imageBG = '';
          if (image) {
            imageBG = `, url('${image}')`;
          }
          return `linear-gradient(0deg,${rgba(theme.s, 0.9)} 25 %, ${rgba(
            theme.sc,
            0.8
          )} 80%)${imageBG}`;
        },
        '&:hover': {
          '.deck__thumbnail': {
            opacity: 0,
          },
          '.deck_hover': {
            opacity: 1,
          },
        },
      }}
      role="link"
      tabIndex={0}
      {...restProps}
    >
      <Flex
        className="deck__thumbnail"
        sx={{
          flexDirection: 'column',
          padding: 3,
          position: 'absolute',
          transition: 'all 0.2s',
          bottom: '0',
          width: (theme) => `calc(100% - ${theme.space[4]}px)`,
        }}
      >
        <Heading2 sx={{ color: 'sc', mt: 'auto', overflowWrap: 'break-word' }}>
          <Truncate lines={4}>{title}</Truncate>
        </Heading2>
        <Flex>
          <AvatarWrapper />
          <HorizontalGroup margin={3} sx={{ ml: 'auto' }}>
            <HorizontalGroup margin={2}>
              <Icon type="cards" size={2.2} />
              <Body3Component sx={{ fontWeight: 'bold', color: 'sc' }}>
                {totalCards}
              </Body3Component>
            </HorizontalGroup>
            <HorizontalGroup margin={2}>
              <Icon type="followers" size={1.6} />
              <Body3Component sx={{ fontWeight: 'bold', color: 'sc' }}>
                {totalFollowers}
              </Body3Component>
            </HorizontalGroup>
          </HorizontalGroup>
        </Flex>
      </Flex>
      <Flex
        className="deck__hover"
        sx={{
          transition: 'all 0.2s',
          flexDirection: 'column',
          opacity: '0',
          padding: 3,
        }}
      >
        <Heading2
          sx={{
            color: 'sc',
            overflowWrap: 'break-word',
            marginBottom: 1,
          }}
        >
          <Truncate lines={2}>{title}</Truncate>
        </Heading2>
        <Body2Component sx={{ color: 'sc', mb: 3 }}>
          <Truncate lines={4}>{description}</Truncate>
        </Body2Component>
        <HorizontalGroup margin={1}>
          <AvatarWrapper />
          <VerticalGroup sx={{ mt: '1px' }}>
            <TinyText sx={{ color: 'sc' }}>
              {user.firstName} {user.lastName}
            </TinyText>
            <TinyText sx={{ color: 'sc' }}>{user.position}</TinyText>
          </VerticalGroup>
        </HorizontalGroup>
      </Flex>
    </Flex>
  );
};
