import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from 'Icon';
import { Body3, Body2, Body1, Heading2 } from 'Typography';
import { rgba } from 'polished';
import Truncate from 'react-truncate';

const MetaContainer = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  bottom: 0;
  padding: 32px 16px 16px;
  display: flex;
  border-bottom-left-radius: ${({ theme }) => theme.br};
  border-bottom-right-radius: ${({ theme }) => theme.br};
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 45%,
    rgba(255, 255, 255, 0.9) 75%,
    rgba(255, 255, 255, 0.7) 80%,
    rgba(255, 255, 255, 0.2) 90%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const MetaHoverContainer = styled.div`
  position: absolute;
  width: calc(100% - 32px);
  bottom: 0;
  padding: 32px 16px 16px;
  display: flex;
`;

const Hover = styled.div`
  width: 100%;
  background: ${({ theme }) => rgba(theme.p, 0.8)};
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: none;
  border-radius: ${({ theme }) => theme.br};
`;

const Container = styled.a`
  max-width: 800px;
  display: block;
  cursor: pointer;
  &:hover ${Hover} {
    display: block;
  }
  &:hover ${MetaContainer} {
    display: none;
  }
`;

const Trash = styled(Icon)`
  margin: 0 auto;
`;

const TrashButton = styled.button`
  cursor: pointer;
  border: 0;
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  width: 32px; 
  height 32px; 
  z-index: 2;
  border-radius: 50%;
  background: ${({ theme }) => theme.pc}; 
  align-items: center;
  &:hover {
    background: ${({ theme }) => theme.s};
    ${Trash} svg {
      color: ${({ theme }) => theme.sc};
    }
  }
`;

const StyledIcon = styled(Icon).attrs({ size: 1.6 })`
  margin-right: 12px;
`;

const IconGroup = styled.div`
  display: flex;
  cursor: pointer;
  &:hover ${StyledIcon} svg,
  &:hover .card__meta-text {
    color: ${({ theme, isHover }) => {
      return isHover ? theme.ss[200] : theme.ss[700];
    }};
  }
`;

/* eslint-disable react/prop-types */
const MetaContent = ({
  isHover,
  isFavorited,
  onClickFavorite,
  showTotalFavorites,
  totalFavorites,
  showTotalViews,
  totalViews,
}) => {
  return (
    <>
      <IconGroup
        data-testid="card__favorite"
        onClick={(event) => onClickFavorite(event)}
        isHover={isHover}
        className="card-favorite"
      >
        {!isFavorited ? (
          <StyledIcon
            type="heart"
            color={isHover ? 'pc' : 's'}
            title="Favorite"
          />
        ) : (
          <StyledIcon
            color={isHover ? 'pc' : 's'}
            type="heart-filled"
            title="Favorited"
          />
        )}
        {showTotalFavorites && (
          <Body3 className="card__meta-text" color={isHover ? 'pc' : 's'}>
            {totalFavorites}
          </Body3>
        )}
      </IconGroup>
      {showTotalViews && (
        <div
          css={`
            display: flex;
            margin-left: auto;
          `}
        >
          <Icon
            type="eye"
            size={1.6}
            color={isHover ? 'pc' : 's'}
            css={`
              margin-right: 12px;
            `}
          />
          <Body3 color={isHover ? 'pc' : 's'}>{totalViews}</Body3>
        </div>
      )}
    </>
  );
  /* eslint-enable react/prop-types */
};

const CardLargeTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClickTrash: PropTypes.func.isRequired,
  totalViews: PropTypes.number.isRequired,
  totalFavorites: PropTypes.number.isRequired,
  isFavorited: PropTypes.bool.isRequired,
  onClickFavorite: PropTypes.func.isRequired,
  showTotalFavorites: PropTypes.bool,
  showTotalViews: PropTypes.bool,
  showUrl: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  title: null,
  content: null,
  showTotalFavorites: true,
  showUrl: true,
  showTotalViews: true,
  image: null,
  children: null,
};

const CardLarge = ({
  image,
  title,
  content,
  href,
  onClickTrash,
  showTotalViews,
  totalViews,
  isFavorited,
  onClickFavorite,
  showTotalFavorites,
  totalFavorites,
  showUrl,
  children,
}) => {
  const displayUrl = href.replace(/(^\w+:|^)\/\//, '');
  return (
    <Container
      css={`
        text-decoration: none;
      `}
      data-testid="card__container"
      onClick={(event) => {
        if (
          event.target.classList.contains('trash-icon') ||
          event.target.parentElement.classList.contains('trash-icon') ||
          event.target.parentElement.parentElement.classList.contains(
            'trash-icon'
          ) ||
          event.target.parentElement.parentElement.parentElement.classList.contains(
            'trash-icon'
          ) ||
          event.target.classList.contains('card-favorite') ||
          event.target.parentElement.classList.contains('card-favorite') ||
          event.target.parentElement.parentElement.classList.contains(
            'card-favorite'
          ) ||
          event.target.parentElement.parentElement.parentElement.classList.contains(
            'card-favorite'
          )
        ) {
          event.preventDefault();
        }
      }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        css={`
          position: relative;
        `}
      >
        <Hover>
          <TrashButton
            onClick={onClickTrash}
            className="trash-icon"
            data-testid="card__trash"
          >
            <Trash size={1.6} type="trash" color="s" />
          </TrashButton>
          {showUrl && (
            <div
              css={`
                background: ${({ theme }) => theme.pc};
                width: calc(100% - 64px);
                margin: 0 16px;
                padding: 16px;
                border-radius: ${({ theme }) => theme.br};
                position: absolute;
                bottom: 56px;
              `}
            >
              <Body2 color="s">
                <Truncate lines={1}>{displayUrl}</Truncate>
              </Body2>
            </div>
          )}
          <MetaHoverContainer>
            <MetaContent
              isHover
              isFavorited={isFavorited}
              onClickFavorite={onClickFavorite}
              totalViews={totalViews}
              totalFavorites={totalFavorites}
              showTotalFavorites={showTotalFavorites}
              showTotalViews={showTotalViews}
            />
          </MetaHoverContainer>
        </Hover>
        {children && children}
        {image && (
          <img
            css={`
              width: 100%;
              border-radius: 0.6rem;
              position: relative;
              display: block;
            `}
            src={image}
            alt={`Screenshot for the card: ${title}`}
          />
        )}
        {!image && !children && (
          <div
            css={`
              padding: ${({ theme }) =>
                `${theme.space[5]}px ${theme.space[5]}px ${theme.space[5]}px`};
              background: #fff;
              border-radius: ${({ theme }) => theme.br};
            `}
          >
            {title && (
              <Heading2 color="p">
                <Truncate lines={3}>{title}</Truncate>
              </Heading2>
            )}
            {content && (
              <Body1>
                <Truncate lines={15}>{content}</Truncate>
              </Body1>
            )}
            {!title && !content && (
              <Heading2 color="p">
                <Truncate lines={2}>{displayUrl}</Truncate>
              </Heading2>
            )}
          </div>
        )}
        <MetaContainer>
          <MetaContent
            isHover={false}
            isFavorited={isFavorited}
            totalFavorites={totalFavorites}
            totalViews={totalViews}
            onClickFavorite={onClickFavorite}
            showTotalFavorites={showTotalFavorites}
            showTotalViews={showTotalViews}
          />
        </MetaContainer>
      </div>
    </Container>
  );
};

CardLarge.propTypes = CardLargeTypes;
CardLarge.defaultProps = defaultProps;

export default CardLarge;
