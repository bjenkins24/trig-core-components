import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import ButtonSelect from 'Buttons/ButtonSelect';
import theme from '../../../stories/theme';

describe('<ButtonSelect />', () => {
  it('renders and takes basic props', () => {
    const title = 'title';
    const description = 'My cool description';
    const mockCallBack = jest.fn();
    const color = 'a1';

    const { getByText, getByTitle, container, getByRole } = render(
      <ButtonSelect
        title={title}
        iconType="comment"
        description={description}
        color={color}
        onClick={mockCallBack}
      />
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
    expect(getByTitle(/comment icon/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyleRule(
      'border-top',
      `0.4rem solid ${theme[color]}`
    );
    expect(getByRole('img')).toHaveStyleRule('color', theme.a1c);
    user.click(container.firstChild);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
