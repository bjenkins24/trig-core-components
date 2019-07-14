import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { H1, Body1, Body3 } from './Typography';
import Icon from './Icon';

const getSize = ({ size }) => {
  return css`
    width: ${size}rem;
    height: ${size}rem;
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
  const getInitials = () => {
    if (size >= 6.4) {
      return (
        <H1
          css={`
            margin: 0 auto;
          `}
        >
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </H1>
      );
    }
    if (size < 6.4 && size > 2.4) {
      return (
        <Body1
          css={`
            margin: 0 auto;
          `}
        >
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </Body1>
      );
    }
    if (size <= 2.4 && size > 1.6) {
      return (
        <Body3
          css={`
            margin: 0 auto;
          `}
        >
          {firstName.charAt(0)}
          {lastName.charAt(0)}
        </Body3>
      );
    }
    if (size <= 1.6) {
      return (
        <Body3
          css={`
            margin: 0 auto;
          `}
        >
          {lastName.charAt(0)}
        </Body3>
      );
    }
    return false;
  };

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

  if ((firstName || lastName) && size <= 9.6) {
    return (
      <Initials size={size} {...restProps}>
        {getInitials()}
      </Initials>
    );
  }

  return (
    <Icon
      type="avatar"
      title={getAlt()}
      size={size}
      css={`
        color: rgb(${({ theme }) => theme.cpl});
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
