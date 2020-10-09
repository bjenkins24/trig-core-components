import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from 'Icon';

const getSize = ({ size }) => {
  return css`
    width: ${size}rem;
    height: ${size}rem;
    font-size: ${(size * 0.45).toFixed(2)}rem;
  `;
};

const Image = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Initials = styled.div`
  background: rgb(224, 224, 224);
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  color: #2c2929;
  ${getSize};
`;

const avatarTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  size: PropTypes.number,
  email: PropTypes.string,
};

const defaultProps = {
  image: '',
  firstName: '',
  lastName: '',
  size: 3.2,
  email: '',
  imageWidth: null,
  imageHeight: null,
};

const Avatar = ({
  image,
  imageWidth,
  imageHeight,
  size,
  firstName,
  lastName,
  email,
  ...restProps
}) => {
  const getAlt = () => {
    if (firstName && lastName) {
      return `${firstName} ${lastName}`;
    }
    if (firstName) {
      return firstName;
    }
    if (lastName) {
      return lastName;
    }
    if (email) {
      return email;
    }
    return 'A user';
  };

  if (image) {
    let width = '100%';
    let height = '100%';
    if (imageWidth > imageHeight) {
      height = `${size}rem`;
    }
    if (imageHeight > imageWidth) {
      width = `${size}rem`;
    }

    return (
      <div
        size={size}
        css={`
          border-radius: 50%;
          flex-shrink: 0;
          ${getSize}
        `}
        {...restProps}
      >
        <Image src={image} width={width} height={height} alt={getAlt()} />
      </div>
    );
  }

  if (firstName || lastName) {
    return (
      <Initials size={size} {...restProps}>
        <span
          css={`
            margin: 0 auto;
          `}
        >
          {size > 1.6 && firstName.charAt(0)}
          {lastName.charAt(0)}
        </span>
      </Initials>
    );
  }

  return (
    <Icon
      type="avatar"
      title={getAlt()}
      size={size}
      css={`
        color: ${({ theme }) => theme.ps[200]};
        ${getSize};
      `}
      {...restProps}
    />
  );
};

Avatar.propTypes = avatarTypes;
Avatar.defaultProps = defaultProps;

export default Avatar;
