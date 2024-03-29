import React, { useRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import OnImagesLoaded from 'react-on-images-loaded';
import { Body1, Heading1, Heading3, Heading4, TinyText } from 'Typography';
import { HorizontalGroup } from 'Groups';
import Image from 'Image';
import Icon from 'Icon';
import TypeIcon from 'Icon/TypeIcon';
import { format } from 'utils/dateFns';
import { truncateLines } from 'Card/truncateLines';
import Loading from '../Loading';
import PopoverNavigation from '../Popovers/PopoverNavigation';

const Container = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  width: ${({ width }) => (width === 'auto' ? width : `${width}px`)};
  border-radius: ${({ theme }) => theme.br};
  box-shadow: ${({ theme }) => theme.sh};
`;

const Hover = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ theme, hasDescription }) =>
    hasDescription ? rgba(theme.s, 0.95) : rgba(theme.s, 0.85)};
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
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  type: PropTypes.string,
  totalFavorites: PropTypes.number.isRequired,
  showTotalFavorites: PropTypes.bool,
  isFavorited: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  onClickFavorite: PropTypes.func.isRequired,
  navigationList: PropTypes.array.isRequired,
  href: PropTypes.string.isRequired,
  openInNewTab: PropTypes.bool,
  description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  showActions: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxImageHeight: PropTypes.number,
};

/* istanbul ignore next */
const defaultProps = {
  renderAvatar: () => <span data-testid="card__avatar-null" />,
  image: null,
  imageWidth: 0,
  imageHeight: 0,
  showTotalFavorites: true,
  onClick: () => null,
  openInNewTab: false,
  isLoading: false,
  description: '',
  type: '',
  showActions: true,
  width: 'auto',
  maxImageHeight: 240,
};

const Card = ({
  title,
  dateTime,
  renderAvatar,
  image,
  imageWidth,
  imageHeight,
  type,
  totalFavorites,
  showTotalFavorites,
  showActions,
  isFavorited,
  isLoading,
  navigationList,
  href,
  onClick,
  onClickFavorite,
  openInNewTab,
  description,
  width,
  maxImageHeight,
  ...restProps
}) => {
  const [areImagesloaded, setAreImagesLoaded] = useState(false);
  const [placeholderHeight, setPlaceholderHeight] = useState(0);
  const placeholderRef = useRef(null);
  const truncateRef = useRef(null);
  const clickableProps = {};
  /* istanbul ignore next */
  if (openInNewTab) {
    clickableProps.target = '_blank';
    clickableProps.onClick = (event) => onClick(event);
  }

  useEffect(() => {
    let timer = 0;
    if (placeholderRef.current) {
      /* istanbul ignore next */
      timer = setTimeout(() => {
        setPlaceholderHeight(placeholderRef.current.offsetHeight);
      });
      return () => clearTimeout(timer);
    }
    return () => null;
  }, [placeholderRef.current, image, title]);

  useEffect(() => {
    /* istanbul ignore next */
    if ((areImagesloaded || placeholderHeight) && truncateRef.current) {
      truncateRef.current.onResize();
    }
  }, [areImagesloaded, placeholderHeight]);

  let actualImageHeight = image
    ? Math.max(imageHeight, maxImageHeight)
    : placeholderHeight;

  let ratio = 0;
  if (image) {
    ratio = width / imageWidth;
    actualImageHeight = Math.floor(imageHeight * ratio);
  }

  const truncatedLines = useMemo(() => {
    return truncateLines({
      actualImageHeight,
      description,
    });
  }, [title, placeholderHeight, image, width, actualImageHeight, description]);

  return (
    <Container width={width} {...restProps}>
      <ClickableArea
        data-testid="card__clickable-area"
        onClick={(event) => {
          event.preventDefault();
          onClick(event);
        }}
        href={href}
        rel="noopener"
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
        {type && (
          <Type>
            <CardType url={href} type={type} size={1.6} />
          </Type>
        )}
        <ThumbnailContainer>
          <Hover hasDescription={!!description} data-testid="card__hover">
            {!description || truncatedLines === 0 ? (
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
            ) : (
              <div
                css={`
                  padding: ${({ theme }) => theme.space[3]}px;
                `}
              >
                <Body1 color="sc" fontWeight="bold">
                  <Truncate lines={truncatedLines} ref={truncateRef}>
                    {description}
                  </Truncate>
                </Body1>
              </div>
            )}
          </Hover>
          {image ? (
            <OnImagesLoaded
              onLoaded={
                /* istanbul ignore next */
                () => setAreImagesLoaded(true)
              }
            >
              <Thumbnail src={image} alt={`Thumbnail for the card: ${title}`} />
            </OnImagesLoaded>
          ) : (
            <PlaceholderThumbnail ref={placeholderRef}>
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
        {showActions && (
          <>
            <div>
              <HorizontalGroup margin={1.6}>
                <IconGroup
                  data-testid="card__favorite"
                  onClick={(event) => onClickFavorite(event)}
                >
                  {!isFavorited ? (
                    <StyledIcon type="heart" title="Favorite" />
                  ) : (
                    <StyledIcon type="heart-filled" title="Favorited" />
                  )}
                  {showTotalFavorites && (
                    <TinyText
                      color="s"
                      className="card__meta-text"
                      data-testid="total_favorites"
                    >
                      {totalFavorites}
                    </TinyText>
                  )}
                </IconGroup>
              </HorizontalGroup>
            </div>
            {isLoading && (
              <Loading
                size={1.6}
                title="Syncing Card..."
                color="ps.200"
                css={`
                  margin-left: auto;
                  margin-right: ${({ theme }) => theme.space[2]}px;
                `}
              />
            )}
            {!isLoading && (
              <PopoverNavigation
                placement="top"
                navigationList={navigationList}
              >
                <HorizontalDots
                  title="More Options"
                  data-testid="card__more"
                  type="horizontal-dots"
                />
              </PopoverNavigation>
            )}
          </>
        )}
      </Footer>
    </Container>
  );
};

Card.propTypes = cardTypes;
Card.defaultProps = defaultProps;

export default Card;
