import React from 'react';
import { render } from 'test/utils';
import Avatar from 'Avatar';

const firstName = 'brian';
const lastName = 'jenkins';
const fullName = `${firstName} ${lastName}`;
const firstInitial = firstName.charAt(0);
const lastInitial = lastName.charAt(0);
const initials = `${firstInitial}${lastInitial}`;

describe('<Avatar />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, rerender, getByText } = render(<Avatar />);

    expect(getByTitle('A user')).toBeTruthy();

    rerender(<Avatar firstName={firstName} lastName={lastName} />);
    expect(getByText(initials)).toBeTruthy();
  });

  it('only shows one initial with small avatar', () => {
    // Small avatars shouldn't render the first name character
    const { queryByText, getByText } = render(
      <Avatar size={1.6} firstName={firstName} lastName={lastName} />
    );
    expect(queryByText(initials)).toBeNull();
    expect(getByText(`${lastInitial}`)).toBeTruthy();
  });

  it('only renders one initial', () => {
    const { getByText } = render(<Avatar firstName={firstName} />);
    expect(getByText(`${firstInitial}`)).toBeTruthy();
  });

  it('renders image if it exists', () => {
    const testImage = 'testimage.png';
    const { queryByText, getByAltText, rerender } = render(
      <Avatar image={testImage} firstName={firstName} lastName={lastName} />
    );
    expect(queryByText(initials)).toBeNull();
    expect(getByAltText(fullName)).toBeTruthy();

    rerender(<Avatar image={testImage} firstName={firstName} />);
    expect(getByAltText(firstName)).toBeTruthy();

    rerender(<Avatar image={testImage} lastName={lastName} />);
    expect(getByAltText(lastName)).toBeTruthy();
  });
});
