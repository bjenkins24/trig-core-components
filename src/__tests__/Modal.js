import React from 'react';
import { render } from 'test/utils';
import Modal from 'Modal';
import ReactModal from 'react-modal';

ReactModal.setAppElement('*');

describe('<Modal />', () => {
  it('renders and takes basic props', () => {
    const content = 'content';
    const { getByText, getByRole, getByLabelText } = render(
      <Modal isOpen>{content}</Modal>
    );
    expect(getByText(content)).toBeInTheDocument();
    expect(getByRole('button', { hidden: true })).toBeInTheDocument();
    expect(getByLabelText(/close/i)).toBeInTheDocument();
  });
});
