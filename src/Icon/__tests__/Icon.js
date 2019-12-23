import React from 'react';
import { render } from 'test/utils';
import Icon from 'Icon';

describe('<Icon />', () => {
  it('renders and takes basic props', () => {
    let totalCount = 10;
    const { getByText, getByTitle, rerender, getByTestId } = render(
      <Icon type="docx" count={totalCount} />
    );
    expect(getByText(`${totalCount}`)).toBeInTheDocument();
    expect(getByTitle(/microsoft word document icon/i));

    totalCount = 7;
    rerender(<Icon type="comment" count={totalCount} />);
    expect(getByText(`${totalCount}`)).toBeInTheDocument();
    expect(getByTitle(/comment icon/i)).toBeInTheDocument();

    rerender(<Icon defaultIfNoExtension="file" type="tsx" />);
    expect(getByTestId(/file/i)).toBeInTheDocument();
  });
});
