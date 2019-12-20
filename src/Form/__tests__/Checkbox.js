import React from 'react';
import { render } from 'test/utils';
import user from '@testing-library/user-event';
import Checkbox from 'Form/Checkbox';

const labelText = 'My Checkbox';

describe('<Checkbox />', () => {
  it('renders and takes basic props', () => {
    const { getByText, getByRole, getByTestId, rerender } = render(
      <Checkbox />
    );

    expect(getByTestId('labelContainer')).toBeTruthy();
    expect(getByRole('checkbox')).toBeTruthy();

    rerender(<Checkbox label={labelText} />);
    expect(getByText(labelText)).toBeTruthy();
  });

  it('renders custom with render props', () => {
    const randomText = 'Custom Label';
    const { getByRole, getByText, getByTestId } = render(
      <Checkbox>
        {({ renderCheckbox }) => {
          return (
            <div>
              {randomText} {renderCheckbox()}
            </div>
          );
        }}
      </Checkbox>
    );

    // It needs to be in a label container
    expect(getByTestId('labelContainer')).toBeTruthy();
    expect(getByRole('checkbox')).toBeTruthy();
    expect(getByText(randomText)).toBeTruthy();
  });

  it('shows and hides check', () => {
    const { getByTitle, getByRole, queryByTitle } = render(
      <Checkbox checked />
    );
    expect(getByTitle(/check icon/i)).toBeTruthy();
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
