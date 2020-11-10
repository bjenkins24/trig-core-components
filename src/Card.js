import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import { Heading1, Heading3, Heading4, TinyText } from 'Typography';
import { HorizontalGroup } from 'Groups';
import Image from 'Image';
import Icon from 'Icon';
import TypeIcon from 'Icon/TypeIcon';
import { format } from 'utils/dateFns';
import PopoverNavigation from './Popovers/PopoverNavigation';

const Container = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  width: 25.1rem;
  border-radius: ${({ theme }) => theme.br};
  box-shadow: ${({ theme }) => theme.sh};
`;

const Hover = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => rgba(theme.s, 0.85)};
  opacity: 0;
  transition: opacity 0.15s;
  position: absolute;
  z-index: 1;
`;

const ClickableArea = styled.a`
  cursor: pointer;
  display: block;
  padding: 1.6rem 1.6rem 0 1.6rem;
  position: relative;
  text-decoration: none;
  &:hover ${Hover} {
    opacity: 1;
  }
`;

const Title = styled(Heading3)`
  margin-bottom: 0.8rem;
`;

const Meta = styled(HorizontalGroup)`
  margin-bottom: 1.6rem;
`;

const DateCreated = styled(Heading4)`
  margin-bottom: 0;
`;

const ThumbnailContainer = styled.div`
  width: calc(3.2rem + 100%);
  margin-left: -1.6rem;
  position: relative;
  max-height: 40rem;
  overflow: hidden;
  position: relative;
`;

const Thumbnail = styled(Image)`
  width: 100%;
`;

const Type = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.sh};
  position: absolute;
  bottom: -15px;
  right: 1.6rem;
  background: ${({ theme }) => theme.bs[200]};
  display: flex;
  align-items: center;
  z-index: 2;
`;

const PlaceholderThumbnail = styled.div`
  background: ${({ theme }) => theme.s};
  color: ${({ theme }) => theme.sc};
  padding: 3.2rem 1.6rem 1.6rem;
`;

const Footer = styled(HorizontalGroup)`
  padding: 2.9rem 1.6rem 1.6rem 1.6rem;
`;

const CardType = styled(TypeIcon)`
  margin: 0 auto;
`;

const StyledIcon = styled(Icon).attrs({ size: 1.6, color: 's' })``;

const IconGroup = styled(HorizontalGroup).attrs({ margin: 0.4 })`
  cursor: pointer;
  &:hover ${StyledIcon} svg,
  &:hover .card__meta-text {
    color: ${({ theme }) => theme.p};
  }
`;

const HorizontalDots = styled(StyledIcon)`
  margin: 0 0.8rem 0 auto;
  cursor: pointer;
  &:hover svg {
    color: ${({ theme }) => theme.p};
  }
`;

const Open = styled(HorizontalGroup)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const cardTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  renderAvatar: PropTypes.func,
  image: PropTypes.string,
  type: PropTypes.string.isRequired,
  totalFavorites: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  navigationList: PropTypes.array.isRequired,
  href: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
};

const defaultProps = {
  renderAvatar: () => <span data-testid="card__avatar-null" />,
  image: null,
  openInNewTab: false,
};

const Card = ({
  title,
  dateTime,
  id,
  renderAvatar,
  image,
  type,
  totalFavorites,
  isFavorited,
  navigationList,
  href,
  onClick,
  onClickFavorite,
  openInNewTab,
  ...restProps
}) => {
  const clickableProps = {};
  /* istanbul ignore next */
  if (openInNewTab) {
    clickableProps.target = '_blank';
    clickableProps.onClick = () => onClick(id);
  }

  return (
    <Container {...restProps}>
      <ClickableArea
        data-testid="card__clickable-area"
        onClick={(e) => {
          e.preventDefault();
          onClick(id);
        }}
        href={href}
        {...clickableProps}
      >
        <Title>
          <Truncate lines={4}>{title}</Truncate>
        </Title>
        <Meta margin={0.8}>
          {renderAvatar()}
          <DateCreated>
            {`${format(dateTime, 'MMM d, yyyy')} at ${format(
              dateTime,
              'h:mm a'
            )}`}
          </DateCreated>
        </Meta>
        <Type>
          <CardType url={href} type={type} size={1.6} />
        </Type>
        <ThumbnailContainer>
          <Hover>
            <Open margin={0.8}>
              <Heading1
                color="sc"
                css={`
                  margin: 0;
                `}
              >
                Open
              </Heading1>
              <Icon type="open" color="sc" />
            </Open>
          </Hover>
          {image ? (
            <Thumbnail src={image} alt={`Thumbnail for the card: ${title}`} />
          ) : (
            <PlaceholderThumbnail>
              <Heading1
                css={`
                  color: ${({ theme }) => theme.sc};
                `}
              >
                <Truncate lines={4}>{title}</Truncate>
              </Heading1>
            </PlaceholderThumbnail>
          )}
        </ThumbnailContainer>
      </ClickableArea>
      <Footer>
        <div>
          <HorizontalGroup margin={1.6}>
            <IconGroup
              data-testid="card__favorite"
              onClick={() => onClickFavorite(id)}
            >
              {!isFavorited ? (
                <StyledIcon type="heart" title="Favorite" />
              ) : (
                <StyledIcon type="heart-filled" title="Favorited" />
              )}
              <TinyText color="s" className="card__meta-text">
                {totalFavorites}
              </TinyText>
            </IconGroup>
          </HorizontalGroup>
        </div>
        <PopoverNavigation placement="top" navigationList={navigationList}>
          <HorizontalDots
            title="More Options"
            data-testid="card__more"
            type="horizontal-dots"
          />
        </PopoverNavigation>
      </Footer>
    </Container>
  );
};

Card.propTypes = cardTypes;
Card.defaultProps = defaultProps;

export default Card;
