import React from 'react';
import { render } from 'test/utils';
import TypeIcon from '../TypeIcon';

describe('<TypeIcon />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, rerender } = render(
      <TypeIcon type="application/powerpoint" />
    );
    expect(getByTitle(/microsoft powerpoint icon/i)).toBeInTheDocument();
    rerender(<TypeIcon type="notarealtype" />);
    expect(getByTitle(/file icon/i)).toBeInTheDocument();
  });
});
