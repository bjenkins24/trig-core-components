import React from 'react';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import Popover from 'Popover';
import { Heading1, Heading3, Heading4, TinyText } from 'Typography';
import { HorizontalGroup } from 'Groups';
import Image from 'Image';
import Icon, { FileIcon } from 'Icon';
import { format } from 'utils/dateFns';

const Container = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  width: 21.9rem;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
  border-radius: ${({ theme }) => theme.br};
  box-shadow: ${({ theme }) => theme.sh};
`;

const Hover = styled.div`
  /* For some reason there is an extra three pixels we need to get rid of */
  height: calc(100% - 0.3rem);
  width: 100%;
  background: ${({ theme }) => rgba(theme.s, 0.85)};
  opacity: 0;
  transition: opacity 0.15s;
  position: absolute;
  z-index: 1;
`;

const ClickableArea = styled.div`
  cursor: pointer;
  position: relative;
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
  margin: 0 0 3.2rem -1.6rem;
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
  bottom: -1.2rem;
  right: -0.4rem;
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

const TypeIcon = styled(FileIcon)`
  margin: 0 auto;
`;

const IconGroup = styled(HorizontalGroup).attrs({ margin: 0.4 })`
  cursor: pointer;
`;

const StyledIcon = styled(Icon).attrs({ size: 1.6, color: 's' })``;

const HorizontalDots = styled(StyledIcon)`
  margin: 0 0.4rem 0 auto;
  cursor: pointer;
`;

const Open = styled(HorizontalGroup)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HoverOpen = () => {
  return (
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
  );
};

const cardTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  renderAvatar: PropTypes.func,
  image: PropTypes.string,
  type: PropTypes.string.isRequired,
  totalFavorites: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  totalComments: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
  onClickComment: PropTypes.func.isRequired,
  onClickMore: PropTypes.func.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const defaultProps = {
  renderAvatar: () => <span data-testid="card__avatar-null" />,
  image: null,
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
  totalComments,
  onClick,
  onClickFavorite,
  onClickComment,
  onClickMore,
  ...restProps
}) => {
  return (
    <Container {...restProps}>
      <ClickableArea
        data-testid="card__clickable-area"
        onClick={() => onClick(id)}
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
          <TypeIcon type={type} size={1.6} />
        </Type>
        <ThumbnailContainer>
          {image ? (
            <>
              <HoverOpen />
              <Thumbnail src={image} alt={`Thumbnail for the card: ${title}`} />
            </>
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
      <HorizontalGroup>
        <div>
          <HorizontalGroup margin={1.6}>
            <IconGroup
              data-testid="card__favorite"
              onClick={() => onClickFavorite(id)}
            >
              {!isFavorited ? (
                <StyledIcon type="heart" />
              ) : (
                <StyledIcon type="heart-filled" />
              )}
              <TinyText color="s">{totalFavorites}</TinyText>
            </IconGroup>
            <IconGroup
              data-testid="card__comment"
              onClick={() => onClickComment(id)}
            >
              <StyledIcon type="comment" />
              <TinyText color="s">{totalComments}</TinyText>
            </IconGroup>
          </HorizontalGroup>
        </div>
        <Popover renderPopover={() => <div>Hello</div>}>
          <HorizontalDots data-testid="card__more" type="horizontal-dots" />
        </Popover>
      </HorizontalGroup>
    </Container>
  );
};

Card.propTypes = cardTypes;
Card.defaultProps = defaultProps;

export default Card;
