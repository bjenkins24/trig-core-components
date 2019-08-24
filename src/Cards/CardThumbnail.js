import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Truncate from 'react-truncate';
import { Heading3, Heading4, TinyText } from '../Typography';
import { HorizontalGroup } from '../Groups';
import Icon from '../Icon';
import { cardType } from '../utils/propTypes';
import { format } from '../utils/dateFns';

const Container = styled.div`
  background: ${({ theme }) => `rgb(${theme.cbl})`};
  width: 21.9rem;
  padding: 1.6rem 1.6rem 1.6rem 1.6rem;
  border-radius: 0.4rem;
  box-shadow: ${({ theme }) => theme.bs};
`;

const ClickableArea = styled.div`
  cursor: pointer;
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
  max-height: 300px;
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const Type = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.bs};
  position: absolute;
  bottom: -1.2rem;
  right: 1.2rem;
  background: ${({ theme }) => `rgb(${theme.cbl})`};
  display: flex;
  align-items: center;
`;

const TypeIcon = styled(Icon)`
  margin: 0 auto;
`;

const IconGroup = styled(HorizontalGroup).attrs({ margin: 0.4 })`
  cursor: pointer;
`;

const StyledIcon = styled(Icon).attrs({ size: 1.6 })`
  color: ${({ theme }) => `rgb(${theme.cs})`};
`;

const HorizontalDots = styled(StyledIcon).attrs({ type: 'horizontal-dots' })`
  margin: 0 0.4rem 0 auto;
  cursor: pointer;
`;

const CardThumbnail = ({
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
          <DateCreated color="cps">
            {`${format(dateTime, 'MMM d, yyyy')} at ${format(
              dateTime,
              'h:mm a'
            )}`}
          </DateCreated>
        </Meta>
        <ThumbnailContainer>
          <Thumbnail src={image} />
          <Type>
            <TypeIcon type={type} size={1.6} />
          </Type>
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
              <TinyText color="cs">{totalFavorites}</TinyText>
            </IconGroup>
            <IconGroup>
              <StyledIcon type="comments" />
              <TinyText color="cs">{totalComments}</TinyText>
            </IconGroup>
          </HorizontalGroup>
        </div>
        <HorizontalDots />
      </HorizontalGroup>
    </Container>
  );
};

CardThumbnail.defaultProps = {
  renderAvatar: () => null,
  type: null,
  image: null,
};

CardThumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  dateTime: PropTypes.instanceOf(Date).isRequired,
  renderAvatar: PropTypes.node,
  image: PropTypes.string,
  type: cardType,
  totalFavorites: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  totalComments: PropTypes.number.isRequired,
};

export default CardThumbnail;
