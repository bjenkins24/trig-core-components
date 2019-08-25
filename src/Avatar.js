import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from './Icon';

const getSize = ({ size }) => {
  return css`
    width: ${size}rem;
    height: ${size}rem;
    font-size: ${size * 0.5}rem;
  `;
};

const Image = styled.img`
  border-radius: 50%;
  ${getSize};
`;

const Initials = styled.div`
  background: rgb(224, 224, 224);
  border-radius: 50%;
  display: flex;
  align-items: center;
  ${getSize};
`;

const Avatar = ({ image, size, firstName, lastName, email, ...restProps }) => {
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
    return <Image src={image} alt={getAlt()} {...restProps} />;
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

Avatar.defaultProps = {
  image: '',
  email: '',
  firstName: '',
  lastName: '',
  size: 3.2,
};

Avatar.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;
