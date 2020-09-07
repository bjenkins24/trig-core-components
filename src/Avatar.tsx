/** @jsx jsx */
import { jsx, Image, Text, Flex } from 'theme-ui';
import Icon from 'Icon';

interface AvatarProps {
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: string;
  size?: number;
}

const Avatar = ({
  image = '',
  size = 3.2,
  firstName = '',
  lastName = '',
  email = '',
  ...restProps
}: AvatarProps) => {
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

  const getSize = () => {
    return {
      width: `${size}rem`,
      height: `${size}rem`,
      fontSize: `${(size * 0.45).toFixed(2)}rem`,
    };
  };

  if (image) {
    return (
      <Image
        sx={{ borderRadius: '50%', flexShrink: 0, ...getSize() }}
        src={image}
        alt={getAlt()}
        {...restProps}
      />
    );
  }

  if (firstName || lastName) {
    return (
      <Flex
        sx={{
          background: 'rgb(224, 224, 224)',
          borderRadius: '50%',
          flexShrink: 0,
          alignItems: 'center',
          color: '#2c2929',
          ...getSize(),
        }}
        {...restProps}
      >
        <Text sx={{ margin: '0 auto' }}>
          {size > 1.6 && firstName.charAt(0)}
          {lastName.charAt(0)}
        </Text>
      </Flex>
    );
  }

  return (
    <Icon
      type="avatar"
      title={getAlt()}
      size={size}
      sx={{
        color: 'ps.200',
        ...getSize(),
      }}
      {...restProps}
    />
  );
};

export default Avatar;
