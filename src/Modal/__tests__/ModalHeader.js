import React from 'react';
import { render } from 'test/utils';
import ModalHeader from '../ModalHeader';

describe('<ModalHeader />', () => {
  it('renders and takes basic props', () => {
    const content = 'content';
    const { getByText } = render(<ModalHeader>{content}</ModalHeader>);
    expect(getByText(content)).toBeInTheDocument();
  });
});
