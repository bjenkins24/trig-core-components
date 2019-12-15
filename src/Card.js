import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import { Heading3, Heading4, TinyText } from 'Typography';
import { HorizontalGroup } from 'Groups';
import Image from 'Image';
import Icon from 'Icon';
import { cardType } from 'utils/propTypes';
import { format } from 'utils/dateFns';

const Container = styled.div`
  background: ${({ theme }) => theme.bs[200]};
  width: 21.9rem;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
  border-radius: ${({ theme }) => theme.br};
  box-shadow: ${({ theme }) => theme.sh};
`;

const ClickableArea = styled.div`
  cursor: pointer;
  position: relative;
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
  z-index: 1;
`;

const TypeIcon = styled(Icon)`
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

const cardTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  renderAvatar: PropTypes.func,
  image: PropTypes.string,
  type: cardType.isRequired,
  totalFavorites: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  totalComments: PropTypes.number.isRequired,
};

const defaultProps = {
  renderAvatar: () => <span data-testid="card__avatar-null" />,
  image: null,
};

const Card = ({
  title,
  dateTime,
  renderAvatar,
  image,
  type,
  totalFavorites,
  isFavorited,
  totalComments,
}) => {
  return (
    <Container>
      <ClickableArea>
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
          <Thumbnail src={image} alt={`Thumbnail for the card: ${title}`} />
        </ThumbnailContainer>
      </ClickableArea>
      <HorizontalGroup>
        <div>
          <HorizontalGroup margin={1.6}>
            <IconGroup>
              {!isFavorited ? (
                <StyledIcon type="heart" />
              ) : (
                <StyledIcon type="heart-filled" />
              )}
              <TinyText color="s">{totalFavorites}</TinyText>
            </IconGroup>
            <IconGroup>
              <StyledIcon type="comments" />
              <TinyText color="s">{totalComments}</TinyText>
            </IconGroup>
          </HorizontalGroup>
        </div>
        <HorizontalDots type="horizontal-dots" />
      </HorizontalGroup>
    </Container>
  );
};

Card.propTypes = cardTypes;
Card.defaultProps = defaultProps;

export default Card;
