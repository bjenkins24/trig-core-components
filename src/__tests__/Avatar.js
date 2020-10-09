import React from 'react';
import { render } from 'test/utils';
import Avatar from 'Avatar';

const firstName = 'brian';
const lastName = 'jenkins';
const email = 'sam_sung@example.com';
const fullName = `${firstName} ${lastName}`;
const firstInitial = firstName.charAt(0);
const lastInitial = lastName.charAt(0);
const initials = `${firstInitial}${lastInitial}`;

describe('<Avatar />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, rerender, getByText } = render(<Avatar />);

    expect(getByTitle('A user')).toBeInTheDocument();

    rerender(<Avatar firstName={firstName} lastName={lastName} />);
    expect(getByText(initials)).toBeInTheDocument();
  });

  it('only shows one initial with small avatar', () => {
    // Small avatars shouldn't render the first name character
    const { queryByText, getByText } = render(
      <Avatar size={1.6} firstName={firstName} lastName={lastName} />
    );
    expect(queryByText(initials)).toBeNull();
    expect(getByText(`${lastInitial}`)).toBeInTheDocument();
  });

  it('only renders one initial', () => {
    const { getByText } = render(<Avatar firstName={firstName} />);
    expect(getByText(`${firstInitial}`)).toBeInTheDocument();
  });

  it('renders image if it exists', () => {
    const testImage = 'testimage.png';
    const { queryByText, getByAltText, rerender } = render(
      <Avatar image={testImage} firstName={firstName} lastName={lastName} />
    );
    expect(queryByText(initials)).toBeNull();
    expect(getByAltText(fullName)).toBeInTheDocument();

    rerender(
      <Avatar
        image={testImage}
        imageWidth={12.8}
        imageHeight={12.8}
        firstName={firstName}
      />
    );
    expect(getByAltText(firstName)).toBeInTheDocument();

    rerender(
      <Avatar
        imageWidth={15}
        imageHeight={12.8}
        image={testImage}
        lastName={lastName}
      />
    );
    expect(getByAltText(lastName)).toBeInTheDocument();

    rerender(
      <Avatar
        imageWidth={12.8}
        imageHeight={15}
        image={testImage}
        email={email}
      />
    );
    expect(getByAltText(email)).toBeInTheDocument();
  });
});
