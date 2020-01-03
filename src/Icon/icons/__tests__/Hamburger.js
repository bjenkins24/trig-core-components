import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Icon from 'Icon';

describe('<Icon type="hamburger" />', () => {
  it('changes to close button and back when clicked ', () => {
    const mockCallBack = jest.fn();
    const { container, getByTestId } = render(
      <Icon type="hamburger" onClick={mockCallBack} />
    );
    expect(getByTestId('hamburger__bar2')).toHaveStyleRule('opacity', '1');
    user.click(container.firstChild);
    expect(mockCallBack.mock.calls.length).toEqual(1);
    expect(getByTestId('hamburger__bar2')).toHaveStyleRule('opacity', '0');
    user.click(container.firstChild);
    expect(getByTestId('hamburger__bar2')).toHaveStyleRule('opacity', '1');
  });
});
