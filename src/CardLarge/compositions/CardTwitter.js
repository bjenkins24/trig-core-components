import React from 'react';
import PropTypes from 'prop-types';
import CardLarge from 'CardLarge';
import { Body1 } from 'Typography';
import Truncate from 'react-truncate';
import { readableDate } from 'utils/dateFns';

const CardTwitterTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  content: PropTypes.string.isRequired,
  reply: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    replyingTo: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
  link: PropTypes.shape({
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
  images: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  reply: null,
  link: null,
  images: null,
};

const CardTwitter = ({
  avatar,
  name,
  handle,
  date,
  content,
  reply,
  link,
  images,
  ...restProps
}) => {
  return (
    <CardLarge showUrl={false} {...restProps}>
      <div
        css={`
          text-align: center;
          background: #fff;
          padding: 0 ${({ theme }) => theme.space[4]}px;
          border-radius: 0.4rem;
        `}
      >
        <div
          css={`
            display: inline-block;
            margin: ${({ theme }) => theme.space[4] + theme.space[2]}px auto
              ${({ theme }) => theme.space[5]}px;
            width: 100%;
          `}
        >
          <div
            css={`
              display: flex;
              align-items: flex-start;
            `}
          >
            <img
              alt={name}
              src={avatar}
              css={`
                border-radius: 50%;
                margin-right: 12px;
                max-width: 48px;
              `}
            />
            <div
              css={`
                text-align: left;
              `}
            >
              <Body1
                css={`
                  font-size: 15px;
                `}
              >
                <strong>{name}</strong>{' '}
                <span
                  css={`
                    color: ${({ theme }) => theme.ps[200]};
                  `}
                >
                  {handle} - {readableDate(date)}
                </span>
              </Body1>
              <Body1
                css={`
                  font-size: 15px;
                  display: block;
                  img {
                    width: 18px;
                    height: 18px;
                    vertical-align: -10%;
                  }
                  div {
                    display: inline;
                  }
                  span.card__link {
                    color: ${({ theme }) => theme.s};
                  }
                `}
                dangerouslySetInnerHTML={{ __html: content }}
              />
              {link && (
                <div
                  css={`
                    border: 1px solid ${({ theme }) => theme.ps[200]};
                    border-radius: ${({ theme }) => theme.br};
                    padding: ${({ theme }) =>
                      theme.space[2] + theme.space[1]}px;
                    color: ${({ theme }) => theme.bc};
                    margin-top: ${({ theme }) => theme.space[2]}px;
                    font-size: ${({ theme }) => theme.fontSizes[3]}px;
                  `}
                >
                  <div>
                    <img
                      src={link.imageSrc}
                      alt={link.title}
                      css={`
                        position: relative;
                        left: -${({ theme }) => theme.space[2] + theme.space[1]}px;
                        top: -${({ theme }) => theme.space[2] + theme.space[1]}px;
                        width: calc(
                          100% +
                            ${({ theme }) =>
                              theme.space[2] * 2 + theme.space[1] * 2}px
                        );
                        border-bottom: 1px solid ${({ theme }) => theme.ps[200]};
                      `}
                    />
                    <div
                      css={`
                        margin-right: ${({ theme }) => theme.space[1]}px;
                        margin-top: -${({ theme }) => theme.space[1]}px;
                      `}
                    >
                      <Truncate
                        lines={1}
                        css={`
                          color: ${({ theme }) => theme.ps[200]};
                        `}
                      >
                        {link.href}
                      </Truncate>
                    </div>
                    <Truncate lines={1}>{link.title}</Truncate>
                  </div>
                  <div
                    css={`
                      color: ${({ theme }) => theme.ps[200]};
                    `}
                    dangerouslySetInnerHTML={{ __html: link.description }}
                  />
                </div>
              )}
              {reply && (
                <div
                  css={`
                    border: 1px solid ${({ theme }) => theme.ps[200]};
                    border-radius: ${({ theme }) => theme.br};
                    padding: ${({ theme }) =>
                      theme.space[2] + theme.space[1]}px;
                    color: ${({ theme }) => theme.bc};
                    margin-top: ${({ theme }) => theme.space[2]}px;
                    font-size: ${({ theme }) => theme.fontSizes[3]}px;
                  `}
                >
                  <div
                    css={`
                      display: flex;
                      align-items: center;
                    `}
                  >
                    <img
                      src={reply.avatar}
                      alt={reply.name}
                      css={`
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        margin-right: ${({ theme }) => theme.space[1]}px;
                      `}
                    />
                    <span
                      css={`
                        font-size: ${({ theme }) => theme.fontSizes[2]}px;
                        font-weight: ${({ theme }) => theme.fontWeights.bold};
                        margin-right: ${({ theme }) => theme.space[1]}px;
                      `}
                    >
                      {reply.name}
                    </span>
                    <span
                      css={`
                        color: ${({ theme }) => theme.ps[200]};
                      `}
                    >
                      {reply.handle} - {reply.date}
                    </span>
                  </div>
                  <div
                    css={`
                      color: ${({ theme }) => theme.ps[200]};
                    `}
                    dangerouslySetInnerHTML={{ __html: reply.replyingTo }}
                  />
                  <div dangerouslySetInnerHTML={{ __html: reply.content }} />
                </div>
              )}
              {images && images.length === 1 && (
                <img
                  src={images[0]}
                  alt="Tweet"
                  css={`
                    width: 100%;
                    border-radius: ${({ theme }) => theme.br};
                    margin-top: ${({ theme }) => theme.space[2]}px;
                  `}
                />
              )}
              {images && images.length > 1 && (
                <div
                  css={`
                    display: flex;
                    width: calc(100% - 2px);
                    flex-wrap: wrap;
                    margin-top: ${({ theme }) => theme.space[2]}px;
                    border-radius: ${({ theme }) => theme.br};
                    overflow: hidden;
                    border: 1px solid ${({ theme }) => theme.ps[200]};
                  `}
                >
                  {images.map((image) => (
                    <div
                      key={image}
                      css={`
                        height: 160px;
                        overflow: hidden;
                        width: 50%;
                      `}
                    >
                      <img
                        alt="Tweet"
                        src={image}
                        css={`
                          width: 100%;
                          min-height: 160px;
                        `}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </CardLarge>
  );
};

CardTwitter.propTypes = CardTwitterTypes;
CardTwitter.defaultProps = defaultProps;

export default CardTwitter;
