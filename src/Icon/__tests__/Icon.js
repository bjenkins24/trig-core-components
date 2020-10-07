import React from 'react';
import { render } from 'test/utils';
import Icon from 'Icon';

jest.spyOn(console, 'error').mockImplementation(() => {});

describe('<Icon />', () => {
  it('renders and takes basic props', () => {
    let totalCount = 10;
    const { getByText, getByTitle, rerender, getByTestId } = render(
      <Icon type="collection" />
    );
    expect(getByTitle(/collection icon/i)).toBeInTheDocument();

    totalCount = 7;
    rerender(<Icon type="comment" count={totalCount} />);
    expect(getByText(`${totalCount}`)).toBeInTheDocument();
    expect(getByTitle(/comment icon/i)).toBeInTheDocument();
    expect(getByTestId('iconWrapper__countContainer')).toHaveStyleRule(
      'width',
      '1.4rem'
    );

    rerender(<Icon type="comment" count={12} />);
    expect(getByTestId('iconWrapper__countContainer')).toHaveStyleRule(
      'width',
      '1.7rem'
    );

    rerender(<Icon type="not-an-icon-type" />);
    expect(console.error).toHaveBeenCalledTimes(2);
  });
});
