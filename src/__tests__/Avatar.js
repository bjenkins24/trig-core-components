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

    rerender(<Avatar image={testImage} firstName={firstName} />);
    expect(getByAltText(firstName)).toBeInTheDocument();

    rerender(<Avatar image={testImage} lastName={lastName} />);
    expect(getByAltText(lastName)).toBeInTheDocument();

    rerender(<Avatar image={testImage} email={email} />);
    expect(getByAltText(email)).toBeInTheDocument();
  });
});
