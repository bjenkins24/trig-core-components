import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './Icon';

const Image = styled.img`
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
`;

const Avatar = ({ image, firstName, lastName, email, ...restProps }) => {
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

  return (
    <Icon
      type="avatar"
      title={getAlt()}
      css={`
        color: rgb(${({ theme }) => theme.cpl});
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
};

Avatar.propTypes = {
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
};

export default Avatar;
