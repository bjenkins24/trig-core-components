import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Checkbox from 'Form/Checkbox';

const labelText = 'My Checkbox';

describe('<Checkbox />', () => {
  it('renders and takes basic props', () => {
    const {
      getByText,
      getByRole,
      getByTestId,
      getByTitle,
      queryByTitle,
      rerender,
    } = render(<Checkbox />);

    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(queryByTitle(/check icon/i)).toBeNull();
    user.click(getByTestId('checkbox-icon'));
    expect(getByTitle(/check icon/i)).toBeInTheDocument();

    rerender(<Checkbox label={labelText} />);
    expect(getByText(labelText)).toBeInTheDocument();
  });

  it('shows and hides check', () => {
    const { getByTitle, getByRole, queryByTitle, container } = render(
      <Checkbox checked width={20} />
    );
    expect(container.firstChild).toMatchSnapshot();

    expect(getByTitle(/check icon/i)).toBeInTheDocument();
    user.click(getByRole('checkbox'));
    expect(queryByTitle(/check icon/i)).toBeNull();
  });

  it('takes custom onChange', () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(<Checkbox onChange={mockCallback} />);
    user.click(getByRole('checkbox'));
    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});
