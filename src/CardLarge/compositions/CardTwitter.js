import React from 'react';
import PropTypes from 'prop-types';
import CardLarge from 'CardLarge';
import { Body1 } from 'Typography';

const CardTwitterTypes = {
  profileImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const CardTwitter = ({
  profileImage,
  name,
  handle,
  date,
  content,
  ...restProps
}) => {
  return (
    <CardLarge showUrl={false} {...restProps}>
      <div
        css={`
          text-align: center;
          background: #fff;
          padding: 0 ${({ theme }) => theme.space[4]}px;
        `}
      >
        <div
          css={`
            display: inline-block;
            margin: ${({ theme }) => theme.space[4] + theme.space[2]}px auto
              ${({ theme }) => theme.space[5]}px;
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
              src={profileImage}
              css={`
                border-radius: 50%;
                margin-right: 12px;
              `}
            />
            <div
              css={`
                text-align: left;
                max-width: 600px;
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
                  {handle} - {date}
                </span>
              </Body1>
              <Body1
                css={`
                  font-size: 15px;
                  display: block;
                `}
              >
                {content}
              </Body1>
            </div>
          </div>
        </div>
      </div>
    </CardLarge>
  );
};

CardTwitter.propTypes = CardTwitterTypes;

export default CardTwitter;
