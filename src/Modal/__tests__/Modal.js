import React from 'react';
import { render } from 'test/utils';
import ReactModal from 'react-modal';
import Modal from '../index';

ReactModal.setAppElement('*');

describe('<Modal />', () => {
  it('renders and takes basic props', () => {
    const content = 'content';
    const { getByText, getByRole, getByLabelText, rerender } = render(
      <Modal isOpen onRequestClose={() => null} height={10}>
        {content}
      </Modal>
    );
    expect(getByText(content)).toBeInTheDocument();
    expect(getByRole('button', { hidden: true })).toBeInTheDocument();
    expect(getByLabelText(/close/i)).toBeInTheDocument();
    rerender(
      <Modal isOpen onRequestClose={() => null} appElement="*">
        {content}
      </Modal>
    );
  });
});
