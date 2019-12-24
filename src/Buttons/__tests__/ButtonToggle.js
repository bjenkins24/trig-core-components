import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import ButtonToggle from 'Buttons/ButtonToggle';
import Icon from 'Icon';
import theme from '../../../stories/theme';

jest.spyOn(console, 'error').mockImplementation(() => {});

describe('<ButtonToggle />', () => {
  it('renders and takes basic props', () => {
    const mockCallBack = jest.fn();
    const testId = 'secondButton';
    const { getAllByRole, getByTestId } = render(
      <ButtonToggle>
        <Icon type="row-view" size={1.6} />
        <Icon
          type="thumbnail-view"
          onClick={mockCallBack}
          data-testid={testId}
          size={1.6}
        />
        <Icon type="comment" size={1.6} />
      </ButtonToggle>
    );
    const buttons = getAllByRole('button');

    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[0]).toHaveStyleRule('color', theme.sc);
    expect(console.error).toHaveBeenCalledTimes(2);
    user.click(buttons[1]);
    expect(buttons[1]).toHaveStyleRule('color', theme.sc);
    expect(buttons[0]).toHaveStyleRule('color', theme.s);
    const secondIcon = getByTestId(testId);
    user.click(secondIcon);
    // If we didn't override the onClick for the icon this would
    // get called three times
    expect(mockCallBack.mock.calls.length).toEqual(2);
  });
});
