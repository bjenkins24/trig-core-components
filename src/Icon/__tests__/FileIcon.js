import React from 'react';
import { render } from 'test/utils';
import FileIcon from 'Icon/FileIcon';

describe('<FileIcon />', () => {
  it('renders and takes basic props', () => {
    const { getByTitle, rerender } = render(<FileIcon type="ppt" />);
    expect(getByTitle(/microsoft powerpoint icon/i)).toBeInTheDocument();
    rerender(<FileIcon type="notarealtype" />);
    expect(getByTitle(/file icon/i)).toBeInTheDocument();
  });
});
